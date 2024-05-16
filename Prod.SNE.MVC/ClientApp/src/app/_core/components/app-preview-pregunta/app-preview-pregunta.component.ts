import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TIPO_ARCHIVO_ENUMERADO, TIPO_PREGUNTA } from '@app/_core/enums';
import { PreguntaResponseItem } from '@app/_core/interfaces';
import { AlertService, EncuestasService } from '@app/_core/services';
import { RespuestaService } from '@app/_core/services/respuesta.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-app-preview-pregunta',
  templateUrl: './app-preview-pregunta.component.html',
  styleUrls: ['./app-preview-pregunta.component.css']
})
export class AppPreviewPreguntaComponent implements OnInit {

  @Input() show_media:boolean=true; 
  @Input() Pregunta:PreguntaResponseItem;
  @Input() respuesta:any=null;
  @Input() isDisabled:boolean=false;
  @Output() onClickSaveRespuesta:EventEmitter<any> = new EventEmitter();

  is_selected=false;
  _TIPO_PREGUNTA=TIPO_PREGUNTA;
  RESPUESTA_MATRIZ=[];
  frmMtz=[];
  JSON_PREGUNTA=null;
  cargando_tabla=true;
  pageSize: number = 1;
  _TIPO_ARCHIVO = TIPO_ARCHIVO_ENUMERADO;
  array_regimen_cbo=[];
  array_d_gen=[];
  array_d1=[];
  array_d2=[];
  array_d3=[];
  array_cbo_intitucional=[];
  d1=[]; d2=[]; d3=[];
  d2_disabled=false;d3_disabled=false;

  constructor(
    private spinner: NgxSpinnerService,
    private encuesta_s:EncuestasService,
    private notification: NzNotificationService,
    private respuesta_s:RespuestaService,
    private readonly _alertService: AlertService,
    private cd: ChangeDetectorRef,
  ) { }

  async ngOnInit() {
    this.spinner.show();
    await this._getComboInstitucional(1);
    await this._getComboInstitucional(2);
    this.setPreguntaJSON();
  }
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

  setPreguntaJSON(){
    if (this.Pregunta) {
      let pregunta:PreguntaResponseItem =this.Pregunta;
      if(this.respuesta){
        let rpta=this.respuesta;
        let json_ = JSON.parse(pregunta.json_alternativas);
        if(json_.id_tipo==TIPO_PREGUNTA.desplegable_institucional){
          //this.setComboInstitucional(Number(this.JSON_PREGUNTA.tbl_data));
        }
        if(json_.id_tipo==TIPO_PREGUNTA.matriz){
          let controls=[];
          rpta.forEach((f,fidx)=>{
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
        json_.respuesta=rpta;
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
      }
    }
    this.cargando_tabla = false;
    this.cd.markForCheck();
    this.cd.detectChanges();
    this.spinner.hide();
  }

  json_to_String(st){
    return JSON.stringify(st);
  }
  setRespuestaMatriz(fila_idx,col_idx, es_seleccion_unica=false){
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
  setOneClickedOnly=(idx)=>{
    this.JSON_PREGUNTA.respuesta.forEach((e,index)=>{
      e.selected = (index==idx?true:false);
      e.descripcion = this.JSON_PREGUNTA.opciones[index].descripcion;
    })
    this.is_selected=false;
    this.cd.markForCheck();
    this.cd.detectChanges();
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


  handleClickSaveRespuesta=()=>{
    this.is_selected=true;
    this.onClickSaveRespuesta.emit(this.JSON_PREGUNTA.respuesta);
  }
}
