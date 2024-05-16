import { NodeFlags } from '@angular/compiler/src/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output,ViewChild,ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService, EncuestasService, FILE_SETTINGS, 
  FORMA_FILA, 
  JSON_TIPO_PREGUNTA, PreguntaResponseItem, PreguntaSaveUpdateItem, 
  SisEnumeradoService, SIS_TIPO_ENUMERADO, 
  TIPO_ARCHIVO_ENUMERADO, TIPO_PREGUNTA,DecoupledInit } from '@app/_core';
import th from 'date-fns/esm/locale/th/index.js';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import * as DecoupledEditor from 'external/ckeditor5-build-decoupled-document';
import { SeccionResponseItem, SeccionSaveUpdateItem } from '@app/_core/interfaces/secciones.interface';
DecoupledEditor.defaultConfig = DecoupledInit.defaultConfig;
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificacionResponseItem, NotificacionSaveUpdateItem } from '@app/_core/interfaces/notificaciones.interface';

@Component({
  selector: 'app-modal-registro-notificacion-extranet',
  templateUrl: './modal-registro-notificacion-extranet.component.html',
  styleUrls: ['./modal-registro-notificacion-extranet.component.css']
})
export class ModalRegistroNotificacionExtranetComponent implements OnInit {
  _TIPO_PREGUNTA=TIPO_PREGUNTA;
  @ViewChild('checkTipoArchivo_3', { static: false }) checkTipoArchivo_3Element: ElementRef;

  @Input() title:string="Agregar";
  @Input() is_first:boolean = false;  
  @Input() notificacion: NotificacionResponseItem;
  @Input() id_encuesta: number;
  @Input() isVisibleModal:boolean = false;
  @Output() onCloseModal:EventEmitter<boolean> = new EventEmitter();
  @Output() onSaveDataSeccion: EventEmitter<boolean> = new EventEmitter();

  array_dirigido: any[] = [];
  texto_mensaje: string=null;

  constructor(
    private encuesta_s:EncuestasService,
    private _formBuilder: FormBuilder,
    private notification: NzNotificationService,
    private modal: NzModalService,
    private cd: ChangeDetectorRef,
    private spinner: NgxSpinnerService,
    private sis_enumerado_s:SisEnumeradoService
  ) { }

  modal_width:number=800;
  frm:NotificacionResponseItem={id_encuesta_notificacion:0,id_encuesta:0};
  selectedPreguntaCondicional:PreguntaResponseItem=null;

  frmNOT={
    frmTitulos:new FormControl(null, Validators.required),
    frmFecha:new FormControl(null, Validators.required),  
    frmAsunto:new FormControl(null, Validators.required),  
    frmDirigido:new FormControl(null),
    frmMensaje:new FormControl(null, Validators.required),
  }

  async ngOnInit() {
    let basic_frm:NotificacionResponseItem={id_encuesta_notificacion:0,id_encuesta:this.id_encuesta};
    let notificacion = {...this.notificacion};
    this.frm = notificacion?notificacion:basic_frm;

    if(this.frm.id_encuesta_notificacion!=null &&this.frm.id_encuesta_notificacion>0){
      if(notificacion.dirigido != null && notificacion.dirigido != undefined){
        this.array_dirigido = JSON.parse(notificacion.dirigido);
      }
      else{
        await this.getDirigidos();
      }
    }else{
      await this.getDirigidos();
    }
    
  }
  JSON_INIT(){ }
  
  async getDirigidos(){
    await this.sis_enumerado_s.GetEnumeradoByTipoEnumerado(SIS_TIPO_ENUMERADO.tipo_dirigido).then(datos => {
      this.array_dirigido =datos.data.filter(x=>x.es_eliminado==false); 
      console.log(this.array_dirigido);
    }).catch(err => {});
  }

  error_editor_mensaje=false;
  error_dirigido=false;
  handleSaveFormularioModal=()=>{
    let allow=true, required_filled=true;
    let frm_keys = Object.keys(this.frmNOT);
    let str="<ul>";
    for (let i = 0; i < frm_keys.length; i++) {
      let frmkey = frm_keys[i];
      if(this.frmNOT[frmkey].invalid){
        this.frmNOT[frmkey].markAsTouched();
        this.frmNOT[frmkey].markAsDirty();
        this.frmNOT[frmkey].updateValueAndValidity();
        allow=false;required_filled=false;
      }   
    }

    let has_dirigido=true
    let total= 0;
    this.array_dirigido.forEach(element => {
      if(element.selected){
        total++;
      }
    });
    
    if(total == 0){
      this.error_dirigido = true;
      allow=false; has_dirigido=false;
    }else{
      allow=true; 
      this.error_dirigido = false;
    }       
    
    let has_editor_mensaje=true     
    if(this.frm.mensaje == null || this.frm.mensaje == ""){
      this.error_editor_mensaje = true;
      allow=false; has_editor_mensaje=false;
    }else{
      allow=true; 
      this.error_editor_mensaje = false;
    }   

    if(!allow){
      if(required_filled==false){
        str+="<li>Debe ingresar los campos obligatorios.</li>";
      }      
    }
    
    str+="<ul>";
    if(!allow){
      this.createNotification('warning', 'Advertencia',str);
    }else{
      let filter:NotificacionSaveUpdateItem = {...this.frm};
      filter.id_encuesta=this.id_encuesta;
      filter.dirigido =JSON.stringify(this.array_dirigido);
      this.spinner.show();
      this.encuesta_s._SaveUpdateNotificacion(filter).then(datos => {
        if(datos.data){
          if(datos.data.Success){
            let str='<ul>';
            datos.data.Messages.forEach(message => {
              str+=`<li>${message}</li>`;
            });
            str+='</ul>';
            this.createNotification('success','Éxito',str);
            this.onSaveDataSeccion.emit(true);
          }else{
            let str='<ul>';
            datos.data.Messages.forEach(message => {
              str+=`<li>${message}</li>`;
            });
            str+='</ul>';
            this.createNotification('warning','Advertencia',str);
          }
          this.spinner.hide();
        }
      }).catch(err => {});
    }
    
  }
  handleCancelarFormularioModal=()=>{
    this.onCloseModal.emit(true);
  }

  createNotification = (type: string, title: string, message: string): void => {
    this.notification.create(
      type,
      title,
      message
    );
  };

  public onReady(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }

  public editor = DecoupledEditor;
  configEditor = DecoupledInit.configEditor;
  esInvalidoContenido:boolean=false;
  tags: Array<string> = [];
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
    this.texto_mensaje = this.tags.join();
  }

  changeDirigido(values:any):void {
    if(values.currentTarget.checked){
      this.array_dirigido.forEach(element => {
        if(Number(values.currentTarget.id) == element.id_enumerado){
          element.selected = true;
        }
      });       
    }else{
      this.array_dirigido.forEach(element => {
        if(Number(values.currentTarget.id) == element.id_enumerado){
          element.selected = false;
        }
      });
    }
  }
}
