import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AlertService, AuthService, ConfiguracionInicialResponse, 
  ConfiguracionInicialService, EncuestasService, FileService, SisEnumeradoService, TIPO_ARCHIVO_ENUMERADO,TIPO_ENCUESTA } from "@app/_core";
import { FormBuilder } from '@angular/forms';
import { es_ES } from 'ng-zorro-antd/i18n';
import { NzI18nService, NzNotificationService } from 'ng-zorro-antd';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-gestion-ext',
  templateUrl: './gestion-ext.component.html',
  styleUrls: ['./gestion-ext.component.css']
})
export class GestionExtComponent implements OnInit {
  breadcrumb: any;
  show_welcome=true;
  show_main_list=false;
  constructor(
    private _fileService: FileService,
    private _authService: AuthService,
    private i18n: NzI18nService,
    private file_Service:FileService,
    private fb: FormBuilder,
    private notification: NzNotificationService,
    private router: Router,
    private activeRouter: ActivatedRoute, 
    private readonly _alertService: AlertService,
    private configuracion_inicial_s:ConfiguracionInicialService,
    private sis_enumerado_s:SisEnumeradoService,
    private spinner: NgxSpinnerService,
    private sanitizer: DomSanitizer,
    private cd: ChangeDetectorRef,
    private encuesta_s:EncuestasService
  ) {
    this.i18n.setLocale(es_ES);
    this._fileService.rutaBase = this._authService.GetConfig().Urls.URL_GA_UI;
    this.version = '12.0.1';//que coincida con el package json--->// "ngx-youtube-player": "^12.0.1
  }

  _loaded_media=false;
  show_loader_encuesta=true;
  ngOnInit() {
    this.getConfiguracion_inicial();
  }

 
  configuracion:ConfiguracionInicialResponse;
  url_video:string=null;
  audio_exists=false;
  page_loaded=false;
  main_audio:HTMLAudioElement;
  @ViewChild('btnPlayMainAudio', { static: false }) btnPlayMainAudio: HTMLButtonElement;
  welcome_text='';
  welcome_video = '';
  loading_audio=true;
  async getConfiguracion_inicial(){
    localStorage.setItem("is_filling", "false");
    this.spinner.show();
    this.loading_audio=true;
    this.configuracion_inicial_s.GetActualConfiguracion(TIPO_ENCUESTA.extranet).then(async datos => {
      if(datos.data){
        let item:ConfiguracionInicialResponse = datos.data;
        //datos.data.texto_bienvenida=datos.data.texto_bienvenida.replace(`\"`,'"');
        this.welcome_text=datos.data.texto_bienvenida;
        this.welcome_video = datos.data.url_video;
        this.configuracion=datos.data;
        if(item.id_tipo_archivo==TIPO_ARCHIVO_ENUMERADO.imagen){
          if(item.iden_imagen){
            await this.onGetSavedFileByCode(item.iden_imagen,0);
            this.show_loader_encuesta=false;
          }
        }else{
          this.url_video=item.url_video;
          this._idYoutubeVideo=item.url_video.substring(32,43);
          this._loaded_media=true;
          this.show_loader_encuesta=false;
        }
        this.page_loaded=true;
        this.spinner.hide();

        if(item.iden_audio_fondo){
          //await this.onGetSavedFileByCodeAudio(item.iden_audio_fondo,item.url_video?true:false);
          await this.onGetSavedFileByCodeAudio(item.iden_audio_fondo,item.url_video?true:false);
          this.loading_audio=false;
        }else{
          this.loading_audio=false;
        }
      }
      
      this.cd.markForCheck();
      this.cd.detectChanges();
    }).catch(err => {});
  }
  //#region  YOUTUBE VIDEO
  _idYoutubeVideo = null;
  version = '...';
  private _player;
  public _ytEvent;
  _onStateChange(event) {
    this._ytEvent = event.data;
  }
  _savePlayer(player) {
    this._player = player;
    //this.player.playVideo();
    setTimeout(() =>{ this._player.playVideo();},350)
  }
  //#endregion

  contentType: string = "";
  urlArchivo: SafeResourceUrl[]=[null,null];
  b64_audio=null;
  loaded_media=false;
  audio_finally_loaded=false;
  onGetSavedFileByCode = async (codigo: string,index:number) =>{
    await this._fileService.getFilesById(codigo).then(resp => {
        if (resp.Success){
            if (resp.Data){
                if(resp.Data[0].content!=null){
                    var binary = atob(resp.Data[0].content.replace(/\s/g, ''));
                    var len = binary.length;
                    var buffer = new ArrayBuffer(len);
                    var view = new Uint8Array(buffer);
                    for (var i = 0; i < len; i++) {
                        view[i] = binary.charCodeAt(i);
                    }
                    this.contentType = resp.Data[0].contentType;
                    let contentType = this.contentType;
                    var blob = new Blob([view], { type: contentType });
                    var urlArchivo = 'data:'+contentType+';base64,'+resp.Data[0].content;
                    this.loaded_media=true;

                    this.urlArchivo[index]= this.sanitizer.bypassSecurityTrustResourceUrl(urlArchivo);
                }else{
                    this._alertService.open("error",resp.Data[0].mensajeError,null);
                    this.loaded_media=false;
                }
            }else{
                this._alertService.open("error", "Sin datos para cargar",null);
                this.loaded_media=false;
            }  
            
        }
        if(!resp.Success){
          this._alertService.open("error", resp.Messages[0],null)
          this.loaded_media=false;
        }
        
    });
  }

  AudioContext: AudioContext= new AudioContext();
  AudioSource:AudioBufferSourceNode;
  GainNode:GainNode;
  audio_started=false;
  onGetSavedFileByCodeAudio = async (codigo: string,has_video=false) =>{
    await this._fileService.getFilesById(codigo).then(async resp => {
        if (resp.Success){
            if (resp.Data){
                if(resp.Data[0].content!=null){
                    var binary = atob(resp.Data[0].content.replace(/\s/g, ''));
                    
                    var len = binary.length;
                    var buffer = new ArrayBuffer(len);
                    var view = new Uint8Array(buffer);
                    for (var i = 0; i < len; i++) {
                        view[i] = binary.charCodeAt(i);
                    }

                    const audioContext = new AudioContext();

                    const gainNode = audioContext.createGain();
                    gainNode.gain.value = this.volume_value/100; // setting it to 10%
                    gainNode.connect(audioContext.destination);

                    const arr =view;// Uint8Array.from(response.data.data)
                    const audio = await audioContext.decodeAudioData(arr.buffer);
                    const source = audioContext.createBufferSource();
                    source.buffer = audio;
                    source.loop = true;
                    source.connect(gainNode);
                    if(!has_video){
                      source.start(0);
                      this.audio_started=true;
                      this.audio_paused=false;
                    }else{
                      this.audio_paused=true;
                    }

                    this.AudioContext = audioContext;
                    this.AudioSource = source;
                    this.GainNode=gainNode;
                    //var blob = new Blob([view], { type: contentType });
                    this.audio_finally_loaded=true;

                    this.audio_exists=true;
                    this.loading_audio=false;
                }else{
                    this._alertService.open("error",resp.Data[0].mensajeError,"Error de audio");
                    this.audio_finally_loaded=false;
                    this.loading_audio=false;this.audio_exists=false;
                }
            }else{
                this._alertService.open("error", "Sin datos para cargar","Error de audio");
                this.audio_finally_loaded=false;
                this.loading_audio=false;this.audio_exists=false;
            }  
            
        }
        if(!resp.Success){
          this._alertService.open("error", resp.Messages[0],"Error de audio")
          this.audio_finally_loaded=false;
          this.loading_audio=false;
        }
        
    });
  }
  //#region AUDIO
  audio_paused=true;
  handleAudioPause=()=>{
    this.audio_paused= !this.audio_paused;
    if(!this.audio_paused){
      if(!this.audio_started){
        const gainNode = this.GainNode;
        gainNode.gain.value = this.volume_value/100; // setting it to 10%
        gainNode.connect(this.AudioContext.destination);
        this.AudioSource.connect(gainNode);
        this.AudioSource.start(0);
        this.audio_started=true;
      }else{
        this.AudioContext.resume();
      }
    }else{
      this.AudioContext.suspend();
    }
  }
  volume_value=50
  setVolumeOfObject=(e:number)=>{
    setTimeout(()=>{
      if(!this.audio_paused){
        const gainNode = this.GainNode;
        gainNode.gain.value = e/100; // setting it to 10%
        gainNode.connect(this.AudioContext.destination);
        this.AudioSource.connect(gainNode);
        if(!this.audio_started){
          this.AudioSource.start(0);
          this.audio_started=true;
        }
      }
      this.cd.markForCheck();
      this.cd.detectChanges();
      /*
      this.main_audio.volume= e/100;
      this.main_audio.play();*/
    },100);
  };
  is_muted=false;
  mute_unmute_audio=()=>{
    this.is_muted=!this.is_muted;
    if(this.is_muted){
      this.AudioContext.resume();
    }else{
      this.AudioContext.suspend();
    }
  }

  show_control_audio=false;
  handleAudioClick(){
    this.show_control_audio=!this.show_control_audio;
    this.cd.markForCheck();
    this.cd.detectChanges();
  }
  //#endregion
  show_main_title=true;
  disable_next_btn=false;
  handleOnIniciarLLenado=(event)=>{
    if(event){//ocultar el play y pausar
      if(this.audio_finally_loaded && this.audio_exists){
        if(!this.audio_started){
          const gainNode = this.GainNode;
          gainNode.gain.value = this.volume_value/100; // setting it to 10%
          gainNode.connect(this.AudioContext.destination);
          this.AudioSource.connect(gainNode);
          this.AudioSource.start(0);
          this.audio_started=true;
        }
  
        if(this.AudioContext.state === 'running') {
          this.AudioContext.suspend()
        } else if(this.AudioContext.state === 'suspended') {
          //this.AudioContext.resume()  
        }
      }
      this.show_main_title=false;
    }else{//mostrar y desmutear
      if(this.audio_finally_loaded && this.audio_exists){
        if(!this.audio_started){
          const gainNode = this.GainNode;
          gainNode.gain.value = this.volume_value/100; // setting it to 10%
          gainNode.connect(this.AudioContext.destination);
          this.AudioSource.connect(gainNode);
          this.AudioSource.start(0);
          this.audio_started=true;
        }
        if(this.AudioContext.state === 'running') {
          //this.AudioContext.suspend()
        } else if(this.AudioContext.state === 'suspended') {
          if(!this.audio_paused){
            this.AudioContext.resume();
          }
        }
      }
      /*
      this.main_audio.muted=false;
      this.main_audio.play();*/
      this.show_main_title=true;
      this.disable_next_btn=false;
    }
  }

  handleOnIniciarListado=(event)=>{
    if(event){//ocultar el play y mutear O PAUSAR
      if(this.audio_finally_loaded && this.audio_exists){
        if(!this.audio_started){
          const gainNode = this.GainNode;
          gainNode.gain.value = this.volume_value/100; // setting it to 10%
          gainNode.connect(this.AudioContext.destination);
          this.AudioSource.connect(gainNode);
          this.AudioSource.start(0);
          this.audio_started=true;
        }
  
        if(this.AudioContext.state === 'running') {
          this.AudioContext.suspend()
        } else if(this.AudioContext.state === 'suspended') {
          //this.AudioContext.resume()  
        }
      }
      /*
      this.main_audio.muted=true;
      this.main_audio.play();*/
      this.show_main_title=false;
    }else{//mostrar y desmutear
      /*
      this.main_audio.muted=false;
      this.main_audio.play();*/
      if(this.audio_finally_loaded && this.audio_exists){
        if(!this.audio_started){
          const gainNode = this.GainNode;
          gainNode.gain.value = this.volume_value/100; // setting it to 10%
          gainNode.connect(this.AudioContext.destination);
          this.AudioSource.connect(gainNode);
          this.AudioSource.start(0);
          this.audio_started=true;
        }
  
        if(this.AudioContext.state === 'running') {
          //this.AudioContext.suspend()
        } else if(this.AudioContext.state === 'suspended') {
          if(!this.audio_paused){
            this.AudioContext.resume()  
          }
        }
   
      }

      this.show_main_title=true;
      this.disable_next_btn=false;

      this.cd.markForCheck();
      this.cd.detectChanges();
    }
  }
  //#region PASES ENTRE PANTALLAS
  goMainList(){
    this.disable_next_btn=true;
    this.show_welcome=false;
    this.show_main_list=true;
  }

  //#endregion
}
