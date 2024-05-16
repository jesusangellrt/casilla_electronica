import { Component, OnInit, Input, ViewChild, Output, EventEmitter, ElementRef, SimpleChanges,OnChanges } from "@angular/core";
import { FileUploader, FileItem } from "ng2-file-upload";
import { IFileUpload, encryptedData, ParseResponse } from "@app/_shared";
import { FileService, AuthService, AlertService, ComunService } from "../../services";
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ArchivoService } from "@app/_core/services/archivo.service";

@Component({
    selector: "app-audio-uploader-custom",
    template: `
    <form>
        <div class="input-group">
            <!-- mostrarCajaDeTexto == true -->
            <input nz-input class="form-control" [placeholder]="nombreSeleccionArchivo" aria-label="..." readonly="" value="{{nombreArchivo}}" *ngIf="mostrarCajaDeTexto">
            <!--<input type="text" readonly="readonly" style="position:absolute;left:0; width:1px; height:1px;">-->
            <div class="file-input-wrapper input-group-btn">
                <label>
                    <input type="file" #inputFile
                            accept="audio/mp3,.mp3,audio/mpeg3"
                            ng2FileSelect [uploader]="uploader" 
                            [disabled]="isUploaded || isDisabled" style='display:none;'/>
                    <!-- puedeCargarArchivo == true -->
                  <ng-container *ngIf="!isDisabled">
                    <a type="button" class="btn btn-primary-custom btn-file-input"
                       *ngIf="puedeCargarArchivo">
                      <i class="fa fa-paperclip" tooltip="Examinar archivo"></i>
                    </a>
                  </ng-container>
                </label>
                               
                <!-- puedeCargarArchivo == true -->
                <button type="button" class="btn btn-primary-custom btn-file-input"  
                        *ngIf="puedeCargarArchivo" [disabled]="!isAdd || isDisabled" (click)="onUploadFile()">
                    <i class="fa fa-upload"></i>
                </button>            
                <!-- puedeDescargarArchivo == true -->
                <button type="button" class="btn btn-primary-custom btn-file-input" (click)="onDownloadFileItem();" 
                        *ngIf="puedeDescargarArchivo" [disabled]="!isUploaded || isDisabled">
                    <i class="fa fa-download"></i>
                </button>
                
                <!-- puedeEliminarArchivo == true -->
                <button type="button" class="btn btn-primary-custom btn-file-input" 
                        *ngIf="puedeEliminarArchivo" (click)="onRemoveFileItem()" [disabled]="!isUploaded || isDisabled">
                    <i class="fa fa-trash"></i>
                </button>
                
                <!-- puedeVerHistorialArchivo == true -->
                <button data-rol="btnPopOver" type="button" role="button" data-placement="left" 
                        class="btn btn-primary-custom btn-file-input" *ngIf="puedeVerHistorialArchivo" [disabled]="isDisabled">
                    <i class="fa fa-history"></i>
                </button>
                
                <!-- puedeVerArchivo == true -->
                <button type="button" class="btn btn-primary-custom btn-file-input"  
                        *ngIf="puedeVerArchivo" [disabled]="!isUploaded" (click)="onVerFileModal();">
                    <i class="fa fa-volume-up"></i>
                </button>  

                <button type="button" class="btn bg-white" *ngIf="cargando">
                    <i nz-icon nzType="loading" nzTheme="outline"></i>
                </button>
            </div>
        </div>
        <span class="help-block" *ngIf="error">{{ error }}</span>
    </form>
    <nz-modal
        [(nzVisible)]="isVisibleModalVerArchivo"
        nzWidth="500" 
        nzHeight="400" 
        [nzMaskClosable]="false"
        (nzOnCancel)="handleCancelModal()"
        [nzFooter]="extraTemplate"
    >
      <div class="row">
        <div class="col-sm-12">       
          <ng-container>
            <br>
            <audio controls autoplay style="width:100%">
                <source [src]="urlArchivo">
            </audio>
          </ng-container>
        </div>
      </div>
        
        <ng-template #extraTemplate>
            <button type="button" class="btn btn-default-custom" (click)="handleCancelModal()"><i class="fa fa-ban" aria-hidden="true"></i> Cerrar</button>
        </ng-template>
    </nz-modal>`,
    styles:[
        `
        .help-block{
            margin-bottom: -10px !important;
            color: red;
        }
        .btn{
            vertical-align: unset;
        }
        .bg-white{
            background-color: white;
        }
        .image-wrap {
          max-width: 100%;
        }
        `
    ]
})
export class AudioUploaderCustomComponent implements OnInit,OnChanges {

    @ViewChild('inputFile', {static: false}) inputFile: ElementRef;
    @Input() fileInfo: boolean = false;
    @Input() esBorrador: any = false;
    @Input() url: any;
    @Input() pesoMaximoEnMB: any = 1;
    @Input() loading: boolean = false;  
    @Input() extensionAceptados?: any;
    @Input() tiposMimePermitidos?: any; 
    @Input() ParametFila?: any;     
    @Input() ParametColumna?: any;    
    @Input() Parametro?: any;
    @Input() id?: any;
    @Input() nombreSeleccion?: any;

    @Input() puedeDescargarArchivo: boolean  = true;
    @Input() puedeEliminarArchivo: boolean  = true;
    @Input() puedeCargarArchivo: boolean = true;
    @Input() puedeVerArchivo: boolean = false;
    @Input() variosFiles: boolean = false;
    @Input() isDisabled: boolean = false;

    @Output() FilesChange = new EventEmitter();
    @Output() FileChange = new EventEmitter();
    @Output() FilesChangeCustom = new EventEmitter();
    @Output() FilesRemoveCustom = new EventEmitter();
    @Output() onRemovedIdFile = new EventEmitter();
    @Input() set Files(Files: any) { this._value = Files; }
    _value?: Array<IFileUpload> = [];

    @Output() UploadingChange = new EventEmitter();
    @Input() set Uploading(Value: any) { this._uploading = Value; }
    _uploading: boolean;
    nombreSeleccionArchivo: string;
    error?: String;
    uploader: FileUploader;
    isAdd: any = false;
    codigo: any;
    nombreArchivo: string;
    isUploaded: any = false;
    pesoMaxEnMB = 26214400;
    mostrarCajaDeTexto: boolean = true;
    puedeVerHistorialArchivo: boolean  = false;    
    cargando: boolean  = false;   
    
    isVisibleModalVerArchivo: boolean = false;
    contentType: string = "";
    urlArchivo: SafeResourceUrl;
    constructor(
        private _fileService: FileService,
        private _authService: AuthService,
        private readonly _alertService: AlertService,
        private notification: NzNotificationService,
        private modalService: NzModalService,
        private _comunService: ComunService,
        private _archivoService:ArchivoService,
        private sanitizer: DomSanitizer
    ) {
        this._fileService.rutaBase = this._authService.GetConfig().Urls.URL_GA_UI;
    }    
    ngOnInit() {  

        if(this.nombreSeleccion == undefined){
            this.nombreSeleccionArchivo = "Seleccione un archivo";
        }
        else{
            this.nombreSeleccionArchivo = this.nombreSeleccion;
        }
        const { PesoMaximoMB, Extensiones } = this._authService.GetConfigFile();
        this.pesoMaximoEnMB = PesoMaximoMB;
        this._value = typeof this._value === "undefined" ? [] : this._value;

        this._fileService.idArchivo = this.id == null ? "" : this.id;                    
        this.uploader = new FileUploader({
            url: this.url,
            maxFileSize: PesoMaximoMB * 1024 * 1024,
            allowedMimeType: ["audio/mpeg","audio/mp3",".mp3","audio/mpeg3"],
            autoUpload: false
        });
        this.uploader.onSuccessItem = (item, response) => this.onSuccessFileItem(item, response);
        this.uploader.onWhenAddingFileFailed = (item, filter, options) => this.onWhenAddingFileFailed(item, filter, options);
        this.uploader.onAfterAddingFile = item => this.onAfterAddingFile(item);   
        this.uploader.onBeforeUploadItem = item => this.onBeforeUploadFile(item);
    
      
    }
    onLoadFileInfo = () => {
        var formData = new FormData();
        formData.append('id', this.id);
        formData.append('BuscarBorrador', this.esBorrador);
        this._fileService.GetFileInfo(formData).then(file => {  
            var data = file.Data;
            this.nombreArchivo = data.nombreOriginal;
            try {
                this._value = [
                    ...this._value,
                    {
                        nombre_archivo: data.nombreOriginal,
                        mimetype: data.contentType,
                        size: data.pesoEnBytes,
                        codigo: this.id,
                        tipo_archivo: `.${data.nombreOriginal
                            .split(".")
                            .pop()}`,
                        esborrador: false,
                        parametroColumna: this.ParametColumna,
                        parametroFila: this.ParametFila,
                        parametro: this.Parametro
                    }
                ];
                this.FilesChange.emit(this._value);
                this.FilesChangeCustom.emit(this);
                (this.isAdd = false), (this.isUploaded = true);
                if (this.variosFiles) this.onResetUploadFile(this.id);
                
                this.codigo = this.id;

            } catch (error) {
                this.UploadingChange.emit(false);
            } finally {
                this.inputFile.nativeElement.value = "";
                this.UploadingChange.emit(false);
            }
        });
    };
  ngOnChanges(changes: SimpleChanges) {        
        if(changes.id && changes.id.currentValue){
        if (this.id != null && this.fileInfo) this.onLoadFileInfo();
    } 
    /*    if(changes.id && changes.id.currentValue){
            var formData = new FormData();
            formData.append('id', changes.id.currentValue);
            formData.append('BuscarBorrador', this.esBorrador);            
            this._fileService.GetFileInfo(formData).then(resp => {                
                if (resp.Success)
                {   
                    this.nombreArchivo = resp.Data.nombreOriginal;
                    this.isUploaded = true;
                    this.codigo = changes.id.currentValue;
                }    
            });
        }*/     
      } 

    createNotification = (type: string, title: string, message: string): void => {
        this.notification.create(
            type,
            title,
            message
        );
    }

    onUploadFile = () => {
        try
        {       
            this.UploadingChange.emit(true);
            this.cargando = true;
            var item = this.uploader.queue[this.uploader.queue.length-1];
            var paramsRequestMerged = Object.assign(this._fileService.GetParamsRequest(), { 
                usuarioCreacion: { 
                    userName: this._authService.GetUser().Usuario.UserName 
                } ,
                id:""
            });
            paramsRequestMerged = Object.assign(paramsRequestMerged, this._fileService.paramsExtra);
            var mergedRequestData = JSON.stringify(Object.assign(paramsRequestMerged, { 
                metadata: { 
                    TipoArchivo: 0 
                } 
            }));
            if(item._file.size>this.pesoMaxEnMB){
                this.cargando = false;
                this.createNotification('error', 'Archivo cargado', 'Debe cargar un archivo con un tamaño máximo de 25 mb');
                formData.append('esBorrador', this.esBorrador);
            }
            else{
                var formData = new FormData();
                formData.append(item._file.name, item._file);
              
                formData.append('request', mergedRequestData);
                formData.append('maxfileMB', this.pesoMaximoEnMB);
                formData.append('esBorrador', this.esBorrador);
                this._fileService.UploadFile(formData).then(resp => {   
                    this.cargando = false;             
                    if (resp.Success)
                    {                   
                            this.onSuccessFileItem(item, resp.Data);
                            this.createNotification('success', 'Archivo cargado', 'Operación realizada con exito');
                        
                    }
                    if(!resp.Success)  this._alertService.open("error", resp.Messages[0]);
                    
                    
                    
                });
            }
          
        }
        catch(error)
        {
            
        }
        finally
        {            
            this.UploadingChange.emit(false);
        }
    };
    onSuccessFileItem = (item, response) => {
        try
        {         
         
            item.index = this.codigo = response.id;

            this._value = [
                ...this._value,
                {
                    nombre_archivo: response.nombreOriginal,
                    mimetype: response.contentType,
                    size: response.pesoEnBytes,
                    codigo: response.id,
                    tipo_archivo: `.${response.nombreOriginal.split('.').pop()}`,
                    esborrador: true,
                    parametroColumna: this.ParametColumna,
                    parametroFila: this.ParametFila,
                    parametro: this.Parametro
                }
            ];  

            
            this.FilesChange.emit(this._value);
            this.FileChange.emit({
                nombre_archivo: response.nombreOriginal,
                mimetype: response.contentType,
                size: response.pesoEnBytes,
                codigo: response.id,
                tipo_archivo: `.${response.nombreOriginal.split('.').pop()}`,
                esborrador: true,
                parametroColumna: this.ParametColumna,
                parametroFila: this.ParametFila,
                parametro: this.Parametro
            });
            this.FilesChangeCustom.emit(this);
            this.isAdd = false, this.isUploaded = true;            

            
            if(this.variosFiles) this.onResetUploadFile(response.id);
            


        }
        catch(error)
        {
            this.UploadingChange.emit(false);
        }
        finally
        {
            this.inputFile.nativeElement.value = "";
            this.UploadingChange.emit(false);
        }
        
    };
    onBeforeUploadFile = (file: any) => {};
    onVerFileModal = (codigo: any=undefined) =>{
        codigo = typeof codigo === "undefined" ? this.codigo : codigo;
         
        this._fileService.getFilesById(codigo).then(resp => {   
            this.cargando = false;             
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
                        var blob = new Blob([view], { type: contentType });
                        //var urlArchivo = URL.createObjectURL(blob);
                        var urlArchivo = 'data:'+contentType+';base64,'+resp.Data[0].content;
                        this.urlArchivo= this.sanitizer.bypassSecurityTrustResourceUrl(urlArchivo);  
                        this.isVisibleModalVerArchivo = true;
                        this.UploadingChange.emit(false);
                    }else{
                        this._alertService.open("error",resp.Data[0].mensajeError);
                    }
                }else{
                    this._alertService.open("error", "Sin datos para cargar");
                }  
                
            }
            if(!resp.Success)  this._alertService.open("error", resp.Messages[0]);
            
        });
        /*
        this._archivoService._verArchivo(codigo).then(datos => {
            if (datos){
                var binary = atob(datos.data.Data[0].content.replace(/\s/g, ''));
                var len = binary.length;
                var buffer = new ArrayBuffer(len);
                var view = new Uint8Array(buffer);
                for (var i = 0; i < len; i++) {
                    view[i] = binary.charCodeAt(i);
                }
                this.contentType = datos.data.Data[0].contentType;
                let contentType = this.contentType;
                var blob = new Blob([view], { type: contentType });
                //var urlArchivo = URL.createObjectURL(blob);
                var urlArchivo = 'data:'+contentType+';base64,'+datos.data.Data[0].content;
                this.urlArchivo= this.sanitizer.bypassSecurityTrustResourceUrl(urlArchivo);  
                this.isVisibleModalVerArchivo = true;
                this.UploadingChange.emit(false);
                }         
        }).catch(err => {this.contentType = 'error' ;});*/
    }
    handleCancelModal = () =>{
        this.isVisibleModalVerArchivo = false;
    }
    onRemoveFileItem = (codFile: any=undefined) => {
        codFile = typeof codFile === "undefined" ? this.codigo : codFile;
      /* this.uploader.queue.filter(item => {
            if( item.index == codFile) {
                this._value = this._value.filter(file => file.codigo !== codFile);
                item.remove();
                this.FilesChange.emit(this._value);
            }
        });
   
        this.isAdd = this.isUploaded = false, this.nombreArchivo = null;
        this.inputFile.nativeElement.value = "";
        this.id=null;*/
        if(this.uploader.queue.length != 0 )
        {
            this.uploader.queue.filter(item => {
                if (item.index == codFile) {
                    this._value = this._value.filter(
                        file => file.codigo !== codFile
                    );
                    (this.isAdd = this.isUploaded = false),
                        (this.nombreArchivo = null);
                    item.remove();
                    this.FilesChange.emit(this._value);
                    //this.FilesChangeCustom.emit(this);
                    this.FilesRemoveCustom.emit(this);
                    this.onRemovedIdFile.emit(codFile);
                }
            });
        }       

        if(this.uploader.queue.length == 0 )
        {
            this._value = this._value.filter(
                file => file.codigo !== codFile
            );
            this.isAdd = this.isUploaded = false;
            this.nombreArchivo = null;
            this.id=null;
            this.FilesChange.emit(this._value);
            //this.FilesChangeCustom.emit(this);
            this.FilesRemoveCustom.emit(this);
            this.onRemovedIdFile.emit(codFile);
        }
    }
    onResetUploadFile = (codFile: any) => {
    /* this.uploader.queue.filter(item => {
            if( item.index == codFile) {               
                item.remove();
            }
        });     
      
        this.isAdd = this.isUploaded = false, this.nombreArchivo = null;
        this.inputFile.nativeElement.value = "";*/


        this.uploader.queue.filter(item => {
            if (item.index == codFile) {
                (this.isAdd = this.isUploaded = false),
                    (this.nombreArchivo = null);
                item.remove();
            }
        });
        (this.isAdd = this.isUploaded = false), (this.nombreArchivo = null);


    }
    onAfterAddingFile = item => {                
        this.nombreArchivo = item.file.name, this.error = null, this.isAdd = true;
    };    
    onWhenAddingFileFailed(item, filter: any, options) {
        switch (filter.name) 
        {
            case "fileSize":
                this.error = `El archivo excede el tamaño maximo permitido de: ${this.pesoMaximoEnMB} MB.`; break;
            case "mimeType":
                this.error = `El archivo tiene un formato no permitido.`; break;
            default:
                this.error = `Error al subir archivo`;
        }
        //setInterval(() => { this.error = null; }, 10000);
    }
    onRemoveFromQueue(item: FileItem) {
        this._value = this._value.filter(file => file.codigo !== item.index);
        this.isAdd = this.isUploaded = false;
    }        
    onDownloadFileItem = (codigo: any=undefined) => {
        codigo = typeof codigo === "undefined" ? this.codigo : codigo;
        this._fileService.DownloadFile({ 
            id: codigo, 
            version: 0, 
            BuscarBorrador: this.esBorrador 
        });
    }
}

