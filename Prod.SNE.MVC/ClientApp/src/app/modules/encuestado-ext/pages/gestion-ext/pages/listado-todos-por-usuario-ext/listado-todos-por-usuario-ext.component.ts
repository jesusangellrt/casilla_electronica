import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { EncuestaAgradecimientoData, EncuestaBienvenidaData, EncuestaData, EncuestaMainData, EncuestasService, ESTADO_COMPLETADO, FileService, SisEnumeradoService,
  TIPO_ENCUESTA, ESTADO_ADMINISTRADO } from '@app/_core';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-listado-todos-por-usuario-ext',
  templateUrl: './listado-todos-por-usuario-ext.component.html',
  styleUrls: ['./listado-todos-por-usuario-ext.component.css']
})
export class ListadoTodosPorUsuarioExtComponent implements OnInit {
  @Output() onGoListadoPrincipal:EventEmitter<boolean> = new EventEmitter();
  @Output() onEmitDataToHeader: EventEmitter<any> = new EventEmitter();
  array_estados=[{id:0,name:'Estados'},{id:1,name:'Sin comenzar'},{id:2,name:'Comenzadas'},{id:3,name:'Completadas'},{id:4,name:'Finalizadas'}];
  frm={
    titulo:null,
    estado:1,
    fecha_inicio:null,
    fecha_fin:null
  }
  formMACRO:FormGroup;
  constructor(
    private notification: NzNotificationService,
    private encuesta_s:EncuestasService,
    private sis_enumerado_s:SisEnumeradoService,
    private spinner: NgxSpinnerService,
    private modal: NzModalService,
    private _fileService: FileService,
    private sanitizer: DomSanitizer,
    private cd: ChangeDetectorRef,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.get_list();
    this.formMACRO = this._formBuilder.group({
      FechaHoraInicio: [null],
      FechaHoraFin: [null]
    });
  }
  today = new Date();
  handleOnEmitDataToHeader=(e)=>{
    this.onEmitDataToHeader.emit(e);
  }
  _ESTADO=ESTADO_ADMINISTRADO;
  EncuestaList=[];
  cargando_tabla=true;
  pageIndex: number = 1;
  total: number = 0;
  pageSize: number = 10;
  get_list=()=>{
    localStorage.setItem("is_filling", "false");
    this.cargando_tabla = true;
    let filtro = { ...this.frm };
    this.spinner.show();
    let today = new Date();
    this.encuesta_s._GetAllEncuestasListByUserExtranet(filtro, this.pageIndex, this.pageSize)
      .then(async (datos) => {
        this.spinner.hide();
        if (datos && datos.data ) {
          let dt = datos.data;
          for (let i = 0; i < dt.length; i++) {
            let e=dt[i];
            e.porcentaje_avance=String(e.conteo_resuelto?(100*(e.conteo_resuelto/e.total_preguntas)):0);
            e.fecha_fin_date=new Date(e.fin);
            e.today=today;
            let b64 = null;
            if(e.iden_imagen != null){
              b64=await this.onGetSavedFileByCodeWithReturn(e.iden_imagen);
            }
            
            dt[i].b64_file= b64;
            dt[i].has_imagen=b64?true:false;
          }
          this.EncuestaList = dt;
          this.total = datos.data.TotalRows;
        }
        this.cargando_tabla = false;
      })
      .catch(() => {
        this.cargando_tabla = false;
      });
  }

  onGetSavedFileByCodeWithReturn = async (codigo: string) =>{
    let ur_file=null,has_file=false;
    await this._fileService.getFilesById(codigo).then(resp => {
        if (resp.Success && resp.Data && resp.Data[0].content!=null){
          var binary = atob(resp.Data[0].content.replace(/\s/g, ''));
          var len = binary.length;
          var buffer = new ArrayBuffer(len);
          var view = new Uint8Array(buffer);
          for (var i = 0; i < len; i++) {
              view[i] = binary.charCodeAt(i);
          }
          let contentType =resp.Data[0].contentType;
          //var blob = new Blob([view], { type: contentType });
          ur_file = 'data:'+contentType+';base64,'+resp.Data[0].content;  
          has_file=true;
        }
    });
    //return ur_file;
    return has_file?this.sanitizer.bypassSecurityTrustResourceUrl(ur_file):null;
  }


  handleClickLimpiar = () => {
    this.frm = {
      titulo:null,
      estado:1,
      fecha_inicio:null,
      fecha_fin:null
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

  goBackMainList=()=>{
    this.onGoListadoPrincipal.emit(true);
    localStorage.setItem("is_filling", "false");
  }


  verListado=true;
  verItemParaLLenado=false;
  encuesta_data:EncuestaData={};
  encuesta_main_data:EncuestaMainData;
  encuesta_welcome_data:EncuestaBienvenidaData;
  indicaciones:string;
  encuesta_agradecimiento_data:EncuestaAgradecimientoData;
  selected_item;
  verParaLLenado(item){
    this.spinner.show();
    
    this.encuesta_s._getEncuestaDataByID(item.id_encuesta).then(datos => {
      this.encuesta_data = datos.data;
      this.encuesta_main_data=this.encuesta_data.encuesta;
      this.encuesta_welcome_data=this.encuesta_data.bienvenida;
      this.indicaciones=this.encuesta_data.bienvenida.indicaciones?this.encuesta_data.bienvenida.indicaciones:'';
      this.encuesta_agradecimiento_data=this.encuesta_data.agradecimiento;
      this.selected_item=item;
      this.verItemParaLLenado=true;
      this.verListado=false;
      this.spinner.hide();
      this.cd.detectChanges();
      this.cd.markForCheck();
    }).catch(err => {});
  }

  handleGoInicio(e){
    this.verItemParaLLenado=false;
    this.verListado=true;
    localStorage.setItem("is_filling", "false");
    this.get_list();
  }

  selected_id_encuesta=0;
  selected_title=0;
  show_resultados=false;
  verResultados(item){
    this.selected_title=item.titulo;
    this.selected_id_encuesta=item.id_encuesta;
    this.verListado=false;
    this.show_resultados=true;
  }

  handleGoBackListadoAll=(e)=>{
    this.show_resultados=false;
    this.verListado=true;
    localStorage.setItem("is_filling", "false");
  }

  disabledStartDate=(startValue: Date):boolean=>{
    if (!startValue || this.frm.fecha_fin==null) {
      return false;
    }else{
      return startValue.getTime() > new Date(this.frm.fecha_fin).getTime();
    }
  }
  disabledEndDate=(endValue: Date):boolean=>{
    if (!endValue || this.frm.fecha_inicio==null) {
      return false;
    }else{
      return endValue.getTime() <= new Date(this.frm.fecha_inicio).getTime();
    }
  }
}
