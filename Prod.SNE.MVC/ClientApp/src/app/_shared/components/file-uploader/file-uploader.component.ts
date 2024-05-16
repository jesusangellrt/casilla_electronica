import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from "@angular/core";
import { FileUploader, FileItem } from "ng2-file-upload";
import { IFileUploaderOptions, IFileUpload } from "./file-uploader.interfaces";
import { ParseResponse, encryptedData } from "../../functions/http-helpers";
import { AlertService } from "@cmp/core";

@Component({
    selector: "app-file-uploader",
    templateUrl: "./file-uploader.component.html",
    styles: [
        `
            .fileinput {
                display: none;
                margin-right:10px;
            }
            label{
                margin-bottom: 0px;                
            }
            button{
                margin-right:5px;
                margin-left: 5px;
            }
            .bottom-10{
                margin-bottom: 10px;
            }
            .help-block {
                margin-bottom: 0px !important;
            }
        `
    ]
})
export class FileUploaderComponent implements OnInit {

    @Input() options?: IFileUploaderOptions;
    @Input() Name?: any;        
    @ViewChild("form", { static: false }) form;
    @Output() FilesChange = new EventEmitter();
    @Output() UploadingChange = new EventEmitter();
    @Input()
    set Uploading(Value: any){
        this._uploading = Value;
    };
    _uploading: boolean= false;
    @Input()
    set Files(Files: any) {
        this._value = Files;
    };
    _value?: Array<IFileUpload> = [];

    error?: String;
    uploader: FileUploader;
    isAdd: boolean = false;
    isRemove: boolean = false;
    fileToUpload: any = null;

    constructor(
        //private readonly _alertService: AlertService
    ) {}

    ngOnInit() {
        this.uploader = new FileUploader({
            url: this.options.url,
            maxFileSize: this.options.maxFileSize * 1024 * 1024,
            allowedMimeType: this.options.allowedMimeType,
            autoUpload: false
        });
        this.uploader.onSuccessItem = (item, response) => this.onSuccessItem(item, response);
        this.uploader.onWhenAddingFileFailed = (item, filter, options) => this.onWhenAddingFileFailed(item, filter, options);
        this.uploader.onAfterAddingFile = item => this.onAfterAddingFile(item);
        this.uploader.onBeforeUploadItem = item => this.onBeforeUploadItem(item);
    }    
    onSuccessItem = (item, response) => {
        
        try
        {
            var res = JSON.parse(response);
            if (encryptedData)
                res = ParseResponse(res).data;
            else
                res = res.data;
            
            //if(!res.Success)  this._alertService.open("error", res.Messages[0]);
            res = res.Data;

            item.index = res.id;
            this._value = [
                ...this._value,
                {
                    nombre_archivo: res.nombreOriginal,
                    mimetype: res.contentType,
                    size: res.pesoEnBytes,
                    codigo: res.id,
                    tipo_archivo: `.${res.nombreOriginal.split('.').pop()}`,
                    esborrador: false
                }
            ];
            this.FilesChange.emit(this._value);
            this.onResetFileInput();
            this._uploading = this.uploader.progress < 100;
            this.UploadingChange.emit(this._uploading);
        }
        catch(error)
        {
            this.UploadingChange.emit(false);
            //this._alertService.open("error", "Ocurrió un error al subir archivo.");
        }        
    };
    onAfterAddingFile = item => {
        this.error = null;               
    };
    onBeforeUploadItem = item =>{
        
    }
    onWhenAddingFileFailed(item, filter: any, options) {
        switch (filter.name) {
            case "fileSize":
                this.error = `El archivo excede el tamaño maximo permitido de: ${this.options.maxFileSize} MB.`;
                break;
            case "mimeType":
                this.error = `El archivo tiene un formato no permitido.`;
                break;
            default:
                this.error = `Error al subir archivo`;
        }
    }
    onRemoveFromQueue(item: FileItem) {
        this._value = this._value.filter(file => file.codigo !== item.index);
    }
    onUploadFiles = () => {
        this._uploading = this.uploader.progress < 100;
        this.UploadingChange.emit(this._uploading);
        this.uploader.uploadAll();
    };
    onResetFileInput = () => {
        this.uploader.queue.length = 0;          
        this.form.nativeElement.reset();
    };
    handleChangeFileInput = () => {

    };

    get _file()
    {       
        return   this.uploader.queue.length > 0;
    }
}
