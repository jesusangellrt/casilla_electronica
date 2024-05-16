import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AlertService, AuthService, EncuestaAgradecimientoData, EncuestasService, FileService, PreguntaResponseItem, RespuestaByPregunta, SaveRespuestaAnonimaRequest, TIPO_ARCHIVO_ENUMERADO, TIPO_PREGUNTA, TIPO_ENCUESTA,DecoupledInit,FILE_SETTINGS } from '@app/_core';
import { RespuestaService } from '@app/_core/services/respuesta.service';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { setTime } from 'ngx-bootstrap/chronos/utils/date-setters';
import { NgxSpinnerService } from 'ngx-spinner';
import Speech from 'speak-tts';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import * as DecoupledEditor from 'external/ckeditor5-build-decoupled-document';
DecoupledEditor.defaultConfig = DecoupledInit.defaultConfig;

@Component({
  selector: 'app-llenado-pregunta-seccion-ext',
  templateUrl: './llenado-pregunta-seccion-ext.component.html',
  styleUrls: ['./llenado-pregunta-seccion-ext.component.css']
})
export class LlenadoPreguntaSeccionExtComponent implements OnInit {

  @Input() id_encuesta:number=0;
  @Input() es_anonima:boolean=false;
  @Input() total:number=7;
  @Input() pageIndexSeccion:number;
  @Input() _total_preguntas:any[];
  @Input() paginado_registrado=[];
  @Input() pageIndex:number=1;
  @Input() presetIndex:number;
  @Input() title:string;
  @Input() agradecimiento_data:EncuestaAgradecimientoData;
  @Input() disparadoresRespuestas:any[]=[];
  @Output() onGoBackEncuesta:EventEmitter<boolean> = new EventEmitter();
  @Output() onGoToInicio:EventEmitter<boolean> = new EventEmitter();
  @Output() onEmitDataToHeader:EventEmitter<any> = new EventEmitter();
  show_pregunta_llenado=true;
  total_page=5;
  respuestas:any[]=[];
  Pregunta:PreguntaResponseItem;
  JSON_PREGUNTA=null;
  cargando_tabla=true;
  pageSize: number = 1;
  _TIPO_ARCHIVO = TIPO_ARCHIVO_ENUMERADO;
  _array_preguntas_visibles=[];
  speech: any;
  arrayPreguntas: any;
  arraySecciones: any;
  arraySeccionActivo: any;
  numeroSeccion:number=0;
  esPreguntaUltima:boolean=false;
  //para tipo de pregunta archivo
  _imagen_archivo: Array<any>;
  estaGuardando: boolean = false;
  pesoMaximoEnMB = FILE_SETTINGS.maxFileSize;
  id_archivo: string;
  imagen_extensionAceptados= [".png", ".jpeg",".gif", ".pdf", ".doc", ".docx", ".xls", ".xlsx" ];
  url = "/api/comun/descargar-archivo";
  imagen_MimePermitidos=["image/png", "image/jpeg","image/gif", "application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  , "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"];

  speechData: any;
  esAgregarPreguntaMultiple: boolean=false;
  formato_fecha: string="";
  cantidad_caracteres: string="1000";

  _placeholder:string;
  _imagen_extensionAceptados = [];
  _imagen_MimePermitidos=[];
  tieneArchivo:boolean=false;
  is_archivo: boolean = false;

  constructor(
    private spinner: NgxSpinnerService,
    private encuesta_s:EncuestasService,
    private notification: NzNotificationService,
    private respuesta_s:RespuestaService,
    private _fileService: FileService,
    private modal: NzModalService,
    private _authService: AuthService,
    private readonly _alertService: AlertService,
    private sanitizer: DomSanitizer,
    private cd: ChangeDetectorRef,
  ) { 

    this.speech = new Speech();
    if (this.speech.hasBrowserSupport()) {
      this.speech
        .init({
          'volume': this.volume_value_pregunta/100,
             'lang': 'es-ES',
             'rate': 1,
             'pitch': 1,
             'voice':'Google español',
             'splitSentences': true,
             'listeners': {
                 'onvoiceschanged': (voices) => {
                     console.log("Event voiceschanged", voices)
                 }
             }
     })
        .then((data) => {
          this.speechData = data;
          console.log("Speech is ready, voices are available", data)
        })
        .catch((e) => { console.error('An error occured while initializing : ', e);});
    }

  }
  loaded_pagination=false;
  pagination_array=[];
  pagination_array_resolved=[];
  async ngOnInit() {
    debugger
    this.title;
    this.pageIndex;
    this.getPaginationNotHidden();
    await this._getComboInstitucional(1);
    await this._getComboInstitucional(2);
    if(this.disparadoresRespuestas.length==0){
      await this.buscarDisparadores()
    }
    await this.crear_paginado();
    await this.GetRespuestasByEncuestaAndEncuestado();
    await this.detectar_resueltos();
  }

  GetRespuestasByEncuestaAndEncuestado = async () =>{
    if(!this.es_anonima){
      this.spinner.show();
      await this.respuesta_s._GetRespuestasByEncuestaAndEncuestado(this.id_encuesta, TIPO_ENCUESTA.extranet)
      .then(async (datos) => {
        this.respuestas=datos.data;
        await this.getPreguntasEncuesta(false);
        this.loaded_pagination=true;
      })
      .catch(() => {}); 
    }else{
      this.getPreguntasEncuesta();
    }
  }

  buscarDisparadores=async ()=>{
    await this.encuesta_s._GetPreguntasCondicionalesByEncuesta({ id_encuesta: this.id_encuesta}).then((datos) => {
      if (datos && datos.data) {
        this.disparadoresRespuestas=datos.data;
      }else{
        this.disparadoresRespuestas=[];
      }
    }).catch(() => {this.disparadoresRespuestas=[];});

  }

  detectar_resueltos= async ()=>{
    let copy_page=this.pagination_array;//_resolved;
    this.pagination_array.forEach((f,index)=>{
      let rpta = this.respuestas.find(x=>x.id_pregunta==f.id_pregunta);
      let _pregunta= copy_page.find(x=>x.id_pregunta == f.id_pregunta);
      if(_pregunta){
        let  _idx_pregunta = copy_page.indexOf(_pregunta);
        if(rpta){
          let json_respuesta = JSON.parse(rpta.json_respuesta);
          if(json_respuesta.id_tipo==TIPO_PREGUNTA.desplegable_institucional){
            if(json_respuesta.tbl_data==1){
              copy_page[_idx_pregunta].resolved=json_respuesta.respuesta.d1==null?false:true;
            }
            if(json_respuesta.tbl_data==2){
              copy_page[_idx_pregunta].resolved=json_respuesta.respuesta==null?false:true;
            }
          }
          if(json_respuesta.id_tipo==TIPO_PREGUNTA.seleccion_multiple || 
            json_respuesta.id_tipo==TIPO_PREGUNTA.seleccion_unica){
            let filter = json_respuesta.respuesta.length==0?null:json_respuesta.respuesta.filter(ff=>ff.selected==true);
            copy_page[_idx_pregunta].resolved=filter.length==0?false:true;
          }
          if(json_respuesta.id_tipo==TIPO_PREGUNTA.desplegable_libre){
            let filter = json_respuesta.respuesta.length==0?null:json_respuesta.respuesta[0];
            copy_page[_idx_pregunta].resolved=filter?true:false;
          }
  
          if(json_respuesta.id_tipo==TIPO_PREGUNTA.numerico_entero || json_respuesta.id_tipo==TIPO_PREGUNTA.numerico_decimal){
            copy_page[_idx_pregunta].resolved=json_respuesta.respuesta==null?false:true;
          }
          if(json_respuesta.id_tipo==TIPO_PREGUNTA.fecha){
            copy_page[_idx_pregunta].resolved=json_respuesta.respuesta==null?false:true;
          }
          if(json_respuesta.id_tipo==TIPO_PREGUNTA.texto){
            copy_page[_idx_pregunta].resolved=json_respuesta.respuesta==null?false:true;
          }
          if(json_respuesta.id_tipo==TIPO_PREGUNTA.archivo){
            copy_page[_idx_pregunta].resolved=json_respuesta.respuesta==null?false:true;
          }
          if(json_respuesta.id_tipo==TIPO_PREGUNTA.mensaje){
            copy_page[_idx_pregunta].resolved=json_respuesta.respuesta==null?false:true;
          }
          if(json_respuesta.id_tipo==TIPO_PREGUNTA.matriz){
            copy_page[_idx_pregunta].resolved=json_respuesta.respuesta.length==0?false:true;
          }
        }else{
          copy_page[_idx_pregunta].resolved=false;
        }
      }
    });
    copy_page.forEach((x,idx)=>{x.page=idx+1});
    this.pagination_array=copy_page;
  }

  getResolved=(id_pregunta:number)=>{
    let find = this.pagination_array_resolved.find(x=>x.id_pregunta==id_pregunta);
    return find?find.resolved:false;
  }
  //#region AUDIO PREGUNTA 
  volume_value_pregunta:number=50;
  show_volume_audio=false;
  audio_paused_pregunta=true;
  audio_speech_pregunta=false;
  _show_hide_controlVolume(){
    this.show_volume_audio=!this.show_volume_audio;
    this.cd.markForCheck();
    this.cd.detectChanges();
  }
  first_run=true;
  setVolumeOfPregunta(valor){
    setTimeout(()=>{
      if(this.audio_speech_pregunta){
        if(this.speech.pending()){
          this.speech.pause();
          this.speech.setVolume(valor/100); 
          this.speech.resume();
        }else{
          this.speech.setVolume(valor/100); 
          this.start_speech();
        }
      }
    },100);
  }
  result = '';
  html_pregunta:string;
  start_speech() {
    this.audio_speech_pregunta=true;
    let temporalDivElement = document.createElement('div');
    temporalDivElement.innerHTML = this.html_pregunta;
    this.result =
      temporalDivElement.textContent || temporalDivElement.innerText || '';
    this.speech
      .speak({
        text: this.result,
      })
      .then(() => {
        this.audio_speech_pregunta=false;
        this.audio_paused_pregunta=true;
      })
      .catch((e) => {
        console.error('An error occurred :', e);
      });
  }
  check_if_pending_audio=()=>{
    if(!this.speech.pending()){//ya no qujeda nada por hablar
      this.audio_speech_pregunta=false;
      this.audio_paused_pregunta=true;
    }  
  }
  pause() {
    this.speech.pause();
  }
  calcel_speech(){
    this.speech.cancel()

  }
  resume() {
    this.speech.resume();
  }
 
  setLanguage(i) {
    this.speech.setLanguage(this.speechData.voices[i].lang);
    this.speech.setVoice(this.speechData.voices[i].name);
  }
  //#endregion
 
   //#region MANEJO VIDEO
  _idYoutubeVideo_pregunta=null;
  private _player_pregunta;
  public _ytEvent_pregunta;
  _onStateChange_pregunta(event) {
    this._ytEvent_pregunta = event.data;
  }
  _savePlayer_pregunta(player) {
    this._player_pregunta = player;
     //setTimeout(() =>{ this._player_agradecimiento.playVideo();},350)
  }

  _idYoutubeVideo_agradecimiento=null;
  private _player_agradecimiento;
  public _ytEvent_agradecimiento;
  _onStateChange_agradecimiento(event) {
    this._ytEvent_agradecimiento = event.data;
  }
  _savePlayer_agradecimiento(player) {
    this._player_agradecimiento = player;
    setTimeout(() =>{ this._player_agradecimiento.playVideo();},350)
  }


  //#endregion
  
  _TIPO_PREGUNTA=TIPO_PREGUNTA;
  RESPUESTA_MATRIZ=[];
  frmMtz=[];
  json_to_String(st){
    return JSON.stringify(st);
  }
  setRespuestaMatriz(fila_idx,col_idx, es_seleccion_unica=false){
    
  }
  seccion_actual: any;
  get_Preguntas = async (show_spinner=true)=>{
    this.cargando_tabla = true;let _id_pregunta=0;
    if(this.Pregunta){
      let _filtered = this.pagination_array.filter(x=>x.page==this.pageIndex);
      if(_filtered.find(x=>x.hidden==true)){
        this.pageIndex = this.pageIndex + 1;
        //aqui se cae
        _id_pregunta =  this.pagination_array.find(x=>x.page==this.pageIndex && x.hidden==false).id_pregunta;
      }else{
        _id_pregunta =  _filtered.find(x=>x.hidden==false)?_filtered.find(x=>x.hidden==false).id_pregunta:0;
      }        
    }else{
      if(this.pagination_array.find(x=>x.page==this.pageIndex && x.hidden==true)){
        this.pageIndex = this.pageIndex + 1;          
      }       
      _id_pregunta =  this.pagination_array.find(x=>x.page==this.pageIndex && x.hidden==false).id_pregunta;
    }
    
    let filtro = { id_pregunta: _id_pregunta};//this.pageIndex;
    if(show_spinner){
      this.spinner.show();
    }
    
    localStorage.setItem("is_filling", "true");
    await this.detectar_resueltos();
    this.total = this.pagination_array.length; //this.pagination_array.filter(x=>x.hidden==false).length;
    await this.encuesta_s._GetPreguntaByIdenPregunta(filtro)
    .then(async (datos) => { 
      if (datos && datos.data && datos.data.Data) {
        let data = datos.data.Data;
        let pregunta:PreguntaResponseItem = data[0];
        this.tieneArchivo = pregunta.id_tipo_archivo == null ? false :true;
        this.Pregunta = data[0];
        this.seccion_actual = this.arraySecciones.find(x=> x.id_encuesta_seccion == pregunta.id_encuesta_seccion);
        let seccionActual = this.arraySecciones.find(x=> x.id_encuesta_seccion == pregunta.id_encuesta_seccion);
        let ultimaPreguntaSeccionActual = 0;
        let esPrimero = true;
        let ordenPregunta = 0;
        for (let i = 0; i < seccionActual.preguntas.length; i++) {
          if(esPrimero){
            ordenPregunta = seccionActual.preguntas[i].orden;
            ultimaPreguntaSeccionActual = seccionActual.preguntas[i].id_pregunta;
            esPrimero = false;
          }else{
            if(seccionActual.preguntas[i].orden > ordenPregunta){
              ordenPregunta = seccionActual.preguntas[i].orden;
              ultimaPreguntaSeccionActual = seccionActual.preguntas[i].id_pregunta;
            }
          }
        }         

        this.html_pregunta = '<p>'+pregunta.pregunta+'</p>';
        if(this.arrayPreguntas.length > 0){
          for (let i = 0; i < this.pagination_array.length; i++) {
            let item = this.arrayPreguntas.find(item => item.id_pregunta === this.pagination_array[i].id_pregunta);
            let itemActual = this.arrayPreguntas.find(item => item.id_pregunta === pregunta.id_pregunta);
            if(item.id_pregunta == itemActual.id_pregunta){
              item.actual = true;
              item.resuelto = false;
            }else{
              item.actual = false;
              item.resuelto = this.pagination_array[i].resolved;
            }
          }
        }          
        if(this.arraySecciones.length > 0){
          let item = this.arraySecciones.find(item => item.orden === seccionActual.orden);
          this.arraySeccionActivo = item;
          
              for (let i = 0; i < this.arraySecciones.length; i++) {
                if(this.arraySecciones[i].orden == seccionActual.orden){
                  this.arraySecciones[i].actual = true;
                }else{
                  this.arraySecciones[i].actual = false;
                }
              }
        }
        if(ultimaPreguntaSeccionActual ==pregunta.id_pregunta){
          this.esPreguntaUltima = true;
          this.numeroSeccion = seccionActual.orden + 1;
        }else{
          this.esPreguntaUltima = false;
        }
        for (let i = 0; i < this.pagination_array.length; i++) {
          let item = this.arraySeccionActivo.preguntas.find(item => item.id_pregunta === this.pagination_array[i].id_pregunta);
          let itemActual = this.arraySeccionActivo.preguntas.find(item => item.id_pregunta === pregunta.id_pregunta);
          
          if(item && itemActual){
            if(item.id_pregunta == itemActual.id_pregunta){
              item.actual = true;
              item.resuelto = false;
            }else{
              item.actual = false;
              item.resuelto = this.pagination_array[i].resolved;
            }
          }            
        } 

        if(this.respuestas.find(f=>f.id_pregunta==pregunta.id_pregunta)){
          let rpta=this.respuestas.find(f=>f.id_pregunta==pregunta.id_pregunta);
         
          let json_=JSON.parse(rpta.json_respuesta);
          if(json_.id_tipo==TIPO_PREGUNTA.desplegable_institucional){
            //this.setComboInstitucional(Number(this.JSON_PREGUNTA.tbl_data));
          }
          if(json_.id_tipo==TIPO_PREGUNTA.matriz){
            let controls=[];
            if(json_.es_columna_matriz){
              json_.respuesta.forEach((f,fidx)=>{
                controls.push([]);
                f.columnas.forEach((c,cidx)=>{
                  controls[fidx].push(new FormControl(f.respuestas[cidx]));
                })
              });
            }else{
              json_.respuesta.forEach((f,fidx)=>{
                controls.push([]);
                f.columnas.forEach((c,cidx)=>{
                  controls[fidx].push(new FormControl(f.respuestas[cidx]));
                })
              });
            }
            this.frmMtz=controls;
          }else{
            this.frmMtz=[];
          }

          if(json_.id_tipo==TIPO_PREGUNTA.seleccion_multiple){
            this.esAgregarPreguntaMultiple = pregunta.es_agregar_pregunta; 
            let rpta=[];
            json_.opciones.forEach(f=>{
                let item=f;
                item.selected=false;
                rpta.push(item);
              });         
          }
          if(json_.id_tipo==TIPO_PREGUNTA.seleccion_unica){
            this.esAgregarPreguntaMultiple = pregunta.es_agregar_pregunta; 
            let rpta=[];
            json_.opciones.forEach(f=>{
                let item=f;
                item.selected=false;
                rpta.push(item);
              });      
          }
          if(json_.id_tipo==TIPO_PREGUNTA.fecha){
            let fechas = JSON.parse(pregunta.json_tipo_fecha);
            for (let i = 0; i < fechas.length; i++) {
              if(fechas[i].id_enumerado == 1 && fechas[i].selected){
                this.formato_fecha = "yyyy";
              }
              if(fechas[i].id_enumerado == 2 && fechas[i].selected){
                this.formato_fecha = "MM/yyyy";
              }
              if(fechas[i].id_enumerado == 3 && fechas[i].selected){
                this.formato_fecha = "dd/MM/yyyy";
              }
            }    
          }
          
          if(json_.id_tipo==TIPO_PREGUNTA.archivo){
            this.is_archivo = false;
            this.is_archivo = true; 
            this._placeholder = "Adjunta ";
            let count = 0;
            let archivoTipos = JSON.parse(pregunta.json_archivo_tipo_archivo);
            
            for (let i = 0; i < archivoTipos.length; i++) {
              if(archivoTipos[i].id_enumerado == 1 && archivoTipos[i].selected){
                this._imagen_extensionAceptados.push(".png", ".jpeg",".gif");
                this._imagen_MimePermitidos.push("image/png", "image/jpeg","image/gif");
                this._placeholder = this._placeholder + "JPG, GIF, PNG";
                count++;
              }
              if(archivoTipos[i].id_enumerado == 2 && archivoTipos[i].selected){
                this._imagen_extensionAceptados.push(".pdf");
                this._imagen_MimePermitidos.push("application/pdf");
                if(count > 0){
                  this._placeholder = this._placeholder + ", PDF";
                }else{
                  this._placeholder = this._placeholder + "PDF";
                }
                count++;
              }
              if(archivoTipos[i].id_enumerado == 3 && archivoTipos[i].selected){
                this._imagen_extensionAceptados.push(".doc", ".docx");
                this._imagen_MimePermitidos.push("application/vnd.openxmlformats-officedocument.wordprocessingml.document");
                
                if(count > 0){
                  this._placeholder = this._placeholder + ", WORD";
                }else{
                  this._placeholder = this._placeholder + "WORD";
                }
                count++;
              }
              if(archivoTipos[i].id_enumerado == 4 && archivoTipos[i].selected){
                this._imagen_extensionAceptados.push(".xls", ".xlsx");
                this._imagen_MimePermitidos.push("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
                if(count > 0){
                  this._placeholder = this._placeholder + ", XLS";
                }else{
                  this._placeholder = this._placeholder + "XLS";
                }
              }
            }  
            
          }
                 
          this.JSON_PREGUNTA=json_;
          this.JSON_PREGUNTA.es_obligatorio = pregunta.es_obligatorio;

        }else{
          this._placeholder = null;
          this.JSON_PREGUNTA = JSON.parse(pregunta.json_alternativas);
          this.JSON_PREGUNTA.es_obligatorio = pregunta.es_obligatorio;
          if(this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.desplegable_institucional){
            if(this.JSON_PREGUNTA.tbl_data==1){
              this.JSON_PREGUNTA.respuesta={d1:null,d2:null,d3:null};
            }
            
            //this.setComboInstitucional(Number(this.JSON_PREGUNTA.tbl_data));
          }
          if(this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.desplegable_libre ||
            this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.seleccion_multiple || 
            this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.seleccion_unica){
            this.esAgregarPreguntaMultiple = pregunta.es_agregar_pregunta;
            if(this.JSON_PREGUNTA.id_tipo!=TIPO_PREGUNTA.desplegable_libre){
              let rpta=[];
              this.JSON_PREGUNTA.opciones.forEach(f=>{
                let item=f;
                item.selected=false;
                rpta.push(item);
              });
              this.JSON_PREGUNTA.respuesta=rpta;
            }else{
              this.JSON_PREGUNTA.respuesta=[null];
            }
          }
          if(this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.matriz){
            let rpta=[];let controls=[];
            if(this.JSON_PREGUNTA.es_columna_matriz){
              this.JSON_PREGUNTA.filas.forEach((f,fidx)=>{
                let item = f;let vals=[];
                let columnas=[];controls.push([]);
                this.JSON_PREGUNTA.columnas.forEach(c=>{
                  let col=c;
                  if(c.forma.id_tipo==TIPO_PREGUNTA.numerico_decimal || c.forma.id_tipo==TIPO_PREGUNTA.numerico_entero 
                    || c.forma.id_tipo==TIPO_PREGUNTA.seleccion_unica || c.forma.id_tipo==TIPO_PREGUNTA.desplegable_institucional){
                    vals.push(null);
                  }else{
                    vals.push([]);
                  }

                  if(c.forma.id_tipo_pregunta==TIPO_PREGUNTA.seleccion_unica){
                    col.forma.respuesta=[null];
                    controls[fidx].push(new FormControl(null));
                  }else{
                    controls[fidx].push(new FormControl(col.forma.respuesta));
                  }
                  columnas.push(col);
                })

                item.respuestas=vals;
                item.columnas=columnas;
                rpta.push(item);
              });
            }else if(!this.JSON_PREGUNTA.es_columna_matriz){
              var filas = this.JSON_PREGUNTA.filas;
              for (var i = 0; i < filas.length; i++) {
                // Iterate over numeric indexes from 0 to 5, as everyone expects.
                const item = filas[i];let vals=[];
                let columna=[];controls.push([]);
                filas[i].columnas = [];
                const _json_ = JSON.parse(pregunta.json_alternativas);
                var columnass = _json_.columnas;
                for (var j = 0; j < columnass.length; j++) {                    
                  var col=columnass[j];
                  col.forma = item.forma;
                  col.nombre_fila = item.nombre_fila;                    
                  if(filas[i].forma.id_tipo==TIPO_PREGUNTA.numerico_decimal || filas[i].forma.id_tipo==TIPO_PREGUNTA.numerico_entero 
                    || filas[i].forma.id_tipo==TIPO_PREGUNTA.seleccion_unica || filas[i].forma.id_tipo==TIPO_PREGUNTA.desplegable_institucional){
                    vals.push(null);
                  }else{
                    vals.push([]);
                  }
                  if(filas[i].forma.id_tipo_pregunta==TIPO_PREGUNTA.seleccion_unica){
                    col.forma.respuesta=[null];
                    controls[filas[i].idx].push(new FormControl(null));
                  }else{
                    controls[filas[i].idx].push(new FormControl(columnass[j].forma.respuesta));
                  }                    
                  columna.push(col);                    
                }
                let fila_item = this.JSON_PREGUNTA.filas.find(x=> x.idx == filas[i].idx);
                fila_item.respuestas=vals;
                fila_item.columnas = columna;
                rpta.push(fila_item);
              }
            }
            this.frmMtz=controls;
            this.RESPUESTA_MATRIZ=rpta;
            this.JSON_PREGUNTA.respuesta=rpta;   
          }
          if(this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.fecha){
            let fechas = JSON.parse(pregunta.json_tipo_fecha);
            for (let i = 0; i < fechas.length; i++) {
              if(fechas[i].id_enumerado == 1 && fechas[i].selected){
                this.formato_fecha = "yyyy";
              }
              if(fechas[i].id_enumerado == 2 && fechas[i].selected){
                this.formato_fecha = "MM/yyyy";
              }
              if(fechas[i].id_enumerado == 3 && fechas[i].selected){
                this.formato_fecha = "dd/MM/yyyy";
              }
            }              
          }
          if(this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.texto){
            let caracter = JSON.parse(pregunta.json_alternativas);
            this.cantidad_caracteres = caracter.nro_caracteres;                         
          }
          if(this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.archivo){
            this.is_archivo = false;
            this.is_archivo = true; 
            this._placeholder = "Adjunta ";
            let count = 0;
            let archivoTipos = JSON.parse(pregunta.json_archivo_tipo_archivo);
            
            for (let i = 0; i < archivoTipos.length; i++) {
              if(archivoTipos[i].id_enumerado == 1 && archivoTipos[i].selected){
                this._imagen_extensionAceptados.push(".png", ".jpeg",".gif");
                this._imagen_MimePermitidos.push("image/png", "image/jpeg","image/gif");
                this._placeholder = this._placeholder + "JPG, GIF, PNG";
                count++;
              }
              if(archivoTipos[i].id_enumerado == 2 && archivoTipos[i].selected){
                this._imagen_extensionAceptados.push(".pdf");
                this._imagen_MimePermitidos.push("application/pdf");
                if(count > 0){
                  this._placeholder = this._placeholder + ", PDF";
                }else{
                  this._placeholder = this._placeholder + "PDF";
                }
                count++;
              }
              if(archivoTipos[i].id_enumerado == 3 && archivoTipos[i].selected){
                this._imagen_extensionAceptados.push(".doc", ".docx");
                this._imagen_MimePermitidos.push("application/vnd.openxmlformats-officedocument.wordprocessingml.document");
                
                if(count > 0){
                  this._placeholder = this._placeholder + ", WORD";
                }else{
                  this._placeholder = this._placeholder + "WORD";
                }
                count++;
              }
              if(archivoTipos[i].id_enumerado == 4 && archivoTipos[i].selected){
                this._imagen_extensionAceptados.push(".xls", ".xlsx");
                this._imagen_MimePermitidos.push("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
                if(count > 0){
                  this._placeholder = this._placeholder + ", XLS";
                }else{
                  this._placeholder = this._placeholder + "XLS";
                }
              }
            }  
            
          }
        }
        await this.emit_data_to_header(data[0],this.pageIndex);
        if(pregunta.id_tipo_archivo==TIPO_ARCHIVO_ENUMERADO.video){
          let url =pregunta.url_video;
          this._idYoutubeVideo_pregunta=url.substring(32,43);
          this._loaded_media_pregunta=true;
        }
        else if(pregunta.id_tipo_archivo==TIPO_ARCHIVO_ENUMERADO.imagen){
          await this.onGetSavedFileByCode(pregunta.iden_imagen);
          this._loaded_media_pregunta=true;
        }
        else{
          console.log("");
        }
      }
      this.cargando_tabla = false;
      // this.cd.markForCheck();
      // this.cd.detectChanges();
      this.spinner.hide();
    })
    .catch(() => {
      this.cargando_tabla = false;
      this.spinner.hide();
    });
  }

  emit_data_to_header= async (pregunta,page_index)=>{
    let _id_pregunta = pregunta.id_pregunta;
    let posibles = this.JSON_PREGUNTA;
    let _respuesta = this.respuestas.find(f=>f.id_pregunta==_id_pregunta)?this.respuestas.find(f=>f.id_pregunta==_id_pregunta).json_respuesta:posibles;
    let data_emit ={
      id_encuesta:this.id_encuesta,
      pageIndex: page_index,
      id_pregunta:_id_pregunta,
      respuesta:_respuesta,
      es_anonima:this.es_anonima,
      paginado: this.pagination_array
    };
    let json=JSON.stringify(data_emit);
    localStorage.setItem("is_filling_content", json);
    this.onEmitDataToHeader.emit(data_emit);
  }
  //#region COMBOS INSTITUCIONAL
  array_cbo_intitucional=[];
  d1=[]; d2=[]; d3=[];
  d2_disabled=false;d3_disabled=false;
  getComboInstitucional(id_tabla){
    this.respuesta_s._GetDesplegableInstitucional(id_tabla)
    .then( async (datos) => {
      if(id_tabla==2){
        this.array_cbo_intitucional=datos.data;
      }else{
        let dt=datos.data;
        let d1 = datos.data.filter(f=> f.ID_TIPO_DEPENDENCIA==2 
          && f.ES_DEPGENERAL==true && f.CODDEP_RESPONSABLE == null);
        d1.forEach(e=>{
          let d2=dt.filter(f=>f.CODDEP_RESPONSABLE == e.id);
          d2.forEach(x=>{
            let d3 = dt.filter(f=>f.CODDEP_RESPONSABLE == x.id);
            d3.forEach(y=>{
              let d4 = dt.filter(f=>f.CODDEP_RESPONSABLE == y.id);
              y.data=d4;
            })
            x.data=d3;
          });
          e.data = d2;
        });
        this.array_cbo_intitucional=datos.data;
        this.d1=d1.map(m=>{return {id:m.id, nombre:m.nombre}});
        if(this.JSON_PREGUNTA.respuesta.d1){
          this.d2=datos.data.filter(x=>x.CODDEP_RESPONSABLE == this.JSON_PREGUNTA.respuesta.d1);
          this.d2_disabled=this.d2.length>0?false:true;
          this.d3_disabled=this.d2.length>0?false:true;
        }
        if( this.JSON_PREGUNTA.respuesta.d2){
          this.d3=datos.data.filter(x=>x.CODDEP_RESPONSABLE == this.JSON_PREGUNTA.respuesta.d2);
          this.d3_disabled=this.d3.length>0?false:true;
        }
      }
      //CODDEP_RESPONSABLE
    })
    .catch(() => {}); 
  }
  setComboInstitucional(id_tabla){
    if(id_tabla==1){
      if(this.JSON_PREGUNTA.respuesta.d1){
        this.d2=this.array_d_gen.filter(x=>x.CODDEP_RESPONSABLE == this.JSON_PREGUNTA.respuesta.d1);
        this.d2_disabled=this.d2.length>0?false:true;
        this.d3_disabled=this.d2.length>0?false:true;
      }
      if( this.JSON_PREGUNTA.respuesta.d2){
        this.d3=this.array_d_gen.filter(x=>x.CODDEP_RESPONSABLE == this.JSON_PREGUNTA.respuesta.d2);
        this.d3_disabled=this.d3.length>0?false:true;
      }
    }
   
  }
  array_regimen_cbo=[];
  array_d_gen=[];
  array_d1=[];
  array_d2=[];
  array_d3=[];

  async _getComboInstitucional(id_tabla){
    await this.respuesta_s._GetDesplegableInstitucional(id_tabla)
    .then(async(datos) => {
      if(id_tabla==2){
        this.array_regimen_cbo=datos.data;
      }else{
        let dt=datos.data;
        let d1 = datos.data.filter(f=> f.ID_TIPO_DEPENDENCIA==2 
          && f.ES_DEPGENERAL==true && f.CODDEP_RESPONSABLE == null);
        d1.forEach(e=>{
          let d2=dt.filter(f=>f.CODDEP_RESPONSABLE == e.id);
          d2.forEach(x=>{
            let d3 = dt.filter(f=>f.CODDEP_RESPONSABLE == x.id);
            d3.forEach(y=>{
              let d4 = dt.filter(f=>f.CODDEP_RESPONSABLE == y.id);
              y.data=d4;
            })
            x.data=d3;
          });
          e.data = d2;
        });
        this.array_d_gen=datos.data;
        this.d1=d1.map(m=>{return {id:m.id, nombre:m.nombre}});
      }
      //CODDEP_RESPONSABLE
    })
    .catch(() => {}); 
  }
  getD2=($event)=>{
    let dt = this.array_d_gen;
    this.JSON_PREGUNTA.respuesta.d2=null;
    this.JSON_PREGUNTA.respuesta.d3=null;
    this.d2=dt.filter(f=>f.CODDEP_RESPONSABLE == $event);
    this.d2_disabled=this.d2.length>0?false:true;
    this.d3_disabled=this.d2.length>0?false:true;
  }
  getD3=($event)=>{
    let dt = this.array_d_gen;
    this.JSON_PREGUNTA.respuesta.d3=null;
    this.d3=dt.filter(f=>f.CODDEP_RESPONSABLE == $event);
    this.d3_disabled=this.d3.length>0?false:true;
  }

  getPreguntasEncuesta = async (show_spinner=true)=>{
    let filtro = { id_encuesta: this.id_encuesta, _mostar_solo_condicional:false };
    await this.encuesta_s._GetListaPreguntasByEncuesta(filtro, this.pageIndex, 10000)
    .then(async (datos) => {
      this.arrayPreguntas = datos.data;
      await this.getPreguntasSeccionEncuesta(show_spinner);
    }).catch(() => {});
  }

  getPreguntasSeccionEncuesta = async (show_spinner=true)=>{    
    let filtro = { id_encuesta: this.id_encuesta, _mostar_solo_condicional:false };
    await this.encuesta_s._GetListaPreguntasSeccionByEncuesta(filtro, this.pageIndex, 10000)
    .then(async (datos) => {
      this.arraySecciones = datos.data;
      console.log(this.arraySecciones);
      await this.get_Preguntas(show_spinner);
    }).catch(() => {});
  }

  getPreguntasSeccion=()=>{
    let filtro = { id_encuesta: this.id_encuesta };
    this.encuesta_s._GetListaPreguntasByEncuesta(filtro, this.pageIndex, 10000)
    .then( async (datos) => {
      this.arraySecciones = datos.data;
    }).catch(() => {});
  }
  
  //#endregion
  
  //#region  EVENTOS DEL LLENADO
  setOneClickedOnly = async (idx, id)=>{
    this.JSON_PREGUNTA.respuesta.forEach((e,index)=>{
      e.selected = (index==idx?true:false);
    })    
    
    // this.JSON_PREGUNTA.respuesta[id].selected = true;
    this.cd.markForCheck();
    this.cd.detectChanges();
    await this.detectarDisparador();
  }

  setOneClickedMultiple = async (idx, id)=>{
    if(this.JSON_PREGUNTA.respuesta[id].selected){
      this.JSON_PREGUNTA.respuesta[id].selected = false;
    }
    else{
      this.JSON_PREGUNTA.respuesta[id].selected = true;
    }
  }
  
  setNroDecimales(nroDecimales:number){
    return 1/(100*nroDecimales);
  }

  conteoDigitosDecimal(item, json_pregunta){
    var numero_actual = json_pregunta.respuesta == null ? "" : json_pregunta.respuesta;
    var nro_entero = json_pregunta.nro_entero;
    var nro_decimal = json_pregunta.nro_decimal;
    var digito_adicional = item.key;

    var d = digito_adicional == "." ? numero_actual : numero_actual + digito_adicional;
    var numberValue = Number(d);

    var parteDecimal = numberValue % 1;
    var parteEntera = numberValue - parteDecimal;

    var dec = d.replace(parteEntera.toString() + ".", "");
  
    var valida_existe_decimal = d.includes('.');

    var valid = false;
    
    if(item.charCode >= 48 && item.charCode < 58 || item.charCode == 46)
    {
      if(valida_existe_decimal){
        if(dec.length <= nro_decimal)
        {
          valid = true;
        }
        else{
          valid = false;
        }
      }
      else{
        if(parteEntera.toString().length <= nro_entero)
        {
          valid = true;
        }
        else
        {
          valid = false;
        }
      }
    }
    else
    {
      valid = false;
    }
    
    return valid;
  }


  conteoDigitosEntero(item, json_pregunta){
    var numero_actual = json_pregunta.respuesta == null ? "" : json_pregunta.respuesta;
    var nro_entero = json_pregunta.nro_entero;
    var digito_adicional = item.key;

    var d = numero_actual + digito_adicional;
    var numberValue = Number(d);

    var parteEntera = numberValue

    var valid = false;
    
    if(item.charCode >= 48 && item.charCode < 58)
    {
      if(parteEntera.toString().length <= nro_entero)
        {
          valid = true;
        }
        else
        {
          valid = false;
        }
    }
    else
    {
      valid = false;
    }
    
    return valid;
  }

  conteoDigitosEnteroMatriz(item, fila, columna){
    var respuesta = this.JSON_PREGUNTA.respuesta[fila].respuestas[columna] == null ? "" :  this.JSON_PREGUNTA.respuesta[fila].respuestas[columna] + item.key;
    var numero_actual = respuesta == null ? "" : respuesta;   
    var nro_entero =  this.JSON_PREGUNTA.respuesta[fila].columnas[columna].forma.nro_entero;
    var numberValue = Number(numero_actual);
    var parteEntera = numberValue;
    var valid = false;    
    if(item.charCode >= 48 && item.charCode < 58)
    {
      if(parteEntera.toString().length <= nro_entero)
        {
          valid = true;
        }
        else
        {
          valid = false;
        }
    }
    else
    {
      valid = false;
    }    
    return valid;
  }

  conteoDigitosDecimalMatriz(item,fila,columna){
    var respuesta = this.JSON_PREGUNTA.respuesta[fila].respuestas[columna] == null ? "" :  this.JSON_PREGUNTA.respuesta[fila].respuestas[columna] + item.key;
    var numero_actual = respuesta == null ? "" : respuesta;   
    var nro_entero =  this.JSON_PREGUNTA.respuesta[fila].columnas[columna].forma.nro_entero;
    var nro_decimal = this.JSON_PREGUNTA.respuesta[fila].columnas[columna].forma.nro_decimal;
    var digito_adicional = item.key;
    var d = digito_adicional == "." ? numero_actual : numero_actual;
    var numberValue = Number(d);
    var parteDecimal = numberValue % 1;
    var parteEntera = numberValue - parteDecimal;
    var dec = d.replace(parteEntera.toString() + ".", "");  
    var valida_existe_decimal = d.includes('.');
    var valid = false;
    if(item.charCode >= 48 && item.charCode < 58 || item.charCode == 46)
    {
      if(valida_existe_decimal){
        if(dec.length <= nro_decimal)
        {
          valid = true;
        }
        else{
          valid = false;
        }
      }
      else{
        if(parteEntera.toString().length <= nro_entero)
        {
          valid = true;
        }
        else
        {
          valid = false;
        }
      }
    }
    else
    {
      valid = false;
    }
    
    return valid;
  }

  loading_matriz=false;
  change_status_matriz(idFila,idCol, future_status){
    let rpta=this.JSON_PREGUNTA.respuesta;
    this.JSON_PREGUNTA.respuesta=[];
    rpta[idFila].columnas[idCol].selected=future_status;
    this.loading_matriz=true;
    setTimeout(()=>{
      this.JSON_PREGUNTA.respuesta=rpta;
      this.loading_matriz=false;
    },450);
  }
  //#endregion

  _loaded_media_pregunta:boolean=false;
  _loaded_media_agradecimiento:boolean=false;
  _urlArchivo_pregunta: SafeResourceUrl;
  _urlArchivo_agradecimiento: SafeResourceUrl;
  onGetSavedFileByCode = async (codigo: string,es_agradecimiento=false) =>{
    await this._fileService.getFilesById(codigo).then(async (resp)  => {
        if (resp.Success){
            if (resp.Data){
                if(resp.Data[0].content!=null){
                    var binary = atob(resp.Data[0].content.replace(/\s/g, ''));
                    var len = binary.length;
                    var buffer = new ArrayBuffer(len);
                    var view = new Uint8Array(buffer);
                    for (var i = 0; i < len; i++) {
                        view[i] = binary.charCodeAt(i);
                    }
                    let contentType =  resp.Data[0].contentType;
                    var blob = new Blob([view], { type: contentType });
                    var urlArchivo = 'data:'+contentType+';base64,'+resp.Data[0].content;
                    if(es_agradecimiento==false){
                      this._urlArchivo_pregunta= this.sanitizer.bypassSecurityTrustResourceUrl(urlArchivo); 
                      this._loaded_media_pregunta=true;
                    }else{
                      this._urlArchivo_agradecimiento= this.sanitizer.bypassSecurityTrustResourceUrl(urlArchivo); 
                      this._loaded_media_agradecimiento=true;
                    }
                }else{
                    this._alertService.open("error",resp.Data[0].mensajeError,'Error de imagen');
                    if(es_agradecimiento==false){
                      this._loaded_media_pregunta=false;
                    }else{
                      this._loaded_media_agradecimiento=false;
                    }
                }
            }else{
                this._alertService.open("error", "Sin datos para cargar","Error de imagen");
                if(es_agradecimiento==false){
                  this._loaded_media_pregunta=false;
                }else{
                  this._loaded_media_agradecimiento=false;
                }
            }     
        }
        if(!resp.Success){
          this._alertService.open("error", resp.Messages[0],"Error de imagen");
          if(es_agradecimiento==false){
            this._loaded_media_pregunta=false;
          }else{
            this._loaded_media_agradecimiento=false;
          }
        } 
        // this.cd.detectChanges();
        // this.cd.markForCheck();
    },(error)=>{
      console.error(error);
    });
  }

  //#region VIAJE ENTE PREGUNTAS
  direccion : string = ""
  onPageChange = async (e)=>{
    e=e?Number(e):null;
    let _continue=true;
    if(this.Pregunta.es_obligatorio){
      if(this.is_validChangePregunta()){
        _continue=true;
        this.calcel_speech();
      }else{
        _continue=false;
      }
    }else{
      _continue=true;
    }
    if(_continue){
      this.presetIndex=e;
      await this.goNextPregunta();
       
      this.cd.markForCheck();
      this.cd.detectChanges();    
    }else{
      let before = this.presetIndex;
      this.pageIndex=before;
      this.cd.markForCheck();
      this.cd.detectChanges();
    }
  }
  onPageChangeNext= async()=>{
    let e = this.pageIndex+1;
    let _continue=true;
    if(this.Pregunta.es_obligatorio){
      if(this.is_validChangePregunta()){
        _continue=true;
        this.calcel_speech();
      }else{
        _continue=false;
      }
    }else{
      _continue=true;
    }
    if(_continue){
      this.presetIndex=e;
      this.direccion = "adelante";
      var numero = await this.obtenerPaginado();
      await this.goNextPregunta(numero);
      this.cd.markForCheck();
      this.cd.detectChanges();    
    }else{
      this.cd.markForCheck();
      this.cd.detectChanges();
    }
  }
  onPageChangePrev = async () =>{
    let e = this.pageIndex-1;
    //this.pageIndex = e;
    let _continue=true;
    for (let i = 0; i < this.arrayPreguntas.length; i++) {
      this.arrayPreguntas[i].actual = false;
      this.arrayPreguntas[i].resuelto = false;
    }
    if(this.Pregunta.es_obligatorio){
      if(this.is_validChangePregunta()){
        _continue=true;
        this.calcel_speech();
      }else{
        _continue=false;
      }
    }else{
      _continue=true;
    }
    if(_continue){
      this.presetIndex=e;
      this.direccion = "atras";
      var numero = await this.obtenerPaginado();
      await this.goNextPregunta(numero);
      this.cd.markForCheck();
      this.cd.detectChanges();    
    }else{
      this.cd.markForCheck();
      this.cd.detectChanges();
    }
  }
  conteo_lleno: number = 0;
  conteo_vacio: number = 0;
  is_validChangePregunta=()=>{
    let valid=true;
    if(this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.desplegable_institucional){
      if (this.JSON_PREGUNTA.tbl_data==2 && this.JSON_PREGUNTA.respuesta==null){
        valid=false;
      }
      if (this.JSON_PREGUNTA.tbl_data==1 && this.JSON_PREGUNTA.respuesta.d1==null){
        valid=false;
      }
    }
    if(this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.seleccion_multiple){
      let filter = this.JSON_PREGUNTA.respuesta.filter(f=>f.selected==true).length;
      let otro = this.JSON_PREGUNTA.otro;
      if(filter==0){
        if(this.esAgregarPreguntaMultiple){
          if(otro == "" || otro == undefined){
            valid=false;
          }
        }
        else{
          if(filter==0){
            valid=false;
          }
        }
      }
    }
    if(this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.seleccion_unica){
      let filter = this.JSON_PREGUNTA.respuesta.filter(f=>f.selected==true).length;
      let otro = this.JSON_PREGUNTA.otro;
      if(filter==0){
        if(this.esAgregarPreguntaMultiple){
          if(otro == "" || otro == undefined){
            valid=false;
          }
        }
        else{
          if(filter==0){
            valid=false;
          }
        }
      }
    }
    if(this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.desplegable_libre){
      if(this.JSON_PREGUNTA.respuesta[0]==null){
        valid=false;
      }
    }
    if(this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.fecha){
      if(this.JSON_PREGUNTA.respuesta==null){
        valid=false;
      }
    }
    if(this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.numerico_decimal
      || this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.numerico_entero){
      if(this.JSON_PREGUNTA.respuesta==null){
        valid=false;
      }
    }
    if(this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.matriz){
      this.conteo_vacio = 0;
      const _json_ = this.JSON_PREGUNTA;
      if(this.JSON_PREGUNTA.es_columna_matriz){
        for(var j = 0; j < _json_.filas.length; j++){
          this.conteo_lleno = 0;
          for(var i = 0; i < _json_.columnas.length; i++){
            if(_json_.respuesta[j].respuestas[i] == null || _json_.respuesta[j].respuestas[i] == "" || _json_.respuesta[j].respuestas[i].length == 0){
              this.conteo_vacio++;
            }
            else{
              this.conteo_lleno++;
            }
            
           
          }
          if(this.conteo_lleno > 0){
            if(_json_.columnas.length > this.conteo_lleno){
              valid=false;
            }
          } 
         
       
        }
        
        var total = _json_.columnas.length * _json_.filas.length;
        if(this.conteo_vacio == total){
          valid=false;
        }

      }else{
        for(var i = 0; i < _json_.columnas.length; i++){
          this.conteo_lleno = 0;
          for(var j = 0; j < _json_.filas.length; j++){
         
            if(_json_.respuesta[j].respuestas[i] == null || _json_.respuesta[j].respuestas[i] == "" || _json_.respuesta[j].respuestas[i].length == 0){
              this.conteo_vacio++;
            }
            else{
              this.conteo_lleno++;
            }
         
          }
          if(this.conteo_lleno > 0){
            if(_json_.filas.length > this.conteo_lleno){
              valid=false;
            }
          } 
        }
        var total = _json_.columnas.length * _json_.filas.length;
        if(this.conteo_vacio == total){
          valid=false;
        }for(var i = 0; i < _json_.columnas.length; i++){
          this.conteo_lleno = 0;
          for(var j = 0; j < _json_.filas.length; j++){
         
            if(_json_.respuesta[j].respuestas[i] == null || _json_.respuesta[j].respuestas[i] == "" || _json_.respuesta[j].respuestas[i].length == 0){
              this.conteo_vacio++;
            }
            else{
              this.conteo_lleno++;
            }
         
          }
          if(this.conteo_lleno > 0){
            if(_json_.filas.length > this.conteo_lleno){
              valid=false;
            }
          } 
        }
        var total = _json_.columnas.length * _json_.filas.length;
        if(this.conteo_vacio == total){
          valid=false;
        }





       
        
        // for (var i = 0; i < _json_.filas.length; i++) {
        //   for (var j = 0; j < _json_.filas[i].respuestas.length; j++) {
        //     if(_json_.filas[i].respuestas[j] == null || _json_.filas[i].respuestas[j] == "" || _json_.filas[i].respuestas[j].length == 0){
        //       valid=false;
        //     }
        //   }
        // }
      }
    }
    if(this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.archivo){
      if (!this.JSON_PREGUNTA.respuesta){
        valid=false;
      }      
    }

    if(this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.texto){
      if(this.JSON_PREGUNTA.respuesta==null){
        valid=false;
      }
    }

    if(!valid){
      this.createNotification('warning','Advertencia','<ul><li>Debe responder a esta pregunta para poder continuar.</li></ul>');
    }
    return valid;
  }
  goNextPregunta = async (aumento=0)=>{
    if(this.Pregunta.es_finaliza_encuesta && this.Pregunta.id_tipo_pregunta == TIPO_PREGUNTA.mensaje){
      await this.goFinalizarEncuesta();
    }else{
      let _id_pregunta_actual = this.Pregunta.id_pregunta;
    let _actual_page=0;
    this.pagination_array.forEach(x=>{
      if(x.id_pregunta==_id_pregunta_actual){
        _actual_page=x.page;
      }
    });
    this.pageIndex = aumento // _actual_page + aumento; // aqui
    
    if(!this.es_anonima){
      if(this.respuestas.find(f=>f.id_pregunta==this.Pregunta.id_pregunta)){
        this.respuestas.forEach(e=>{
          if(e.id_pregunta == this.Pregunta.id_pregunta){
            e.json_respuesta = JSON.stringify(this.JSON_PREGUNTA);
          }
        })
      }else{
        this.respuestas.push({
          id_pregunta : this.Pregunta.id_pregunta,
          json_respuesta:  JSON.stringify(this.JSON_PREGUNTA)
        });
      }
      let id_pregunta = this.Pregunta.id_pregunta;
      let respuesta = this.respuestas.find(f=>f.id_pregunta==id_pregunta).json_respuesta;
      this.spinner.show();
      let _arr = await this._detectar_resueltos(this.pagination_array);
      _arr.forEach((x,idx)=>x.page=idx+1);
      this.total = _arr.length; //_arr.filter(x=>x.hidden==false).length;
      this.pagination_array=_arr;
      await this.respuesta_s._UpdatePreguntaActualEncuestaAdministrado(this.id_encuesta,this.pageIndex,id_pregunta,respuesta, 1, JSON.stringify(this.pagination_array))
      .then(async (datos) => {
        await this.get_Preguntas(false);
        this.cd.markForCheck();
        this.cd.detectChanges();
      })
      .catch(() => {
      });

    }else{
      if(this.respuestas.find(f=>f.id_pregunta==this.Pregunta.id_pregunta)){
        this.respuestas.forEach(e=>{
          if(e.id_pregunta == this.Pregunta.id_pregunta){
            e.json_respuesta = JSON.stringify(this.JSON_PREGUNTA);
          }
        })
      }else{
        this.respuestas.push({
          id_pregunta : this.Pregunta.id_pregunta,
          json_respuesta:  JSON.stringify(this.JSON_PREGUNTA)
        });
      }
      let _arr= await this._detectar_resueltos(this.pagination_array);
      this.total = _arr.length; //_arr.filter(x=>x.hidden==false).length;
      _arr.forEach((x,idx)=>x.page=idx+1);
      this.pagination_array=_arr;
      await this.get_Preguntas();
    }
    }
  }

  GoBackEncuesta=()=>{
    if(this.respuestas.find(f=>f.id_pregunta==this.Pregunta.id_pregunta)){
      this.respuestas.forEach(e=>{
        if(e.id_pregunta == this.Pregunta.id_pregunta){
          e.json_respuesta = JSON.stringify(this.JSON_PREGUNTA);
        }
      })
    }else{
      this.respuestas.push({
        id_pregunta : this.Pregunta.id_pregunta,
        json_respuesta:  JSON.stringify(this.JSON_PREGUNTA)
      });
    }


    let str=this.es_anonima?'Perderá los datos registrados hasta el momento.':'Podrás volver a ingresar y responder desde donde te quedaste.';
    this.modal.confirm({
      nzTitle: 'Confirmación de salir de encuesta',
      nzContent: '¿Esta seguro de salir de la plataforma sin completar su encuesta?<br>'+str,
      nzOkText: 'Si',
      nzOkType: 'primary',
      nzCancelText: 'No',
      nzOnOk: () => {
        if(!this.es_anonima){
          let id_pregunta = this.Pregunta.id_pregunta;
          let respuesta = this.respuestas.find(f=>f.id_pregunta==id_pregunta).json_respuesta;
          this.spinner.show();
          this.respuesta_s._UpdatePreguntaActualEncuestaAdministrado(this.id_encuesta,this.pageIndex,id_pregunta,respuesta, 1,JSON.stringify(this.pagination_array))
          .then((datos) => {
            //NAVEGAR A PANTALLA DE FINALIZACION
            this.onGoBackEncuesta.emit(true);
            this.go_GoodBye();
            this.spinner.hide();
            this.cd.markForCheck();
            this.cd.detectChanges();
          })
          .catch(() => {});
        }else{
          this.onGoBackEncuesta.emit(true);
        }
      },
      nzOnCancel: () =>{}
    });
  }
  respuesta_final=null;
  fecha_envio:Date=new Date();
  goFinalizarEncuesta=()=>{
    let _continue=true;
    if(this.Pregunta.es_obligatorio){
      if(this.is_validChangePregunta()){
        _continue=true;
        this.calcel_speech();
      }else{
        _continue=false;
      }
    }else{
      _continue=true;
    }
    if(_continue){
      
      let valid=true;
      if(this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.archivo){
        if (!this.JSON_PREGUNTA.respuesta){
          valid=false;
        }      
      }
      if(!valid){
        this.createNotification('warning','Advertencia','<ul><li>Debe responder a esta pregunta para poder continuar.</li></ul>');
      }else{
        if(this.respuestas.find(f=>f.id_pregunta==this.Pregunta.id_pregunta)){
          this.respuestas.forEach(e=>{
            if(e.id_pregunta == this.Pregunta.id_pregunta){
              e.json_respuesta = JSON.stringify(this.JSON_PREGUNTA);
            }
          })
        }else{
          this.respuestas.push({
            id_pregunta : this.Pregunta.id_pregunta,
            json_respuesta:  JSON.stringify(this.JSON_PREGUNTA)
          });
        }
        this.calcel_speech();
    
        if(this.Pregunta.es_finaliza_encuesta && this.Pregunta.id_tipo_pregunta == TIPO_PREGUNTA.mensaje){
          localStorage.setItem("is_filling", "true");
            if(!this.es_anonima){
              let id_pregunta = this.Pregunta.id_pregunta;
              let respuesta = this.respuestas.find(f=>f.id_pregunta==id_pregunta).json_respuesta;
              this.spinner.show();
              this.respuesta_s._UpdatePreguntaActualEncuestaAdministrado(this.id_encuesta,this.pageIndex,id_pregunta,respuesta, 2,JSON.stringify(this.pagination_array))
              .then((datos) => {
                this.respuesta_final=datos.data;
                this.fecha_envio=new Date(datos.data.Value.fecha_envio);
                //NAVEGAR A PANTALLA DE FINALIZACION
                this.go_GoodBye();
                this.spinner.hide();
                this.cd.markForCheck();
                this.cd.detectChanges();
              })
              .catch(() => {});
            }else{
              //SaveAndFinishEncuestaAnonima
              let _respuestas:RespuestaByPregunta[]=this.respuestas.map(m=>{return { id_pregunta: Number(m.id_pregunta), json_rpta: m.json_respuesta} });
              this.respuestas.forEach
              let filter:SaveRespuestaAnonimaRequest={
                id_encuesta: this.id_encuesta,
                user_name: '',
                dni_trabajador:'',
                id_estado: 2,
                nro_pregunta: this.pageIndex,
                sexo:"",
                edad:0,
                respuestas: _respuestas
              };
              this.spinner.show();
              this.respuesta_s._SaveAndFinishEncuestaAnonima(filter)
              .then((datos) => {
                if(datos.data.Success){
                  this.respuesta_final=datos.data;
                  this.fecha_envio=new Date(datos.data.Value);
                  //NAVEGAR A PANTALLA DE FINALIZACION
                  this.spinner.hide();
                  this.go_GoodBye();
                }else{
                  let str='<ul>';
                  datos.data.Messages.forEach(e=>{
                    str+='<li>'+e+'</li>';
                  });
                  str+='</ul>';
                  this.createNotification('error','Advertencia',str);
                }
                
                this.cd.markForCheck();
                this.cd.detectChanges();
              })
              .catch(() => {});
              
            }
        }else{
          this.modal.confirm({
            nzTitle: 'Confirmación de finalización de encuesta',
            nzContent: '¿Esta seguro de finalizar la encuesta?<br>Una vez finalizada no podrá modificar su respuesta.',
            nzOkText: 'Si',
            nzOkType: 'primary',
            nzCancelText: 'No',
            nzOnOk: () => {
              localStorage.setItem("is_filling", "true");
              if(!this.es_anonima){
                let id_pregunta = this.Pregunta.id_pregunta;
                let respuesta = this.respuestas.find(f=>f.id_pregunta==id_pregunta).json_respuesta;
                this.spinner.show();
                this.respuesta_s._UpdatePreguntaActualEncuestaAdministrado(this.id_encuesta,this.pageIndex,id_pregunta,respuesta, 2,JSON.stringify(this.pagination_array))
                .then((datos) => {
                  this.respuesta_final=datos.data;
                  this.fecha_envio=new Date(datos.data.Value.fecha_envio);
                  //NAVEGAR A PANTALLA DE FINALIZACION
                  this.go_GoodBye();
                  this.spinner.hide();
                  this.cd.markForCheck();
                  this.cd.detectChanges();
                })
                .catch(() => {});
              }else{
                //SaveAndFinishEncuestaAnonima
                let _respuestas:RespuestaByPregunta[]=this.respuestas.map(m=>{return { id_pregunta: Number(m.id_pregunta), json_rpta: m.json_respuesta} });
                this.respuestas.forEach
                let filter:SaveRespuestaAnonimaRequest={
                  id_encuesta: this.id_encuesta,
                  user_name: '',
                  dni_trabajador:'',
                  id_estado: 2,
                  nro_pregunta: this.pageIndex,
                  sexo:"",
                  edad:0,
                  respuestas: _respuestas
                };
                this.spinner.show();
                this.respuesta_s._SaveAndFinishEncuestaAnonima(filter)
                .then((datos) => {
                  if(datos.data.Success){
                    this.respuesta_final=datos.data;
                    this.fecha_envio=new Date(datos.data.Value);
                    //NAVEGAR A PANTALLA DE FINALIZACION
                    this.spinner.hide();
                    this.go_GoodBye();
                  }else{
                    let str='<ul>';
                    datos.data.Messages.forEach(e=>{
                      str+='<li>'+e+'</li>';
                    });
                    str+='</ul>';
                    this.createNotification('error','Advertencia',str);
                  }
                  
                  this.cd.markForCheck();
                  this.cd.detectChanges();
                })
                .catch(() => {});
                
              }
            },
            nzOnCancel: () =>{
              if(!this.es_anonima){
                let id_pregunta = this.Pregunta.id_pregunta;
                let respuesta = this.respuestas.find(f=>f.id_pregunta==id_pregunta).json_respuesta;
                this.respuesta_s._UpdatePreguntaActualEncuestaAdministrado(this.id_encuesta,this.pageIndex,id_pregunta,respuesta, 1,JSON.stringify(this.pagination_array))
                .then((datos) => {
                  if(!datos.data.Success){
                    let str='<ul>';
                    datos.data.Messages.forEach(e=>{
                      str+='<li>'+e+'</li>';
                    });
                    str+='</ul>';
                    this.createNotification('error','Advertencia',str);
                  }
                  this.cd.markForCheck();
                  this.cd.detectChanges();
                })
                .catch(() => {
                });
              }
            }
          });
        }
      }

    }else{
      setTimeout(()=>{
        this.cd.markForCheck();
        this.cd.detectChanges();
      },150);
    }
  }

  show_final_envio=false;
  go_GoodBye(){
    this.show_pregunta_llenado=false;
    this.show_final_envio=true;
  }
  goBackToInicio=()=>{
    this.onGoToInicio.emit(true);
  }
  //#endregion

  total_novisible: number = 0;
  //#region DETECCION DE DISPARADORES Y PAGINADOR
  detectarDisparador = async ()=>{
    if(this.Pregunta.es_condicional){
      let disparadores_noVisibles=[]; 
      let disparadores_visibles=[];
      let array_pag=[];
      this.loaded_pagination=false;
      if(this.Pregunta.id_tipo_pregunta==this._TIPO_PREGUNTA.seleccion_unica){
        let _tiene_respuesta = this.JSON_PREGUNTA.respuesta.find(x=>x.selected==true);
        if(_tiene_respuesta){
          let _rpta = JSON.stringify(this.JSON_PREGUNTA.respuesta); let _id_pregunta=this.Pregunta.id_pregunta;
          disparadores_noVisibles = this.disparadoresRespuestas.filter(x=>x.id_pregunta_condicional == this.Pregunta.id_pregunta && x.json_respuesta_condicional != _rpta);
          disparadores_visibles = this.disparadoresRespuestas.filter(x=>x.id_pregunta_condicional == this.Pregunta.id_pregunta && x.json_respuesta_condicional == _rpta);
        }else{
          disparadores_noVisibles=[];
          disparadores_visibles=this.disparadoresRespuestas.filter(x=>x.id_pregunta_condicional == this.Pregunta.id_pregunta);
        }
      }
      this.pagination_array.forEach(x=>{
        var sds = disparadores_noVisibles.find(f=>f.id_pregunta==x.id_pregunta);
        var dsd = disparadores_visibles.find(f=>f.id_pregunta==x.id_pregunta);
        if(disparadores_noVisibles.find(f=>f.id_pregunta==x.id_pregunta) || disparadores_visibles.find(f=>f.id_pregunta==x.id_pregunta)){
          if(disparadores_noVisibles.find(f=>f.id_pregunta==x.id_pregunta)){
            let find=this.paginado_totalizado.find(f=>f.id_pregunta==x.id_pregunta);
            find.hidden=true;
            array_pag.push(find);
          }
          if(disparadores_visibles.find(f=>f.id_pregunta==x.id_pregunta)){
            let find=this.paginado_totalizado.find(f=>f.id_pregunta==x.id_pregunta);
            find.hidden=false;
            array_pag.push(find);
          }
        }else{
          let find=this.paginado_totalizado.find(f=>f.id_pregunta==x.id_pregunta);
          array_pag.push(find);
        }
      });

      array_pag.forEach((x,idx)=>{x.page=idx+1});
      this.total = array_pag.length;; //array_pag.filter(x=>x.hidden==false).length;
      this.pagination_array= this._detectar_resueltos(array_pag);
      this.total_novisible;
      this.loaded_pagination=true;
      this.cd.markForCheck();
      this.cd.detectChanges();
    }
  }
  getPaginationNotHidden=()=>{
    let _arr = this.pagination_array.filter(x=>x.hidden==false);
    _arr.forEach((x,idx)=>x.page=idx+1);
    return _arr;
  }
  
  _detectar_resueltos= (array:any[])=>{
    let copy_page:any[]=array;//_resolved;
    this._total_preguntas.forEach((f,index)=>{
      let rpta = this.respuestas.find(x=>x.id_pregunta==f.id_pregunta);
      let _pregunta= copy_page.find(x=>x.id_pregunta == f.id_pregunta);
      if(_pregunta){
        let  _idx_pregunta = copy_page.indexOf(_pregunta);
        if(rpta){
          let json_respuesta = JSON.parse(rpta.json_respuesta);
          if(json_respuesta.id_tipo==TIPO_PREGUNTA.desplegable_institucional){
            if(json_respuesta.tbl_data==1){
              copy_page[_idx_pregunta].resolved=json_respuesta.respuesta.d1==null?false:true;
            }
            if(json_respuesta.tbl_data==2){
              copy_page[_idx_pregunta].resolved=json_respuesta.respuesta==null?false:true;
            }
          }
          if(json_respuesta.id_tipo==TIPO_PREGUNTA.seleccion_multiple || 
            json_respuesta.id_tipo==TIPO_PREGUNTA.seleccion_unica){

            let filter = json_respuesta.respuesta.length==0?null:json_respuesta.respuesta.filter(ff=>ff.selected==true);
            copy_page[_idx_pregunta].resolved=filter.length==0?false:true;

          }
          if(json_respuesta.id_tipo==TIPO_PREGUNTA.desplegable_libre){
            let filter = json_respuesta.respuesta.length==0?null:json_respuesta.respuesta[0];
            copy_page[_idx_pregunta].resolved=filter?true:false;
          }
  
          if(json_respuesta.id_tipo==TIPO_PREGUNTA.numerico_entero || json_respuesta.id_tipo==TIPO_PREGUNTA.numerico_decimal){
            copy_page[_idx_pregunta].resolved=json_respuesta.respuesta==null?false:true;
          }
          if(json_respuesta.id_tipo==TIPO_PREGUNTA.fecha){
            copy_page[_idx_pregunta].resolved=json_respuesta.respuesta==null?false:true;
          }
          if(json_respuesta.id_tipo==TIPO_PREGUNTA.texto){
            copy_page[_idx_pregunta].resolved=json_respuesta.respuesta==null?false:true;
          }
          if(json_respuesta.id_tipo==TIPO_PREGUNTA.archivo){
            copy_page[_idx_pregunta].resolved=json_respuesta.respuesta==null?false:true;
          }
          if(json_respuesta.id_tipo==TIPO_PREGUNTA.mensaje){
            copy_page[_idx_pregunta].resolved=json_respuesta.respuesta==null?false:true;
          }
          if(json_respuesta.id_tipo==TIPO_PREGUNTA.matriz){
            copy_page[_idx_pregunta].resolved=json_respuesta.respuesta.length==0?false:true;
          }
        }else{
          copy_page[_idx_pregunta].resolved=false;
        }   
      }
    });
    return copy_page;
  }


  paginado_totalizado=[];
  crear_paginado = async () =>{
    let array_pag=[]; let _existentes = this.paginado_registrado;
    if(_existentes.length>0){
      this.pagination_array=_existentes;
      this.paginado_totalizado=_existentes;
    }else{
      for (let i = 0; i < this._total_preguntas.length; i++) {
        let _find=_existentes.find(x=>x.id_pregunta == this._total_preguntas[i].id_pregunta);
        let e={
          page:i+1,
          selected: this.pageIndex==i+1?true:false,
          id_pregunta: this._total_preguntas[i].id_pregunta,
          resolved: false,
          hidden: false
        };
        if(_find){
          e.resolved=_find.resolved;
        }
        array_pag.push(e);
        this.pagination_array_resolved.push(e)
      }
      this.pagination_array=array_pag;
      this.paginado_totalizado=array_pag;
    }
  }
  //#endregion
  show_pantalla_agradecimiento=false;
  show_agradecimientos=async ()=>{
    this.spinner.show();
    this.show_final_envio=false;
    this.show_pantalla_agradecimiento=true;
    if(this.agradecimiento_data.id_tipo_archivo==TIPO_ARCHIVO_ENUMERADO.video){
      let url =this.agradecimiento_data.url_video;
      this._idYoutubeVideo_agradecimiento=url.substring(32,43);
      this._loaded_media_agradecimiento=true;
    }else{
      await this.onGetSavedFileByCode(this.agradecimiento_data.iden_imagen,true);
    }
    this.spinner.hide();
  }
 

 


  createNotification = (type: string, title: string, message: string): void => {
    this.notification.create(
      type,
      title,
      message
    );
  };

  public onReady(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }

  public editor = DecoupledEditor;
  configEditor = DecoupledInit.configEditor;
  esInvalidoContenido:boolean=false;
  tags: Array<string> = [];
  expresion = /\[\[[A-Z0-9\_]+\]\]/g;
  public onChange({ editor }: ChangeEvent) {
    const data = editor.getData();
    const tags = data.match(this.expresion);
    if (tags) {
      this.tags = tags;
    } else {
      this.tags = [];
    }

    this.tags = this.tags.filter((value, index, self) => {
      return self.indexOf(value) == index;
    });
    this.esInvalidoContenido=false;
    //this.texto_mensaje = this.tags.join();
  }

  set_imagen_iden=(data)=>{
    //this.error_imagen_segundo_plano=false;
    this.JSON_PREGUNTA.respuesta = data.codigo;
    //this.id_archivo =data.codigo;
  }

  handleRemovedFilePresentacion=(e)=>{
    this.id_archivo=null;
  }

  set_archivo_fila_matriz=(data, fila, columna)=>{
    this.JSON_PREGUNTA.respuesta[fila].respuestas[columna] = data.codigo;
    //this.error_imagen_segundo_plano=false;
    //this.JSON_PREGUNTA.respuesta = data.codigo;
    //this.id_archivo =data.codigo;
  }

  handleRemovedFilePresentacionMatriz=(e,fila, columna)=>{
    //this.id_archivo=null;}
    this.JSON_PREGUNTA.respuesta[fila].respuestas[columna] = null;
  }

  obtenerPaginado = async (page:number = 0) =>{
    if(this.direccion == "adelante"){
        let preguntas_total = this.pagination_array.filter(x => x.hidden == false);

        const page_index = preguntas_total.findIndex((elemento, indice) => {
          if (elemento.id_pregunta === this.Pregunta.id_pregunta) {
            return true;
          }
        });
        page = preguntas_total[page_index + 1].page;
    }
    else{
      let preguntas_total = this.pagination_array.filter(x => x.hidden == false);
        const page_index = preguntas_total.findIndex((elemento, indice) => {
          if (elemento.id_pregunta === this.Pregunta.id_pregunta) {
            return true;
          }
        });
        page = preguntas_total[page_index - 1].page;
    }
    return page;
  }
}
