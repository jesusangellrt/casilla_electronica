import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {  ConfiguracionInicialService,  SisEnumeradoService, SIS_TIPO_ENUMERADO, 
  ESTADO_ENCUESTA_ENUMERADO, 
  EncuestasService,
  EncuestaRequestList,
  TIPO_PREGUNTA,
  CategoriaService,
  CATEGORIA} from "@app/_core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { es_ES } from 'ng-zorro-antd/i18n';
import { NzI18nService, NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import * as Excel from 'exceljs/dist/exceljs';
import * as FileSaver from 'file-saver';
import { RespuestaService } from '@app/_core/services/respuesta.service';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

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
    private categoria_s: CategoriaService,
    private cd: ChangeDetectorRef,
  ) {
    this.i18n.setLocale(es_ES);
  }
  array_estado=[
    {valor: "0", nombre:'Activo'},
    {valor: "1", nombre:'Eliminado'}
  ]
  ngOnInit() {
    this.get_list();
  }


  CategoriasList=[];
  cargando_tabla=true;
  pageIndex: number = 1;
  total: number = 0;
  pageSize: number = 10;
  form={
    id_categoria:0,
    nombre:null,
    es_eliminado:null,
  };
  get_list=()=>{
    this.cargando_tabla = true;
    let filter = {...this.form};
    this.spinner.show();
    this.categoria_s._GetCategoriasMntList(filter, this.pageIndex, this.pageSize)
      .then((datos) => {
        this.spinner.hide();
        if (datos && datos.data && datos.data.Data) {
          let dt = datos.data.Data;
          this.CategoriasList = dt;
          this.total = datos.data.TotalRows;
        }
        this.cargando_tabla = false;
      })
      .catch(() => {
        this.cargando_tabla = false;
      });
  }


  handleClickLimpiar = () => {
    this.form = {
      nombre:null,
      id_categoria:0,
      es_eliminado:null
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
    this.form = {
      nombre:null,
      id_categoria:0,
      es_eliminado:null
    };
    this.pageIndex = 1;
    this.get_list();
  }



  isVisibleModal=false;
  selected_categoria:CATEGORIA;
  allow_edit:boolean=true;
  title_modal:string='';
  show_save_edit=(itemCategoria:CATEGORIA, allow_edits=true)=>{
    if(itemCategoria){
      this.selected_categoria=itemCategoria;
      this.title_modal="Editar";
    }else{
      this.selected_categoria={
        id_categoria:0,
        nombre:null,
        es_eliminado:false,
        array_sub_categorias:[]
      };
      this.title_modal="Registrar";
    }
    this.allow_edit=allow_edits
    this.isVisibleModal=true;
  }

  handleOnCloseModal=(event)=>{
    this.isVisibleModal=false;
    if(event){
      this.get_list();
    }
  }
  _enable_disable=(id_categoria, future_status)=> {
    this.modal.confirm({
      nzTitle: future_status?'Anular':'Activar',
      nzContent: 'Esta seguro de '+(future_status?'anular':'activar')+' la categoria seleccionada',
      nzOkText: 'Si',
      nzOkType: 'primary',
      nzCancelText: 'No',
      nzOnOk: () => {
        this.categoria_s._EnableDisableCategoria(id_categoria,future_status)
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
}
