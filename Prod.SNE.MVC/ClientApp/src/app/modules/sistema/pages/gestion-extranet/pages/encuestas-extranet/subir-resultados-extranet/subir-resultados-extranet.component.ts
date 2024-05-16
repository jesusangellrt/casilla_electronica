import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AlertService, AuthService, ComunService, EncuestasService, FileService, FILE_SETTINGS } from '@app/_core';
import { NzNotificationService } from 'ng-zorro-antd';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-subir-resultados-extranet',
  templateUrl: './subir-resultados-extranet.component.html',
  styleUrls: ['./subir-resultados-extranet.component.css']
})
export class SubirResultadosExtranetComponent implements OnInit {
  @Input() visible:boolean=false;
  @Input() selected_encuesta:any={};
  @Output() onCloseModalResultados: EventEmitter<boolean> = new EventEmitter();
  @Output() onCloseSaveModalResultados: EventEmitter<boolean> = new EventEmitter();
  
  formMACRO:FormGroup;
  constructor(
    private notification: NzNotificationService,
    private encuesta_s:EncuestasService,
    private spinner: NgxSpinnerService,
    private comun_s:ComunService,
    private _fileService: FileService,
    private _authService: AuthService,
    private sanitizer: DomSanitizer,
    private ref_change: ChangeDetectorRef,
    private readonly _alertService: AlertService,
  ) { 
    this._fileService.rutaBase = this._authService.GetConfig().Urls.URL_GA_UI;
  }

  frm={
    iden_completo:null,
    iden_encuestado:null,
    nro_informe:null,
  }
  error_nro_informe=false;
  ngOnInit() {
    let selected = this.selected_encuesta;
    this.frm.iden_completo=selected.iden_pdf_resultados_completo;
    this.frm.iden_encuestado=selected.iden_pdf_resultados;
    this.frm.nro_informe=selected.nro_informe;
  }
  valid_nro_informe=false;
  datos_sitradoc=null;
  search_nro_SITRADOC(){
    this.spinner.show();
    let content=this.frm.nro_informe;
    this.encuesta_s.GetDocumentoDataSITRADOC(content).then(async datos => {
      if(datos.data.Data){
        this.valid_nro_informe=true;
        this.error_nro_informe=false;
        let data_sitradoc_indicativo=datos.data.Data;
        if(data_sitradoc_indicativo.cod_archivo){
          //data_sitradoc_interno
          let doc = data_sitradoc_indicativo.cod_archivo;
          await this.onGetSavedFileByCode(doc,content);
          this.datos_sitradoc=data_sitradoc_indicativo;
        }else{
          this.createNotification('warning', 'Advertencia','El informe '+content+' exíste en SITRADOC, pero no cuenta con ningún archivo asociado.');
          this.valid_nro_informe=false;
          this._loaded_pdf_informe_sitradoc=false;
          this.error_nro_informe=true;
          this.disabled_view_btn=true;
        }
      }else{
        this._loaded_pdf_informe_sitradoc=false;
        let str='<ul>';
        str+='<li>No se encontraron resultados para los datos ingresado</li>';
        str+='</ul>';
        this.createNotification('warning', 'Advertencia',str);
        this.valid_nro_informe=false;
        this.error_nro_informe=true;
        this.disabled_view_btn=true;
      }
      this.spinner.hide();
      this.ref_change.detectChanges();
      this.ref_change.markForCheck();
    }).catch(err => {this.spinner.hide();});
  }

  show_modal_pdf=false;
  see_documento(){
    this.show_modal_pdf=true;
  }

  close_modal_pdf(){
    this.show_modal_pdf=false;
  }

  _loaded_pdf_informe_sitradoc:boolean=false;
  _urlArchivo_sitradoc: SafeResourceUrl;
  onGetSavedFileByCode = async (codigo: string, nro_informe=null) =>{
    this._fileService.getFilesById(codigo).then(resp => {
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
                    this._loaded_pdf_informe_sitradoc=true;
                    this._urlArchivo_sitradoc=this.sanitizer.bypassSecurityTrustResourceUrl(urlArchivo); 
                    this.createNotification('success', 'Éxito','Informe cargado con éxito desde SITRADOC.');
                    this.disabled_view_btn=false;
                }else{
                  this.createNotification('warning', 'Error de archivo',"El informe "+nro_informe+" existe en SITRADOC, pero el archivo no pudo ser cargado.");
                  //this._alertService.open("error",resp.Data[0].mensajeError,'Error de imagen');
                  this._loaded_pdf_informe_sitradoc=false;
                  this.disabled_view_btn=true;
                }
            }else{
              this.createNotification('error', 'Error de archivo',"Sin datos para cargar");
              this._loaded_pdf_informe_sitradoc=false;
              this.disabled_view_btn=true;
            }     
        }
        if(!resp.Success){
          this.createNotification('error', 'Error de archivo',resp.Messages[0]);
          this._loaded_pdf_informe_sitradoc=false;
          this.disabled_view_btn=true;
        } 
    });
  }
  
  clean_nro(){
    this.frm.nro_informe=null;
    this.error_nro_informe=false;
    this.valid_nro_informe=false;
  } 
  disabled_view_btn=true;
  save_and_close(){
    let allow=true;
    if(this.frm.iden_completo==null){this.error_completo=true;}
    if(this.frm.iden_encuestado==null){this.error_encuestado=true;}
    if(this.frm.nro_informe==null || !this.valid_nro_informe){this.error_nro_informe=true;}
    if(allow && this.valid_nro_informe){
      this.spinner.show();
      let _frm = {...this.frm};
      this.encuesta_s._UpdateInformeEncuestas(this.selected_encuesta.id_encuesta,_frm.nro_informe,_frm.iden_encuestado,_frm.iden_completo).then(datos => {
        this.createNotification('success', 'Éxito','Se ha registrado con éxito');
        this.valid_nro_informe=true;
        this.onCloseSaveModalResultados.emit(true);
        this.spinner.hide();
        this.ref_change.detectChanges();
        this.ref_change.markForCheck();
      }).catch(err => {this.spinner.hide();});
      
    }else{
        this.createNotification('warning', 'Advertencia','Debe ingresar los campos obligatorios');
    }
  }

  estaGuardando: boolean = false;
  tiposMimePermitidos = ["application/pdf"];
  imagen_MimePermitidos=["application/pdf"];
  imagen_extensionAceptados= [".pdf"];
  pesoMaximoEnMB = FILE_SETTINGS.maxFileSize;
  url = "/api/comun/descargar-archivo";
  _imagen_archivo: Array<any>;
  _video_archivo: Array<any>;
  archivo: Array<any>;
  validar_fup: boolean = false;

  error_completo=false;
  error_encuestado=false;
  set_imagen_iden=(data,tipo)=>{
    if(tipo==1){
      this.error_completo=false;
      this.frm.iden_completo=data.codigo;
    }else{
      this.error_encuestado=false;
      this.frm.iden_encuestado=data.codigo;
    }
    this.ref_change.detectChanges();
    this.ref_change.markForCheck();
  }
  handleRemovedFilePresentacion=(e,tipo)=>{
    if(tipo==1){
      this.frm.iden_completo=null;
      this.error_completo=false;
    }else{
      this.frm.iden_encuestado=null;
      this.error_encuestado=false;
    }
    this.ref_change.detectChanges();
    this.ref_change.markForCheck();
  }

  close_modal(){
    this.onCloseModalResultados.emit(true);
  }
  createNotification = (type: string, title: string, message: string): void => {
    this.notification.create(
      type,
      title,
      message
    );
  };
}
