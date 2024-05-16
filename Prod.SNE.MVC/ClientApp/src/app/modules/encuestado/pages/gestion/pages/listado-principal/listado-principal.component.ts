import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AlertService, AuthService, 
  EncuestaAgradecimientoData, 
  EncuestaBienvenidaData, 
  EncuestaData, 
  EncuestaMainData, 
  EncuestasService, ESTADO_COMPLETADO, FileService, SisEnumeradoService,TIPO_ENCUESTA } from "@app/_core";
import { FormBuilder } from '@angular/forms';
import { es_ES } from 'ng-zorro-antd/i18n';
import { NzCarouselComponent, NzI18nService, NzNotificationService } from 'ng-zorro-antd';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-listado-principal',
  templateUrl: './listado-principal.component.html',
  styleUrls: ['./listado-principal.component.css']
})
export class ListadoPrincipalComponent implements OnInit {
  _ESTADO_COMPLETADO=ESTADO_COMPLETADO;
  constructor(
    private _fileService: FileService,
    private _authService: AuthService,
    private i18n: NzI18nService,
    private fb: FormBuilder,
    private notification: NzNotificationService,
    private router: Router,
    private activeRouter: ActivatedRoute, 
    private readonly _alertService: AlertService,
    private encuesta_s:EncuestasService,
    private sis_enumerado_s:SisEnumeradoService,
    private spinner: NgxSpinnerService,
    private sanitizer: DomSanitizer,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.getEncuestasListByUser();
    this.check_index_carrusel();
  }
  today = new Date();
  array=[1,2,3,4,5];
  array_paged_front=[];
  array_hover_control:any={};
  total_pages=0;
  getEncuestasListByUser(){
    localStorage.setItem("is_filling", "false");
    let filtro = { dni_user:'',id_dependencia:0, today: new Date(), id_tipo_encuesta: TIPO_ENCUESTA.intranet };
    this.spinner.show();
    this.encuesta_s._GetEncuestasListByUser(filtro)
      .then(async (datos) => {
        let array_data = datos.data.filter(f=>f.resuelto!=true);
        array_data.forEach(x=>{
          let prs=(x.conteo_resuelto?(100*(x.conteo_resuelto/x.total_preguntas)):0);
          x.porcentaje_avance=String(prs>100?100:prs);
          x.id_encuesta_str=String(x.id_encuesta);
          x.fecha_fin_date = new Date(x.fecha_fin);
          this.array_hover_control[String(x.id_encuesta)]=false;
        });
        
        let new_front=[];
        let idx=0,_arr=[],page=1;
        for (let i = 0; i < array_data.length; i++) {
          let e=array_data[i];
          e.is_mouse_hover=false;///ogligatorio, no remover, es un auxiliar para el mouseover
          e.loaded=false;///ogligatorio, no remover, es un auxiliar para el mouseover
          let b64 = null;
          if(e.iden_imagen_presentacion != null){
            b64=await this.onGetSavedFileByCodeWithReturn(e.iden_imagen_presentacion);
          }
          e.b64_img_presentacion= b64;
          e.has_imagen=b64?true:false;
          e.loaded=true;
          _arr.push(e);
          idx+=1;
          if(idx==3){
            new_front.push({
              page: page,
              data: _arr
            });
            idx=0;_arr=[];page++;
          }else{
            if(i==array_data.length-1){
              if(_arr.length>0){
                new_front.push({
                  page: page,
                  data: _arr
                });
              }
            }
          }          
        }
        this.total_pages=new_front.length;
        this.array_paged_front=new_front;
        this.spinner.hide();
        this.cd.markForCheck();
        this.cd.detectChanges();
      })
      .catch(() => {  this.spinner.hide();});
  }
  index_carrusel = 0;
  @ViewChild(NzCarouselComponent, { static: false }) myCarousel: NzCarouselComponent;
  prev() {
    this.myCarousel.pre();
    //this.myCarousel.goTo(Number(this.index_carrusel));
  }
  next() {
    this.myCarousel.next();
  }
  check_index_carrusel=()=>{
    let actual =this.myCarousel?this.myCarousel.activeIndex:0;
    setTimeout(()=>{
      this.index_carrusel=actual
      this.cd.markForCheck();
      this.cd.detectChanges();
      this.check_index_carrusel();
    },150);
  }

  contentType: string = "";
  urlArchivo: SafeResourceUrl[]=[];
  b64_audio=null;
  onGetSavedFileByCode = async (codigo: string) =>{
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
                    this.contentType = resp.Data[0].contentType;
                    let contentType = this.contentType;
                    //var blob = new Blob([view], { type: contentType });
                    var urlArchivo = 'data:'+contentType+';base64,'+resp.Data[0].content;
                    //this.urlArchivo[index]= this.sanitizer.bypassSecurityTrustResourceUrl(urlArchivo);
                }else{
                  this._alertService.open("error",resp.Data[0].mensajeError);
                }
            }else{
              this._alertService.open("error", "Sin datos para cargar");
            }  
        }
        if(!resp.Success) this._alertService.open("error", resp.Messages[0]);
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
          this.contentType = resp.Data[0].contentType;
          let contentType = this.contentType;
          //var blob = new Blob([view], { type: contentType });
          ur_file = 'data:'+contentType+';base64,'+resp.Data[0].content;  
          has_file=true;
        }
    });
    return ur_file;
    //return has_file?this.sanitizer.bypassSecurityTrustResourceUrl(ur_file):null;
  }
  /*
  this.sanitizer.bypassSecurityTrustResourceUrl(urlArchivo);
  */
  //


  show_actual_list=true;
  verItemParaLLenado=false;
  selected_item=null;
  @Output() onIniciarLLenado: EventEmitter<boolean> = new EventEmitter();  
  encuesta_data:EncuestaData={};
  encuesta_main_data:EncuestaMainData;
  encuesta_welcome_data:EncuestaBienvenidaData;
  encuesta_agradecimiento_data:EncuestaAgradecimientoData;
  indicaciones:string;
  verParaLLenado(item){
    this.spinner.show();
   
    this.encuesta_s._getEncuestaDataByID(item.id_encuesta).then(datos => {
      this.encuesta_data = datos.data;
      this.encuesta_main_data=this.encuesta_data.encuesta;
      this.encuesta_welcome_data=this.encuesta_data.bienvenida;
      this.indicaciones=this.encuesta_data.bienvenida.indicaciones?this.encuesta_data.bienvenida.indicaciones:'';
      this.encuesta_agradecimiento_data=this.encuesta_data.agradecimiento;
      this.selected_item=item;
      this.onIniciarLLenado.emit(true);
      this.verItemParaLLenado=true;
      this.spinner.hide();
      this.show_actual_list=false;
      this.cd.detectChanges();
      this.cd.markForCheck();
    }).catch(err => {});
  }
  handleGoInicio(e){
    this.verItemParaLLenado=false;
    this.show_actual_list=true;
    this.onIniciarLLenado.emit(false);
    this.getEncuestasListByUser();
  }

  @Output() onIniciarListado: EventEmitter<boolean> = new EventEmitter();
  verListadoTodos=false;
  goListadoTodosEncuestas=()=>{
    this.show_actual_list=false;
    this.verListadoTodos=true;
    this.onIniciarListado.emit(true);
  }
  handleGoListadoPrincipal=(e=null)=>{
    this.show_actual_list=true;
    //this.getEncuestasListByUser();
    this.verListadoTodos=false;
    this.onIniciarListado.emit(false);
  }
}
