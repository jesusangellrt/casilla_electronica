import {  Component, EventEmitter, Input, OnInit, Output,ViewChild,ElementRef } from '@angular/core';
import { EncuestasService, PreguntaResponseItem, TIPO_PREGUNTA } from '@app/_core';
import { NzNotificationService } from 'ng-zorro-antd';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-modal-reordenar-pregunta-sec-ext',
  templateUrl: './modal-reordenar-pregunta-sec-ext.component.html',
  styleUrls: ['./modal-reordenar-pregunta-sec-ext.component.css']
})
export class ModalReordenarPreguntaSecExtranetComponent implements OnInit {
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
  arraySecciones: any;
  modal_width:number=1200;
  frm:PreguntaResponseItem={id_pregunta:0,id_encuesta:0,es_obligatorio:true};
  selectedPreguntaCondicional:PreguntaResponseItem=null;
  async ngOnInit() {
   
    const encuesta = this.id_encuesta;
    this.getPreguntasSeccionEncuesta();
    //this.get_list();
  }
  JSON_INIT(){
  }

  PreguntasList=[];
  pageIndex: number = 1;
  total: number = 0;
  pageSize: number = 1000;
  get_list=async ()=>{
    let filtro = { id_encuesta: this.id_encuesta, mostar_solo_condicional:false };
    this.encuesta_s._GetPreguntasByEncuestaOrdenamiento(this.id_encuesta)
    .then((datos) => {
      console.log(datos);
      if (datos && datos.data) {
        let data = datos.data;
        data.forEach((e,_idx)=>{e.idx=_idx;});
        this.PreguntasList = data;
      }
    })
    .catch(() => {
    });
  }

  handleSaveModal=()=>{
    this.spinner.show();
    this.encuesta_s._UpdatePreguntaSeccionEncuestaOrdenamiento(this.arraySecciones)
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
    let letra = event.container.id.split(/[\s-]+/)
    let last = letra[letra.length - 1]
    let arrayCambio =  this.arraySecciones.find(x => x.orden == Number(last));
    moveItemInArray(arrayCambio.preguntas, event.previousIndex, event.currentIndex);
  }

  cerrar_pre_modal=()=>{
    this.isVisibleModal=false;
  }

  getPreguntasSeccionEncuesta=()=>{    
    let filtro = { id_encuesta: this.id_encuesta, _mostar_solo_condicional:false };
    this.encuesta_s._GetListaPreguntasSeccionByEncuesta(filtro, this.pageIndex, 10000)
    .then((datos) => {
      console.log(datos);
      /*let data = datos.data;
        data.forEach((e,_idx)=>{e.idx=_idx;});
        this.PreguntasList = data;*/
      this.arraySecciones = datos.data;
    }).catch(() => {});
  }
}
