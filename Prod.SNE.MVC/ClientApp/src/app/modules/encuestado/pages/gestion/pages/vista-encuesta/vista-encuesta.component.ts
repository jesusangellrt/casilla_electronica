import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AlertService, AuthService, EncuestaAgradecimientoData, EncuestaBienvenidaData, EncuestaData, TIPO_ENCUESTA, EncuestaMainData, EncuestasService, FileService, TIPO_ARCHIVO_ENUMERADO } from '@app/_core';
import { RespuestaService } from '@app/_core/services/respuesta.service';
import { Console } from 'console';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-vista-encuesta',
  templateUrl: './vista-encuesta.component.html',
  styleUrls: ['./vista-encuesta.component.css']
})
export class VistaEncuestaComponent implements OnInit {

  @Input()main_data:EncuestaMainData;
  @Input()welcome_data:EncuestaBienvenidaData;
  @Input()indicaciones: string;
  @Input()agradecimiento_data:EncuestaAgradecimientoData;
  @Output() onGoInicio: EventEmitter<boolean> = new EventEmitter();
  @Output() onEmitDataToHeader: EventEmitter<any> = new EventEmitter();

  ;
  id_encuesta:number;
  show_selected_encuesta=true;
  show_preguntas=false;
  constructor(
    private spinner: NgxSpinnerService,
    private respuesta_s: RespuestaService,
    private encuesta_s:EncuestasService,
    private _fileService: FileService,
    private _authService: AuthService,
    private readonly _alertService: AlertService,
    private sanitizer: DomSanitizer,
    private cd: ChangeDetectorRef,
  ) { }
  PreguntasList=[];
  _loaded_media=false;
  show_loader_encuesta=true;
  ngOnInit() {
    this.getPreguntasList();
    this.load_media();
  }
  handleOnEmitDataToHeader=(e)=>{
    this.onEmitDataToHeader.emit(e);
  }
  getPreguntasList(){
    localStorage.setItem("is_filling", "false");
    let filtro = { id_encuesta: this.main_data.id_encuesta };
    this.encuesta_s._GetPreguntasByEncuesta(filtro, 1, 200)
      .then((datos) => {
        if (datos && datos.data && datos.data.Data) {
          let data = datos.data.Data;
          data.forEach((e,_idx)=>{e.idx=_idx;});
          this.PreguntasList = data;
        }
      })
      .catch(() => {});
  }
  async load_media(){
    if(this.welcome_data.id_tipo_archivo==TIPO_ARCHIVO_ENUMERADO.imagen){
      if(this.welcome_data.iden_imagen){
        await this.onGetSavedFileByCode(this.welcome_data.iden_imagen);
        this.show_loader_encuesta=false;
      }
    }else{
      if(this.welcome_data.url_video != null){
        let url =this.welcome_data.url_video;
        this._idYoutubeVideo=url.substring(32,43);
        this._loaded_media=true;
      }
      else{
        this._loaded_media=false;
      }    
      this.show_loader_encuesta=false;  
    }
    if(this.welcome_data.iden_audio){
      await this.onGetSavedFileByCodeAudio(this.welcome_data.iden_audio,this.welcome_data.url_video && this.welcome_data.url_video!=''?true:false);
      /*var _Sound = (function () {
        var df = document.createDocumentFragment();
        return function Sound(src,has_video) {
            var snd = new Audio(src);
            df.appendChild(snd); // keep in fragment until finished playing
            snd.addEventListener('ended', function () {df.removeChild(snd);});
            snd.volume=0.5;
            snd.loop=true;
            if(!has_video){
              snd.muted = true;
              snd.play();
              snd.muted = false;
              snd.play();
            }
            return snd;
        }
      }());
      this.welcome_audio = _Sound(this._b64_audio,this.welcome_data.url_video?true:false);*/

    }else{
      this._loading_audio=false;
    }
    this._audio_exists=this.welcome_data.iden_audio?true:false;
  }

  _urlArchivo: SafeResourceUrl;
  _audio_loaded=false;
  _audio_exists=false;
  _b64_audio:string =null;
  onGetSavedFileByCode = async (codigo: string,is_audio=false) =>{
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
                    let contentType =  resp.Data[0].contentType;
                    var urlArchivo = 'data:'+contentType+';base64,'+resp.Data[0].content;
                    if(is_audio){
                      this._b64_audio=urlArchivo;
                      this._audio_loaded=true;
                    }else{
                      this._urlArchivo= this.sanitizer.bypassSecurityTrustResourceUrl(urlArchivo); 
                      this._loaded_media=true;
                    }
                }else{
                    this._alertService.open("error",resp.Data[0].mensajeError,is_audio?"Error de audio":null);
                    if(is_audio) this._audio_loaded=false;
                    else this._loaded_media=false;
                }
            }else{
                this._alertService.open("error", "Sin datos para cargar",is_audio?"Error de audio":null);
                if(is_audio) this._audio_loaded=false;
                else this._loaded_media=false;
            }  
            
        }
        if(!resp.Success){
          this._alertService.open("error", resp.Messages[0],is_audio?"Error de audio":null);
          this._audio_loaded=false;
        }
        
    });
  }
  

  //#region MANEJO VIDEO
  _idYoutubeVideo=null;
  private _player;
  public _ytEvent;
  _onStateChange(event) {
    this._ytEvent = event.data;
  }
  _savePlayer(player) {
    this._player = player;
    setTimeout(() =>{ this._player.playVideo();},350)
  }
  //#endregion
  goInicio=()=>{
    if(this._audio_loaded){
      const gainNode = this.GainNodeEncuesta;
      gainNode.gain.value = this._volume_value/100; // setting it to 10%
      gainNode.connect(this.AudioContextEncuesta.destination);
      this.AudioSourceEncuesta.connect(gainNode);
      if(!this._audio_started){
        this.AudioSourceEncuesta.start(0);
        this._audio_started=true;
      }

      if(this.AudioContextEncuesta.state === 'running') {
        this.AudioContextEncuesta.suspend()
      } else if(this.AudioContextEncuesta.state === 'suspended') {
        //this.AudioContextEncuesta.resume()  
      }
    }
    localStorage.setItem("is_filling", "false");
    this.onGoInicio.emit(true);
  }

  //#region CONTROL AUDIOI
  AudioContextEncuesta: AudioContext= new AudioContext();
  AudioSourceEncuesta:AudioBufferSourceNode;
  GainNodeEncuesta:GainNode;
  _audio_started=false;
  audio_paused_encuesta=true;
  onGetSavedFileByCodeAudio = async (codigo: string,has_video=true) =>{
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
                    gainNode.gain.value = this._volume_value/100; // setting it to 10%
                    gainNode.connect(audioContext.destination);

                    const arr =view;// Uint8Array.from(response.data.data)
                    const audio = await audioContext.decodeAudioData(arr.buffer);
                    const source = audioContext.createBufferSource();
                    source.buffer = audio;
                    source.loop = true;
                    source.connect(gainNode);
                    if(!has_video){
                      source.start(0);
                      this._audio_started=true;
                      this.audio_paused_encuesta=false;
                    }else{
                      this.audio_paused_encuesta=true;
                    }

                    this.AudioContextEncuesta = audioContext;
                    this.AudioSourceEncuesta = source;
                    this.GainNodeEncuesta=gainNode;

                    this._b64_audio='xasdasd';
                    this._audio_loaded=true;
                    this._loading_audio=false;
                }else{
                    this._alertService.open("error",resp.Data[0].mensajeError,"Error de audio");
                    this._audio_loaded=false;
                    this._loading_audio=false;
                }
            }else{
                this._alertService.open("error", "Sin datos para cargar","Error de audio");
                this._audio_loaded=false;
                this._loading_audio=false;
            }  
        }
        if(!resp.Success){
          this._alertService.open("error", resp.Messages[0],"Error de audio");
          this._audio_loaded=false;
          this._loading_audio=false;
        }
        
    });
  }
  _loading_audio=true;
  _show_control_audio=false;
  _volume_value=50;
  welcome_audio:HTMLAudioElement;
  @ViewChild('btnPlayMainAudio', { static: false }) btnPlayMainAudio: HTMLButtonElement;
  _setVolumeOfObject(valor){
    setTimeout(()=>{
      if(!this.audio_paused_encuesta){
        const gainNode = this.GainNodeEncuesta;
        gainNode.gain.value = valor/100; // setting it to 10%
        gainNode.connect(this.AudioContextEncuesta.destination);
        this.AudioSourceEncuesta.connect(gainNode);
        if(!this._audio_started){
          this.AudioSourceEncuesta.start(0);
          this._audio_started=true;
        }
      }
      this.cd.markForCheck();
      this.cd.detectChanges();
      //this.welcome_audio.volume= valor/100;
      //this.welcome_audio.play();
    },100);
  }
  _handleWelcomeEncuestaClick(){
    this._show_control_audio=!this._show_control_audio;
    this.cd.markForCheck();
    this.cd.detectChanges();
  }
  
  handleAudioPauseEncuesta=()=>{
    this.audio_paused_encuesta= !this.audio_paused_encuesta;
    if(!this.audio_paused_encuesta){
      const gainNode = this.GainNodeEncuesta;
      gainNode.gain.value = this._volume_value/100; // setting it to 10%
      gainNode.connect(this.AudioContextEncuesta.destination);
      this.AudioSourceEncuesta.connect(gainNode);
      if(!this._audio_started){
        this.AudioSourceEncuesta.start(0);
        this._audio_started=true;
      }
      if(this.AudioContextEncuesta.state === 'suspended') {
        this.AudioContextEncuesta.resume()  
      }
    }else{
      if(this.AudioContextEncuesta.state === 'running') {
        this.AudioContextEncuesta.suspend()
      }
    }
  }
  //#endregion

  total:number;
  _total_preguntas=[];
  pageIndex:number;
  presetIndex:number;
  disparadoresRespuestas=[]; paginado_registrado=[];
  goEncuesta=async ()=>{
    if(this._audio_loaded){
      //this.welcome_audio.volume= 0;
      //this.welcome_audio.play();
      if(!this._audio_started){
        const gainNode = this.GainNodeEncuesta;
        gainNode.gain.value = this._volume_value/100; // setting it to 10%
        gainNode.connect(this.AudioContextEncuesta.destination);
        this.AudioSourceEncuesta.connect(gainNode);
        this.AudioSourceEncuesta.start(0);
        this._audio_started=true;
      }

      if(this.AudioContextEncuesta.state === 'running') {
        this.AudioContextEncuesta.suspend()
      } else if(this.AudioContextEncuesta.state === 'suspended') {
        //this.AudioContextEncuesta.resume()  
      }
    }
    this.id_encuesta = this.main_data.id_encuesta;
    await this.encuesta_s._GetPreguntasCondicionalesByEncuesta({ id_encuesta: this.id_encuesta})
    .then((datos) => {
      if (datos && datos.data) {
        this.disparadoresRespuestas=datos.data;
      }else{
        this.disparadoresRespuestas=[];
      }
    })
    .catch(() => {this.disparadoresRespuestas=[];});

    if(this.main_data.es_anonima){
      this.paginado_registrado=[];
      let filtro = { id_encuesta: this.id_encuesta, _mostar_solo_condicional:false };
      this.encuesta_s._GetPreguntasByEncuesta(filtro, 1, 1000)
        .then((datos) => {
          let _rr=[];
          if (datos && datos.data && datos.data.Data) {
            this.total = datos.data.TotalRows;
            datos.data.Data.forEach((e,idx)=>{
              _rr.push({
                nro: idx+1,
                id_pregunta: e.id_pregunta
              })
            });
            this._total_preguntas=_rr;
          }else{
            this._total_preguntas=[];
          }
          this.pageIndex= 1;
          this.presetIndex=1;

          this.show_selected_encuesta=false;
          this.show_preguntas=true;
          this.cd.markForCheck();
          this.cd.detectChanges();
        })
        .catch(() => {});
    }else{
      await this.encuesta_s._GetPaginadoRegistrado({ id_encuesta: this.id_encuesta,id_tipo_encuesta: TIPO_ENCUESTA.extranet}, 1, 1000)
      .then((datos) => {
        if (datos && datos.data && datos.data.Data) {
          this.paginado_registrado=datos.data.Data[0].json?JSON.parse(datos.data.Data[0].json):[];
        }else{
          this.paginado_registrado=[];
        }
      }).catch(() => {this.disparadoresRespuestas=[];});

      
      let filtro = { id_encuesta: this.id_encuesta, _mostar_solo_condicional:false };
      this.encuesta_s._GetPreguntasByEncuesta(filtro, this.pageIndex, 1000)
      .then((datos) => {
        let _rr=[];
        datos.data.Data.forEach((e,idx)=>{
          _rr.push({
            nro: idx+1,
            id_pregunta: e.id_pregunta
          })
        });
        this._total_preguntas=_rr;
        this.respuesta_s._GetPreguntaActualEncuesta(this.id_encuesta)
        .then((datos) => {
          let splited = datos.data?datos.data.Value.split(','):"0,0,0".split(',');
          this.total = Number(splited[1]);
          this.pageIndex= Number(splited[0]);
          this.presetIndex=Number(splited[0]);
          this.cd.markForCheck();
          this.cd.detectChanges();
          
          this.show_selected_encuesta=false;
          this.show_preguntas=true;
        })
        .catch(() => {});

      }).catch(() => {});
    }
  }

  handleGoBackEncuesta=($event)=>{
    this.id_encuesta=0;
    this.show_selected_encuesta=true;
    this.show_preguntas=false;
    localStorage.setItem("is_filling", "false");

    
    if(!this._audio_started && this.GainNodeEncuesta){
      const gainNode = this.GainNodeEncuesta;
      gainNode.gain.value = this._volume_value/100; // setting it to 10%
      gainNode.connect(this.AudioContextEncuesta.destination);
      this.AudioSourceEncuesta.connect(gainNode);
      this.AudioSourceEncuesta.start(0);
      this._audio_started=true;
    }

    if(this.AudioContextEncuesta.state === 'running') {
      //this.AudioContextEncuesta.suspend()
    } else if(this.AudioContextEncuesta.state === 'suspended') {
      this.AudioContextEncuesta.resume()  
    }

  }
  handleGoBackInicio=($event)=>{
    this.id_encuesta=0;
    localStorage.setItem("is_filling", "false");
    this.show_selected_encuesta=true;
    this.show_preguntas=false;

    if(!this._audio_started && this.GainNodeEncuesta){
      const gainNode = this.GainNodeEncuesta;
      gainNode.gain.value = this._volume_value/100; // setting it to 10%
      gainNode.connect(this.AudioContextEncuesta.destination);
      this.AudioSourceEncuesta.connect(gainNode);
      this.AudioSourceEncuesta.start(0);
      this._audio_started=true;
    }

    if(this.AudioContextEncuesta.state === 'running') {
      this.AudioContextEncuesta.suspend()
    } else if(this.AudioContextEncuesta.state === 'suspended') {
      //this.AudioContextEncuesta.resume()  
    }
    
    this.onGoInicio.emit(true);
  }
}
