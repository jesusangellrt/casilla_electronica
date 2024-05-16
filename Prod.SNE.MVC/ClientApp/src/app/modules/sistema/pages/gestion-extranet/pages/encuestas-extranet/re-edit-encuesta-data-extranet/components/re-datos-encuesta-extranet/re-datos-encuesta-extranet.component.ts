import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EncuestaAgradecimientoData, EncuestaBienvenidaData, EncuestaData, EncuestaMainData,DecoupledInit, FILE_SETTINGS, TIPO_ARCHIVO_ENUMERADO, SIS_TIPO_ENUMERADO, SisEnumeradoService, EncuestasService, EncuestaSaveUpdateRequest, ESTADO_ENCUESTA_ENUMERADO, TIPO_ENCUESTA } from '@app/_core';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { NzNotificationService } from 'ng-zorro-antd';
import { NgxSpinnerService } from 'ngx-spinner';
import * as DecoupledEditor from '../../../../../../../../../../../external/ckeditor5-build-decoupled-document';
DecoupledEditor.defaultConfig = DecoupledInit.defaultConfig;
@Component({
  selector: 'app-re-datos-encuesta-extranet',
  templateUrl: './re-datos-encuesta-extranet.component.html',
  styleUrls: ['./re-datos-encuesta-extranet.component.css']
})
export class ReDatosEncuestaExtranetComponent implements OnInit {
  @Input() encuesta_data: EncuestaData;
  @Output() onChangeAllPersonalStatus: EventEmitter<boolean> = new EventEmitter();
  @Output() onSaveUpdateEncuesta: EventEmitter<any> = new EventEmitter();
  formMACRO:FormGroup;
  constructor( private _formBuilder: FormBuilder,
    private notification: NzNotificationService,
    private encuesta_s:EncuestasService,
    private spinner: NgxSpinnerService,
    private sis_enumerado_s: SisEnumeradoService) { 
  }

  ngOnInit() {
    this.create_form();this.getTipoArchivos();
    let basic_form:EncuestaMainData={id_encuesta:0,id_estado:ESTADO_ENCUESTA_ENUMERADO.registrado, es_todos:true,es_anonima:false};
    let basic_welcome:EncuestaBienvenidaData={};
    let basic_greet:EncuestaAgradecimientoData={};
    this._show_mensaje_bienvenida_anonima = this.encuesta_data.encuesta?this.encuesta_data.encuesta.es_todos:false;
    this.frm_main_data=this.encuesta_data.encuesta?this.encuesta_data.encuesta:basic_form;
    this.frm_welcome_data=this.encuesta_data.bienvenida?this.encuesta_data.bienvenida:basic_welcome;
    this.frm_greet_data=this.encuesta_data.agradecimiento?this.encuesta_data.agradecimiento:basic_greet;

    this._show_mensaje_bienvenida_anonima = this.frm_main_data.es_anonima;
  }
  array_tipo_file=[];
  getTipoArchivos(){
    this.sis_enumerado_s.GetEnumeradoByTipoEnumerado(SIS_TIPO_ENUMERADO.tipo_archivo).then(datos => {
      this.array_tipo_file =datos.data.filter(x=>x.es_eliminado==false);
    }).catch(err => {});
  }
  frm_main_data:EncuestaMainData={
    id_encuesta:0,
    titulo:null,
    encabezado:null,
    objetivo:null,
    descripcion:null,
    fecha_inicio:null,
    fecha_fin:null,
    tiempo_estimado:null,
    es_anonima:false,
    mensaje_es_anonima:null,
    es_todos:true,
    iden_imagen_presentacion:null,
    mensaje_corto_presentacion:null,
    id_estado:0,
    estado_name:null
  };
  
  frm_welcome_data:EncuestaBienvenidaData={};
  frm_greet_data:EncuestaAgradecimientoData={};
  

  create_form(){
    this.formMACRO = this._formBuilder.group({
      Titulo: [null, Validators.required],
      Encabezado: [null, Validators.required],
      Objetivo: [null, Validators.required],
      Descripcion: [null, Validators.required],
      FechaHoraInicio: [null, Validators.required],
      FechaHoraFin: [null, Validators.required],
      TiempoEstimado: [null,[Validators.required,Validators.pattern('[0-9]*')]],
      EsAnonima: [false],
      EsParaTodos: [true],

      MensajeAnonimo: [null],
      MensajePresentacion: [null],

      IndicacionesBienvenida: [null, Validators.required],
      TipoArchivoBienvenida: [null,Validators.required],
      UrlMultimediaBienvenida: [null],

      IndicacionesAgradecimiento: [null, Validators.required],
      TipoArchivoAgradecimiento: [null,Validators.required],
      UrlMultimediaAgradecimiento: [null]
    });
  }



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
    this.error_indicaciones=false;
  }
  public onReady(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }

  show_mensaje_bienvenida_anonima=(status:boolean)=>{
    this._show_mensaje_bienvenida_anonima=status;
  }

  show_tab_encuestados=(status:boolean)=>{
    this.onChangeAllPersonalStatus.emit(status);
  }
  _show_mensaje_bienvenida_anonima=false;



  estaGuardando: boolean = false;
  tiposMimePermitidos = ["image/png", "image/jpeg","image/gif"];
  imagen_MimePermitidos=["image/png", "image/jpeg","image/gif"];
  imagen_extensionAceptados= [".png", ".jpeg",".gif"];
  pesoMaximoEnMB = FILE_SETTINGS.maxFileSize;
  url = "/api/comun/descargar-archivo";
  _imagen_archivo: Array<any>;
  _video_archivo: Array<any>;
  archivo: Array<any>;
  validar_fup: boolean = false;

  set_imagen_iden=(data)=>{
    this.error_imagen_segundo_plano=false;
    this.frm_main_data.iden_imagen_presentacion=data.codigo;
  }
  handleRemovedFilePresentacion=(e)=>{
    this.frm_main_data.iden_imagen_presentacion=null;
  }

  error_indicaciones=false;
  audio_estaGuardando: boolean = false;
  audio_archivo: Array<any>;
  set_audio_iden=(data)=>{
    this.frm_welcome_data.iden_audio=data.codigo;
  }
  handleRemovedAudioWelcome=(e)=>{
    this.frm_welcome_data.iden_audio=null;
  }

  error_file_welcome=false;
  error_url_welcome=false;
  show_file_uploader=false;
  selected_tipo='';
  show_file_input_welcome=false;
  _extensionAceptados_welcome=[];
  video_extensionAceptados= [".mp4"];

  show_url_welcome=false;
  //imagen_extensionAceptados= [".png", ".jpeg"];
  set_tipo_file_permitidos_welcome=()=>{
    let tipo = this.frm_welcome_data.id_tipo_archivo;
    if(tipo){
      let tipo_file = this.array_tipo_file.find(f=>f.id_enumerado==tipo);
      this.selected_tipo=tipo_file?tipo_file.nombre:'';
      this.show_file_input_welcome =(tipo==TIPO_ARCHIVO_ENUMERADO.imagen?true:false);
      this.show_url_welcome=(tipo==TIPO_ARCHIVO_ENUMERADO.video?true:false);
    }else{
      this.show_file_input_welcome=false;
      this.show_url_welcome=false;
    }
    
  }
  set_file_iden_welcome=(data)=>{
    this.error_file_welcome=false;
    this.frm_welcome_data.iden_imagen=data.codigo;
  }
  handleRemovedFileWelcome=(e)=>{
    this.frm_welcome_data.iden_imagen=null;
  }
  error_imagen_segundo_plano=false;
  error_file_agradecimiento=false;
  show_file_agradecimiento=false;
  show_input_file=false;show_url=false;
  _extensionAceptados_agradecimiento=[];
  set_tipo_file_permitidos_agradecimiento=()=>{
    let tipo = this.frm_greet_data.id_tipo_archivo;
    if(tipo){
      let tipo_file = this.array_tipo_file.find(f=>f.id_enumerado==tipo);
      this.selected_tipo=tipo_file?tipo_file.nombre:'';
      this.show_file_agradecimiento = tipo==TIPO_ARCHIVO_ENUMERADO.imagen?true:false;
      this.show_url = tipo==TIPO_ARCHIVO_ENUMERADO.video?true:false;
      //this._extensionAceptados_agradecimiento=tipo?(tipo==TIPO_ARCHIVO_ENUMERADO.video?this.video_extensionAceptados:):[];
    }
   
  }
  set_file_iden_agradecimiento=(data)=>{
    this.error_file_agradecimiento=false;
    this.frm_greet_data.iden_imagen=data.codigo;
  }
  handleRemovedFileAgradecimiento=(e)=>{
    this.frm_greet_data.iden_imagen=null;
  }
  set_audio_iden_agradecimiento=(data)=>{
    this.frm_greet_data.iden_audio=data.codigo;
  }
  handleRemovedAudioAgradecimiento=(e)=>{
    this.frm_greet_data.iden_audio=null;
  }
  disabledStartDate=(startValue: Date):boolean=>{
    if (!startValue || this.frm_main_data.fecha_fin==null) {
      return false;
    }else{
      return startValue.getTime() > new Date(this.frm_main_data.fecha_fin).getTime();
    }
  }
  disabledEndDate=(endValue: Date):boolean=>{
    if (!endValue || this.frm_main_data.fecha_inicio==null) {
      return false;
    }else{
      return endValue.getTime() <= new Date(this.frm_main_data.fecha_inicio).getTime();
    }
  }

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
  save_update(){
    const _controls = this.formMACRO.controls;
    let allow=true;
    if (this.formMACRO.invalid) {
			Object.keys(_controls).forEach(controlName =>{
        _controls[controlName].markAsTouched();
        _controls[controlName].markAsDirty();
        _controls[controlName].updateValueAndValidity();
      });
      allow=false;
		}
    if(this.frm_welcome_data.indicaciones==null || this.frm_welcome_data.indicaciones==''){
      this.error_indicaciones=true;
      allow=false;
    }

    if(this.frm_main_data.iden_imagen_presentacion==null || this.frm_main_data.iden_imagen_presentacion ==''){
      this.error_imagen_segundo_plano=true;
      allow=false;
    }
    if(this.frm_greet_data.id_tipo_archivo==TIPO_ARCHIVO_ENUMERADO.video){
      if(this.frm_greet_data.url_video==null || this.frm_greet_data.url_video=="" || this.validURL(this.frm_greet_data.url_video)==false){
        this.error_url=true;
        allow=false;
      }
    }
    if(this.frm_greet_data.id_tipo_archivo==TIPO_ARCHIVO_ENUMERADO.imagen){
      if(this.frm_greet_data.iden_imagen==null || this.frm_greet_data.iden_imagen==""){
        this.error_file_agradecimiento=true;
        allow=false;
      }
    }
    if(this.frm_welcome_data.id_tipo_archivo==TIPO_ARCHIVO_ENUMERADO.video){
      if(this.frm_welcome_data.url_video==null || this.frm_welcome_data.url_video=="" || this.validURL(this.frm_welcome_data.url_video)==false){
        this.error_url_welcome=true;
        allow=false;
      }
    }
    if(this.frm_welcome_data.id_tipo_archivo==TIPO_ARCHIVO_ENUMERADO.imagen){
      if(this.frm_welcome_data.iden_imagen==null || this.frm_welcome_data.iden_imagen==""){
        this.error_file_welcome=true;
        allow=false;
      }
    }

    if(allow){
      let input:EncuestaSaveUpdateRequest={
        ussername: '',
        files_only:false,
        encuesta: this.frm_main_data,
        bienvenida:this.frm_welcome_data,
        agradecimiento: this.frm_greet_data,
        tipo_encuesta: TIPO_ENCUESTA.intranet
      };
      this.spinner.show();
      this.encuesta_s._saveUpdateEncuestaData(input).then(datos => {
        this.spinner.hide();
        if(datos.data){
          let str='<ul>';
          datos.data.Messages.forEach(message => {
            str+=`<li>${message}</li>`;
          });
          str+='</ul>';
          if(datos.data.Success){
            this.createNotification('success','Éxito',str);
            input.encuesta.id_encuesta=datos.data.Value.RESULT_IDEN;
            this.onSaveUpdateEncuesta.emit(input);
          }else{
            this.createNotification('warning','Advertencia',str);
          }
        }
      }).catch(err => {
        this.spinner.hide();
      });
    }else{
      this.createNotification('warning', 'Advertencia','Debe ingresar los campos obligatorios');
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
