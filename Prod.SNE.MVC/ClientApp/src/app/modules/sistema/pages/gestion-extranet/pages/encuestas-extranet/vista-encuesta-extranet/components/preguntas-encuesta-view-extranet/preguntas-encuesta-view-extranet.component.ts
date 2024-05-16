import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EncuestaData, EncuestasService, PreguntaResponseItem, SisEnumeradoService } from '@app/_core';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-preguntas-encuesta-view-extranet',
  templateUrl: './preguntas-encuesta-view-extranet.component.html',
  styleUrls: ['./preguntas-encuesta-view-extranet.component.css']
})
export class PreguntasEncuestaViewExtranetComponent implements OnInit {

  @Input() encuesta_data: EncuestaData;
  @Input() id_encuesta:number;
  @Output() onGoEncuestados: EventEmitter<boolean> = new EventEmitter();
  @Output() onGoDatos: EventEmitter<boolean> = new EventEmitter();
  constructor(
    private encuesta_s:EncuestasService,
    private sis_enumerado_s:SisEnumeradoService,
    private notification: NzNotificationService,
    private spinner: NgxSpinnerService,
    private modal: NzModalService
  ) { }

  ngOnInit() {
    this.get_list();
  }

 
  PreguntasList=[];PreguntasList_Condicionales=[];
  cargando_tabla=true;
  pageIndex: number = 1;
  total: number = 0;
  pageSize: number = 1000;
  get_list=async ()=>{
    this.cargando_tabla = true;
    let filtro = { id_encuesta: this.encuesta_data.encuesta.id_encuesta };
    this.spinner.show();
    await this.getPreguntasCondicionales();
    this.encuesta_s._GetPreguntasByEncuesta(filtro, this.pageIndex, this.pageSize)
      .then((datos) => {
        this.spinner.hide();
        if (datos && datos.data && datos.data.Data) {
          let data = datos.data.Data;
          data.forEach((e,_idx)=>{e.idx=_idx;});
          this.PreguntasList = data;
          this.total = datos.data.TotalRows;
        }
        this.cargando_tabla = false;
      })
      .catch(() => {
        this.cargando_tabla = false;
        this.spinner.hide();
      });
  }
  async getPreguntasCondicionales(){
    let filtro = { id_encuesta: this.encuesta_data.encuesta.id_encuesta,mostar_solo_condicional:true };
    await this.encuesta_s._GetPreguntasByEncuesta(filtro, 0, 1000)
      .then((datos) => {
        this.spinner.hide();
        if (datos && datos.data && datos.data.Data) {
          let data = datos.data.Data;
          this.PreguntasList_Condicionales = data;
        }
      })
      .catch(() => {
        this.spinner.hide();
      });
  }
  handleClickLimpiar = () => {
    this.pageIndex = 1;
    this.get_list();
  };

  handleClickBuscar = (reset: boolean = false): void => {
    if (reset) {
      this.pageIndex = 1;
    }
    this.get_list();
  };


  save_update_preguntas=(publicar=false, ir_siguiente=false)=>{
    //se cambia estado en la bd
  }

  handleOnCloseModal=(e)=>{
    this.show_modal_pregunta=false;
  }
  handleOnSaveDataPregunta=(e)=>{
    this.show_modal_pregunta=false;
    this.get_list();
  }
  
  title_modal="";
  show_modal_pregunta:boolean=false;
  selected_pregunta:PreguntaResponseItem;
  is_first:boolean=false;
  es_por_defecto:boolean=false;
  md_add_edit_pregunta=(idx=null)=>{
    let item = idx!=null?this.PreguntasList[idx]:null;
    this.title_modal="Vista de ";
    let selected_item = item;
    this.selected_pregunta=selected_item;
    this.show_modal_pregunta=true;
  }

  md_delete_pregunta=(item:PreguntaResponseItem)=>{
  }

  send_to_datos=()=>{
    this.onGoDatos.emit(true);
  }
  send_to_encuestados=()=>{
    this.onGoEncuestados.emit(true);
  }
  createNotification = (type: string, title: string, message: string): void => {
    this.notification.create(
      type,
      title,
      message
    );
  };
  
}
