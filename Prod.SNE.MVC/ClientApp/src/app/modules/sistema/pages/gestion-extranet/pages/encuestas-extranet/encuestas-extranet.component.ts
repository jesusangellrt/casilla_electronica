import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {  ConfiguracionInicialService,  SisEnumeradoService, SIS_TIPO_ENUMERADO, 
  ESTADO_ENCUESTA_ENUMERADO, 
  EncuestasService,
  EncuestaRequestList,
  TIPO_PREGUNTA,
  TIPO_ENCUESTA} from "@app/_core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { es_ES } from 'ng-zorro-antd/i18n';
import { NzI18nService, NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import * as Excel from 'exceljs/dist/exceljs';
import * as FileSaver from 'file-saver';
import { RespuestaService } from '@app/_core/services/respuesta.service';

@Component({
  selector: 'app-encuestas-extranet',
  templateUrl: './encuestas-extranet.component.html',
  styleUrls: ['./encuestas-extranet.component.css']
})
export class EncuestasExtranetComponent implements OnInit {

  constructor(
    private i18n: NzI18nService,
    private fb: FormBuilder,
    private notification: NzNotificationService,
    private router: Router,
    private activeRouter: ActivatedRoute, 
    private encuesta_s:EncuestasService,
    private sis_enumerado_s:SisEnumeradoService,
    private spinner: NgxSpinnerService,
    private modal: NzModalService,
    private respuesta_s:RespuestaService,
    private cd: ChangeDetectorRef,
  ) {
    this.i18n.setLocale(es_ES);
  }
  _ESTADO_ENCUESTA_ENUMERADO=ESTADO_ENCUESTA_ENUMERADO;
  formMACRO= {
    Titulo: new FormControl(null),
    Estado: new FormControl(null),
    FechaInicio: new FormControl(null),
    FechaFin: new FormControl(null),
  };
  show_super_edit=false;
  async ngOnInit() {
    let show_super_edit = Number(localStorage.getItem("show_SuperEdit"));
    this.show_super_edit=show_super_edit==1?true:false;
    this.getEstadoEncuestas();
    this.get_list();
    await this.respuesta_s._GetDesplegableInstitucional(1).then((datos) => {
      this.array_dependencias=datos.data;
    }).catch(() => {this.array_dependencias=[]}); 
    await this.respuesta_s._GetDesplegableInstitucional(2).then((datos) => {
      this.array_regimen=datos.data;
    }).catch(() => {this.array_regimen=[]}); 
  }

  form:EncuestaRequestList={
    titulo:null,
    estado:null,
    id_dependencia:-1,
    fecha_inicio:null,
    fecha_fin:null
  }
  selected_tipe='';
  array_estado=[];
  getEstadoEncuestas(){
    this.sis_enumerado_s.GetEnumeradoByTipoEnumerado(SIS_TIPO_ENUMERADO.estado_encuesta).then(datos => {
      this.array_estado =datos.data.filter(x=>x.es_eliminado==false);
    }).catch(err => {});
  }

  EncuestaList=[];
  EncuestaAvanceList=[];
  cargando_tabla=true;
  pageIndex: number = 1;
  total: number = 0;
  pageSize: number = 10;
  get_list=()=>{
    this.cargando_tabla = true;
    let filter = {
      titulo: this.formMACRO.Titulo.value,
      estado: this.formMACRO.Estado.value,
      id_dependencia:-1,
      fecha_inicio: this.formMACRO.FechaInicio.value,
      fecha_fin: this.formMACRO.FechaFin.value,
      show_all:this.show_super_edit,
      id_tipo_encuesta: TIPO_ENCUESTA.extranet
    };
    this.spinner.show();
    this.encuesta_s._getEncuestaWithAdministradosList(filter, this.pageIndex, this.pageSize)
      .then((datos) => {
        this.spinner.hide();
        if (datos && datos.data && datos.data.Data) {
          let dt = datos.data.Data;
          let today = new Date();
          dt.forEach(e=>{
            let fin = new Date(e.fecha_fin);
            e.show_extra_options=(today>fin || e.id_estado == ESTADO_ENCUESTA_ENUMERADO.procesado?true:false);
          });
          this.EncuestaList = dt;
          this.total = datos.data.TotalRows;
        }
        this.cargando_tabla = false;
      })
      .catch(() => {
        this.cargando_tabla = false;
      });
  }
  get_list_avance=()=>{
    this.spinner.show();
    this.encuesta_s.GetListAvanceByIdEncuesta(this.selected_encuesta.id_encuesta)
      .then((datos) => {
        this.spinner.hide();
        if (datos && datos.data ) {
          this.EncuestaAvanceList = datos.data;
        }
        this.cargando_tabla = false;
      })
      .catch(() => {
        this.cargando_tabla = false;
      });
  }

  handleClickLimpiar = () => {
    this.form = {
      titulo:null,
      estado:null,
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

  clean_all=()=>{
    this.form={
      titulo:null,
      estado:null,
      fecha_inicio:null,
      fecha_fin:null
    };
    this.formMACRO= {
      Titulo: new FormControl(null),
      Estado: new FormControl(null),
      FechaInicio: new FormControl(null),
      FechaFin: new FormControl(null),
    };
    this.pageIndex = 1;
    this.get_list();
  }


  modal_subir_resultados=false;
  selected_encuesta:any=null;
  _show_resultados_upload(item){
    this.modal_subir_resultados=true;
    this.selected_encuesta=item;
    this.get_list();
  }
  handleOnCloseSaveModalResultados=(e=null)=>{
    this.selected_encuesta=null;
    this.modal_subir_resultados=false;
    this.get_list();
  }
  handleOnCloseModalResultados(e){
    this.selected_encuesta=null;
    this.modal_subir_resultados=false;
  }
  modal_avance_resultados=false;
  _show_resultados_avance(item){
    this.modal_avance_resultados=true;
    this.selected_encuesta=item;
    this.get_list_avance();
  }
  handleOnCloseModalAvance(e){
    this.selected_encuesta=null;
    this.modal_avance_resultados=false;
  }
  blobType: string = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  columnas_array = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    'AA','AB','AC','AD','AE','AF','AG','AH','AI','AJ','AK','AL','AM','AN','AO','AP','AQ','AR','AS','AT','AU','AV','AW','AX','AY','AZ',
    'BA','BB','BC','BD','BE','BF','BG','BH','BI','BJ','BK','BL','BM','BN','BO','BP','BQ','BR','BS','BT','BU','BV','BW','BX','BY','BZ',
    'CA','CB','CC','CD','CE','CF','CG','CH','CI','CJ','CK','CL','CM','CN','CO','CP','CQ','CR','CS','CT','CU','CV','CW','CX','CY','CZ',
    'DA','DB','DC','DD','DE','DF','DG','DH','DI','DJ','DK','DL','DM','DN','DO','DP','DQ','DR','DS','DT','DU','DV','DW','DX','DY','DZ',
    'EA','EB','EC','ED','EE','EF','EG','EH','EI','EJ','EK','EL','EM','EN','EO','EP','EQ','ER','ES','ET','EU','EV','EW','EX','EY','EZ',
    'FA','FB','FC','FD','FE','FF','FG','FH','FI','FJ','FK','FL','FM','FN','FO','FP','FQ','FR','FS','FT','FU','FV','FW','FX','FY','FZ',
    'GA','GB','GC','GD','GE','GF','GG','GH','GI','GJ','GK','GL','GM','GN','GO','GP','GQ','GR','GS','GT','GU','GV','GW','GX','GY','GZ',
    'HA','HB','HC','HD','HE','HF','HG','HH','HI','HJ','HK','HL','HM','HN','HO','HP','HQ','HR','HS','HT','HU','HV','HW','HX','HY','HZ',
    'IA','IB','IC','ID','IE','IF','IG','IH','II','IJ','IK','IL','IM','IN','IO','IP','IQ','IR','IS','IT','IU','IV','IW','IX','IY','IZ'
  ];
  array_dependencias=[];array_regimen=[];;
  total_pages_descarga=0;
  descargar_data_encuesta=async (_id_encuesta:number)=>{
    this.spinner.show();
    await this.encuesta_s.GetReporteEncuestadoPreguntaRespuesta(_id_encuesta)
    .then((datos) => {
      this.spinner.hide();
      var binaryString = window.atob(datos.Value);
      var binaryLen = binaryString.length;
      var bytes = new Uint8Array(binaryLen);
      for (var i = 0; i < binaryLen; i++) {
        var ascii = binaryString.charCodeAt(i);
        bytes[i] = ascii;
      }
      var blob = new Blob([bytes], {type: "application/vnd.openxmlformats"});
      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = "Reporte_encuestados.xlsx";
      link.click();
    
    }).catch(() => {}); 

    // this.spinner.show();
    // let _thin_border ={
    //   top: {style:'thin'},
    //   left: {style:'thin'},
    //   bottom: {style:'thin'},
    //   right: {style:'thin'}
    // };
    // const workbook = new Excel.Workbook();
    // workbook.creator = 'Web';
    // workbook.lastModifiedBy = 'Web';
    // workbook.created = new Date();
    // workbook.modified = new Date();
    // workbook.addWorksheet('Reporte', { views: [{ ySplit: 0, xSplit: 20, activeCell: 'A1', showGridLines: true }] });
    // var sheet = workbook.getWorksheet(1);
    // let _preguntas = [];
    // let construir_header=true;
    // let pageSize=20,count=1;
    // let cols=[
    //   { key: 'NRO', width: 12 },
    //   { key: 'RUC/DNI', width: 20 },
    //   { key: 'RAZÓN SOCIAL', width: 20 },
    //   { key: 'RAZÓN SOCIAL', width: 20 },
    //   { key: 'RAZÓN SOCIAL', width: 20 },
    //   { key: 'RAZÓN SOCIAL', width: 20 },
    //   { key: 'RAZÓN SOCIAL', width: 20 },
    // ];
    // sheet.getCell('A1').value = "NRO";
    // sheet.getCell('B1').value = "RUC/DNI";
    // sheet.getCell('C1').value = "RAZÓN SOCIAL";
    // sheet.getCell('D1').value = "RAZÓN SOCIAL";
    // sheet.getCell('E1').value = "RAZÓN SOCIAL";
    // sheet.getCell('F1').value = "RAZÓN SOCIAL";
    // sheet.getCell('G1').value = "RAZÓN SOCIAL";

    // let _keycols=['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1'];
    // let _header_cols_only=['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    // await this.encuesta_s._getRespuestasByEncuestaExtranet({id_encuesta: _id_encuesta}, 1, pageSize)
    // .then((datos) => {
    //   this.total_pages_descarga=datos && datos.data && datos.data.Data?datos.data.TotalRows:0;
    
    // }).catch(() => {this.total_pages_descarga=0;}); 
    // let begin_fila = 2;
    // let _fila=1;
    // for (let page_index = 1; page_index <= this.total_pages_descarga; page_index++) {
    //   await this.encuesta_s._getRespuestasByEncuestaExtranet({id_encuesta: _id_encuesta}, page_index, pageSize)
    //   .then((datos) => {
    //     if (datos && datos.data && datos.data.Data) {
    //       let dt = datos.data.Data;
    //       if(construir_header){
    //         dt[0].Preguntas.forEach((e,_idx)=>{
    //           if(_idx>0){
    //             _preguntas.push({id_pregunta:e.id_pregunta,pregunta:e.pregunta});
    //             cols.push({ key: e.pregunta, width:15 });
    //             let col = this.columnas_array[6+_idx];
    //             sheet.getCell(col+"1").value = e.pregunta;
    //             _keycols.push(col+"1");
    //             _header_cols_only.push(col);
    //           }
    //         });

    //         sheet.columns = cols;
    //         _keycols.map(key => {
    //           sheet.getCell(key).border =_thin_border;
    //           sheet.getCell(key).fill = {
    //             type: 'pattern',
    //             pattern: 'solid',
    //             fgColor: { argb: 'dc3545' }
    //           };
    //           sheet.getCell(key).font = {color: {argb: "ffffff"}, bold: false};
    //         });
    //       }
    //       for (let i = 0; i < dt.length; i++) {
    //         const item = dt[i];
    //         let conteo_maximo_respuestas = 0;
    //         let fila=String(begin_fila);
    //         sheet.getCell('A'+fila).value = (i+1);

    //         // let p1=item.Preguntas[0].json_respuestas?JSON.parse(item.Preguntas[0].json_respuestas).respuesta:null;
    //         // if(p1){
    //         //   let d1=this.array_dependencias.find(f=>f.id==p1.d1);
    //         //   let d2=this.array_dependencias.find(f=>f.id==p1.d2);

    //         //   sheet.getCell('B'+String(begin_fila)).value = d1?d1.nombre:null;
    //         //   sheet.getCell('C'+String(begin_fila)).value = d2?d2.nombre:null;
    //         // }
    //         sheet.getCell('F'+String(begin_fila)).value = item.numero_documento;
    //         sheet.getCell('G'+String(begin_fila)).value = item.razon_social;
    //         for (let j = 0; j < _preguntas.length; j++) {
    //           let _item_pregunta = item.Preguntas.find(f=>f.id_pregunta==_preguntas[j].id_pregunta);
    //           let respuesta_pregunta=_item_pregunta.json_respuestas?JSON.parse(_item_pregunta.json_respuestas):null;
    //           let col = this.columnas_array[7+j];
    //           let str_respuesta='',conteo=0;
    //           if(respuesta_pregunta){
    //             // if(respuesta_pregunta.id_tipo==TIPO_PREGUNTA.desplegable_institucional){
    //             //   if(respuesta_pregunta.tbl_data==1){
    //             //     let _rpta=respuesta_pregunta.respuesta;
    //             //     let d1=this.array_dependencias.find(f=>f.id==_rpta.d1);
    //             //     let d2=this.array_dependencias.find(f=>f.id==_rpta.d2);
    
    //             //     sheet.getCell(col+String(begin_fila)).value =   'RUC/DNI: '+d1?d1.nombre:'';
    //             //     sheet.getCell(col+String(begin_fila+1)).value = 'RAZÓN SOCIAL: '+d2?d2.nombre:'';
    //             //     conteo=2;
    //             //   }else{
    //             //     let _regimen = this.array_regimen.find(f=>f.id==respuesta_pregunta.respuesta);
    //             //     //str_respuesta = _regimen?_regimen.nombre:null;
    //             //     sheet.getCell(col+String(begin_fila)).value =   _regimen?_regimen.nombre:null;
    //             //     conteo=1
    //             //   }
    //             // }
    //             if(respuesta_pregunta.id_tipo==TIPO_PREGUNTA.seleccion_multiple
    //               || respuesta_pregunta.id_tipo==TIPO_PREGUNTA.seleccion_unica){
    //               let filter = respuesta_pregunta.respuesta.filter(x=>x.selected==true);
    //               filter.forEach((x,ind)=>{
    //                 sheet.getCell(col+String(begin_fila+ind)).value = x.descripcion;
    //               });
    //               conteo=filter.length;
    //             }else if(respuesta_pregunta.id_tipo==TIPO_PREGUNTA.desplegable_libre){
    //               let filter = respuesta_pregunta.respuesta;
    //               let opciones = respuesta_pregunta.opciones;
    //               filter.forEach((x,ind)=>{
    //                 sheet.getCell(col+String(begin_fila+ind)).value = opciones[x].descripcion;
    //               });
    //               conteo=filter.length;
    //             }
    //             else if(respuesta_pregunta.id_tipo==TIPO_PREGUNTA.numerico_decimal 
    //               ||respuesta_pregunta.id_tipo==TIPO_PREGUNTA.numerico_entero){
    //                 sheet.getCell(col+String(begin_fila)).value = respuesta_pregunta.respuesta;
    //                 conteo=1;
    //             }
    //             else if(respuesta_pregunta.id_tipo==TIPO_PREGUNTA.fecha){
                  
    //                 sheet.getCell(col+String(begin_fila)).value = respuesta_pregunta.respuesta;
    //                 conteo=1;
    //             }
    //             else if(respuesta_pregunta.id_tipo==TIPO_PREGUNTA.texto){
                  
    //                 sheet.getCell(col+String(begin_fila)).value = respuesta_pregunta.respuesta;
    //                 conteo=1;
    //             }
    //             else if(respuesta_pregunta.id_tipo==TIPO_PREGUNTA.mensaje){
                  
    //                 sheet.getCell(col+String(begin_fila)).value = respuesta_pregunta.respuesta;
    //                 conteo=1;
    //             }
    //             else{//para matrices
                  
    //               sheet.getCell(col+String(begin_fila)).value = "MATRIZ";
    //               conteo=1;
    //               // let _count=0;
    //               // respuesta_pregunta.respuesta.forEach(__fila=>{
    //               //   sheet.getCell(col+String(begin_fila+_count)).value = __fila.nombre_fila;
    //               //   sheet.getCell(col+String(begin_fila+_count)).fill = {
    //               //     type: 'pattern',
    //               //     pattern: 'solid',
    //               //     fgColor: { argb: 'd9b0b3' }
    //               //   };
    //               //   conteo++;
    //               //   _count++;
    //               //   __fila.respuestas.forEach((_rpt,col_idx)=>{
    //               //     let _str_rpta="";
    //               //     let __col=__fila.columnas[col_idx];
    //               //     let forma = __col.forma;
    //               //     // if(forma.id_tipo==TIPO_PREGUNTA.desplegable_institucional){
    //               //     //   if(forma.tbl_data==1){
    //               //     //     let _dep=this.array_dependencias.find(f=>f.id==_rpt);
    //               //     //     _str_rpta=_dep?_dep.nombre:null;
    //               //     //   }else{
    //               //     //     let _reg=this.array_regimen.find(f=>f.id==_rpt);
    //               //     //     _str_rpta=_reg?_reg.nombre:null;
    //               //     //   }
    //               //     // }
    //               //     if(forma.id_tipo==TIPO_PREGUNTA.numerico_entero 
    //               //       || forma.id_tipo==TIPO_PREGUNTA.numerico_decimal
    //               //       || forma.id_tipo==TIPO_PREGUNTA.seleccion_unica){
    //               //       _str_rpta=_rpt;
    //               //     }else{//alternativas unicas, libres y multiples
    //               //       let _filter = _rpt;//.filter(x=>x.selected==true);
    //               //       _filter.forEach((x,ind)=>{
    //               //         _str_rpta+= (ind>0?" | ":"") + x;//.descripcion;
    //               //       });
    //               //     }
    //               //     sheet.getCell(col+String(begin_fila+_count)).value = __col.nombre_columna+": "+ _str_rpta;
    //               //     conteo++;
    //               //     _count++;
    //               //   });
    //               // })
    //               // str_respuesta =JSON.stringify(respuesta_pregunta.respuesta);
    //             }
    //           }   
    //           conteo_maximo_respuestas=conteo>conteo_maximo_respuestas?conteo:conteo_maximo_respuestas;
    //         }
    //         let ini_merge=begin_fila;
    //         let end_merge=begin_fila+conteo_maximo_respuestas-1;
    //         ['A', 'B', 'C', 'D', 'E','F','G'].forEach(__col=>{
    //           sheet.mergeCells(__col+String(ini_merge)+':'+__col+String(end_merge));
    //           sheet.getCell(__col+String(ini_merge)+':'+__col+String(end_merge)).alignment = { vertical: 'middle', horizontal: 'center' };
    //         });
    //         _header_cols_only.forEach(__col=>{
    //           for (let _row = ini_merge; _row <= end_merge; _row++) {
    //             sheet.getCell(__col+String(_row)).border = _thin_border;
    //           }
    //         });
    //         begin_fila+=conteo_maximo_respuestas;
    //         count++;
    //       }
    //     }
    //     construir_header=false;
    //   });  
    // }
    // workbook.xlsx.writeBuffer().then(dataReporte => {
    //   const blob = new Blob([dataReporte], { type: this.blobType });
    //   FileSaver.saveAs(blob, "Reporte.xlsx");
    //   this.spinner.hide();
    // });
  }

  show_save_update=false;
  _delete_encuesta=(id_encuesta,title)=>{
    this.modal.confirm({
      nzTitle: 'Eliminar',
      nzContent: '¿Esta seguro de eliminar la encuesta seleccionada?<br>'+
                  '<strong>Titulo: </strong>'+title,
      nzOkText: 'Si',
      nzOkType: 'primary',
      nzCancelText: 'No',
      nzOnOk: () => {
        this.encuesta_s._EnableDisable(id_encuesta,"encuesta")
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

  _prepublicar_encuesta=(id_encuesta,title)=>{
    this.modal.confirm({
      nzTitle: 'Regresar a elaboración',
      nzContent: '<p>Retroceder una encuesta publicada implica eliminar todas las respuestas existentes.</p>'+
                 '<p>¿Esta seguro de continuar?</p>',
      nzOkText: 'Si',
      nzOkType: 'primary',
      nzCancelText: 'No',
      nzOnOk: () => {
        this.encuesta_s._Prepublicar(id_encuesta)
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
  descargar_resultado_encuesta=async (_id_encuesta:number)=>{
    this.spinner.show();
    await this.encuesta_s.GetReporteResultados(_id_encuesta)
    .then((datos) => {      
      this.spinner.hide();
      var binaryString = window.atob(datos.Value);
      var binaryLen = binaryString.length;
      var bytes = new Uint8Array(binaryLen);
      for (var i = 0; i < binaryLen; i++) {
        var ascii = binaryString.charCodeAt(i);
        bytes[i] = ascii;
      }
      var blob = new Blob([bytes], {type: "application/vnd.openxmlformats"});
      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = "Reporte_resultados.xlsx";
      link.click();
    }).catch(() => {}); 
  }
}
