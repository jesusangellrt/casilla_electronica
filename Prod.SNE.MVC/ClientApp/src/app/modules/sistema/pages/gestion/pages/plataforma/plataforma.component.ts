import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { AudioUploaderCustomComponent, ComunService, ConfiguracionInicialResponse, ConfiguracionInicialSaveUpdateRequest, ConfiguracionInicialService, DecoupledInit, FileUploaderCustomComponent, FILE_SETTINGS, SisEnumeradoService, SIS_TIPO_ENUMERADO, TIPO_ARCHIVO_ENUMERADO, TIPO_ENCUESTA } from "@app/_core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { es_ES } from 'ng-zorro-antd/i18n';
import { NzI18nService, NzNotificationService } from 'ng-zorro-antd';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import * as DecoupledEditor from '../../../../../../../../external/ckeditor5-build-decoupled-document';
DecoupledEditor.defaultConfig = DecoupledInit.defaultConfig;

@Component({
  selector: 'app-plataforma',
  templateUrl: './plataforma.component.html',
  styleUrls: ['./plataforma.component.css']
})
export class PlataformaComponent implements OnInit {

  constructor(
    private i18n: NzI18nService,
    private fb: FormBuilder,
    private notification: NzNotificationService,
    private router: Router,
    private activeRouter: ActivatedRoute, 
    private configuracion_inicial_s:ConfiguracionInicialService,
    private sis_enumerado_s:SisEnumeradoService,
    private spinner: NgxSpinnerService,
    private common_s: ComunService,
    private cd: ChangeDetectorRef,
  ) {
    this.i18n.setLocale(es_ES);
  }
  
  array_tipo_file: any[]=[];
  formMACRO: FormGroup;
  async ngOnInit() {
    this.formMACRO = new FormGroup({
      Mensaje: new FormControl(null,Validators.required),
      TipoArchivo: new FormControl(null),
      URL: new FormControl(null),
    });
    this.spinner.show();
    await this.getTipoArchivos();
    await this.getConfiguracion_inicial();
    //this.getIPAddress();
  }
  ipAddress:string;
  getIPAddress=()=>{
    this.common_s.GetIpCliente().subscribe(datos => {
    });
  }

  form={
    id_configuracion:0,
    contenido:'',
    tag:null,
    tipo_file: null,
    url:null,

    video:null,
    imagen:null,
    audio:null
  }
  actual_config={
    id_configuracion:0,
    contenido:'',
    tag:null,
    tipo_file: null,
    url:null,

    video:null,
    imagen:null,
    audio:null
  }
  selected_tipe='';
  
  getTipoArchivos(){
    this.sis_enumerado_s.GetEnumeradoByTipoEnumerado(SIS_TIPO_ENUMERADO.tipo_archivo).then(datos => {
      this.array_tipo_file =datos.data;
    }).catch(err => {});
  }
  
  getConfiguracion_inicial(){
    this.configuracion_inicial_s.GetActualConfiguracion(TIPO_ENCUESTA.intranet).then(datos => {
      if(datos.data){
        let item:ConfiguracionInicialResponse = datos.data;
        this.actual_config=datos.data;
        this.form.id_configuracion=item.id_configuracion;
        this.form.contenido=item.texto_bienvenida;
        this.form.tipo_file=item.id_tipo_archivo;
        this.form.url=item.url_video;
        //this.form.video=item.id_tipo_archivo==TIPO_ARCHIVO_ENUMERADO.video?item.iden_imagen:null;
        this.form.imagen=item.id_tipo_archivo==TIPO_ARCHIVO_ENUMERADO.imagen?item.iden_imagen:null;
        this.form.audio=item.iden_audio_fondo;

        this.file_iden.audio=item.iden_audio_fondo;
        //this.file_iden.video=item.id_tipo_archivo==TIPO_ARCHIVO_ENUMERADO.video?item.iden_imagen:null;
        this.file_iden.imagen=item.id_tipo_archivo==TIPO_ARCHIVO_ENUMERADO.imagen?item.iden_imagen:null;
        this.error_audio=false;this.error_imagen=false;this.error_tipo_file=false;
        this.error_url=false; this.error_video=false; this.esInvalidoContenido=false;

        this.imagen_only=item.id_tipo_archivo==TIPO_ARCHIVO_ENUMERADO.imagen?true:false;
        this.video_only=item.id_tipo_archivo==TIPO_ARCHIVO_ENUMERADO.video?true:false;
      }
      this.spinner.hide();
    }).catch(err => {});
  }
  show_file_uploader=false;
  set_tipo_file_permitidos=()=>{
    let tipo = this.form.tipo_file;
    this.error_tipo_file=false;

    this.imagen_only=tipo?(tipo==TIPO_ARCHIVO_ENUMERADO.imagen?true:false):false;
    this.video_only=tipo?(tipo==TIPO_ARCHIVO_ENUMERADO.video?true:false):false;

    this.cd.detectChanges();
    this.cd.markForCheck();
  }
  imagen_only=false;
  video_only=false;

  @ViewChild('imagenfileDocumentoUploader', { static: false }) imagenfileDocumentoUploader: FileUploaderCustomComponent;
  @ViewChild('videofileDocumentoUploader', { static: false }) videofileDocumentoUploader: FileUploaderCustomComponent;
  estaGuardando: boolean = false;
  list_tipo_dias: any;
  tiposMimePermitidos = ["image/png", "image/jpeg", "video/mp4"];
  _imageMimePermitidos = ["image/png", "image/jpeg"];
  _videoMimePermitidos = ["video/mp4"];
  extensionAceptados = [".png", ".jpeg", ".pdf"];
  imagen_extensionAceptados= [".png", ".jpeg"];
  video_extensionAceptados= [".mp4"];
  pesoMaximoEnMB = FILE_SETTINGS.maxFileSize;
  url = "/api/comun/descargar-archivo";
  _imagen_archivo: Array<any>;
  _video_archivo: Array<any>;
  validar_fup: boolean = false;

  @ViewChild('audioDocumentoUploader', { static: false }) audioDocumentoUploader: AudioUploaderCustomComponent;
  audio_estaGuardando: boolean = false;
  //audio_tiposMimePermitidos = [".mp3"];
  //audio_extensionAceptados = [".mp3"];
  audio_archivo: Array<any>;



  validateForm: FormGroup;
  configuracionFormularioValidacion = (): void => {
    this.validateForm = this.fb.group({
    });
  };

  handleRemovedFile=(codigo,tipo)=>{
    if(tipo=="imagen"){
      this.form.imagen=null;
      this.file_iden.imagen=null;
    }
    if(tipo=="audio"){
      this.form.audio=null;
      this.file_iden.audio=null;
    }
  }

  isDisabled=false;
  esInvalidoContenido:boolean=false;
  tags: Array<string> = [];
  public editor = DecoupledEditor;
  configEditor = DecoupledInit.configEditor;
  expresion = /\[\[[A-Z0-9\_]+\]\]/g;

  public onChange({ editor }: ChangeEvent) {
    const data = editor.getData();
    const tags = data.match(this.expresion);
    if (tags) {
      this.tags = tags;
    } else {
      this.tags = [];
    }

    this.tags = this.tags.filter((value, index, self) => {
      return self.indexOf(value) == index;
    });
    this.esInvalidoContenido=false;
    this.form.tag = this.tags.join();
  }
  public onReady(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }

  file_iden={
    audio:null,
    imagen: null,
    video:null
  }
  set_audio_iden=(data)=>{
    this.file_iden.audio=data.codigo;
    this.error_audio=false;
  }
  set_imagen_iden=(data)=>{
    this.file_iden.imagen=data.codigo;
    this.error_imagen=false;
  }
  set_video_iden=(data)=>{
    this.file_iden.video=data.codigo;
    this.error_video=false;
  }

  error_video=false;
  error_imagen=false;
  cancelar=()=>{
    this.spinner.show();
    this.getConfiguracion_inicial();
  }
  clean_all=()=>{
    this.file_iden={
      audio:null,
      imagen: null,
      video:null
    };
    this.form.contenido='';
    this.form.tag=null;
    this.form.tipo_file=null;
    this.form.url=null;
    this.form.video=null;
    this.form.imagen=null;
    this.form.audio=null;

    this.esInvalidoContenido=false;
    this.error_imagen=false;
    this.error_video=false;
    this.error_audio=false;
    this.error_tipo_file=false;
    this.error_url=false;
    
    this.cd.detectChanges();
    this.cd.markForCheck();
  }
  error_audio=false;
  error_tipo_file=false;
  error_url=false;
  validURL=(str):boolean=>{
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }

  save_update=()=>{
    const _controls = this.formMACRO.controls;
    let allow=true;
    if (this.formMACRO.invalid) {
			Object.keys(_controls).forEach(controlName =>
        _controls[controlName].markAsTouched()
      );
      if(this.form.contenido==null || this.form.contenido==''){
        this.esInvalidoContenido=true;
      }
      if(this.form.tipo_file==null || this.form.tipo_file==''){
        this.error_tipo_file=true;
      }
      allow=false;
		}

    let tipo_file = this.form.tipo_file;
    if(tipo_file){
      if(tipo_file==TIPO_ARCHIVO_ENUMERADO.imagen && (this.file_iden.imagen==null || this.file_iden.imagen=="")){
        allow=false;
        this.error_imagen=true;
      }
      if(tipo_file==TIPO_ARCHIVO_ENUMERADO.video && (this.form.url==null || this.form.url=="")){
        allow=false;
        this.error_url=true;
      }
      if(tipo_file==TIPO_ARCHIVO_ENUMERADO.video && this.form.url!=null && this.form.url!=''){
        let valid_url=this.validURL(this.form.url);
        if(!valid_url){
          this.error_url=true;
          allow=false;
        }
      }
    }else{
      this.error_tipo_file=true;
      allow=false;
    }
    if(this.file_iden.audio==null || this.file_iden.audio==""){
      this.error_audio=true;
      allow=false;
    }


    if(!allow){
      this.createNotification('warning', 'Advertencia','Debe ingresar los campos obligatorios.');
    }
    if(allow){
      this.error_url=false;
      this.error_audio=false;
      this.error_tipo_file=false; 
      this.error_video=false;
      this.esInvalidoContenido=false;
      let input:ConfiguracionInicialSaveUpdateRequest={
        id_configuracion: this.form.id_configuracion,
        texto_bienvenida:this.form.contenido,
        iden_audio_fondo: this.file_iden.audio,//id_audio
        id_tipo_archivo: this.form.tipo_file, 
        tipo_archivo_name: "",
        url_video: this.form.tipo_file==TIPO_ARCHIVO_ENUMERADO.video?this.form.url:null,
        iden_imagen:  this.form.tipo_file==TIPO_ARCHIVO_ENUMERADO.imagen?this.file_iden.imagen:null,//id_iamge o video
        es_eliminado:false,
        user_name:'',
        tipo_encuesta: TIPO_ENCUESTA.intranet
      };
      this.configuracion_inicial_s.SaveUpdateConfiguracion(input).then(datos => {
        //this.spinner.hide();
        if(datos.data){
          if(datos.data.Success){
            let str='<ul>';
            datos.data.Messages.forEach(message => {
              str+=`<li>${message}</li>`;
            });
            str+='</ul>';
            this.createNotification('success','Éxito',str);
          }
        }
      }).catch(err => {});
    }
  }


  createNotification = (type: string, title: string, message: string): void => {
    this.notification.create(
      type,
      title,
      message
    );
  };

}
