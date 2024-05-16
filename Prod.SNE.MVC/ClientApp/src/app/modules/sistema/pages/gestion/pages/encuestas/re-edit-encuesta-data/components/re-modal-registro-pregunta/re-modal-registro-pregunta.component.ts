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
  selector: 'app-re-modal-registro-pregunta',
  templateUrl: './re-modal-registro-pregunta.component.html',
  styleUrls: ['./re-modal-registro-pregunta.component.css']
})
export class ReModalRegistroPreguntaComponent implements OnInit {
  _TIPO_PREGUNTA=TIPO_PREGUNTA;
  @Input() title:string="Agregar";
  @Input() is_first:boolean = false;
  @Input() es_por_defecto:boolean=false;
  @Input() pregunta: PreguntaResponseItem;
  @Input() id_encuesta: number;
  @Input() isVisibleModal:boolean = false;
  @Input() preguntas_condicionales=[];
  @Output() onCloseModal:EventEmitter<boolean> = new EventEmitter();
  @Output() onSaveDataPregunta: EventEmitter<boolean> = new EventEmitter();
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
  selectedPreguntaCondicional:PreguntaResponseItem=null;
  async ngOnInit() {
    this.array_filas=[];
    this.array_columnas=[];
    await this.getComboInsitucional();
    await this.getTipoPregunta();
    await this.getTipoArchivos();
    await this.getCategoriaList();
    await this.getSubCategoriaList();
    let basic_frm:PreguntaResponseItem={id_pregunta:0,id_encuesta:this.id_encuesta, es_obligatorio:true};
    let pregunta = {...this.pregunta};
    this.frm = pregunta?pregunta:basic_frm;
    if(this.frm.id_pregunta!=null &&this.frm.id_pregunta>0){
      let _id_categoria = pregunta.id_categoria;
      this.respuesta_disparadora = JSON.parse(pregunta.json_respuesta_condicional);
      this.array_sub_categoria = _id_categoria?this.array_sub_categoria_all.filter(x=>x.id_categoria==_id_categoria):[];
      this.frmPRG.frmSubCategoria.setValue(pregunta.id_sub_categoria);
      this.frm.id_sub_categoria=pregunta.id_sub_categoria;
      this.show_file_uploader=pregunta.id_tipo_archivo==TIPO_ARCHIVO_ENUMERADO.imagen?true:false;
      this.show_url=pregunta.id_tipo_archivo==TIPO_ARCHIVO_ENUMERADO.video?true:false;
      if(this.es_por_defecto /*this.is_first*/){
        //this.frm.id_tipo_pregunta=TIPO_PREGUNTA.desplegable_institucional;
        this.cargar_formato_byTipo(TIPO_PREGUNTA.desplegable_institucional,true);
      }

      this.cd.markForCheck();
      this.cd.detectChanges();
      //manejo del json
      this.JSON_INIT();
    }else{
      this.frm.es_obligatorio=true;
      this.frmPRG.frmEsObligatorio.setValue(true);
      this.frmCantidadDigitos.setValue(null);
      this.JSON_NUMERICO_DECIMAL.nro_decimal=null;
      this.respuesta_disparadora=null;
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
          this.frmAlternativaDescripcion.push(new FormControl(null,Validators.required));
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
        this.frmFilaName.push(new FormControl(null,Validators.required));
      });
      json.columnas.forEach(e=>{
        this.frmColumnaName.push(new FormControl(null,Validators.required));
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
    frmCategoria:new FormControl(null),
    frmSubCategoria:new FormControl(null),
    frmDescripcionAdicional:new FormControl(null),
    frmTipoArchivo:new FormControl(null, Validators.required),
    frmEsCondicionada: new FormControl(false),
    frmEsCondicional: new FormControl(false),
    frmPreguntaCondicional: new FormControl(null)
  }
  loading_condionales:boolean=false;
  setPreguntaSelecionadaCondicional=(e)=>{
    let _find = this.preguntas_condicionales.find(x=>x.id_pregunta==e);
    this.loading_condionales=true;
    setTimeout(()=>{
      this.selectedPreguntaCondicional= e?_find:null;
      this.loading_condionales=false;
      this.cd.detectChanges();
      this.cd.markForCheck();
    },200);
  }
  respuesta_disparadora:any=null;
  handleClickSaveRespuestaCondicionada=(e)=>{
    this.respuesta_disparadora=e;
    this.frm.json_respuesta_condicional = JSON.stringify(e); 
    this.cd.detectChanges();
    this.cd.markForCheck();
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
      /*if(this.is_first){
        this.frm.id_tipo_pregunta=TIPO_PREGUNTA.desplegable_institucional;
        this.cargar_formato_byTipo(TIPO_PREGUNTA.desplegable_institucional);
      }*/
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
  handleRemovedFileExplicacion=(e)=>{
    this.frm.iden_imagen=null;
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
      nzContent: '¿Esta seguro de eliminar la alternativa seleccionada?',
      nzOkText: 'Si',
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
    let data = this.array_filas;//this.JSON_MATRIZ.filas;
    this.array_filas=[];
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
      this.array_filas=data;
      this.cargando_tabla=false;
      this.cd.detectChanges();
      this.cd.markForCheck();
    }, 350);
  }
  _delete_fila=(idx)=>{
    this.cargando_tabla=true;
    this.modal.confirm({
      nzTitle: 'Eliminar',
      nzContent: '¿Esta seguro de eliminar la fila seleccionada?',
      nzOkText: 'Si',
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
      data.push({idx: last, nombre_columna: null, forma:{}});

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
      nzContent: '¿Esta seguro de eliminar la columna seleccionada?',
      nzOkText: 'Si',
      nzOkType: 'primary',
      nzCancelText: 'No',
      nzOnOk: () => {
        let table = this.array_columnas;//this.JSON_MATRIZ.columnas;
        //this.JSON_MATRIZ.columnas=[];
        this.array_columnas=[];
        setTimeout(()=>{
          table.splice(idx,1);
          this.frmColumnaName.splice(idx,1);
          table.forEach((f,index)=>{f.idx=index});
          //this.JSON_MATRIZ.columnas=table;
          this.array_columnas=table;
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

  hideCondicional(){
    let val = this.frmPRG.frmEsCondicional.value;
    if(val){
      this.frmPRG.frmEsCondicionada.setValue(false);
    }
  }
  error_filas_matriz=false;
  error_columnas_matriz=false;
  handleSaveFormularioModal=()=>{
    let hasDuplicates=(a):boolean=>{
      const noDups = new Set(a);
      return a.length == noDups.size?false:true;
    }

    let allow=true, required_filled=true;
    let frm_keys = Object.keys(this.frmPRG);
    let str="<ul>";
    let filas_unicas=true;
    let columnas_unicas =true;
    for (let i = 0; i < frm_keys.length; i++) {
      let frmkey = frm_keys[i];
      if(this.frmPRG[frmkey].invalid){
        this.frmPRG[frmkey].markAsTouched();
        this.frmPRG[frmkey].markAsDirty();
        this.frmPRG[frmkey].updateValueAndValidity();
        allow=false;required_filled=false;
      }   
    }
    if(this.frm.id_tipo_archivo == TIPO_ARCHIVO_ENUMERADO.imagen){
      if(this.frm.iden_imagen==null || this.frm.iden_imagen==""){
        this.error_imagen=true;
        allow=false;required_filled=false;
      
      }
    }
    if(this.frm.id_tipo_archivo == TIPO_ARCHIVO_ENUMERADO.video){
      if(this.frm.url_video==null || this.frm.url_video=="" || this.validURL(this.frm.url_video)==false){
        this.error_video=true;
        allow=false;required_filled=false;
      }
    }

    if(this.frm.id_tipo_pregunta==TIPO_PREGUNTA.desplegable_institucional){
      if(this.JSON_DESPLEGABLE_INSTITUCIONAL.tbl_data==null || this.JSON_DESPLEGABLE_INSTITUCIONAL.tbl_data=="" ){
        this.frmMaestroInstitucional.markAllAsTouched();
        this.frmMaestroInstitucional.markAsDirty();
        this.frmMaestroInstitucional.updateValueAndValidity();
        allow=false;required_filled=false;
      }
    }
    let has_min_rows=true;
    if(this.frm.id_tipo_pregunta==TIPO_PREGUNTA.desplegable_libre  || 
      this.frm.id_tipo_pregunta==TIPO_PREGUNTA.seleccion_multiple ||
      this.frm.id_tipo_pregunta==TIPO_PREGUNTA.seleccion_unica ){
      if(this.array_alternativa_select.length<2){
        allow=false;has_min_rows=false;
      }else{
        let is_filled=true;
        this.frmAlternativaDescripcion.forEach(e=>{
          if(e.invalid){
            e.markAllAsTouched();
            e.markAsDirty();
            e.updateValueAndValidity();
            allow=false;
            required_filled=false,
            is_filled=false;
          }
        });
      }
    }
    if(this.frm.id_tipo_pregunta==TIPO_PREGUNTA.numerico_decimal){
      if(this.JSON_NUMERICO_DECIMAL.nro_decimal==null || this.JSON_NUMERICO_DECIMAL.nro_decimal==0 ){
        this.frmCantidadDigitos.markAllAsTouched();
        this.frmCantidadDigitos.markAsDirty();
        this.frmCantidadDigitos.updateValueAndValidity();
        allow=false;
        required_filled=false;
      }
    } 
    let has_min_filas=true, has_min_columnas=true;
    if(this.frm.id_tipo_pregunta==TIPO_PREGUNTA.matriz){
      this.error_filas_matriz = this.array_filas.length==0?true:false;
      this.error_columnas_matriz = this.array_columnas.length==0?true:false;
      if(this.array_filas.length==0 || this.array_columnas.length==0 ){
        allow=false;
        has_min_filas=this.array_filas.length==0?false:true;
        has_min_columnas=this.array_columnas.length==0?false:true;
      }
      this.frmColumnaName.forEach(e=>{
        if(e.invalid){
          e.markAllAsTouched();
          e.markAsDirty();
          e.updateValueAndValidity();
          allow=false;
          required_filled=false;
        }
      });
      this.frmFilaName.forEach(e=>{
        if(e.invalid){
          e.markAllAsTouched();
          e.markAsDirty();
          e.updateValueAndValidity();
          allow=false;required_filled=false;
        }
      });
    } 
    if(!allow){
      if(required_filled==false){
        str+="<li>Debe ingresar los campos obligatorios.</li>";
      }
      if(has_min_columnas==false){
        str+="<li>Debe contar con al menos una columna.</li>";
      }
      if(has_min_filas==false){
        str+="<li>Debe contar con al menos una fila.</li>";
      }
      if(has_min_rows==false){
        str+="<li>Debe contar con al menos dos alternativas.</li>";
      }
    }else{
      if(this.frm.id_tipo_pregunta == TIPO_PREGUNTA.matriz){
        let cols=[],rows=[];
        this.frmColumnaName.forEach(e=>{
          cols.push(e.value);
        });
        this.frmFilaName.forEach(e=>{
          rows.push(e.value);
        });
        if(hasDuplicates(rows)){
          allow=false;
          str+="<li>Existen filas repetidas.</li>";  
        }
        if(hasDuplicates(cols)){
          allow=false;
          str+="<li>Existen columnas repetidas.</li>";  
        }
      }
      if(this.frm.id_tipo_pregunta == TIPO_PREGUNTA.seleccion_multiple
        || this.frm.id_tipo_pregunta == TIPO_PREGUNTA.seleccion_unica
        || this.frm.id_tipo_pregunta == TIPO_PREGUNTA.desplegable_libre){
          let rows=[];
          this.frmAlternativaDescripcion.forEach(e=>{
            rows.push(e.value);
          });
          if(hasDuplicates(rows)){
            allow=false;
            str+="<li>Existen descripciones repetidas.</li>";  
          }
      }
    }
    if(this.frmPRG.frmEsCondicionada.value){
      if(this.frm.id_pregunta_condicional==null){
        str+="<li>Debe seleccionar una pregunta.</li>";  
      }else{
        if(this.frm.json_respuesta_condicional){
          str+="<li>Debe ingresar una respuesta para la pregunta condicional.</li>";  
        }
      }
    }
    str+="<ul>";
    if(!allow){
      this.createNotification('warning', 'Advertencia',str);
    }else{
      let string_json=null;
      if(this.frm.id_tipo_pregunta==TIPO_PREGUNTA.desplegable_institucional){
        string_json=JSON.stringify(this.JSON_DESPLEGABLE_INSTITUCIONAL);
      }
      if(this.frm.id_tipo_pregunta==TIPO_PREGUNTA.desplegable_libre){
        this.JSON_DESPLEGABLE_LIBRE.opciones = this.array_alternativa_select;
        string_json=JSON.stringify(this.JSON_DESPLEGABLE_LIBRE);
      }
      if(this.frm.id_tipo_pregunta==TIPO_PREGUNTA.numerico_entero){
        string_json=JSON.stringify(this.JSON_NUMERICO_ENTERO);
      }
      if(this.frm.id_tipo_pregunta==TIPO_PREGUNTA.numerico_decimal){
        string_json=JSON.stringify(this.JSON_NUMERICO_DECIMAL);
      }
      if(this.frm.id_tipo_pregunta==TIPO_PREGUNTA.seleccion_unica){
        this.JSON_SELECCION_UNICA.opciones = this.array_alternativa_select;
        string_json=JSON.stringify(this.JSON_SELECCION_UNICA);
      }
      if(this.frm.id_tipo_pregunta==TIPO_PREGUNTA.seleccion_multiple){
        this.JSON_SELECCION_MULTIPLE.opciones = this.array_alternativa_select;
        string_json=JSON.stringify(this.JSON_SELECCION_MULTIPLE);
      }
      if(this.frm.id_tipo_pregunta==TIPO_PREGUNTA.matriz){
        this.JSON_MATRIZ.filas=this.array_filas;
        this.JSON_MATRIZ.columnas = this.array_columnas;//idx,nombre_columna
        string_json=JSON.stringify(this.JSON_MATRIZ);
      }
      if(this.frmPRG.frmTipoPregunta.value!=this._TIPO_PREGUNTA.seleccion_unica ){
        this.frm.es_condicional=false;
      }
      this.frm.json_alternativas = string_json;
      let filter:PreguntaSaveUpdateItem = {...this.frm};
      filter.id_encuesta=this.id_encuesta;
      if(this.frmPRG.frmSubCategoria.value){
        filter.id_sub_categoria=this.frmPRG.frmSubCategoria.value;
      }
      filter.files_only=true;
      this.encuesta_s._SaveUpdatePregunta(filter).then(datos => {
        if(datos.data){
          if(datos.data.Success){
            let str='<ul>';
            datos.data.Messages.forEach(message => {
              str+=`<li>${message}</li>`;
            });
            str+='</ul>';
            this.createNotification('success','Éxito',str);
            this.onSaveDataPregunta.emit(true);
          }else{
            let str='<ul>';
            datos.data.Messages.forEach(message => {
              str+=`<li>${message}</li>`;
            });
            str+='</ul>';
            this.createNotification('warning','Advertencia',str);
          }
        }
      }).catch(err => {});
      //guardar directo en bd a la de dios xdxdxd
    }
  }
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


  //#region  MATRIZ MODAL
  show_modal_matriz=false;
  selected_tipo_forma:number=null;
  selected_forma:any={};
  selected_col_idx:number;//
  nombre_columna:string;
  _modal_width:number=400;
  vista_tipo=false;
  show_pre_modal_columna=(item)=>{
    this.selected_col_idx=item.idx;
    this.vista_tipo=true;
    if(item.forma!=undefined && item.forma && item.forma.id_tipo_pregunta){
      this.selected_tipo_forma=item.forma.id_tipo_pregunta;
    }else{
      this.selected_tipo_forma=null;
    }
  }
  cerrar_pre_modal=()=>{
    this.vista_tipo=false;
  }
  _JSON_TIPO_PREGUNTA=JSON_TIPO_PREGUNTA;
  _show_modal_matriz=(selected_tipo:number)=>{
    //idx,nombre_columna, forma: {}
    this.vista_tipo=false;
    this.selected_tipo_forma=selected_tipo;
    let item = this.array_columnas[this.selected_col_idx];
    if(selected_tipo==TIPO_PREGUNTA.desplegable_institucional ||
      selected_tipo==TIPO_PREGUNTA.numerico_decimal ){
      this._modal_width=400;
    }else{
      this._modal_width=800;
    }

    if(item.forma && item.forma.id_tipo_pregunta==selected_tipo){
      let _forma=item.forma;
      this.selected_forma=_forma;
    }else{
      let _forma = selected_tipo==TIPO_PREGUNTA.desplegable_institucional?
      {
        id_tipo:1,
        nombre: "",
        tbl_data: null,
        respuesta: null
      }:selected_tipo==TIPO_PREGUNTA.desplegable_libre?
      {
        id_tipo:2,
        nombre: "",
        seleccion: "libre",
        opciones: [],
        respuesta: []
      }:selected_tipo==TIPO_PREGUNTA.numerico_entero?
      {
        id_tipo: 3,
        nombre: "",
        respuesta: null
      }:selected_tipo==TIPO_PREGUNTA.numerico_decimal?
      {
        id_tipo: 4,
        nombre: "",
        nro_decimal:null,
        respuesta: null
      }:selected_tipo==TIPO_PREGUNTA.seleccion_unica?
      {
        id_tipo:5,
        nombre: "",
        seleccion: "unica",
        opciones: [],
        respuesta: []
      }:{
        id_tipo:6,
        nombre: "",
        seleccion: "multiple",
        opciones: [],
        respuesta: []
      };
      this.selected_forma=_forma;
      this.array_columnas[this.selected_col_idx].forma=_forma;
    }
    this.selected_forma.id_tipo_pregunta = selected_tipo;
    if(this.selected_tipo_forma!=TIPO_PREGUNTA.numerico_entero){
      this.nombre_columna=item.nombre_columna;
      this.show_modal_matriz=true;
    }
  }
  handleOnCloseModalMatriz=(e)=>{
    this.selected_forma=null;
    this.nombre_columna=null;
    this.show_modal_matriz=false;
  }
  handleOnSaveFormaColumnaMatriz=(forma)=>{
    forma.nombre=this.nombre_columna;
    this.array_columnas[this.selected_col_idx].forma=forma;
    this.selected_forma=null;
    this.nombre_columna=null;
    this.show_modal_matriz=false;
  }
  //#endregion
}
