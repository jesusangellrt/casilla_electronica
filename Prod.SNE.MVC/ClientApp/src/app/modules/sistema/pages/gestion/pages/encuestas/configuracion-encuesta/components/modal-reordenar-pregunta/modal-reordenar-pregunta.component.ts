import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output,ViewChild,ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CategoriaService, EncuestasService, PreguntaResponseItem, 
  SisEnumeradoService, TIPO_PREGUNTA } from '@app/_core';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-modal-reordenar-pregunta',
  templateUrl: './modal-reordenar-pregunta.component.html',
  styleUrls: ['./modal-reordenar-pregunta.component.css']
})
export class ModalReordenarPreguntaComponent implements OnInit {
  _TIPO_PREGUNTA=TIPO_PREGUNTA;
  @ViewChild('checkTipoArchivo_3', { static: false }) checkTipoArchivo_3Element: ElementRef;

  @Input() title:string="Agregar";
  @Input() id_encuesta: number;
  @Input() isVisibleModal:boolean = false;
  @Output() onCloseModal:EventEmitter<boolean> = new EventEmitter();
  @Output() onSaveOrdenamiento: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private encuesta_s:EncuestasService,
    private notification: NzNotificationService,
    private spinner: NgxSpinnerService
  ) { }

  modal_width:number=850;
  frm:PreguntaResponseItem={id_pregunta:0,id_encuesta:0,es_obligatorio:true};
  selectedPreguntaCondicional:PreguntaResponseItem=null;
  async ngOnInit() {
    const encuesta = this.id_encuesta;
    this.get_list();
  }
  JSON_INIT(){
  }

  PreguntasList=[];
  pageIndex: number = 1;
  total: number = 0;
  pageSize: number = 1000;
  get_list=async ()=>{
    this.spinner.show();
    let filtro = { id_encuesta: this.id_encuesta, mostar_solo_condicional:false };
    this.encuesta_s._GetPreguntasByEncuestaOrdenamiento(this.id_encuesta)
    .then((datos) => {
      this.spinner.hide();
      if (datos && datos.data) {
        let data = datos.data;
        data.forEach((e,_idx)=>{e.idx=_idx;});
        this.PreguntasList = data;
      }

      /*if (datos && datos.data) {
        let data = datos.data;
        data.forEach((e,_idx)=>{e.idx=_idx;});
        this.PreguntasList.push(data);
      }

      if (datos && datos.data) {
        let data = datos.data;
        data.forEach((e,_idx)=>{e.idx=_idx;});
        this.PreguntasList.push(data);
      }*/
    })
    .catch(() => {
    });
  }

  handleCancelarModal=()=>{
    this.onCloseModal.emit(true);
  }

  handleSaveModal=()=>{
   this.spinner.show();
    this.encuesta_s._UpdatePreguntaEncuestaOrdenamiento(this.PreguntasList)
    .then((datos) => {  
      this.spinner.hide();    
      if(datos.data.Success){
        let str='<ul>';
        datos.data.Messages.forEach(message => {
          str+=`<li>${message}</li>`;
        });
        str+='</ul>';
        this.createNotification('success','Éxito',str);
        this.onSaveOrdenamiento.emit(true);
      }
    })
    .catch(() => {});
  }
  

  createNotification = (type: string, title: string, message: string): void => {
    this.notification.create(
      type,
      title,
      message
    );
  };

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.PreguntasList, event.previousIndex, event.currentIndex);
  }

  cerrar_pre_modal=()=>{
    this.isVisibleModal=false;
  }
}
