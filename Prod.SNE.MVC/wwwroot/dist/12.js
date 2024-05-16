(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion/pages/plataforma/plataforma.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion/pages/plataforma/plataforma.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-scale-multiple\">\r\n<p style=\"font-size: 20px; color: white\">Procesando información, por favor no cierre la ventana.</p>\r\n</ngx-spinner>\r\n<br>\r\n<h1 class=\"title-custom\">Configuración de plataforma</h1>\r\n<hr class=\"mt-0\">\r\n<ng-container >\r\n<form [formGroup]=\"formMACRO\" >\r\n    <div class=\"panel panel-default panel-custom\">\r\n        <div class=\"panel-heading\">Datos</div>\r\n        <div class=\"panel-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Mensaje de bienvenida a la plataforma</label>\r\n                        <div style=\"border: 1px solid rgb(217, 217, 217) !important;\">\r\n                            <ckeditor [editor]=\"editor\" [config]=\"configEditor\" [(ngModel)]=\"form.contenido\" \r\n                            formControlName=\"Mensaje\"\r\n                            (ready)=\"onReady($event)\" (change)=\"onChange($event)\" [disabled]=\"isDisabled\"></ckeditor>\r\n                        </div>\r\n                        <div *ngIf=\"esInvalidoContenido\" class=\"has-error\">\r\n                            <div class=\"ant-form-explain\">\r\n                            Debe ingresar el mensaje de bienvenida.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Indicar que tipo de archivo de bienvenida:</label>\r\n                        <div>\r\n                            <nz-select nzAllowClear nzShowSearch nzPlaceHolder=\"--Seleccionar--\"\r\n                            [(ngModel)]=\"form.tipo_file\"\r\n                            (ngModelChange)=\"set_tipo_file_permitidos()\"\r\n                            formControlName=\"TipoArchivo\">\r\n                                <ng-container *ngFor=\"let item of array_tipo_file\">\r\n                                    <nz-option [nzValue]=\"item.id_enumerado\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                </ng-container>\r\n                            </nz-select>\r\n                            <div *ngIf=\"error_tipo_file\" class=\"has-error\">\r\n                                <div class=\"ant-form-explain\">\r\n                                Debe seleccionar el tipo de archivo.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Adjuntar video de bienvenida de plataforma:</label>\r\n                        <div>\r\n                            <app-file-uploader-custom #videofileDocumentoUploader \r\n                            [isDisabled]=\"form.url?true:false\"\r\n                            [fileInfo]=\"true\"  \r\n                            [id]=\"form.video\" \r\n                            [(Files)]=\"_video_archivo\" \r\n                            [(Uploading)]=\"estaGuardando\"\r\n                            [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                            [esBorrador]=\"false\" \r\n                            [extensionAceptados]=\"video_extensionAceptados\"\r\n                            (FileChange)=\"set_video_iden($event)\"\r\n                            [view_width]=\"600\"\r\n                            [puedeVerArchivo]=\"form.url?false:true\"\r\n                                    [url]=\"url\" \r\n                                    [loading]=\"estaGuardando\">\r\n                            </app-file-uploader-custom>\r\n                            <div *ngIf=\"error_video\" class=\"has-error\">\r\n                                <div class=\"ant-form-explain\">\r\n                                Debe ingresar un archivo.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>-->\r\n                    <div class=\"form-group\"[hidden]=\"!imagen_only\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Adjuntar imagen de bienvenida de plataforma:</label>\r\n                        <div>\r\n                            <app-file-uploader-custom #imagenfileDocumentoUploader \r\n                            [fileInfo]=\"true\"  \r\n                            [id]=\"form.imagen\" \r\n                            [(Files)]=\"_imagen_archivo\" \r\n                            [(Uploading)]=\"estaGuardando\"\r\n                            [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                            [esBorrador]=\"false\" \r\n                            (FileChange)=\"set_imagen_iden($event)\"\r\n                            (onRemovedIdFile)=\"handleRemovedFile($event,'imagen')\"\r\n                            [extensionAceptados]=\"imagen_extensionAceptados\" \r\n                            [view_width]=\"600\"\r\n                            [puedeVerArchivo]=\"true\"\r\n                            [url]=\"url\" \r\n                            [loading]=\"estaGuardando\">\r\n                            </app-file-uploader-custom>\r\n                            <div *ngIf=\"error_imagen\" class=\"has-error\">\r\n                                <div class=\"ant-form-explain\">\r\n                                Debe adjuntar una imagen.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Adjuntar audio de fondo de plataforma (*.mp3):</label>\r\n                        <div>\r\n                            <app-audio-uploader-custom #audioDocumentoUploader \r\n                            [fileInfo]=\"true\" \r\n                            [id]=\"form.audio\" \r\n                            [(Files)]=\"audio_archivo\" \r\n                            [(Uploading)]=\"audio_estaGuardando\"\r\n                            (FileChange)=\"set_audio_iden($event)\"\r\n                            [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                            (onRemovedIdFile)=\"handleRemovedFile($event,'audio')\"\r\n                            [esBorrador]=\"false\" \r\n                            [puedeVerArchivo]=\"true\"\r\n                                    [url]=\"url\" \r\n                                    [loading]=\"audio_estaGuardando\">\r\n                            </app-audio-uploader-custom>\r\n                            <div *ngIf=\"error_audio\" class=\"has-error\">\r\n                                <div class=\"ant-form-explain\">\r\n                                Debe adjuntar un audio.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\" [hidden]=\"!video_only\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Url de video de explicación de la plataforma:</label>\r\n                        <div>\r\n                            <input type=\"text\" formControlName=\"URL\" class=\"form-control\" \r\n                            (ngModelChange)=\"this.error_url=false;\"\r\n                            placeholder=\"--https://www.youtube.com/watch?v=FM7MFYoylVs--\" \r\n                            [(ngModel)]=\"form.url\">\r\n                        </div>\r\n                        <div *ngIf=\"error_url\" class=\"has-error\">\r\n                            <div class=\"ant-form-explain\">\r\n                            Debe ingresar un url válido.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"panel-footer text-center\">\r\n            <button type=\"button\" class=\"btn btn-default-custom\" (click)=\"cancelar()\"><i class=\"fa fa-eraser\"\r\n                aria-hidden=\"true\"></i> Cancelar</button>\r\n            &nbsp;&nbsp;\r\n            <button type=\"button\" class=\"btn btn-primary-custom\" (click)=\"save_update()\"><i class=\"fa fa-save\"></i> Guardar</button>\r\n        </div>\r\n    </div>\r\n    \r\n</form>\r\n</ng-container>\r\n");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion/pages/plataforma/plataforma-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion/pages/plataforma/plataforma-routing.module.ts ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"), __webpack_require__(/*! ./plataforma.component */ "./src/app/modules/sistema/pages/gestion/pages/plataforma/plataforma.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, plataforma_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const routes = [
        { path: "", component: plataforma_component_1.PlataformaComponent }
    ];
    let PlataformaRoutingModule = class PlataformaRoutingModule {
    };
    PlataformaRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            declarations: [],
            exports: [router_1.RouterModule]
        })
    ], PlataformaRoutingModule);
    exports.PlataformaRoutingModule = PlataformaRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion/pages/plataforma/plataforma.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion/pages/plataforma/plataforma.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ck-editor__editable_inline {\r\n    max-height: 300px;\r\n}\r\n.ck-editor__editable {\r\n    /* min-height: 600px !important; */\r\n    border: 1px solid rgb(217, 217, 217) !important;\r\n}\r\n.ck-editor__editable_inline {\r\n  min-height: 250px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaXN0ZW1hL3BhZ2VzL2dlc3Rpb24vcGFnZXMvcGxhdGFmb3JtYS9wbGF0YWZvcm1hLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtDQUFrQztJQUNsQywrQ0FBK0M7QUFDbkQ7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lzdGVtYS9wYWdlcy9nZXN0aW9uL3BhZ2VzL3BsYXRhZm9ybWEvcGxhdGFmb3JtYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNrLWVkaXRvcl9fZWRpdGFibGVfaW5saW5lIHtcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG59XHJcbi5jay1lZGl0b3JfX2VkaXRhYmxlIHtcclxuICAgIC8qIG1pbi1oZWlnaHQ6IDYwMHB4ICFpbXBvcnRhbnQ7ICovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjE3LCAyMTcsIDIxNykgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNrLWVkaXRvcl9fZWRpdGFibGVfaW5saW5lIHtcclxuICBtaW4taGVpZ2h0OiAyNTBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion/pages/plataforma/plataforma.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion/pages/plataforma/plataforma.component.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-i18n.js"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js"), __webpack_require__(/*! ../../../../../../../../external/ckeditor5-build-decoupled-document */ "./external/ckeditor5-build-decoupled-document/build/ckeditor.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, _core_1, forms_1, i18n_1, ng_zorro_antd_1, router_1, ngx_spinner_1, DecoupledEditor) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    DecoupledEditor.defaultConfig = _core_1.DecoupledInit.defaultConfig;
    let PlataformaComponent = class PlataformaComponent {
        constructor(i18n, fb, notification, router, activeRouter, configuracion_inicial_s, sis_enumerado_s, spinner, common_s, cd) {
            this.i18n = i18n;
            this.fb = fb;
            this.notification = notification;
            this.router = router;
            this.activeRouter = activeRouter;
            this.configuracion_inicial_s = configuracion_inicial_s;
            this.sis_enumerado_s = sis_enumerado_s;
            this.spinner = spinner;
            this.common_s = common_s;
            this.cd = cd;
            this.array_tipo_file = [];
            this.getIPAddress = () => {
                this.common_s.GetIpCliente().subscribe(datos => {
                });
            };
            this.form = {
                id_configuracion: 0,
                contenido: '',
                tag: null,
                tipo_file: null,
                url: null,
                video: null,
                imagen: null,
                audio: null
            };
            this.actual_config = {
                id_configuracion: 0,
                contenido: '',
                tag: null,
                tipo_file: null,
                url: null,
                video: null,
                imagen: null,
                audio: null
            };
            this.selected_tipe = '';
            this.show_file_uploader = false;
            this.set_tipo_file_permitidos = () => {
                let tipo = this.form.tipo_file;
                this.error_tipo_file = false;
                this.imagen_only = tipo ? (tipo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen ? true : false) : false;
                this.video_only = tipo ? (tipo == _core_1.TIPO_ARCHIVO_ENUMERADO.video ? true : false) : false;
                this.cd.detectChanges();
                this.cd.markForCheck();
            };
            this.imagen_only = false;
            this.video_only = false;
            this.estaGuardando = false;
            this.tiposMimePermitidos = ["image/png", "image/jpeg", "video/mp4"];
            this._imageMimePermitidos = ["image/png", "image/jpeg"];
            this._videoMimePermitidos = ["video/mp4"];
            this.extensionAceptados = [".png", ".jpeg", ".pdf"];
            this.imagen_extensionAceptados = [".png", ".jpeg"];
            this.video_extensionAceptados = [".mp4"];
            this.pesoMaximoEnMB = _core_1.FILE_SETTINGS.maxFileSize;
            this.url = "/api/comun/descargar-archivo";
            this.validar_fup = false;
            this.audio_estaGuardando = false;
            this.configuracionFormularioValidacion = () => {
                this.validateForm = this.fb.group({});
            };
            this.handleRemovedFile = (codigo, tipo) => {
                if (tipo == "imagen") {
                    this.form.imagen = null;
                    this.file_iden.imagen = null;
                }
                if (tipo == "audio") {
                    this.form.audio = null;
                    this.file_iden.audio = null;
                }
            };
            this.isDisabled = false;
            this.esInvalidoContenido = false;
            this.tags = [];
            this.editor = DecoupledEditor;
            this.configEditor = _core_1.DecoupledInit.configEditor;
            this.expresion = /\[\[[A-Z0-9\_]+\]\]/g;
            this.file_iden = {
                audio: null,
                imagen: null,
                video: null
            };
            this.set_audio_iden = (data) => {
                this.file_iden.audio = data.codigo;
                this.error_audio = false;
            };
            this.set_imagen_iden = (data) => {
                this.file_iden.imagen = data.codigo;
                this.error_imagen = false;
            };
            this.set_video_iden = (data) => {
                this.file_iden.video = data.codigo;
                this.error_video = false;
            };
            this.error_video = false;
            this.error_imagen = false;
            this.cancelar = () => {
                this.spinner.show();
                this.getConfiguracion_inicial();
            };
            this.clean_all = () => {
                this.file_iden = {
                    audio: null,
                    imagen: null,
                    video: null
                };
                this.form.contenido = '';
                this.form.tag = null;
                this.form.tipo_file = null;
                this.form.url = null;
                this.form.video = null;
                this.form.imagen = null;
                this.form.audio = null;
                this.esInvalidoContenido = false;
                this.error_imagen = false;
                this.error_video = false;
                this.error_audio = false;
                this.error_tipo_file = false;
                this.error_url = false;
                this.cd.detectChanges();
                this.cd.markForCheck();
            };
            this.error_audio = false;
            this.error_tipo_file = false;
            this.error_url = false;
            this.validURL = (str) => {
                var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
                    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
                    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
                return !!pattern.test(str);
            };
            this.save_update = () => {
                const _controls = this.formMACRO.controls;
                let allow = true;
                if (this.formMACRO.invalid) {
                    Object.keys(_controls).forEach(controlName => _controls[controlName].markAsTouched());
                    if (this.form.contenido == null || this.form.contenido == '') {
                        this.esInvalidoContenido = true;
                    }
                    if (this.form.tipo_file == null || this.form.tipo_file == '') {
                        this.error_tipo_file = true;
                    }
                    allow = false;
                }
                let tipo_file = this.form.tipo_file;
                if (tipo_file) {
                    if (tipo_file == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen && (this.file_iden.imagen == null || this.file_iden.imagen == "")) {
                        allow = false;
                        this.error_imagen = true;
                    }
                    if (tipo_file == _core_1.TIPO_ARCHIVO_ENUMERADO.video && (this.form.url == null || this.form.url == "")) {
                        allow = false;
                        this.error_url = true;
                    }
                    if (tipo_file == _core_1.TIPO_ARCHIVO_ENUMERADO.video && this.form.url != null && this.form.url != '') {
                        let valid_url = this.validURL(this.form.url);
                        if (!valid_url) {
                            this.error_url = true;
                            allow = false;
                        }
                    }
                }
                else {
                    this.error_tipo_file = true;
                    allow = false;
                }
                if (this.file_iden.audio == null || this.file_iden.audio == "") {
                    this.error_audio = true;
                    allow = false;
                }
                if (!allow) {
                    this.createNotification('warning', 'Advertencia', 'Debe ingresar los campos obligatorios.');
                }
                if (allow) {
                    this.error_url = false;
                    this.error_audio = false;
                    this.error_tipo_file = false;
                    this.error_video = false;
                    this.esInvalidoContenido = false;
                    let input = {
                        id_configuracion: this.form.id_configuracion,
                        texto_bienvenida: this.form.contenido,
                        iden_audio_fondo: this.file_iden.audio,
                        id_tipo_archivo: this.form.tipo_file,
                        tipo_archivo_name: "",
                        url_video: this.form.tipo_file == _core_1.TIPO_ARCHIVO_ENUMERADO.video ? this.form.url : null,
                        iden_imagen: this.form.tipo_file == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen ? this.file_iden.imagen : null,
                        es_eliminado: false,
                        user_name: '',
                        tipo_encuesta: _core_1.TIPO_ENCUESTA.intranet
                    };
                    this.configuracion_inicial_s.SaveUpdateConfiguracion(input).then(datos => {
                        //this.spinner.hide();
                        if (datos.data) {
                            if (datos.data.Success) {
                                let str = '<ul>';
                                datos.data.Messages.forEach(message => {
                                    str += `<li>${message}</li>`;
                                });
                                str += '</ul>';
                                this.createNotification('success', 'Éxito', str);
                            }
                        }
                    }).catch(err => { });
                }
            };
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
            this.i18n.setLocale(i18n_1.es_ES);
        }
        ngOnInit() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.formMACRO = new forms_1.FormGroup({
                    Mensaje: new forms_1.FormControl(null, forms_1.Validators.required),
                    TipoArchivo: new forms_1.FormControl(null),
                    URL: new forms_1.FormControl(null),
                });
                this.spinner.show();
                yield this.getTipoArchivos();
                yield this.getConfiguracion_inicial();
                //this.getIPAddress();
            });
        }
        getTipoArchivos() {
            this.sis_enumerado_s.GetEnumeradoByTipoEnumerado(_core_1.SIS_TIPO_ENUMERADO.tipo_archivo).then(datos => {
                this.array_tipo_file = datos.data;
            }).catch(err => { });
        }
        getConfiguracion_inicial() {
            this.configuracion_inicial_s.GetActualConfiguracion(_core_1.TIPO_ENCUESTA.intranet).then(datos => {
                if (datos.data) {
                    let item = datos.data;
                    this.actual_config = datos.data;
                    this.form.id_configuracion = item.id_configuracion;
                    this.form.contenido = item.texto_bienvenida;
                    this.form.tipo_file = item.id_tipo_archivo;
                    this.form.url = item.url_video;
                    //this.form.video=item.id_tipo_archivo==TIPO_ARCHIVO_ENUMERADO.video?item.iden_imagen:null;
                    this.form.imagen = item.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen ? item.iden_imagen : null;
                    this.form.audio = item.iden_audio_fondo;
                    this.file_iden.audio = item.iden_audio_fondo;
                    //this.file_iden.video=item.id_tipo_archivo==TIPO_ARCHIVO_ENUMERADO.video?item.iden_imagen:null;
                    this.file_iden.imagen = item.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen ? item.iden_imagen : null;
                    this.error_audio = false;
                    this.error_imagen = false;
                    this.error_tipo_file = false;
                    this.error_url = false;
                    this.error_video = false;
                    this.esInvalidoContenido = false;
                    this.imagen_only = item.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen ? true : false;
                    this.video_only = item.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.video ? true : false;
                }
                this.spinner.hide();
            }).catch(err => { });
        }
        onChange({ editor }) {
            const data = editor.getData();
            const tags = data.match(this.expresion);
            if (tags) {
                this.tags = tags;
            }
            else {
                this.tags = [];
            }
            this.tags = this.tags.filter((value, index, self) => {
                return self.indexOf(value) == index;
            });
            this.esInvalidoContenido = false;
            this.form.tag = this.tags.join();
        }
        onReady(editor) {
            editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
        }
    };
    PlataformaComponent.ctorParameters = () => [
        { type: ng_zorro_antd_1.NzI18nService },
        { type: forms_1.FormBuilder },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: router_1.Router },
        { type: router_1.ActivatedRoute },
        { type: _core_1.ConfiguracionInicialService },
        { type: _core_1.SisEnumeradoService },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: _core_1.ComunService },
        { type: core_1.ChangeDetectorRef }
    ];
    tslib_1.__decorate([
        core_1.ViewChild('imagenfileDocumentoUploader', { static: false })
    ], PlataformaComponent.prototype, "imagenfileDocumentoUploader", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('videofileDocumentoUploader', { static: false })
    ], PlataformaComponent.prototype, "videofileDocumentoUploader", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('audioDocumentoUploader', { static: false })
    ], PlataformaComponent.prototype, "audioDocumentoUploader", void 0);
    PlataformaComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-plataforma',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./plataforma.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion/pages/plataforma/plataforma.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./plataforma.component.css */ "./src/app/modules/sistema/pages/gestion/pages/plataforma/plataforma.component.css")).default]
        })
    ], PlataformaComponent);
    exports.PlataformaComponent = PlataformaComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion/pages/plataforma/plataforma.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion/pages/plataforma/plataforma.module.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js"), __webpack_require__(/*! @app/_shared */ "./src/app/_shared/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! ng-zorro-antd/modal */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-modal.js"), __webpack_require__(/*! ng-zorro-antd/notification */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-notification.js"), __webpack_require__(/*! ng-zorro-antd/table */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-table.js"), __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-select.js"), __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-input.js"), __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-icon.js"), __webpack_require__(/*! @cmp/core */ "./src/app/_core/index.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js"), __webpack_require__(/*! ../plataforma/plataforma.component */ "./src/app/modules/sistema/pages/gestion/pages/plataforma/plataforma.component.ts"), __webpack_require__(/*! ./plataforma-routing.module */ "./src/app/modules/sistema/pages/gestion/pages/plataforma/plataforma-routing.module.ts"), __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js"), __webpack_require__(/*! ng2-date-picker */ "./node_modules/ng2-date-picker/fesm2015/ng2-date-picker.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, _shared_1, ng_zorro_antd_1, modal_1, notification_1, table_1, select_1, input_1, icon_1, core_2, forms_1, ngx_spinner_1, plataforma_component_1, plataforma_routing_module_1, ckeditor5_angular_1, ng2_date_picker_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let PlataformaModule = class PlataformaModule {
    };
    PlataformaModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [plataforma_component_1.PlataformaComponent],
            imports: [
                common_1.CommonModule,
                plataforma_routing_module_1.PlataformaRoutingModule,
                _shared_1.SharedModule,
                ng_zorro_antd_1.NzButtonModule,
                modal_1.NzModalModule,
                notification_1.NzNotificationModule,
                table_1.NzTableModule,
                ng_zorro_antd_1.NzDatePickerModule,
                select_1.NzSelectModule,
                ng_zorro_antd_1.NzUploadModule,
                icon_1.NzIconModule,
                core_2.CoreComponentsModule,
                ngx_spinner_1.NgxSpinnerModule,
                ng_zorro_antd_1.NzInputNumberModule,
                core_2.CoreDirectivesModule,
                forms_1.FormsModule,
                input_1.NzInputModule,
                ng_zorro_antd_1.NzFormModule,
                ng_zorro_antd_1.NzLayoutModule,
                ng_zorro_antd_1.NzMenuModule,
                ng_zorro_antd_1.NzProgressModule,
                ng_zorro_antd_1.NzDescriptionsModule,
                forms_1.ReactiveFormsModule,
                ng_zorro_antd_1.NzRadioModule,
                ng_zorro_antd_1.NzTabsModule,
                ng_zorro_antd_1.NzCardModule,
                ng_zorro_antd_1.NzAlertModule,
                ckeditor5_angular_1.CKEditorModule,
                ng_zorro_antd_1.NzDividerModule,
                ng2_date_picker_1.DpDatePickerModule
            ]
        })
    ], PlataformaModule);
    exports.PlataformaModule = PlataformaModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=12.js.map