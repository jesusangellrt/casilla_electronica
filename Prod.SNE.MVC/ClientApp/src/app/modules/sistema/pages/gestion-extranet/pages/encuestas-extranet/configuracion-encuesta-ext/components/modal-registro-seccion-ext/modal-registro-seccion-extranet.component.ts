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

@Component({
  selector: 'app-modal-registro-seccion-extranet',
  templateUrl: './modal-registro-seccion-extranet.component.html',
  styleUrls: ['./modal-registro-seccion-extranet.component.css']
})
export class ModalRegistroSeccionExtranetComponent implements OnInit {
  _TIPO_PREGUNTA=TIPO_PREGUNTA;
  @ViewChild('checkTipoArchivo_3', { static: false }) checkTipoArchivo_3Element: ElementRef;

  @Input() title:string="Agregar";
  @Input() is_first:boolean = false;  
  @Input() seccion: SeccionResponseItem;
  @Input() id_encuesta: number;
  @Input() isVisibleModal:boolean = false;
  @Output() onCloseModal:EventEmitter<boolean> = new EventEmitter();
  @Output() onSaveDataSeccion: EventEmitter<boolean> = new EventEmitter();

  array_tipos_archivos: string[] = [];
  array_archivo_tipo_archivo: any[] = [];
  texto_mensaje: string=null;
  constructor(
    private encuesta_s:EncuestasService,
    private _formBuilder: FormBuilder,
    private notification: NzNotificationService,
    private modal: NzModalService,
    private cd: ChangeDetectorRef,
    private spinner: NgxSpinnerService
  ) { }

  modal_width:number=800;
  frm:SeccionResponseItem={id_encuesta_seccion:0,id_encuesta:0};
  selectedPreguntaCondicional:PreguntaResponseItem=null;

  frmSEC={
    frmSeccion:new FormControl(null, Validators.required)
  }

  async ngOnInit() {
    let basic_frm:SeccionResponseItem={id_encuesta_seccion:0,id_encuesta:this.id_encuesta};
    let seccion = {...this.seccion};
    this.frm = seccion?seccion:basic_frm;
  }
  JSON_INIT(){ }
  

  handleSaveFormularioModal=()=>{
    
    let allow=true, required_filled=true;
    let frm_keys = Object.keys(this.frmSEC);
    let str="<ul>";
    let filas_unicas=true;
    let columnas_unicas =true;
    for (let i = 0; i < frm_keys.length; i++) {
      let frmkey = frm_keys[i];
      if(this.frmSEC[frmkey].invalid){
        this.frmSEC[frmkey].markAsTouched();
        this.frmSEC[frmkey].markAsDirty();
        this.frmSEC[frmkey].updateValueAndValidity();
        allow=false;required_filled=false;
      }   
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
      let filter:SeccionSaveUpdateItem = {...this.frm};
      filter.id_encuesta=this.id_encuesta;
      this.spinner.show();
      this.encuesta_s._SaveUpdateSeccion(filter).then(datos => {
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
}
