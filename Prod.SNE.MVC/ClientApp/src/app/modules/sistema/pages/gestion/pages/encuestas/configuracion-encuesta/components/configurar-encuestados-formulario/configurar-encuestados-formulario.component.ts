import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComunService,EncuestasConfigurarService } from '@app/_core';
import { NzNotificationService } from 'ng-zorro-antd';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-configurar-encuestados-formulario',
  templateUrl: './configurar-encuestados-formulario.component.html'
})
export class ConfigurarEncuestadosFormularioComponent implements OnInit {
  @Input() isVisibleModal: boolean = false;
  @Output() onChangeVisible: EventEmitter<boolean>;
  @Output() onSaveForm: EventEmitter<boolean>;
  @Output() onEmitListaSeleccionada:EventEmitter<any>;

  listaEncuestados: any[]=[];
  pageIndex: number = 1;
  total: number = 0;
  pageSize: number = 10; 
  cargando=true;
  estaGuardando: boolean = false;

  list_dependencia: any;
  list_regimen: any;

  allChecked = false;
  indeterminate = true;

  form: any = 
    {
      codigo_dependencia: null,
      id_regimen: null,
      dni: null,
      nombres_apellidos: null,
    };

    array_encuestados:any[]=[];
    es_seleccionado=false;
    listaEncuestadosSeleccionados :Array<any>=[];
    list_seleccion=[];

  constructor(
    private _encuestasConfigurarService :EncuestasConfigurarService,
    private spinner: NgxSpinnerService,
    private notification: NzNotificationService,
    private _comunService: ComunService
  ) {
    this.onChangeVisible = new EventEmitter<boolean>();
    this.onSaveForm = new EventEmitter<boolean>();
    this.onEmitListaSeleccionada = new EventEmitter<any>();
   }

  async ngOnInit() {
    //await this.all_data();
    this.GetDependencia();
    this.GetRegimen();
    this.getListadoOnly();
  }


  handleCerrarFormularioModal = (force_select=false) => {
    if(force_select){
      if(this.listaEncuestadosSeleccionados.length==0){
        this.createNotification("warning","Advertencia","Debe seleccionar al menos un encuestado");
      }else{
        this.onEmitListaSeleccionada.emit(this.listaEncuestadosSeleccionados);
      }
    }else{
      this.onChangeVisible.emit(false);
    }
  }

  handleClickBuscar = (reset: boolean = false): void => {
    if (reset) {
      this.pageIndex = 1;
    }
    this.ListarEncuestados();
  };

  handleClickBuscarFrm = (reset: boolean = false): void => {
    this.pageIndex = 1;
    this.ListarEncuestados(true);
  };

  handleClickLimpiar(){
    this.form ={
      codigo_dependencia: null,
      id_regimen: null,
      dni: null,
      nombres_apellidos: null,
    }; 
    this.pageIndex = 1;
    this.getListadoOnly();
    //this.ListarEncuestados(true);
  }
  all_encuestadosList=[];
  ListarEncuestados = (force_search=false) =>{
    this.cargando = true;
    let filtro = { ...this.form };
    /*
    if(force_search){
      this.es_seleccionado=false;
      let filtro = { ...this.form };
      this.listaEncuestadosSeleccionados=[];
      this._encuestasConfigurarService.GetListEncuestados(filtro, this.pageIndex, 1000000)
      .then((datos) => {
        if (datos && datos.data && datos.data.Data) {
          this.all_encuestadosList = datos.data.Data;
        }
        this.getListadoOnly(filtro);
      })
      .catch(() => {});
    }else{
      this.getListadoOnly(filtro);
    }*/
  }
  handleSortByKey=(e,type="default")=>{
    let array=this.listaEncuestados;//.sort();
    this.listaEncuestados=[];
    this.loading_table=true;
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
      this.listaEncuestados=array;
      this.loading_table=false;
    },400)
  }

  getListadoOnly=()=>{
    this.spinner.show();
    this.cargando=true;
    let filtro = {...this.form};
    this.listaEncuestadosSeleccionados=[];
    this._encuestasConfigurarService.GetListEncuestados(filtro, this.pageIndex, 1000000)
      .then((datos) => {
        this.spinner.hide();
        if (datos && datos.data && datos.data.Data) {
          //listaEncuestadosSeleccionados
          let dt=datos.data.Data;
          dt.forEach((f,idx)=>{
            f.nro=idx+1;
            f.es_seleccionado = this.listaEncuestadosSeleccionados.find(e=>e.codigo_trabajador == f.codigo_trabajador)?true:false;
          });
          this.listaEncuestados =dt; 
          this.total = datos.data.TotalRows;
        }
        this.cargando = false;
      })
      .catch(() => {
        this.cargando = false;
      });
  }

  GetDependencia = () => {
    this._comunService.GetDependencia()
      .then(data => {
        this.list_dependencia = data;
      })
      .catch(err => {
        console.log({ err });
      })
  }

  GetRegimen = () => {
    this._comunService.GetRegimen()
      .then(data => {
        this.list_regimen= data;
      })
      .catch(err => {
        console.log({ err });
      })
  }

  handleChangeSeleccion = ($event, item) => {  
    if ($event) {
      this.listaEncuestadosSeleccionados.push(item);
    } else {     
      this.listaEncuestadosSeleccionados = this.listaEncuestadosSeleccionados.filter((i) => i.codigo_trabajador != item.codigo_trabajador);
    }
    this.es_seleccionado = (this.listaEncuestadosSeleccionados.length==this.listaEncuestados.length?true:false);
  };
  loading_table=false;
  handleChangeTodoSeleccion = ($event) => {
    this.loading_table=true;
    if ($event) {
      let all = this.listaEncuestados;
      this.listaEncuestadosSeleccionados = all;
      let array_encuestados = this.listaEncuestados;
      array_encuestados.forEach(item => {
        item.es_seleccionado=true;      
      });
      this.listaEncuestados=[];
      setTimeout(()=>{
        this.listaEncuestados=array_encuestados;
        this.loading_table=false;
      },350);
    }  
    else{
      let data=this.listaEncuestados;
      this.listaEncuestadosSeleccionados=[];
      this.listaEncuestados=[];
      setTimeout(()=>{
        data.forEach(e => {    
          e.es_seleccionado=false;
        });  
        this.listaEncuestados=data;
        this.loading_table=false;
      },350);
     
    }
  };


  createNotification = (type: string, title: string, message: string): void => {
    this.notification.create(
      type,
      title,
      message
    );
  };
}
