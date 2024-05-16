import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EncuestasService } from '@app/_core';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-encuestados-encuesta-view',
  templateUrl: './encuestados-encuesta-view.component.html',
  styleUrls: ['./encuestados-encuesta-view.component.css']
})
export class EncuestadosEncuestaViewComponent implements  OnInit {

  @Input() id_encuesta;
  @Output() onGoPreguntas: EventEmitter<boolean> = new EventEmitter();
  esVisibleFormularioEncuestados: boolean = false;
  constructor(
    private notification: NzNotificationService,
    private encuesta_s:EncuestasService,
    private spinner: NgxSpinnerService,
    private modal: NzModalService,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.get_list();
  }
  form={
    dni:null,
    nombres:null,
    id_encuesta:0
  };
  EncuestadosList=[];
  cargando_tabla=true;
  pageIndex: number = 1;
  total: number = 0;
  pageSize: number = 10;
  get_list=()=>{
    this.form.id_encuesta=this.id_encuesta?this.id_encuesta:0;
    this.cargando_tabla = true;
    let filtro = { ...this.form };
    this.spinner.show();
    this.encuesta_s._GetEncuestadosByFilterEncuesta(filtro, this.pageIndex, 100000)
      .then((datos) => {
        this.spinner.hide();
        this.error_encuestados=false;
        if (datos && datos.data && datos.data.Data) {
          let dt=datos.data.Data;
          dt.forEach((e,idx)=>{
            e.nro=idx+1;
            e.dependecia=e.dependecia?e.dependecia:'';
            e.regimen=e.regimen?e.regimen:'';
            e.full_name=(e.nombre_trabajador?e.nombre_trabajador:'')+' '+(e.apellidos_trabajador?e.apellidos_trabajador:'')});
          this.EncuestadosList = dt;
          this.total = datos.data.TotalRows;
        }
        this.cargando_tabla = false;
      })
      .catch(() => {
        this.cargando_tabla = false;
      });
  }
  handleSortByKey=(e,type="default")=>{
    let array=this.EncuestadosList;//.sort();
    this.EncuestadosList=[];
    this.cargando_tabla=true;
    if(type=="default"){
      if(e.value=="ascend"){
        array.sort((a, b) =>  (a[e.key] > b[e.key]) ? 1 : ((b[e.key] > a[e.key]) ? -1 : 0));
      }else if(e.value=="descend"){
        array.sort((a, b) =>  (b[e.key] > a[e.key]) ? 1 : ((a[e.key] > b[e.key]) ? -1 : 0));
      }else{
        array.sort((a,b) => a.nro - b.nro);
      }
    }
    if(type=="string"){
      if(e.value=="ascend"){
        array.sort((a, b) =>{  
          return (a[e.key]?a[e.key].replace(/\s/g, ""):'').localeCompare(
            (b[e.key]?b[e.key].replace(/\s/g, ""):''), 'en', { sensitivity: 'base' });
        });
      }else if(e.value=="descend"){
        array.sort((a, b) =>{  
          return (b[e.key]?b[e.key].replace(/\s/g, ""):'').localeCompare(
            (a[e.key]?a[e.key].replace(/\s/g, ""):''), 'en', { sensitivity: 'base' });
        });
      }else{
        array.sort((a,b) => a.nro - b.nro);
      }
    }
    setTimeout(() =>{
      this.EncuestadosList=array;
      this.cargando_tabla=false;
    },350)
  }

  handleClickLimpiar = () => {
    this.form={
      id_encuesta:this.id_encuesta?this.id_encuesta:0,
      dni:null,
      nombres:null
    };
    this.pageIndex = 1;
    this.get_list();
  };

  handleClickBuscar = (reset: boolean = false): void => {
    if (reset) {
      this.pageIndex = 1;
    }
    this.get_list();
  };
  goback(){
    this.onGoPreguntas.emit(true);
  }
  _delete_encuestado=(id:number)=>{
    this.modal.confirm({
      nzTitle: 'Eliminar',
      nzContent: 'Esta seguro de eliminar el encuestado seleccionado',
      nzOkText: 'Si',
      nzOkType: 'primary',
      nzCancelText: 'No',
      nzOnOk: () => {
        this.encuesta_s._EnableDisable(id,"encuestados_encuesta")
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
  createNotification = (type: string, title: string, message: string): void => {
    this.notification.create(
      type,
      title,
      message
    );
  };
  error_encuestados=false;
  save_update_encuestados=(publicar=false)=>{
    //se cambia estado en la bd
    if(publicar){
      if(this.EncuestadosList.length>0){
        this.error_encuestados=false;
        this.modal.confirm({
          nzTitle: '¿Esta seguro de publicar la encuesta?',
          nzContent: 'Una vez publicada no podra modificarla.',
          nzOkText: 'Si',
          nzOkType: 'primary',
          nzCancelText: 'No',
          nzOnOk: () => {
            this.publicar();
          },
          nzOnCancel: () =>{}
        });   
      }else{
        this.error_encuestados=true;
        this.createNotification('warning','Advertencia',"<ul><li>Debe registrar al menos un encuestado.</li></ul>");
      }
      
    }else{
      if(this.EncuestadosList.length>0){  
        this.createNotification('success','Éxito',"<ul><li>Guardado con éxito.</li></ul>");
        this.error_encuestados=false;
      }else{
        this.error_encuestados=true;
        this.createNotification('warning','Advertencia',"<ul><li>Debe registrar al menos un encuestado.</li></ul>");
      }
      
    }
  }
  publicar(){
  }

  handleClickAgregarEncuestado = () => {
    this.esVisibleFormularioEncuestados = true;  
  }


  handleCloseAgregarEncuestado = (e) => {
    this.esVisibleFormularioEncuestados = false;
  };

  handleSave = (e) => {
    this.esVisibleFormularioEncuestados = false;
  };

  handleEmitListaSeleccionada=(lista:any[])=>{
    this.esVisibleFormularioEncuestados=false;
    let lst = lista.map(m=>{
        return {id_trabajador: m.codigo_trabajador, 
                id_dependencia:m.codigo_dependencia,
                id_regimen:m.id_regimen,
                dni_trabajador:m.dni,
                id_encuesta: this.id_encuesta
              }
      });
    
    this.spinner.show();
    this.encuesta_s._SaveEncuestadosList(lst)
    .then((datos) => {
      this.spinner.hide();
      if(datos.data){
        if(datos.data.Success){
          let str='<ul>';
          datos.data.Messages.forEach(message => {
            str+=`<li>${message}</li>`;
          });
          str+='</ul>';
          this.createNotification('success','Éxito',str);
          setTimeout(()=>{
            this.get_list()
          },150);
        }
      }
      
    })
    .catch(() => {this.spinner.hide();});
  }

}
