import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AlertService, AuthService, EncuestaAgradecimientoData, EncuestasService, FileService, PreguntaResponseItem, RespuestaByPregunta, SaveRespuestaAnonimaRequest, TIPO_ARCHIVO_ENUMERADO, TIPO_PREGUNTA, TIPO_ENCUESTA, FILE_SETTINGS } from '@app/_core';
import { RespuestaService } from '@app/_core/services/respuesta.service';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { setTime } from 'ngx-bootstrap/chronos/utils/date-setters';
import { NgxSpinnerService } from 'ngx-spinner';
import Speech from 'speak-tts';
@Component({
  selector: 'app-llenado-pregunta',
  templateUrl: './llenado-pregunta.component.html',
  styleUrls: ['./llenado-pregunta.component.css']
})
export class LlenadoPreguntaComponent implements OnInit {

  @Input() id_encuesta:number=0;
  @Input() es_anonima:boolean=false;
  @Input() total:number=7;
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
  formato_fecha: string="";
  cantidad_caracteres: string="1000";
  //
  _imagen_archivo: Array<any>;
  estaGuardando: boolean = false;
  pesoMaximoEnMB = FILE_SETTINGS.maxFileSize;
  id_archivo: string;
  imagen_extensionAceptados= [".png", ".jpeg",".gif", ".pdf", ".doc", ".docx", ".xls", ".xlsx" ];
  imagen_MimePermitidos=["image/png", "image/jpeg","image/gif", "application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  , "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"];
  _imagen_extensionAceptados = [];
  _imagen_MimePermitidos=[];
  url = "/api/comun/descargar-archivo";
  speechData: any;
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
          volume: this.volume_value_pregunta/100,
          lang: 'es-MX',
          rate: 1,
          pitch: 1,
          voice: 'Microsoft Raul - Spanish (Mexico)',
          splitSentences: true,
          listeners: {
            onvoiceschanged: (voices) => {},
            onvolumechanged:(vol)=>{}
          },
        })
        .then((data) => {
          this.speechData = data;
        })
        .catch((e) => { console.log('An error occured while initializing : ', e);});
    }

  }
  loaded_pagination=false;
  pagination_array=[];
  pagination_array_resolved=[];
  async ngOnInit() {    
    /*this.pagination_array.forEach(pg=>{
          pg.selected=(pg.page==e?true:false);
        })*/
    await this._getComboInstitucional(1);
    await this._getComboInstitucional(2);
    if(this.disparadoresRespuestas.length==0){
      await this.buscarDisparadores()
    }
    this.crear_paginado();
    this.detectar_resueltos();
    setTimeout(()=>{
      this.loaded_pagination=true;
      if(!this.es_anonima){
        this.spinner.show();
        this.respuesta_s._GetRespuestasByEncuestaAndEncuestado(this.id_encuesta, TIPO_ENCUESTA.intranet)
        .then((datos) => {
          this.respuestas=datos.data;
          this.get_Preguntas(false);
        })
        .catch(() => {}); 
      }else{
        this.get_Preguntas();
      }
      this.cd.markForCheck();
      this.cd.detectChanges();
    },350);
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

  detectar_resueltos=()=>{
    let copy_page=this.pagination_array;//_resolved;
    this.loaded_pagination=false;
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
          if(json_respuesta.id_tipo==TIPO_PREGUNTA.matriz){
            copy_page[_idx_pregunta].resolved=json_respuesta.respuesta.length==0?false:true;
          }
        }else{
          copy_page[_idx_pregunta].resolved=false;
        }
      }
    });
    copy_page.forEach((x,idx)=>{x.page=idx+1});
    setTimeout(()=>{
      //this.pagination_array_resolved=copy_page;
      this.pagination_array=copy_page;
      this.loaded_pagination=true;
      this.cd.markForCheck();
      this.cd.detectChanges();
    },120) 
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
  get_Preguntas=(show_spinner=true)=>{
    this.cargando_tabla = true;let _id_pregunta=0;
    setTimeout(() => {
      if(this.Pregunta){
        let _filtered = this.pagination_array.filter(x=>x.page==this.pageIndex);
        _id_pregunta =  _filtered.find(x=>x.hidden==false)?_filtered.find(x=>x.hidden==false).id_pregunta:0;
      }else{
        _id_pregunta =  this.pagination_array.find(x=>x.page==this.pageIndex && x.hidden==false).id_pregunta;
      }
      
      let filtro = { id_pregunta: _id_pregunta};//this.pageIndex;
      if(show_spinner){
        this.spinner.show();
      }

      localStorage.setItem("is_filling", "true");
      this.detectar_resueltos();
      this.total = this.pagination_array.filter(x=>x.hidden==false).length;
      this.encuesta_s._GetPreguntaByIdenPregunta(filtro)
      .then(async (datos) => {
        console.log(datos);
        if (datos && datos.data && datos.data.Data) {
          let data = datos.data.Data;
          let pregunta:PreguntaResponseItem = data[0];
          this.Pregunta = data[0];
          this.html_pregunta = '<p>'+pregunta.pregunta+'</p>';
          if(this.respuestas.find(f=>f.id_pregunta==pregunta.id_pregunta)){
            let rpta=this.respuestas.find(f=>f.id_pregunta==pregunta.id_pregunta);
            let json_=JSON.parse(rpta.json_respuesta);
            if(json_.id_tipo==TIPO_PREGUNTA.desplegable_institucional){
              //this.setComboInstitucional(Number(this.JSON_PREGUNTA.tbl_data));
            }
            if(json_.id_tipo==TIPO_PREGUNTA.matriz){
              let controls=[];
              json_.respuesta.forEach((f,fidx)=>{
                controls.push([]);
                f.columnas.forEach((c,cidx)=>{
                  controls[fidx].push(new FormControl(f.respuestas[cidx]));
                })
              });
              this.frmMtz=controls;
              //this.RESPUESTA_MATRIZ=json_.respuesta;
              //RESPUESTA_MATRIZ[fila.idx].columnas[col.idx].forma.respuesta
            }else{
              //this.RESPUESTA_MATRIZ=[];
              this.frmMtz=[];
            }
            this.JSON_PREGUNTA=json_;
          }else{
            this.JSON_PREGUNTA = JSON.parse(pregunta.json_alternativas);
            if(this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.desplegable_institucional){
              if(this.JSON_PREGUNTA.tbl_data==1){
                this.JSON_PREGUNTA.respuesta={d1:null,d2:null,d3:null};
              }
              //this.setComboInstitucional(Number(this.JSON_PREGUNTA.tbl_data));
            }
            if(this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.desplegable_libre ||
              this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.seleccion_multiple || 
              this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.seleccion_unica){
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
              this.JSON_PREGUNTA.filas.forEach((f,fidx)=>{
                let item = f;let vals=[];
                let columnas=[];controls.push([]);
                this.JSON_PREGUNTA.columnas.forEach(c=>{
                  let col=c;
                  if(c.forma.id_tipo==TIPO_PREGUNTA.numerico_decimal || c.forma.id_tipo==TIPO_PREGUNTA.numerico_entero 
                    || c.forma.id_tipo==TIPO_PREGUNTA.seleccion_unica || c.forma.id_tipo==TIPO_PREGUNTA.desplegable_institucional){
                    vals.push(null);
                  }else{//c.forma.id_tipo==TIPO_PREGUNTA.desplegable_libre || c.forma.id_tipo==TIPO_PREGUNTA.seleccion_multiple
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
              let archivoTipos = JSON.parse(pregunta.json_archivo_tipo_archivo);
              for (let i = 0; i < archivoTipos.length; i++) {
                if(archivoTipos[i].id_enumerado == 1 && archivoTipos[i].selected){
                  this._imagen_extensionAceptados.push(".png", ".jpeg",".gif");
                  this._imagen_MimePermitidos.push("image/png", "image/jpeg","image/gif");
                }
                if(archivoTipos[i].id_enumerado == 2 && archivoTipos[i].selected){
                  this._imagen_extensionAceptados.push(".pdf");
                  this._imagen_MimePermitidos.push("application/pdf");
                }
                if(archivoTipos[i].id_enumerado == 3 && archivoTipos[i].selected){
                  this._imagen_extensionAceptados.push(".doc", ".docx");
                  this._imagen_MimePermitidos.push("application/vnd.openxmlformats-officedocument.wordprocessingml.document");
                }
                if(archivoTipos[i].id_enumerado == 4 && archivoTipos[i].selected){
                  this._imagen_extensionAceptados.push(".xls", ".xlsx");
                  this._imagen_MimePermitidos.push("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
                }
              }  
            }
          }
          this.emit_data_to_header(data[0],this.pageIndex);
          if(pregunta.id_tipo_archivo==TIPO_ARCHIVO_ENUMERADO.video){
            let url =pregunta.url_video;
            this._idYoutubeVideo_pregunta=url.substring(32,43);
            this._loaded_media_pregunta=true;
          }else{
            await this.onGetSavedFileByCode(pregunta.iden_imagen);
            this._loaded_media_pregunta=true;
          }
        }
        this.cargando_tabla = false;
        this.cd.markForCheck();
        this.cd.detectChanges();
        this.spinner.hide();
      })
      .catch(() => {
        this.cargando_tabla = false;
        this.spinner.hide();
      });
      
    }, 120);
  }

  emit_data_to_header=(pregunta,page_index)=>{
    let _id_pregunta = pregunta.id_pregunta;
    let posibles = this.JSON_PREGUNTA;
    /*if(this.RESPUESTA_MATRIZ.length > 0){
      let rpts=this.RESPUESTA_MATRIZ;
      rpts.forEach((f,fidx)=>{
        f.columnas.forEach((c,cidx)=>{
          let valores = this.frmMtz[fidx][cidx].value;
          c.forma.respuesta = c.id_tipo==TIPO_PREGUNTA.seleccion_unica?[valores]:valores;
        });
      });
      posibles.respuesta=rpts;
    }*/
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
    .then((datos) => {
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
    .then((datos) => {
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
  //#endregion
  
  //#region  EVENTOS DEL LLENADO
  setOneClickedOnly=(idx)=>{
    this.JSON_PREGUNTA.respuesta.forEach((e,index)=>{
      e.selected = (index==idx?true:false);
    })
    this.cd.markForCheck();
    this.cd.detectChanges();
    this.detectarDisparador();
  }
  setNroDecimales(nroDecimales:number){
    return 1/(100*nroDecimales);
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
    await this._fileService.getFilesById(codigo).then(resp => {
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
        this.cd.detectChanges();
        this.cd.markForCheck();
    },(error)=>{
      //console.error(error);
      console.log(error);
    });
  }

  //#region VIAJE ENTE PREGUNTAS
  onPageChange=(e)=>{
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
      setTimeout(()=>{
        /*this.pagination_array.forEach(pg=>{
          pg.selected=(pg.page==e?true:false);
        })*/

        this.presetIndex=e;
        this.goNextPregunta();
         
        this.cd.markForCheck();
        this.cd.detectChanges();    
      },150);
    }else{
      setTimeout(()=>{
        let before = this.presetIndex;
        this.pageIndex=before;
        this.cd.markForCheck();
        this.cd.detectChanges();
      },150);
    }
  }
  onPageChangeNext=()=>{
    let e = this.pageIndex+1;
    //this.pageIndex += 1;
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
      setTimeout(()=>{
        /*this.pagination_array.forEach(pg=>{
          pg.selected=(pg.page==e?true:false);
        })*/
        this.presetIndex=e;
        this.goNextPregunta(1);
        this.cd.markForCheck();
        this.cd.detectChanges();    
      },150);
    }else{
      setTimeout(()=>{
        //let before = this.presetIndex;
        //this.pageIndex=before;
        this.cd.markForCheck();
        this.cd.detectChanges();
      },150);
    }
  }
  onPageChangePrev=()=>{
    let e = this.pageIndex-1;
    //this.pageIndex = e;
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
      setTimeout(()=>{
        /*this.pagination_array.forEach(pg=>{
          pg.selected=(pg.page==e?true:false);
        })*/
        this.presetIndex=e;
        this.goNextPregunta(-1);
        this.cd.markForCheck();
        this.cd.detectChanges();    
      },150);
    }else{
      setTimeout(()=>{
        //let before = this.presetIndex;
        //this.pageIndex=before;
        this.cd.markForCheck();
        this.cd.detectChanges();
      },150);
    }
  }

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
    if(this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.seleccion_multiple || 
      this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.seleccion_unica){
      let filter = this.JSON_PREGUNTA.respuesta.filter(f=>f.selected==true).length;
      if(filter==0){
        valid=false;
      }
    }
    if(this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.desplegable_libre){
      if(this.JSON_PREGUNTA.respuesta[0]==null){
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
      /*let total = (this.JSON_PREGUNTA.filas.length)*(this.JSON_PREGUNTA.columnas.length);
      let count = 0;
      this.JSON_PREGUNTA.respuesta.forEach(f=>{
        f.columnas.forEach(c=>{
          if(!c.selected){
            count++;
          }
        })
      });
      if(total==count){
        valid=false;
      }*/
    }
    if(this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.archivo){
      if (!this.JSON_PREGUNTA.respuesta){
        valid=false;
      }      
    }
    if(this.JSON_PREGUNTA.id_tipo==TIPO_PREGUNTA.fecha){
      if(this.JSON_PREGUNTA.respuesta==null){
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
  goNextPregunta=(aumento=0)=>{
    let _id_pregunta_actual = this.Pregunta.id_pregunta;
    let _actual_page=0;
    this.pagination_array.forEach(x=>{
      if(x.id_pregunta==_id_pregunta_actual){
        _actual_page=x.page;
      }
    });
    this.pageIndex = _actual_page+aumento;
    
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
      let _arr=this._detectar_resueltos(this.pagination_array);
      _arr.forEach((x,idx)=>x.page=idx+1);
      this.total = _arr.filter(x=>x.hidden==false).length;
      setTimeout(()=>{
        this.pagination_array=_arr;
        this.respuesta_s._UpdatePreguntaActualEncuesta(this.id_encuesta,this.pageIndex,id_pregunta,respuesta, 1, JSON.stringify(this.pagination_array))
        .then((datos) => {
          this.get_Preguntas(false);
          this.cd.markForCheck();
          this.cd.detectChanges();
          /*
          if(datos.data.Success){
            this.get_Preguntas(false);
            this.cd.markForCheck();
            this.cd.detectChanges();
          }else{
            this.spinner.hide();
          }*/
        })
        .catch(() => {
        });
      },100)
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
      let _arr=this._detectar_resueltos(this.pagination_array);
      this.total = _arr.filter(x=>x.hidden==false).length;
      _arr.forEach((x,idx)=>x.page=idx+1);
      /*
      setTimeout(()=>{
        this.pagination_array=_arr;
      },100)*/
      this.pagination_array=_arr;
      this.get_Preguntas();
    }
  }

  GoBackEncuesta=()=>{
    /*if(this.RESPUESTA_MATRIZ.length > 0){
      let rpts=this.RESPUESTA_MATRIZ;
      this.JSON_PREGUNTA.respuesta=rpts;
    }*/
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
          this.respuesta_s._UpdatePreguntaActualEncuesta(this.id_encuesta,this.pageIndex,id_pregunta,respuesta, 1,JSON.stringify(this.pagination_array))
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
    /*if(this.RESPUESTA_MATRIZ.length > 0){
      let rpts=this.RESPUESTA_MATRIZ;
      this.JSON_PREGUNTA.respuesta=rpts;
    }*/
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
          this.respuesta_s._UpdatePreguntaActualEncuesta(this.id_encuesta,this.pageIndex,id_pregunta,respuesta, 2,JSON.stringify(this.pagination_array))
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
          this.respuesta_s._UpdatePreguntaActualEncuesta(this.id_encuesta,this.pageIndex,id_pregunta,respuesta, 1,JSON.stringify(this.pagination_array))
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

  show_final_envio=false;
  go_GoodBye(){
    this.show_pregunta_llenado=false;
    this.show_final_envio=true;
  }
  goBackToInicio=()=>{
    this.onGoToInicio.emit(true);
  }
  //#endregion

  //#region DETECCION DE DISPARADORES Y PAGINADOR
  detectarDisparador(){
    if(this.Pregunta.es_condicional){
      let disparadores_noVisibles=[]; let disparadores_visibles=[];let array_pag=[];
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
      
      this.total = array_pag.filter(x=>x.hidden==false).length;
      this.pagination_array=this._detectar_resueltos(array_pag);
      this.loaded_pagination=true;
      this.cd.markForCheck();
      this.cd.detectChanges();
      /*setTimeout(()=>{
        this.total = array_pag.filter(x=>x.hidden==false).length;
        this.pagination_array=this._detectar_resueltos(array_pag);
        this.loaded_pagination=true;
        this.cd.markForCheck();
        this.cd.detectChanges();
      },50);*/
    }
  }
  getPaginationNotHidden=()=>{
    let _arr = this.pagination_array.filter(x=>x.hidden==false);
    _arr.forEach((x,idx)=>x.page=idx+1);
    return _arr;
  }
  
  _detectar_resueltos=(array:any[])=>{
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
  crear_paginado(){
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

  set_imagen_iden=(data)=>{
    this.JSON_PREGUNTA.respuesta = data.codigo;
  }

  handleRemovedFilePresentacion=(e)=>{
    this.id_archivo=null;
  }
}
