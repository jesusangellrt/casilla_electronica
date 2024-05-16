import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EncuestaData, EncuestasService, PreguntaResponseItem, SisEnumeradoService } from '@app/_core';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-re-preguntas-encuesta-extranet',
  templateUrl: './re-preguntas-encuesta-extranet.component.html',
  styleUrls: ['./re-preguntas-encuesta-extranet.component.css']
})
export class RePreguntasEncuestaExtranetComponent implements OnInit {

  @Input() encuesta_data: EncuestaData;
  @Input() id_encuesta:number;
  @Output() onPublishSuccess: EventEmitter<boolean> = new EventEmitter();
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
    let noValidos = this.PreguntasList.filter(f=>f.id_tipo_archivo==null );
    //valida categoria y tipo archivo
    if(noValidos.length > 0){
      this.createNotification('warning','Advertencia',"<ul><li>Debe completar la configuración de la pregunta de dependencia.</li></ul>");
    }else{
      this.createNotification('success','Éxito',"<ul><li>Guardado con éxito.</li></ul>");
      if(ir_siguiente){
        this.onPublishSuccess.emit(true);
      }
    }
  }
  publicar(){
    this.encuesta_s._PublicarEncuesta(this.id_encuesta)
    .then((datos) => {
      if(datos.data){
        let str='<ul>';
        datos.data.Messages.forEach(message => {
          str+=`<li>${message}</li>`;
        });
        str+='</ul>';
        if(datos.data.Success){
          this.createNotification('success','Éxito',str);
          this.get_list();
          this.onPublishSuccess.emit(true);
        }else{
          this.createNotification('warning','Adveretencia',str);
        }
      }
    }).catch(() => {});
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
  md_add_edit_pregunta=(idx=null, por_defecto:boolean=false)=>{
    let item = idx!=null?this.PreguntasList[idx]:null;
    this.title_modal=item?"Editar":"Agregar";
    let selected_item = item;
    this.selected_pregunta=selected_item;
    this.es_por_defecto=por_defecto;
    if(idx!=null){
      this.is_first=idx==0?true:false;
    }else{
      this.is_first = this.PreguntasList.length>0?false:true;
    }
    this.show_modal_pregunta=true;
  }

  md_delete_pregunta=(idx)=>{
    let item = this.PreguntasList[idx];
    this.modal.confirm({
      nzTitle: 'Eliminar',
      nzContent: '¿Esta seguro de eliminar la pregunta seleccionada?',
      nzOkText: 'Si',
      nzOkType: 'primary',
      nzCancelText: 'No',
      nzOnOk: () => {
        this.encuesta_s._EnableDisable(item.id_pregunta,"pregunta")
        .then((datos) => {
          if(datos.data){
            if(datos.data.Success){
              let str='<ul>';
              datos.data.Messages.forEach(message => {
                str+=`<li>${message}</li>`;
              });
              str+='</ul>';
              this.createNotification('success','Éxito',str);
              this.get_list();
            }
          }
        }).catch(() => {});
      },
      nzOnCancel: () =>{}
    });
  }

  send_to_datos=()=>{
    this.onGoDatos.emit(true);
  }
  createNotification = (type: string, title: string, message: string): void => {
    this.notification.create(
      type,
      title,
      message
    );
  };
  
}
