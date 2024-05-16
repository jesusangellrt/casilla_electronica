import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { JSON_TIPO_PREGUNTA, SisEnumeradoService, TIPO_PREGUNTA, SIS_TIPO_ENUMERADO } from '@app/_core';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-modal-registro-columna',
  templateUrl: './modal-registro-columna.component.html',
  styleUrls: ['./modal-registro-columna.component.css']
})
export class ModalRegistroColumnaComponent implements OnInit {
  _TIPO_PREGUNTA=TIPO_PREGUNTA;
  @Input() isVisibleModalMatriz:boolean = false;
  @Input() title:string="Nombre columna";
  @Input() forma: any;
  @Input() modal_width:number=800;

  @Input() array_tipo_pregunta=[];
  @Input() array_maestro_institucional=[];
  array_archivo_tipo_archivo_columna=[];
  

  @Output() onCloseModalMatriz:EventEmitter<boolean> = new EventEmitter();
  @Output() onSaveDataForma: EventEmitter<any> = new EventEmitter();

 
  array_filas=[];array_columnas=[];cargando_columnas=false;error_columnas_matriz=false;error_filas_matriz=false;
  constructor(
    private sis_enumerado_s:SisEnumeradoService,
    private _formBuilder: FormBuilder,
    private notification: NzNotificationService,
    private modal: NzModalService,
    private cd: ChangeDetectorRef
  ) { }
  
  ngOnInit() {
    if(this.forma){
      this.JSON_INIT();
    }else{
      this.frmCantidadDigitos.setValue(null);
      this.JSON_NUMERICO_DECIMAL.nro_decimal=null;
    }
    
  }

  async getArchivoTipoArchivo(){
    await this.sis_enumerado_s.GetEnumeradoByTipoEnumerado(SIS_TIPO_ENUMERADO.archivo_tipo_archivo).then(datos => {
      this.array_archivo_tipo_archivo_columna =datos.data.filter(x=>x.es_eliminado==false); 
    }).catch(err => {});
  }

  change_archivo_byTipo(values:any):void {
    console.log(values.currentTarget.checked);
    if(values.currentTarget.checked){
      this.array_archivo_tipo_archivo_columna.forEach(element => {
        if(Number(values.currentTarget.id) == element.id_enumerado){
          element.selected = true;
        }
      });       
    }else{
      this.array_archivo_tipo_archivo_columna.forEach(element => {
        if(Number(values.currentTarget.id) == element.id_enumerado){
          element.selected = false;
        }
      });
    }
  }

  JSON_DESPLEGABLE_INSTITUCIONAL = JSON_TIPO_PREGUNTA.desplegable_institucional;
  frmMaestroInstitucional:FormControl = new FormControl(null,Validators.required);
  JSON_DESPLEGABLE_LIBRE = JSON_TIPO_PREGUNTA.desplegable_libre;
  JSON_NUMERICO_ENTERO = JSON_TIPO_PREGUNTA.numerico_entero;
  JSON_NUMERICO_DECIMAL = JSON_TIPO_PREGUNTA.numerico_decimal;
  JSON_SELECCION_UNICA = JSON_TIPO_PREGUNTA.seleccion_unica;
  JSON_SELECCION_MULTIPLE = JSON_TIPO_PREGUNTA.seleccion_multiple;
  JSON_NUMERICO_TEXTO = JSON_TIPO_PREGUNTA.texto;
  JSON_NUMERICO_FECHA = JSON_TIPO_PREGUNTA.fecha;
  JSON_SELECCION_ARCHIVO = JSON_TIPO_PREGUNTA.archivo_columna;
  array_alternativa_select = [];
  frmAlternativaDescripcion: FormControl[]=[];
  frmAlternativaPeso: FormControl[]=[];
  frmCantidadDigitos:FormControl = new FormControl(null,Validators.required);
  
  JSON_INIT(){
    let json = this.forma;
    let id_tipo_pregunta = this.forma.id_tipo_pregunta;
    if(id_tipo_pregunta==TIPO_PREGUNTA.desplegable_institucional){
      this.JSON_DESPLEGABLE_INSTITUCIONAL=json;
    }
    if(id_tipo_pregunta == TIPO_PREGUNTA.numerico_decimal){
      this.JSON_NUMERICO_DECIMAL = json;
    }
    if(id_tipo_pregunta == TIPO_PREGUNTA.archivo){
      if(json.opciones == null){
        this.getArchivoTipoArchivo();
      }else{
        this.array_archivo_tipo_archivo_columna = json.opciones;
      }
      
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
  }

  parseInt = (value: string): string => value && value!=""?Number(value).toFixed(0):null;
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

  error_archivo_tipo_archivo=false;
  handleSaveFormularioModal=()=>{
    let hasDuplicates=(a):boolean=>{
      const noDups = new Set(a);
      return a.length == noDups.size?false:true;
    }

    let allow=true, required_filled=true;
    let str="<ul>";
    if(this.forma.id_tipo_pregunta==TIPO_PREGUNTA.desplegable_institucional){
      if(this.JSON_DESPLEGABLE_INSTITUCIONAL.tbl_data==null || this.JSON_DESPLEGABLE_INSTITUCIONAL.tbl_data=="" ){
        this.frmMaestroInstitucional.markAllAsTouched();
        this.frmMaestroInstitucional.markAsDirty();
        this.frmMaestroInstitucional.updateValueAndValidity();
        allow=false;required_filled=false;
      }
    }
    let has_min_rows=true;
    if(this.forma.id_tipo_pregunta==TIPO_PREGUNTA.desplegable_libre  || 
      this.forma.id_tipo_pregunta==TIPO_PREGUNTA.seleccion_multiple ||
      this.forma.id_tipo_pregunta==TIPO_PREGUNTA.seleccion_unica ){
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
    if(this.forma.id_tipo_pregunta==TIPO_PREGUNTA.numerico_decimal){
    if(this.JSON_NUMERICO_DECIMAL.nro_decimal==null || this.JSON_NUMERICO_DECIMAL.nro_decimal==0 || this.JSON_NUMERICO_DECIMAL.nro_decimal>5){
        this.frmCantidadDigitos.markAllAsTouched();
        this.frmCantidadDigitos.markAsDirty();
        this.frmCantidadDigitos.updateValueAndValidity();
        allow=false;
        required_filled=false;
      }
    } 
    
    let has_tipo_archivo=true
    if(this.forma.id_tipo_pregunta==TIPO_PREGUNTA.archivo){
      
      let total= 0;
      this.array_archivo_tipo_archivo_columna.forEach(element => {
        if(element.selected){
          total++;
        }
      });
      
      if(total == 0){
        this.error_archivo_tipo_archivo = true;
        allow=false; has_tipo_archivo=false;
      }else{
        allow=true; 
        this.error_archivo_tipo_archivo = false;
      }      
    }else{
      allow=true; 
      this.error_archivo_tipo_archivo = false;
    }

    if(!allow){
      if(required_filled==false){
        str+="<li>Debe ingresar los campos obligatorios.</li>";
      }
      if(has_min_rows==false){
        str+="<li>Debe contar con al menos dos alternativas.</li>";
      }
      if(has_tipo_archivo==false){
        str+="<li>Debe seleccionar al menos un tipo de archivo.</li>";
      }
    }else{
    
      if(this.forma.id_tipo_pregunta == TIPO_PREGUNTA.seleccion_multiple
        || this.forma.id_tipo_pregunta == TIPO_PREGUNTA.seleccion_unica
        || this.forma.id_tipo_pregunta == TIPO_PREGUNTA.desplegable_libre){
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

    str+="<ul>";
    if(!allow){
      this.createNotification('warning', 'Advertencia',str);
    }else{
      let string_json=null;
      if(this.forma.id_tipo_pregunta==TIPO_PREGUNTA.desplegable_institucional){
        string_json=this.JSON_DESPLEGABLE_INSTITUCIONAL;
      }
      if(this.forma.id_tipo_pregunta==TIPO_PREGUNTA.desplegable_libre){
        this.JSON_DESPLEGABLE_LIBRE.opciones = this.array_alternativa_select;
        string_json=this.JSON_DESPLEGABLE_LIBRE;
      }
      if(this.forma.id_tipo_pregunta==TIPO_PREGUNTA.numerico_decimal){
        string_json=this.JSON_NUMERICO_DECIMAL;
      }
      if(this.forma.id_tipo_pregunta==TIPO_PREGUNTA.seleccion_unica){
        this.JSON_SELECCION_UNICA.opciones = this.array_alternativa_select;
        string_json=this.JSON_SELECCION_UNICA;
      }
      if(this.forma.id_tipo_pregunta==TIPO_PREGUNTA.seleccion_multiple){
        this.JSON_SELECCION_MULTIPLE.opciones = this.array_alternativa_select;
        string_json=this.JSON_SELECCION_MULTIPLE;
      }
      if(this.forma.id_tipo_pregunta==TIPO_PREGUNTA.archivo){
        this.JSON_SELECCION_ARCHIVO.opciones = this.array_archivo_tipo_archivo_columna;
        string_json = this.JSON_SELECCION_ARCHIVO;
      }
      
      this.createNotification('success','Éxito','<ul><li>Registrado con éxito</li></ul>');
      this.onSaveDataForma.emit(string_json);
    }
  }
  handleCancelarFormularioModal=()=>{
    this.onCloseModalMatriz.emit(true);
  }



  createNotification = (type: string, title: string, message: string): void => {
    this.notification.create(
      type,
      title,
      message
    );
  };
}
