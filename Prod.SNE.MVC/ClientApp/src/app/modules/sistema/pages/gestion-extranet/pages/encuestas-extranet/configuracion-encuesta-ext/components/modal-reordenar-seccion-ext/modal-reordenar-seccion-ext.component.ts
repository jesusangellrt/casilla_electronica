import {  Component, EventEmitter, Input, OnInit, Output,ViewChild,ElementRef } from '@angular/core';
import { EncuestasService, PreguntaResponseItem, TIPO_PREGUNTA } from '@app/_core';
import { NzNotificationService } from 'ng-zorro-antd';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-modal-reordenar-seccion-ext',
  templateUrl: './modal-reordenar-seccion-ext.component.html',
  styleUrls: ['./modal-reordenar-seccion-ext.component.css']
})
export class ModalReordenarSeccionExtranetComponent implements OnInit {
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

  modal_width:number=1200;
  frm:PreguntaResponseItem={id_pregunta:0,id_encuesta:0,es_obligatorio:true};
  selectedPreguntaCondicional:PreguntaResponseItem=null;
  async ngOnInit() {
    const encuesta = this.id_encuesta;
    this.get_list();
  }
  JSON_INIT(){
  }

  SeccionesList=[];
  pageIndex: number = 1;
  total: number = 0;
  pageSize: number = 1000;
  get_list=async ()=>{
    let filtro = { id_encuesta: this.id_encuesta, mostar_solo_condicional:false };
    this.encuesta_s._GetSeccionesByEncuesta(filtro, this.pageIndex, this.pageSize)
    .then((datos) => {
      if (datos && datos.data && datos.data.Data) {
        let data = datos.data.Data;
        data.forEach((e,_idx)=>{e.idx=_idx;});
        this.SeccionesList = data;
        this.total = datos.data.TotalRows;
      }
    })
    .catch(() => {
    });
  }

  handleSaveModal=()=>{
    this.spinner.show();
    this.encuesta_s._UpdateSeccionEncuestaOrdenamiento(this.SeccionesList)
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

  handleCancelarModal=()=>{
    this.onCloseModal.emit(true);
  }

  createNotification = (type: string, title: string, message: string): void => {
    this.notification.create(
      type,
      title,
      message
    );
  };

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.SeccionesList, event.previousIndex, event.currentIndex);
  }

  cerrar_pre_modal=()=>{
    this.isVisibleModal=false;
  }
}
