import { NodeFlags } from '@angular/compiler/src/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService, EncuestasService, FILE_SETTINGS, 
  FORMA_FILA, 
  JSON_TIPO_PREGUNTA, PreguntaResponseItem, PreguntaSaveUpdateItem, 
  SisEnumeradoService, SIS_TIPO_ENUMERADO, 
  TIPO_ARCHIVO_ENUMERADO, TIPO_PREGUNTA } from '@app/_core';
import th from 'date-fns/esm/locale/th/index.js';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-modal-vista-pregunta',
  templateUrl: './modal-vista-pregunta.component.html',
  styleUrls: ['./modal-vista-pregunta.component.css']
})
export class ModalVistaPreguntaComponent implements OnInit {
  _TIPO_PREGUNTA=TIPO_PREGUNTA;  respuesta_disparadora:any=null;
  @Input() title:string="Agregar";
  @Input() is_first:boolean = false;
  @Input() es_por_defecto:boolean=false;
  @Input() pregunta: PreguntaResponseItem;
  @Input() preguntas_condicionales=[];
  @Input() id_encuesta: number;
  @Input() isVisibleModal:boolean = false;
  @Output() onCloseModal:EventEmitter<boolean> = new EventEmitter();
  constructor(
    private sis_enumerado_s:SisEnumeradoService,
    private categoria_s:CategoriaService,
    private encuesta_s:EncuestasService,
    private _formBuilder: FormBuilder,
    private notification: NzNotificationService,
    private modal: NzModalService,
    private cd: ChangeDetectorRef
  ) { }

  modal_width:number=800;
  frm:PreguntaResponseItem={id_pregunta:0,id_encuesta:0,es_obligatorio:true};

  async ngOnInit() {
    await this.getComboInsitucional();
    await this.getTipoPregunta();
    await this.getTipoArchivos();
    await this.getCategoriaList();
    await this.getSubCategoriaList();
    let basic_frm:PreguntaResponseItem={id_pregunta:0,id_encuesta:this.id_encuesta, es_obligatorio:true};
    let pregunta = {...this.pregunta};
    this.frm = pregunta?pregunta:basic_frm;
    if(this.frm.id_pregunta!=null &&this.frm.id_pregunta>0){
      this.show_file_uploader=pregunta.id_tipo_archivo==TIPO_ARCHIVO_ENUMERADO.imagen?true:false;
      this.show_url=pregunta.id_tipo_archivo==TIPO_ARCHIVO_ENUMERADO.video?true:false;
      this.respuesta_disparadora = JSON.parse(pregunta.json_respuesta_condicional);
      if(this.es_por_defecto /*this.is_first*/){
        //this.frm.id_tipo_pregunta=TIPO_PREGUNTA.desplegable_institucional;
        this.cargar_formato_byTipo(TIPO_PREGUNTA.desplegable_institucional,true);
      }

      this.cd.markForCheck();
      this.cd.detectChanges();
      //manejo del json
      this.JSON_INIT();
    }
  }
  JSON_INIT(){
    let json = JSON.parse(this.frm.json_alternativas);
    let id_tipo_pregunta = this.frm.id_tipo_pregunta;
    if(id_tipo_pregunta==TIPO_PREGUNTA.desplegable_institucional){
      this.JSON_DESPLEGABLE_INSTITUCIONAL=json;
    }
    if(id_tipo_pregunta == TIPO_PREGUNTA.numerico_decimal){
      this.JSON_NUMERICO_DECIMAL = json;
    }
    if(id_tipo_pregunta==TIPO_PREGUNTA.desplegable_libre || 
      id_tipo_pregunta==TIPO_PREGUNTA.seleccion_unica || 
      id_tipo_pregunta==TIPO_PREGUNTA.seleccion_multiple){
        json.opciones.forEach((e,_idx) => {
          e.idx=_idx;
          let control=new FormControl(null,Validators.required);
          control.disable();
          this.frmAlternativaDescripcion.push(control);
          this.frmAlternativaPeso.push(new FormControl(null));
        });
        this.array_alternativa_select = json.opciones;
      if(id_tipo_pregunta==TIPO_PREGUNTA.desplegable_libre ){
        this.JSON_DESPLEGABLE_LIBRE=json;
      }else if(id_tipo_pregunta==TIPO_PREGUNTA.seleccion_unica){
        this.JSON_SELECCION_UNICA=json;
      }else{
        this.JSON_SELECCION_MULTIPLE=json;
      }
    }
    if(id_tipo_pregunta==TIPO_PREGUNTA.matriz){
      json.filas.forEach(e=>{
        let control=new FormControl(null,Validators.required);
        control.disable();
        this.frmFilaName.push(control);
      });
      json.columnas.forEach(e=>{
        let control=new FormControl(null,Validators.required);
        control.disable();
        this.frmColumnaName.push(control);
      });
      this.array_filas = json.filas;
      this.array_columnas = json.columnas;
      this.JSON_MATRIZ = json;
    }
  }

  //frmPRG:FormGroup;
  frmPRG={
    frmPregunta:new FormControl(null, Validators.required),
    frmTipoPregunta:new FormControl(null, Validators.required),
    frmEsObligatorio:new FormControl(true),
    frmCategoria:new FormControl(null, Validators.required),
    frmSubCategoria:new FormControl(null),
    frmDescripcionAdicional:new FormControl(null),
    frmTipoArchivo:new FormControl(null, Validators.required),
    frmEsCondicionada: new FormControl(false),
    frmEsCondicional: new FormControl(false),
    frmPreguntaCondicional: new FormControl(null)
  }
  //#region COMOBS
  async getComboInsitucional(){
    await this.sis_enumerado_s.GetEnumeradoByTipoEnumerado(SIS_TIPO_ENUMERADO.tipo_maestro_institucional).then(datos => {
      this.array_maestro_institucional =datos.data.filter(x=>x.es_eliminado==false);
    }).catch(err => {});
    //
  }
  array_tipo_file=[];
  async getTipoArchivos(){
    await this.sis_enumerado_s.GetEnumeradoByTipoEnumerado(SIS_TIPO_ENUMERADO.tipo_archivo).then(datos => {
      this.array_tipo_file =datos.data.filter(x=>x.es_eliminado==false);
    }).catch(err => {});
  }
  array_tipo_pregunta=[];
  async getTipoPregunta(){
    await this.sis_enumerado_s.GetEnumeradoByTipoEnumerado(SIS_TIPO_ENUMERADO.tipo_pregunta).then(datos => {
      this.array_tipo_pregunta =datos.data.filter(x=>x.es_eliminado==false);

    }).catch(err => {});
  }
  array_categoria=[];
  async getCategoriaList(){
    await this.categoria_s._getCategoriaList().then(datos => {
      this.array_categoria =datos.data.filter(x=>x.es_eliminado==false);
    }).catch(err => {});
  }
  array_sub_categoria=[];
  array_sub_categoria_all=[];
  async getSubCategoriaList(){
    await this.categoria_s._getSubCategoriaList().then(datos => {
      this.array_sub_categoria_all =datos.data.filter(x=>x.es_eliminado==false);
    }).catch(err => {});
  }
  filter_sub_categoria=(val, force=false)=>{
    let id_categoria = this.frm.id_categoria;
    this.array_sub_categoria = id_categoria?this.array_sub_categoria_all.filter(x=>x.id_categoria==id_categoria):[];
    if(force){
      //logica retirada
    }else{
      this.frm.id_sub_categoria=null;
    }
  }
  //#endregion
  
  array_maestro_institucional=[
    {id_enumerado:1,nombre:"Dependencia"},
    {id_enumerado:2,nombre:"Régimen"}
  ];
  JSON_DESPLEGABLE_INSTITUCIONAL = JSON_TIPO_PREGUNTA.desplegable_institucional;
  frmMaestroInstitucional:FormControl = new FormControl(null,Validators.required);
  JSON_DESPLEGABLE_LIBRE = JSON_TIPO_PREGUNTA.desplegable_libre;
  JSON_NUMERICO_ENTERO = JSON_TIPO_PREGUNTA.numerico_entero;
  JSON_NUMERICO_DECIMAL = JSON_TIPO_PREGUNTA.numerico_decimal;
  JSON_SELECCION_UNICA = JSON_TIPO_PREGUNTA.seleccion_unica;
  JSON_SELECCION_MULTIPLE = JSON_TIPO_PREGUNTA.seleccion_multiple;
  JSON_MATRIZ = JSON_TIPO_PREGUNTA.matriz;
  array_alternativa_select = [];
  frmAlternativaDescripcion: FormControl[]=[];
  frmAlternativaPeso: FormControl[]=[];
  frmCantidadDigitos:FormControl = new FormControl(null,Validators.required);


  array_filas=[];
  array_columnas=[];
  cargar_formato_byTipo=(idTipo, is_default=false /*is_first=false*/)=>{
    this.modal_width= idTipo==TIPO_PREGUNTA.matriz?1200:800;
    if(idTipo==TIPO_PREGUNTA.desplegable_institucional){
      if(is_default){
        this.JSON_DESPLEGABLE_INSTITUCIONAL.tbl_data=1;
      }
      
    }
  }

  //#region ARCHIVOS
  estaGuardando: boolean = false;
  tiposMimePermitidos = ["image/png", "image/jpeg"];
  imagen_MimePermitidos=["image/png", "image/jpeg","image/gif"];
  video_extensionAceptados= [".mp4"];
  imagen_extensionAceptados= [".png", ".jpeg"];
  pesoMaximoEnMB = FILE_SETTINGS.maxFileSize;
  url = "/api/comun/descargar-archivo";
  _imagen_archivo: Array<any>;
  _video_archivo: Array<any>;
  archivo: Array<any>;
  validar_fup: boolean = false;
  show_file_uploader=false;show_url=false;
  selected_tipo='';
  _extensionAceptados=[];
  set_tipo_file=()=>{
    let tipo = this.frm.id_tipo_archivo;
    let tipo_file = this.array_tipo_file.find(f=>f.id_enumerado==tipo);
    this.selected_tipo=tipo_file?tipo_file.nombre.toLowerCase():'';
    this.show_file_uploader = tipo?(tipo==TIPO_ARCHIVO_ENUMERADO.imagen?true:false):false;
    this.show_url=tipo?(tipo==TIPO_ARCHIVO_ENUMERADO.video?true:false):false;
    this._extensionAceptados=this.imagen_extensionAceptados;//tipo?(tipo==TIPO_ARCHIVO_ENUMERADO.video?this.video_extensionAceptados:this.imagen_extensionAceptados):[];
  }
  set_file_iden=(data)=>{
    this.error_imagen=false;
    this.frm.iden_imagen=data.codigo;
  }

  //#endregion
  parseInt = (value: string): string => value && value!=""?Number(value).toFixed(0):null;
  setJsonName=()=>{
    let pregunta = this.frm.pregunta
    this.JSON_DESPLEGABLE_INSTITUCIONAL.nombre = pregunta;
    this.JSON_DESPLEGABLE_LIBRE.nombre = pregunta;
    this.JSON_NUMERICO_ENTERO.nombre = pregunta;
    this.JSON_NUMERICO_DECIMAL.nombre = pregunta;
    this.JSON_SELECCION_UNICA.nombre = pregunta;
    this.JSON_SELECCION_MULTIPLE.nombre = pregunta;
    this.JSON_MATRIZ.nombre = pregunta;
  }
  //#region TIPO TABLA
  cargando_tabla=false;
  _add_alternativa_table=()=>{
    this.cargando_tabla=true;
    let data = this.array_alternativa_select;
    this.array_alternativa_select=[];
    setTimeout(()=>{
      let last = data.length;
      data.push(
        { idx:last ,peso: null, descripcion: null}
      );
      this.frmAlternativaDescripcion.push(new FormControl(null,Validators.required));
      this.frmAlternativaPeso.push(new FormControl(null,Validators.required));
      this.array_alternativa_select=data;
      this.cargando_tabla=false;
      this.cd.detectChanges();
      this.cd.markForCheck();
    }, 350)
  }
  _delete_alternativa_table=(idx)=>{
    this.cargando_tabla=true;
    this.modal.confirm({
      nzTitle: 'Eliminar',
      nzContent: 'Esta seguro de eliminar la alternativa seleccionada',
      nzOkText: 'Eliminar',
      nzOkType: 'primary',
      nzCancelText: 'No',
      nzOnOk: () => {
        let table = this.array_alternativa_select;
        this.array_alternativa_select=[];
        setTimeout(()=>{
          table.splice(idx,1);
          this.frmAlternativaDescripcion.splice(idx,1);
          this.frmAlternativaPeso.splice(idx,1);
          table.forEach((f,index)=>{f.idx=index});
          this.array_alternativa_select=table;
          this.cargando_tabla=false;
        },350);
      },
      nzOnCancel: () =>{
        this.cargando_tabla=false;
      }
    });   
  }
  //#endregion

  //#region TIPO MATRIZ
  frmFilaName:FormControl[]=[];
  frmColumnaName: FormControl[]=[];
  _add_filas=()=>{
    let data = this.JSON_MATRIZ.filas;
    this.JSON_MATRIZ.filas=[];
    this.cargando_tabla=true;
    this.error_filas_matriz=false;
    setTimeout(()=>{
      let last = data.length;
      let fila:FORMA_FILA={
        idx: last,
        nombre_fila: null
      };
      data.push(fila);
      this.frmFilaName.push(new FormControl(null,Validators.required));
      this.JSON_MATRIZ.filas=data;
      this.cargando_tabla=false;
      this.cd.detectChanges();
      this.cd.markForCheck();
    }, 350);
  }
  _delete_fila=(idx)=>{
    this.cargando_tabla=true;
    this.modal.confirm({
      nzTitle: 'Eliminar',
      nzContent: 'Esta seguro de eliminar la fila seleccionada',
      nzOkText: 'Eliminar',
      nzOkType: 'primary',
      nzCancelText: 'No',
      nzOnOk: () => {
        let table = this.array_filas;
        this.array_filas=[];
        setTimeout(()=>{
          table.splice(idx,1);
          this.frmFilaName.splice(idx,1);
          table.forEach((f,index)=>{f.idx=index});
          this.array_filas=table;
          this.cargando_tabla=false;
        },350);
      },
      nzOnCancel: () =>{
        this.cargando_tabla=false;
      }
    });   
  }
  cargando_columnas=false;
  add_columnas=()=>{
    let data = this.array_columnas;
    this.array_columnas=[];
    this.cargando_columnas=true;
    this.error_columnas_matriz=false;
    setTimeout(()=>{
      let last = data.length;
      data.push({idx: last, nombre_columna: null});

      this.frmColumnaName.push(new FormControl(null,Validators.required));
      this.array_columnas=data;
      this.cargando_columnas=false;
      this.cd.detectChanges();
      this.cd.markForCheck();
    }, 350);
  }
  _delete_columna=(idx)=>{
    this.cargando_columnas=true;
    this.modal.confirm({
      nzTitle: 'Eliminar',
      nzContent: 'Esta seguro de eliminar la columna seleccionada',
      nzOkText: 'Eliminar',
      nzOkType: 'primary',
      nzCancelText: 'No',
      nzOnOk: () => {
        let table = this.JSON_MATRIZ.columnas;
        this.JSON_MATRIZ.columnas=[];
        setTimeout(()=>{
          table.splice(idx,1);
          this.frmColumnaName.splice(idx,1);
          table.forEach((f,index)=>{f.idx=index});
          this.JSON_MATRIZ.columnas=table;
          this.cargando_columnas=false;
        },350);
      },
      nzOnCancel: () =>{
        this.cargando_columnas=false;
      }
    });   
  }
  //#endregion

  //#region SAVE OR CANCEL FORM
  error_imagen=false;
  error_video=false;
  validURL=(str):boolean=>{
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }

  error_filas_matriz=false;
  error_columnas_matriz=false;
  
  handleCancelarFormularioModal=()=>{
    this.onCloseModal.emit(true);
  }
  //#endregion

  createNotification = (type: string, title: string, message: string): void => {
    this.notification.create(
      type,
      title,
      message
    );
  };
}
