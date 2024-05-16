(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/avance-resultados-extranet/avance-resultados-extranet.component.html":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/avance-resultados-extranet/avance-resultados-extranet.component.html ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-modal \r\n  [(nzVisible)]=\"visible\" \r\n  nzTitle=\"Avance de encuesta\" \r\n  [nzWidth]=\"900\" \r\n  nzClosable=\"false\"\r\n  [nzFooter]=\"extraTemplate\">\r\n  <ng-container >\r\n    <form>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n                <div class=\"\">\r\n                    <label for=\"\"><b>Título:</b></label>                          \r\n                </div>\r\n            </div> \r\n            <div class=\"col-md-9\">\r\n                <div class=\"\">\r\n                    <span for=\"\">{{selected_encuesta.titulo}}</span>                          \r\n                </div>\r\n            </div> \r\n        </div>    \r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"\"><b>Fecha de vigencia:</b> </label>                          \r\n                </div>\r\n            </div> \r\n            <div class=\"col-md-9\">\r\n                <div class=\"form-group\">\r\n                    <span for=\"\">{{ selected_encuesta.fecha_inicio | date: 'dd/MM/yyyy hh:mm a'}} - {{ selected_encuesta.fecha_fin | date: 'dd/MM/yyyy hh:mm a'}}</span>                          \r\n                </div>\r\n            </div> \r\n        </div>     \r\n    </form>\r\n</ng-container>\r\n    <ng-container> \r\n        <div class=\"table-responsive table-striped table-bordered table-hover\">\r\n            <nz-table #ajaxTable class=\"container-table-custom\" [nzFrontPagination]=\"false\"\r\n            [nzBordered]=\"false\" [nzData]=\"['']\">    \r\n                <thead>\r\n                    <tr>\r\n                        <th>N°</th>\r\n                        <th>Estado</th>\r\n                        <th>Cantidad</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of EncuestaAvanceList; let i = index\">\r\n                        <td align=\"center\">{{ (i + 1) }}</td>\r\n                        <td>{{ item.estado}}</td>\r\n                        <td align=\"center\">{{ item.cantidad}}</td>                          \r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </ng-container>\r\n    <ng-template #extraTemplate>      \r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 text-left\"><button type=\"button\" class=\"btn btn-default-custom\" (click)=\"close_modal()\"> Cerrar</button></div>\r\n        </div>  \r\n    </ng-template>\r\n</nz-modal>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/configurar-encuestados-formulario-ext/configurar-encuestados-formulario-ext.component.html":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/configurar-encuestados-formulario-ext/configurar-encuestados-formulario-ext.component.html ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-modal \r\n  [(nzVisible)]=\"isVisibleModal\" \r\n  nzTitle=\"Agregar Encuestados\" \r\n  nzWidth=\"1200\" \r\n  nzClosable=\"false\"\r\n  [nzFooter]=\"extraTemplate\">\r\n    <div class=\"panel panel-default panel-custom\">\r\n        <div class=\"panel-heading\">Buscar Encuestado</div>\r\n        <div class=\"panel-body\">\r\n            <div>                \r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group mb-0\">\r\n                            <label for=\"\">Tipo de persona</label>\r\n                            <div>                                \r\n                               <nz-select\r\n                                nzPlaceHolder=\"--Todos--\"\r\n                                nzAllowClear\r\n                                nzShowSearch   \r\n                                [(ngModel)]=\"form.id_tipo_persona\"             \r\n                                >    \r\n                                <ng-container *ngFor=\"let item of ListTipoPersona\">\r\n                                <nz-option\r\n                                    [nzValue]=\"item.id\"\r\n                                    [nzLabel]=\"item.nombre\"\r\n                                ></nz-option>\r\n                                </ng-container>      \r\n                                </nz-select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group mb-0\">\r\n                            <label for=\"\">RUC o DNI</label>\r\n                            <div>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"RUC o DNI\" [(ngModel)]=\"form.numero_documento\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group mb-0\">\r\n                            <label for=\"\">Razón social</label>\r\n                            <div>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Razón social\" [(ngModel)]=\"form.razon_social\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\">Departamento</label>\r\n                            <div>\r\n                              <nz-select\r\n                                nzPlaceHolder=\"--Todos--\"\r\n                                nzAllowClear\r\n                                nzShowSearch   \r\n                                [(ngModel)]=\"form.codigo_departamento\"\r\n                                (ngModelChange)=\"onChangeDepartamento($event)\"             \r\n                                >    \r\n                                <ng-container *ngFor=\"let item of listaDepartamento\">\r\n                                <nz-option\r\n                                    [nzValue]=\"item.codigo\"\r\n                                    [nzLabel]=\"item.nombre\"\r\n                                ></nz-option>\r\n                                </ng-container>      \r\n                                </nz-select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\">Provincia</label>\r\n                            <div>\r\n                                <nz-select\r\n                                nzPlaceHolder=\"--Todos--\"\r\n                                nzAllowClear\r\n                                nzShowSearch   \r\n                                [(ngModel)]=\"form.codigo_provincia\"\r\n                                (ngModelChange)=\"onChangeProvincia($event)\"             \r\n                                >    \r\n                                <ng-container *ngFor=\"let item of listaProvincia\">\r\n                                <nz-option\r\n                                    [nzValue]=\"item.codigo\"\r\n                                    [nzLabel]=\"item.nombre\"\r\n                                ></nz-option>\r\n                                </ng-container>      \r\n                                </nz-select>\r\n                            </div>\r\n                        </div>\r\n                       \r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\">Distrito</label>\r\n                            <div>\r\n                                <nz-select\r\n                                nzPlaceHolder=\"--Todos--\"\r\n                                nzAllowClear\r\n                                nzShowSearch   \r\n                                [(ngModel)]=\"form.codigo_distrito\"           \r\n                                >    \r\n                                <ng-container *ngFor=\"let item of listaDistrito\">\r\n                                <nz-option\r\n                                    [nzValue]=\"item.codigo\"\r\n                                    [nzLabel]=\"item.nombre\"\r\n                                ></nz-option>\r\n                                </ng-container>      \r\n                                </nz-select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        \r\n        </div>\r\n        \r\n\r\n    \r\n        <div class=\"panel-footer text-center\">\r\n            <button (click)=\"getListadoOnly()\" type=\"button\" class=\"btn btn-primary-custom\"><i class=\"fa fa-search\"></i> Buscar</button>\r\n            <button (click)=\"handleClickLimpiar()\" type=\"button\" class=\"btn btn-default-custom\"><i class=\"fa fa-eraser\" aria-hidden=\"true\"></i> Limpiar</button>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 table-responsive\">\r\n                <!--\r\n                    #ajaxTable class=\"container-table-custom\" \r\n                    nzShowSizeChanger \r\n                    [nzFrontPagination]=\"false\" \r\n                    [nzBordered]=\"true\" \r\n                    [nzData]=\"listaEncuestados\"\r\n                    [nzTotal]=\"total\" \r\n                    [(nzPageIndex)]=\"pageIndex\"\r\n                    [(nzPageSize)]=\"pageSize\" \r\n                    (nzPageIndexChange)=\"handleClickBuscar()\" \r\n                    [nzLoading]=\"loading_table\"\r\n                    (nzPageSizeChange)=\"handleClickBuscar(true)\"\r\n\r\n                -->\r\n                <nz-table \r\n                    #ajaxTable class=\"container-table-custom\" \r\n                    nzShowSizeChanger \r\n                    [nzFrontPagination]=\"true\" \r\n                    [nzBordered]=\"true\" \r\n                    [nzData]=\"listaEncuestados\"\r\n                    [nzLoading]=\"loading_table\"\r\n                    [(nzPageIndex)]=\"pageIndex\"\r\n                    [(nzPageSize)]=\"pageSize\" \r\n                    >\r\n                    <thead>\r\n                        <tr>\r\n                            <th>N°</th>\r\n                            <th \r\n                            [nzShowSort]=\"true\"\r\n                            [nzSort]=\"null\"\r\n                            [nzSortKey]=\"'numero_documento'\"\r\n                            (nzSortChangeWithKey)=\"handleSortByKey($event)\">RUC O DNI</th>\r\n                            <th \r\n                            [nzShowSort]=\"true\"\r\n                            [nzSort]=\"null\"\r\n                            [nzSortKey]=\"'razon_social'\"\r\n                            (nzSortChangeWithKey)=\"handleSortByKey($event,'string')\">RAZÓN SOCIAL</th>\r\n                            <th \r\n                            [nzShowSort]=\"true\"\r\n                            [nzSort]=\"null\"\r\n                            [nzSortKey]=\"'tipo_persona'\"\r\n                            (nzSortChangeWithKey)=\"handleSortByKey($event,'string')\">TIPO DE PERSONA</th>\r\n                            <th  \r\n                            [nzShowSort]=\"true\"\r\n                            [nzSort]=\"null\"\r\n                            [nzSortKey]=\"'departamento'\"\r\n                            (nzSortChangeWithKey)=\"handleSortByKey($event,'string')\">DEPARTAMENTO</th>\r\n                            <th>\r\n                                <label nz-checkbox  \r\n                                [(ngModel)]=\"es_seleccionado\"\r\n                                (ngModelChange)=\"handleChangeTodoSeleccion($event)\"></label>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of ajaxTable.data; let i = index\">\r\n                            <td align=\"center\">{{ item.nro }}</td>\r\n                            <td align=\"center\">{{ item.numero_documento }}</td>\r\n                            <td align=\"center\">{{ item.razon_social }}</td>                     \r\n                            <td align=\"center\">{{ item.tipo_persona}}</td>\r\n                            <td align=\"center\">{{ item.departamento}}</td>\r\n                            <td align=\"center\">\r\n                                <label nz-checkbox [(ngModel)]=\"item.es_seleccionado\" \r\n                                (ngModelChange)=\"handleChangeSeleccion($event, item)\" ></label>\r\n                            </td>                           \r\n                        </tr>\r\n                    </tbody>\r\n                </nz-table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <ng-template #extraTemplate>      \r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 text-left\"><button type=\"button\" class=\"btn btn-default-custom\" (click)=\"handleCerrarFormularioModal()\"><i class=\"fa fa-ban\" aria-hidden=\"true\"></i> Cancelar</button></div>\r\n            <div class=\"col-sm-6 text-right\"><button nz-button nzType=\"primary\" (click)=\"handleCerrarFormularioModal(true)\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i> Confirmar Selección</button></div>\r\n        </div>  \r\n    </ng-template>\r\n</nz-modal>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/datos-encuesta-extranet/datos-encuesta-extranet.component.html":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/datos-encuesta-extranet/datos-encuesta-extranet.component.html ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<form [formGroup]=\"formMACRO\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Título de encuesta:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control nzErrorTip=\"Debe ingresar el título.\">\r\n                        <nz-input-group>\r\n                            <input type=\"text\" nz-input formControlName=\"Titulo\" \r\n                            maxlength=\"150\"\r\n                            class=\"form-control\" placeholder=\"--Ingresar título--\"\r\n                            [(ngModel)]=\"frm_main_data.titulo\" />\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\">Encabezado:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control>\r\n                        <nz-input-group>\r\n                            <input type=\"text\" nz-input formControlName=\"Encabezado\" \r\n                            maxlength=\"250\"\r\n                            class=\"form-control\" placeholder=\"--Ingresar encabezado--\"\r\n                            [(ngModel)]=\"frm_main_data.encabezado\" />\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Objetivo:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control nzErrorTip=\"Debe ingresar el objetivo.\">\r\n                        <nz-input-group>\r\n                            <textarea formControlName=\"Objetivo\" nz-input class=\"form-control\" \r\n                            maxlength=\"300\"\r\n                            [(ngModel)]=\"frm_main_data.objetivo\" placeholder=\"--Ingresar objetivo--\"></textarea>\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Descripción:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control nzErrorTip=\"Debe ingresar una descripción.\">\r\n                        <nz-input-group>\r\n                            <textarea formControlName=\"Descripcion\" nz-input class=\"form-control\"\r\n                            maxlength=\"300\"\r\n                            [(ngModel)]=\"frm_main_data.descripcion\" placeholder=\"--Ingresar una breve descripción--\"></textarea>\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Fecha y hora de inicio de vigencia:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control nzErrorTip=\"Debe ingresar fecha y hora.\">\r\n                        <nz-input-group>\r\n                            <nz-date-picker formControlName=\"FechaHoraInicio\" \r\n                            [nzDisabledDate]=\"disabledStartDate\"\r\n                            [(ngModel)]=\"frm_main_data.fecha_inicio\"\r\n                            nzShowTime nzFormat=\"dd/MM/yyyy HH:mm a\" ngModel\r\n                            ></nz-date-picker>\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Fecha y hora de fin de vigencia:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control nzErrorTip=\"Debe ingresar fecha y hora.\">\r\n                        <nz-input-group>\r\n                            <nz-date-picker formControlName=\"FechaHoraFin\" \r\n                            [(ngModel)]=\"frm_main_data.fecha_fin\"\r\n                            [nzDisabledDate]=\"disabledEndDate\"\r\n                            nzShowTime nzFormat=\"dd/MM/yyyy HH:mm a\" ngModel\r\n                            ></nz-date-picker>\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Tiempo estimado en minutos:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control nzErrorTip=\"Debe ingresar el tiempo estimado.\">\r\n                        <nz-input-group>\r\n                            <nz-input-number \r\n                                formControlName=\"TiempoEstimado\"\r\n                                [(ngModel)]=\"frm_main_data.tiempo_estimado\" \r\n                                [nzMin]=\"1\" \r\n                                [nzMax]=\"300\" \r\n                                [nzStep]=\"1\">\r\n                            </nz-input-number>\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-5\">\r\n            <p>\r\n                <label nz-checkbox  formControlName=\"EsAnonima\" \r\n                [(ngModel)]=\"frm_main_data.es_anonima\" \r\n                (ngModelChange)=\"show_mensaje_bienvenida_anonima($event)\"\t>Es una encuesta anónima</label> \r\n            </p>\r\n            <p>\r\n                <label nz-checkbox  formControlName=\"EsParaTodos\" \r\n                [(ngModel)]=\"frm_main_data.es_todos\"\r\n                (ngModelChange)=\"show_tab_encuestados($event)\"\r\n                >Es una encuesta para todos los administrados</label> \r\n            </p>\r\n            <p>\r\n                <label nz-checkbox  formControlName=\"EsSeccionPregunta\" \r\n                [(ngModel)]=\"frm_main_data.es_con_seccion_pregunta\"\r\n                >Es una encuesta con preguntas divididas por secciones</label> \r\n            </p>\r\n            <div class=\"form-group\" *ngIf=\"_show_mensaje_bienvenida_anonima\">\r\n                <label for=\"\">Mensaje para encuesta anónima:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control>\r\n                        <nz-input-group>\r\n                            <textarea formControlName=\"MensajeAnonimo\" nz-input class=\"form-control\" \r\n                            maxlength=\"400\"\r\n                            [(ngModel)]=\"frm_main_data.mensaje_es_anonima\" placeholder=\"--Ingresar mensaje para anónimos--\"></textarea>\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <hr class=\"mt-0\">\r\n    <h5 class=\"title-custom\">Presentación</h5>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\">Adjuntar imagen en segundo plano (pasar el mouse)</label>\r\n                <app-file-uploader-custom  \r\n                [fileInfo]=\"true\"  \r\n                [id]=\"frm_main_data.iden_imagen_presentacion\" \r\n                [(Files)]=\"_imagen_archivo\" \r\n                [(Uploading)]=\"estaGuardando\"\r\n                [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                [esBorrador]=\"false\" \r\n                (FileChange)=\"set_imagen_iden($event)\"\r\n                (onRemovedIdFile)=\"handleRemovedFilePresentacion($event)\"\r\n                [extensionAceptados]=\"imagen_extensionAceptados\" \r\n                [tiposMimePermitidos]=\"imagen_MimePermitidos\"\r\n                [error_msg]=\"'Debe adjuntar una imagen.'\"\r\n                [view_width]=\"600\"\r\n                [puedeVerArchivo]=\"true\"\r\n                [url]=\"url\" \r\n                [loading]=\"estaGuardando\">\r\n                </app-file-uploader-custom>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\" *ngIf=\"!_show_mensaje_bienvenida_anonima\">\r\n                <label for=\"\">Mensaje corto de presentación:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control nzErrorTip=\"Debe ingresar el mensaje corto de presentación.\">\r\n                        <nz-input-group>\r\n                            <input type=\"text\" nz-input formControlName=\"MensajePresentacion\" \r\n                            maxlength=\"350\"\r\n                            class=\"form-control\" placeholder=\"--Ingresar mensaje corto de presentación--\"\r\n                            [(ngModel)]=\"frm_main_data.mensaje_corto_presentacion\" />\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <hr class=\"mt-0\">\r\n    <h5 class=\"title-custom\">Mensaje de bienvenida</h5>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Indicaciones de encuesta</label>\r\n                <div style=\"border: 1px solid rgb(217, 217, 217) !important;\">\r\n                    <ckeditor [editor]=\"editor\" [config]=\"configEditor\" [(ngModel)]=\"frm_welcome_data.indicaciones\" \r\n                    formControlName=\"IndicacionesBienvenida\"\r\n                    placeholder=\"--Ingresar indicaciones--\"\r\n                    (ngModelChange)=\"this.error_indicaciones=false;\"\r\n                    (ready)=\"onReady($event)\" (change)=\"onChange($event)\"></ckeditor>\r\n                </div>\r\n                <div *ngIf=\"error_indicaciones\" class=\"has-error\">\r\n                    <div class=\"ant-form-explain\">\r\n                    Debe ingresar las indicaciones de la encuesta.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label nz-checkbox  formControlName=\"EsActivarAudioBienvenido\" \r\n                    [(ngModel)]=\"frm_welcome_data.es_activar_audio\">\r\n                    Activar audio de lectura mensaje de bienvenida\r\n                </label>    \r\n            </div>\r\n            <!--<div class=\"form-group\">\r\n                <label for=\"\">Adjuntar audio de mensaje de bienvenida (*.mp3):</label>\r\n                <div>\r\n                    <app-audio-uploader-custom \r\n                    [fileInfo]=\"true\" \r\n                    [id]=\"frm_welcome_data.iden_audio\" \r\n                    [(Files)]=\"audio_archivo\" \r\n                    [(Uploading)]=\"audio_estaGuardando\"\r\n                    (FileChange)=\"set_audio_iden($event)\"\r\n                    (onRemovedIdFile)=\"handleRemovedAudioWelcome($event)\"\r\n                    [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                    [esBorrador]=\"false\" \r\n                    [puedeVerArchivo]=\"true\"\r\n                            [url]=\"url\" \r\n                            [loading]=\"audio_estaGuardando\">\r\n                    </app-audio-uploader-custom>\r\n                </div>\r\n            </div>-->\r\n            <div class=\"form-group\">\r\n                <label for=\"\">Tipo de archivo de bienvenida:</label>\r\n                <div>\r\n                    <nz-form-item>\r\n                        <nz-form-control>\r\n                            <nz-input-group>\r\n                                <nz-select nzAllowClear nzShowSearch \r\n                                nzPlaceHolder=\"--Seleccionar--\"\r\n                                [(ngModel)]=\"frm_welcome_data.id_tipo_archivo\"\r\n                                (ngModelChange)=\"set_tipo_file_permitidos_welcome()\"\r\n                                formControlName=\"TipoArchivoBienvenida\">\r\n                                    <ng-container *ngFor=\"let item of array_tipo_file\">\r\n                                        <nz-option [nzValue]=\"item.id_enumerado\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                    </ng-container>\r\n                                </nz-select>\r\n                            </nz-input-group>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" [hidden]=\"!show_url_welcome\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Url de video de bienvenida:</label>\r\n                <div>\r\n                    <input type=\"text\" formControlName=\"UrlMultimediaBienvenida\" class=\"form-control\" \r\n                    placeholder=\"--https://www.youtube.com/watch?v=FM7MFYoylVs--\" \r\n                    (ngModelChange)=\"this.error_url_welcome=false;\"\r\n                    maxlength=\"500\"\r\n                    [(ngModel)]=\"frm_welcome_data.url_video\">\r\n                </div>\r\n                <div *ngIf=\"error_url_welcome\" class=\"has-error\">\r\n                    <div class=\"ant-form-explain\">\r\n                    Debe ingresar un url válido.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\"[hidden]=\"!show_file_input_welcome\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Adjuntar imagen de bienvenida:</label>\r\n                <div>\r\n                    <app-file-uploader-custom  \r\n                    [fileInfo]=\"true\"  \r\n                    [id]=\"frm_welcome_data.iden_imagen\" \r\n                    [(Files)]=\"archivo\" \r\n                    [(Uploading)]=\"estaGuardando\"\r\n                    [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                    [esBorrador]=\"false\" \r\n                    [extensionAceptados]=\"imagen_extensionAceptados\"\r\n                    [tiposMimePermitidos]=\"imagen_MimePermitidos\"\r\n                    [error_msg]=\"'Debe adjuntar una imagen.'\"\r\n                    (FileChange)=\"set_file_iden_welcome($event)\"\r\n                    (onRemovedIdFile)=\"handleRemovedFileWelcome($event)\"\r\n                    [view_width]=\"600\"\r\n                    [puedeVerArchivo]=\"true\"\r\n                            [url]=\"url\" \r\n                            [loading]=\"estaGuardando\">\r\n                    </app-file-uploader-custom>\r\n                    <div *ngIf=\"error_file_welcome\" class=\"has-error\">\r\n                        <div class=\"ant-form-explain\">\r\n                        Debe ingresar un archivo.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Adjuntar archivo de términos y condiciones</label>\r\n                <app-file-uploader-custom  \r\n                [fileInfo]=\"true\"  \r\n                [id]=\"frm_welcome_data.iden_terminos_condiciones\" \r\n                [(Files)]=\"archivo_terminos\" \r\n                [(Uploading)]=\"estaGuardando\"\r\n                [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                [esBorrador]=\"false\" \r\n                (FileChange)=\"set_imagen_iden_terminos($event)\"\r\n                (onRemovedIdFile)=\"handleRemovedFileTerminos($event)\"\r\n                [extensionAceptados]=\"terminos_extensionAceptados\" \r\n                [tiposMimePermitidos]=\"terminos_MimePermitidos\"\r\n                [error_msg]=\"'Debe adjuntar una archivo.'\"\r\n                [view_width]=\"600\"\r\n                [puedeVerArchivo]=\"true\"\r\n                [url]=\"url\" \r\n                [loading]=\"estaGuardando\">\r\n                </app-file-uploader-custom>\r\n                <div *ngIf=\"error_file_terminos\" class=\"has-error\">\r\n                    <div class=\"ant-form-explain\">\r\n                    Debe ingresar un archivo de términos y condiciones.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <hr class=\"mt-0\">\r\n    <h5 class=\"title-custom\">Mensaje de agradecimiento</h5>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Titulo de mensaje de agradecimiento:</label>\r\n                <div style=\"border: 1px solid rgb(217, 217, 217) !important;\">\r\n                    <ckeditor [editor]=\"editorTitulo\" [config]=\"configEditorTitulo\" [(ngModel)]=\"frm_greet_data.mensaje_agradecimiento\" \r\n                    formControlName=\"IndicacionesAgradecimiento\"\r\n                    placeholder=\"--Ingresar título de mensaje de agradecimiento--\"\r\n                    (ngModelChange)=\"this.error_titulo=false;\"\r\n                    (ready)=\"onReadyTitulo($event)\" (change)=\"onChangeTitulo($event)\"></ckeditor>\r\n                </div>\r\n                <div *ngIf=\"error_titulo\" class=\"has-error\">\r\n                    <div class=\"ant-form-explain\">\r\n                    Debe ingresar el título de mensaje de agradecimiento.\r\n                    </div>\r\n                </div>\r\n                <!--<label for=\"\"><span class=\"span_required\">*</span> Titulo de mensaje de agradecimiento:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control nzErrorTip=\"Debe ingresar el mensaje de agradecimiento.!\">\r\n                        <nz-input-group>\r\n                            <textarea type=\"text\" nz-input formControlName=\"IndicacionesAgradecimiento\" \r\n                            maxlength=\"240\"\r\n                            class=\"form-control\" placeholder=\"--Ingresar mensaje de agradecimiento--\"\r\n                            [(ngModel)]=\"frm_greet_data.mensaje_agradecimiento\"></textarea>\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>-->\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label nz-checkbox  formControlName=\"EsActivarAudioAgradecimiento\" \r\n                    [(ngModel)]=\"frm_greet_data.es_activar_audio\">\r\n                    Activar audio de lectura mensaje de agradecimiento\r\n                </label>   \r\n                <!--<label for=\"\">Adjuntar audio de mensaje de agradecimiento (*.mp3):</label>\r\n                <div>\r\n                    <app-audio-uploader-custom  \r\n                    [fileInfo]=\"true\" \r\n                    [id]=\"frm_greet_data.iden_audio\" \r\n                    [(Files)]=\"audio_archivo\" \r\n                    [(Uploading)]=\"audio_estaGuardando\"\r\n                    (FileChange)=\"set_audio_iden_agradecimiento($event)\"\r\n                    (onRemovedIdFile)=\"handleRemovedAudioAgradecimiento($event)\"\r\n                    [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                    [esBorrador]=\"false\" \r\n                    [puedeVerArchivo]=\"true\"\r\n                            [url]=\"url\" \r\n                            [loading]=\"audio_estaGuardando\">\r\n                    </app-audio-uploader-custom>\r\n                </div>-->\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Tipo de archivo de agradecimiento:</label>\r\n                <div>\r\n                    <nz-form-item>\r\n                        <nz-form-control nzErrorTip=\"Debe seleccionar un tipo de archivo.\">\r\n                            <nz-input-group>\r\n                                <nz-select nzAllowClear nzShowSearch \r\n                                nzPlaceHolder=\"--Seleccionar--\"\r\n                                [(ngModel)]=\"frm_greet_data.id_tipo_archivo\"\r\n                                (ngModelChange)=\"set_tipo_file_permitidos_agradecimiento()\"\r\n                                formControlName=\"TipoArchivoAgradecimiento\">\r\n                                    <ng-container *ngFor=\"let item of array_tipo_file\">\r\n                                        <nz-option [nzValue]=\"item.id_enumerado\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                    </ng-container>\r\n                                </nz-select>\r\n                            </nz-input-group>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\"[hidden]=\"!show_file_agradecimiento\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Adjuntar imagen de agradecimiento:</label>\r\n                <div>\r\n                    <app-file-uploader-custom  \r\n                    [fileInfo]=\"true\"  \r\n                    [id]=\"frm_greet_data.iden_imagen\" \r\n                    [(Files)]=\"archivo\" \r\n                    [(Uploading)]=\"estaGuardando\"\r\n                    [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                    [esBorrador]=\"false\" \r\n                    [extensionAceptados]=\"imagen_extensionAceptados\"\r\n                    [tiposMimePermitidos]=\"imagen_MimePermitidos\"\r\n                    [error_msg]=\"'Debe adjuntar una imagen.'\"\r\n                    (FileChange)=\"set_file_iden_agradecimiento($event)\"\r\n                    (onRemovedIdFile)=\"handleRemovedFileAgradecimiento($event)\"\r\n                    [view_width]=\"600\"\r\n                    [puedeVerArchivo]=\"true\"\r\n                            [url]=\"url\" \r\n                            [loading]=\"estaGuardando\">\r\n                    </app-file-uploader-custom>\r\n                    <div *ngIf=\"error_file_agradecimiento\" class=\"has-error\">\r\n                        <div class=\"ant-form-explain\">\r\n                        Debe ingresar un archivo de imagen.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\" [hidden]=\"!show_url\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Url de video de agradecimiento:</label>\r\n                <div>\r\n                    <input type=\"text\" formControlName=\"UrlMultimediaAgradecimiento\" class=\"form-control\" \r\n                    placeholder=\"Url de video de agradecimiento\" \r\n                    maxlength=\"500\"\r\n                    (ngModelChange)=\"this.error_url=false;\"\r\n                    [(ngModel)]=\"frm_greet_data.url_video\">\r\n                </div>\r\n                <div *ngIf=\"error_url\" class=\"has-error\">\r\n                    <div class=\"ant-form-explain\">\r\n                    Debe ingresar un url válido.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-6 text-left\">\r\n        <button type=\"button\" class=\"btn btn-default-custom\" [routerLink]=\"['/sistema/gestion-extranet/gestor-encuestas-extranet']\">\r\n            Cancelar\r\n        </button>\r\n    </div>\r\n    <div class=\"col-sm-6 text-right\">\r\n        <button type=\"button\" class=\"btn btn-primary-custom\" (click)=\"save_update()\" ><i class=\"fa fa-paper-plane\"></i> Siguiente</button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/encuestados-encuesta-extranet/encuestados-encuesta-extranet.component.html":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/encuestados-encuesta-extranet/encuestados-encuesta-extranet.component.html ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-xs-12\" style=\"margin-bottom:5px;\">\r\n        <div class=\"col-xs-12 input-group pull-left\">\r\n            <button (click)=\"handleClickAgregarEncuestado()\" class=\"btn btn-primary-custom pull-left\"> \r\n                <i class=\"fa fa-plus-circle\"></i> Agregar encuestados</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ng-container>\r\n    <div style=\"margin-bottom:5px;\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"\">RUC o DNI</label>\r\n                    <input class=\"form-control\" type=\"text\" \r\n                    placeholder=\"--Filtrar por RUC o DNI--\"\r\n                    [(ngModel)]=\"form.dni\" >\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"\">Razón social</label>\r\n                    <input class=\"form-control\" type=\"text\" \r\n                    placeholder=\"--Filtrar por Razón social--\"\r\n                    [(ngModel)]=\"form.nombres\" >\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-3 text-right\">\r\n                <div class=\"form-group\">\r\n                    <br>\r\n                    <button type=\"button\" class=\"btn btn-primary-custom\" (click)=\"get_list()\">\r\n                        <i class=\"fa fa-search\"></i> Filtrar\r\n                    </button>\r\n                    &nbsp;&nbsp;\r\n                    <button type=\"button\" class=\"btn btn-default-custom\" (click)=\"handleClickLimpiar()\">\r\n                        <i class=\"fa fa-eraser\"aria-hidden=\"true\"></i> Limpiar\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<ng-container>\r\n    <div class=\"table-responsive table-striped table-bordered table-hover\">\r\n        <nz-table #ajaxTable class=\"container-table-custom\" nzShowSizeChanger [nzFrontPagination]=\"true\"\r\n        [nzBordered]=\"true\" [nzData]=\"EncuestadosList\" [nzLoading]=\"cargando_tabla\">\r\n    \r\n            <thead>\r\n                <tr>\r\n                    <th WIDTH=\"50\">N°</th>\r\n                    <th WIDTH=\"550\"\r\n                    [nzShowSort]=\"true\"\r\n                    [nzSort]=\"null\"\r\n                    [nzSortKey]=\"'full_name'\"\r\n                    (nzSortChangeWithKey)=\"handleSortByKey($event,'string')\">\r\n                        RUC o DNI</th>\r\n                    <th WIDTH=\"550\"\r\n                    [nzShowSort]=\"true\"\r\n                    [nzSort]=\"null\"\r\n                    [nzSortKey]=\"'full_name'\"\r\n                    (nzSortChangeWithKey)=\"handleSortByKey($event,'string')\">\r\n                        Nombres y apellidos</th>\r\n                    <th WIDTH=\"550\"\r\n                    [nzShowSort]=\"true\"\r\n                    [nzSort]=\"null\"\r\n                    [nzSortKey]=\"'full_name'\"\r\n                    (nzSortChangeWithKey)=\"handleSortByKey($event,'string')\">\r\n                        Tipo de persona</th>\r\n                    <th WIDTH=\"100\"></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of ajaxTable.data; let i = index\">\r\n                    <td>{{ (pageSize * (pageIndex - 1)) + (i + 1) }}</td>\r\n                    <td>{{ item.numero_documento }} </td>  \r\n                    <td>{{ item.razon_social }} </td>  \r\n                    <td>{{ item.tipo_persona }} </td>  \r\n                    <td align=\"center\" >\r\n                        <ng-container>\r\n                            <a  class=\"btn btn-icon\" data-tooltip=\"tooltip\" data-placement=\"bottom\" (click)=\"_delete_encuestado(item.id_encuesta_administrado)\" title=\"Eliminar\" >\r\n                                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                            </a>\r\n                        </ng-container>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n    <div *ngIf=\"error_encuestados\" class=\"has-error\">\r\n        <div class=\"ant-form-explain\">\r\n        Debe ingresar al menos un encuestado.\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<div class=\"row\" style=\"margin-top: 15px;\">\r\n    <div class=\"col-sm-6 text-left\">\r\n        <button type=\"button\" class=\"btn btn-default-custom\" (click)=\"goback()\">\r\n            Retornar\r\n        </button>\r\n    </div>\r\n    <div class=\"col-sm-6 text-right\">\r\n        <button type=\"button\" class=\"btn btn-primary-custom\" (click)=\"save_update_encuestados()\" ><i class=\"fa fa-save\"></i> Guardar</button>\r\n        &nbsp;&nbsp;\r\n        <button type=\"button\" class=\"btn btn-primary-custom\" (click)=\"save_update_encuestados(true)\" ><i class=\"fa fa-paper-plane\"></i> Publicar</button>\r\n    </div>\r\n</div>\r\n\r\n\r\n<ng-container *ngIf=\"esVisibleFormularioEncuestados\">\r\n    <app-configurar-encuestados-formulario-ext \r\n    [isVisibleModal]=\"esVisibleFormularioEncuestados\" \r\n    (onChangeVisible)=\"handleCloseAgregarEncuestado($event)\"\r\n    (onSaveForm)=\"handleSave($event)\"\r\n    (onEmitListaSeleccionada)=\"handleEmitListaSeleccionada($event)\">\r\n    </app-configurar-encuestados-formulario-ext>\r\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-notificacion-ext/modal-registro-notificacion-extranet.component.html":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-notificacion-ext/modal-registro-notificacion-extranet.component.html ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-scale-multiple\">\r\n    <p style=\"font-size: 20px; color: white\">Procesando información, por favor no cierre la ventana.</p>\r\n    </ngx-spinner>\r\n<nz-modal \r\n  [(nzVisible)]=\"isVisibleModal\" \r\n  nzTitle=\"{{title}} notificación\" \r\n  [nzWidth]=\"modal_width\" \r\n  nzClosable=\"false\"\r\n  [nzFooter]=\"extraTemplate\">\r\n    <ng-container >\r\n        <div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-7 col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Título de notificación</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe ingresar el título!\">\r\n                                <nz-input-group>\r\n                                    <input type=\"text\" [formControl]=\"frmNOT.frmTitulos\" \r\n                                    class=\"form-control\" \r\n                                    placeholder=\"--Ingresar título--\"\r\n                                    maxlength=\"500\"\r\n                                    [(ngModel)]=\"frm.titulo\">\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-5 col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Fecha y hora de envío de notificación</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe ingresar fecha y hora!\">\r\n                                <nz-input-group>\r\n                                    <nz-date-picker [formControl]=\"frmNOT.frmFecha\" \r\n                                    [(ngModel)]=\"frm.fecha_notificacion\"\r\n                                    nzShowTime nzFormat=\"dd/MM/yyyy HH:mm a\" ngModel\r\n                                    ></nz-date-picker>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-7 col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Asunto de la notificación</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe ingresar el asunto!\">\r\n                                <nz-input-group>\r\n                                    <input type=\"text\" [formControl]=\"frmNOT.frmAsunto\" \r\n                                    class=\"form-control\" \r\n                                    placeholder=\"--Ingresar asunto--\"\r\n                                    maxlength=\"500\"\r\n                                    [(ngModel)]=\"frm.asunto\">\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>                \r\n            </div>\r\n            <div class=\"row\" style=\"padding-top: 5px;\">\r\n                <div class=\"col-md-12 col-sm-12\">\r\n                    <label for=\"\"><span class=\"span_required\">*</span> A quién va dirigido la notificación</label>\r\n                    <div style=\"padding-left: 10px\" *ngFor=\"let item of array_dirigido; let i = index\">\r\n                        <input style=\"background-color: #dc3545;\r\n                        border-color: #dc3545;\" class=\"\"\r\n                        id=\"{{item.id_enumerado}}\"\r\n                        name=\"checkTipoArchivo\"\r\n                        type=\"radio\"\r\n                        [checked]=\"item.selected\"\r\n                        (change)=\"changeDirigido($event)\"/>&nbsp;\r\n                        <label for=\"{{item.id_enumerado}}\">{{ item.nombre }}</label>\r\n                    </div>\r\n                    <div style=\"padding-left: 10px\" *ngIf=\"error_dirigido\" class=\"has-error\">\r\n                        <div class=\"ant-form-explain\">\r\n                            Debe seleccionar una opción!\r\n                        </div>\r\n                    </div>\r\n                </div>                \r\n            </div>\r\n            <div class=\"row\" style=\"padding-top: 20px;\">\r\n                <div class=\"col-md-12 col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Mensaje de notificación</label>\r\n                            <div style=\"border: 1px solid rgb(217, 217, 217) !important;\">\r\n                            <ckeditor [editor]=\"editor\" [config]=\"configEditor\" [(ngModel)]=\"frm.mensaje\" \r\n                                [formControl]=\"frmNOT.frmMensaje\" \r\n                                (ready)=\"onReady($event)\" (change)=\"onChange($event)\"></ckeditor>\r\n                            </div>  \r\n                            <div style=\"padding-left: 10px\" *ngIf=\"error_editor_mensaje\" class=\"has-error\">\r\n                                <div class=\"ant-form-explain\">\r\n                                    Debe ingresar un mensaje!\r\n                                </div>\r\n                            </div>                                                     \r\n                    </div>\r\n                </div>                \r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n    <ng-template #extraTemplate>      \r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 text-left\"><button type=\"button\" class=\"btn btn-default-custom\" (click)=\"handleCancelarFormularioModal()\"><i class=\"fa fa-ban\" aria-hidden=\"true\"></i> Cancelar</button></div>\r\n            <div class=\"col-sm-6 text-right\"><button nz-button nzType=\"primary\" (click)=\"handleSaveFormularioModal()\"><i class=\"fa fa-save\" aria-hidden=\"true\"></i> Guardar</button></div>\r\n        </div>  \r\n    </ng-template>\r\n</nz-modal>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-pregunta-ext/modal-registro-columna-ext/modal-registro-columna-ext.component.html":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-pregunta-ext/modal-registro-columna-ext/modal-registro-columna-ext.component.html ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-modal \r\n  [(nzVisible)]=\"isVisibleModalMatriz\" \r\n  nzTitle=\"{{title}}\" \r\n  [nzWidth]=\"modal_width\" \r\n  nzClosable=\"false\"\r\n  [nzFooter]=\"extraEndTemplateMatriz\">\r\n    <ng-container >\r\n        <div>\r\n            <!--BEGIN FORMATOS-->\r\n            <div class=\"row\" *ngIf=\"forma.id_tipo_pregunta==_TIPO_PREGUNTA.archivo\">\r\n                <div class=\"col-md-12\">\r\n                    <label for=\"\"><span class=\"span_required\">*</span> Tipo de archivo</label>\r\n                    <div style=\"padding-left: 10px\" *ngFor=\"let item of array_archivo_tipo_archivo_columna; let i = index\">\r\n                        <input style=\"background-color: #dc3545;\r\n                        border-color: #dc3545;\" class=\"\"\r\n                        id=\"{{item.id_enumerado}}\"\r\n                        name=\"checkTipoArchivo\"\r\n                        type=\"checkbox\"\r\n                        [checked]=\"item.selected\"\r\n                        (change)=\"change_archivo_byTipo($event)\"/>&nbsp;\r\n                        <label for=\"{{item.id_enumerado}}\">{{ item.nombre }}</label>\r\n                    </div>\r\n                    <div style=\"padding-left: 10px\" *ngIf=\"error_archivo_tipo_archivo\" class=\"has-error\">\r\n                        <div class=\"ant-form-explain\">\r\n                            Debe seleccionar al menos un tipo de archivo.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"forma.id_tipo_pregunta==_TIPO_PREGUNTA.desplegable_institucional\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Maestro institucional</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe seleccionar el maestro institucional!\">\r\n                                <nz-input-group>\r\n                                    <nz-select nzAllowClear nzShowSearch \r\n                                    [(ngModel)]=\"JSON_DESPLEGABLE_INSTITUCIONAL.tbl_data\"\r\n                                    [formControl]=\"frmMaestroInstitucional\"\r\n                                    [nzDisabled]=\"false\"\r\n                                    nzPlaceHolder=\"--Seleccione--\">\r\n                                        <ng-container *ngFor=\"let item of array_maestro_institucional\">\r\n                                            <nz-option [nzValue]=\"item.id_enumerado\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                        </ng-container>\r\n                                    </nz-select>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"forma.id_tipo_pregunta==_TIPO_PREGUNTA.numerico_entero\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Cantidad de digitos enteros</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe ingresar los digitos enteros!\">\r\n                                <nz-input-group>\r\n                                    <nz-input-number \r\n                                        [formControl]=\"frmCantidadDigitosEnteros\"\r\n                                        [(ngModel)]=\"JSON_NUMERICO_ENTERO.nro_entero\" \r\n                                        [nzMin]=\"1\" \r\n                                        [nzMax]=\"9\" \r\n                                        [nzStep]=\"1\">\r\n                                    </nz-input-number>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"forma.id_tipo_pregunta==_TIPO_PREGUNTA.numerico_decimal\">\r\n                <div class=\"col-sm-6\" >\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Cantidad de digitos entero</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe ingresar los digitos entero!\">\r\n                                <nz-input-group>\r\n                                    <nz-input-number \r\n                                        [formControl]=\"frmCantidadDigitosEnteros\"\r\n                                        [(ngModel)]=\"JSON_NUMERICO_DECIMAL.nro_entero\" \r\n                                        [nzMin]=\"1\" \r\n                                        [nzMax]=\"9\" \r\n                                        [nzStep]=\"1\">\r\n                                    </nz-input-number>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Cantidad de digitos decimales</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe ingresar los digitos decimales!\">\r\n                                <nz-input-group>\r\n                                    <nz-input-number \r\n                                        [formControl]=\"frmCantidadDigitos\"\r\n                                        [(ngModel)]=\"JSON_NUMERICO_DECIMAL.nro_decimal\" \r\n                                        [nzMin]=\"1\" \r\n                                        [nzMax]=\"5\" \r\n                                        [nzStep]=\"1\">\r\n                                    </nz-input-number>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"forma.id_tipo_pregunta==_TIPO_PREGUNTA.fecha\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Tipo de fecha</label>\r\n                        <div style=\"padding-left: 10px\">\r\n                            <input style=\"background-color: #dc3545; border-color: #dc3545;\" type=\"checkbox\" [(ngModel)]=\"checkbox1\" id=\"1\" (change)=\"uncheck('anio')\" name=\"anio\"> solo año<br>\r\n                            <input style=\"background-color: #dc3545; border-color: #dc3545;\" type=\"checkbox\" [(ngModel)]=\"checkbox2\" id=\"2\" (change)=\"uncheck('mes_anio')\" name=\"mes_anio\"> mes/año<br>\r\n                            <input style=\"background-color: #dc3545; border-color: #dc3545;\" type=\"checkbox\" [(ngModel)]=\"checkbox3\" id=\"3\" (change)=\"uncheck('dia_mes_anio')\" name=\"dia_mes_anio\"> día/mes/año<br>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"forma.id_tipo_pregunta==_TIPO_PREGUNTA.texto\">\r\n                <div class=\"col-sm-12\">\r\n                    <label for=\"\">Indicar cantidad máxima de caracteres</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control>\r\n                                <nz-input-group>\r\n                                    <nz-input-number \r\n                                        [formControl]=\"frmCantidadCarateres\"\r\n                                        [(ngModel)]=\"JSON_NUMERICO_TEXTO.nro_caracteres\" \r\n                                        [nzMin]=\"1\" \r\n                                        [nzMax]=\"1000\" \r\n                                        [nzStep]=\"1\">\r\n                                    </nz-input-number>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                </div>\r\n            </div>\r\n            <div class=\"row col-sm-12\" *ngIf=\"\r\n            forma.id_tipo_pregunta==_TIPO_PREGUNTA.desplegable_libre\r\n            || forma.id_tipo_pregunta==_TIPO_PREGUNTA.seleccion_unica \r\n            || forma.id_tipo_pregunta==_TIPO_PREGUNTA.seleccion_multiple\">\r\n                <div class=\"panel panel-default panel-custom\">\r\n                    <div class=\"panel-heading\">Alternativas</div>\r\n                    <div class=\"panel-body\">                    \r\n                        <ng-container>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12 text-left\">\r\n                                    <div>\r\n                                        <button class=\"btn btn-primary-custom pull-left\" (click)=\"_add_alternativa_table()\">\r\n                                            <i class=\"fa fa-plus-circle\"></i> Agregar\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-12\">\r\n                                    <div class=\"table-responsive table-striped table-bordered table-hover\">\r\n                                        <nz-table #ajaxTable class=\"container-table-custom\" nzShowSizeChanger \r\n                                        [nzFrontPagination]=\"true\" [nzBordered]=\"true\" [nzLoading]=\"cargando_tabla\" \r\n                                        [nzData]=\"array_alternativa_select\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th>N°</th>\r\n                                                    <th WIDTH=\"450\">Descripción</th>\r\n                                                    <th WIDTH=\"80\">Acción</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let item of ajaxTable.data; let i = index\">\r\n                                                    <td align=\"center\">{{ (item.idx+1) }}</td>\r\n                                                    <td>\r\n                                                        <nz-form-item>\r\n                                                            <nz-form-control nzErrorTip=\"Debe ingresar la descripción!\">\r\n                                                                <nz-input-group>\r\n                                                                    <input class=\"form-control\" type=\"text\" \r\n                                                                    [formControl]=\"frmAlternativaDescripcion[item.idx]\"\r\n                                                                    placeholder=\"--Ingresar descripción de opción--\"\r\n                                                                    [(ngModel)]=\"item.descripcion\" >\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                         </nz-form-item>\r\n                                                    </td>               \r\n                                                    <td align=\"center\" >\r\n                                                        <ng-container>\r\n                                                            <a  class=\"btn btn-icon\" (click)=\"_delete_alternativa_table(item.idx)\" \r\n                                                                data-tooltip=\"tooltip\" data-placement=\"bottom\" title=\"Eliminar\" >\r\n                                                                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                                                            </a>\r\n                                                        </ng-container>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </nz-table>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ng-container>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"forma.id_tipo_pregunta==_TIPO_PREGUNTA.matriz\">\r\n                <div class=\"col-md-6 col-sm-12\">\r\n                    <div class=\"panel panel-default panel-custom\">\r\n                        <div class=\"panel-heading\">Filas</div>\r\n                        <div class=\"panel-body\">                    \r\n                            <ng-container>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12 text-left\">\r\n                                        <div>\r\n                                            <button class=\"btn btn-primary-custom pull-left\">\r\n                                                <i class=\"fa fa-plus-circle\"></i> Agregar\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-12\">\r\n                                        <div class=\"table-responsive table-striped table-bordered table-hover\">\r\n                                            <nz-table #ajaxTableMatriz class=\"container-table-custom\" nzShowSizeChanger \r\n                                            [nzFrontPagination]=\"true\" [nzBordered]=\"true\" [nzLoading]=\"cargando_tabla\" \r\n                                            [nzData]=\"array_filas\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th>N°</th>\r\n                                                        <th WIDTH=\"400\">Descripción</th>\r\n                                                        <th WIDTH=\"50\">Acción</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let item of ajaxTableMatriz.data;\">\r\n                                                        <td align=\"center\">{{ (item.idx+1) }}</td>\r\n                                                        <td>\r\n                                                            <nz-form-item>\r\n                                                                <nz-form-control nzErrorTip=\"Debe ingresar la descripción de fila\">\r\n                                                                    <nz-input-group>\r\n                                                                        <input class=\"form-control\" type=\"text\" \r\n                                                                        placeholder=\"--Ingresar descripción de fila--\"\r\n                                                                        [(ngModel)]=\"item.nombre_fila\" >\r\n                                                                    </nz-input-group>\r\n                                                                </nz-form-control>\r\n                                                             </nz-form-item>\r\n                                                        </td>             \r\n                                                        <td align=\"center\" >\r\n                                                            <ng-container>\r\n                                                                <a  class=\"btn btn-icon\" \r\n                                                                    data-tooltip=\"tooltip\" data-placement=\"bottom\" title=\"Eliminar\" >\r\n                                                                    <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                                                                </a>\r\n                                                            </ng-container>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </nz-table>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"error_filas_matriz\" class=\"has-error\">\r\n                                        <div class=\"ant-form-explain\">\r\n                                            Debe ingresar por lo menos una (1) fila.\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-container>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6 col-sm-12\">\r\n                    <div class=\"panel panel-default panel-custom\">\r\n                        <div class=\"panel-heading\">Columnas</div>\r\n                        <div class=\"panel-body\">                    \r\n                            <ng-container>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12 text-left\">\r\n                                        <div>\r\n                                            <button class=\"btn btn-primary-custom pull-left\">\r\n                                                <i class=\"fa fa-plus-circle\"></i> Agregar\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-12\">\r\n                                        <div class=\"table-responsive table-striped table-bordered table-hover\">\r\n                                            <nz-table #ajaxTableColumnas class=\"container-table-custom\" nzShowSizeChanger \r\n                                            [nzFrontPagination]=\"true\" [nzBordered]=\"true\" [nzLoading]=\"cargando_columnas\" \r\n                                            [nzData]=\"array_columnas\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th>N°</th>\r\n                                                        <th WIDTH=\"400\">Descripción</th>\r\n                                                        <th WIDTH=\"50\">Acción</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let item of ajaxTableColumnas.data;\">\r\n                                                        <td align=\"center\">{{ (item.idx+1) }}</td>\r\n                                                        <td>\r\n                                                            <nz-form-item>\r\n                                                                <nz-form-control nzErrorTip=\"Debe ingresar la descripción de columna\">\r\n                                                                    <nz-input-group>\r\n                                                                        <input class=\"form-control\" type=\"text\" \r\n                                                                        placeholder=\"--Ingresar descripción de columna--\"\r\n                                                                        [(ngModel)]=\"item.nombre_columna\" >\r\n                                                                    </nz-input-group>\r\n                                                                </nz-form-control>\r\n                                                            </nz-form-item>\r\n                                                        </td>             \r\n                                                        <td align=\"center\" >\r\n                                                            <ng-container>\r\n                                                                <a  class=\"btn btn-icon\" \r\n                                                                    data-tooltip=\"tooltip\" data-placement=\"bottom\" title=\"Eliminar\" >\r\n                                                                    <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                                                                </a>\r\n                                                            </ng-container>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </nz-table>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"error_columnas_matriz\" class=\"has-error\">\r\n                                        <div class=\"ant-form-explain\">\r\n                                            Debe ingresar por lo menos una (1) columna.\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-container>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--END FORMATOS-->\r\n        </div>\r\n    </ng-container>\r\n    <ng-template #extraEndTemplateMatriz>      \r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 text-left\"><button type=\"button\" class=\"btn btn-default-custom\" \r\n                (click)=\"handleCancelarFormularioModal()\"><i class=\"fa fa-ban\" aria-hidden=\"true\"></i> Cancelar</button></div>\r\n            <div class=\"col-sm-6 text-right\"><button nz-button nzType=\"primary\" (click)=\"handleSaveFormularioModal()\"><i class=\"fa fa-save\" aria-hidden=\"true\"></i> Guardar</button></div>\r\n        </div>  \r\n    </ng-template>\r\n</nz-modal>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-pregunta-ext/modal-registro-pregunta-extranet.component.html":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-pregunta-ext/modal-registro-pregunta-extranet.component.html ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-modal \r\n  [(nzVisible)]=\"isVisibleModal\" \r\n  nzTitle=\"{{title}} pregunta\" \r\n  [nzWidth]=\"modal_width\" \r\n  nzClosable=\"false\"\r\n  [nzFooter]=\"extraTemplate\">\r\n    <ng-container >\r\n        <div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12 col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Pregunta</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe ingresar la pregunta!\">\r\n                                <nz-input-group>\r\n                                    <input type=\"text\" [formControl]=\"frmPRG.frmPregunta\" \r\n                                    class=\"form-control\" \r\n                                    placeholder=\"--Ingresar la pregunta--\"\r\n                                    maxlength=\"500\"\r\n                                    [(ngModel)]=\"frm.pregunta\"\r\n                                    (ngModelChange)=\"setJsonName()\">\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Tipo de pregunta</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe seleccionar el tipo de pregunta.\">\r\n                                <nz-input-group>\r\n                                    <nz-select nzAllowClear nzShowSearch nzPlaceHolder=\"--Seleccionar--\"\r\n                                    [(ngModel)]=\"frm.id_tipo_pregunta\"\r\n                                    (ngModelChange)=\"cargar_formato_byTipo($event)\"\r\n                                    [formControl]=\"frmPRG.frmTipoPregunta\">\r\n                                        <ng-container *ngFor=\"let item of array_tipo_pregunta\">\r\n                                            <nz-option [nzValue]=\"item.id_enumerado\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                        </ng-container>\r\n                                    </nz-select>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"frm.id_tipo_pregunta==_TIPO_PREGUNTA.mensaje\" class=\"col-md-4\">\r\n                    <br>\r\n                    <label nz-checkbox  [formControl]=\"frmPRG.frmEsFinalizaEncuesta\" \r\n                    [(ngModel)]=\"frm.es_finaliza_encuesta\" >La pregunta finaliza la encuesta</label> \r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <br>\r\n                    <label nz-checkbox  [formControl]=\"frmPRG.frmEsObligatorio\" \r\n                    [(ngModel)]=\"frm.es_obligatorio\" >La pregunta es obligatorio</label> \r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Categoría</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe seleccionar la categoría!\">\r\n                                <nz-input-group>\r\n                                    <nz-select nzAllowClear nzShowSearch nzPlaceHolder=\"--Seleccionar--\"\r\n                                    [(ngModel)]=\"frm.id_categoria\"\r\n                                    (ngModelChange)=\"filter_sub_categoria($event)\"\r\n                                    [formControl]=\"frmPRG.frmCategoria\">\r\n                                        <ng-container *ngFor=\"let item of array_categoria\">\r\n                                            <nz-option [nzValue]=\"item.id_categoria_extranet\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                        </ng-container>\r\n                                    </nz-select>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\"></div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Sub-Categoría</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe seleccionar la sub categoría!\">\r\n                                <nz-input-group>\r\n                                    <nz-select nzAllowClear nzShowSearch nzPlaceHolder=\"--Seleccionar--\"\r\n                                    [(ngModel)]=\"frm.id_sub_categoria\"\r\n                                    [formControl]=\"frmPRG.frmSubCategoria\">\r\n                                        <ng-container *ngFor=\"let item of array_sub_categoria\">\r\n                                            <nz-option [nzValue]=\"item.id_sub_categoria_extranet\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                        </ng-container>\r\n                                    </nz-select>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"frm.id_tipo_pregunta==_TIPO_PREGUNTA.texto\">\r\n                <div class=\"col-md-6\">\r\n                    <label for=\"\">Indicar cantidad máxima de caracteres</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control>\r\n                                <nz-input-group>\r\n                                    <nz-input-number \r\n                                        [formControl]=\"frmCantidadCarateres\"\r\n                                        [(ngModel)]=\"JSON_NUMERICO_TEXTO.nro_caracteres\" \r\n                                        [nzMin]=\"1\" \r\n                                        [nzMax]=\"1000\" \r\n                                        [nzStep]=\"1\">\r\n                                    </nz-input-number>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"frm.id_tipo_pregunta==_TIPO_PREGUNTA.archivo\">\r\n                <div class=\"col-md-6\">\r\n                    <label for=\"\"><span class=\"span_required\">*</span> Tipo de archivo</label>\r\n                    <div style=\"padding-left: 10px\" *ngFor=\"let item of array_archivo_tipo_archivo; let i = index\">\r\n                        <input style=\"background-color: #dc3545;\r\n                        border-color: #dc3545;\" class=\"\"\r\n                        id=\"{{item.id_enumerado}}\"\r\n                        name=\"checkTipoArchivo\"\r\n                        type=\"checkbox\"\r\n                        [checked]=\"item.selected\"\r\n                        (change)=\"change_archivo_byTipo($event)\"/>&nbsp;\r\n                        <label for=\"{{item.id_enumerado}}\">{{ item.nombre }}</label>\r\n                    </div>\r\n                    <div style=\"padding-left: 10px\" *ngIf=\"error_archivo_tipo_archivo\" class=\"has-error\">\r\n                        <div class=\"ant-form-explain\">\r\n                            Debe seleccionar al menos un tipo de archivo.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row\" *ngIf=\"frm.id_tipo_pregunta==_TIPO_PREGUNTA.fecha\">\r\n                <div class=\"col-md-6\">\r\n                    <label for=\"\"><span class=\"span_required\">*</span> Tipo de fecha</label>\r\n                    <div style=\"padding-left: 10px\" *ngFor=\"let item of array_tipo_fecha; let i = index\">\r\n                        <input style=\"background-color: #dc3545;\r\n                        border-color: #dc3545;\" class=\"\"\r\n                        id=\"{{item.id_enumerado}}\"\r\n                        name=\"checkTipoArchivo\"\r\n                        type=\"checkbox\"\r\n                        [checked]=\"item.selected\"\r\n                        (change)=\"change_fecha_byTipo($event)\"/>&nbsp;\r\n                        <label for=\"{{item.id_enumerado}}\">{{ item.nombre }}</label>\r\n                    </div>\r\n                    <div style=\"padding-left: 10px\" *ngIf=\"error_tipo_fecha\" class=\"has-error\">\r\n                        <div class=\"ant-form-explain\">\r\n                            Debe seleccionar al menos un tipo de fecha.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row\" *ngIf=\"frm.id_tipo_pregunta==_TIPO_PREGUNTA.mensaje\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Mensaje</label>\r\n                            <div style=\"border: 1px solid rgb(217, 217, 217) !important;\">\r\n                            <ckeditor [editor]=\"editor\" [config]=\"configEditor\" [(ngModel)]=\"frm.mensaje\" \r\n                                [formControl]=\"frmPRG.frmMensaje\" \r\n                                (ready)=\"onReady($event)\" (change)=\"onChange($event)\"></ckeditor>\r\n                            </div> \r\n                            <div style=\"padding-left: 10px\" *ngIf=\"error_editor_mensaje\" class=\"has-error\">\r\n                                <div class=\"ant-form-explain\">\r\n                                    Debe ingresar un mensaje.\r\n                                </div>\r\n                            </div>                           \r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\" *ngIf=\"es_con_seccion\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Seleccionar sección</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe seleccionar la sección!\">\r\n                                <nz-input-group>\r\n                                    <nz-select nzAllowClear nzShowSearch nzPlaceHolder=\"--Seleccionar--\"\r\n                                    [(ngModel)]=\"frm.id_encuesta_seccion\"\r\n                                    [formControl]=\"frmPRG.frmSeccion\">\r\n                                        <ng-container *ngFor=\"let item of array_seccion\">\r\n                                            <nz-option [nzValue]=\"item.id_encuesta_seccion\" [nzLabel]=\"item.seccion\"></nz-option>\r\n                                        </ng-container>\r\n                                    </nz-select>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                        <div *ngIf=\"error_seccion\" class=\"has-error\">\r\n                            <div class=\"ant-form-explain\">\r\n                                Debes seleccionar una sección.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                </div>\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Descripción adicional</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control>\r\n                                <nz-input-group>\r\n                                    <textarea [formControl]=\"frmPRG.frmDescripcionAdicional\" \r\n                                    maxlength=\"500\"\r\n                                    nz-input class=\"form-control\" \r\n                                    [(ngModel)]=\"frm.descripcion\" placeholder=\"--Ingrese una breve descripción adicional--\"></textarea>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <div [hidden]=\"frm.id_tipo_pregunta!=_TIPO_PREGUNTA.seleccion_unica\">\r\n                        <label nz-checkbox  [formControl]=\"frmPRG.frmEsCondicional\"\r\n                        [(ngModel)]=\"frm.es_condicional\" >La pregunta es condicional</label> \r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\"></div>\r\n                <div class=\"col-md-4\" [hidden]=\"frmPRG.frmEsCondicional.value\">\r\n                    <label nz-checkbox  [formControl]=\"frmPRG.frmEsCondicionada\" \r\n                    [(ngModel)]=\"frm.es_condicionada\" >La pregunta es condicionada</label> \r\n                </div>\r\n            </div>\r\n            <div class=\"row\" [hidden]=\"!frmPRG.frmEsCondicionada.value || frmPRG.frmEsCondicional.value\">\r\n                <div class=\"col-sm-12\">\r\n                    <br>\r\n                    <nz-collapse>\r\n                        <nz-collapse-panel [nzHeader]=\"selectedPreguntaCondicional?selectedPreguntaCondicional.pregunta:'Seleccione pregunta condicional'\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"\"><span class=\"span_required\">*</span> Pregunta</label>\r\n                                        <nz-form-item>\r\n                                            <nz-form-control nzErrorTip=\"Debe seleccionar de pregunta.\">\r\n                                                <nz-input-group>\r\n                                                    <nz-select nzAllowClear nzShowSearch nzPlaceHolder=\"--Seleccionar--\"\r\n                                                    [(ngModel)]=\"frm.id_pregunta_condicional\"\r\n                                                    (ngModelChange)=\"setPreguntaSelecionadaCondicional($event)\"\r\n                                                    [formControl]=\"frmPRG.frmPreguntaCondicional\">\r\n                                                        <ng-container *ngFor=\"let item of preguntas_condicionales\">\r\n                                                            <nz-option [nzValue]=\"item.id_pregunta\" [nzLabel]=\"item.pregunta\"></nz-option>\r\n                                                        </ng-container>\r\n                                                    </nz-select>\r\n                                                </nz-input-group>\r\n                                            </nz-form-control>\r\n                                        </nz-form-item>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-12\">\r\n                                    <ng-container *ngIf=\"selectedPreguntaCondicional && !loading_condionales\">\r\n                                        <app-app-preview-pregunta \r\n                                        [show_media]=\"false\" \r\n                                        [Pregunta]=\"selectedPreguntaCondicional\" \r\n                                        [respuesta]=\"respuesta_disparadora\"\r\n                                        (onClickSaveRespuesta)=\"handleClickSaveRespuestaCondicionada($event)\"\r\n                                        ></app-app-preview-pregunta>\r\n                                    </ng-container>\r\n                                </div>\r\n                            </div>\r\n                        </nz-collapse-panel>\r\n                    </nz-collapse>\r\n                </div>\r\n            </div>\r\n            <!--BEGIN FORMATOS-->\r\n            <div class=\"row\" style=\"padding-top: 15px\" *ngIf=\"frm.id_tipo_pregunta==_TIPO_PREGUNTA.desplegable_institucional\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Maestro institucional</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe seleccionar el maestro institucional!\">\r\n                                <nz-input-group>\r\n                                    <nz-select nzAllowClear nzShowSearch \r\n                                    [(ngModel)]=\"JSON_DESPLEGABLE_INSTITUCIONAL.tbl_data\"\r\n                                    [formControl]=\"frmMaestroInstitucional\"\r\n                                    [nzDisabled]=\"es_por_defecto\"\r\n                                    nzPlaceHolder=\"--Seleccione--\">\r\n                                        <ng-container *ngFor=\"let item of array_maestro_institucional\">\r\n                                            <nz-option [nzValue]=\"item.id_enumerado\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                        </ng-container>\r\n                                    </nz-select>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" style=\"padding-top: 15px\"  *ngIf=\"frm.id_tipo_pregunta==_TIPO_PREGUNTA.numerico_entero\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Cantidad de digitos entero</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe ingresar los digitos entero!\">\r\n                                <nz-input-group>\r\n                                    <nz-input-number \r\n                                        [formControl]=\"frmCantidadDigitosEnteros\"\r\n                                        [(ngModel)]=\"JSON_NUMERICO_ENTERO.nro_entero\" \r\n                                        [nzMin]=\"1\" \r\n                                        [nzMax]=\"9\" \r\n                                        [nzStep]=\"1\">\r\n                                    </nz-input-number>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\" style=\"padding-top: 15px\" *ngIf=\"frm.id_tipo_pregunta==_TIPO_PREGUNTA.numerico_decimal\" >\r\n                <div class=\"col-sm-6\" >\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Cantidad de digitos entero</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe ingresar los digitos entero!\">\r\n                                <nz-input-group>\r\n                                    <nz-input-number \r\n                                        [formControl]=\"frmCantidadDigitosEnteros\"\r\n                                        [(ngModel)]=\"JSON_NUMERICO_DECIMAL.nro_entero\" \r\n                                        [nzMin]=\"1\" \r\n                                        [nzMax]=\"9\" \r\n                                        [nzStep]=\"1\">\r\n                                    </nz-input-number>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Cantidad de digitos decimales</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe ingresar los digitos decimales!\">\r\n                                <nz-input-group>\r\n                                    <nz-input-number \r\n                                        [formControl]=\"frmCantidadDigitos\"\r\n                                        [(ngModel)]=\"JSON_NUMERICO_DECIMAL.nro_decimal\" \r\n                                        [nzMin]=\"1\" \r\n                                        [nzMax]=\"5\" \r\n                                        [nzStep]=\"1\">\r\n                                    </nz-input-number>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row col-sm-12\" style=\"padding-top: 15px\" *ngIf=\"\r\n            frm.id_tipo_pregunta==_TIPO_PREGUNTA.desplegable_libre\r\n            || frm.id_tipo_pregunta==_TIPO_PREGUNTA.seleccion_unica \r\n            || frm.id_tipo_pregunta==_TIPO_PREGUNTA.seleccion_multiple\">\r\n                <div class=\"panel panel-default panel-custom\">\r\n                    <div class=\"panel-heading\">Alternativas</div>\r\n                    <div class=\"panel-body\">                    \r\n                        <ng-container>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12 text-left\">\r\n                                    <div>\r\n                                        <button class=\"btn btn-primary-custom pull-left\" (click)=\"_add_alternativa_table()\">\r\n                                            <i class=\"fa fa-plus-circle\"></i> Agregar\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-12\">\r\n                                    <div class=\"table-responsive table-striped table-bordered table-hover\">\r\n                                        <nz-table #ajaxTable class=\"container-table-custom\" nzShowSizeChanger \r\n                                        [nzFrontPagination]=\"true\" [nzBordered]=\"true\" [nzLoading]=\"cargando_tabla\" \r\n                                        [nzData]=\"array_alternativa_select\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th>N°</th>\r\n                                                    <th WIDTH=\"450\">Descripción</th>\r\n                                                    <th WIDTH=\"80\">Acción</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let item of ajaxTable.data; let i = index\">\r\n                                                    <td align=\"center\">{{ (item.idx+1) }}</td>\r\n                                                    <td>\r\n                                                        <nz-form-item>\r\n                                                            <nz-form-control nzErrorTip=\"Debe ingresar la descripción!\">\r\n                                                                <nz-input-group>\r\n                                                                    <input class=\"form-control\" type=\"text\" \r\n                                                                    [formControl]=\"frmAlternativaDescripcion[item.idx]\"\r\n                                                                    placeholder=\"--Ingresar descripción de opción--\"\r\n                                                                    [(ngModel)]=\"item.descripcion\" >\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                         </nz-form-item>\r\n                                                    </td>               \r\n                                                    <td align=\"center\" >\r\n                                                        <ng-container>\r\n                                                            <a  class=\"btn btn-icon\" (click)=\"_delete_alternativa_table(item.idx)\" \r\n                                                                data-tooltip=\"tooltip\" data-placement=\"bottom\" title=\"Eliminar\" >\r\n                                                                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                                                            </a>\r\n                                                        </ng-container>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </nz-table>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-12\">\r\n                                    <label nz-checkbox  [formControl]=\"frmPRG.frmEsAgregarAlternativa\" \r\n                                    [(ngModel)]=\"frm.es_agregar_pregunta\" >Permite agregar una alternativa</label> \r\n                                </div>\r\n                            </div>                            \r\n                        </ng-container>\r\n                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" style=\"padding-top: 15px\" *ngIf=\"frm.id_tipo_pregunta==_TIPO_PREGUNTA.matriz\">\r\n                <div class=\"col-md-12\">\r\n                    <label for=\"\"><span class=\"span_required\">*</span> Aplicar las preguntas tipo en</label>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <label class=\"label-radio\">\r\n                        <input nz-radio-button type=\"radio\" name=\"fila-columna\" id=\"1\" value=\"FILA\"\r\n                        [checked]=\"checkedFila\" (change)=\"onChangeFilaColumna('FILA')\">\r\n                        Fila\r\n                    </label>\r\n                    <br>\r\n                    <label class=\"label-radio\">\r\n                        <input nz-radio-button type=\"radio\" name=\"fila-columna\" id=\"2\" value=\"COLUMNA\"\r\n                        [checked]=\"checkedColumna\" (change)=\"onChangeFilaColumna('COLUMNA')\">\r\n                        Columna\r\n                    </label>\r\n                </div>\r\n                <div class=\"col-md-6 col-sm-12\">\r\n                    <div class=\"panel panel-default panel-custom\">\r\n                        <div class=\"panel-heading\">Filas</div>\r\n                        <div class=\"panel-body\">                    \r\n                            <ng-container>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12 text-left\">\r\n                                        <div>\r\n                                            <button class=\"btn btn-primary-custom pull-left\" (click)=\"_add_filas()\">\r\n                                                <i class=\"fa fa-plus-circle\"></i> Agregar\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-12\">\r\n                                        <div class=\"table-responsive table-striped table-bordered table-hover\">\r\n                                            <nz-table #ajaxTableMatriz class=\"container-table-custom\" nzShowSizeChanger \r\n                                            [nzFrontPagination]=\"true\" [nzBordered]=\"true\" [nzLoading]=\"cargando_tabla\" \r\n                                            [nzData]=\"array_filas\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th>N°</th>\r\n                                                        <th WIDTH=\"400\">Descripción</th>\r\n                                                        <th WIDTH=\"50\">Acción</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let item of ajaxTableMatriz.data;\">\r\n                                                        <td align=\"center\">{{ (item.idx+1) }}</td>\r\n                                                        <td>\r\n                                                            <nz-form-item>\r\n                                                                <nz-form-control nzErrorTip=\"Debe ingresar la descripción de fila\">\r\n                                                                    <nz-input-group>\r\n                                                                        <input class=\"form-control\" type=\"text\" \r\n                                                                        [formControl]=\"frmFilaName[item.idx]\"\r\n                                                                        placeholder=\"--Ingresar descripción de fila--\"\r\n                                                                        [(ngModel)]=\"item.nombre_fila\" >\r\n                                                                    </nz-input-group>\r\n                                                                </nz-form-control>\r\n                                                             </nz-form-item>\r\n                                                             <span class=\"btn_span hoverable\" *ngIf=\"checkedFila\" (click)=\"show_pre_modal_fila(item)\" \r\n                                                                style=\"width:30px;text-align:center\" >\r\n                                                                <i class=\"fa fa-ellipsis-v\"></i>\r\n                                                            </span>\r\n                                                        </td>             \r\n                                                        <td align=\"center\" >\r\n                                                            <ng-container>\r\n                                                                <a  class=\"btn btn-icon\" (click)=\"_delete_fila(item.idx)\" \r\n                                                                    data-tooltip=\"tooltip\" data-placement=\"bottom\" title=\"Eliminar\" >\r\n                                                                    <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                                                                </a>\r\n                                                            </ng-container>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </nz-table>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"error_filas_matriz\" class=\"has-error\">\r\n                                        <div class=\"ant-form-explain\">\r\n                                            Debe ingresar por lo menos una (1) fila.\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-container>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6 col-sm-12\">\r\n                    <div class=\"panel panel-default panel-custom\">\r\n                        <div class=\"panel-heading\">Columnas</div>\r\n                        <div class=\"panel-body\">                    \r\n                            <ng-container>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12 text-left\">\r\n                                        <div>\r\n                                            <button class=\"btn btn-primary-custom pull-left\" (click)=\"add_columnas()\">\r\n                                                <i class=\"fa fa-plus-circle\"></i> Agregar\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-12\">\r\n                                        <div class=\"table-responsive table-striped table-bordered table-hover\">\r\n                                            <nz-table #ajaxTableColumnas class=\"container-table-custom\" nzShowSizeChanger \r\n                                            [nzFrontPagination]=\"true\" [nzBordered]=\"true\" [nzLoading]=\"cargando_columnas\" \r\n                                            [nzData]=\"array_columnas\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th>N°</th>\r\n                                                        <th WIDTH=\"400\">Descripción</th>\r\n                                                        <th WIDTH=\"50\">Acción</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let item of ajaxTableColumnas.data;\">\r\n                                                        <td align=\"center\">{{ (item.idx+1) }}</td>\r\n                                                        <td>\r\n                                                            <nz-form-item>\r\n                                                                <nz-form-control nzErrorTip=\"Debe ingresar la descripción de columna\">\r\n                                                                    <nz-input-group>\r\n                                                                        <input class=\"form-control\" type=\"text\" \r\n                                                                        [formControl]=\"frmColumnaName[item.idx]\"\r\n                                                                        placeholder=\"--Ingresar descripción de columna--\"\r\n                                                                        [(ngModel)]=\"item.nombre_columna\" >\r\n                                                                    </nz-input-group>\r\n                                                                </nz-form-control>\r\n                                                            </nz-form-item>\r\n                                                            <span class=\"btn_span hoverable\" *ngIf=\"checkedColumna\" (click)=\"show_pre_modal_columna(item)\" \r\n                                                                style=\"width:30px;text-align:center\" >\r\n                                                                <i class=\"fa fa-ellipsis-v\"></i>\r\n                                                            </span>\r\n                                                        </td>             \r\n                                                        <td align=\"center\" >\r\n                                                            <ng-container>\r\n                                                                <a  class=\"btn btn-icon\" (click)=\"_delete_columna(item.idx)\" \r\n                                                                    data-tooltip=\"tooltip\" data-placement=\"bottom\" title=\"Eliminar\" >\r\n                                                                    <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                                                                </a>\r\n                                                            </ng-container>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </nz-table>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"error_columnas_matriz\" class=\"has-error\">\r\n                                        <div class=\"ant-form-explain\">\r\n                                            Debe ingresar por lo menos una (1) columna.\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-container>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--END FORMATOS-->\r\n            <div class=\"row\">\r\n                <div class=\"col-md-5\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Indicar que tipo de archivo utilizará</label>\r\n                        <div>\r\n                            <nz-form-item>\r\n                                <nz-form-control>\r\n                                    <nz-input-group>\r\n                                        <nz-select nzAllowClear nzShowSearch nzPlaceHolder=\"--Seleccionar--\"\r\n                                        [(ngModel)]=\"frm.id_tipo_archivo\"\r\n                                        (ngModelChange)=\"set_tipo_file()\"\r\n                                        [formControl]=\"frmPRG.frmTipoArchivo\">\r\n                                            <ng-container *ngFor=\"let item of array_tipo_file\">\r\n                                                <nz-option [nzValue]=\"item.id_enumerado\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                            </ng-container>\r\n                                        </nz-select>\r\n                                    </nz-input-group>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-1\"></div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\"[hidden]=\"!show_file_uploader\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Adjuntar imagen de explicación:</label>\r\n                        <div>\r\n                            <app-file-uploader-custom  \r\n                            [fileInfo]=\"true\"  \r\n                            [id]=\"frm.iden_imagen\" \r\n                            [(Files)]=\"archivo\" \r\n                            [(Uploading)]=\"estaGuardando\"\r\n                            [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                            [esBorrador]=\"false\" \r\n                            [extensionAceptados]=\"_extensionAceptados\"\r\n                            [tiposMimePermitidos]=\"imagen_MimePermitidos\"\r\n                            (FileChange)=\"set_file_iden($event)\"\r\n                            (onRemovedIdFile)=\"handleRemovedFileExplicacion($event)\"\r\n                            [view_width]=\"600\"\r\n                            [puedeVerArchivo]=\"true\"\r\n                                    [url]=\"url\" \r\n                                    [loading]=\"estaGuardando\">\r\n                            </app-file-uploader-custom>\r\n                            <div *ngIf=\"error_imagen\" class=\"has-error\">\r\n                                <div class=\"ant-form-explain\">\r\n                                    Debe adjuntar una imagen.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\" [hidden]=\"!show_url\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Url de video de explicación de la plataforma:</label>\r\n                        <div>\r\n                            <input type=\"text\" class=\"form-control\" \r\n                            maxlength=\"500\"\r\n                            (ngModelChange)=\"this.error_video=false;\"\r\n                            placeholder=\"--https://www.youtube.com/watch?v=FM7MFYoylVs--\" \r\n                            [(ngModel)]=\"frm.url_video\">\r\n                        </div>\r\n                        <div *ngIf=\"error_video\" class=\"has-error\">\r\n                            <div class=\"ant-form-explain\">\r\n                                Debe ingresar un url válido.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n    <ng-template #extraTemplate>      \r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 text-left\"><button type=\"button\" class=\"btn btn-default-custom\" (click)=\"handleCancelarFormularioModal()\"><i class=\"fa fa-ban\" aria-hidden=\"true\"></i> Cancelar</button></div>\r\n            <div class=\"col-sm-6 text-right\"><button nz-button nzType=\"primary\" (click)=\"handleSaveFormularioModal()\"><i class=\"fa fa-save\" aria-hidden=\"true\"></i> Guardar</button></div>\r\n        </div>  \r\n    </ng-template>\r\n</nz-modal>\r\n\r\n<nz-modal \r\n  [(nzVisible)]=\"vista_tipo\" \r\n  nzTitle=\"Tipo de entrada\" \r\n  [nzWidth]=\"250\" \r\n  (nzOnCancel)=\"cerrar_pre_modal()\"\r\n  [nzFooter]=\"extraTemplatePre\">\r\n    <ng-container>\r\n        <div>\r\n            <p class=\"hoverable_txt\" (click)=\"_show_modal_matriz(1)\" [ngClass]=\"{'is_selected_tipo': selected_tipo_forma==1?true:false}\">Desplegable institucional</p>\r\n            <p class=\"hoverable_txt\" (click)=\"_show_modal_matriz(2)\" [ngClass]=\"{'is_selected_tipo': selected_tipo_forma==2?true:false}\">Desplegable libre</p>\r\n            <p class=\"hoverable_txt\" (click)=\"_show_modal_matriz(3)\" [ngClass]=\"{'is_selected_tipo': selected_tipo_forma==3?true:false}\">Númerico entero</p>\r\n            <p class=\"hoverable_txt\" (click)=\"_show_modal_matriz(4)\" [ngClass]=\"{'is_selected_tipo': selected_tipo_forma==4?true:false}\">Númerico decimal</p>\r\n            <p class=\"hoverable_txt\" (click)=\"_show_modal_matriz(5)\" [ngClass]=\"{'is_selected_tipo': selected_tipo_forma==5?true:false}\">Selección única</p>\r\n            <p class=\"hoverable_txt\" (click)=\"_show_modal_matriz(6)\" [ngClass]=\"{'is_selected_tipo': selected_tipo_forma==6?true:false}\">Selección multiple</p>\r\n\r\n            <p class=\"hoverable_txt\" (click)=\"_show_modal_matriz(9)\" [ngClass]=\"{'is_selected_tipo': selected_tipo_forma==9?true:false}\">Fecha</p>\r\n            <p class=\"hoverable_txt\" (click)=\"_show_modal_matriz(10)\" [ngClass]=\"{'is_selected_tipo': selected_tipo_forma==10?true:false}\">Texto</p>\r\n            <p class=\"hoverable_txt\" (click)=\"_show_modal_matriz(11)\" [ngClass]=\"{'is_selected_tipo': selected_tipo_forma==11?true:false}\">Archivo</p>\r\n\r\n          </div>\r\n    </ng-container>\r\n    <ng-template #extraTemplatePre>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 text-left\"><button type=\"button\" class=\"btn btn-default-custom\" (click)=\"cerrar_pre_modal()\"><i class=\"fa fa-ban\" aria-hidden=\"true\"></i> Cerrar</button></div>\r\n        </div>  \r\n    </ng-template>\r\n</nz-modal>\r\n\r\n\r\n\r\n<ng-container *ngIf=\"show_modal_matriz\">\r\n    <app-modal-registro-columna-ext\r\n        [isVisibleModalMatriz]=\"show_modal_matriz\" \r\n        [modal_width]=\"_modal_width\"\r\n        [title]=\"nombre_columna\"\r\n        [forma]=\"selected_forma\"\r\n        [array_tipo_pregunta]=\"array_tipo_pregunta\"\r\n        [array_maestro_institucional]=\"array_maestro_institucional\"\r\n        (onCloseModalMatriz)=\"handleOnCloseModalMatriz($event)\"\r\n        (onSaveDataForma)=\"handleOnSaveFormaColumnaMatriz($event)\">\r\n    </app-modal-registro-columna-ext>\r\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-seccion-ext/modal-registro-seccion-extranet.component.html":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-seccion-ext/modal-registro-seccion-extranet.component.html ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-scale-multiple\">\r\n    <p style=\"font-size: 20px; color: white\">Procesando información, por favor no cierre la ventana.</p>\r\n    </ngx-spinner>\r\n<nz-modal \r\n  [(nzVisible)]=\"isVisibleModal\" \r\n  nzTitle=\"{{title}} sección\" \r\n  [nzWidth]=\"modal_width\" \r\n  nzClosable=\"false\"\r\n  [nzFooter]=\"extraTemplate\">\r\n    <ng-container >\r\n        <div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12 col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Nombre de la sección</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe ingresar el nombre de la sección!\">\r\n                                <nz-input-group>\r\n                                    <input type=\"text\" [formControl]=\"frmSEC.frmSeccion\" \r\n                                    class=\"form-control\" \r\n                                    placeholder=\"--Ingresar sección--\"\r\n                                    maxlength=\"500\"\r\n                                    [(ngModel)]=\"frm.seccion\">    \r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n    <ng-template #extraTemplate>      \r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 text-left\"><button type=\"button\" class=\"btn btn-default-custom\" (click)=\"handleCancelarFormularioModal()\"><i class=\"fa fa-ban\" aria-hidden=\"true\"></i> Cancelar</button></div>\r\n            <div class=\"col-sm-6 text-right\"><button nz-button nzType=\"primary\" (click)=\"handleSaveFormularioModal()\"><i class=\"fa fa-save\" aria-hidden=\"true\"></i> Guardar</button></div>\r\n        </div>  \r\n    </ng-template>\r\n</nz-modal>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-reordenar-pregunta-ext/modal-reordenar-pregunta-ext.component.html":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-reordenar-pregunta-ext/modal-reordenar-pregunta-ext.component.html ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-modal \r\n  [(nzVisible)]=\"isVisibleModal\" \r\n  nzTitle=\"Reordenar preguntas\" \r\n  nzClosable=\"false\"\r\n  [nzWidth]=\"850\"\r\n  [nzFooter]=\"extraTemplateOrder\">\r\n    <ng-container>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <p><b>Selecciona la pregunta y arrástrala para ubicarlo en el orden que desees</b></p>\r\n            </div>\r\n            \r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                    <table class=\"table table table-custom table-bordered\">\r\n                        <thead>\r\n                          <tr>\r\n                            <th scope=\"col\">N°</th>\r\n                            <th scope=\"col\">PREGUNTA</th>\r\n                            <th scope=\"col\">TIPO</th>\r\n                            <th scope=\"col\">CONDICIONAL</th>\r\n                            <th scope=\"col\">CONDICIONADA</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody cdkDropList (cdkDropListDropped)=\"drop($event)\">\r\n                          <tr *ngFor=\"let item of PreguntasList;let i = index\" cdkDrag >\r\n                            <th>\r\n                              {{i+1}}\r\n                            </th>\r\n                            <th>{{item.pregunta}}</th>\r\n                                    <th>{{item.tipo_pregunta}}</th>\r\n                                    <th>{{item.condicional}}</th>\r\n                                    <th>{{item.condicionada}}</th> \r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n            </div>\r\n            \r\n        </div>\r\n    </ng-container>\r\n    <ng-template #extraTemplateOrder>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 text-left\"><button type=\"button\" class=\"btn btn-default-custom\" (click)=\"handleCancelarModal()\"><i class=\"fa fa-ban\" aria-hidden=\"true\"></i> Cancelar</button></div>\r\n            <div class=\"col-sm-6 text-right\"><button type=\"button\" class=\"btn btn-primary-custom\" (click)=\"handleSaveModal()\"><i class=\"fa fa-save\" aria-hidden=\"true\"></i> Guardar</button></div>\r\n        </div>  \r\n    </ng-template>\r\n</nz-modal>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-reordenar-pregunta-sec-ext/modal-reordenar-pregunta-sec-ext.component.html":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-reordenar-pregunta-sec-ext/modal-reordenar-pregunta-sec-ext.component.html ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-modal \r\n  [(nzVisible)]=\"isVisibleModal\" \r\n  nzTitle=\"Reordenar preguntas\" \r\n  nzClosable=\"false\"\r\n  [nzWidth]=\"850\"\r\n  [nzFooter]=\"extraTemplateOrder\">\r\n    <ng-container>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <p><b>Selecciona la pregunta y arrástrala para ubicarlo en el orden que desees</b></p>\r\n            </div>            \r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <table class=\"table table table-custom table-bordered\">\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\" width=\"10\">N°</th>\r\n                  <th scope=\"col\" width=\"350\">PREGUNTA</th>\r\n                  <th scope=\"col\" width=\"200\">TIPO</th>\r\n                  <th scope=\"col\" width=\"100\">CONDICIONAL</th>\r\n                  <th scope=\"col\" width=\"100\">CONDICIONADA</th>\r\n                </tr>\r\n              </thead>\r\n            </table>\r\n            <table class=\"table table table-custom table-bordered\">\r\n              <tbody *ngFor=\"let sec of arraySecciones;let i = index\">\r\n                <tr>\r\n                  <th colspan=\"5\" style=\"background: #E5E5E5;\">Sección {{sec.orden}}: {{sec.seccion}}</th> \r\n                </tr>\r\n                <tr>\r\n                  <table class=\"table table table-custom table-bordered\">\r\n                    <tbody cdkDropList id=\"{{ 'cdk-drop-list-' + sec.orden }}\" (cdkDropListDropped)=\"drop($event)\">\r\n                      <tr *ngFor=\"let item of sec.preguntas;let i = index\" cdkDrag>\r\n                        <th width=\"10\">\r\n                          {{i+1}}\r\n                        </th>\r\n                        <th width=\"360\">{{item.pregunta}}</th>\r\n                                <th width=\"150\">{{item.tipo_pregunta}}</th>\r\n                                <th width=\"100\">{{item.condicional}}</th>\r\n                                <th width=\"100\">{{item.condicionada}}</th> \r\n                      </tr>\r\n                    </tbody>   \r\n                  </table>                  \r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>            \r\n        </div>\r\n    </ng-container>\r\n    <ng-template #extraTemplateOrder>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 text-left\"><button type=\"button\" class=\"btn btn-default-custom\" (click)=\"handleCancelarModal()\"><i class=\"fa fa-ban\" aria-hidden=\"true\"></i> Cancelar</button></div>\r\n            <div class=\"col-sm-6 text-right\"><button type=\"button\" class=\"btn btn-primary-custom\" (click)=\"handleSaveModal()\"><i class=\"fa fa-save\" aria-hidden=\"true\"></i> Guardar</button></div>\r\n        </div>  \r\n    </ng-template>\r\n</nz-modal>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-reordenar-seccion-ext/modal-reordenar-seccion-ext.component.html":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-reordenar-seccion-ext/modal-reordenar-seccion-ext.component.html ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-modal \r\n  [(nzVisible)]=\"isVisibleModal\" \r\n  nzTitle=\"Reordenar secciones\" \r\n  nzClosable=\"false\"\r\n  [nzWidth]=\"850\"\r\n  [nzFooter]=\"extraTemplateOrder\">\r\n    <ng-container>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <p><b>Selecciona la sección y arrástrala para ubicarlo en el orden que desees</b></p>\r\n            </div>\r\n            \r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                    <table class=\"table table table-custom table-bordered\">\r\n                        <thead>\r\n                          <tr>\r\n                            <th scope=\"col\">N°</th>\r\n                            <th scope=\"col\">NOMBRE DE SECCIÓN</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody cdkDropList (cdkDropListDropped)=\"drop($event)\">\r\n                          <tr *ngFor=\"let item of SeccionesList;let i = index\" cdkDrag >\r\n                            <th>\r\n                              {{i+1}}\r\n                            </th>\r\n                            <th>{{item.seccion}}</th>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n            </div>\r\n            \r\n        </div>\r\n    </ng-container>\r\n    <ng-template #extraTemplateOrder>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 text-left\"><button type=\"button\" class=\"btn btn-default-custom\" (click)=\"handleCancelarModal()\"><i class=\"fa fa-ban\" aria-hidden=\"true\"></i> Cancelar</button></div>\r\n            <div class=\"col-sm-6 text-right\"><button type=\"button\" class=\"btn btn-primary-custom\" (click)=\"handleSaveModal()\"><i class=\"fa fa-save\" aria-hidden=\"true\"></i> Guardar</button></div>\r\n        </div>  \r\n    </ng-template>\r\n</nz-modal>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/notificaciones-extranet/notificaciones-extranet.component.html":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/notificaciones-extranet/notificaciones-extranet.component.html ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ng-container>\r\n    <div class=\"row\" style=\"padding-bottom: 15px;\">\r\n        <div class=\"col-md-6 col-sm-12 text-left\">\r\n            <button class=\"btn btn-primary-custom\" (click)=\"md_add_edit_notificacion()\">\r\n                <i class=\"fa fa-plus-circle\"></i> Agregar notificación\r\n            </button>\r\n        </div>        \r\n    </div>\r\n</ng-container>\r\n<ng-container>\r\n    <div class=\"table-responsive table-striped table-bordered table-hover\">\r\n        <nz-table #ajaxTable class=\"container-table-custom\" nzShowSizeChanger [nzFrontPagination]=\"true\"\r\n        [nzBordered]=\"true\" [nzData]=\"NotificacionesList\" [nzLoading]=\"cargando_tabla\">\r\n\r\n            <thead>\r\n                <tr>\r\n                    <th width=\"10\">N°</th>\r\n                    <th width=\"350\">TÍTULO DE NOTIFICACIÓN</th>\r\n                    <th width=\"50\">FECHA</th>\r\n                    <th width=\"150\">DIRIGIDO A</th>\r\n                    <th width=\"100\">ACCIONES</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of ajaxTable.data; let i = index\">\r\n                    <td>{{ item.idx+1 }}</td>\r\n                    <td>{{ item.titulo}}</td>     \r\n                    <td>{{ item.fecha_notificacion | date: 'dd/MM/yyyy hh:mm a'}}</td>     \r\n                    <td>{{ item.dirigido_texto}}</td> \r\n                    <td align=\"center\" >\r\n                        <ng-container>\r\n                            <a class=\"btn btn-icon\"  data-tooltip=\"tooltip\" data-placement=\"bottom\" \r\n                            title=\"Editar sección\" (click)=\"md_add_edit_notificacion(item.idx,item.por_defecto)\">\r\n                                <i class=\"fa fa-edit\" aria-hidden=\"true\"></i>\r\n                            </a>\r\n                        </ng-container>\r\n                        <ng-container>\r\n                            <a  class=\"btn btn-icon\" data-tooltip=\"tooltip\" data-placement=\"bottom\" title=\"Eliminar sección\" \r\n                            (click)=\"md_delete_notificacion(item.idx)\" >\r\n                                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                            </a>\r\n                        </ng-container>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</ng-container>\r\n<div class=\"row\" style=\"margin-top: 15px;\">\r\n    <div class=\"col-sm-6 text-left\">\r\n        <button type=\"button\" class=\"btn btn-default-custom\" (click)=\"send_to_datos()\">\r\n            Retornar\r\n        </button>\r\n    </div>\r\n</div>\r\n\r\n\r\n<ng-container *ngIf=\"show_modal_notificacion\">\r\n    <app-modal-registro-notificacion-extranet\r\n        [isVisibleModal]=\"show_modal_notificacion\" \r\n        [title]=\"title_modal\"\r\n        [notificacion]=\"selected_notificacion\"\r\n        [is_first]=\"is_first\"\r\n        [id_encuesta]=\"id_encuesta\"\r\n        (onCloseModal)=\"handleOnCloseModal($event)\"\r\n        (onSaveDataSeccion)=\"handleOnSaveDataSeccion($event)\">\r\n    </app-modal-registro-notificacion-extranet>\r\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/preguntas-encuesta-extranet/preguntas-encuesta-extranet.component.html":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/preguntas-encuesta-extranet/preguntas-encuesta-extranet.component.html ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ng-container>\r\n    <div class=\"row\" style=\"padding-bottom: 15px;\">\r\n        <div class=\"col-md-6 col-sm-12 text-left\">\r\n            <button class=\"btn btn-primary-custom\" (click)=\"md_add_edit_pregunta()\">\r\n                <i class=\"fa fa-plus-circle\"></i> Agregar pregunta\r\n            </button>\r\n        </div>\r\n        <div class=\"col-md-6 col-sm-12 text-right\">            \r\n            <button class=\"btn btn-primary-custom\" (click)=\"md_reordenar_pregunta()\">\r\n                <i class=\"fa fa-list\"></i> Reordenar pregunta\r\n            </button>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n<ng-container>\r\n    <div class=\"table-responsive table-striped table-bordered table-hover\">\r\n        <nz-table #ajaxTable class=\"container-table-custom\" nzShowSizeChanger [nzFrontPagination]=\"true\"\r\n        [nzBordered]=\"true\" [nzData]=\"PreguntasList\" [nzLoading]=\"cargando_tabla\">\r\n\r\n            <thead>\r\n                <tr>\r\n                    <th width=\"90\">N°</th>\r\n                    <th width=\"550\">Pregunta</th>\r\n                    <th>Tipo</th>\r\n                    <th>Categoría</th>\r\n                    <th>Sub-Categoría</th>\r\n                    <th width=\"100\">Acciones</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of ajaxTable.data; let i = index\">\r\n                    <td align=\"center\">{{ item.idx+1 }}</td>\r\n                    <td>{{ item.pregunta}}</td>\r\n                    <td>{{ item.tipo_pregunta}}</td>\r\n                    <td>{{ item.categoria}}</td>\r\n                    <td>{{ item.sub_categoria}}</td>          \r\n                    <td align=\"center\" >\r\n                        <ng-container>\r\n                            <a class=\"btn btn-icon\"  data-tooltip=\"tooltip\" data-placement=\"bottom\" \r\n                            title=\"Editar pregunta\" (click)=\"md_add_edit_pregunta(item.idx,item.por_defecto)\">\r\n                                <i class=\"fa fa-edit\" aria-hidden=\"true\"></i>\r\n                            </a>\r\n                        </ng-container>\r\n                        <ng-container>\r\n                            <a  class=\"btn btn-icon\" data-tooltip=\"tooltip\" data-placement=\"bottom\" title=\"Eliminar pregunta\" \r\n                            (click)=\"md_delete_pregunta(item.idx)\" >\r\n                                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                            </a>\r\n                        </ng-container>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</ng-container>\r\n<div class=\"row\" style=\"margin-top: 15px;\">\r\n    <div class=\"col-sm-6 text-left\">\r\n        <button type=\"button\" class=\"btn btn-default-custom\" (click)=\"send_to_datos()\">\r\n            Retornar\r\n        </button>\r\n    </div>\r\n    <div class=\"col-sm-6 text-right\">\r\n        <!--<button type=\"button\" class=\"btn btn-primary-custom\" (click)=\"save_update_preguntas()\" ><i class=\"fa fa-save\"></i> Guardar</button>\r\n        &nbsp;&nbsp;-->\r\n        <button type=\"button\" *ngIf=\"encuesta_data.encuesta.es_todos\" class=\"btn btn-primary-custom\" (click)=\"save_update_preguntas(true,false)\" ><i class=\"fa fa-paper-plane\"></i> Publicar</button>\r\n        <button type=\"button\" *ngIf=\"!encuesta_data.encuesta.es_todos\" class=\"btn btn-primary-custom\" (click)=\"save_update_preguntas(false,true)\" ><i class=\"fa fa-paper-plane\"></i> Siguiente</button>\r\n    </div>\r\n</div>\r\n\r\n\r\n<ng-container *ngIf=\"show_modal_pregunta\">\r\n    <app-modal-registro-pregunta-extranet\r\n        [isVisibleModal]=\"show_modal_pregunta\" \r\n        [title]=\"title_modal\"\r\n        [pregunta]=\"selected_pregunta\"\r\n        [preguntas_condicionales]=\"PreguntasList_Condicionales\"\r\n        [is_first]=\"is_first\"\r\n        [es_por_defecto]=\"es_por_defecto\"\r\n        [id_encuesta]=\"id_encuesta\"\r\n        [es_con_seccion]=\"es_con_seccion\"\r\n        (onCloseModal)=\"handleOnCloseModal($event)\"\r\n        (onSaveDataPregunta)=\"handleOnSaveDataPregunta($event)\">\r\n    </app-modal-registro-pregunta-extranet>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"show_modal_reordenar_pregunta\">\r\n    <app-modal-reordenar-pregunta-ext\r\n        [isVisibleModal]=\"show_modal_reordenar_pregunta\" \r\n        [id_encuesta]=\"id_encuesta\"\r\n        (onCloseModal)=\"handleOnCloseReordenarModal($event)\"\r\n        (onSaveOrdenamiento)=\"handleOnSaveOrdenamiento($event)\">\r\n    </app-modal-reordenar-pregunta-ext>\r\n</ng-container>\r\n<ng-container *ngIf=\"show_modal_reordenar_pregunta_seccion\">\r\n    <app-modal-reordenar-pregunta-sec-ext\r\n        [isVisibleModal]=\"show_modal_reordenar_pregunta_seccion\" \r\n        [id_encuesta]=\"id_encuesta\"\r\n        (onCloseModal)=\"handleOnCloseReordenarModal($event)\"\r\n        (onSaveOrdenamiento)=\"handleOnSaveOrdenamiento($event)\">\r\n    </app-modal-reordenar-pregunta-sec-ext>\r\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/secciones-pregunta-extranet/secciones-pregunta-extranet.component.html":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/secciones-pregunta-extranet/secciones-pregunta-extranet.component.html ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ng-container>\r\n    <div class=\"row\" style=\"padding-bottom: 15px;\">\r\n        <div class=\"col-md-6 col-sm-12 text-left\">\r\n            <button class=\"btn btn-primary-custom\" (click)=\"md_add_edit_seccion()\">\r\n                <i class=\"fa fa-plus-circle\"></i> Agregar sección\r\n            </button>\r\n        </div>\r\n        <div class=\"col-md-6 col-sm-12 text-right\">            \r\n            <button class=\"btn btn-primary-custom\" (click)=\"md_reordenar_seccion()\">\r\n                <i class=\"fa fa-list\"></i> Reordenar secciones\r\n            </button>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n<ng-container>\r\n    <div class=\"table-responsive table-striped table-bordered table-hover\">\r\n        <nz-table #ajaxTable class=\"container-table-custom\" nzShowSizeChanger [nzFrontPagination]=\"true\"\r\n        [nzBordered]=\"true\" [nzData]=\"SeccionesList\" [nzLoading]=\"cargando_tabla\">\r\n\r\n            <thead>\r\n                <tr>\r\n                    <th width=\"10\">N°</th>\r\n                    <th width=\"550\">NOMBRE DE SECCIÓN</th>\r\n                    <th width=\"100\">ACCIONES</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of ajaxTable.data; let i = index\">\r\n                    <td>{{ item.orden }}</td>\r\n                    <td>{{ item.seccion}}</td>         \r\n                    <td align=\"center\" >\r\n                        <ng-container>\r\n                            <a class=\"btn btn-icon\"  data-tooltip=\"tooltip\" data-placement=\"bottom\" \r\n                            title=\"Editar sección\" (click)=\"md_add_edit_seccion(item.idx,item.por_defecto)\">\r\n                                <i class=\"fa fa-edit\" aria-hidden=\"true\"></i>\r\n                            </a>\r\n                        </ng-container>\r\n                        <ng-container>\r\n                            <a  class=\"btn btn-icon\" data-tooltip=\"tooltip\" data-placement=\"bottom\" title=\"Eliminar sección\" \r\n                            (click)=\"md_delete_seccion(item.idx)\" >\r\n                                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                            </a>\r\n                        </ng-container>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</ng-container>\r\n<div class=\"row\" style=\"margin-top: 15px;\">\r\n    <div class=\"col-sm-6 text-left\">\r\n        <button type=\"button\" class=\"btn btn-default-custom\" (click)=\"send_to_datos()\">\r\n            Retornar\r\n        </button>\r\n    </div>\r\n    <div class=\"col-sm-6 text-right\">\r\n        <!-- <button type=\"button\" *ngIf=\"encuesta_data.encuesta.es_todos\" class=\"btn btn-primary-custom\" (click)=\"save_update_preguntas(true,false)\" ><i class=\"fa fa-paper-plane\"></i> Publicar</button> -->\r\n        <button type=\"button\" *ngIf=\"!encuesta_data.encuesta.es_todos\" class=\"btn btn-primary-custom\" (click)=\"save_update_preguntas(false,true)\" ><i class=\"fa fa-paper-plane\"></i> Siguiente</button>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<ng-container *ngIf=\"show_modal_seccion\">\r\n    <app-modal-registro-seccion-extranet\r\n        [isVisibleModal]=\"show_modal_seccion\" \r\n        [title]=\"title_modal\"\r\n        [seccion]=\"selected_seccion\"\r\n        [is_first]=\"is_first\"\r\n        [id_encuesta]=\"id_encuesta\"\r\n        (onCloseModal)=\"handleOnCloseModal($event)\"\r\n        (onSaveDataSeccion)=\"handleOnSaveDataSeccion($event)\">\r\n    </app-modal-registro-seccion-extranet>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"show_modal_reordenar_seccion\">\r\n    <app-modal-reordenar-seccion-ext\r\n        [isVisibleModal]=\"show_modal_reordenar_seccion\" \r\n        [id_encuesta]=\"id_encuesta\"\r\n        (onCloseModal)=\"handleOnCloseReordenarModal($event)\"\r\n        (onSaveOrdenamiento)=\"handleOnSaveOrdenamiento($event)\">\r\n    </app-modal-reordenar-seccion-ext>\r\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/configuracion-encuesta-extranet.component.html":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/configuracion-encuesta-extranet.component.html ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-scale-multiple\">\r\n<p style=\"font-size: 20px; color: white\">Procesando información, por favor no cierre la ventana.</p>\r\n</ngx-spinner>\r\n<br>\r\n<h1 class=\"title-custom\">Configuración de encuesta</h1>\r\n<hr class=\"mt-0\">\r\n<ng-container >\r\n    <nz-tabset (nzSelectedIndexChange)=\"show_tab_by_index($event)\" [nzSelectedIndex]=\"index_tab\">\r\n        <nz-tab *ngFor=\"let tab of tabs\" nzClosable [nzTitle]=\"tab.title\" [nzDisabled]=\"tab.disabled\"></nz-tab>\r\n    </nz-tabset>\r\n\r\n    \r\n    <app-datos-encuesta-extranet *ngIf=\"index_tab==0\" [encuesta_data]=\"encuesta_data\" \r\n    (onSaveUpdateEncuesta)=\"handleSaveUpdateEncuesta($event)\"\r\n    (onChangeAllPersonalStatus)=\"handleChangeAllPersonalStatus($event)\"></app-datos-encuesta-extranet>\r\n\r\n    <app-secciones-pregunta-extranet *ngIf=\"index_tab==1\" [encuesta_data]=\"encuesta_data\" \r\n    [id_encuesta]=\"id_encuesta\"\r\n    (onPublishSuccess)=\"handlePublishSuccess($event)\"\r\n    (onGoDatos)=\"handleGoDatosSecciones($event)\"\r\n    (onGoEncuestados)=\"handleGoEncuestados($event)\"></app-secciones-pregunta-extranet>\r\n\r\n    <app-preguntas-encuesta-extranet *ngIf=\"index_tab==2\" [encuesta_data]=\"encuesta_data\" \r\n    [id_encuesta]=\"id_encuesta\"\r\n    (onPublishSuccess)=\"handlePublishSuccess($event)\"\r\n    (onGoDatos)=\"handleGoDatos($event)\"\r\n    (onGoEncuestados)=\"handleGoEncuestados($event)\"></app-preguntas-encuesta-extranet>\r\n\r\n    <app-notificaciones-extranet *ngIf=\"index_tab==3\"\r\n    [encuesta_data]=\"encuesta_data\" \r\n    [id_encuesta]=\"id_encuesta\"\r\n    (onPublishSuccess)=\"handlePublishSuccess($event)\"\r\n    (onGoDatos)=\"handleGoDatosNotificaciones($event)\"\r\n    (onGoEncuestados)=\"handleGoEncuestados($event)\"></app-notificaciones-extranet>\r\n    \r\n    <app-encuestados-encuesta-extranet *ngIf=\"index_tab==4\"\r\n    (onGoPreguntas)=\"handleGoPreguntas($event)\"\r\n    [id_encuesta]=\"id_encuesta\"\r\n    (onPublishSuccess)=\"handlePublishSuccess($event)\"></app-encuestados-encuesta-extranet>\r\n    \r\n\r\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/encuestas-extranet.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/encuestas-extranet.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-scale-multiple\">\r\n<p style=\"font-size: 20px; color: white\">Procesando información, por favor no cierre la ventana.</p>\r\n</ngx-spinner>\r\n<br>\r\n<h1 class=\"title-custom\">Encuestas</h1>\r\n<hr class=\"mt-0\">\r\n<ng-container >\r\n    <form  >\r\n        <div class=\"panel panel-default panel-custom\">\r\n            <div class=\"panel-heading\">Buscar registros</div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"\">Título:</label>\r\n                            <div>\r\n                                <input type=\"text\" [formControl]=\"formMACRO.Titulo\" class=\"form-control\" placeholder=\"Título de encuesta\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\"></div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"\">Estado:</label>\r\n                            <div>\r\n                                <nz-select nzAllowClear nzShowSearch nzPlaceHolder=\"--Todos--\"\r\n                                [formControl]=\"formMACRO.Estado\">\r\n                                    <ng-container *ngFor=\"let item of array_estado\">\r\n                                        <nz-option [nzValue]=\"item.id_enumerado\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                    </ng-container>\r\n                                </nz-select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"\">Fecha de inicio de vigencia:</label>\r\n                            <div>\r\n                                <nz-date-picker \r\n                                    [formControl]=\"formMACRO.FechaInicio\" \r\n                                    nzFormat=\"dd/MM/yyyy\">\r\n                                </nz-date-picker>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\"></div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"\">Fecha de fin de vigencia:</label>\r\n                            <div>\r\n                                <nz-date-picker\r\n                                    [formControl]=\"formMACRO.FechaFin\" \r\n                                    [(ngModel)]=\"form.fecha_fin\"\r\n                                    nzFormat=\"dd/MM/yyyy\">\r\n                                </nz-date-picker>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-footer text-center\">\r\n                <button type=\"button\" class=\"btn btn-default-custom\" (click)=\"clean_all()\"><i class=\"fa fa-eraser\"\r\n                    aria-hidden=\"true\"></i> Limpiar</button>\r\n                &nbsp;&nbsp;\r\n                <button type=\"button\" class=\"btn btn-primary-custom\" (click)=\"get_list()\"><i class=\"fa fa-search\"></i> Buscar</button>\r\n            </div>\r\n        </div>\r\n        \r\n    </form>\r\n</ng-container>\r\n<ng-container>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 text-right\">\r\n            <div class=\"form-group\" style=\"margin-top: -15px;\">\r\n                <!--\r\n                <button type=\"button\" class=\"btn btn-default-custom\" style=\"margin-bottom: 4px;\" \r\n                    title=\"Generar Reporte\">\r\n                    <i class=\"fa fa-file-excel-o\"></i> </button>&nbsp;&nbsp;-->\r\n                <button class=\"btn btn-primary-custom pull-right\" [routerLink]=\"['/sistema/gestion-extranet/gestor-encuestas-extranet/add']\">\r\n                    <i class=\"fa fa-plus-circle\"></i> Crear encuesta\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n<ng-container> \r\n    <div class=\"table-responsive table-striped table-bordered table-hover\">\r\n        <nz-table #ajaxTable class=\"container-table-custom\" nzShowSizeChanger [nzFrontPagination]=\"false\"\r\n        [nzBordered]=\"true\" [nzData]=\"EncuestaList\" [nzLoading]=\"cargando_tabla\" [nzTotal]=\"total\"\r\n        [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\" (nzPageIndexChange)=\"handleClickBuscar()\"\r\n        (nzPageSizeChange)=\"handleClickBuscar(true)\">\r\n\r\n            <thead>\r\n                <tr>\r\n                    <th>N°</th>\r\n                    <th WIDTH=\"500\">Título</th>\r\n                    <th>¿Es anónima?</th>\r\n                    <th>N° de encuestados</th>\r\n                    <th>Fecha de vigencia</th>\r\n                    <th>Estado</th>\r\n                    <th WIDTH=\"100\">Acciones</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of ajaxTable.data; let i = index\">\r\n                    <td align=\"center\">{{ (pageSize * (pageIndex - 1)) + (i + 1) }}</td>\r\n                    <td>{{ item.titulo}}</td>\r\n                    <td align=\"center\">{{ item.es_anonimo?'SI':'NO'}}</td>\r\n                    <td align=\"center\">{{ item.total_encuestados }}</td>     \r\n                    <td align=\"center\">Desde: {{ item.fecha_inicio | date: 'dd/MM/yyyy hh:mm a'}} <br>Hasta: {{ item.fecha_fin | date: 'dd/MM/yyyy hh:mm a'}}</td>     \r\n                    <td align=\"center\">{{ item.estado_name }}</td>              \r\n                    <td align=\"center\" >\r\n                        <ng-container  *ngIf=\"item.es_eliminado==false \r\n                            && (item.id_estado == _ESTADO_ENCUESTA_ENUMERADO.registrado || item.id_estado == _ESTADO_ENCUESTA_ENUMERADO.pre_publicado)\">\r\n                            <a class=\"btn btn-icon\"  data-tooltip=\"tooltip\" data-placement=\"bottom\" \r\n                            [routerLink]=\"['/sistema/gestion-extranet/gestor-encuestas-extranet/edit',item.id_encuesta]\"\r\n                            title=\"Editar encuesta\" >\r\n                                <i class=\"fa fa-edit\" aria-hidden=\"true\"></i>\r\n                            </a>\r\n                        </ng-container>  \r\n                        <!--<ng-container  *ngIf=\"show_super_edit\">\r\n                            <a class=\"btn btn-icon\"  data-tooltip=\"tooltip\" data-placement=\"bottom\" \r\n                            [routerLink]=\"['/sistema/gestion/gestor-encuestas/reedit',item.id_encuesta]\"\r\n                            title=\"Editar encuesta\" >\r\n                                <i class=\"fa fa-retweet\" aria-hidden=\"true\"></i>\r\n                            </a>\r\n                        </ng-container>-->  \r\n                            \r\n                        <ng-container *ngIf=\"item.id_estado == _ESTADO_ENCUESTA_ENUMERADO.publicado \r\n                                            || item.id_estado == _ESTADO_ENCUESTA_ENUMERADO.eliminado \r\n                                            || item.id_estado == _ESTADO_ENCUESTA_ENUMERADO.procesado\">\r\n                            <a class=\"btn btn-icon\"  data-tooltip=\"tooltip\" \r\n                            [routerLink]=\"['/sistema/gestion-extranet/gestor-encuestas-extranet/view',item.id_encuesta]\"\r\n                            data-placement=\"bottom\" title=\"Ver encuesta\" >\r\n                                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\r\n                            </a>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngIf=\"item.id_estado == _ESTADO_ENCUESTA_ENUMERADO.publicado\">\r\n                            <a class=\"btn btn-icon\"  data-tooltip=\"tooltip\" \r\n                            (click)=\"_prepublicar_encuesta(item.id_encuesta,item.titulo)\"\r\n                            data-placement=\"bottom\" title=\"Regresar a elaboración\" >\r\n                                <i class=\"fa fa-backward\" aria-hidden=\"true\"></i>\r\n                            </a>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngIf=\"item.es_eliminado==false && item.id_estado == _ESTADO_ENCUESTA_ENUMERADO.registrado\">\r\n                            <a  class=\"btn btn-icon\" data-tooltip=\"tooltip\" data-placement=\"bottom\" (click)=\"_delete_encuesta(item.id_encuesta,item.titulo)\" title=\"Eliminar encuesta\" >\r\n                                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                            </a>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngIf=\"item.id_estado == _ESTADO_ENCUESTA_ENUMERADO.publicado || item.id_estado == _ESTADO_ENCUESTA_ENUMERADO.procesado\">\r\n                            <a class=\"btn btn-icon\"  data-tooltip=\"tooltip\" \r\n                            (click)=\"descargar_data_encuesta(item.id_encuesta)\"\r\n                            data-placement=\"bottom\" title=\"Descargar data de encuesta\" >\r\n                                <i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></i>\r\n                            </a>\r\n                        </ng-container>\r\n                        <!--item.show_extra_options && (item.id_estado == _ESTADO_ENCUESTA_ENUMERADO.publicado)-->\r\n                        <ng-container *ngIf=\"false\">\r\n                            <a class=\"btn btn-icon\"  data-tooltip=\"tooltip\" \r\n                            (click)=\"_show_resultados_upload(item)\"\r\n                            data-placement=\"bottom\" title=\"Subir resultados de analizada\" >\r\n                                <i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i>\r\n                            </a>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"item.show_extra_options && item.id_estado == _ESTADO_ENCUESTA_ENUMERADO.procesado\">\r\n                            <a class=\"btn btn-icon\"  data-tooltip=\"tooltip\" \r\n                            [routerLink]=\"['/sistema/gestion-extranet/gestor-encuestas-extranet/results',item.id_encuesta]\"\r\n                            data-placement=\"bottom\" title=\"Ver encuesta en cifras\" >\r\n                                <i class=\"fa fa-picture-o\" aria-hidden=\"true\"></i>\r\n                            </a>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"item.id_estado == _ESTADO_ENCUESTA_ENUMERADO.publicado\">\r\n                            <a class=\"btn btn-icon\"  data-tooltip=\"tooltip\" \r\n                            (click)=\"_show_resultados_avance(item)\"\r\n                            data-placement=\"bottom\" title=\"Ver avance de encuesta\" >\r\n                                <i class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i>\r\n                            </a>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"item.id_estado == _ESTADO_ENCUESTA_ENUMERADO.publicado \r\n                        || item.id_estado == _ESTADO_ENCUESTA_ENUMERADO.procesado\">\r\n                            <a class=\"btn btn-icon\"  data-tooltip=\"tooltip\" \r\n                            (click)=\"descargar_resultado_encuesta(item.id_encuesta)\"\r\n                            data-placement=\"bottom\" title=\"Descargar resultados\" >\r\n                                <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\r\n                            </a>\r\n                        </ng-container>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"modal_subir_resultados\">\r\n    <app-subir-resultados-extranet \r\n    [visible]=\"modal_subir_resultados\"\r\n    [selected_encuesta]=\"selected_encuesta\"\r\n    (onCloseSaveModalResultados)=\"handleOnCloseSaveModalResultados($event)\"\r\n    (onCloseModalResultados)=\"handleOnCloseModalResultados($event)\"></app-subir-resultados-extranet>\r\n</ng-container>\r\n<ng-container *ngIf=\"modal_avance_resultados\">\r\n    <app-avance-resultados-extranet \r\n    [visible]=\"modal_avance_resultados\"\r\n    [selected_encuesta]=\"selected_encuesta\"\r\n    [EncuestaAvanceList]=\"EncuestaAvanceList\"\r\n    (onCloseModalResultados)=\"handleOnCloseModalAvance($event)\"></app-avance-resultados-extranet>\r\n</ng-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/components/re-datos-encuesta-extranet/re-datos-encuesta-extranet.component.html":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/components/re-datos-encuesta-extranet/re-datos-encuesta-extranet.component.html ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<form [formGroup]=\"formMACRO\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Título de encuesta:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control nzErrorTip=\"Debe ingresar el título.\">\r\n                        <nz-input-group>\r\n                            <input type=\"text\" nz-input formControlName=\"Titulo\" \r\n                            maxlength=\"150\"\r\n                            class=\"form-control\" placeholder=\"--Ingresar título--\"\r\n                            [(ngModel)]=\"frm_main_data.titulo\" />\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Encabezado:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control nzErrorTip=\"Debe ingresar el encabezado.\">\r\n                        <nz-input-group>\r\n                            <input type=\"text\" nz-input formControlName=\"Encabezado\" \r\n                            maxlength=\"250\"\r\n                            class=\"form-control\" placeholder=\"--Ingresar encabezado--\"\r\n                            [(ngModel)]=\"frm_main_data.encabezado\" />\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Objetivo:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control nzErrorTip=\"Debe ingresar el objetivo.\">\r\n                        <nz-input-group>\r\n                            <textarea formControlName=\"Objetivo\" nz-input class=\"form-control\" \r\n                            maxlength=\"300\"\r\n                            [(ngModel)]=\"frm_main_data.objetivo\" placeholder=\"--Ingresar objetivo--\"></textarea>\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Descripción:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control nzErrorTip=\"Debe ingresar una descripción.\">\r\n                        <nz-input-group>\r\n                            <textarea formControlName=\"Descripcion\" nz-input class=\"form-control\"\r\n                            maxlength=\"300\"\r\n                            [(ngModel)]=\"frm_main_data.descripcion\" placeholder=\"--Ingresar una breve descripción--\"></textarea>\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Fecha y hora de inicio de vigencia:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control nzErrorTip=\"Debe ingresar fecha y hora.\">\r\n                        <nz-input-group>\r\n                            <nz-date-picker formControlName=\"FechaHoraInicio\" \r\n                            [nzDisabledDate]=\"disabledStartDate\"\r\n                            [(ngModel)]=\"frm_main_data.fecha_inicio\"\r\n                            nzShowTime nzFormat=\"dd/MM/yyyy HH:mm a\" ngModel\r\n                            ></nz-date-picker>\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Fecha y hora de fin de vigencia:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control nzErrorTip=\"Debe ingresar fecha y hora.\">\r\n                        <nz-input-group>\r\n                            <nz-date-picker formControlName=\"FechaHoraFin\" \r\n                            [(ngModel)]=\"frm_main_data.fecha_fin\"\r\n                            [nzDisabledDate]=\"disabledEndDate\"\r\n                            nzShowTime nzFormat=\"dd/MM/yyyy HH:mm a\" ngModel\r\n                            ></nz-date-picker>\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Tiempo estimado en minutos:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control nzErrorTip=\"Debe ingresar el tiempo estimado.\">\r\n                        <nz-input-group>\r\n                            <nz-input-number \r\n                                formControlName=\"TiempoEstimado\"\r\n                                [(ngModel)]=\"frm_main_data.tiempo_estimado\" \r\n                                [nzMin]=\"1\" \r\n                                [nzMax]=\"300\" \r\n                                [nzStep]=\"1\">\r\n                            </nz-input-number>\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-5\">\r\n            <p>\r\n                <label nz-checkbox  formControlName=\"EsAnonima\" \r\n                [(ngModel)]=\"frm_main_data.es_anonima\" \r\n                (ngModelChange)=\"show_mensaje_bienvenida_anonima($event)\"\t>Es una encuesta anónima</label> \r\n            </p>\r\n            <p>\r\n                <label nz-checkbox  formControlName=\"EsParaTodos\" \r\n                [(ngModel)]=\"frm_main_data.es_todos\"\r\n                (ngModelChange)=\"show_tab_encuestados($event)\"\r\n                >Es una encuesta para todos los trabajadores</label> \r\n            </p>\r\n            <div class=\"form-group\" *ngIf=\"_show_mensaje_bienvenida_anonima\">\r\n                <label for=\"\">Mensaje para encuesta anónima:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control>\r\n                        <nz-input-group>\r\n                            <textarea formControlName=\"MensajeAnonimo\" nz-input class=\"form-control\" \r\n                            maxlength=\"400\"\r\n                            [(ngModel)]=\"frm_main_data.mensaje_es_anonima\" placeholder=\"--Ingresar mensaje para anónimos--\"></textarea>\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <hr class=\"mt-0\">\r\n    <h5 class=\"title-custom\">Presentación</h5>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Adjuntar imagen en segundo plano (pasar el mouse)</label>\r\n                <app-file-uploader-custom  \r\n                [fileInfo]=\"true\"  \r\n                [id]=\"frm_main_data.iden_imagen_presentacion\" \r\n                [(Files)]=\"_imagen_archivo\" \r\n                [(Uploading)]=\"estaGuardando\"\r\n                [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                [esBorrador]=\"false\" \r\n                (FileChange)=\"set_imagen_iden($event)\"\r\n                (onRemovedIdFile)=\"handleRemovedFilePresentacion($event)\"\r\n                [extensionAceptados]=\"imagen_extensionAceptados\" \r\n                [tiposMimePermitidos]=\"imagen_MimePermitidos\"\r\n                [error_msg]=\"'Debe adjuntar una imagen.'\"\r\n                [view_width]=\"600\"\r\n                [puedeVerArchivo]=\"true\"\r\n                [url]=\"url\" \r\n                [loading]=\"estaGuardando\">\r\n                </app-file-uploader-custom>\r\n                <div *ngIf=\"error_imagen_segundo_plano\" class=\"has-error\">\r\n                    <div class=\"ant-form-explain\">\r\n                    Debe ingresar un archivo de imagen.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\" *ngIf=\"!_show_mensaje_bienvenida_anonima\">\r\n                <label for=\"\">Mensaje corto de presentación:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control nzErrorTip=\"Debe ingresar el mensaje corto de presentación.\">\r\n                        <nz-input-group>\r\n                            <input type=\"text\" nz-input formControlName=\"MensajePresentacion\" \r\n                            maxlength=\"350\"\r\n                            class=\"form-control\" placeholder=\"--Ingresar mensaje corto de presentación--\"\r\n                            [(ngModel)]=\"frm_main_data.mensaje_corto_presentacion\" />\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <hr class=\"mt-0\">\r\n    <h5 class=\"title-custom\">Mensaje de bienvenida</h5>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Indicaciones de encuesta</label>\r\n                <div style=\"border: 1px solid rgb(217, 217, 217) !important;\">\r\n                    <ckeditor [editor]=\"editor\" [config]=\"configEditor\" [(ngModel)]=\"frm_welcome_data.indicaciones\" \r\n                    formControlName=\"IndicacionesBienvenida\"\r\n                    placeholder=\"--Ingresar indicaciones--\"\r\n                    (ngModelChange)=\"this.error_indicaciones=false;\"\r\n                    (ready)=\"onReady($event)\" (change)=\"onChange($event)\"></ckeditor>\r\n                </div>\r\n                <div *ngIf=\"error_indicaciones\" class=\"has-error\">\r\n                    <div class=\"ant-form-explain\">\r\n                    Debe ingresar las indicaciones de la encuesta.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\">Adjuntar audio de mensaje de bienvenida (*.mp3):</label>\r\n                <div>\r\n                    <app-audio-uploader-custom \r\n                    [fileInfo]=\"true\" \r\n                    [id]=\"frm_welcome_data.iden_audio\" \r\n                    [(Files)]=\"audio_archivo\" \r\n                    [(Uploading)]=\"audio_estaGuardando\"\r\n                    (FileChange)=\"set_audio_iden($event)\"\r\n                    (onRemovedIdFile)=\"handleRemovedAudioWelcome($event)\"\r\n                    [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                    [esBorrador]=\"false\" \r\n                    [puedeVerArchivo]=\"true\"\r\n                            [url]=\"url\" \r\n                            [loading]=\"audio_estaGuardando\">\r\n                    </app-audio-uploader-custom>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Tipo de archivo de bienvenida:</label>\r\n                <div>\r\n                    <nz-form-item>\r\n                        <nz-form-control nzErrorTip=\"Debe seleccionar el tipo de archivo de bienvenida.\">\r\n                            <nz-input-group>\r\n                                <nz-select nzAllowClear nzShowSearch \r\n                                nzPlaceHolder=\"--Seleccionar--\"\r\n                                [(ngModel)]=\"frm_welcome_data.id_tipo_archivo\"\r\n                                (ngModelChange)=\"set_tipo_file_permitidos_welcome()\"\r\n                                formControlName=\"TipoArchivoBienvenida\">\r\n                                    <ng-container *ngFor=\"let item of array_tipo_file\">\r\n                                        <nz-option [nzValue]=\"item.id_enumerado\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                    </ng-container>\r\n                                </nz-select>\r\n                            </nz-input-group>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" [hidden]=\"!show_url_welcome\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Url de video de bienvenida:</label>\r\n                <div>\r\n                    <input type=\"text\" formControlName=\"UrlMultimediaBienvenida\" class=\"form-control\" \r\n                    placeholder=\"--https://www.youtube.com/watch?v=FM7MFYoylVs--\" \r\n                    (ngModelChange)=\"this.error_url_welcome=false;\"\r\n                    maxlength=\"500\"\r\n                    [(ngModel)]=\"frm_welcome_data.url_video\">\r\n                </div>\r\n                <div *ngIf=\"error_url_welcome\" class=\"has-error\">\r\n                    <div class=\"ant-form-explain\">\r\n                    Debe ingresar un url válido.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\"[hidden]=\"!show_file_input_welcome\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Adjuntar imagen de bienvenida:</label>\r\n                <div>\r\n                    <app-file-uploader-custom  \r\n                    [fileInfo]=\"true\"  \r\n                    [id]=\"frm_welcome_data.iden_imagen\" \r\n                    [(Files)]=\"archivo\" \r\n                    [(Uploading)]=\"estaGuardando\"\r\n                    [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                    [esBorrador]=\"false\" \r\n                    [extensionAceptados]=\"imagen_extensionAceptados\"\r\n                    [tiposMimePermitidos]=\"imagen_MimePermitidos\"\r\n                    [error_msg]=\"'Debe adjuntar una imagen.'\"\r\n                    (FileChange)=\"set_file_iden_welcome($event)\"\r\n                    (onRemovedIdFile)=\"handleRemovedFileWelcome($event)\"\r\n                    [view_width]=\"600\"\r\n                    [puedeVerArchivo]=\"true\"\r\n                            [url]=\"url\" \r\n                            [loading]=\"estaGuardando\">\r\n                    </app-file-uploader-custom>\r\n                    <div *ngIf=\"error_file_welcome\" class=\"has-error\">\r\n                        <div class=\"ant-form-explain\">\r\n                        Debe ingresar un archivo.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <hr class=\"mt-0\">\r\n    <h5 class=\"title-custom\">Mensaje de agradecimiento</h5>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Titulo de mensaje de agradecimiento:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control nzErrorTip=\"Debe ingresar el mensaje de agradecimiento.!\">\r\n                        <nz-input-group>\r\n                            <input type=\"text\" nz-input formControlName=\"IndicacionesAgradecimiento\" \r\n                            maxlength=\"240\"\r\n                            class=\"form-control\" placeholder=\"--Ingresar mensaje de agradecimiento--\"\r\n                            [(ngModel)]=\"frm_greet_data.mensaje_agradecimiento\" />\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\">Adjuntar audio de mensaje de agradecimiento (*.mp3):</label>\r\n                <div>\r\n                    <app-audio-uploader-custom  \r\n                    [fileInfo]=\"true\" \r\n                    [id]=\"frm_greet_data.iden_audio\" \r\n                    [(Files)]=\"audio_archivo\" \r\n                    [(Uploading)]=\"audio_estaGuardando\"\r\n                    (FileChange)=\"set_audio_iden_agradecimiento($event)\"\r\n                    (onRemovedIdFile)=\"handleRemovedAudioAgradecimiento($event)\"\r\n                    [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                    [esBorrador]=\"false\" \r\n                    [puedeVerArchivo]=\"true\"\r\n                            [url]=\"url\" \r\n                            [loading]=\"audio_estaGuardando\">\r\n                    </app-audio-uploader-custom>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Tipo de archivo de agradecimiento:</label>\r\n                <div>\r\n                    <nz-form-item>\r\n                        <nz-form-control nzErrorTip=\"Debe seleccionar un tipo de archivo.\">\r\n                            <nz-input-group>\r\n                                <nz-select nzAllowClear nzShowSearch \r\n                                nzPlaceHolder=\"--Seleccionar--\"\r\n                                [(ngModel)]=\"frm_greet_data.id_tipo_archivo\"\r\n                                (ngModelChange)=\"set_tipo_file_permitidos_agradecimiento()\"\r\n                                formControlName=\"TipoArchivoAgradecimiento\">\r\n                                    <ng-container *ngFor=\"let item of array_tipo_file\">\r\n                                        <nz-option [nzValue]=\"item.id_enumerado\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                    </ng-container>\r\n                                </nz-select>\r\n                            </nz-input-group>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\"[hidden]=\"!show_file_agradecimiento\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Adjuntar imagen de agradecimiento:</label>\r\n                <div>\r\n                    <app-file-uploader-custom  \r\n                    [fileInfo]=\"true\"  \r\n                    [id]=\"frm_greet_data.iden_imagen\" \r\n                    [(Files)]=\"archivo\" \r\n                    [(Uploading)]=\"estaGuardando\"\r\n                    [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                    [esBorrador]=\"false\" \r\n                    [extensionAceptados]=\"imagen_extensionAceptados\"\r\n                    [tiposMimePermitidos]=\"imagen_MimePermitidos\"\r\n                    [error_msg]=\"'Debe adjuntar una imagen.'\"\r\n                    (FileChange)=\"set_file_iden_agradecimiento($event)\"\r\n                    (onRemovedIdFile)=\"handleRemovedFileAgradecimiento($event)\"\r\n                    [view_width]=\"600\"\r\n                    [puedeVerArchivo]=\"true\"\r\n                            [url]=\"url\" \r\n                            [loading]=\"estaGuardando\">\r\n                    </app-file-uploader-custom>\r\n                    <div *ngIf=\"error_file_agradecimiento\" class=\"has-error\">\r\n                        <div class=\"ant-form-explain\">\r\n                        Debe ingresar un archivo de imagen.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\" [hidden]=\"!show_url\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Url de video de agradecimiento:</label>\r\n                <div>\r\n                    <input type=\"text\" formControlName=\"UrlMultimediaAgradecimiento\" class=\"form-control\" \r\n                    placeholder=\"Url de video de agradecimiento\" \r\n                    maxlength=\"500\"\r\n                    (ngModelChange)=\"this.error_url=false;\"\r\n                    [(ngModel)]=\"frm_greet_data.url_video\">\r\n                </div>\r\n                <div *ngIf=\"error_url\" class=\"has-error\">\r\n                    <div class=\"ant-form-explain\">\r\n                    Debe ingresar un url válido.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-6 text-left\">\r\n        <button type=\"button\" class=\"btn btn-default-custom\" [routerLink]=\"['/sistema/gestion/gestor-encuestas']\">\r\n            Cancelar\r\n        </button>\r\n    </div>\r\n    <div class=\"col-sm-6 text-right\">\r\n        <button type=\"button\" class=\"btn btn-primary-custom\" (click)=\"save_update()\" ><i class=\"fa fa-paper-plane\"></i> Siguiente</button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/components/re-modal-registro-pregunta-extranet/re-modal-registro-pregunta-extranet.component.html":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/components/re-modal-registro-pregunta-extranet/re-modal-registro-pregunta-extranet.component.html ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-modal \r\n  [(nzVisible)]=\"isVisibleModal\" \r\n  nzTitle=\"{{title}} pregunta\" \r\n  [nzWidth]=\"modal_width\" \r\n  nzClosable=\"false\"\r\n  [nzFooter]=\"extraTemplate\">\r\n    <ng-container >\r\n        <div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12 col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Pregunta</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe ingresar la pregunta!\">\r\n                                <nz-input-group>\r\n                                    <input type=\"text\" [formControl]=\"frmPRG.frmPregunta\" \r\n                                    class=\"form-control\" \r\n                                    placeholder=\"--Ingresar la pregunta--\"\r\n                                    maxlength=\"500\"\r\n                                    [(ngModel)]=\"frm.pregunta\"\r\n                                    (ngModelChange)=\"setJsonName()\">\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Tipo de pregunta</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe seleccionar el tipo de pregunta.\">\r\n                                <nz-input-group>\r\n                                    <nz-select nzAllowClear nzShowSearch nzPlaceHolder=\"--Seleccionar--\"\r\n                                    [(ngModel)]=\"frm.id_tipo_pregunta\"\r\n                                    (ngModelChange)=\"cargar_formato_byTipo($event)\"\r\n                                    [nzDisabled]=\"es_por_defecto\"\r\n                                    [formControl]=\"frmPRG.frmTipoPregunta\">\r\n                                        <ng-container *ngFor=\"let item of array_tipo_pregunta\">\r\n                                            <nz-option [nzValue]=\"item.id_enumerado\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                        </ng-container>\r\n                                    </nz-select>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\"></div>\r\n                <div class=\"col-md-4\">\r\n                    <br><br>\r\n                    <label nz-checkbox  [formControl]=\"frmPRG.frmEsObligatorio\" \r\n                    [(ngModel)]=\"frm.es_obligatorio\" >La pregunta es obligatorio</label> \r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Categoría</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe seleccionar la categoría!\">\r\n                                <nz-input-group>\r\n                                    <nz-select nzAllowClear nzShowSearch nzPlaceHolder=\"--Seleccionar--\"\r\n                                    [(ngModel)]=\"frm.id_categoria\"\r\n                                    (ngModelChange)=\"filter_sub_categoria($event)\"\r\n                                    [formControl]=\"frmPRG.frmCategoria\">\r\n                                        <ng-container *ngFor=\"let item of array_categoria\">\r\n                                            <nz-option [nzValue]=\"item.id_categoria\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                        </ng-container>\r\n                                    </nz-select>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\"></div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Sub-Categoría</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe seleccionar la sub categoría!\">\r\n                                <nz-input-group>\r\n                                    <nz-select nzAllowClear nzShowSearch nzPlaceHolder=\"--Seleccionar--\"\r\n                                    [(ngModel)]=\"frm.id_sub_categoria\"\r\n                                    [formControl]=\"frmPRG.frmSubCategoria\">\r\n                                        <ng-container *ngFor=\"let item of array_sub_categoria\">\r\n                                            <nz-option [nzValue]=\"item.id_sub_categoria\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                        </ng-container>\r\n                                    </nz-select>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Descripción adicional</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control>\r\n                                <nz-input-group>\r\n                                    <textarea [formControl]=\"frmPRG.frmDescripcionAdicional\" \r\n                                    maxlength=\"500\"\r\n                                    nz-input class=\"form-control\" \r\n                                    [(ngModel)]=\"frm.descripcion\" placeholder=\"--Ingrese una breve descripción adicional--\"></textarea>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <label nz-checkbox  [formControl]=\"frmPRG.frmEsCondicional\" (ngModelChange)=\"hideCondicional()\"\r\n                    [(ngModel)]=\"frm.es_condicional\" >La pregunta es condicional</label> \r\n                </div>\r\n                <div class=\"col-md-3\"></div>\r\n                <div class=\"col-md-4\" [hidden]=\"frmPRG.frmEsCondicional.value\">\r\n                    <label nz-checkbox  [formControl]=\"frmPRG.frmEsCondicionada\" \r\n                    [(ngModel)]=\"frm.es_condicionada\" >La pregunta es condicionada</label> \r\n                </div>\r\n            </div>\r\n            <div class=\"row\" [hidden]=\"!frmPRG.frmEsCondicionada.value || frmPRG.frmEsCondicional.value\">\r\n                <div class=\"col-sm-12\">\r\n                    <br>\r\n                    <nz-collapse>\r\n                        <nz-collapse-panel [nzHeader]=\"selectedPreguntaCondicional?selectedPreguntaCondicional.pregunta:'Seleccione pregunta condicional'\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"\"><span class=\"span_required\">*</span> Pregunta</label>\r\n                                        <nz-form-item>\r\n                                            <nz-form-control nzErrorTip=\"Debe seleccionar de pregunta.\">\r\n                                                <nz-input-group>\r\n                                                    <nz-select nzAllowClear nzShowSearch nzPlaceHolder=\"--Seleccionar--\"\r\n                                                    [(ngModel)]=\"frm.id_pregunta_condicional\"\r\n                                                    (ngModelChange)=\"setPreguntaSelecionadaCondicional($event)\"\r\n                                                    [formControl]=\"frmPRG.frmPreguntaCondicional\">\r\n                                                        <ng-container *ngFor=\"let item of preguntas_condicionales\">\r\n                                                            <nz-option [nzValue]=\"item.id_pregunta\" [nzLabel]=\"item.pregunta\"></nz-option>\r\n                                                        </ng-container>\r\n                                                    </nz-select>\r\n                                                </nz-input-group>\r\n                                            </nz-form-control>\r\n                                        </nz-form-item>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-12\">\r\n                                    <ng-container *ngIf=\"selectedPreguntaCondicional && !loading_condionales\">\r\n                                        <app-app-preview-pregunta \r\n                                        [show_media]=\"false\" \r\n                                        [Pregunta]=\"selectedPreguntaCondicional\" \r\n                                        [respuesta]=\"respuesta_disparadora\"\r\n                                        (onClickSaveRespuesta)=\"handleClickSaveRespuestaCondicionada($event)\"\r\n                                        ></app-app-preview-pregunta>\r\n                                    </ng-container>\r\n                                </div>\r\n                            </div>\r\n                        </nz-collapse-panel>\r\n                    </nz-collapse>\r\n                </div>\r\n            </div>\r\n            <!--BEGIN FORMATOS-->\r\n            <div class=\"row\" style=\"padding-top: 15px\" *ngIf=\"frm.id_tipo_pregunta==_TIPO_PREGUNTA.desplegable_institucional\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Maestro institucional</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe seleccionar el maestro institucional!\">\r\n                                <nz-input-group>\r\n                                    <nz-select nzAllowClear nzShowSearch \r\n                                    [(ngModel)]=\"JSON_DESPLEGABLE_INSTITUCIONAL.tbl_data\"\r\n                                    [formControl]=\"frmMaestroInstitucional\"\r\n                                    [nzDisabled]=\"es_por_defecto\"\r\n                                    nzPlaceHolder=\"--Seleccione--\">\r\n                                        <ng-container *ngFor=\"let item of array_maestro_institucional\">\r\n                                            <nz-option [nzValue]=\"item.id_enumerado\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                        </ng-container>\r\n                                    </nz-select>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" style=\"padding-top: 15px\" *ngIf=\"frm.id_tipo_pregunta==_TIPO_PREGUNTA.numerico_decimal\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Cantidad de digitos decimales</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe ingresar los digitos decimales!\">\r\n                                <nz-input-group>\r\n                                    <nz-input-number \r\n                                        [formControl]=\"frmCantidadDigitos\"\r\n                                        [(ngModel)]=\"JSON_NUMERICO_DECIMAL.nro_decimal\" \r\n                                        [nzMin]=\"1\" \r\n                                        [nzMax]=\"5\" \r\n                                        [nzStep]=\"1\">\r\n                                    </nz-input-number>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row col-sm-12\" style=\"padding-top: 15px\" *ngIf=\"\r\n            frm.id_tipo_pregunta==_TIPO_PREGUNTA.desplegable_libre\r\n            || frm.id_tipo_pregunta==_TIPO_PREGUNTA.seleccion_unica \r\n            || frm.id_tipo_pregunta==_TIPO_PREGUNTA.seleccion_multiple\">\r\n                <div class=\"panel panel-default panel-custom\">\r\n                    <div class=\"panel-heading\">Alternativas</div>\r\n                    <div class=\"panel-body\">                    \r\n                        <ng-container>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12 text-left\">\r\n                                    <div>\r\n                                        <button class=\"btn btn-primary-custom pull-left\" (click)=\"_add_alternativa_table()\">\r\n                                            <i class=\"fa fa-plus-circle\"></i> Agregar\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-12\">\r\n                                    <div class=\"table-responsive table-striped table-bordered table-hover\">\r\n                                        <nz-table #ajaxTable class=\"container-table-custom\" nzShowSizeChanger \r\n                                        [nzFrontPagination]=\"true\" [nzBordered]=\"true\" [nzLoading]=\"cargando_tabla\" \r\n                                        [nzData]=\"array_alternativa_select\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th>N°</th>\r\n                                                    <th WIDTH=\"450\">Descripción</th>\r\n                                                    <th WIDTH=\"80\">Acción</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let item of ajaxTable.data; let i = index\">\r\n                                                    <td align=\"center\">{{ (item.idx+1) }}</td>\r\n                                                    <td>\r\n                                                        <nz-form-item>\r\n                                                            <nz-form-control nzErrorTip=\"Debe ingresar la descripción!\">\r\n                                                                <nz-input-group>\r\n                                                                    <input class=\"form-control\" type=\"text\" \r\n                                                                    [formControl]=\"frmAlternativaDescripcion[item.idx]\"\r\n                                                                    placeholder=\"--Ingresar descripción de opción--\"\r\n                                                                    [(ngModel)]=\"item.descripcion\" >\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                         </nz-form-item>\r\n                                                    </td>               \r\n                                                    <td align=\"center\" >\r\n                                                        <ng-container>\r\n                                                            <a  class=\"btn btn-icon\" (click)=\"_delete_alternativa_table(item.idx)\" \r\n                                                                data-tooltip=\"tooltip\" data-placement=\"bottom\" title=\"Eliminar\" >\r\n                                                                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                                                            </a>\r\n                                                        </ng-container>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </nz-table>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ng-container>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" style=\"padding-top: 15px\" *ngIf=\"frm.id_tipo_pregunta==_TIPO_PREGUNTA.matriz\">\r\n                <div class=\"col-md-6 col-sm-12\">\r\n                    <div class=\"panel panel-default panel-custom\">\r\n                        <div class=\"panel-heading\">Filas</div>\r\n                        <div class=\"panel-body\">                    \r\n                            <ng-container>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12 text-left\">\r\n                                        <div>\r\n                                            <button class=\"btn btn-primary-custom pull-left\" (click)=\"_add_filas()\">\r\n                                                <i class=\"fa fa-plus-circle\"></i> Agregar\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-12\">\r\n                                        <div class=\"table-responsive table-striped table-bordered table-hover\">\r\n                                            <nz-table #ajaxTableMatriz class=\"container-table-custom\" nzShowSizeChanger \r\n                                            [nzFrontPagination]=\"true\" [nzBordered]=\"true\" [nzLoading]=\"cargando_tabla\" \r\n                                            [nzData]=\"array_filas\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th>N°</th>\r\n                                                        <th WIDTH=\"400\">Descripción</th>\r\n                                                        <th WIDTH=\"50\">Acción</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let item of ajaxTableMatriz.data;\">\r\n                                                        <td align=\"center\">{{ (item.idx+1) }}</td>\r\n                                                        <td>\r\n                                                            <nz-form-item>\r\n                                                                <nz-form-control nzErrorTip=\"Debe ingresar la descripción de fila\">\r\n                                                                    <nz-input-group>\r\n                                                                        <input class=\"form-control\" type=\"text\" \r\n                                                                        [formControl]=\"frmFilaName[item.idx]\"\r\n                                                                        placeholder=\"--Ingresar descripción de fila--\"\r\n                                                                        [(ngModel)]=\"item.nombre_fila\" >\r\n                                                                    </nz-input-group>\r\n                                                                </nz-form-control>\r\n                                                             </nz-form-item>\r\n                                                        </td>             \r\n                                                        <td align=\"center\" >\r\n                                                            <ng-container>\r\n                                                                <a  class=\"btn btn-icon\" (click)=\"_delete_fila(item.idx)\" \r\n                                                                    data-tooltip=\"tooltip\" data-placement=\"bottom\" title=\"Eliminar\" >\r\n                                                                    <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                                                                </a>\r\n                                                            </ng-container>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </nz-table>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"error_filas_matriz\" class=\"has-error\">\r\n                                        <div class=\"ant-form-explain\">\r\n                                            Debe ingresar por lo menos una (1) fila.\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-container>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6 col-sm-12\">\r\n                    <div class=\"panel panel-default panel-custom\">\r\n                        <div class=\"panel-heading\">Columnas</div>\r\n                        <div class=\"panel-body\">                    \r\n                            <ng-container>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12 text-left\">\r\n                                        <div>\r\n                                            <button class=\"btn btn-primary-custom pull-left\" (click)=\"add_columnas()\">\r\n                                                <i class=\"fa fa-plus-circle\"></i> Agregar\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-12\">\r\n                                        <div class=\"table-responsive table-striped table-bordered table-hover\">\r\n                                            <nz-table #ajaxTableColumnas class=\"container-table-custom\" nzShowSizeChanger \r\n                                            [nzFrontPagination]=\"true\" [nzBordered]=\"true\" [nzLoading]=\"cargando_columnas\" \r\n                                            [nzData]=\"array_columnas\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th>N°</th>\r\n                                                        <th WIDTH=\"400\">Descripción</th>\r\n                                                        <th WIDTH=\"50\">Acción</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let item of ajaxTableColumnas.data;\">\r\n                                                        <td align=\"center\">{{ (item.idx+1) }}</td>\r\n                                                        <td>\r\n                                                            <nz-form-item>\r\n                                                                <nz-form-control nzErrorTip=\"Debe ingresar la descripción de columna\">\r\n                                                                    <nz-input-group>\r\n                                                                        <input class=\"form-control\" type=\"text\" \r\n                                                                        [formControl]=\"frmColumnaName[item.idx]\"\r\n                                                                        placeholder=\"--Ingresar descripción de columna--\"\r\n                                                                        [(ngModel)]=\"item.nombre_columna\" >\r\n                                                                    </nz-input-group>\r\n                                                                </nz-form-control>\r\n                                                            </nz-form-item>\r\n                                                            <span class=\"btn_span hoverable\" (click)=\"show_pre_modal_columna(item)\" \r\n                                                                style=\"width:30px;text-align:center\" >\r\n                                                                <i class=\"fa fa-ellipsis-v\"></i>\r\n                                                            </span>\r\n                                                            <!--\r\n                                                            <nz-popover nzPopoverTrigger=\"click\" \r\n                                                            [nzPopoverContent]=\"contentTemplateTootip\"\r\n                                                            nzPopoverPlacement=\"bottom\"> <i class=\"fa fa-ellipsis-v\"></i></nz-popover>-->\r\n                                                            <!--\r\n                                                            <span class=\"btn_span hoverable\" (click)=\"this.selected_col_idx=item.idx;\" style=\"width:30px;background-color:red\">\r\n                                                                <button nz-button \r\n                                                                    nz-popover\r\n                                                                    nzPopoverTrigger=\"click\"\r\n                                                                    [nzPopoverContent]=\"contentTemplateTootip\"\r\n                                                                    nzPopoverPlacement=\"bottom\"\r\n                                                                    [nzSize]=\"'small'\"\r\n                                                                    >\r\n                                                                    <i class=\"fa fa-ellipsis-v\"></i>\r\n                                                                </button>\r\n                                                            </span>-->\r\n                                                        </td>             \r\n                                                        <td align=\"center\" >\r\n                                                            <ng-container>\r\n                                                                <a  class=\"btn btn-icon\" (click)=\"_delete_columna(item.idx)\" \r\n                                                                    data-tooltip=\"tooltip\" data-placement=\"bottom\" title=\"Eliminar\" >\r\n                                                                    <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                                                                </a>\r\n                                                            </ng-container>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </nz-table>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"error_columnas_matriz\" class=\"has-error\">\r\n                                        <div class=\"ant-form-explain\">\r\n                                            Debe ingresar por lo menos una (1) columna.\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-container>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--END FORMATOS-->\r\n            <div class=\"row\">\r\n                <div class=\"col-md-5\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Indicar que tipo de archivo utilizará</label>\r\n                        <div>\r\n                            <nz-form-item>\r\n                                <nz-form-control nzErrorTip=\"Debe seleccionar el tipo de archivo\">\r\n                                    <nz-input-group>\r\n                                        <nz-select nzAllowClear nzShowSearch nzPlaceHolder=\"--Seleccionar--\"\r\n                                        [(ngModel)]=\"frm.id_tipo_archivo\"\r\n                                        (ngModelChange)=\"set_tipo_file()\"\r\n                                        [formControl]=\"frmPRG.frmTipoArchivo\">\r\n                                            <ng-container *ngFor=\"let item of array_tipo_file\">\r\n                                                <nz-option [nzValue]=\"item.id_enumerado\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                            </ng-container>\r\n                                        </nz-select>\r\n                                    </nz-input-group>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-1\"></div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\"[hidden]=\"!show_file_uploader\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Adjuntar imagen de explicación:</label>\r\n                        <div>\r\n                            <app-file-uploader-custom  \r\n                            [fileInfo]=\"true\"  \r\n                            [id]=\"frm.iden_imagen\" \r\n                            [(Files)]=\"archivo\" \r\n                            [(Uploading)]=\"estaGuardando\"\r\n                            [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                            [esBorrador]=\"false\" \r\n                            [extensionAceptados]=\"_extensionAceptados\"\r\n                            [tiposMimePermitidos]=\"imagen_MimePermitidos\"\r\n                            (FileChange)=\"set_file_iden($event)\"\r\n                            (onRemovedIdFile)=\"handleRemovedFileExplicacion($event)\"\r\n                            [view_width]=\"600\"\r\n                            [puedeVerArchivo]=\"true\"\r\n                                    [url]=\"url\" \r\n                                    [loading]=\"estaGuardando\">\r\n                            </app-file-uploader-custom>\r\n                            <div *ngIf=\"error_imagen\" class=\"has-error\">\r\n                                <div class=\"ant-form-explain\">\r\n                                    Debe adjuntar una imagen.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\" [hidden]=\"!show_url\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Url de video de explicación de la plataforma:</label>\r\n                        <div>\r\n                            <input type=\"text\" class=\"form-control\" \r\n                            maxlength=\"500\"\r\n                            (ngModelChange)=\"this.error_video=false;\"\r\n                            placeholder=\"--https://www.youtube.com/watch?v=FM7MFYoylVs--\" \r\n                            [(ngModel)]=\"frm.url_video\">\r\n                        </div>\r\n                        <div *ngIf=\"error_video\" class=\"has-error\">\r\n                            <div class=\"ant-form-explain\">\r\n                                Debe ingresar un url válido.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n    <ng-template #extraTemplate>      \r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 text-left\"><button type=\"button\" class=\"btn btn-default-custom\" (click)=\"handleCancelarFormularioModal()\"><i class=\"fa fa-ban\" aria-hidden=\"true\"></i> Cancelar</button></div>\r\n            <div class=\"col-sm-6 text-right\"><button nz-button nzType=\"primary\" (click)=\"handleSaveFormularioModal()\"><i class=\"fa fa-save\" aria-hidden=\"true\"></i> Guardar</button></div>\r\n        </div>  \r\n    </ng-template>\r\n</nz-modal>\r\n\r\n<nz-modal \r\n  [(nzVisible)]=\"vista_tipo\" \r\n  nzTitle=\"Tipo de entrada\" \r\n  [nzWidth]=\"250\" \r\n  (nzOnCancel)=\"cerrar_pre_modal()\"\r\n  [nzFooter]=\"extraTemplatePre\">\r\n    <ng-container>\r\n        <div>\r\n            <p class=\"hoverable_txt\" (click)=\"_show_modal_matriz(1)\" [ngClass]=\"{'is_selected_tipo': selected_tipo_forma==1?true:false}\">Desplegable institucional</p>\r\n            <p class=\"hoverable_txt\" (click)=\"_show_modal_matriz(2)\" [ngClass]=\"{'is_selected_tipo': selected_tipo_forma==2?true:false}\">Desplegable libre</p>\r\n            <p class=\"hoverable_txt\" (click)=\"_show_modal_matriz(3)\" [ngClass]=\"{'is_selected_tipo': selected_tipo_forma==3?true:false}\">Númerico entero</p>\r\n            <p class=\"hoverable_txt\" (click)=\"_show_modal_matriz(4)\" [ngClass]=\"{'is_selected_tipo': selected_tipo_forma==4?true:false}\">Númerico decimal</p>\r\n            <p class=\"hoverable_txt\" (click)=\"_show_modal_matriz(5)\" [ngClass]=\"{'is_selected_tipo': selected_tipo_forma==5?true:false}\">Selección única</p>\r\n            <p class=\"hoverable_txt\" (click)=\"_show_modal_matriz(6)\" [ngClass]=\"{'is_selected_tipo': selected_tipo_forma==6?true:false}\">Selección multiple</p>\r\n          </div>\r\n    </ng-container>\r\n    <ng-template #extraTemplatePre>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 text-left\"><button type=\"button\" class=\"btn btn-default-custom\" (click)=\"cerrar_pre_modal()\"><i class=\"fa fa-ban\" aria-hidden=\"true\"></i> Cerrar</button></div>\r\n        </div>  \r\n    </ng-template>\r\n</nz-modal>\r\n\r\n\r\n\r\n<ng-container *ngIf=\"show_modal_matriz\">\r\n    <app-modal-registro-columna-ext\r\n        [isVisibleModalMatriz]=\"show_modal_matriz\" \r\n        [modal_width]=\"_modal_width\"\r\n        [title]=\"nombre_columna\"\r\n        [forma]=\"selected_forma\"\r\n        [array_tipo_pregunta]=\"array_tipo_pregunta\"\r\n        [array_maestro_institucional]=\"array_maestro_institucional\"\r\n        (onCloseModalMatriz)=\"handleOnCloseModalMatriz($event)\"\r\n        (onSaveDataForma)=\"handleOnSaveFormaColumnaMatriz($event)\">\r\n    </app-modal-registro-columna-ext>\r\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/components/re-preguntas-encuesta-extranet/re-preguntas-encuesta-extranet.component.html":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/components/re-preguntas-encuesta-extranet/re-preguntas-encuesta-extranet.component.html ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ng-container>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 text-left\">\r\n            <button class=\"btn btn-primary-custom\" (click)=\"md_add_edit_pregunta()\">\r\n                <i class=\"fa fa-plus-circle\"></i> Agregar pregunta\r\n            </button>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n<ng-container>\r\n    <div class=\"table-responsive table-striped table-bordered table-hover\">\r\n        <nz-table #ajaxTable class=\"container-table-custom\" nzShowSizeChanger [nzFrontPagination]=\"true\"\r\n        [nzBordered]=\"true\" [nzData]=\"PreguntasList\" [nzLoading]=\"cargando_tabla\">\r\n\r\n            <thead>\r\n                <tr>\r\n                    <th width=\"90\">N°</th>\r\n                    <th width=\"550\">Pregunta</th>\r\n                    <th>Tipo</th>\r\n                    <th>Categoría</th>\r\n                    <th>Sub-Categoría</th>\r\n                    <th width=\"100\">Acciones</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of ajaxTable.data; let i = index\">\r\n                    <td align=\"center\">{{ item.idx+1 }}</td>\r\n                    <td>{{ item.pregunta}}</td>\r\n                    <td>{{ item.tipo_pregunta}}</td>\r\n                    <td>{{ item.categoria}}</td>\r\n                    <td>{{ item.sub_categoria}}</td>          \r\n                    <td align=\"center\" >\r\n                        <ng-container>\r\n                            <a class=\"btn btn-icon\"  data-tooltip=\"tooltip\" data-placement=\"bottom\" \r\n                            title=\"Editar pregunta\" (click)=\"md_add_edit_pregunta(item.idx,item.por_defecto)\">\r\n                                <i class=\"fa fa-edit\" aria-hidden=\"true\"></i>\r\n                            </a>\r\n                        </ng-container>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</ng-container>\r\n<div class=\"row\" style=\"margin-top: 15px;\">\r\n    <div class=\"col-sm-6 text-left\">\r\n        <button type=\"button\" class=\"btn btn-default-custom\" (click)=\"send_to_datos()\">\r\n            Retornar\r\n        </button>\r\n    </div>\r\n    <div class=\"col-sm-6 text-right\">\r\n        <!--<button type=\"button\" class=\"btn btn-primary-custom\" (click)=\"save_update_preguntas()\" ><i class=\"fa fa-save\"></i> Guardar</button>\r\n        &nbsp;&nbsp;-->\r\n        <button type=\"button\" *ngIf=\"!encuesta_data.encuesta.es_todos\" class=\"btn btn-primary-custom\" (click)=\"save_update_preguntas(false,true)\" ><i class=\"fa fa-paper-plane\"></i> Guardar</button>\r\n    </div>\r\n</div>\r\n\r\n\r\n<ng-container *ngIf=\"show_modal_pregunta\">\r\n    <app-re-modal-registro-pregunta-extranet\r\n        [isVisibleModal]=\"show_modal_pregunta\" \r\n        [title]=\"title_modal\"\r\n        [pregunta]=\"selected_pregunta\"\r\n        [preguntas_condicionales]=\"PreguntasList_Condicionales\"\r\n        [is_first]=\"is_first\"\r\n        [es_por_defecto]=\"es_por_defecto\"\r\n        [id_encuesta]=\"id_encuesta\"\r\n        (onCloseModal)=\"handleOnCloseModal($event)\"\r\n        (onSaveDataPregunta)=\"handleOnSaveDataPregunta($event)\">\r\n    </app-re-modal-registro-pregunta-extranet>\r\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/re-edit-encuesta-data-extranet.component.html":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/re-edit-encuesta-data-extranet.component.html ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-scale-multiple\">\r\n<p style=\"font-size: 20px; color: white\">Procesando información, por favor no cierre la ventana.</p>\r\n</ngx-spinner>\r\n<br>\r\n<h1 class=\"title-custom\">Configuración de encuesta</h1>\r\n<hr class=\"mt-0\">\r\n<ng-container >\r\n    <nz-tabset (nzSelectedIndexChange)=\"show_tab_by_index($event)\" [nzSelectedIndex]=\"index_tab\">\r\n        <nz-tab *ngFor=\"let tab of tabs\" nzClosable [nzTitle]=\"tab.title\" [nzDisabled]=\"tab.disabled\"></nz-tab>\r\n    </nz-tabset>\r\n\r\n    \r\n    <app-re-datos-encuesta-extranet *ngIf=\"index_tab==0\" [encuesta_data]=\"encuesta_data\" \r\n    (onSaveUpdateEncuesta)=\"handleSaveUpdateEncuesta($event)\"\r\n    (onChangeAllPersonalStatus)=\"handleChangeAllPersonalStatus($event)\"></app-re-datos-encuesta-extranet>\r\n    <app-re-preguntas-encuesta-extranet *ngIf=\"index_tab==1\" [encuesta_data]=\"encuesta_data\" \r\n    [id_encuesta]=\"id_encuesta\"\r\n    (onPublishSuccess)=\"handlePublishSuccess($event)\"\r\n    (onGoDatos)=\"handleGoDatos($event)\"\r\n    (onGoEncuestados)=\"handleGoEncuestados($event)\"></app-re-preguntas-encuesta-extranet>\r\n</ng-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/subir-resultados-extranet/subir-resultados-extranet.component.html":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/subir-resultados-extranet/subir-resultados-extranet.component.html ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-modal \r\n  [(nzVisible)]=\"visible\" \r\n  nzTitle=\"Subir resultados de data analizada\" \r\n  [nzWidth]=\"900\" \r\n  nzClosable=\"false\"\r\n  [nzFooter]=\"extraTemplate\">\r\n    <ng-container >\r\n        <div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Buscar número de informe</label>\r\n                        <div class=\"input-group\">\r\n                            <input  nz-input class=\"form-control\" \r\n                            placeholder=\"--Ingresar número de informe--\"\r\n                            [(ngModel)]=\"frm.nro_informe\">\r\n                            <div class=\"file-input-wrapper input-group-btn\">\r\n                                <button type=\"button\" class=\"btn btn-primary-custom btn-file-input\"  \r\n                                    (click)=\"search_nro_SITRADOC()\">\r\n                                    <i class=\"fa fa-search\"></i>\r\n                                </button> \r\n                                <button type=\"button\" class=\"btn btn-primary-custom btn-file-input\"  \r\n                                    (click)=\"clean_nro()\">\r\n                                    <i class=\"fa fa-times\"></i>\r\n                                </button>      \r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"error_nro_informe\" class=\"has-error\">\r\n                            <div class=\"ant-form-explain\">\r\n                            Debe ingresar un número de informe de SITRADOC válido.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6 col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Ver informe</label>\r\n                        <div class=\"input-group\">\r\n                            <div class=\"file-input-wrapper input-group-btn\">\r\n                                <button type=\"button\" class=\"btn btn-primary-custom btn-file-input\"  \r\n                                [disabled]=\"disabled_view_btn\"\r\n                                (click)=\"see_documento()\">\r\n                                    <i class=\"fa fa-eye\"></i>\r\n                                </button>      \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Resultados de data analizada completo</label>\r\n                        <app-file-uploader-custom  \r\n                        [fileInfo]=\"true\"  \r\n                        [id]=\"frm.iden_completo\" \r\n                        [(Files)]=\"_imagen_archivo\" \r\n                        [(Uploading)]=\"estaGuardando\"\r\n                        [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                        [esBorrador]=\"false\" \r\n                        (FileChange)=\"set_imagen_iden($event,1)\"\r\n                        (onRemovedIdFile)=\"handleRemovedFilePresentacion($event,1)\"\r\n                        [extensionAceptados]=\"imagen_extensionAceptados\" \r\n                        [tiposMimePermitidos]=\"imagen_MimePermitidos\"\r\n                        [error_msg]=\"'Debe adjuntar un pdf.'\"\r\n                        [view_width]=\"600\"\r\n                        [puedeVerArchivo]=\"true\"\r\n                        [url]=\"url\" \r\n                        [loading]=\"estaGuardando\">\r\n                        </app-file-uploader-custom>\r\n                        <div *ngIf=\"error_completo\" class=\"has-error\">\r\n                            <div class=\"ant-form-explain\">\r\n                            Debe ingresar un archivo pdf.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6 col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Resultados de data analizada para encuestado</label>\r\n                        <app-file-uploader-custom  \r\n                        [fileInfo]=\"true\"  \r\n                        [id]=\"frm.iden_encuestado\" \r\n                        [(Files)]=\"_imagen_archivo\" \r\n                        [(Uploading)]=\"estaGuardando\"\r\n                        [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                        [esBorrador]=\"false\" \r\n                        (FileChange)=\"set_imagen_iden($event,2)\"\r\n                        (onRemovedIdFile)=\"handleRemovedFilePresentacion($event,2)\"\r\n                        [extensionAceptados]=\"imagen_extensionAceptados\" \r\n                        [tiposMimePermitidos]=\"imagen_MimePermitidos\"\r\n                        [error_msg]=\"'Debe adjuntar un pdf.'\"\r\n                        [view_width]=\"600\"\r\n                        [puedeVerArchivo]=\"true\"\r\n                        [url]=\"url\" \r\n                        [loading]=\"estaGuardando\">\r\n                        </app-file-uploader-custom>\r\n                        <div *ngIf=\"error_encuestado\" class=\"has-error\">\r\n                            <div class=\"ant-form-explain\">\r\n                            Debe ingresar un archivo pdf.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n    <ng-template #extraTemplate>      \r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 text-left\"><button type=\"button\" class=\"btn btn-default-custom\" (click)=\"close_modal()\"> Cancelar</button></div>\r\n            <div class=\"col-sm-6 text-right\"><button type=\"button\" class=\"btn btn-primary-custom\" (click)=\"save_and_close()\" ><i class=\"fa fa-save\" aria-hidden=\"true\"></i> Guardar</button></div>\r\n        </div>  \r\n    </ng-template>\r\n</nz-modal>\r\n\r\n\r\n\r\n<nz-modal \r\n  [(nzVisible)]=\"show_modal_pdf\" \r\n  [nzStyle]=\"{ top: '20px' }\"\r\n  nzTitle=\"Informe {{frm.nro_informe}}\" \r\n  [nzWidth]=\"700\" \r\n  nzClosable=\"false\"\r\n  [nzFooter]=\"footerTempPDF\">\r\n    <ng-container >\r\n        <div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <ng-container *ngIf=\"_loaded_pdf_informe_sitradoc\">\r\n                        <iframe width=\"100%\" height=\"450px\" frameBorder=\"0\" [src]=\"_urlArchivo_sitradoc\"></iframe>\r\n                    </ng-container>   \r\n                    <ng-container *ngIf=\"!_loaded_pdf_informe_sitradoc\">\r\n                        <img src=\"../../../../../../../../assets/images/Imagen_no_disponible.png\" width=\"80%\" >\r\n                    </ng-container>   \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n    <ng-template #footerTempPDF>      \r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 text-left\"><button type=\"button\" class=\"btn btn-default-custom\" (click)=\"close_modal_pdf()\"> Cerrar</button></div>\r\n        </div>  \r\n    </ng-template>\r\n</nz-modal>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/datos-encuesta-view-extranet/datos-encuesta-view-extranet.component.html":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/datos-encuesta-view-extranet/datos-encuesta-view-extranet.component.html ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<form [formGroup]=\"formMACRO\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Titulo de encuesta:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control nzErrorTip=\"Debe ingresar el titulo.\">\r\n                        <nz-input-group>\r\n                            <input type=\"text\" nz-input formControlName=\"Titulo\" \r\n                            class=\"form-control\" placeholder=\"--Ingresar titulo--\"\r\n                            [(ngModel)]=\"frm_main_data.titulo\"  [disabled]=\"true\" nzDisabled/>\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Encabezado:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control nzErrorTip=\"Debe ingresar el encabezado.\">\r\n                        <nz-input-group>\r\n                            <input type=\"text\" nz-input formControlName=\"Encabezado\" \r\n                            class=\"form-control\" placeholder=\"--Ingresar encabezado--\"\r\n                            [(ngModel)]=\"frm_main_data.encabezado\" [disabled]=\"true\" nzDisabled/>\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Objetivo:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control nzErrorTip=\"Debe ingresar el objetivo.\">\r\n                        <nz-input-group>\r\n                            <textarea formControlName=\"Objetivo\" [disabled]=\"true\" nz-input nzDisabled class=\"form-control\" \r\n                            [(ngModel)]=\"frm_main_data.objetivo\" placeholder=\"--Ingresar objetivo--\"></textarea>\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Descripción:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control nzErrorTip=\"Debe ingresar una descripción.\">\r\n                        <nz-input-group>\r\n                            <textarea formControlName=\"Descripcion\"  [disabled]=\"true\" nz-input\r\n                            nzDisabled\r\n                            class=\"form-control\" \r\n                            [(ngModel)]=\"frm_main_data.descripcion\" placeholder=\"--Ingresar una breve descripción--\"></textarea>\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Fecha y hora de inicio de vigencia:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control nzErrorTip=\"Debe ingresar fecha y hora.\">\r\n                        <nz-input-group>\r\n                            <nz-date-picker formControlName=\"FechaHoraInicio\" \r\n                            nzDisabled\r\n                            [(ngModel)]=\"frm_main_data.fecha_inicio\"\r\n                            nzShowTime nzFormat=\"dd/MM/yyyy HH:mm a\" ngModel\r\n                            ></nz-date-picker>\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Fecha y hora de fin de vigencia:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control nzErrorTip=\"Debe ingresar fecha y hora.\">\r\n                        <nz-input-group>\r\n                            <nz-date-picker formControlName=\"FechaHoraFin\" nzDisabled\r\n                            [(ngModel)]=\"frm_main_data.fecha_fin\"\r\n                            nzShowTime nzFormat=\"dd/MM/yyyy HH:mm a\" ngModel\r\n                            ></nz-date-picker>\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Tiempo estimado en minutos:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control nzErrorTip=\"Debe ingresar el tiempo estimado.\">\r\n                        <nz-input-group>\r\n                            <nz-input-number \r\n                                nzDisabled\r\n                                formControlName=\"TiempoEstimado\"\r\n                                [(ngModel)]=\"frm_main_data.tiempo_estimado\" \r\n                                [nzMin]=\"1\" \r\n                                [nzMax]=\"300\" \r\n                                [nzStep]=\"1\">\r\n                            </nz-input-number>\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-5\">\r\n            <p>\r\n                <label nz-checkbox  formControlName=\"EsAnonima\"  nzDisabled\r\n                [(ngModel)]=\"frm_main_data.es_anonima\" \t>Es una encuesta anónima</label> \r\n            </p>\r\n            <p>\r\n                <label nz-checkbox  formControlName=\"EsParaTodos\" \r\n                [(ngModel)]=\"frm_main_data.es_todos\" nzDisabled\r\n                >Es una encuesta para todos los trabajadores</label> \r\n            </p>\r\n            <div class=\"form-group\" *ngIf=\"_show_mensaje_bienvenida_anonima\">\r\n                <label for=\"\">Mensaje para encuesta anónima:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control>\r\n                        <nz-input-group>\r\n                            <textarea formControlName=\"MensajeAnonimo\"[disabled]=\"true\"  nz-input\r\n                            nzDisabled\r\n                            class=\"form-control\" \r\n                            [(ngModel)]=\"frm_main_data.mensaje_es_anonima\" placeholder=\"--Ingresar mensaje para anónimos--\"></textarea>\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <hr class=\"mt-0\">\r\n    <h5 class=\"title-custom\">Presentación</h5>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Adjuntar imagen en segundo plano (pasar el mouse)</label>\r\n                <app-file-uploader-custom  \r\n                [puedeEliminarArchivo]=\"false\"\r\n                [puedeCargarArchivo]=\"false\"\r\n                [fileInfo]=\"true\"  \r\n                [id]=\"frm_main_data.iden_imagen_presentacion\" \r\n                [(Files)]=\"_imagen_archivo\" \r\n                [(Uploading)]=\"estaGuardando\"\r\n                [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                [esBorrador]=\"false\" \r\n                [extensionAceptados]=\"imagen_extensionAceptados\" \r\n                [tiposMimePermitidos]=\"imagen_MimePermitidos\"\r\n                [error_msg]=\"'Debe adjuntar una imagen.'\"\r\n                [view_width]=\"600\"\r\n                [puedeVerArchivo]=\"true\"\r\n                [url]=\"url\" \r\n                [loading]=\"estaGuardando\">\r\n                </app-file-uploader-custom>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\" *ngIf=\"!_show_mensaje_bienvenida_anonima\">\r\n                <label for=\"\">Mensaje corto de presentación:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control nzErrorTip=\"Debe ingresar el mensaje corto de presentación.\">\r\n                        <nz-input-group>\r\n                            <input type=\"text\"[disabled]=\"true\" nz-input nzDisabled\r\n                            formControlName=\"MensajePresentacion\" \r\n                            class=\"form-control\" placeholder=\"--Ingresar mensaje corto de presentación--\"\r\n                            [(ngModel)]=\"frm_main_data.mensaje_corto_presentacion\" />\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <hr class=\"mt-0\">\r\n    <h5 class=\"title-custom\">Mensaje de bienvenida</h5>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Indicaciones de encuesta</label>\r\n                <div style=\"border: 1px solid rgb(217, 217, 217) !important;\">\r\n                    <ckeditor [editor]=\"editor\" [config]=\"configEditor\" [(ngModel)]=\"frm_welcome_data.indicaciones\" \r\n                    formControlName=\"IndicacionesBienvenida\"\r\n                    placeholder=\"--Ingresar indicaciones--\"\r\n                    [disabled]=\"true\"\r\n                    (ready)=\"onReady($event)\" (change)=\"onChange($event)\"></ckeditor>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\">Adjuntar audio de mensaje de bienvenida:</label>\r\n                <div>\r\n                    <app-audio-uploader-custom \r\n                    [fileInfo]=\"true\" \r\n                    [puedeEliminarArchivo]=\"false\"\r\n                    [puedeCargarArchivo]=\"false\"\r\n                    [id]=\"frm_welcome_data.iden_audio\" \r\n                    [(Files)]=\"audio_archivo\" \r\n                    [(Uploading)]=\"audio_estaGuardando\"\r\n                    [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                    [esBorrador]=\"false\" \r\n                    [puedeVerArchivo]=\"true\"\r\n                            [url]=\"url\" \r\n                            [loading]=\"audio_estaGuardando\">\r\n                    </app-audio-uploader-custom>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Tipo de archivo de bienvenida:</label>\r\n                <div>\r\n                    <nz-form-item>\r\n                        <nz-form-control nzErrorTip=\"Debe seleccionar el tipo de archivo de bienvenida.\">\r\n                            <nz-input-group>\r\n                                <nz-select nzAllowClear nzShowSearch \r\n                                nzDisabled\r\n                                nzPlaceHolder=\"--Seleccionar--\"\r\n                                [(ngModel)]=\"frm_welcome_data.id_tipo_archivo\"\r\n                                formControlName=\"TipoArchivoBienvenida\">\r\n                                    <ng-container *ngFor=\"let item of array_tipo_file\">\r\n                                        <nz-option [nzValue]=\"item.id_enumerado\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                    </ng-container>\r\n                                </nz-select>\r\n                            </nz-input-group>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" [hidden]=\"!show_url_welcome\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Url de video de bienvenida:</label>\r\n                <div>\r\n                    <input type=\"text\" nz-input [disabled]=\"true\" nzDisabled class=\"form-control\" \r\n                    formControlName=\"UrlMultimediaBienvenida\"\r\n                    placeholder=\"--https://www.youtube.com/watch?v=FM7MFYoylVs--\" \r\n                    formControlName=\"UrlMultimediaBienvenida\"\r\n                    [(ngModel)]=\"frm_welcome_data.url_video\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\"[hidden]=\"!show_file_input_welcome\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Adjuntar imagen de bienvenida:</label>\r\n                <div>\r\n                    <app-file-uploader-custom  \r\n                    [puedeEliminarArchivo]=\"false\"\r\n                    [puedeCargarArchivo]=\"false\"\r\n                    [fileInfo]=\"true\"  \r\n                    [id]=\"frm_welcome_data.iden_imagen\" \r\n                    [(Files)]=\"archivo\" \r\n                    [(Uploading)]=\"estaGuardando\"\r\n                    [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                    [esBorrador]=\"false\" \r\n                    [extensionAceptados]=\"imagen_extensionAceptados\"\r\n                    [tiposMimePermitidos]=\"imagen_MimePermitidos\"\r\n                    [error_msg]=\"'Debe adjuntar una imagen.'\"\r\n                    [view_width]=\"600\"\r\n                    [puedeVerArchivo]=\"true\"\r\n                            [url]=\"url\" \r\n                            [loading]=\"estaGuardando\">\r\n                    </app-file-uploader-custom>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <hr class=\"mt-0\">\r\n    <h5 class=\"title-custom\">Mensaje de agradecimiento</h5>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Titulo de mensaje de agradecimiento:</label>\r\n                <nz-form-item>\r\n                    <nz-form-control nzErrorTip=\"Debe ingresar el mensaje de agradecimiento.!\">\r\n                        <nz-input-group>\r\n                            <input type=\"text\" [disabled]=\"true\" nz-input nzDisabled formControlName=\"IndicacionesAgradecimiento\" \r\n                            class=\"form-control\" placeholder=\"--Ingresar mensaje de agradecimiento--\"\r\n                            [(ngModel)]=\"frm_greet_data.mensaje_agradecimiento\" />\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\">Adjuntar audio de mensaje de agradecimiento:</label>\r\n                <div>\r\n                    <app-audio-uploader-custom  \r\n                    [fileInfo]=\"true\" \r\n                    [puedeEliminarArchivo]=\"false\"\r\n                    [puedeCargarArchivo]=\"false\"\r\n                    [id]=\"frm_greet_data.iden_audio\" \r\n                    [(Files)]=\"audio_archivo\" \r\n                    [(Uploading)]=\"audio_estaGuardando\"\r\n                    [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                    [esBorrador]=\"false\" \r\n                    [puedeVerArchivo]=\"true\"\r\n                            [url]=\"url\" \r\n                            [loading]=\"audio_estaGuardando\">\r\n                    </app-audio-uploader-custom>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Tipo de archivo de agradecimiento:</label>\r\n                <div>\r\n                    <nz-form-item>\r\n                        <nz-form-control nzErrorTip=\"Debe seleccionar un tipo de archivo.\">\r\n                            <nz-input-group>\r\n                                <nz-select nzAllowClear nzShowSearch \r\n                                nzPlaceHolder=\"--Seleccionar--\"\r\n                                nzDisabled\r\n                                [(ngModel)]=\"frm_greet_data.id_tipo_archivo\"\r\n                                formControlName=\"TipoArchivoAgradecimiento\">\r\n                                    <ng-container *ngFor=\"let item of array_tipo_file\">\r\n                                        <nz-option [nzValue]=\"item.id_enumerado\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                    </ng-container>\r\n                                </nz-select>\r\n                            </nz-input-group>\r\n                        </nz-form-control>\r\n                    </nz-form-item>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\"[hidden]=\"!show_file_agradecimiento\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Adjuntar imagen de agradecimiento:</label>\r\n                <div>\r\n                    <app-file-uploader-custom  \r\n                    [puedeEliminarArchivo]=\"false\"\r\n                    [puedeCargarArchivo]=\"false\"\r\n                    [fileInfo]=\"true\"  \r\n                    [id]=\"frm_greet_data.iden_imagen\" \r\n                    [(Files)]=\"archivo\" \r\n                    [(Uploading)]=\"estaGuardando\"\r\n                    [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                    [esBorrador]=\"false\" \r\n                    [extensionAceptados]=\"imagen_extensionAceptados\"\r\n                    [tiposMimePermitidos]=\"imagen_MimePermitidos\"\r\n                    [error_msg]=\"'Debe adjuntar una imagen.'\"\r\n                    [view_width]=\"600\"\r\n                    [puedeVerArchivo]=\"true\"\r\n                            [url]=\"url\" \r\n                            [loading]=\"estaGuardando\">\r\n                    </app-file-uploader-custom>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-5\">\r\n            <div class=\"form-group\" [hidden]=\"!show_url\">\r\n                <label for=\"\"><span class=\"span_required\">*</span> Url de video de agradecimiento:</label>\r\n                <div>\r\n                    <input type=\"text\" nz-input [disabled]=\"true\" nzDisabled  class=\"form-control\" \r\n                    placeholder=\"Url de video de agradecimiento\" \r\n                    formControlName=\"UrlMultimediaAgradecimiento\"\r\n                    [(ngModel)]=\"frm_greet_data.url_video\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-6 text-left\">\r\n        <button type=\"button\" class=\"btn btn-default-custom\" \r\n        [routerLink]=\"['/sistema/gestion-extranet/gestor-encuestas-extranet']\">\r\n            Cancelar\r\n        </button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/encuestados-encuesta-view-extranet/encuestados-encuesta-view-extranet.component.html":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/encuestados-encuesta-view-extranet/encuestados-encuesta-view-extranet.component.html ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ng-container>\r\n    <div style=\"margin-bottom:5px;\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"\">RUC o DNI</label>\r\n                    <input class=\"form-control\" type=\"text\" \r\n                    placeholder=\"--Filtrar por RUC o DNI--\"\r\n                    [(ngModel)]=\"form.dni\" >\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"\">Razón social</label>\r\n                    <input class=\"form-control\" type=\"text\" \r\n                    placeholder=\"--Filtrar por Razón social--\"\r\n                    [(ngModel)]=\"form.nombres\" >\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-3 text-right\">\r\n                <div class=\"form-group\">\r\n                    <br>\r\n                    <button type=\"button\" class=\"btn btn-primary-custom\" (click)=\"get_list()\">\r\n                        <i class=\"fa fa-search\"></i> Filtrar\r\n                    </button>\r\n                    &nbsp;&nbsp;\r\n                    <button type=\"button\" class=\"btn btn-default-custom\" (click)=\"handleClickLimpiar()\">\r\n                        <i class=\"fa fa-eraser\"aria-hidden=\"true\"></i> Limpiar\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<ng-container>\r\n    <div class=\"table-responsive table-striped table-bordered table-hover\">\r\n        <nz-table #ajaxTable class=\"container-table-custom\" nzShowSizeChanger [nzFrontPagination]=\"true\"\r\n        [nzBordered]=\"true\" [nzData]=\"EncuestadosList\" [nzLoading]=\"cargando_tabla\">\r\n    \r\n            <thead>\r\n                <tr>\r\n                    <th WIDTH=\"50\">N°</th>\r\n                    <th WIDTH=\"550\"\r\n                    [nzShowSort]=\"true\"\r\n                    [nzSort]=\"null\"\r\n                    [nzSortKey]=\"'full_name'\"\r\n                    (nzSortChangeWithKey)=\"handleSortByKey($event,'string')\">\r\n                        RUC o DNI</th>\r\n                    <th WIDTH=\"550\"\r\n                    [nzShowSort]=\"true\"\r\n                    [nzSort]=\"null\"\r\n                    [nzSortKey]=\"'full_name'\"\r\n                    (nzSortChangeWithKey)=\"handleSortByKey($event,'string')\">\r\n                        Nombres y apellidos</th>\r\n                    <th WIDTH=\"550\"\r\n                    [nzShowSort]=\"true\"\r\n                    [nzSort]=\"null\"\r\n                    [nzSortKey]=\"'full_name'\"\r\n                    (nzSortChangeWithKey)=\"handleSortByKey($event,'string')\">\r\n                        Tipo de persona</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of ajaxTable.data; let i = index\">\r\n                    <td>{{ (pageSize * (pageIndex - 1)) + (i + 1) }}</td>\r\n                    <td>{{ item.numero_documento }} </td>  \r\n                    <td>{{ item.razon_social }} </td>  \r\n                    <td>{{ item.tipo_persona }} </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n    <div *ngIf=\"error_encuestados\" class=\"has-error\">\r\n        <div class=\"ant-form-explain\">\r\n        Debe ingresar al menos un encuestado.\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<div class=\"row\" style=\"margin-top: 15px;\">\r\n    <div class=\"col-sm-6 text-left\">\r\n        <button type=\"button\" class=\"btn btn-default-custom\" (click)=\"goback()\">\r\n            Retornar\r\n        </button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/modal-vista-pregunta-extranet/modal-vista-pregunta-extranet.component.html":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/modal-vista-pregunta-extranet/modal-vista-pregunta-extranet.component.html ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-modal \r\n  [(nzVisible)]=\"isVisibleModal\" \r\n  nzTitle=\"{{title}} pregunta\" \r\n  [nzWidth]=\"modal_width\" \r\n  nzClosable=\"false\"\r\n  [nzFooter]=\"extraTemplate\">\r\n    <ng-container >\r\n        <div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12 col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Pregunta</label>\r\n                        <input type=\"text\" [disabled]=\"true\" class=\"form-control\" \r\n                        placeholder=\"--Ingresar la pregunta--\"\r\n                        [(ngModel)]=\"frm.pregunta\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Tipo de pregunta</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe seleccionar el tipo de pregunta.\">\r\n                                <nz-input-group>\r\n                                    <nz-select nzAllowClear nzShowSearch nzPlaceHolder=\"--Seleccionar--\"\r\n                                    [(ngModel)]=\"frm.id_tipo_pregunta\"\r\n                                    (ngModelChange)=\"cargar_formato_byTipo($event)\"\r\n                                    nzDisabled \r\n                                    [formControl]=\"frmPRG.frmTipoPregunta\">\r\n                                        <ng-container *ngFor=\"let item of array_tipo_pregunta\">\r\n                                            <nz-option [nzValue]=\"item.id_enumerado\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                        </ng-container>\r\n                                    </nz-select>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\"></div>\r\n                <div class=\"col-md-4\">\r\n                    <br><br>\r\n                    <label nz-checkbox nzDisabled [formControl]=\"frmPRG.frmEsObligatorio\" \r\n                    [(ngModel)]=\"frm.es_obligatorio\" >La pregunta es obligatorio</label> \r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Categoría</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe seleccionar la categoría!\">\r\n                                <nz-input-group>\r\n                                    <nz-select nzAllowClear nzShowSearch nzPlaceHolder=\"--Seleccionar--\"\r\n                                    [(ngModel)]=\"frm.id_categoria\" nzDisabled\r\n                                    [formControl]=\"frmPRG.frmCategoria\">\r\n                                        <ng-container *ngFor=\"let item of array_categoria\">\r\n                                            <nz-option [nzValue]=\"item.id_categoria\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                        </ng-container>\r\n                                    </nz-select>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\"></div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Sub-Categoría</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe seleccionar la sub categoría!\">\r\n                                <nz-input-group>\r\n                                    <nz-select nzAllowClear nzShowSearch nzPlaceHolder=\"--Seleccionar--\"\r\n                                    [(ngModel)]=\"frm.id_sub_categoria\" nzDisabled\r\n                                    [formControl]=\"frmPRG.frmSubCategoria\">\r\n                                        <ng-container *ngFor=\"let item of array_sub_categoria_all\">\r\n                                            <nz-option [nzValue]=\"item.id_sub_categoria\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                        </ng-container>\r\n                                    </nz-select>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\">Descripción adicional</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control>\r\n                                <nz-input-group>\r\n                                    <textarea [disabled]=\"true\" \r\n                                    [formControl]=\"frmPRG.frmDescripcionAdicional\" nz-input class=\"form-control\" \r\n                                    [(ngModel)]=\"frm.descripcion\" placeholder=\"--Ingrese una breve descripción adicional--\"></textarea>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <label nz-checkbox nzDisabled [formControl]=\"frmPRG.frmEsCondicional\"\r\n                    [(ngModel)]=\"frm.es_condicional\" >La pregunta es condicional</label> \r\n                </div>\r\n                <div class=\"col-md-3\"></div>\r\n                <div class=\"col-md-4\" [hidden]=\"frmPRG.frmEsCondicional.value\">\r\n                    <label nz-checkbox nzDisabled [formControl]=\"frmPRG.frmEsCondicionada\" \r\n                    [(ngModel)]=\"frm.es_condicionada\" >La pregunta es condicionada</label> \r\n                </div>\r\n            </div>\r\n            <div class=\"row\" [hidden]=\"!frmPRG.frmEsCondicionada.value || frmPRG.frmEsCondicional.value\">\r\n                <div class=\"col-sm-12\">\r\n                    <br>\r\n                    <nz-collapse>\r\n                        <nz-collapse-panel [nzHeader]=\"'Pregunta condicional'\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"\"><span class=\"span_required\">*</span> Pregunta</label>\r\n                                        <nz-form-item>\r\n                                            <nz-form-control nzErrorTip=\"Debe seleccionar de pregunta.\">\r\n                                                <nz-input-group>\r\n                                                    <nz-select nzAllowClear nzShowSearch nzPlaceHolder=\"--Seleccionar--\"\r\n                                                    [(ngModel)]=\"frm.id_pregunta_condicional\"nzDisabled\r\n                                                    [formControl]=\"frmPRG.frmPreguntaCondicional\">\r\n                                                        <ng-container *ngFor=\"let item of preguntas_condicionales\">\r\n                                                            <nz-option [nzValue]=\"item.id_pregunta\" [nzLabel]=\"item.pregunta\"></nz-option>\r\n                                                        </ng-container>\r\n                                                    </nz-select>\r\n                                                </nz-input-group>\r\n                                            </nz-form-control>\r\n                                        </nz-form-item>\r\n                                    </div>\r\n                                </div>\r\n                                <!--\r\n                                <div class=\"col-sm-12\">\r\n                                    <ng-container *ngIf=\"selectedPreguntaCondicional\">\r\n                                        <app-app-preview-pregunta \r\n                                        [show_media]=\"false\" \r\n                                        [Pregunta]=\"selectedPreguntaCondicional\" \r\n                                        [respuesta]=\"respuesta_disparadora\"\r\n                                        (onClickSaveRespuesta)=\"handleClickSaveRespuestaCondicionada($event)\"\r\n                                        [isDisabled]=\"true\"\r\n                                        ></app-app-preview-pregunta>\r\n                                    </ng-container>\r\n                                </div>-->\r\n                            </div>\r\n                        </nz-collapse-panel>\r\n                    </nz-collapse>\r\n                </div>\r\n            </div>\r\n\r\n            <!--BEGIN FORMATOS-->\r\n            <div class=\"row\" *ngIf=\"frm.id_tipo_pregunta==_TIPO_PREGUNTA.desplegable_institucional\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Maestro institucional</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe seleccionar el maestro institucional!\">\r\n                                <nz-input-group>\r\n                                    <nz-select nzAllowClear nzShowSearch nzDisabled\r\n                                    [(ngModel)]=\"JSON_DESPLEGABLE_INSTITUCIONAL.tbl_data\"\r\n                                    [formControl]=\"frmMaestroInstitucional\"\r\n                                    nzPlaceHolder=\"--Seleccione--\">\r\n                                        <ng-container *ngFor=\"let item of array_maestro_institucional\">\r\n                                            <nz-option [nzValue]=\"item.id_enumerado\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                        </ng-container>\r\n                                    </nz-select>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"frm.id_tipo_pregunta==_TIPO_PREGUNTA.numerico_decimal\">\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Cantidad de digitos decimales</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe ingresar los digitos decimales!\">\r\n                                <nz-input-group>\r\n                                    <nz-input-number \r\n                                        [formControl]=\"frmCantidadDigitos\"\r\n                                        nzDisabled\r\n                                        [(ngModel)]=\"JSON_NUMERICO_DECIMAL.nro_decimal\" \r\n                                        [nzMin]=\"1\" \r\n                                        [nzMax]=\"5\" \r\n                                        [nzStep]=\"1\">\r\n                                    </nz-input-number>\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row col-sm-12\" *ngIf=\"\r\n            frm.id_tipo_pregunta==_TIPO_PREGUNTA.desplegable_libre\r\n            || frm.id_tipo_pregunta==_TIPO_PREGUNTA.seleccion_unica \r\n            || frm.id_tipo_pregunta==_TIPO_PREGUNTA.seleccion_multiple\">\r\n                <div class=\"panel panel-default panel-custom\">\r\n                    <div class=\"panel-heading\">Alternativas</div>\r\n                    <div class=\"panel-body\">                    \r\n                        <ng-container>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <div class=\"table-responsive table-striped table-bordered table-hover\">\r\n                                        <nz-table #ajaxTable class=\"container-table-custom\" nzShowSizeChanger \r\n                                        [nzFrontPagination]=\"true\" [nzBordered]=\"true\" [nzLoading]=\"cargando_tabla\" \r\n                                        [nzData]=\"array_alternativa_select\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th>N°</th>\r\n                                                    <th WIDTH=\"450\">Descripción</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let item of ajaxTable.data; let i = index\">\r\n                                                    <td align=\"center\">{{ (item.idx+1) }}</td>\r\n                                                    <td>\r\n                                                        <nz-form-item>\r\n                                                            <nz-form-control nzErrorTip=\"Debe ingresar la descripción!\">\r\n                                                                <nz-input-group>\r\n                                                                    <input class=\"form-control\"\r\n                                                                    [disabled]=\"true\"\r\n                                                                    type=\"text\" \r\n                                                                    [formControl]=\"frmAlternativaDescripcion[item.idx]\"\r\n                                                                    placeholder=\"--Ingresar descripción de opción--\"\r\n                                                                    [(ngModel)]=\"item.descripcion\" >\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                         </nz-form-item>\r\n                                                    </td>   \r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </nz-table>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ng-container>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"frm.id_tipo_pregunta==_TIPO_PREGUNTA.matriz\">\r\n                <div class=\"col-md-6 col-sm-12\">\r\n                    <div class=\"panel panel-default panel-custom\">\r\n                        <div class=\"panel-heading\">Filas</div>\r\n                        <div class=\"panel-body\">                    \r\n                            <ng-container>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12\">\r\n                                        <div class=\"table-responsive table-striped table-bordered table-hover\">\r\n                                            <nz-table #ajaxTableMatriz class=\"container-table-custom\" nzShowSizeChanger \r\n                                            [nzFrontPagination]=\"true\" [nzBordered]=\"true\" [nzLoading]=\"cargando_tabla\" \r\n                                            [nzData]=\"array_filas\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th>N°</th>\r\n                                                        <th WIDTH=\"400\">Descripción</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let item of ajaxTableMatriz.data;\">\r\n                                                        <td align=\"center\">{{ (item.idx+1) }}</td>\r\n                                                        <td>\r\n                                                            <nz-form-item>\r\n                                                                <nz-form-control nzErrorTip=\"Debe ingresar la descripción de fila\">\r\n                                                                    <nz-input-group>\r\n                                                                        <input class=\"form-control\"\r\n                                                                        [disabled]=\"true\"\r\n                                                                        type=\"text\" \r\n                                                                        [formControl]=\"frmFilaName[item.idx]\"\r\n                                                                        placeholder=\"--Ingresar descripción de fila--\"\r\n                                                                        [(ngModel)]=\"item.nombre_fila\" >\r\n                                                                    </nz-input-group>\r\n                                                                </nz-form-control>\r\n                                                             </nz-form-item>\r\n                                                        </td> \r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </nz-table>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"error_filas_matriz\" class=\"has-error\">\r\n                                        <div class=\"ant-form-explain\">\r\n                                            Debe ingresar por lo menos una (1) fila.\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-container>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6 col-sm-12\">\r\n                    <div class=\"panel panel-default panel-custom\">\r\n                        <div class=\"panel-heading\">Columnas</div>\r\n                        <div class=\"panel-body\">                    \r\n                            <ng-container>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12\">\r\n                                        <div class=\"table-responsive table-striped table-bordered table-hover\">\r\n                                            <nz-table #ajaxTableColumnas class=\"container-table-custom\" nzShowSizeChanger \r\n                                            [nzFrontPagination]=\"true\" [nzBordered]=\"true\" [nzLoading]=\"cargando_columnas\" \r\n                                            [nzData]=\"array_columnas\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th>N°</th>\r\n                                                        <th WIDTH=\"400\">Descripción</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let item of ajaxTableColumnas.data;\">\r\n                                                        <td align=\"center\">{{ (item.idx+1) }}</td>\r\n                                                        <td>\r\n                                                            <nz-form-item>\r\n                                                                <nz-form-control nzErrorTip=\"Debe ingresar la descripción de columna\">\r\n                                                                    <nz-input-group>\r\n                                                                        <input class=\"form-control\" [disabled]=\"true\" type=\"text\" \r\n                                                                        [formControl]=\"frmColumnaName[item.idx]\"\r\n                                                                        placeholder=\"--Ingresar descripción de columna--\"\r\n                                                                        [(ngModel)]=\"item.nombre_columna\" >\r\n                                                                    </nz-input-group>\r\n                                                                </nz-form-control>\r\n                                                            </nz-form-item>\r\n                                                        </td>          \r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </nz-table>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"error_columnas_matriz\" class=\"has-error\">\r\n                                        <div class=\"ant-form-explain\">\r\n                                            Debe ingresar por lo menos una (1) columna.\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-container>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--END FORMATOS-->\r\n            <div class=\"row\">\r\n                <div class=\"col-md-5\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Indicar que tipo de archivo utilizará</label>\r\n                        <div>\r\n                            <nz-form-item>\r\n                                <nz-form-control nzErrorTip=\"Debe seleccionar el tipo de archivo\">\r\n                                    <nz-input-group>\r\n                                        <nz-select nzAllowClear nzShowSearch nzPlaceHolder=\"--Seleccionar--\"\r\n                                        [(ngModel)]=\"frm.id_tipo_archivo\"\r\n                                        nzDisabled\r\n                                        (ngModelChange)=\"set_tipo_file()\"\r\n                                        [formControl]=\"frmPRG.frmTipoArchivo\">\r\n                                            <ng-container *ngFor=\"let item of array_tipo_file\">\r\n                                                <nz-option [nzValue]=\"item.id_enumerado\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                            </ng-container>\r\n                                        </nz-select>\r\n                                    </nz-input-group>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-1\"></div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\"[hidden]=\"!show_file_uploader\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Adjuntar imagen de explicación:</label>\r\n                        <div>\r\n                            <app-file-uploader-custom  \r\n                            [puedeEliminarArchivo]=\"false\"\r\n                            [puedeCargarArchivo]=\"false\"\r\n                            [fileInfo]=\"true\"  \r\n                            [id]=\"frm.iden_imagen\" \r\n                            [(Files)]=\"archivo\" \r\n                            [(Uploading)]=\"estaGuardando\"\r\n                            [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                            [esBorrador]=\"false\" \r\n                            [extensionAceptados]=\"_extensionAceptados\"\r\n                            [tiposMimePermitidos]=\"imagen_MimePermitidos\"\r\n                            (FileChange)=\"set_file_iden($event)\"\r\n                            [view_width]=\"600\"\r\n                            [puedeVerArchivo]=\"true\"\r\n                                    [url]=\"url\" \r\n                                    [loading]=\"estaGuardando\">\r\n                            </app-file-uploader-custom>\r\n                            <div *ngIf=\"error_imagen\" class=\"has-error\">\r\n                                <div class=\"ant-form-explain\">\r\n                                    Debe adjuntar una imagen.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\" [hidden]=\"!show_url\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Url de video de explicación de la plataforma:</label>\r\n                        <div>\r\n                            <input type=\"text\" class=\"form-control\" \r\n                            [disabled]=\"true\"\r\n                            (ngModelChange)=\"this.error_video=false;\"\r\n                            placeholder=\"--https://www.youtube.com/watch?v=FM7MFYoylVs--\" \r\n                            [(ngModel)]=\"frm.url_video\">\r\n                        </div>\r\n                        <div *ngIf=\"error_video\" class=\"has-error\">\r\n                            <div class=\"ant-form-explain\">\r\n                                Debe ingresar un url válido.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n    <ng-template #extraTemplate>      \r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 text-left\"><button type=\"button\" class=\"btn btn-default-custom\" (click)=\"handleCancelarFormularioModal()\"><i class=\"fa fa-ban\" aria-hidden=\"true\"></i> Cancelar</button></div>\r\n        </div>  \r\n    </ng-template>\r\n</nz-modal>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/notificaciones-view-extranet/notificaciones-view-extranet.component.html":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/notificaciones-view-extranet/notificaciones-view-extranet.component.html ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\r\n    <div class=\"table-responsive table-striped table-bordered table-hover\">\r\n        <nz-table #ajaxTable class=\"container-table-custom\" nzShowSizeChanger [nzFrontPagination]=\"true\"\r\n        [nzBordered]=\"true\" [nzData]=\"NotificacionesList\" [nzLoading]=\"cargando_tabla\">\r\n\r\n            <thead>\r\n                <tr>\r\n                    <th width=\"10\">N°</th>\r\n                    <th width=\"350\">TÍTULO DE NOTIFICACIÓN</th>\r\n                    <th width=\"50\">FECHA</th>\r\n                    <th width=\"150\">DIRIGIDO A</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of ajaxTable.data; let i = index\">\r\n                    <td>{{ item.idx+1 }}</td>\r\n                    <td>{{ item.titulo}}</td>     \r\n                    <td>{{ item.fecha_notificacion | date: 'dd/MM/yyyy hh:mm a'}}</td>     \r\n                    <td>{{ item.dirigido_texto}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/preguntas-encuesta-view-extranet/preguntas-encuesta-view-extranet.component.html":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/preguntas-encuesta-view-extranet/preguntas-encuesta-view-extranet.component.html ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\r\n    <div class=\"table-responsive table-striped table-bordered table-hover\">\r\n        <nz-table #ajaxTable class=\"container-table-custom\" nzShowSizeChanger [nzFrontPagination]=\"true\"\r\n        [nzBordered]=\"true\" [nzData]=\"PreguntasList\" [nzLoading]=\"cargando_tabla\">\r\n\r\n            <thead>\r\n                <tr>\r\n                    <th width=\"90\">N°</th>\r\n                    <th width=\"550\">Pregunta</th>\r\n                    <th>Tipo</th>\r\n                    <th>Categoría</th>\r\n                    <th>Sub-Categoría</th>\r\n                    <th width=\"100\">Acciones</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of ajaxTable.data; let i = index\">\r\n                    <td align=\"center\">{{ item.idx+1 }}</td>\r\n                    <td>{{ item.pregunta}}</td>\r\n                    <td>{{ item.tipo_pregunta}}</td>\r\n                    <td>{{ item.categoria}}</td>\r\n                    <td>{{ item.sub_categoria}}</td>          \r\n                    <td align=\"center\" >\r\n                        <ng-container>\r\n                            <a class=\"btn btn-icon\"  data-tooltip=\"tooltip\" data-placement=\"bottom\" \r\n                            title=\"Ver pregunta\" (click)=\"md_add_edit_pregunta(item.idx)\">\r\n                                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\r\n                            </a>\r\n                        </ng-container>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"show_modal_pregunta\">\r\n    <app-modal-vista-pregunta-extranet\r\n        [isVisibleModal]=\"show_modal_pregunta\" \r\n        [title]=\"title_modal\"\r\n        [pregunta]=\"selected_pregunta\"\r\n        [preguntas_condicionales]=\"PreguntasList_Condicionales\"\r\n        [is_first]=\"is_first\"\r\n        [es_por_defecto]=\"es_por_defecto\"\r\n        [id_encuesta]=\"id_encuesta\"\r\n        (onCloseModal)=\"handleOnCloseModal($event)\">\r\n    </app-modal-vista-pregunta-extranet>\r\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/secciones-pregunta-view-extranet/secciones-pregunta-view-extranet.component.html":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/secciones-pregunta-view-extranet/secciones-pregunta-view-extranet.component.html ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ng-container>\r\n    <div class=\"table-responsive table-striped table-bordered table-hover\">\r\n        <nz-table #ajaxTable class=\"container-table-custom\" nzShowSizeChanger [nzFrontPagination]=\"true\"\r\n        [nzBordered]=\"true\" [nzData]=\"SeccionesList\" [nzLoading]=\"cargando_tabla\">\r\n\r\n            <thead>\r\n                <tr>\r\n                    <th width=\"10\">N°</th>\r\n                    <th width=\"550\">NOMBRE DE SECCIÓN</th>\r\n                \r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of ajaxTable.data; let i = index\">\r\n                    <td>{{ item.orden }}</td>\r\n                    <td>{{ item.seccion}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </nz-table>\r\n    </div>\r\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/vista-encuesta-extranet.component.html":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/vista-encuesta-extranet.component.html ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-scale-multiple\">\r\n<p style=\"font-size: 20px; color: white\">Procesando información, por favor no cierre la ventana.</p>\r\n</ngx-spinner>\r\n<br>\r\n<h1 class=\"title-custom\">Vista de encuesta</h1>\r\n<hr class=\"mt-0\">\r\n<ng-container >\r\n    <nz-tabset (nzSelectedIndexChange)=\"show_tab_by_index($event)\" [nzSelectedIndex]=\"index_tab\">\r\n        <nz-tab *ngFor=\"let tab of tabs\" nzClosable [nzTitle]=\"tab.title\"></nz-tab>\r\n    </nz-tabset>\r\n\r\n    <app-datos-encuesta-view-extranet *ngIf=\"index_tab==0\" \r\n    [encuesta_data]=\"encuesta_data\"\r\n    (onGoPreguntas)=\"handleGoPreguntas($event)\"></app-datos-encuesta-view-extranet>\r\n\r\n    <app-secciones-pregunta-view-extranet *ngIf=\"index_tab==1\" \r\n    [encuesta_data]=\"encuesta_data\" \r\n    [id_encuesta]=\"id_encuesta\"\r\n    (onGoDatos)=\"handleGoDatosSecciones($event)\"\r\n    (onGoEncuestados)=\"handleGoEncuestados($event)\"></app-secciones-pregunta-view-extranet>\r\n\r\n    <app-preguntas-encuesta-view-extranet *ngIf=\"index_tab==2\" \r\n    [encuesta_data]=\"encuesta_data\" \r\n    (onGoDatos)=\"handleGoDatos($event)\"\r\n    (onGoEncuestados)=\"handleGoEncuestados($event)\"\r\n    [id_encuesta]=\"id_encuesta\"></app-preguntas-encuesta-view-extranet>\r\n\r\n    <app-notificaciones-view-extranet *ngIf=\"index_tab==3\"\r\n    [encuesta_data]=\"encuesta_data\" \r\n    [id_encuesta]=\"id_encuesta\"\r\n    (onGoDatos)=\"handleGoDatosNotificaciones($event)\"\r\n    (onGoEncuestados)=\"handleGoEncuestados($event)\"></app-notificaciones-view-extranet>\r\n\r\n    <app-encuestados-encuesta-view-extranet *ngIf=\"index_tab==4\"\r\n    (onGoPreguntas)=\"handleGoEncuestados($event)\"\r\n    [id_encuesta]=\"id_encuesta\"></app-encuestados-encuesta-view-extranet>\r\n\r\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-resultados-cifras-extranet/vista-resultados-cifras-extranet.component.html":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-resultados-cifras-extranet/vista-resultados-cifras-extranet.component.html ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-scale-multiple\">\r\n    <p style=\"font-size: 20px; color: white\">Procesando información, por favor no cierre la ventana.</p>\r\n    </ngx-spinner>\r\n    <br>\r\n    <h3 class=\"title-custom\" style=\"color:#dc3545\">Resultados de data analizada</h3>\r\n    <hr class=\"mt-0\">\r\n    <ng-container >\r\n        <div class=\"row\" *ngIf=\"main_loaded\">\r\n            <div class=\"col-sm-12\" *ngIf=\"has_file_completo\">\r\n                <iframe [src]=\"b64_pdf_file_completo\" width=\"100%\" height=\"400px\"></iframe>\r\n            </div>\r\n            <div class=\"col-sm-12\" *ngIf=\"!has_file_completo\" align=\"center\">\r\n                <h3>Documento no disponible</h3>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"padding-top:20px\" *ngIf=\"main_loaded\">\r\n            <div class=\"col-sm-12\" *ngIf=\"has_file_encuestado\">\r\n                <iframe [src]=\"b64_pdf_file_encuestado\" width=\"100%\" height=\"500px\"></iframe>\r\n            </div>\r\n            <div class=\"col-sm-12\" *ngIf=\"!has_file_encuestado\" align=\"center\">\r\n                <h3>Documento no disponible</h3>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <button type=\"button\" class=\"btn btn-default-custom\" [routerLink]=\"['/sistema/gestion-extranet/gestor-encuestas-extranet']\">\r\n            <i class=\"fa fa-reply\" aria-hidden=\"true\"></i> Volver\r\n        </button>\r\n    </ng-container>");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/avance-resultados-extranet/avance-resultados-extranet.component.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/avance-resultados-extranet/avance-resultados-extranet.component.css ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lzdGVtYS9wYWdlcy9nZXN0aW9uLWV4dHJhbmV0L3BhZ2VzL2VuY3Vlc3Rhcy1leHRyYW5ldC9hdmFuY2UtcmVzdWx0YWRvcy1leHRyYW5ldC9hdmFuY2UtcmVzdWx0YWRvcy1leHRyYW5ldC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/avance-resultados-extranet/avance-resultados-extranet.component.ts":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/avance-resultados-extranet/avance-resultados-extranet.component.ts ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let AvanceResultadosExtranetComponent = class AvanceResultadosExtranetComponent {
        constructor() {
            this.visible = false;
            this.selected_encuesta = {};
            this.EncuestaAvanceList = [];
            this.onCloseModalResultados = new core_1.EventEmitter();
        }
        ngOnInit() {
            let selected = this.selected_encuesta;
        }
        close_modal() {
            this.onCloseModalResultados.emit(true);
        }
    };
    tslib_1.__decorate([
        core_1.Input()
    ], AvanceResultadosExtranetComponent.prototype, "visible", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], AvanceResultadosExtranetComponent.prototype, "selected_encuesta", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], AvanceResultadosExtranetComponent.prototype, "EncuestaAvanceList", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], AvanceResultadosExtranetComponent.prototype, "onCloseModalResultados", void 0);
    AvanceResultadosExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-avance-resultados-extranet',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./avance-resultados-extranet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/avance-resultados-extranet/avance-resultados-extranet.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./avance-resultados-extranet.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/avance-resultados-extranet/avance-resultados-extranet.component.css")).default]
        })
    ], AvanceResultadosExtranetComponent);
    exports.AvanceResultadosExtranetComponent = AvanceResultadosExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/configurar-encuestados-formulario-ext/configurar-encuestados-formulario-ext.component.ts":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/configurar-encuestados-formulario-ext/configurar-encuestados-formulario-ext.component.ts ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, _core_1, ng_zorro_antd_1, ngx_spinner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let ConfigurarEncuestadosFormularioExtComponent = class ConfigurarEncuestadosFormularioExtComponent {
        constructor(_encuestasConfigurarService, spinner, notification, _comunService) {
            this._encuestasConfigurarService = _encuestasConfigurarService;
            this.spinner = spinner;
            this.notification = notification;
            this._comunService = _comunService;
            this.isVisibleModal = false;
            this.listaEncuestados = [];
            this.pageIndex = 1;
            this.total = 0;
            this.pageSize = 10;
            this.cargando = true;
            this.estaGuardando = false;
            this.allChecked = false;
            this.indeterminate = true;
            this.ListTipoPersona = [{ id: 1, nombre: "Natural" }, { id: 2, nombre: "Juridica" }];
            this.form = {
                numero_documento: null,
                razon_social: null,
                id_tipo_persona: null,
                codigo_departamento: null,
                codigo_provincia: null,
                codigo_distrito: null,
            };
            this.array_encuestados = [];
            this.es_seleccionado = false;
            this.listaEncuestadosSeleccionados = [];
            this.list_seleccion = [];
            this.GetDepartamentos = () => {
                this._comunService.GetDepartamentos()
                    .then((datos) => {
                    this.listaDepartamento = datos;
                })
                    .catch(() => {
                    this.cargando = false;
                });
            };
            this.onChangeDepartamento = (item) => {
                this.GetProvincia();
            };
            this.GetProvincia = () => {
                this._comunService.GetProvincia(this.form.codigo_departamento)
                    .then((datos) => {
                    this.listaProvincia = datos;
                })
                    .catch(() => {
                    this.cargando = false;
                });
            };
            this.onChangeProvincia = (item) => {
                this.GetDistrito();
            };
            this.GetDistrito = () => {
                this._comunService.GetDistrito(this.form.codigo_departamento, this.form.codigo_provincia)
                    .then((datos) => {
                    this.listaDistrito = datos;
                })
                    .catch(() => {
                    this.cargando = false;
                });
            };
            this.handleCerrarFormularioModal = (force_select = false) => {
                if (force_select) {
                    if (this.listaEncuestadosSeleccionados.length == 0) {
                        this.createNotification("warning", "Advertencia", "Debe seleccionar al menos un encuestado");
                    }
                    else {
                        this.onEmitListaSeleccionada.emit(this.listaEncuestadosSeleccionados);
                    }
                }
                else {
                    this.onChangeVisible.emit(false);
                }
            };
            this.handleClickBuscar = (reset = false) => {
                if (reset) {
                    this.pageIndex = 1;
                }
                this.ListarEncuestados();
            };
            this.handleClickBuscarFrm = (reset = false) => {
                this.pageIndex = 1;
                this.ListarEncuestados(true);
            };
            this.all_encuestadosList = [];
            this.ListarEncuestados = (force_search = false) => {
                this.cargando = true;
                let filtro = Object.assign({}, this.form);
            };
            this.handleSortByKey = (e, type = "default") => {
                let array = this.listaEncuestados; //.sort();
                this.listaEncuestados = [];
                this.loading_table = true;
                if (type == "default") {
                    if (e.value == "ascend") {
                        array.sort((a, b) => (a[e.key] > b[e.key]) ? 1 : ((b[e.key] > a[e.key]) ? -1 : 0));
                    }
                    else if (e.value == "descend") {
                        array.sort((a, b) => (b[e.key] > a[e.key]) ? 1 : ((a[e.key] > b[e.key]) ? -1 : 0));
                    }
                    else {
                        array.sort((a, b) => a.nro - b.nro);
                    }
                }
                if (type == "string") {
                    if (e.value == "ascend") {
                        array.sort((a, b) => {
                            return (a[e.key] ? a[e.key].replace(/\s/g, "") : '').localeCompare((b[e.key] ? b[e.key].replace(/\s/g, "") : ''), 'en', { sensitivity: 'base' });
                        });
                    }
                    else if (e.value == "descend") {
                        array.sort((a, b) => {
                            return (b[e.key] ? b[e.key].replace(/\s/g, "") : '').localeCompare((a[e.key] ? a[e.key].replace(/\s/g, "") : ''), 'en', { sensitivity: 'base' });
                        });
                    }
                    else {
                        array.sort((a, b) => a.nro - b.nro);
                    }
                }
                setTimeout(() => {
                    this.listaEncuestados = array;
                    this.loading_table = false;
                }, 400);
            };
            this.getListadoOnly = () => {
                this.spinner.show();
                this.cargando = true;
                let filtro = Object.assign({}, this.form);
                this.listaEncuestadosSeleccionados = [];
                this._encuestasConfigurarService.GetListEncuestadosExtranet(filtro, this.pageIndex, 1000000)
                    .then((datos) => {
                    this.spinner.hide();
                    if (datos && datos.data && datos.data.Data) {
                        //listaEncuestadosSeleccionados
                        let dt = datos.data.Data;
                        dt.forEach((f, idx) => {
                            f.nro = idx + 1;
                            f.es_seleccionado = this.listaEncuestadosSeleccionados.find(e => e.codigo_trabajador == f.codigo_trabajador) ? true : false;
                        });
                        this.listaEncuestados = dt;
                        this.total = datos.data.TotalRows;
                    }
                    this.cargando = false;
                })
                    .catch(() => {
                    this.cargando = false;
                });
            };
            this.handleChangeSeleccion = ($event, item) => {
                if ($event) {
                    this.listaEncuestadosSeleccionados.push(item);
                }
                else {
                    this.listaEncuestadosSeleccionados = this.listaEncuestadosSeleccionados.filter((i) => i.codigo_trabajador != item.codigo_trabajador);
                }
                this.es_seleccionado = (this.listaEncuestadosSeleccionados.length == this.listaEncuestados.length ? true : false);
            };
            this.loading_table = false;
            this.handleChangeTodoSeleccion = ($event) => {
                this.loading_table = true;
                if ($event) {
                    let all = this.listaEncuestados;
                    this.listaEncuestadosSeleccionados = all;
                    let array_encuestados = this.listaEncuestados;
                    array_encuestados.forEach(item => {
                        item.es_seleccionado = true;
                    });
                    this.listaEncuestados = [];
                    setTimeout(() => {
                        this.listaEncuestados = array_encuestados;
                        this.loading_table = false;
                    }, 350);
                }
                else {
                    let data = this.listaEncuestados;
                    this.listaEncuestadosSeleccionados = [];
                    this.listaEncuestados = [];
                    setTimeout(() => {
                        data.forEach(e => {
                            e.es_seleccionado = false;
                        });
                        this.listaEncuestados = data;
                        this.loading_table = false;
                    }, 350);
                }
            };
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
            this.onChangeVisible = new core_1.EventEmitter();
            this.onSaveForm = new core_1.EventEmitter();
            this.onEmitListaSeleccionada = new core_1.EventEmitter();
        }
        ngOnInit() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.GetDepartamentos();
            });
        }
        handleClickLimpiar() {
            this.form = {
                numero_documento: null,
                razon_social: null,
                id_tipo_persona: null,
                codigo_departamento: null,
                codigo_provincia: null,
                codigo_distrito: null,
            };
            this.pageIndex = 1;
            this.getListadoOnly();
            //this.ListarEncuestados(true);
        }
    };
    ConfigurarEncuestadosFormularioExtComponent.ctorParameters = () => [
        { type: _core_1.EncuestasConfigurarService },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: _core_1.EncuestasService }
    ];
    tslib_1.__decorate([
        core_1.Input()
    ], ConfigurarEncuestadosFormularioExtComponent.prototype, "isVisibleModal", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ConfigurarEncuestadosFormularioExtComponent.prototype, "onChangeVisible", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ConfigurarEncuestadosFormularioExtComponent.prototype, "onSaveForm", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ConfigurarEncuestadosFormularioExtComponent.prototype, "onEmitListaSeleccionada", void 0);
    ConfigurarEncuestadosFormularioExtComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-configurar-encuestados-formulario-ext',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./configurar-encuestados-formulario-ext.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/configurar-encuestados-formulario-ext/configurar-encuestados-formulario-ext.component.html")).default
        })
    ], ConfigurarEncuestadosFormularioExtComponent);
    exports.ConfigurarEncuestadosFormularioExtComponent = ConfigurarEncuestadosFormularioExtComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/datos-encuesta-extranet/datos-encuesta-extranet.component.css":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/datos-encuesta-extranet/datos-encuesta-extranet.component.css ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ck-editor__editable {\r\n    /* min-height: 600px !important; */\r\n    border: 1px solid rgb(217, 217, 217) !important;\r\n}\r\n.ck-editor__editable_inline {\r\n    min-height: 250px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaXN0ZW1hL3BhZ2VzL2dlc3Rpb24tZXh0cmFuZXQvcGFnZXMvZW5jdWVzdGFzLWV4dHJhbmV0L2NvbmZpZ3VyYWNpb24tZW5jdWVzdGEtZXh0L2NvbXBvbmVudHMvZGF0b3MtZW5jdWVzdGEtZXh0cmFuZXQvZGF0b3MtZW5jdWVzdGEtZXh0cmFuZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztJQUNsQywrQ0FBK0M7QUFDbkQ7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lzdGVtYS9wYWdlcy9nZXN0aW9uLWV4dHJhbmV0L3BhZ2VzL2VuY3Vlc3Rhcy1leHRyYW5ldC9jb25maWd1cmFjaW9uLWVuY3Vlc3RhLWV4dC9jb21wb25lbnRzL2RhdG9zLWVuY3Vlc3RhLWV4dHJhbmV0L2RhdG9zLWVuY3Vlc3RhLWV4dHJhbmV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2stZWRpdG9yX19lZGl0YWJsZSB7XHJcbiAgICAvKiBtaW4taGVpZ2h0OiA2MDBweCAhaW1wb3J0YW50OyAqL1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxNywgMjE3LCAyMTcpICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNrLWVkaXRvcl9fZWRpdGFibGVfaW5saW5lIHtcclxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/datos-encuesta-extranet/datos-encuesta-extranet.component.ts":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/datos-encuesta-extranet/datos-encuesta-extranet.component.ts ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js"), __webpack_require__(/*! ../../../../../../../../../../../external/ckeditor5-build-decoupled-document */ "./external/ckeditor5-build-decoupled-document/build/ckeditor.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, forms_1, _core_1, ng_zorro_antd_1, ngx_spinner_1, DecoupledEditor) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    DecoupledEditor.defaultConfig = _core_1.DecoupledInit.defaultConfig;
    let DatosEncuestaExtranetComponent = class DatosEncuestaExtranetComponent {
        constructor(_formBuilder, notification, encuesta_s, spinner, sis_enumerado_s) {
            this._formBuilder = _formBuilder;
            this.notification = notification;
            this.encuesta_s = encuesta_s;
            this.spinner = spinner;
            this.sis_enumerado_s = sis_enumerado_s;
            this.onChangeAllPersonalStatus = new core_1.EventEmitter();
            this.onSaveUpdateEncuesta = new core_1.EventEmitter();
            this.array_tipo_file = [];
            this.frm_main_data = {
                id_encuesta: 0,
                titulo: null,
                encabezado: null,
                objetivo: null,
                descripcion: null,
                fecha_inicio: null,
                fecha_fin: null,
                tiempo_estimado: null,
                es_anonima: false,
                mensaje_es_anonima: null,
                es_todos: true,
                es_con_seccion_pregunta: false,
                iden_imagen_presentacion: null,
                mensaje_corto_presentacion: null,
                id_estado: 0,
                estado_name: null,
                iden_terminos_condiciones: null
            };
            this.frm_welcome_data = {};
            this.frm_greet_data = {};
            this.tags = [];
            this.editor = DecoupledEditor;
            this.configEditor = _core_1.DecoupledInit.configEditor;
            this.expresion = /\[\[[A-Z0-9\_]+\]\]/g;
            this.tagsTitulo = [];
            this.editorTitulo = DecoupledEditor;
            this.configEditorTitulo = _core_1.DecoupledInit.configEditor;
            this.expresionTitulo = /\[\[[A-Z0-9\_]+\]\]/g;
            this.show_mensaje_bienvenida_anonima = (status) => {
                this._show_mensaje_bienvenida_anonima = status;
            };
            this.show_tab_encuestados = (status) => {
                this.onChangeAllPersonalStatus.emit(status);
            };
            this._show_mensaje_bienvenida_anonima = false;
            this.estaGuardando = false;
            this.tiposMimePermitidos = ["image/png", "image/jpeg", "image/gif"];
            this.imagen_MimePermitidos = ["image/png", "image/jpeg", "image/gif"];
            this.imagen_extensionAceptados = [".png", ".jpeg", ".gif"];
            this.terminos_extensionAceptados = [".pdf", ".PDF"];
            this.terminos_MimePermitidos = ["application/pdf"];
            this.pesoMaximoEnMB = _core_1.FILE_SETTINGS.maxFileSize;
            this.url = "/api/comun/descargar-archivo";
            this.validar_fup = false;
            this.set_imagen_iden = (data) => {
                this.error_imagen_segundo_plano = false;
                this.frm_main_data.iden_imagen_presentacion = data.codigo;
            };
            this.handleRemovedFilePresentacion = (e) => {
                this.frm_main_data.iden_imagen_presentacion = null;
            };
            this.set_imagen_iden_terminos = (data) => {
                this.error_file_terminos = false;
                this.frm_welcome_data.iden_terminos_condiciones = data.codigo;
            };
            this.handleRemovedFileTerminos = (e) => {
                this.frm_main_data.iden_terminos_condiciones = null;
            };
            this.error_indicaciones = false;
            this.error_titulo = false;
            this.audio_estaGuardando = false;
            this.set_audio_iden = (data) => {
                this.frm_welcome_data.iden_audio = data.codigo;
            };
            this.handleRemovedAudioWelcome = (e) => {
                this.frm_welcome_data.iden_audio = null;
            };
            this.error_file_welcome = false;
            this.error_url_welcome = false;
            this.show_file_uploader = false;
            this.selected_tipo = '';
            this.show_file_input_welcome = false;
            this._extensionAceptados_welcome = [];
            this.video_extensionAceptados = [".mp4"];
            this.show_url_welcome = false;
            //imagen_extensionAceptados= [".png", ".jpeg"];
            this.set_tipo_file_permitidos_welcome = () => {
                let tipo = this.frm_welcome_data.id_tipo_archivo;
                if (tipo) {
                    let tipo_file = this.array_tipo_file.find(f => f.id_enumerado == tipo);
                    this.selected_tipo = tipo_file ? tipo_file.nombre : '';
                    this.show_file_input_welcome = (tipo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen ? true : false);
                    this.show_url_welcome = (tipo == _core_1.TIPO_ARCHIVO_ENUMERADO.video ? true : false);
                }
                else {
                    this.show_file_input_welcome = false;
                    this.show_url_welcome = false;
                }
            };
            this.set_file_iden_welcome = (data) => {
                this.error_file_welcome = false;
                this.frm_welcome_data.iden_imagen = data.codigo;
            };
            this.handleRemovedFileWelcome = (e) => {
                this.frm_welcome_data.iden_imagen = null;
            };
            this.error_imagen_segundo_plano = false;
            this.error_file_agradecimiento = false;
            this.error_file_terminos = false;
            this.show_file_agradecimiento = false;
            this.show_input_file = false;
            this.show_url = false;
            this._extensionAceptados_agradecimiento = [];
            this.set_tipo_file_permitidos_agradecimiento = () => {
                let tipo = this.frm_greet_data.id_tipo_archivo;
                if (tipo) {
                    let tipo_file = this.array_tipo_file.find(f => f.id_enumerado == tipo);
                    this.selected_tipo = tipo_file ? tipo_file.nombre : '';
                    this.show_file_agradecimiento = tipo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen ? true : false;
                    this.show_url = tipo == _core_1.TIPO_ARCHIVO_ENUMERADO.video ? true : false;
                    //this._extensionAceptados_agradecimiento=tipo?(tipo==TIPO_ARCHIVO_ENUMERADO.video?this.video_extensionAceptados:):[];
                }
            };
            this.set_file_iden_agradecimiento = (data) => {
                this.error_file_agradecimiento = false;
                this.frm_greet_data.iden_imagen = data.codigo;
            };
            this.handleRemovedFileAgradecimiento = (e) => {
                this.frm_greet_data.iden_imagen = null;
            };
            this.set_audio_iden_agradecimiento = (data) => {
                this.frm_greet_data.iden_audio = data.codigo;
            };
            this.handleRemovedAudioAgradecimiento = (e) => {
                this.frm_greet_data.iden_audio = null;
            };
            this.disabledStartDate = (startValue) => {
                if (!startValue || this.frm_main_data.fecha_fin == null) {
                    return false;
                }
                else {
                    return startValue.getTime() > new Date(this.frm_main_data.fecha_fin).getTime();
                }
            };
            this.disabledEndDate = (endValue) => {
                if (!endValue || this.frm_main_data.fecha_inicio == null) {
                    return false;
                }
                else {
                    return endValue.getTime() <= new Date(this.frm_main_data.fecha_inicio).getTime();
                }
            };
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
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
        }
        ngOnInit() {
            this.create_form();
            this.getTipoArchivos();
            let basic_form = { id_encuesta: 0, id_estado: _core_1.ESTADO_ENCUESTA_ENUMERADO.registrado, es_todos: true, es_anonima: false };
            let basic_welcome = {};
            let basic_greet = {};
            this._show_mensaje_bienvenida_anonima = this.encuesta_data.encuesta ? this.encuesta_data.encuesta.es_todos : false;
            this.frm_main_data = this.encuesta_data.encuesta ? this.encuesta_data.encuesta : basic_form;
            this.frm_welcome_data = this.encuesta_data.bienvenida ? this.encuesta_data.bienvenida : basic_welcome;
            this.frm_greet_data = this.encuesta_data.agradecimiento ? this.encuesta_data.agradecimiento : basic_greet;
            this._show_mensaje_bienvenida_anonima = this.frm_main_data.es_anonima;
        }
        getTipoArchivos() {
            this.sis_enumerado_s.GetEnumeradoByTipoEnumerado(_core_1.SIS_TIPO_ENUMERADO.tipo_archivo).then(datos => {
                this.array_tipo_file = datos.data.filter(x => x.es_eliminado == false);
            }).catch(err => { });
        }
        create_form() {
            this.formMACRO = this._formBuilder.group({
                Titulo: [null, forms_1.Validators.required],
                Encabezado: [null],
                Objetivo: [null, forms_1.Validators.required],
                Descripcion: [null, forms_1.Validators.required],
                FechaHoraInicio: [null, forms_1.Validators.required],
                FechaHoraFin: [null, forms_1.Validators.required],
                TiempoEstimado: [null, [forms_1.Validators.required, forms_1.Validators.pattern('[0-9]*')]],
                EsAnonima: [false],
                EsParaTodos: [true],
                EsSeccionPregunta: [false],
                EsActivarAudioBienvenido: [false],
                EsActivarAudioAgradecimiento: [false],
                MensajeAnonimo: [null],
                MensajePresentacion: [null],
                IndicacionesBienvenida: [null, forms_1.Validators.required],
                TipoArchivoBienvenida: [null],
                UrlMultimediaBienvenida: [null],
                IndicacionesAgradecimiento: [null, forms_1.Validators.required],
                TipoArchivoAgradecimiento: [null],
                UrlMultimediaAgradecimiento: [null]
            });
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
            this.error_indicaciones = false;
        }
        onReady(editor) {
            editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
        }
        onReadyTitulo(editor) {
            editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
        }
        onChangeTitulo({ editor }) {
            const data = editor.getData();
            const tagsTitulo = data.match(this.expresion);
            if (tagsTitulo) {
                this.tagsTitulo = tagsTitulo;
            }
            else {
                this.tagsTitulo = [];
            }
            this.tagsTitulo = this.tagsTitulo.filter((value, index, self) => {
                return self.indexOf(value) == index;
            });
            this.error_titulo = false;
        }
        save_update() {
            const _controls = this.formMACRO.controls;
            let allow = true;
            if (this.formMACRO.invalid) {
                Object.keys(_controls).forEach(controlName => {
                    _controls[controlName].markAsTouched();
                    _controls[controlName].markAsDirty();
                    _controls[controlName].updateValueAndValidity();
                });
                allow = false;
            }
            if (this.frm_greet_data.mensaje_agradecimiento == null || this.frm_greet_data.mensaje_agradecimiento == '') {
                this.error_titulo = true;
                allow = false;
            }
            if (this.frm_welcome_data.indicaciones == null || this.frm_welcome_data.indicaciones == '') {
                this.error_indicaciones = true;
                allow = false;
            }
            if (this.frm_greet_data.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.video) {
                if (this.frm_greet_data.url_video == null || this.frm_greet_data.url_video == "" || this.validURL(this.frm_greet_data.url_video) == false) {
                    this.error_url = true;
                    allow = false;
                }
            }
            if (this.frm_greet_data.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen) {
                if (this.frm_greet_data.iden_imagen == null || this.frm_greet_data.iden_imagen == "") {
                    this.error_file_agradecimiento = true;
                    allow = false;
                }
            }
            if (this.frm_welcome_data.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.video) {
                if (this.frm_welcome_data.url_video == null || this.frm_welcome_data.url_video == "" || this.validURL(this.frm_welcome_data.url_video) == false) {
                    this.error_url_welcome = true;
                    allow = false;
                }
            }
            if (this.frm_welcome_data.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen) {
                if (this.frm_welcome_data.iden_imagen == null || this.frm_welcome_data.iden_imagen == "") {
                    this.error_file_welcome = true;
                    allow = false;
                }
            }
            if (this.frm_welcome_data.iden_terminos_condiciones == null || this.frm_welcome_data.iden_terminos_condiciones == '') {
                this.error_file_terminos = true;
                allow = false;
            }
            if (allow) {
                let input = {
                    ussername: '',
                    files_only: false,
                    encuesta: this.frm_main_data,
                    bienvenida: this.frm_welcome_data,
                    agradecimiento: this.frm_greet_data,
                    tipo_encuesta: _core_1.TIPO_ENCUESTA.extranet //tipo de encuesta Extranet
                };
                this.spinner.show();
                this.encuesta_s._saveUpdateEncuestaData(input).then(datos => {
                    this.spinner.hide();
                    if (datos.data) {
                        let str = '<ul>';
                        datos.data.Messages.forEach(message => {
                            str += `<li>${message}</li>`;
                        });
                        str += '</ul>';
                        if (datos.data.Success) {
                            this.createNotification('success', 'Éxito', str);
                            input.encuesta.id_encuesta = datos.data.Value.RESULT_IDEN;
                            this.onSaveUpdateEncuesta.emit(input);
                        }
                        else {
                            this.createNotification('warning', 'Advertencia', str);
                        }
                    }
                }).catch(err => {
                    this.spinner.hide();
                });
            }
            else {
                this.createNotification('warning', 'Advertencia', 'Debe ingresar los campos obligatorios');
            }
        }
    };
    DatosEncuestaExtranetComponent.ctorParameters = () => [
        { type: forms_1.FormBuilder },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: _core_1.EncuestasService },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: _core_1.SisEnumeradoService }
    ];
    tslib_1.__decorate([
        core_1.Input()
    ], DatosEncuestaExtranetComponent.prototype, "encuesta_data", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], DatosEncuestaExtranetComponent.prototype, "onChangeAllPersonalStatus", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], DatosEncuestaExtranetComponent.prototype, "onSaveUpdateEncuesta", void 0);
    DatosEncuestaExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-datos-encuesta-extranet',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./datos-encuesta-extranet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/datos-encuesta-extranet/datos-encuesta-extranet.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./datos-encuesta-extranet.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/datos-encuesta-extranet/datos-encuesta-extranet.component.css")).default]
        })
    ], DatosEncuestaExtranetComponent);
    exports.DatosEncuestaExtranetComponent = DatosEncuestaExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/encuestados-encuesta-extranet/encuestados-encuesta-extranet.component.css":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/encuestados-encuesta-extranet/encuestados-encuesta-extranet.component.css ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lzdGVtYS9wYWdlcy9nZXN0aW9uLWV4dHJhbmV0L3BhZ2VzL2VuY3Vlc3Rhcy1leHRyYW5ldC9jb25maWd1cmFjaW9uLWVuY3Vlc3RhLWV4dC9jb21wb25lbnRzL2VuY3Vlc3RhZG9zLWVuY3Vlc3RhLWV4dHJhbmV0L2VuY3Vlc3RhZG9zLWVuY3Vlc3RhLWV4dHJhbmV0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/encuestados-encuesta-extranet/encuestados-encuesta-extranet.component.ts":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/encuestados-encuesta-extranet/encuestados-encuesta-extranet.component.ts ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, _core_1, ng_zorro_antd_1, ngx_spinner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let EncuestadosEncuestaExtranetComponent = class EncuestadosEncuestaExtranetComponent {
        constructor(notification, encuesta_s, spinner, modal, cd) {
            this.notification = notification;
            this.encuesta_s = encuesta_s;
            this.spinner = spinner;
            this.modal = modal;
            this.cd = cd;
            this.onPublishSuccess = new core_1.EventEmitter();
            this.onGoPreguntas = new core_1.EventEmitter();
            this.esVisibleFormularioEncuestados = false;
            this.form = {
                dni: null,
                nombres: null,
                id_encuesta: 0
            };
            this.EncuestadosList = [];
            this.EncuestadosList_origin = [];
            this.cargando_tabla = true;
            this.pageIndex = 1;
            this.total = 0;
            this.pageSize = 10;
            this.get_list = () => {
                this.form.id_encuesta = this.id_encuesta ? this.id_encuesta : 0;
                this.cargando_tabla = true;
                let filtro = Object.assign({}, this.form);
                this.spinner.show();
                this.encuesta_s._GetEncuestadosByFilterEncuestaExtranet(filtro, this.pageIndex, 1000000)
                    .then((datos) => {
                    this.spinner.hide();
                    this.error_encuestados = false;
                    if (datos && datos.data && datos.data.Data) {
                        let dt = datos.data.Data;
                        this.EncuestadosList = dt;
                        this.EncuestadosList_origin = dt;
                        this.total = datos.data.TotalRows;
                    }
                    this.cargando_tabla = false;
                })
                    .catch(() => {
                    this.cargando_tabla = false;
                });
            };
            this.handleSortByKey = (e, type = "default") => {
                let array = this.EncuestadosList; //.sort();
                this.EncuestadosList = [];
                this.cargando_tabla = true;
                if (type == "default") {
                    if (e.value == "ascend") {
                        array.sort((a, b) => (a[e.key] > b[e.key]) ? 1 : ((b[e.key] > a[e.key]) ? -1 : 0));
                    }
                    else if (e.value == "descend") {
                        array.sort((a, b) => (b[e.key] > a[e.key]) ? 1 : ((a[e.key] > b[e.key]) ? -1 : 0));
                    }
                    else {
                        array.sort((a, b) => a.nro - b.nro);
                    }
                }
                if (type == "string") {
                    if (e.value == "ascend") {
                        array.sort((a, b) => {
                            return (a[e.key] ? a[e.key].replace(/\s/g, "") : '').localeCompare((b[e.key] ? b[e.key].replace(/\s/g, "") : ''), 'en', { sensitivity: 'base' });
                        });
                    }
                    else if (e.value == "descend") {
                        array.sort((a, b) => {
                            return (b[e.key] ? b[e.key].replace(/\s/g, "") : '').localeCompare((a[e.key] ? a[e.key].replace(/\s/g, "") : ''), 'en', { sensitivity: 'base' });
                        });
                    }
                    else {
                        array.sort((a, b) => a.nro - b.nro);
                    }
                }
                setTimeout(() => {
                    this.EncuestadosList = array;
                    this.cargando_tabla = false;
                }, 350);
            };
            this.handleClickLimpiar = () => {
                this.form = {
                    id_encuesta: this.id_encuesta ? this.id_encuesta : 0,
                    dni: null,
                    nombres: null
                };
                this.pageIndex = 1;
                this.get_list();
            };
            this.handleClickBuscar = (reset = false) => {
                if (reset) {
                    this.pageIndex = 1;
                }
                this.get_list();
            };
            this._delete_encuestado = (id) => {
                this.modal.confirm({
                    nzTitle: 'Eliminar',
                    nzContent: '¿Esta seguro de eliminar el encuestado seleccionado?',
                    nzOkText: 'Si',
                    nzOkType: 'primary',
                    nzCancelText: 'No',
                    nzOnOk: () => {
                        this.encuesta_s._EnableDisable(id, "encuesta_administrado")
                            .then((datos) => {
                            if (datos.data) {
                                if (datos.data.Success) {
                                    let str = '<ul>';
                                    datos.data.Messages.forEach(message => {
                                        str += `<li>${message}</li>`;
                                    });
                                    str += '</ul>';
                                    this.createNotification('success', 'Éxito', str);
                                    this.get_list();
                                }
                            }
                        }).catch(() => { });
                    },
                    nzOnCancel: () => { }
                });
            };
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
            this.error_encuestados = false;
            this.save_update_encuestados = (publicar = false) => {
                //se cambia estado en la bd
                if (publicar) {
                    if (this.EncuestadosList.length > 0) {
                        this.error_encuestados = false;
                        this.modal.confirm({
                            nzTitle: '¿Esta seguro de publicar la encuesta?',
                            nzContent: 'Una vez publicada no podra modificarla.',
                            nzOkText: 'Si',
                            nzOkType: 'primary',
                            nzCancelText: 'No',
                            nzOnOk: () => {
                                this.publicar();
                            },
                            nzOnCancel: () => { }
                        });
                    }
                    else {
                        this.error_encuestados = true;
                        this.createNotification('warning', 'Advertencia', "<ul><li>Debe registrar al menos un encuestado.</li></ul>");
                    }
                }
                else {
                    if (this.EncuestadosList.length > 0) {
                        this.createNotification('success', 'Éxito', "<ul><li>Guardado con éxito.</li></ul>");
                        this.error_encuestados = false;
                    }
                    else {
                        this.error_encuestados = true;
                        this.createNotification('warning', 'Advertencia', "<ul><li>Debe registrar al menos un encuestado.</li></ul>");
                    }
                }
            };
            this.handleClickAgregarEncuestado = () => {
                this.esVisibleFormularioEncuestados = true;
            };
            this.handleCloseAgregarEncuestado = (e) => {
                this.esVisibleFormularioEncuestados = false;
            };
            this.handleSave = (e) => {
                this.esVisibleFormularioEncuestados = false;
            };
            this.handleEmitListaSeleccionada = (lista) => {
                this.esVisibleFormularioEncuestados = false;
                let lst = lista.map(m => {
                    return { dni_user: m.numero_documento,
                        id_encuesta: this.id_encuesta
                    };
                });
                this.spinner.show();
                this.encuesta_s._SaveEncuestadosExtranetList(lst)
                    .then((datos) => {
                    this.spinner.hide();
                    if (datos.data) {
                        if (datos.data.Success) {
                            let str = '<ul>';
                            datos.data.Messages.forEach(message => {
                                str += `<li>${message}</li>`;
                            });
                            str += '</ul>';
                            this.createNotification('success', 'Éxito', str);
                            setTimeout(() => {
                                this.get_list();
                            }, 150);
                        }
                    }
                })
                    .catch(() => { this.spinner.hide(); });
            };
        }
        ngOnInit() {
            this.get_list();
        }
        goback() {
            this.onGoPreguntas.emit(true);
        }
        publicar() {
            this.encuesta_s._PublicarEncuesta(this.id_encuesta)
                .then((datos) => {
                if (datos.data) {
                    let str = '<ul>';
                    datos.data.Messages.forEach(message => {
                        str += `<li>${message}</li>`;
                    });
                    str += '</ul>';
                    if (datos.data.Success) {
                        this.createNotification('success', 'Éxito', str);
                        this.onPublishSuccess.emit(true);
                    }
                    else {
                        this.createNotification('warning', 'Adveretencia', str);
                    }
                }
            }).catch(() => { });
        }
    };
    EncuestadosEncuestaExtranetComponent.ctorParameters = () => [
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: _core_1.EncuestasService },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: ng_zorro_antd_1.NzModalService },
        { type: core_1.ChangeDetectorRef }
    ];
    tslib_1.__decorate([
        core_1.Input()
    ], EncuestadosEncuestaExtranetComponent.prototype, "id_encuesta", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], EncuestadosEncuestaExtranetComponent.prototype, "onPublishSuccess", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], EncuestadosEncuestaExtranetComponent.prototype, "onGoPreguntas", void 0);
    EncuestadosEncuestaExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-encuestados-encuesta-extranet',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./encuestados-encuesta-extranet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/encuestados-encuesta-extranet/encuestados-encuesta-extranet.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./encuestados-encuesta-extranet.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/encuestados-encuesta-extranet/encuestados-encuesta-extranet.component.css")).default]
        })
    ], EncuestadosEncuestaExtranetComponent);
    exports.EncuestadosEncuestaExtranetComponent = EncuestadosEncuestaExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-notificacion-ext/modal-registro-notificacion-extranet.component.css":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-notificacion-ext/modal-registro-notificacion-extranet.component.css ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hoverable:hover{\r\n    cursor:pointer;\r\n}\r\n\r\n.hoverable_txt:hover{\r\n    cursor:pointer;\r\n    background-color:#ffc1c1;\r\n}\r\n\r\n.is_selected_tipo{\r\n    background-color:#ffc1c1;\r\n}\r\n\r\n.btn_span {\r\n    float: right;\r\n    margin-right: 6px;\r\n    margin-top: -25px;\r\n    position: relative;\r\n    z-index: 2;\r\n    /*color: #244DAE;*/\r\n    /*background-color:#E9ECEF;*/\r\n    font-weight: bolder;\r\n}\r\n\r\n/*\r\n.btn_span:hover{\r\n    cursor: pointer;\r\n}*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaXN0ZW1hL3BhZ2VzL2dlc3Rpb24tZXh0cmFuZXQvcGFnZXMvZW5jdWVzdGFzLWV4dHJhbmV0L2NvbmZpZ3VyYWNpb24tZW5jdWVzdGEtZXh0L2NvbXBvbmVudHMvbW9kYWwtcmVnaXN0cm8tbm90aWZpY2FjaW9uLWV4dC9tb2RhbC1yZWdpc3Ryby1ub3RpZmljYWNpb24tZXh0cmFuZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0FBQzVCOztBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLG1CQUFtQjtBQUN2Qjs7QUFDQTs7O0VBR0UiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Npc3RlbWEvcGFnZXMvZ2VzdGlvbi1leHRyYW5ldC9wYWdlcy9lbmN1ZXN0YXMtZXh0cmFuZXQvY29uZmlndXJhY2lvbi1lbmN1ZXN0YS1leHQvY29tcG9uZW50cy9tb2RhbC1yZWdpc3Ryby1ub3RpZmljYWNpb24tZXh0L21vZGFsLXJlZ2lzdHJvLW5vdGlmaWNhY2lvbi1leHRyYW5ldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvdmVyYWJsZTpob3ZlcntcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcblxyXG4uaG92ZXJhYmxlX3R4dDpob3ZlcntcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZjMWMxO1xyXG59XHJcbi5pc19zZWxlY3RlZF90aXBve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZjMWMxO1xyXG59XHJcbi5idG5fc3BhbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgIG1hcmdpbi10b3A6IC0yNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIC8qY29sb3I6ICMyNDREQUU7Ki9cclxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjojRTlFQ0VGOyovXHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi8qXHJcbi5idG5fc3Bhbjpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSovIl19 */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-notificacion-ext/modal-registro-notificacion-extranet.component.ts":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-notificacion-ext/modal-registro-notificacion-extranet.component.ts ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! external/ckeditor5-build-decoupled-document */ "./external/ckeditor5-build-decoupled-document/build/ckeditor.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, forms_1, _core_1, ng_zorro_antd_1, DecoupledEditor, ngx_spinner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    DecoupledEditor.defaultConfig = _core_1.DecoupledInit.defaultConfig;
    let ModalRegistroNotificacionExtranetComponent = class ModalRegistroNotificacionExtranetComponent {
        constructor(encuesta_s, _formBuilder, notification, modal, cd, spinner, sis_enumerado_s) {
            this.encuesta_s = encuesta_s;
            this._formBuilder = _formBuilder;
            this.notification = notification;
            this.modal = modal;
            this.cd = cd;
            this.spinner = spinner;
            this.sis_enumerado_s = sis_enumerado_s;
            this._TIPO_PREGUNTA = _core_1.TIPO_PREGUNTA;
            this.title = "Agregar";
            this.is_first = false;
            this.isVisibleModal = false;
            this.onCloseModal = new core_1.EventEmitter();
            this.onSaveDataSeccion = new core_1.EventEmitter();
            this.array_dirigido = [];
            this.texto_mensaje = null;
            this.modal_width = 800;
            this.frm = { id_encuesta_notificacion: 0, id_encuesta: 0 };
            this.selectedPreguntaCondicional = null;
            this.frmNOT = {
                frmTitulos: new forms_1.FormControl(null, forms_1.Validators.required),
                frmFecha: new forms_1.FormControl(null, forms_1.Validators.required),
                frmAsunto: new forms_1.FormControl(null, forms_1.Validators.required),
                frmDirigido: new forms_1.FormControl(null),
                frmMensaje: new forms_1.FormControl(null, forms_1.Validators.required),
            };
            this.error_editor_mensaje = false;
            this.error_dirigido = false;
            this.handleSaveFormularioModal = () => {
                let allow = true, required_filled = true;
                let frm_keys = Object.keys(this.frmNOT);
                let str = "<ul>";
                for (let i = 0; i < frm_keys.length; i++) {
                    let frmkey = frm_keys[i];
                    if (this.frmNOT[frmkey].invalid) {
                        this.frmNOT[frmkey].markAsTouched();
                        this.frmNOT[frmkey].markAsDirty();
                        this.frmNOT[frmkey].updateValueAndValidity();
                        allow = false;
                        required_filled = false;
                    }
                }
                let has_dirigido = true;
                let total = 0;
                this.array_dirigido.forEach(element => {
                    if (element.selected) {
                        total++;
                    }
                });
                if (total == 0) {
                    this.error_dirigido = true;
                    allow = false;
                    has_dirigido = false;
                }
                else {
                    allow = true;
                    this.error_dirigido = false;
                }
                let has_editor_mensaje = true;
                if (this.frm.mensaje == null || this.frm.mensaje == "") {
                    this.error_editor_mensaje = true;
                    allow = false;
                    has_editor_mensaje = false;
                }
                else {
                    allow = true;
                    this.error_editor_mensaje = false;
                }
                if (!allow) {
                    if (required_filled == false) {
                        str += "<li>Debe ingresar los campos obligatorios.</li>";
                    }
                }
                str += "<ul>";
                if (!allow) {
                    this.createNotification('warning', 'Advertencia', str);
                }
                else {
                    let filter = Object.assign({}, this.frm);
                    filter.id_encuesta = this.id_encuesta;
                    filter.dirigido = JSON.stringify(this.array_dirigido);
                    this.spinner.show();
                    this.encuesta_s._SaveUpdateNotificacion(filter).then(datos => {
                        if (datos.data) {
                            if (datos.data.Success) {
                                let str = '<ul>';
                                datos.data.Messages.forEach(message => {
                                    str += `<li>${message}</li>`;
                                });
                                str += '</ul>';
                                this.createNotification('success', 'Éxito', str);
                                this.onSaveDataSeccion.emit(true);
                            }
                            else {
                                let str = '<ul>';
                                datos.data.Messages.forEach(message => {
                                    str += `<li>${message}</li>`;
                                });
                                str += '</ul>';
                                this.createNotification('warning', 'Advertencia', str);
                            }
                            this.spinner.hide();
                        }
                    }).catch(err => { });
                }
            };
            this.handleCancelarFormularioModal = () => {
                this.onCloseModal.emit(true);
            };
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
            this.editor = DecoupledEditor;
            this.configEditor = _core_1.DecoupledInit.configEditor;
            this.esInvalidoContenido = false;
            this.tags = [];
            this.expresion = /\[\[[A-Z0-9\_]+\]\]/g;
        }
        ngOnInit() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                let basic_frm = { id_encuesta_notificacion: 0, id_encuesta: this.id_encuesta };
                let notificacion = Object.assign({}, this.notificacion);
                this.frm = notificacion ? notificacion : basic_frm;
                if (this.frm.id_encuesta_notificacion != null && this.frm.id_encuesta_notificacion > 0) {
                    if (notificacion.dirigido != null && notificacion.dirigido != undefined) {
                        this.array_dirigido = JSON.parse(notificacion.dirigido);
                    }
                    else {
                        yield this.getDirigidos();
                    }
                }
                else {
                    yield this.getDirigidos();
                }
            });
        }
        JSON_INIT() { }
        getDirigidos() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.sis_enumerado_s.GetEnumeradoByTipoEnumerado(_core_1.SIS_TIPO_ENUMERADO.tipo_dirigido).then(datos => {
                    this.array_dirigido = datos.data.filter(x => x.es_eliminado == false);
                    console.log(this.array_dirigido);
                }).catch(err => { });
            });
        }
        onReady(editor) {
            editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
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
            this.texto_mensaje = this.tags.join();
        }
        changeDirigido(values) {
            if (values.currentTarget.checked) {
                this.array_dirigido.forEach(element => {
                    if (Number(values.currentTarget.id) == element.id_enumerado) {
                        element.selected = true;
                    }
                });
            }
            else {
                this.array_dirigido.forEach(element => {
                    if (Number(values.currentTarget.id) == element.id_enumerado) {
                        element.selected = false;
                    }
                });
            }
        }
    };
    ModalRegistroNotificacionExtranetComponent.ctorParameters = () => [
        { type: _core_1.EncuestasService },
        { type: forms_1.FormBuilder },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: ng_zorro_antd_1.NzModalService },
        { type: core_1.ChangeDetectorRef },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: _core_1.SisEnumeradoService }
    ];
    tslib_1.__decorate([
        core_1.ViewChild('checkTipoArchivo_3', { static: false })
    ], ModalRegistroNotificacionExtranetComponent.prototype, "checkTipoArchivo_3Element", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalRegistroNotificacionExtranetComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalRegistroNotificacionExtranetComponent.prototype, "is_first", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalRegistroNotificacionExtranetComponent.prototype, "notificacion", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalRegistroNotificacionExtranetComponent.prototype, "id_encuesta", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalRegistroNotificacionExtranetComponent.prototype, "isVisibleModal", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ModalRegistroNotificacionExtranetComponent.prototype, "onCloseModal", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ModalRegistroNotificacionExtranetComponent.prototype, "onSaveDataSeccion", void 0);
    ModalRegistroNotificacionExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-modal-registro-notificacion-extranet',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./modal-registro-notificacion-extranet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-notificacion-ext/modal-registro-notificacion-extranet.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./modal-registro-notificacion-extranet.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-notificacion-ext/modal-registro-notificacion-extranet.component.css")).default]
        })
    ], ModalRegistroNotificacionExtranetComponent);
    exports.ModalRegistroNotificacionExtranetComponent = ModalRegistroNotificacionExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-pregunta-ext/modal-registro-columna-ext/modal-registro-columna-ext.component.css":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-pregunta-ext/modal-registro-columna-ext/modal-registro-columna-ext.component.css ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hoverable:hover{\r\n    cursor:pointer;\r\n}\r\n.ant-input-number-handler-wrap{\r\n    display: none !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaXN0ZW1hL3BhZ2VzL2dlc3Rpb24tZXh0cmFuZXQvcGFnZXMvZW5jdWVzdGFzLWV4dHJhbmV0L2NvbmZpZ3VyYWNpb24tZW5jdWVzdGEtZXh0L2NvbXBvbmVudHMvbW9kYWwtcmVnaXN0cm8tcHJlZ3VudGEtZXh0L21vZGFsLXJlZ2lzdHJvLWNvbHVtbmEtZXh0L21vZGFsLXJlZ2lzdHJvLWNvbHVtbmEtZXh0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Npc3RlbWEvcGFnZXMvZ2VzdGlvbi1leHRyYW5ldC9wYWdlcy9lbmN1ZXN0YXMtZXh0cmFuZXQvY29uZmlndXJhY2lvbi1lbmN1ZXN0YS1leHQvY29tcG9uZW50cy9tb2RhbC1yZWdpc3Ryby1wcmVndW50YS1leHQvbW9kYWwtcmVnaXN0cm8tY29sdW1uYS1leHQvbW9kYWwtcmVnaXN0cm8tY29sdW1uYS1leHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob3ZlcmFibGU6aG92ZXJ7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4uYW50LWlucHV0LW51bWJlci1oYW5kbGVyLXdyYXB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-pregunta-ext/modal-registro-columna-ext/modal-registro-columna-ext.component.ts":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-pregunta-ext/modal-registro-columna-ext/modal-registro-columna-ext.component.ts ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, forms_1, _core_1, ng_zorro_antd_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let ModalRegistroColumnaExtComponent = class ModalRegistroColumnaExtComponent {
        constructor(sis_enumerado_s, _formBuilder, notification, modal, cd) {
            this.sis_enumerado_s = sis_enumerado_s;
            this._formBuilder = _formBuilder;
            this.notification = notification;
            this.modal = modal;
            this.cd = cd;
            this._TIPO_PREGUNTA = _core_1.TIPO_PREGUNTA;
            this.isVisibleModalMatriz = false;
            this.title = "Nombre columna";
            this.modal_width = 800;
            this.array_tipo_pregunta = [];
            this.array_maestro_institucional = [];
            this.array_archivo_tipo_archivo_columna = [];
            this.onCloseModalMatriz = new core_1.EventEmitter();
            this.onSaveDataForma = new core_1.EventEmitter();
            this.array_tipo_fecha = [
                {
                    "idx": 1,
                    "nombre": "solo año",
                    "selected": false
                },
                {
                    "idx": 2,
                    "nombre": "mes/año",
                    "selected": false
                },
                {
                    "idx": 3,
                    "nombre": "día/mes/año",
                    "selected": false
                }
            ];
            this.array_filas = [];
            this.array_columnas = [];
            this.cargando_columnas = false;
            this.error_columnas_matriz = false;
            this.error_filas_matriz = false;
            this.JSON_DESPLEGABLE_INSTITUCIONAL = _core_1.JSON_TIPO_PREGUNTA.desplegable_institucional;
            this.frmMaestroInstitucional = new forms_1.FormControl(null, forms_1.Validators.required);
            this.JSON_DESPLEGABLE_LIBRE = _core_1.JSON_TIPO_PREGUNTA.desplegable_libre;
            this.JSON_NUMERICO_ENTERO = _core_1.JSON_TIPO_PREGUNTA.numerico_entero;
            this.JSON_NUMERICO_DECIMAL = _core_1.JSON_TIPO_PREGUNTA.numerico_decimal;
            this.JSON_SELECCION_UNICA = _core_1.JSON_TIPO_PREGUNTA.seleccion_unica;
            this.JSON_SELECCION_MULTIPLE = _core_1.JSON_TIPO_PREGUNTA.seleccion_multiple;
            this.JSON_NUMERICO_TEXTO = _core_1.JSON_TIPO_PREGUNTA.texto;
            this.JSON_NUMERICO_FECHA = _core_1.JSON_TIPO_PREGUNTA.fecha;
            this.JSON_SELECCION_ARCHIVO = _core_1.JSON_TIPO_PREGUNTA.archivo_columna;
            this.array_alternativa_select = [];
            this.frmAlternativaDescripcion = [];
            this.frmAlternativaPeso = [];
            this.frmCantidadDigitos = new forms_1.FormControl(null, forms_1.Validators.required);
            this.frmCantidadDigitosEnteros = new forms_1.FormControl(null, forms_1.Validators.required);
            this.frmCantidadCarateres = new forms_1.FormControl(null, forms_1.Validators.required);
            this.checkbox1 = false;
            this.checkbox2 = false;
            this.checkbox3 = false;
            this.id_tipo_fecha_seleccion = 0;
            this.formato = "dd/MM/yyyy";
            this.uncheck = (item) => {
                switch (item) {
                    case "anio":
                        this.checkbox2 = false;
                        this.checkbox3 = false;
                        this.id_tipo_fecha_seleccion = 1;
                        this.formato = "yyyy";
                        break;
                    case "mes_anio":
                        this.checkbox1 = false;
                        this.checkbox3 = false;
                        this.id_tipo_fecha_seleccion = 2;
                        this.formato = "MM/yyyy";
                        break;
                    case "dia_mes_anio":
                        this.checkbox1 = false;
                        this.checkbox2 = false;
                        this.id_tipo_fecha_seleccion = 3;
                        this.formato = "dd/MM/yyyy";
                        break;
                }
            };
            this.parseInt = (value) => value && value != "" ? Number(value).toFixed(0) : null;
            this.cargando_tabla = false;
            this._add_alternativa_table = () => {
                this.cargando_tabla = true;
                let data = this.array_alternativa_select;
                this.array_alternativa_select = [];
                setTimeout(() => {
                    let last = data.length;
                    data.push({ idx: last, peso: null, descripcion: null });
                    this.frmAlternativaDescripcion.push(new forms_1.FormControl(null, forms_1.Validators.required));
                    this.frmAlternativaPeso.push(new forms_1.FormControl(null, forms_1.Validators.required));
                    this.array_alternativa_select = data;
                    this.cargando_tabla = false;
                    this.cd.detectChanges();
                    this.cd.markForCheck();
                }, 350);
            };
            this._delete_alternativa_table = (idx) => {
                this.cargando_tabla = true;
                this.modal.confirm({
                    nzTitle: 'Eliminar',
                    nzContent: '¿Esta seguro de eliminar la alternativa seleccionada?',
                    nzOkText: 'Si',
                    nzOkType: 'primary',
                    nzCancelText: 'No',
                    nzOnOk: () => {
                        let table = this.array_alternativa_select;
                        this.array_alternativa_select = [];
                        setTimeout(() => {
                            table.splice(idx, 1);
                            this.frmAlternativaDescripcion.splice(idx, 1);
                            this.frmAlternativaPeso.splice(idx, 1);
                            table.forEach((f, index) => { f.idx = index; });
                            this.array_alternativa_select = table;
                            this.cargando_tabla = false;
                        }, 350);
                    },
                    nzOnCancel: () => {
                        this.cargando_tabla = false;
                    }
                });
            };
            this.error_archivo_tipo_archivo = false;
            this.handleSaveFormularioModal = () => {
                let hasDuplicates = (a) => {
                    const noDups = new Set(a);
                    return a.length == noDups.size ? false : true;
                };
                let allow = true, required_filled = true;
                let str = "<ul>";
                if (this.forma.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                    if (this.JSON_DESPLEGABLE_INSTITUCIONAL.tbl_data == null || this.JSON_DESPLEGABLE_INSTITUCIONAL.tbl_data == "") {
                        this.frmMaestroInstitucional.markAllAsTouched();
                        this.frmMaestroInstitucional.markAsDirty();
                        this.frmMaestroInstitucional.updateValueAndValidity();
                        allow = false;
                        required_filled = false;
                    }
                }
                let has_min_rows = true;
                if (this.forma.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.desplegable_libre ||
                    this.forma.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_multiple ||
                    this.forma.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                    if (this.array_alternativa_select.length < 2) {
                        allow = false;
                        has_min_rows = false;
                    }
                    else {
                        let is_filled = true;
                        this.frmAlternativaDescripcion.forEach(e => {
                            if (e.invalid) {
                                e.markAllAsTouched();
                                e.markAsDirty();
                                e.updateValueAndValidity();
                                allow = false;
                                required_filled = false,
                                    is_filled = false;
                            }
                        });
                    }
                }
                if (this.forma.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.numerico_decimal) {
                    if (this.JSON_NUMERICO_DECIMAL.nro_decimal == null || this.JSON_NUMERICO_DECIMAL.nro_decimal == 0 || this.JSON_NUMERICO_DECIMAL.nro_decimal > 5) {
                        this.frmCantidadDigitos.markAllAsTouched();
                        this.frmCantidadDigitos.markAsDirty();
                        this.frmCantidadDigitos.updateValueAndValidity();
                        allow = false;
                        required_filled = false;
                    }
                }
                if (this.forma.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.numerico_entero) {
                    if (this.JSON_NUMERICO_ENTERO.nro_entero == null || this.JSON_NUMERICO_ENTERO.nro_entero == 0) {
                        this.frmCantidadDigitosEnteros.markAllAsTouched();
                        this.frmCantidadDigitosEnteros.markAsDirty();
                        this.frmCantidadDigitosEnteros.updateValueAndValidity();
                        allow = false;
                        required_filled = false;
                    }
                }
                if (this.forma.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.fecha) {
                    if (this.id_tipo_fecha_seleccion != 0) {
                        this.JSON_NUMERICO_FECHA.id_tipo_fecha = this.id_tipo_fecha_seleccion;
                        this.JSON_NUMERICO_FECHA.formato = this.formato;
                        allow = true;
                    }
                    else {
                        allow = false;
                    }
                }
                let has_tipo_archivo = true;
                if (this.forma.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.archivo) {
                    let total = 0;
                    this.array_archivo_tipo_archivo_columna.forEach(element => {
                        if (element.selected) {
                            total++;
                        }
                    });
                    if (total == 0) {
                        this.error_archivo_tipo_archivo = true;
                        allow = false;
                        has_tipo_archivo = false;
                    }
                    else {
                        allow = true;
                        this.error_archivo_tipo_archivo = false;
                    }
                }
                else {
                    allow = true;
                    this.error_archivo_tipo_archivo = false;
                }
                if (!allow) {
                    if (required_filled == false) {
                        str += "<li>Debe ingresar los campos obligatorios.</li>";
                    }
                    if (has_min_rows == false) {
                        str += "<li>Debe contar con al menos dos alternativas.</li>";
                    }
                    if (has_tipo_archivo == false) {
                        str += "<li>Debe seleccionar al menos un tipo de archivo.</li>";
                    }
                }
                else {
                    if (this.forma.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_multiple
                        || this.forma.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_unica
                        || this.forma.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.desplegable_libre) {
                        let rows = [];
                        this.frmAlternativaDescripcion.forEach(e => {
                            rows.push(e.value);
                        });
                        if (hasDuplicates(rows)) {
                            allow = false;
                            str += "<li>Existen descripciones repetidas.</li>";
                        }
                    }
                }
                str += "<ul>";
                if (!allow) {
                    this.createNotification('warning', 'Advertencia', str);
                }
                else {
                    let string_json = null;
                    if (this.forma.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                        string_json = this.JSON_DESPLEGABLE_INSTITUCIONAL;
                    }
                    if (this.forma.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.desplegable_libre) {
                        this.JSON_DESPLEGABLE_LIBRE.opciones = this.array_alternativa_select;
                        string_json = this.JSON_DESPLEGABLE_LIBRE;
                    }
                    if (this.forma.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.numerico_entero) {
                        string_json = this.JSON_NUMERICO_ENTERO;
                    }
                    if (this.forma.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.texto) {
                        string_json = this.JSON_NUMERICO_TEXTO;
                    }
                    if (this.forma.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.numerico_decimal) {
                        string_json = this.JSON_NUMERICO_DECIMAL;
                    }
                    if (this.forma.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.fecha) {
                        string_json = this.JSON_NUMERICO_FECHA;
                    }
                    if (this.forma.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                        this.JSON_SELECCION_UNICA.opciones = this.array_alternativa_select;
                        string_json = this.JSON_SELECCION_UNICA;
                    }
                    if (this.forma.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_multiple) {
                        this.JSON_SELECCION_MULTIPLE.opciones = this.array_alternativa_select;
                        string_json = this.JSON_SELECCION_MULTIPLE;
                    }
                    if (this.forma.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.archivo) {
                        this.JSON_SELECCION_ARCHIVO.opciones = this.array_archivo_tipo_archivo_columna;
                        string_json = this.JSON_SELECCION_ARCHIVO;
                    }
                    this.createNotification('success', 'Éxito', '<ul><li>Registrado con éxito</li></ul>');
                    this.onSaveDataForma.emit(string_json);
                }
            };
            this.handleCancelarFormularioModal = () => {
                this.onCloseModalMatriz.emit(true);
            };
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
        }
        ngOnInit() {
            if (this.forma) {
                this.JSON_INIT();
            }
            else {
                this.frmCantidadDigitos.setValue(null);
                this.frmCantidadDigitosEnteros.setValue(null);
                this.JSON_NUMERICO_DECIMAL.nro_decimal = null;
                this.JSON_NUMERICO_DECIMAL.nro_entero = null;
                this.JSON_NUMERICO_ENTERO.nro_entero = null;
                this.JSON_NUMERICO_TEXTO.nro_caracteres = null;
            }
        }
        change_fecha_byTipo(values) {
            if (values.currentTarget.checked) {
                this.array_tipo_fecha.forEach(element => {
                    if (Number(values.currentTarget.id) == element.idx) {
                        element.selected = true;
                    }
                });
            }
            else {
                this.array_tipo_fecha.forEach(element => {
                    if (Number(values.currentTarget.id) == element.idx) {
                        element.selected = false;
                    }
                });
            }
        }
        getArchivoTipoArchivo() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.sis_enumerado_s.GetEnumeradoByTipoEnumerado(_core_1.SIS_TIPO_ENUMERADO.archivo_tipo_archivo).then(datos => {
                    this.array_archivo_tipo_archivo_columna = datos.data.filter(x => x.es_eliminado == false);
                }).catch(err => { });
            });
        }
        change_archivo_byTipo(values) {
            console.log(values.currentTarget.checked);
            if (values.currentTarget.checked) {
                this.array_archivo_tipo_archivo_columna.forEach(element => {
                    if (Number(values.currentTarget.id) == element.id_enumerado) {
                        element.selected = true;
                    }
                });
            }
            else {
                this.array_archivo_tipo_archivo_columna.forEach(element => {
                    if (Number(values.currentTarget.id) == element.id_enumerado) {
                        element.selected = false;
                    }
                });
            }
        }
        JSON_INIT() {
            let json = this.forma;
            let id_tipo_pregunta = this.forma.id_tipo_pregunta;
            if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                this.JSON_DESPLEGABLE_INSTITUCIONAL = json;
            }
            if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.numerico_decimal) {
                this.JSON_NUMERICO_DECIMAL = json;
            }
            if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.fecha) {
                this.JSON_NUMERICO_FECHA = json;
                switch (json.id_tipo_fecha) {
                    case 1:
                        this.checkbox1 = true;
                        this.checkbox2 = false;
                        this.checkbox3 = false;
                        this.id_tipo_fecha_seleccion = 1;
                        this.formato = "yyyy";
                        break;
                    case 2:
                        this.checkbox1 = false;
                        this.checkbox2 = true;
                        this.checkbox3 = false;
                        this.id_tipo_fecha_seleccion = 2;
                        this.formato = "MM/yyyy";
                        break;
                    case 3:
                        this.checkbox1 = false;
                        this.checkbox2 = false;
                        this.checkbox3 = true;
                        this.id_tipo_fecha_seleccion = 3;
                        this.formato = "dd/MM/yyyy";
                        break;
                    default:
                        this.checkbox1 = false;
                        this.checkbox2 = false;
                        this.checkbox3 = false;
                        this.id_tipo_fecha_seleccion = 0;
                        this.formato = "dd/MM/yyyy";
                        break;
                }
            }
            if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.archivo) {
                if (json.opciones == null) {
                    this.getArchivoTipoArchivo();
                }
                else {
                    this.array_archivo_tipo_archivo_columna = json.opciones;
                }
            }
            if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.desplegable_libre ||
                id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_unica ||
                id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_multiple) {
                json.opciones.forEach((e, _idx) => {
                    e.idx = _idx;
                    this.frmAlternativaDescripcion.push(new forms_1.FormControl(null, forms_1.Validators.required));
                    this.frmAlternativaPeso.push(new forms_1.FormControl(null));
                });
                this.array_alternativa_select = json.opciones;
                if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.desplegable_libre) {
                    this.JSON_DESPLEGABLE_LIBRE = json;
                }
                else if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                    this.JSON_SELECCION_UNICA = json;
                }
                else {
                    this.JSON_SELECCION_MULTIPLE = json;
                }
            }
        }
    };
    ModalRegistroColumnaExtComponent.ctorParameters = () => [
        { type: _core_1.SisEnumeradoService },
        { type: forms_1.FormBuilder },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: ng_zorro_antd_1.NzModalService },
        { type: core_1.ChangeDetectorRef }
    ];
    tslib_1.__decorate([
        core_1.Input()
    ], ModalRegistroColumnaExtComponent.prototype, "isVisibleModalMatriz", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalRegistroColumnaExtComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalRegistroColumnaExtComponent.prototype, "forma", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalRegistroColumnaExtComponent.prototype, "modal_width", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalRegistroColumnaExtComponent.prototype, "array_tipo_pregunta", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalRegistroColumnaExtComponent.prototype, "array_maestro_institucional", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ModalRegistroColumnaExtComponent.prototype, "onCloseModalMatriz", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ModalRegistroColumnaExtComponent.prototype, "onSaveDataForma", void 0);
    ModalRegistroColumnaExtComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-modal-registro-columna-ext',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./modal-registro-columna-ext.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-pregunta-ext/modal-registro-columna-ext/modal-registro-columna-ext.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./modal-registro-columna-ext.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-pregunta-ext/modal-registro-columna-ext/modal-registro-columna-ext.component.css")).default]
        })
    ], ModalRegistroColumnaExtComponent);
    exports.ModalRegistroColumnaExtComponent = ModalRegistroColumnaExtComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-pregunta-ext/modal-registro-pregunta-extranet.component.css":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-pregunta-ext/modal-registro-pregunta-extranet.component.css ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hoverable:hover{\r\n    cursor:pointer;\r\n}\r\n\r\n.hoverable_txt:hover{\r\n    cursor:pointer;\r\n    background-color:#ffc1c1;\r\n}\r\n\r\n.is_selected_tipo{\r\n    background-color:#ffc1c1;\r\n}\r\n\r\n.btn_span {\r\n    float: right;\r\n    margin-right: 6px;\r\n    margin-top: -25px;\r\n    position: relative;\r\n    z-index: 2;\r\n    /*color: #244DAE;*/\r\n    /*background-color:#E9ECEF;*/\r\n    font-weight: bolder;\r\n}\r\n\r\n/*\r\n.btn_span:hover{\r\n    cursor: pointer;\r\n}*/\r\n\r\ninput[type='radio'] {\r\n    accent-color: #DC3545;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaXN0ZW1hL3BhZ2VzL2dlc3Rpb24tZXh0cmFuZXQvcGFnZXMvZW5jdWVzdGFzLWV4dHJhbmV0L2NvbmZpZ3VyYWNpb24tZW5jdWVzdGEtZXh0L2NvbXBvbmVudHMvbW9kYWwtcmVnaXN0cm8tcHJlZ3VudGEtZXh0L21vZGFsLXJlZ2lzdHJvLXByZWd1bnRhLWV4dHJhbmV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHdCQUF3QjtBQUM1Qjs7QUFDQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixtQkFBbUI7QUFDdkI7O0FBQ0E7OztFQUdFOztBQUNGO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaXN0ZW1hL3BhZ2VzL2dlc3Rpb24tZXh0cmFuZXQvcGFnZXMvZW5jdWVzdGFzLWV4dHJhbmV0L2NvbmZpZ3VyYWNpb24tZW5jdWVzdGEtZXh0L2NvbXBvbmVudHMvbW9kYWwtcmVnaXN0cm8tcHJlZ3VudGEtZXh0L21vZGFsLXJlZ2lzdHJvLXByZWd1bnRhLWV4dHJhbmV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG92ZXJhYmxlOmhvdmVye1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcbi5ob3ZlcmFibGVfdHh0OmhvdmVye1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmMxYzE7XHJcbn1cclxuLmlzX3NlbGVjdGVkX3RpcG97XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmMxYzE7XHJcbn1cclxuLmJ0bl9zcGFuIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTI1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgLypjb2xvcjogIzI0NERBRTsqL1xyXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiNFOUVDRUY7Ki9cclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLypcclxuLmJ0bl9zcGFuOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Ki9cclxuaW5wdXRbdHlwZT0ncmFkaW8nXSB7XHJcbiAgICBhY2NlbnQtY29sb3I6ICNEQzM1NDU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-pregunta-ext/modal-registro-pregunta-extranet.component.ts":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-pregunta-ext/modal-registro-pregunta-extranet.component.ts ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! external/ckeditor5-build-decoupled-document */ "./external/ckeditor5-build-decoupled-document/build/ckeditor.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, forms_1, _core_1, ng_zorro_antd_1, DecoupledEditor) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    DecoupledEditor.defaultConfig = _core_1.DecoupledInit.defaultConfig;
    let ModalRegistroPreguntaExtranetComponent = class ModalRegistroPreguntaExtranetComponent {
        constructor(sis_enumerado_s, categoria_s, encuesta_s, _formBuilder, notification, modal, cd
        //checkTipoArchivo_3Element: ElementRef
        ) {
            this.sis_enumerado_s = sis_enumerado_s;
            this.categoria_s = categoria_s;
            this.encuesta_s = encuesta_s;
            this._formBuilder = _formBuilder;
            this.notification = notification;
            this.modal = modal;
            this.cd = cd;
            this._TIPO_PREGUNTA = _core_1.TIPO_PREGUNTA;
            this.title = "Agregar";
            this.is_first = false;
            this.es_por_defecto = false;
            this.isVisibleModal = false;
            this.preguntas_condicionales = [];
            this.es_con_seccion = false;
            this.onCloseModal = new core_1.EventEmitter();
            this.onSaveDataPregunta = new core_1.EventEmitter();
            this.array_tipos_archivos = [];
            this.array_archivo_tipo_archivo = [];
            this.array_tipo_fecha = [];
            this.texto_mensaje = null;
            this.checkedFila = false;
            this.checkedColumna = false;
            this.modal_width = 800;
            this.frm = { id_pregunta: 0, id_encuesta: 0, es_obligatorio: true };
            this.selectedPreguntaCondicional = null;
            //frmPRG:FormGroup;
            this.frmPRG = {
                frmPregunta: new forms_1.FormControl(null, forms_1.Validators.required),
                frmTipoPregunta: new forms_1.FormControl(null, forms_1.Validators.required),
                frmEsObligatorio: new forms_1.FormControl(true),
                frmCategoria: new forms_1.FormControl(null),
                frmSubCategoria: new forms_1.FormControl(null),
                frmDescripcionAdicional: new forms_1.FormControl(null),
                frmTipoArchivo: new forms_1.FormControl(null),
                frmEsCondicionada: new forms_1.FormControl(false),
                frmEsCondicional: new forms_1.FormControl(false),
                frmEsAgregarAlternativa: new forms_1.FormControl(false),
                frmPreguntaCondicional: new forms_1.FormControl(null),
                frmEsFinalizaEncuesta: new forms_1.FormControl(false),
                frmMensaje: new forms_1.FormControl(null),
                frmSeccion: new forms_1.FormControl(null)
            };
            this.loading_condionales = false;
            this.setPreguntaSelecionadaCondicional = (e) => {
                let _find = this.preguntas_condicionales.find(x => x.id_pregunta == e);
                this.loading_condionales = true;
                setTimeout(() => {
                    this.selectedPreguntaCondicional = e ? _find : null;
                    this.loading_condionales = false;
                    this.cd.detectChanges();
                    this.cd.markForCheck();
                }, 200);
            };
            this.respuesta_disparadora = null;
            this.handleClickSaveRespuestaCondicionada = (e) => {
                this.respuesta_disparadora = e;
                this.frm.json_respuesta_condicional = JSON.stringify(e);
                this.cd.detectChanges();
                this.cd.markForCheck();
            };
            this.array_tipo_file = [];
            this.array_tipo_pregunta = [];
            this.array_seccion = [];
            this.array_categoria = [];
            this.array_sub_categoria = [];
            this.array_sub_categoria_all = [];
            this.filter_sub_categoria = (val, force = false) => {
                let id_categoria_extranet = this.frm.id_categoria;
                this.array_sub_categoria = id_categoria_extranet ? this.array_sub_categoria_all.filter(x => x.id_categoria_extranet == id_categoria_extranet) : [];
                if (force) {
                    //logica retirada
                }
                else {
                    this.frm.id_sub_categoria = null;
                }
            };
            //#endregion
            this.array_maestro_institucional = [
                { id_enumerado: 1, nombre: "Dependencia" },
                { id_enumerado: 2, nombre: "Régimen" }
            ];
            this.JSON_DESPLEGABLE_INSTITUCIONAL = _core_1.JSON_TIPO_PREGUNTA.desplegable_institucional;
            this.frmMaestroInstitucional = new forms_1.FormControl(null, forms_1.Validators.required);
            this.JSON_DESPLEGABLE_LIBRE = _core_1.JSON_TIPO_PREGUNTA.desplegable_libre;
            this.JSON_NUMERICO_ENTERO = _core_1.JSON_TIPO_PREGUNTA.numerico_entero;
            this.JSON_NUMERICO_TEXTO = _core_1.JSON_TIPO_PREGUNTA.texto;
            this.JSON_NUMERICO_FECHA = _core_1.JSON_TIPO_PREGUNTA.fecha;
            this.JSON_SELECCION_ARCHIVO = _core_1.JSON_TIPO_PREGUNTA.archivo;
            this.JSON_NUMERICO_DECIMAL = _core_1.JSON_TIPO_PREGUNTA.numerico_decimal;
            this.JSON_SELECCION_UNICA = _core_1.JSON_TIPO_PREGUNTA.seleccion_unica;
            this.JSON_SELECCION_MULTIPLE = _core_1.JSON_TIPO_PREGUNTA.seleccion_multiple;
            this.JSON_MATRIZ = _core_1.JSON_TIPO_PREGUNTA.matriz;
            this.JSON_MENSAJE = _core_1.JSON_TIPO_PREGUNTA.mensaje;
            this.array_alternativa_select = [];
            this.frmAlternativaDescripcion = [];
            this.frmAlternativaPeso = [];
            this.frmCantidadDigitos = new forms_1.FormControl(null, forms_1.Validators.required);
            this.frmCantidadDigitosEnteros = new forms_1.FormControl(null, forms_1.Validators.required);
            this.frmCantidadCarateres = new forms_1.FormControl(null, forms_1.Validators.required);
            this.array_filas = [];
            this.array_columnas = [];
            this.cargar_formato_byTipo = (idTipo, is_default = false /*is_first=false*/) => {
                this.modal_width = idTipo == _core_1.TIPO_PREGUNTA.matriz ? 1200 : 800;
                if (idTipo == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                    if (is_default) {
                        this.JSON_DESPLEGABLE_INSTITUCIONAL.tbl_data = 1;
                    }
                }
            };
            //#region ARCHIVOS
            this.estaGuardando = false;
            this.tiposMimePermitidos = ["image/png", "image/jpeg"];
            this.imagen_MimePermitidos = ["image/png", "image/jpeg", "image/gif"];
            this.video_extensionAceptados = [".mp4"];
            this.imagen_extensionAceptados = [".png", ".jpeg"];
            this.pesoMaximoEnMB = _core_1.FILE_SETTINGS.maxFileSize;
            this.url = "/api/comun/descargar-archivo";
            this.validar_fup = false;
            this.show_file_uploader = false;
            this.show_url = false;
            this.selected_tipo = '';
            this._extensionAceptados = [];
            this.set_tipo_file = () => {
                let tipo = this.frm.id_tipo_archivo;
                let tipo_file = this.array_tipo_file.find(f => f.id_enumerado == tipo);
                this.selected_tipo = tipo_file ? tipo_file.nombre.toLowerCase() : '';
                this.show_file_uploader = tipo ? (tipo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen ? true : false) : false;
                this.show_url = tipo ? (tipo == _core_1.TIPO_ARCHIVO_ENUMERADO.video ? true : false) : false;
                this._extensionAceptados = this.imagen_extensionAceptados; //tipo?(tipo==TIPO_ARCHIVO_ENUMERADO.video?this.video_extensionAceptados:this.imagen_extensionAceptados):[];
            };
            this.set_file_iden = (data) => {
                this.error_imagen = false;
                this.frm.iden_imagen = data.codigo;
            };
            this.handleRemovedFileExplicacion = (e) => {
                this.frm.iden_imagen = null;
            };
            //#endregion
            this.parseInt = (value) => value && value != "" ? Number(value).toFixed(0) : null;
            this.setJsonName = () => {
                let pregunta = this.frm.pregunta;
                this.JSON_DESPLEGABLE_INSTITUCIONAL.nombre = pregunta;
                this.JSON_DESPLEGABLE_LIBRE.nombre = pregunta;
                this.JSON_NUMERICO_ENTERO.nombre = pregunta;
                this.JSON_NUMERICO_DECIMAL.nombre = pregunta;
                this.JSON_SELECCION_UNICA.nombre = pregunta;
                this.JSON_SELECCION_MULTIPLE.nombre = pregunta;
                this.JSON_MATRIZ.nombre = pregunta;
            };
            //#region TIPO TABLA
            this.cargando_tabla = false;
            this._add_alternativa_table = () => {
                this.cargando_tabla = true;
                let data = this.array_alternativa_select;
                this.array_alternativa_select = [];
                setTimeout(() => {
                    let last = data.length;
                    data.push({ idx: last, peso: null, descripcion: null });
                    this.frmAlternativaDescripcion.push(new forms_1.FormControl(null, forms_1.Validators.required));
                    this.frmAlternativaPeso.push(new forms_1.FormControl(null, forms_1.Validators.required));
                    this.array_alternativa_select = data;
                    this.cargando_tabla = false;
                    this.cd.detectChanges();
                    this.cd.markForCheck();
                }, 350);
            };
            this._delete_alternativa_table = (idx) => {
                this.cargando_tabla = true;
                this.modal.confirm({
                    nzTitle: 'Eliminar',
                    nzContent: '¿Esta seguro de eliminar la alternativa seleccionada?',
                    nzOkText: 'Si',
                    nzOkType: 'primary',
                    nzCancelText: 'No',
                    nzOnOk: () => {
                        let table = this.array_alternativa_select;
                        this.array_alternativa_select = [];
                        setTimeout(() => {
                            table.splice(idx, 1);
                            this.frmAlternativaDescripcion.splice(idx, 1);
                            this.frmAlternativaPeso.splice(idx, 1);
                            table.forEach((f, index) => { f.idx = index; });
                            this.array_alternativa_select = table;
                            this.cargando_tabla = false;
                        }, 350);
                    },
                    nzOnCancel: () => {
                        this.cargando_tabla = false;
                    }
                });
            };
            //#endregion
            //#region TIPO MATRIZ
            this.frmFilaName = [];
            this.frmColumnaName = [];
            this._add_filas = () => {
                let data = this.array_filas; //this.JSON_MATRIZ.filas;
                this.array_filas = [];
                this.cargando_tabla = true;
                this.error_filas_matriz = false;
                setTimeout(() => {
                    let last = data.length;
                    if (this.checkedFila) {
                        data.push({ idx: last, nombre_fila: null, forma: {} });
                    }
                    else if (this.checkedColumna) {
                        let fila = {
                            idx: last,
                            nombre_fila: null
                        };
                        data.push(fila);
                    }
                    this.frmFilaName.push(new forms_1.FormControl(null, forms_1.Validators.required));
                    this.array_filas = data;
                    this.cargando_tabla = false;
                    this.cd.detectChanges();
                    this.cd.markForCheck();
                }, 350);
            };
            this._delete_fila = (idx) => {
                this.cargando_tabla = true;
                this.modal.confirm({
                    nzTitle: 'Eliminar',
                    nzContent: '¿Esta seguro de eliminar la fila seleccionada?',
                    nzOkText: 'Si',
                    nzOkType: 'primary',
                    nzCancelText: 'No',
                    nzOnOk: () => {
                        let table = this.array_filas;
                        this.array_filas = [];
                        setTimeout(() => {
                            table.splice(idx, 1);
                            this.frmFilaName.splice(idx, 1);
                            table.forEach((f, index) => { f.idx = index; });
                            this.array_filas = table;
                            this.cargando_tabla = false;
                        }, 350);
                    },
                    nzOnCancel: () => {
                        this.cargando_tabla = false;
                    }
                });
            };
            this.cargando_columnas = false;
            this.add_columnas = () => {
                let data = this.array_columnas;
                this.array_columnas = [];
                this.cargando_columnas = true;
                this.error_columnas_matriz = false;
                setTimeout(() => {
                    let last = data.length;
                    if (this.checkedFila) {
                        data.push({ idx: last, nombre_columna: null });
                    }
                    else if (this.checkedColumna) {
                        data.push({ idx: last, nombre_columna: null, forma: {} });
                    }
                    this.frmColumnaName.push(new forms_1.FormControl(null, forms_1.Validators.required));
                    this.array_columnas = data;
                    this.cargando_columnas = false;
                    this.cd.detectChanges();
                    this.cd.markForCheck();
                }, 350);
            };
            this._delete_columna = (idx) => {
                this.cargando_columnas = true;
                this.modal.confirm({
                    nzTitle: 'Eliminar',
                    nzContent: '¿Esta seguro de eliminar la columna seleccionada?',
                    nzOkText: 'Si',
                    nzOkType: 'primary',
                    nzCancelText: 'No',
                    nzOnOk: () => {
                        let table = this.array_columnas; //this.JSON_MATRIZ.columnas;
                        //this.JSON_MATRIZ.columnas=[];
                        this.array_columnas = [];
                        setTimeout(() => {
                            table.splice(idx, 1);
                            this.frmColumnaName.splice(idx, 1);
                            table.forEach((f, index) => { f.idx = index; });
                            //this.JSON_MATRIZ.columnas=table;
                            this.array_columnas = table;
                            this.cargando_columnas = false;
                        }, 350);
                    },
                    nzOnCancel: () => {
                        this.cargando_columnas = false;
                    }
                });
            };
            //#endregion
            //#region SAVE OR CANCEL FORM
            this.error_imagen = false;
            this.error_video = false;
            this.validURL = (str) => {
                var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
                    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
                    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
                return !!pattern.test(str);
            };
            this.error_seccion = false;
            this.error_editor_mensaje = false;
            this.error_filas_matriz = false;
            this.error_archivo_tipo_archivo = false;
            this.error_tipo_fecha = false;
            this.error_columnas_matriz = false;
            this.handleSaveFormularioModal = () => {
                let hasDuplicates = (a) => {
                    const noDups = new Set(a);
                    return a.length == noDups.size ? false : true;
                };
                let allow = true, required_filled = true;
                let frm_keys = Object.keys(this.frmPRG);
                let str = "<ul>";
                let filas_unicas = true;
                let columnas_unicas = true;
                for (let i = 0; i < frm_keys.length; i++) {
                    let frmkey = frm_keys[i];
                    if (this.frmPRG[frmkey].invalid) {
                        this.frmPRG[frmkey].markAsTouched();
                        this.frmPRG[frmkey].markAsDirty();
                        this.frmPRG[frmkey].updateValueAndValidity();
                        allow = false;
                        required_filled = false;
                    }
                }
                if (this.frm.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen) {
                    if (this.frm.iden_imagen == null || this.frm.iden_imagen == "") {
                        this.error_imagen = true;
                        allow = false;
                        required_filled = false;
                    }
                }
                if (this.frm.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.video) {
                    if (this.frm.url_video == null || this.frm.url_video == "" || this.validURL(this.frm.url_video) == false) {
                        this.error_video = true;
                        allow = false;
                        required_filled = false;
                    }
                }
                if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                    if (this.JSON_DESPLEGABLE_INSTITUCIONAL.tbl_data == null || this.JSON_DESPLEGABLE_INSTITUCIONAL.tbl_data == "") {
                        this.frmMaestroInstitucional.markAllAsTouched();
                        this.frmMaestroInstitucional.markAsDirty();
                        this.frmMaestroInstitucional.updateValueAndValidity();
                        allow = false;
                        required_filled = false;
                    }
                }
                let has_min_rows = true;
                if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.desplegable_libre ||
                    this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_multiple ||
                    this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                    if (this.array_alternativa_select.length < 2) {
                        allow = false;
                        has_min_rows = false;
                    }
                    else {
                        let is_filled = true;
                        this.frmAlternativaDescripcion.forEach(e => {
                            if (e.invalid) {
                                e.markAllAsTouched();
                                e.markAsDirty();
                                e.updateValueAndValidity();
                                allow = false;
                                required_filled = false,
                                    is_filled = false;
                            }
                        });
                    }
                }
                if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.numerico_decimal) {
                    if (this.JSON_NUMERICO_DECIMAL.nro_decimal == null || this.JSON_NUMERICO_DECIMAL.nro_decimal == 0) {
                        this.frmCantidadDigitos.markAllAsTouched();
                        this.frmCantidadDigitos.markAsDirty();
                        this.frmCantidadDigitos.updateValueAndValidity();
                        allow = false;
                        required_filled = false;
                    }
                }
                if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.numerico_entero) {
                    if (this.JSON_NUMERICO_ENTERO.nro_entero == null || this.JSON_NUMERICO_ENTERO.nro_entero == 0) {
                        this.frmCantidadDigitosEnteros.markAllAsTouched();
                        this.frmCantidadDigitosEnteros.markAsDirty();
                        this.frmCantidadDigitosEnteros.updateValueAndValidity();
                        allow = false;
                        required_filled = false;
                    }
                }
                /*if(this.frm.id_tipo_pregunta==TIPO_PREGUNTA.texto){
                  if(this.JSON_NUMERICO_TEXTO.nro_caracteres==null || this.JSON_NUMERICO_TEXTO.nro_caracteres==0 ){
                    this.frmCantidadCarateres.markAllAsTouched();
                    this.frmCantidadCarateres.markAsDirty();
                    this.frmCantidadCarateres.updateValueAndValidity();
                    allow=false;
                    required_filled=false;
                  }
                } */
                let has_tipo_archivo = true;
                if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.archivo) {
                    let total = 0;
                    this.array_archivo_tipo_archivo.forEach(element => {
                        if (element.selected) {
                            total++;
                        }
                    });
                    if (total == 0) {
                        this.error_archivo_tipo_archivo = true;
                        allow = false;
                        has_tipo_archivo = false;
                    }
                    else {
                        allow = true;
                        this.error_archivo_tipo_archivo = false;
                    }
                }
                let has_tipo_fecha = true;
                if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.fecha) {
                    let total_fecha = 0;
                    this.array_tipo_fecha.forEach(element => {
                        if (element.selected) {
                            total_fecha++;
                        }
                    });
                    if (total_fecha == 0) {
                        this.error_tipo_fecha = true;
                        allow = false;
                        has_tipo_fecha = false;
                    }
                    else {
                        allow = true;
                        this.error_tipo_fecha = false;
                    }
                }
                let has_editor_mensaje = true;
                if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.mensaje) {
                    if (this.frm.mensaje == null || this.frm.mensaje == "") {
                        this.error_editor_mensaje = true;
                        allow = false;
                        has_editor_mensaje = false;
                    }
                    else {
                        allow = true;
                        this.error_editor_mensaje = false;
                    }
                }
                let has_min_filas = true, has_min_columnas = true;
                if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.matriz) {
                    this.error_filas_matriz = this.array_filas.length == 0 ? true : false;
                    this.error_columnas_matriz = this.array_columnas.length == 0 ? true : false;
                    if (this.array_filas.length == 0 || this.array_columnas.length == 0) {
                        allow = false;
                        has_min_filas = this.array_filas.length == 0 ? false : true;
                        has_min_columnas = this.array_columnas.length == 0 ? false : true;
                    }
                    this.frmColumnaName.forEach(e => {
                        if (e.invalid) {
                            e.markAllAsTouched();
                            e.markAsDirty();
                            e.updateValueAndValidity();
                            allow = false;
                            required_filled = false;
                        }
                    });
                    this.frmFilaName.forEach(e => {
                        if (e.invalid) {
                            e.markAllAsTouched();
                            e.markAsDirty();
                            e.updateValueAndValidity();
                            allow = false;
                            required_filled = false;
                        }
                    });
                }
                let has_seccion = true;
                if (this.es_con_seccion) {
                    if (this.frm.id_encuesta_seccion == null || this.frm.id_encuesta_seccion == undefined) {
                        this.error_seccion = true;
                        allow = false;
                        has_seccion = false;
                    }
                }
                if (!allow) {
                    if (required_filled == false) {
                        str += "<li>Debe ingresar los campos obligatorios.</li>";
                    }
                    if (has_min_columnas == false) {
                        str += "<li>Debe contar con al menos una columna.</li>";
                    }
                    if (has_min_filas == false) {
                        str += "<li>Debe contar con al menos una fila.</li>";
                    }
                    if (has_min_rows == false) {
                        str += "<li>Debe contar con al menos dos alternativas.</li>";
                    }
                    if (has_tipo_archivo == false) {
                        str += "<li>Debe seleccionar al menos un tipo de archivo.</li>";
                    }
                    if (has_editor_mensaje == false) {
                        str += "<li>Debe ingresar un mensaje.</li>";
                    }
                    if (has_seccion == false) {
                        str += "<li>Debes seleccionar una sección.</li>";
                    }
                    if (has_tipo_fecha == false) {
                        str += "<li>Debe seleccionar al menos un tipo de fecha.</li>";
                    }
                }
                else {
                    if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.matriz) {
                        let cols = [], rows = [];
                        this.frmColumnaName.forEach(e => {
                            cols.push(e.value);
                        });
                        this.frmFilaName.forEach(e => {
                            rows.push(e.value);
                        });
                        if (hasDuplicates(rows)) {
                            allow = false;
                            str += "<li>Existen filas repetidas.</li>";
                        }
                        if (hasDuplicates(cols)) {
                            allow = false;
                            str += "<li>Existen columnas repetidas.</li>";
                        }
                    }
                    if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_multiple
                        || this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_unica
                        || this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.desplegable_libre) {
                        let rows = [];
                        this.frmAlternativaDescripcion.forEach(e => {
                            rows.push(e.value);
                        });
                        if (hasDuplicates(rows)) {
                            allow = false;
                            str += "<li>Existen descripciones repetidas.</li>";
                        }
                    }
                }
                if (this.frmPRG.frmEsCondicionada.value) {
                    if (this.frm.id_pregunta_condicional == null) {
                        str += "<li>Debe seleccionar una pregunta.</li>";
                    }
                    else {
                        if (this.frm.json_respuesta_condicional) {
                            str += "<li>Debe ingresar una respuesta para la pregunta condicional.</li>";
                        }
                    }
                }
                str += "<ul>";
                if (!allow) {
                    this.createNotification('warning', 'Advertencia', str);
                }
                else {
                    let string_json = null;
                    if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                        string_json = JSON.stringify(this.JSON_DESPLEGABLE_INSTITUCIONAL);
                    }
                    if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.desplegable_libre) {
                        this.JSON_DESPLEGABLE_LIBRE.opciones = this.array_alternativa_select;
                        string_json = JSON.stringify(this.JSON_DESPLEGABLE_LIBRE);
                    }
                    if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.numerico_entero) {
                        string_json = JSON.stringify(this.JSON_NUMERICO_ENTERO);
                    }
                    if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.fecha) {
                        string_json = JSON.stringify(this.JSON_NUMERICO_FECHA);
                    }
                    if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.texto) {
                        let texto = this.JSON_NUMERICO_TEXTO;
                        if (texto.nro_caracteres == null || texto.nro_caracteres == "" || texto.nro_caracteres == undefined) {
                            this.JSON_NUMERICO_TEXTO.nro_caracteres = 1000;
                        }
                        string_json = JSON.stringify(this.JSON_NUMERICO_TEXTO);
                    }
                    if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.archivo) {
                        string_json = JSON.stringify(this.JSON_SELECCION_ARCHIVO);
                    }
                    if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.numerico_decimal) {
                        string_json = JSON.stringify(this.JSON_NUMERICO_DECIMAL);
                    }
                    if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                        this.JSON_SELECCION_UNICA.opciones = this.array_alternativa_select;
                        string_json = JSON.stringify(this.JSON_SELECCION_UNICA);
                    }
                    if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_multiple) {
                        this.JSON_SELECCION_MULTIPLE.opciones = this.array_alternativa_select;
                        string_json = JSON.stringify(this.JSON_SELECCION_MULTIPLE);
                    }
                    if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.matriz) {
                        if (this.checkedFila) {
                            this.JSON_MATRIZ.es_columna_matriz = false;
                        }
                        else if (this.checkedColumna) {
                            this.JSON_MATRIZ.es_columna_matriz = true;
                        }
                        this.JSON_MATRIZ.filas = this.array_filas;
                        this.JSON_MATRIZ.columnas = this.array_columnas; //idx,nombre_columna
                        string_json = JSON.stringify(this.JSON_MATRIZ);
                    }
                    if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.mensaje) {
                        this.JSON_MENSAJE.mensaje = this.frm.mensaje;
                        string_json = JSON.stringify(this.JSON_MENSAJE);
                    }
                    else {
                        this.frm.es_finaliza_encuesta = false;
                    }
                    this.frm.json_alternativas = string_json;
                    if (this.frmPRG.frmTipoPregunta.value != this._TIPO_PREGUNTA.seleccion_unica) {
                        this.frm.es_condicional = false;
                    }
                    let filter = Object.assign({}, this.frm);
                    filter.id_encuesta = this.id_encuesta;
                    if (this.frmPRG.frmSubCategoria.value) {
                        filter.id_sub_categoria = this.frmPRG.frmSubCategoria.value;
                    }
                    if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.archivo) {
                        filter.json_archivo_tipo_archivo = JSON.stringify(this.array_archivo_tipo_archivo);
                    }
                    else {
                        filter.json_archivo_tipo_archivo = null;
                    }
                    if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.fecha) {
                        filter.json_tipo_fecha = JSON.stringify(this.array_tipo_fecha);
                    }
                    else {
                        filter.json_tipo_fecha = null;
                    }
                    if (this.frm.id_tipo_pregunta != _core_1.TIPO_PREGUNTA.desplegable_libre &&
                        this.frm.id_tipo_pregunta != _core_1.TIPO_PREGUNTA.seleccion_multiple &&
                        this.frm.id_tipo_pregunta != _core_1.TIPO_PREGUNTA.seleccion_unica) {
                        filter.es_agregar_pregunta = false;
                    }
                    this.encuesta_s._SaveUpdatePregunta(filter).then(datos => {
                        if (datos.data) {
                            if (datos.data.Success) {
                                let str = '<ul>';
                                datos.data.Messages.forEach(message => {
                                    str += `<li>${message}</li>`;
                                });
                                str += '</ul>';
                                this.createNotification('success', 'Éxito', str);
                                this.onSaveDataPregunta.emit(true);
                            }
                            else {
                                let str = '<ul>';
                                datos.data.Messages.forEach(message => {
                                    str += `<li>${message}</li>`;
                                });
                                str += '</ul>';
                                this.createNotification('warning', 'Advertencia', str);
                            }
                        }
                    }).catch(err => { });
                    //guardar directo en bd a la de dios xdxdxd
                }
            };
            this.handleCancelarFormularioModal = () => {
                this.onCloseModal.emit(true);
            };
            //#endregion
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
            //#region  MATRIZ MODAL
            this.show_modal_matriz = false;
            this.selected_tipo_forma = null;
            this.selected_forma = {};
            this._modal_width = 400;
            this.vista_tipo = false;
            this.show_pre_modal_columna = (item) => {
                this.selected_col_idx = item.idx;
                this.vista_tipo = true;
                if (item.forma != undefined && item.forma && item.forma.id_tipo_pregunta) {
                    this.selected_tipo_forma = item.forma.id_tipo_pregunta;
                }
                else {
                    this.selected_tipo_forma = null;
                }
            };
            this.show_pre_modal_fila = (item) => {
                this.selected_col_idx = item.idx;
                this.vista_tipo = true;
                if (item.forma != undefined && item.forma && item.forma.id_tipo_pregunta) {
                    this.selected_tipo_forma = item.forma.id_tipo_pregunta;
                }
                else {
                    this.selected_tipo_forma = null;
                }
            };
            this.cerrar_pre_modal = () => {
                this.vista_tipo = false;
            };
            this._JSON_TIPO_PREGUNTA = _core_1.JSON_TIPO_PREGUNTA;
            this._show_modal_matriz = (selected_tipo) => {
                //idx,nombre_columna, forma: {}
                this.vista_tipo = false;
                this.selected_tipo_forma = selected_tipo;
                let item;
                if (this.checkedFila) {
                    item = this.array_filas[this.selected_col_idx];
                }
                else if (this.checkedColumna) {
                    item = this.array_columnas[this.selected_col_idx];
                }
                //let item = this.array_columnas[this.selected_col_idx];
                if (selected_tipo == _core_1.TIPO_PREGUNTA.desplegable_institucional ||
                    selected_tipo == _core_1.TIPO_PREGUNTA.numerico_decimal ||
                    selected_tipo == _core_1.TIPO_PREGUNTA.numerico_entero ||
                    selected_tipo == _core_1.TIPO_PREGUNTA.fecha ||
                    selected_tipo == _core_1.TIPO_PREGUNTA.archivo ||
                    selected_tipo == _core_1.TIPO_PREGUNTA.texto) {
                    this._modal_width = 400;
                }
                else {
                    this._modal_width = 800;
                }
                if (item.forma && item.forma.id_tipo_pregunta == selected_tipo) {
                    let _forma = item.forma;
                    this.selected_forma = _forma;
                }
                else {
                    let _forma = selected_tipo == _core_1.TIPO_PREGUNTA.desplegable_institucional ?
                        {
                            id_tipo: 1,
                            nombre: "",
                            tbl_data: null,
                            respuesta: null
                        } : selected_tipo == _core_1.TIPO_PREGUNTA.desplegable_libre ?
                        {
                            id_tipo: 2,
                            nombre: "",
                            seleccion: "libre",
                            opciones: [],
                            respuesta: []
                        } : selected_tipo == _core_1.TIPO_PREGUNTA.numerico_entero ?
                        {
                            id_tipo: 3,
                            nombre: "",
                            nro_entero: null,
                            respuesta: null
                        } : selected_tipo == _core_1.TIPO_PREGUNTA.fecha ?
                        {
                            id_tipo: 9,
                            nombre: "",
                            id_tipo_fecha: null,
                            formato: "",
                            respuesta: null
                        } : selected_tipo == _core_1.TIPO_PREGUNTA.texto ?
                        {
                            id_tipo: 10,
                            nombre: "",
                            respuesta: null,
                            nro_caracteres: null
                        } : selected_tipo == _core_1.TIPO_PREGUNTA.numerico_decimal ?
                        {
                            id_tipo: 4,
                            nombre: "",
                            nro_entero: null,
                            nro_decimal: null,
                            respuesta: null
                        } : selected_tipo == _core_1.TIPO_PREGUNTA.seleccion_unica ?
                        {
                            id_tipo: 5,
                            nombre: "",
                            seleccion: "unica",
                            opciones: [],
                            respuesta: []
                        } : selected_tipo == _core_1.TIPO_PREGUNTA.archivo ?
                        {
                            id_tipo: 11,
                            nombre: "",
                            seleccion: "multiple",
                            opciones: null,
                            id_tipo_pregunta: 11,
                            respuesta: []
                        } : {
                        id_tipo: 6,
                        nombre: "",
                        seleccion: "multiple",
                        opciones: [],
                        respuesta: []
                    };
                    this.selected_forma = _forma;
                    if (this.checkedFila) {
                        this.array_filas[this.selected_col_idx].forma = _forma;
                    }
                    else if (this.checkedColumna) {
                        this.array_columnas[this.selected_col_idx].forma = _forma;
                    }
                    //this.array_columnas[this.selected_col_idx].forma=_forma;
                }
                this.selected_forma.id_tipo_pregunta = selected_tipo;
                this.nombre_columna = item.nombre_columna;
                this.show_modal_matriz = true;
            };
            this.handleOnCloseModalMatriz = (e) => {
                this.selected_forma = null;
                this.nombre_columna = null;
                this.show_modal_matriz = false;
            };
            this.handleOnSaveFormaColumnaMatriz = (forma) => {
                forma.nombre = this.nombre_columna;
                if (this.checkedFila) {
                    this.array_filas[this.selected_col_idx].forma = forma;
                }
                if (this.checkedColumna) {
                    this.array_columnas[this.selected_col_idx].forma = forma;
                }
                this.selected_forma = null;
                this.nombre_columna = null;
                this.show_modal_matriz = false;
            };
            this.editor = DecoupledEditor;
            this.configEditor = _core_1.DecoupledInit.configEditor;
            this.esInvalidoContenido = false;
            this.tags = [];
            this.expresion = /\[\[[A-Z0-9\_]+\]\]/g;
        }
        ngOnInit() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.array_filas = [];
                this.array_columnas = [];
                yield this.getComboInsitucional();
                yield this.getTipoPregunta();
                yield this.getTipoArchivos();
                yield this.getCategoriaExtranetList();
                yield this.getSubCategoriaExtranetList();
                yield this.getSeccionList();
                let basic_frm = { id_pregunta: 0, id_encuesta: this.id_encuesta, es_obligatorio: true };
                let pregunta = Object.assign({}, this.pregunta);
                this.frm = pregunta ? pregunta : basic_frm;
                if (this.frm.id_pregunta != null && this.frm.id_pregunta > 0) {
                    let _id_categoria = pregunta.id_categoria;
                    this.respuesta_disparadora = JSON.parse(pregunta.json_respuesta_condicional);
                    this.array_sub_categoria = _id_categoria ? this.array_sub_categoria_all.filter(x => x.id_categoria_extranet == _id_categoria) : [];
                    this.frmPRG.frmSubCategoria.setValue(pregunta.id_sub_categoria);
                    this.frm.id_sub_categoria = pregunta.id_sub_categoria;
                    this.show_file_uploader = pregunta.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen ? true : false;
                    this.show_url = pregunta.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.video ? true : false;
                    //let _id_seccion = pregunta.id_encuesta_seccion;
                    if (this.es_por_defecto /*this.is_first*/) {
                        //this.frm.id_tipo_pregunta=TIPO_PREGUNTA.desplegable_institucional;
                        this.cargar_formato_byTipo(_core_1.TIPO_PREGUNTA.desplegable_institucional, true);
                    }
                    if (pregunta.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.archivo) {
                        if (pregunta.json_archivo_tipo_archivo != null && pregunta.json_archivo_tipo_archivo != undefined) {
                            this.array_archivo_tipo_archivo = JSON.parse(pregunta.json_archivo_tipo_archivo);
                        }
                        else {
                            yield this.getArchivoTipoArchivo();
                        }
                    }
                    if (pregunta.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.fecha) {
                        if (pregunta.json_tipo_fecha != null && pregunta.json_tipo_fecha != undefined) {
                            this.array_tipo_fecha = JSON.parse(pregunta.json_tipo_fecha);
                        }
                        else {
                            yield this.getTipoFecha();
                        }
                    }
                    this.cd.markForCheck();
                    this.cd.detectChanges();
                    //manejo del json
                    this.JSON_INIT();
                }
                else {
                    this.frm.es_obligatorio = true;
                    this.checkedColumna = true;
                    this.checkedFila = false;
                    this.frmPRG.frmEsObligatorio.setValue(true);
                    this.frmCantidadDigitos.setValue(null);
                    this.frmCantidadDigitosEnteros.setValue(null);
                    this.JSON_NUMERICO_DECIMAL.nro_decimal = null;
                    this.JSON_NUMERICO_DECIMAL.nro_entero = null;
                    this.JSON_NUMERICO_ENTERO.nro_entero = null;
                    this.JSON_NUMERICO_TEXTO.nro_caracteres = null;
                    this.respuesta_disparadora = null;
                    yield this.getArchivoTipoArchivo();
                    yield this.getTipoFecha();
                }
            });
        }
        JSON_INIT() {
            let json = JSON.parse(this.frm.json_alternativas);
            let id_tipo_pregunta = this.frm.id_tipo_pregunta;
            if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                this.JSON_DESPLEGABLE_INSTITUCIONAL = json;
            }
            if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.numerico_decimal) {
                this.JSON_NUMERICO_DECIMAL = json;
            }
            if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.numerico_entero) {
                this.JSON_NUMERICO_ENTERO = json;
            }
            if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.texto) {
                this.JSON_NUMERICO_TEXTO = json;
            }
            if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.mensaje) {
                this.frm.mensaje = json.mensaje;
            }
            if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.desplegable_libre ||
                id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_unica ||
                id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_multiple) {
                json.opciones.forEach((e, _idx) => {
                    e.idx = _idx;
                    this.frmAlternativaDescripcion.push(new forms_1.FormControl(null, forms_1.Validators.required));
                    this.frmAlternativaPeso.push(new forms_1.FormControl(null));
                });
                this.array_alternativa_select = json.opciones;
                if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.desplegable_libre) {
                    this.JSON_DESPLEGABLE_LIBRE = json;
                }
                else if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                    this.JSON_SELECCION_UNICA = json;
                }
                else {
                    this.JSON_SELECCION_MULTIPLE = json;
                }
            }
            if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.matriz) {
                json.filas.forEach(e => {
                    this.frmFilaName.push(new forms_1.FormControl(null, forms_1.Validators.required));
                });
                json.columnas.forEach(e => {
                    this.frmColumnaName.push(new forms_1.FormControl(null, forms_1.Validators.required));
                });
                if (json.es_columna_matriz != undefined) {
                    let checkedTrue = json.es_columna_matriz;
                    if (checkedTrue) {
                        this.checkedColumna = true;
                        this.checkedFila = false;
                    }
                    else if (!checkedTrue) {
                        this.checkedColumna = false;
                        this.checkedFila = true;
                    }
                }
                else {
                    this.checkedColumna = true;
                    this.checkedFila = false;
                }
                this.array_filas = json.filas;
                this.array_columnas = json.columnas;
                this.JSON_MATRIZ = json;
            }
        }
        //#region COMOBS
        getComboInsitucional() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.sis_enumerado_s.GetEnumeradoByTipoEnumerado(_core_1.SIS_TIPO_ENUMERADO.tipo_maestro_institucional).then(datos => {
                    this.array_maestro_institucional = datos.data.filter(x => x.es_eliminado == false);
                }).catch(err => { });
                //
            });
        }
        getTipoArchivos() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.sis_enumerado_s.GetEnumeradoByTipoEnumerado(_core_1.SIS_TIPO_ENUMERADO.tipo_archivo).then(datos => {
                    this.array_tipo_file = datos.data.filter(x => x.es_eliminado == false);
                }).catch(err => { });
            });
        }
        getTipoPregunta() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.sis_enumerado_s.GetEnumeradoByTipoEnumerado(_core_1.SIS_TIPO_ENUMERADO.tipo_pregunta).then(datos => {
                    this.array_tipo_pregunta = datos.data.filter(x => x.es_eliminado == false);
                    /*if(this.is_first){
                      this.frm.id_tipo_pregunta=TIPO_PREGUNTA.desplegable_institucional;
                      this.cargar_formato_byTipo(TIPO_PREGUNTA.desplegable_institucional);
                    }*/
                }).catch(err => { });
            });
        }
        getSeccionList() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.encuesta_s._getSeccionList(this.id_encuesta).then(datos => {
                    this.array_seccion = datos.data.filter(x => x.es_eliminado == false);
                }).catch(err => { });
            });
        }
        getCategoriaExtranetList() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.categoria_s._getCategoriaExtranetList().then(datos => {
                    this.array_categoria = datos.data.filter(x => x.es_eliminado == false);
                }).catch(err => { });
            });
        }
        getSubCategoriaExtranetList() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.categoria_s._getSubCategoriaExtranetList().then(datos => {
                    this.array_sub_categoria_all = datos.data.filter(x => x.es_eliminado == false);
                }).catch(err => { });
            });
        }
        getArchivoTipoArchivo() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.sis_enumerado_s.GetEnumeradoByTipoEnumerado(_core_1.SIS_TIPO_ENUMERADO.archivo_tipo_archivo).then(datos => {
                    this.array_archivo_tipo_archivo = datos.data.filter(x => x.es_eliminado == false);
                }).catch(err => { });
            });
        }
        getTipoFecha() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.sis_enumerado_s.GetEnumeradoByTipoEnumerado(_core_1.SIS_TIPO_ENUMERADO.tipo_fecha).then(datos => {
                    this.array_tipo_fecha = datos.data.filter(x => x.es_eliminado == false);
                }).catch(err => { });
            });
        }
        change_archivo_byTipo(values) {
            if (values.currentTarget.checked) {
                this.array_archivo_tipo_archivo.forEach(element => {
                    if (Number(values.currentTarget.id) == element.id_enumerado) {
                        element.selected = true;
                    }
                });
            }
            else {
                this.array_archivo_tipo_archivo.forEach(element => {
                    if (Number(values.currentTarget.id) == element.id_enumerado) {
                        element.selected = false;
                    }
                });
            }
        }
        change_fecha_byTipo(values) {
            if (values.currentTarget.checked) {
                this.array_tipo_fecha.forEach(element => {
                    if (Number(values.currentTarget.id) == element.id_enumerado) {
                        element.selected = true;
                    }
                });
            }
            else {
                this.array_tipo_fecha.forEach(element => {
                    if (Number(values.currentTarget.id) == element.id_enumerado) {
                        element.selected = false;
                    }
                });
            }
        }
        hideCondicional() {
            let val = this.frmPRG.frmEsCondicional.value;
            if (val) {
                this.frmPRG.frmEsCondicionada.setValue(false);
            }
        }
        onReady(editor) {
            editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
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
            this.texto_mensaje = this.tags.join();
        }
        //#endregion
        onChangeFilaColumna(value) {
            this.array_filas = [];
            this.array_columnas = [];
            this.frmFilaName = [];
            this.frmColumnaName = [];
            if (value == "COLUMNA") {
                this.frm.es_columna_matriz = true;
                this.checkedFila = false;
                this.checkedColumna = true;
            }
            else if (value == "FILA") {
                this.frm.es_columna_matriz = false;
                this.checkedFila = true;
                this.checkedColumna = false;
            }
            //this.cargando_columnas=false;
        }
    };
    ModalRegistroPreguntaExtranetComponent.ctorParameters = () => [
        { type: _core_1.SisEnumeradoService },
        { type: _core_1.CategoriaService },
        { type: _core_1.EncuestasService },
        { type: forms_1.FormBuilder },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: ng_zorro_antd_1.NzModalService },
        { type: core_1.ChangeDetectorRef }
    ];
    tslib_1.__decorate([
        core_1.ViewChild('checkTipoArchivo_3', { static: false })
    ], ModalRegistroPreguntaExtranetComponent.prototype, "checkTipoArchivo_3Element", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalRegistroPreguntaExtranetComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalRegistroPreguntaExtranetComponent.prototype, "is_first", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalRegistroPreguntaExtranetComponent.prototype, "es_por_defecto", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalRegistroPreguntaExtranetComponent.prototype, "pregunta", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalRegistroPreguntaExtranetComponent.prototype, "id_encuesta", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalRegistroPreguntaExtranetComponent.prototype, "isVisibleModal", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalRegistroPreguntaExtranetComponent.prototype, "preguntas_condicionales", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalRegistroPreguntaExtranetComponent.prototype, "es_con_seccion", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ModalRegistroPreguntaExtranetComponent.prototype, "onCloseModal", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ModalRegistroPreguntaExtranetComponent.prototype, "onSaveDataPregunta", void 0);
    ModalRegistroPreguntaExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-modal-registro-pregunta-extranet',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./modal-registro-pregunta-extranet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-pregunta-ext/modal-registro-pregunta-extranet.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./modal-registro-pregunta-extranet.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-pregunta-ext/modal-registro-pregunta-extranet.component.css")).default]
        })
    ], ModalRegistroPreguntaExtranetComponent);
    exports.ModalRegistroPreguntaExtranetComponent = ModalRegistroPreguntaExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-seccion-ext/modal-registro-seccion-extranet.component.css":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-seccion-ext/modal-registro-seccion-extranet.component.css ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hoverable:hover{\r\n    cursor:pointer;\r\n}\r\n\r\n.hoverable_txt:hover{\r\n    cursor:pointer;\r\n    background-color:#ffc1c1;\r\n}\r\n\r\n.is_selected_tipo{\r\n    background-color:#ffc1c1;\r\n}\r\n\r\n.btn_span {\r\n    float: right;\r\n    margin-right: 6px;\r\n    margin-top: -25px;\r\n    position: relative;\r\n    z-index: 2;\r\n    /*color: #244DAE;*/\r\n    /*background-color:#E9ECEF;*/\r\n    font-weight: bolder;\r\n}\r\n\r\n/*\r\n.btn_span:hover{\r\n    cursor: pointer;\r\n}*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaXN0ZW1hL3BhZ2VzL2dlc3Rpb24tZXh0cmFuZXQvcGFnZXMvZW5jdWVzdGFzLWV4dHJhbmV0L2NvbmZpZ3VyYWNpb24tZW5jdWVzdGEtZXh0L2NvbXBvbmVudHMvbW9kYWwtcmVnaXN0cm8tc2VjY2lvbi1leHQvbW9kYWwtcmVnaXN0cm8tc2VjY2lvbi1leHRyYW5ldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsbUJBQW1CO0FBQ3ZCOztBQUNBOzs7RUFHRSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lzdGVtYS9wYWdlcy9nZXN0aW9uLWV4dHJhbmV0L3BhZ2VzL2VuY3Vlc3Rhcy1leHRyYW5ldC9jb25maWd1cmFjaW9uLWVuY3Vlc3RhLWV4dC9jb21wb25lbnRzL21vZGFsLXJlZ2lzdHJvLXNlY2Npb24tZXh0L21vZGFsLXJlZ2lzdHJvLXNlY2Npb24tZXh0cmFuZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob3ZlcmFibGU6aG92ZXJ7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5cclxuLmhvdmVyYWJsZV90eHQ6aG92ZXJ7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmYzFjMTtcclxufVxyXG4uaXNfc2VsZWN0ZWRfdGlwb3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmYzFjMTtcclxufVxyXG4uYnRuX3NwYW4ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICAvKmNvbG9yOiAjMjQ0REFFOyovXHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6I0U5RUNFRjsqL1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4vKlxyXG4uYnRuX3NwYW46aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0qLyJdfQ== */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-seccion-ext/modal-registro-seccion-extranet.component.ts":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-seccion-ext/modal-registro-seccion-extranet.component.ts ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! external/ckeditor5-build-decoupled-document */ "./external/ckeditor5-build-decoupled-document/build/ckeditor.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, forms_1, _core_1, ng_zorro_antd_1, DecoupledEditor, ngx_spinner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    DecoupledEditor.defaultConfig = _core_1.DecoupledInit.defaultConfig;
    let ModalRegistroSeccionExtranetComponent = class ModalRegistroSeccionExtranetComponent {
        constructor(encuesta_s, _formBuilder, notification, modal, cd, spinner) {
            this.encuesta_s = encuesta_s;
            this._formBuilder = _formBuilder;
            this.notification = notification;
            this.modal = modal;
            this.cd = cd;
            this.spinner = spinner;
            this._TIPO_PREGUNTA = _core_1.TIPO_PREGUNTA;
            this.title = "Agregar";
            this.is_first = false;
            this.isVisibleModal = false;
            this.onCloseModal = new core_1.EventEmitter();
            this.onSaveDataSeccion = new core_1.EventEmitter();
            this.array_tipos_archivos = [];
            this.array_archivo_tipo_archivo = [];
            this.texto_mensaje = null;
            this.modal_width = 800;
            this.frm = { id_encuesta_seccion: 0, id_encuesta: 0 };
            this.selectedPreguntaCondicional = null;
            this.frmSEC = {
                frmSeccion: new forms_1.FormControl(null, forms_1.Validators.required)
            };
            this.handleSaveFormularioModal = () => {
                let allow = true, required_filled = true;
                let frm_keys = Object.keys(this.frmSEC);
                let str = "<ul>";
                let filas_unicas = true;
                let columnas_unicas = true;
                for (let i = 0; i < frm_keys.length; i++) {
                    let frmkey = frm_keys[i];
                    if (this.frmSEC[frmkey].invalid) {
                        this.frmSEC[frmkey].markAsTouched();
                        this.frmSEC[frmkey].markAsDirty();
                        this.frmSEC[frmkey].updateValueAndValidity();
                        allow = false;
                        required_filled = false;
                    }
                }
                if (!allow) {
                    if (required_filled == false) {
                        str += "<li>Debe ingresar los campos obligatorios.</li>";
                    }
                }
                str += "<ul>";
                if (!allow) {
                    this.createNotification('warning', 'Advertencia', str);
                }
                else {
                    let filter = Object.assign({}, this.frm);
                    filter.id_encuesta = this.id_encuesta;
                    this.spinner.show();
                    this.encuesta_s._SaveUpdateSeccion(filter).then(datos => {
                        if (datos.data) {
                            if (datos.data.Success) {
                                let str = '<ul>';
                                datos.data.Messages.forEach(message => {
                                    str += `<li>${message}</li>`;
                                });
                                str += '</ul>';
                                this.createNotification('success', 'Éxito', str);
                                this.onSaveDataSeccion.emit(true);
                            }
                            else {
                                let str = '<ul>';
                                datos.data.Messages.forEach(message => {
                                    str += `<li>${message}</li>`;
                                });
                                str += '</ul>';
                                this.createNotification('warning', 'Advertencia', str);
                            }
                            this.spinner.hide();
                        }
                    }).catch(err => { });
                }
            };
            this.handleCancelarFormularioModal = () => {
                this.onCloseModal.emit(true);
            };
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
        }
        ngOnInit() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                let basic_frm = { id_encuesta_seccion: 0, id_encuesta: this.id_encuesta };
                let seccion = Object.assign({}, this.seccion);
                this.frm = seccion ? seccion : basic_frm;
            });
        }
        JSON_INIT() { }
    };
    ModalRegistroSeccionExtranetComponent.ctorParameters = () => [
        { type: _core_1.EncuestasService },
        { type: forms_1.FormBuilder },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: ng_zorro_antd_1.NzModalService },
        { type: core_1.ChangeDetectorRef },
        { type: ngx_spinner_1.NgxSpinnerService }
    ];
    tslib_1.__decorate([
        core_1.ViewChild('checkTipoArchivo_3', { static: false })
    ], ModalRegistroSeccionExtranetComponent.prototype, "checkTipoArchivo_3Element", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalRegistroSeccionExtranetComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalRegistroSeccionExtranetComponent.prototype, "is_first", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalRegistroSeccionExtranetComponent.prototype, "seccion", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalRegistroSeccionExtranetComponent.prototype, "id_encuesta", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalRegistroSeccionExtranetComponent.prototype, "isVisibleModal", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ModalRegistroSeccionExtranetComponent.prototype, "onCloseModal", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ModalRegistroSeccionExtranetComponent.prototype, "onSaveDataSeccion", void 0);
    ModalRegistroSeccionExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-modal-registro-seccion-extranet',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./modal-registro-seccion-extranet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-seccion-ext/modal-registro-seccion-extranet.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./modal-registro-seccion-extranet.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-seccion-ext/modal-registro-seccion-extranet.component.css")).default]
        })
    ], ModalRegistroSeccionExtranetComponent);
    exports.ModalRegistroSeccionExtranetComponent = ModalRegistroSeccionExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-reordenar-pregunta-ext/modal-reordenar-pregunta-ext.component.css":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-reordenar-pregunta-ext/modal-reordenar-pregunta-ext.component.css ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hoverable:hover{\r\n    cursor:pointer;\r\n}\r\n\r\n.hoverable_txt:hover{\r\n    cursor:pointer;\r\n    background-color:#ffc1c1;\r\n}\r\n\r\n.is_selected_tipo{\r\n    background-color:#ffc1c1;\r\n}\r\n\r\n.btn_span {\r\n    float: right;\r\n    margin-right: 6px;\r\n    margin-top: -25px;\r\n    position: relative;\r\n    z-index: 2;\r\n    /*color: #244DAE;*/\r\n    /*background-color:#E9ECEF;*/\r\n    font-weight: bolder;\r\n}\r\n\r\n/*\r\n.btn_span:hover{\r\n    cursor: pointer;\r\n}*/\r\n\r\n.example-list {\r\n    width: 500px;\r\n    max-width: 100%;\r\n    border: solid 1px #ccc;\r\n    min-height: 60px;\r\n    display: block;\r\n    background: white;\r\n    border-radius: 4px;\r\n    overflow: hidden;\r\n  }\r\n\r\n.example-box {\r\n    padding: 20px 10px;\r\n    border-bottom: solid 1px #ccc;\r\n    color: rgba(0, 0, 0, 0.87);\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    box-sizing: border-box;\r\n    cursor: move;\r\n    background: white;\r\n    font-size: 14px;\r\n  }\r\n\r\n.cdk-drag-preview {\r\n    box-sizing: border-box;\r\n    border-radius: 4px;\r\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n                0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n                0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n  }\r\n\r\n.cdk-drag-placeholder {\r\n    opacity: 0;\r\n  }\r\n\r\n.cdk-drag-animating {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  }\r\n\r\n.example-box:last-child {\r\n    border: none;\r\n  }\r\n\r\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaXN0ZW1hL3BhZ2VzL2dlc3Rpb24tZXh0cmFuZXQvcGFnZXMvZW5jdWVzdGFzLWV4dHJhbmV0L2NvbmZpZ3VyYWNpb24tZW5jdWVzdGEtZXh0L2NvbXBvbmVudHMvbW9kYWwtcmVvcmRlbmFyLXByZWd1bnRhLWV4dC9tb2RhbC1yZW9yZGVuYXItcHJlZ3VudGEtZXh0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHdCQUF3QjtBQUM1Qjs7QUFDQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixtQkFBbUI7QUFDdkI7O0FBQ0E7OztFQUdFOztBQUVGO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQjs7a0RBRThDO0VBQ2hEOztBQUVBO0lBQ0UsVUFBVTtFQUNaOztBQUVBO0lBQ0Usc0RBQXNEO0VBQ3hEOztBQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVBO0lBQ0Usc0RBQXNEO0VBQ3hEIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaXN0ZW1hL3BhZ2VzL2dlc3Rpb24tZXh0cmFuZXQvcGFnZXMvZW5jdWVzdGFzLWV4dHJhbmV0L2NvbmZpZ3VyYWNpb24tZW5jdWVzdGEtZXh0L2NvbXBvbmVudHMvbW9kYWwtcmVvcmRlbmFyLXByZWd1bnRhLWV4dC9tb2RhbC1yZW9yZGVuYXItcHJlZ3VudGEtZXh0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG92ZXJhYmxlOmhvdmVye1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcbi5ob3ZlcmFibGVfdHh0OmhvdmVye1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmMxYzE7XHJcbn1cclxuLmlzX3NlbGVjdGVkX3RpcG97XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmMxYzE7XHJcbn1cclxuLmJ0bl9zcGFuIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTI1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgLypjb2xvcjogIzI0NERBRTsqL1xyXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiNFOUVDRUY7Ki9cclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLypcclxuLmJ0bl9zcGFuOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Ki9cclxuXHJcbi5leGFtcGxlLWxpc3Qge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtYm94IHtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZGstZHJhZy1wcmV2aWV3IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICB9XHJcbiAgXHJcbiAgLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-reordenar-pregunta-ext/modal-reordenar-pregunta-ext.component.ts":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-reordenar-pregunta-ext/modal-reordenar-pregunta-ext.component.ts ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, _core_1, ng_zorro_antd_1, drag_drop_1, ngx_spinner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let ModalReordenarPreguntaExtranetComponent = class ModalReordenarPreguntaExtranetComponent {
        constructor(encuesta_s, notification, spinner) {
            this.encuesta_s = encuesta_s;
            this.notification = notification;
            this.spinner = spinner;
            this._TIPO_PREGUNTA = _core_1.TIPO_PREGUNTA;
            this.title = "Agregar";
            this.isVisibleModal = false;
            this.onCloseModal = new core_1.EventEmitter();
            this.onSaveOrdenamiento = new core_1.EventEmitter();
            this.modal_width = 1200;
            this.frm = { id_pregunta: 0, id_encuesta: 0, es_obligatorio: true };
            this.selectedPreguntaCondicional = null;
            this.PreguntasList = [];
            this.pageIndex = 1;
            this.total = 0;
            this.pageSize = 1000;
            this.get_list = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                let filtro = { id_encuesta: this.id_encuesta, mostar_solo_condicional: false };
                this.encuesta_s._GetPreguntasByEncuestaOrdenamiento(this.id_encuesta)
                    .then((datos) => {
                    console.log(datos);
                    if (datos && datos.data) {
                        let data = datos.data;
                        data.forEach((e, _idx) => { e.idx = _idx; });
                        this.PreguntasList = data;
                    }
                })
                    .catch(() => {
                });
            });
            this.handleSaveModal = () => {
                this.spinner.show();
                this.encuesta_s._UpdatePreguntaEncuestaOrdenamiento(this.PreguntasList)
                    .then((datos) => {
                    this.spinner.hide();
                    if (datos.data.Success) {
                        let str = '<ul>';
                        datos.data.Messages.forEach(message => {
                            str += `<li>${message}</li>`;
                        });
                        str += '</ul>';
                        this.createNotification('success', 'Éxito', str);
                        this.onSaveOrdenamiento.emit(true);
                    }
                })
                    .catch(() => { });
            };
            this.handleCancelarModal = () => {
                this.onCloseModal.emit(true);
            };
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
            this.cerrar_pre_modal = () => {
                this.isVisibleModal = false;
            };
        }
        ngOnInit() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                const encuesta = this.id_encuesta;
                this.get_list();
            });
        }
        JSON_INIT() {
        }
        drop(event) {
            drag_drop_1.moveItemInArray(this.PreguntasList, event.previousIndex, event.currentIndex);
        }
    };
    ModalReordenarPreguntaExtranetComponent.ctorParameters = () => [
        { type: _core_1.EncuestasService },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: ngx_spinner_1.NgxSpinnerService }
    ];
    tslib_1.__decorate([
        core_1.ViewChild('checkTipoArchivo_3', { static: false })
    ], ModalReordenarPreguntaExtranetComponent.prototype, "checkTipoArchivo_3Element", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalReordenarPreguntaExtranetComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalReordenarPreguntaExtranetComponent.prototype, "id_encuesta", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalReordenarPreguntaExtranetComponent.prototype, "isVisibleModal", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ModalReordenarPreguntaExtranetComponent.prototype, "onCloseModal", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ModalReordenarPreguntaExtranetComponent.prototype, "onSaveOrdenamiento", void 0);
    ModalReordenarPreguntaExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-modal-reordenar-pregunta-ext',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./modal-reordenar-pregunta-ext.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-reordenar-pregunta-ext/modal-reordenar-pregunta-ext.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./modal-reordenar-pregunta-ext.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-reordenar-pregunta-ext/modal-reordenar-pregunta-ext.component.css")).default]
        })
    ], ModalReordenarPreguntaExtranetComponent);
    exports.ModalReordenarPreguntaExtranetComponent = ModalReordenarPreguntaExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-reordenar-pregunta-sec-ext/modal-reordenar-pregunta-sec-ext.component.css":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-reordenar-pregunta-sec-ext/modal-reordenar-pregunta-sec-ext.component.css ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hoverable:hover{\r\n    cursor:pointer;\r\n}\r\n\r\n.hoverable_txt:hover{\r\n    cursor:pointer;\r\n    background-color:#ffc1c1;\r\n}\r\n\r\n.is_selected_tipo{\r\n    background-color:#ffc1c1;\r\n}\r\n\r\n.btn_span {\r\n    float: right;\r\n    margin-right: 6px;\r\n    margin-top: -25px;\r\n    position: relative;\r\n    z-index: 2;\r\n    /*color: #244DAE;*/\r\n    /*background-color:#E9ECEF;*/\r\n    font-weight: bolder;\r\n}\r\n\r\n/*\r\n.btn_span:hover{\r\n    cursor: pointer;\r\n}*/\r\n\r\n.example-list {\r\n    width: 500px;\r\n    max-width: 100%;\r\n    border: solid 1px #ccc;\r\n    min-height: 60px;\r\n    display: block;\r\n    background: white;\r\n    border-radius: 4px;\r\n    overflow: hidden;\r\n  }\r\n\r\n.example-box {\r\n    padding: 20px 10px;\r\n    border-bottom: solid 1px #ccc;\r\n    color: rgba(0, 0, 0, 0.87);\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    box-sizing: border-box;\r\n    cursor: move;\r\n    background: white;\r\n    font-size: 14px;\r\n  }\r\n\r\n.cdk-drag-preview {\r\n    box-sizing: border-box;\r\n    border-radius: 4px;\r\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n                0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n                0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n  }\r\n\r\n.cdk-drag-placeholder {\r\n    opacity: 0;\r\n  }\r\n\r\n.cdk-drag-animating {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  }\r\n\r\n.example-box:last-child {\r\n    border: none;\r\n  }\r\n\r\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaXN0ZW1hL3BhZ2VzL2dlc3Rpb24tZXh0cmFuZXQvcGFnZXMvZW5jdWVzdGFzLWV4dHJhbmV0L2NvbmZpZ3VyYWNpb24tZW5jdWVzdGEtZXh0L2NvbXBvbmVudHMvbW9kYWwtcmVvcmRlbmFyLXByZWd1bnRhLXNlYy1leHQvbW9kYWwtcmVvcmRlbmFyLXByZWd1bnRhLXNlYy1leHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0FBQzVCOztBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLG1CQUFtQjtBQUN2Qjs7QUFDQTs7O0VBR0U7O0FBRUY7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCOztrREFFOEM7RUFDaEQ7O0FBRUE7SUFDRSxVQUFVO0VBQ1o7O0FBRUE7SUFDRSxzREFBc0Q7RUFDeEQ7O0FBRUE7SUFDRSxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxzREFBc0Q7RUFDeEQiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Npc3RlbWEvcGFnZXMvZ2VzdGlvbi1leHRyYW5ldC9wYWdlcy9lbmN1ZXN0YXMtZXh0cmFuZXQvY29uZmlndXJhY2lvbi1lbmN1ZXN0YS1leHQvY29tcG9uZW50cy9tb2RhbC1yZW9yZGVuYXItcHJlZ3VudGEtc2VjLWV4dC9tb2RhbC1yZW9yZGVuYXItcHJlZ3VudGEtc2VjLWV4dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvdmVyYWJsZTpob3ZlcntcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcblxyXG4uaG92ZXJhYmxlX3R4dDpob3ZlcntcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZjMWMxO1xyXG59XHJcbi5pc19zZWxlY3RlZF90aXBve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZjMWMxO1xyXG59XHJcbi5idG5fc3BhbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgIG1hcmdpbi10b3A6IC0yNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIC8qY29sb3I6ICMyNDREQUU7Ki9cclxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjojRTlFQ0VGOyovXHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi8qXHJcbi5idG5fc3Bhbjpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSovXHJcblxyXG4uZXhhbXBsZS1saXN0IHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWJveCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGN1cnNvcjogbW92ZTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICAuY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICBcclxuICAuY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-reordenar-pregunta-sec-ext/modal-reordenar-pregunta-sec-ext.component.ts":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-reordenar-pregunta-sec-ext/modal-reordenar-pregunta-sec-ext.component.ts ***!
  \******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, _core_1, ng_zorro_antd_1, drag_drop_1, ngx_spinner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let ModalReordenarPreguntaSecExtranetComponent = class ModalReordenarPreguntaSecExtranetComponent {
        constructor(encuesta_s, notification, spinner) {
            this.encuesta_s = encuesta_s;
            this.notification = notification;
            this.spinner = spinner;
            this._TIPO_PREGUNTA = _core_1.TIPO_PREGUNTA;
            this.title = "Agregar";
            this.isVisibleModal = false;
            this.onCloseModal = new core_1.EventEmitter();
            this.onSaveOrdenamiento = new core_1.EventEmitter();
            this.modal_width = 1200;
            this.frm = { id_pregunta: 0, id_encuesta: 0, es_obligatorio: true };
            this.selectedPreguntaCondicional = null;
            this.PreguntasList = [];
            this.pageIndex = 1;
            this.total = 0;
            this.pageSize = 1000;
            this.get_list = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                let filtro = { id_encuesta: this.id_encuesta, mostar_solo_condicional: false };
                this.encuesta_s._GetPreguntasByEncuestaOrdenamiento(this.id_encuesta)
                    .then((datos) => {
                    console.log(datos);
                    if (datos && datos.data) {
                        let data = datos.data;
                        data.forEach((e, _idx) => { e.idx = _idx; });
                        this.PreguntasList = data;
                    }
                })
                    .catch(() => {
                });
            });
            this.handleSaveModal = () => {
                this.spinner.show();
                this.encuesta_s._UpdatePreguntaSeccionEncuestaOrdenamiento(this.arraySecciones)
                    .then((datos) => {
                    this.spinner.hide();
                    if (datos.data.Success) {
                        let str = '<ul>';
                        datos.data.Messages.forEach(message => {
                            str += `<li>${message}</li>`;
                        });
                        str += '</ul>';
                        this.createNotification('success', 'Éxito', str);
                        this.onSaveOrdenamiento.emit(true);
                    }
                })
                    .catch(() => { });
            };
            this.handleCancelarModal = () => {
                this.onCloseModal.emit(true);
            };
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
            this.cerrar_pre_modal = () => {
                this.isVisibleModal = false;
            };
            this.getPreguntasSeccionEncuesta = () => {
                let filtro = { id_encuesta: this.id_encuesta, _mostar_solo_condicional: false };
                this.encuesta_s._GetListaPreguntasSeccionByEncuesta(filtro, this.pageIndex, 10000)
                    .then((datos) => {
                    console.log(datos);
                    /*let data = datos.data;
                      data.forEach((e,_idx)=>{e.idx=_idx;});
                      this.PreguntasList = data;*/
                    this.arraySecciones = datos.data;
                }).catch(() => { });
            };
        }
        ngOnInit() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                const encuesta = this.id_encuesta;
                this.getPreguntasSeccionEncuesta();
                //this.get_list();
            });
        }
        JSON_INIT() {
        }
        drop(event) {
            let letra = event.container.id.split(/[\s-]+/);
            let last = letra[letra.length - 1];
            let arrayCambio = this.arraySecciones.find(x => x.orden == Number(last));
            drag_drop_1.moveItemInArray(arrayCambio.preguntas, event.previousIndex, event.currentIndex);
        }
    };
    ModalReordenarPreguntaSecExtranetComponent.ctorParameters = () => [
        { type: _core_1.EncuestasService },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: ngx_spinner_1.NgxSpinnerService }
    ];
    tslib_1.__decorate([
        core_1.ViewChild('checkTipoArchivo_3', { static: false })
    ], ModalReordenarPreguntaSecExtranetComponent.prototype, "checkTipoArchivo_3Element", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalReordenarPreguntaSecExtranetComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalReordenarPreguntaSecExtranetComponent.prototype, "id_encuesta", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalReordenarPreguntaSecExtranetComponent.prototype, "isVisibleModal", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ModalReordenarPreguntaSecExtranetComponent.prototype, "onCloseModal", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ModalReordenarPreguntaSecExtranetComponent.prototype, "onSaveOrdenamiento", void 0);
    ModalReordenarPreguntaSecExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-modal-reordenar-pregunta-sec-ext',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./modal-reordenar-pregunta-sec-ext.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-reordenar-pregunta-sec-ext/modal-reordenar-pregunta-sec-ext.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./modal-reordenar-pregunta-sec-ext.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-reordenar-pregunta-sec-ext/modal-reordenar-pregunta-sec-ext.component.css")).default]
        })
    ], ModalReordenarPreguntaSecExtranetComponent);
    exports.ModalReordenarPreguntaSecExtranetComponent = ModalReordenarPreguntaSecExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-reordenar-seccion-ext/modal-reordenar-seccion-ext.component.css":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-reordenar-seccion-ext/modal-reordenar-seccion-ext.component.css ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hoverable:hover{\r\n    cursor:pointer;\r\n}\r\n\r\n.hoverable_txt:hover{\r\n    cursor:pointer;\r\n    background-color:#ffc1c1;\r\n}\r\n\r\n.is_selected_tipo{\r\n    background-color:#ffc1c1;\r\n}\r\n\r\n.btn_span {\r\n    float: right;\r\n    margin-right: 6px;\r\n    margin-top: -25px;\r\n    position: relative;\r\n    z-index: 2;\r\n    /*color: #244DAE;*/\r\n    /*background-color:#E9ECEF;*/\r\n    font-weight: bolder;\r\n}\r\n\r\n/*\r\n.btn_span:hover{\r\n    cursor: pointer;\r\n}*/\r\n\r\n.example-list {\r\n    width: 500px;\r\n    max-width: 100%;\r\n    border: solid 1px #ccc;\r\n    min-height: 60px;\r\n    display: block;\r\n    background: white;\r\n    border-radius: 4px;\r\n    overflow: hidden;\r\n  }\r\n\r\n.example-box {\r\n    padding: 20px 10px;\r\n    border-bottom: solid 1px #ccc;\r\n    color: rgba(0, 0, 0, 0.87);\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    box-sizing: border-box;\r\n    cursor: move;\r\n    background: white;\r\n    font-size: 14px;\r\n  }\r\n\r\n.cdk-drag-preview {\r\n    box-sizing: border-box;\r\n    border-radius: 4px;\r\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n                0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n                0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n  }\r\n\r\n.cdk-drag-placeholder {\r\n    opacity: 0;\r\n  }\r\n\r\n.cdk-drag-animating {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  }\r\n\r\n.example-box:last-child {\r\n    border: none;\r\n  }\r\n\r\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaXN0ZW1hL3BhZ2VzL2dlc3Rpb24tZXh0cmFuZXQvcGFnZXMvZW5jdWVzdGFzLWV4dHJhbmV0L2NvbmZpZ3VyYWNpb24tZW5jdWVzdGEtZXh0L2NvbXBvbmVudHMvbW9kYWwtcmVvcmRlbmFyLXNlY2Npb24tZXh0L21vZGFsLXJlb3JkZW5hci1zZWNjaW9uLWV4dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsbUJBQW1CO0FBQ3ZCOztBQUNBOzs7RUFHRTs7QUFFRjtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEI7O2tEQUU4QztFQUNoRDs7QUFFQTtJQUNFLFVBQVU7RUFDWjs7QUFFQTtJQUNFLHNEQUFzRDtFQUN4RDs7QUFFQTtJQUNFLFlBQVk7RUFDZDs7QUFFQTtJQUNFLHNEQUFzRDtFQUN4RCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lzdGVtYS9wYWdlcy9nZXN0aW9uLWV4dHJhbmV0L3BhZ2VzL2VuY3Vlc3Rhcy1leHRyYW5ldC9jb25maWd1cmFjaW9uLWVuY3Vlc3RhLWV4dC9jb21wb25lbnRzL21vZGFsLXJlb3JkZW5hci1zZWNjaW9uLWV4dC9tb2RhbC1yZW9yZGVuYXItc2VjY2lvbi1leHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob3ZlcmFibGU6aG92ZXJ7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5cclxuLmhvdmVyYWJsZV90eHQ6aG92ZXJ7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmYzFjMTtcclxufVxyXG4uaXNfc2VsZWN0ZWRfdGlwb3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmYzFjMTtcclxufVxyXG4uYnRuX3NwYW4ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICAvKmNvbG9yOiAjMjQ0REFFOyovXHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6I0U5RUNFRjsqL1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4vKlxyXG4uYnRuX3NwYW46aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0qL1xyXG5cclxuLmV4YW1wbGUtbGlzdCB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4gICAgbWluLWhlaWdodDogNjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1ib3gge1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjdXJzb3I6IG1vdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgXHJcbiAgLmNkay1kcmFnLXByZXZpZXcge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIH1cclxuICBcclxuICAuY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgXHJcbiAgLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-reordenar-seccion-ext/modal-reordenar-seccion-ext.component.ts":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-reordenar-seccion-ext/modal-reordenar-seccion-ext.component.ts ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, _core_1, ng_zorro_antd_1, drag_drop_1, ngx_spinner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let ModalReordenarSeccionExtranetComponent = class ModalReordenarSeccionExtranetComponent {
        constructor(encuesta_s, notification, spinner) {
            this.encuesta_s = encuesta_s;
            this.notification = notification;
            this.spinner = spinner;
            this._TIPO_PREGUNTA = _core_1.TIPO_PREGUNTA;
            this.title = "Agregar";
            this.isVisibleModal = false;
            this.onCloseModal = new core_1.EventEmitter();
            this.onSaveOrdenamiento = new core_1.EventEmitter();
            this.modal_width = 1200;
            this.frm = { id_pregunta: 0, id_encuesta: 0, es_obligatorio: true };
            this.selectedPreguntaCondicional = null;
            this.SeccionesList = [];
            this.pageIndex = 1;
            this.total = 0;
            this.pageSize = 1000;
            this.get_list = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                let filtro = { id_encuesta: this.id_encuesta, mostar_solo_condicional: false };
                this.encuesta_s._GetSeccionesByEncuesta(filtro, this.pageIndex, this.pageSize)
                    .then((datos) => {
                    if (datos && datos.data && datos.data.Data) {
                        let data = datos.data.Data;
                        data.forEach((e, _idx) => { e.idx = _idx; });
                        this.SeccionesList = data;
                        this.total = datos.data.TotalRows;
                    }
                })
                    .catch(() => {
                });
            });
            this.handleSaveModal = () => {
                this.spinner.show();
                this.encuesta_s._UpdateSeccionEncuestaOrdenamiento(this.SeccionesList)
                    .then((datos) => {
                    this.spinner.hide();
                    if (datos.data.Success) {
                        let str = '<ul>';
                        datos.data.Messages.forEach(message => {
                            str += `<li>${message}</li>`;
                        });
                        str += '</ul>';
                        this.createNotification('success', 'Éxito', str);
                        this.onSaveOrdenamiento.emit(true);
                    }
                })
                    .catch(() => { });
            };
            this.handleCancelarModal = () => {
                this.onCloseModal.emit(true);
            };
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
            this.cerrar_pre_modal = () => {
                this.isVisibleModal = false;
            };
        }
        ngOnInit() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                const encuesta = this.id_encuesta;
                this.get_list();
            });
        }
        JSON_INIT() {
        }
        drop(event) {
            drag_drop_1.moveItemInArray(this.SeccionesList, event.previousIndex, event.currentIndex);
        }
    };
    ModalReordenarSeccionExtranetComponent.ctorParameters = () => [
        { type: _core_1.EncuestasService },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: ngx_spinner_1.NgxSpinnerService }
    ];
    tslib_1.__decorate([
        core_1.ViewChild('checkTipoArchivo_3', { static: false })
    ], ModalReordenarSeccionExtranetComponent.prototype, "checkTipoArchivo_3Element", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalReordenarSeccionExtranetComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalReordenarSeccionExtranetComponent.prototype, "id_encuesta", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalReordenarSeccionExtranetComponent.prototype, "isVisibleModal", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ModalReordenarSeccionExtranetComponent.prototype, "onCloseModal", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ModalReordenarSeccionExtranetComponent.prototype, "onSaveOrdenamiento", void 0);
    ModalReordenarSeccionExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-modal-reordenar-seccion-ext',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./modal-reordenar-seccion-ext.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-reordenar-seccion-ext/modal-reordenar-seccion-ext.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./modal-reordenar-seccion-ext.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-reordenar-seccion-ext/modal-reordenar-seccion-ext.component.css")).default]
        })
    ], ModalReordenarSeccionExtranetComponent);
    exports.ModalReordenarSeccionExtranetComponent = ModalReordenarSeccionExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/notificaciones-extranet/notificaciones-extranet.component.css":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/notificaciones-extranet/notificaciones-extranet.component.css ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lzdGVtYS9wYWdlcy9nZXN0aW9uLWV4dHJhbmV0L3BhZ2VzL2VuY3Vlc3Rhcy1leHRyYW5ldC9jb25maWd1cmFjaW9uLWVuY3Vlc3RhLWV4dC9jb21wb25lbnRzL25vdGlmaWNhY2lvbmVzLWV4dHJhbmV0L25vdGlmaWNhY2lvbmVzLWV4dHJhbmV0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/notificaciones-extranet/notificaciones-extranet.component.ts":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/notificaciones-extranet/notificaciones-extranet.component.ts ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, _core_1, ng_zorro_antd_1, ngx_spinner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let NotificacionesExtranetComponent = class NotificacionesExtranetComponent {
        constructor(encuesta_s, sis_enumerado_s, notification, spinner, modal) {
            this.encuesta_s = encuesta_s;
            this.sis_enumerado_s = sis_enumerado_s;
            this.notification = notification;
            this.spinner = spinner;
            this.modal = modal;
            this.onPublishSuccess = new core_1.EventEmitter();
            this.onGoEncuestados = new core_1.EventEmitter();
            this.onGoDatos = new core_1.EventEmitter();
            this.NotificacionesList = [];
            this.PreguntasList_Condicionales = [];
            this.cargando_tabla = true;
            this.pageIndex = 1;
            this.total = 0;
            this.pageSize = 1000;
            this.get_list = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.cargando_tabla = true;
                let filtro = { id_encuesta: this.encuesta_data.encuesta.id_encuesta };
                this.spinner.show();
                this.encuesta_s._GetNotificacionesByEncuesta(filtro, this.pageIndex, this.pageSize)
                    .then((datos) => {
                    this.spinner.hide();
                    if (datos && datos.data && datos.data.Data) {
                        let data = datos.data.Data;
                        data.forEach((e, _idx) => { e.idx = _idx; });
                        data.forEach(item => {
                            const items = JSON.parse(item.dirigido);
                            const seleccionado = items.filter(x => x.selected == true);
                            item.dirigido_texto = seleccionado[0].nombre;
                        });
                        this.NotificacionesList = data;
                        this.total = datos.data.TotalRows;
                    }
                    this.cargando_tabla = false;
                })
                    .catch(() => {
                    this.cargando_tabla = false;
                    this.spinner.hide();
                });
            });
            this.handleClickLimpiar = () => {
                this.pageIndex = 1;
                this.get_list();
            };
            this.handleClickBuscar = (reset = false) => {
                if (reset) {
                    this.pageIndex = 1;
                }
                this.get_list();
            };
            this.save_update_preguntas = (publicar = false, ir_siguiente = false) => {
                //se cambia estado en la bd
                let noValidos = this.NotificacionesList.filter(f => f.id_tipo_archivo == null);
                //valida categoria y tipo archivo
                if (noValidos.length > 0) {
                    this.createNotification('warning', 'Advertencia', "<ul><li>Debe completar la configuración de la pregunta de dependencia.</li></ul>");
                }
                else {
                    if (publicar) {
                        if (this.NotificacionesList.length > 0) {
                            this.modal.confirm({
                                nzTitle: '¿Esta seguro de publicar la encuesta?',
                                nzContent: 'Una vez publicada no podra modificarla.',
                                nzOkText: 'Si',
                                nzOkType: 'primary',
                                nzCancelText: 'No',
                                nzOnOk: () => {
                                    this.publicar();
                                },
                                nzOnCancel: () => { }
                            });
                        }
                        else {
                            this.createNotification('success', 'Éxito', "<ul><li>Debe ingresar al menos una pregunta.</li></ul>");
                        }
                    }
                    else {
                        this.createNotification('success', 'Éxito', "<ul><li>Guardado con éxito.</li></ul>");
                        if (ir_siguiente) {
                            this.onGoEncuestados.emit(true);
                        }
                    }
                }
            };
            this.handleOnCloseModal = (e) => {
                this.show_modal_notificacion = false;
            };
            this.handleOnSaveDataSeccion = (e) => {
                this.show_modal_notificacion = false;
                this.get_list();
            };
            this.title_modal = "";
            this.show_modal_notificacion = false;
            this.is_first = false;
            this.es_por_defecto = false;
            this.md_add_edit_notificacion = (idx = null, por_defecto = false) => {
                let item = idx != null ? this.NotificacionesList[idx] : null;
                this.title_modal = item ? "Editar" : "Agregar";
                let selected_item = item;
                this.selected_notificacion = selected_item;
                this.es_por_defecto = por_defecto;
                if (idx != null) {
                    this.is_first = idx == 0 ? true : false;
                }
                else {
                    this.is_first = this.NotificacionesList.length > 0 ? false : true;
                }
                this.show_modal_notificacion = true;
            };
            this.md_delete_notificacion = (idx) => {
                let item = this.NotificacionesList[idx];
                this.modal.confirm({
                    nzTitle: 'Eliminar',
                    nzContent: '¿Esta seguro de eliminar la notificación seleccionada?',
                    nzOkText: 'Si',
                    nzOkType: 'primary',
                    nzCancelText: 'No',
                    nzOnOk: () => {
                        this.encuesta_s._EnableDisable(item.id_encuesta_notificacion, "notificacion")
                            .then((datos) => {
                            if (datos.data) {
                                if (datos.data.Success) {
                                    let str = '<ul>';
                                    datos.data.Messages.forEach(message => {
                                        str += `<li>${message}</li>`;
                                    });
                                    str += '</ul>';
                                    this.createNotification('success', 'Éxito', str);
                                    this.get_list();
                                }
                            }
                        }).catch(() => { });
                    },
                    nzOnCancel: () => { }
                });
            };
            this.send_to_datos = () => {
                this.onGoDatos.emit(true);
            };
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
            this.show_modal_reordenar_seccion = false;
            this.md_reordenar_seccion = () => {
                this.show_modal_reordenar_seccion = true;
            };
            this.handleOnCloseReordenarModal = (e) => {
                this.show_modal_reordenar_seccion = false;
            };
            this.handleOnSaveOrdenamiento = (e) => {
                this.show_modal_reordenar_seccion = false;
                this.get_list();
            };
        }
        ngOnInit() {
            this.get_list();
        }
        publicar() {
            this.encuesta_s._PublicarEncuesta(this.id_encuesta)
                .then((datos) => {
                if (datos.data) {
                    let str = '<ul>';
                    datos.data.Messages.forEach(message => {
                        str += `<li>${message}</li>`;
                    });
                    str += '</ul>';
                    if (datos.data.Success) {
                        this.createNotification('success', 'Éxito', str);
                        this.get_list();
                        this.onPublishSuccess.emit(true);
                    }
                    else {
                        this.createNotification('warning', 'Adveretencia', str);
                    }
                }
            }).catch(() => { });
        }
    };
    NotificacionesExtranetComponent.ctorParameters = () => [
        { type: _core_1.EncuestasService },
        { type: _core_1.SisEnumeradoService },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: ng_zorro_antd_1.NzModalService }
    ];
    tslib_1.__decorate([
        core_1.Input()
    ], NotificacionesExtranetComponent.prototype, "encuesta_data", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], NotificacionesExtranetComponent.prototype, "id_encuesta", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], NotificacionesExtranetComponent.prototype, "onPublishSuccess", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], NotificacionesExtranetComponent.prototype, "onGoEncuestados", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], NotificacionesExtranetComponent.prototype, "onGoDatos", void 0);
    NotificacionesExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-notificaciones-extranet',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./notificaciones-extranet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/notificaciones-extranet/notificaciones-extranet.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./notificaciones-extranet.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/notificaciones-extranet/notificaciones-extranet.component.css")).default]
        })
    ], NotificacionesExtranetComponent);
    exports.NotificacionesExtranetComponent = NotificacionesExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/preguntas-encuesta-extranet/preguntas-encuesta-extranet.component.css":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/preguntas-encuesta-extranet/preguntas-encuesta-extranet.component.css ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lzdGVtYS9wYWdlcy9nZXN0aW9uLWV4dHJhbmV0L3BhZ2VzL2VuY3Vlc3Rhcy1leHRyYW5ldC9jb25maWd1cmFjaW9uLWVuY3Vlc3RhLWV4dC9jb21wb25lbnRzL3ByZWd1bnRhcy1lbmN1ZXN0YS1leHRyYW5ldC9wcmVndW50YXMtZW5jdWVzdGEtZXh0cmFuZXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/preguntas-encuesta-extranet/preguntas-encuesta-extranet.component.ts":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/preguntas-encuesta-extranet/preguntas-encuesta-extranet.component.ts ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, _core_1, ng_zorro_antd_1, ngx_spinner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let PreguntasEncuestaExtranetComponent = class PreguntasEncuestaExtranetComponent {
        constructor(encuesta_s, sis_enumerado_s, notification, spinner, modal) {
            this.encuesta_s = encuesta_s;
            this.sis_enumerado_s = sis_enumerado_s;
            this.notification = notification;
            this.spinner = spinner;
            this.modal = modal;
            this.onPublishSuccess = new core_1.EventEmitter();
            this.onGoEncuestados = new core_1.EventEmitter();
            this.onGoDatos = new core_1.EventEmitter();
            this.es_con_seccion = false;
            this.PreguntasList = [];
            this.PreguntasList_Condicionales = [];
            this.cargando_tabla = true;
            this.pageIndex = 1;
            this.total = 0;
            this.pageSize = 1000;
            this.get_list = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.cargando_tabla = true;
                let filtro = { id_encuesta: this.encuesta_data.encuesta.id_encuesta, mostar_solo_condicional: false };
                this.spinner.show();
                yield this.getPreguntasCondicionales();
                if (this.encuesta_data.encuesta.es_con_seccion_pregunta) {
                    this.encuesta_s._GetPreguntasSeccionesByEncuesta(filtro, this.pageIndex, this.pageSize) //this.encuesta_s._GetPreguntasSeccionesByEncuesta(filtro, this.pageIndex, this.pageSize)
                        .then((datos) => {
                        this.spinner.hide();
                        if (datos && datos.data && datos.data.Data) {
                            let data = datos.data.Data;
                            data.forEach((e, _idx) => { e.idx = _idx; });
                            this.PreguntasList = data;
                            this.total = datos.data.TotalRows;
                        }
                        this.cargando_tabla = false;
                    })
                        .catch(() => {
                        this.cargando_tabla = false;
                        this.spinner.hide();
                    });
                }
                else {
                    this.encuesta_s._GetPreguntasSinSeccionByEncuesta(filtro, this.pageIndex, this.pageSize)
                        .then((datos) => {
                        this.spinner.hide();
                        if (datos && datos.data && datos.data.Data) {
                            let data = datos.data.Data;
                            data.forEach((e, _idx) => { e.idx = _idx; });
                            this.PreguntasList = data;
                            this.total = datos.data.TotalRows;
                        }
                        this.cargando_tabla = false;
                    })
                        .catch(() => {
                        this.cargando_tabla = false;
                        this.spinner.hide();
                    });
                }
            });
            this.handleClickLimpiar = () => {
                this.pageIndex = 1;
                this.get_list();
            };
            this.handleClickBuscar = (reset = false) => {
                if (reset) {
                    this.pageIndex = 1;
                }
                this.get_list();
            };
            this.save_update_preguntas = (publicar = false, ir_siguiente = false) => {
                //se cambia estado en la bd
                let noValidos = this.PreguntasList.filter(f => f.id_tipo_archivo == null);
                //valida categoria y tipo archivo
                /*if(noValidos.length > 0){
                  this.createNotification('warning','Advertencia',"<ul><li>Debe completar la configuración de la pregunta de dependencia.</li></ul>");
                }else{*/
                if (publicar) {
                    if (this.PreguntasList.length > 0) {
                        this.modal.confirm({
                            nzTitle: '¿Esta seguro de publicar la encuesta?',
                            nzContent: 'Una vez publicada no podra modificarla.',
                            nzOkText: 'Si',
                            nzOkType: 'primary',
                            nzCancelText: 'No',
                            nzOnOk: () => {
                                this.publicar();
                            },
                            nzOnCancel: () => { }
                        });
                    }
                    else {
                        this.createNotification('success', 'Éxito', "<ul><li>Debe ingresar al menos una pregunta.</li></ul>");
                    }
                }
                else {
                    this.createNotification('success', 'Éxito', "<ul><li>Guardado con éxito.</li></ul>");
                    if (ir_siguiente) {
                        this.onGoEncuestados.emit(true);
                    }
                }
                //}
            };
            this.handleOnCloseModal = (e) => {
                this.show_modal_pregunta = false;
            };
            this.handleOnSaveDataPregunta = (e) => {
                this.show_modal_pregunta = false;
                this.get_list();
            };
            this.title_modal = "";
            this.show_modal_pregunta = false;
            this.is_first = false;
            this.es_por_defecto = false;
            this.md_add_edit_pregunta = (idx = null, por_defecto = false) => {
                let item = idx != null ? this.PreguntasList[idx] : null;
                this.title_modal = item ? "Editar" : "Agregar";
                let selected_item = item;
                this.selected_pregunta = selected_item;
                this.es_por_defecto = por_defecto;
                if (idx != null) {
                    this.is_first = idx == 0 ? true : false;
                }
                else {
                    this.is_first = this.PreguntasList.length > 0 ? false : true;
                }
                this.show_modal_pregunta = true;
            };
            this.md_delete_pregunta = (idx) => {
                let item = this.PreguntasList[idx];
                this.modal.confirm({
                    nzTitle: 'Eliminar',
                    nzContent: '¿Esta seguro de eliminar la pregunta seleccionada?',
                    nzOkText: 'Si',
                    nzOkType: 'primary',
                    nzCancelText: 'No',
                    nzOnOk: () => {
                        this.encuesta_s._EnableDisable(item.id_pregunta, "pregunta")
                            .then((datos) => {
                            if (datos.data) {
                                if (datos.data.Success) {
                                    let str = '<ul>';
                                    datos.data.Messages.forEach(message => {
                                        str += `<li>${message}</li>`;
                                    });
                                    str += '</ul>';
                                    this.createNotification('success', 'Éxito', str);
                                    this.get_list();
                                }
                            }
                        }).catch(() => { });
                    },
                    nzOnCancel: () => { }
                });
            };
            this.send_to_datos = () => {
                this.onGoDatos.emit(true);
            };
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
            this.show_modal_reordenar_pregunta = false;
            this.show_modal_reordenar_pregunta_seccion = false;
            this.md_reordenar_pregunta = () => {
                if (this.encuesta_data.encuesta.es_con_seccion_pregunta) {
                    this.show_modal_reordenar_pregunta = false;
                    this.show_modal_reordenar_pregunta_seccion = true;
                }
                else {
                    this.show_modal_reordenar_pregunta_seccion = false;
                    this.show_modal_reordenar_pregunta = true;
                }
            };
            this.handleOnCloseReordenarModal = (e) => {
                this.show_modal_reordenar_pregunta = false;
                this.show_modal_reordenar_pregunta_seccion = false;
            };
            this.handleOnSaveOrdenamiento = (e) => {
                this.show_modal_reordenar_pregunta_seccion = false;
                this.show_modal_reordenar_pregunta = false;
                this.get_list();
            };
        }
        ngOnInit() {
            this.es_con_seccion = this.encuesta_data.encuesta.es_con_seccion_pregunta;
            this.get_list();
        }
        getPreguntasCondicionales() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                let filtro = { id_encuesta: this.encuesta_data.encuesta.id_encuesta, mostar_solo_condicional: true };
                yield this.encuesta_s._GetPreguntasByEncuesta(filtro, 0, 1000)
                    .then((datos) => {
                    this.spinner.hide();
                    if (datos && datos.data && datos.data.Data) {
                        let data = datos.data.Data;
                        this.PreguntasList_Condicionales = data;
                    }
                })
                    .catch(() => {
                    this.spinner.hide();
                });
            });
        }
        publicar() {
            this.encuesta_s._PublicarEncuesta(this.id_encuesta)
                .then((datos) => {
                if (datos.data) {
                    let str = '<ul>';
                    datos.data.Messages.forEach(message => {
                        str += `<li>${message}</li>`;
                    });
                    str += '</ul>';
                    if (datos.data.Success) {
                        this.createNotification('success', 'Éxito', str);
                        this.get_list();
                        this.onPublishSuccess.emit(true);
                    }
                    else {
                        this.createNotification('warning', 'Adveretencia', str);
                    }
                }
            }).catch(() => { });
        }
    };
    PreguntasEncuestaExtranetComponent.ctorParameters = () => [
        { type: _core_1.EncuestasService },
        { type: _core_1.SisEnumeradoService },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: ng_zorro_antd_1.NzModalService }
    ];
    tslib_1.__decorate([
        core_1.Input()
    ], PreguntasEncuestaExtranetComponent.prototype, "encuesta_data", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], PreguntasEncuestaExtranetComponent.prototype, "id_encuesta", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], PreguntasEncuestaExtranetComponent.prototype, "onPublishSuccess", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], PreguntasEncuestaExtranetComponent.prototype, "onGoEncuestados", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], PreguntasEncuestaExtranetComponent.prototype, "onGoDatos", void 0);
    PreguntasEncuestaExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-preguntas-encuesta-extranet',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./preguntas-encuesta-extranet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/preguntas-encuesta-extranet/preguntas-encuesta-extranet.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./preguntas-encuesta-extranet.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/preguntas-encuesta-extranet/preguntas-encuesta-extranet.component.css")).default]
        })
    ], PreguntasEncuestaExtranetComponent);
    exports.PreguntasEncuestaExtranetComponent = PreguntasEncuestaExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/secciones-pregunta-extranet/secciones-pregunta-extranet.component.css":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/secciones-pregunta-extranet/secciones-pregunta-extranet.component.css ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lzdGVtYS9wYWdlcy9nZXN0aW9uLWV4dHJhbmV0L3BhZ2VzL2VuY3Vlc3Rhcy1leHRyYW5ldC9jb25maWd1cmFjaW9uLWVuY3Vlc3RhLWV4dC9jb21wb25lbnRzL3NlY2Npb25lcy1wcmVndW50YS1leHRyYW5ldC9zZWNjaW9uZXMtcHJlZ3VudGEtZXh0cmFuZXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/secciones-pregunta-extranet/secciones-pregunta-extranet.component.ts":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/secciones-pregunta-extranet/secciones-pregunta-extranet.component.ts ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, _core_1, ng_zorro_antd_1, ngx_spinner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let SeccionesPreguntaExtranetComponent = class SeccionesPreguntaExtranetComponent {
        constructor(encuesta_s, sis_enumerado_s, notification, spinner, modal) {
            this.encuesta_s = encuesta_s;
            this.sis_enumerado_s = sis_enumerado_s;
            this.notification = notification;
            this.spinner = spinner;
            this.modal = modal;
            this.onPublishSuccess = new core_1.EventEmitter();
            this.onGoEncuestados = new core_1.EventEmitter();
            this.onGoDatos = new core_1.EventEmitter();
            this.SeccionesList = [];
            this.PreguntasList_Condicionales = [];
            this.cargando_tabla = true;
            this.pageIndex = 1;
            this.total = 0;
            this.pageSize = 1000;
            this.get_list = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.cargando_tabla = true;
                let filtro = { id_encuesta: this.encuesta_data.encuesta.id_encuesta };
                this.spinner.show();
                this.encuesta_s._GetSeccionesByEncuesta(filtro, this.pageIndex, this.pageSize)
                    .then((datos) => {
                    this.spinner.hide();
                    if (datos && datos.data && datos.data.Data) {
                        let data = datos.data.Data;
                        data.forEach((e, _idx) => { e.idx = _idx; });
                        this.SeccionesList = data;
                        this.total = datos.data.TotalRows;
                    }
                    this.cargando_tabla = false;
                })
                    .catch(() => {
                    this.cargando_tabla = false;
                    this.spinner.hide();
                });
            });
            this.handleClickLimpiar = () => {
                this.pageIndex = 1;
                this.get_list();
            };
            this.handleClickBuscar = (reset = false) => {
                if (reset) {
                    this.pageIndex = 1;
                }
                this.get_list();
            };
            this.save_update_preguntas = (publicar = false, ir_siguiente = false) => {
                //se cambia estado en la bd
                if (publicar) {
                    if (this.SeccionesList.length > 0) {
                        this.modal.confirm({
                            nzTitle: '¿Esta seguro de publicar la encuesta?',
                            nzContent: 'Una vez publicada no podra modificarla.',
                            nzOkText: 'Si',
                            nzOkType: 'primary',
                            nzCancelText: 'No',
                            nzOnOk: () => {
                                this.publicar();
                            },
                            nzOnCancel: () => { }
                        });
                    }
                    else {
                        this.createNotification('success', 'Éxito', "<ul><li>Debe ingresar al menos una sección.</li></ul>");
                    }
                }
                else {
                    this.createNotification('success', 'Éxito', "<ul><li>Guardado con éxito.</li></ul>");
                    if (ir_siguiente) {
                        this.onGoEncuestados.emit(true);
                    }
                }
            };
            this.handleOnCloseModal = (e) => {
                this.show_modal_seccion = false;
            };
            this.handleOnSaveDataSeccion = (e) => {
                this.show_modal_seccion = false;
                this.get_list();
            };
            this.title_modal = "";
            this.show_modal_seccion = false;
            this.is_first = false;
            this.es_por_defecto = false;
            this.md_add_edit_seccion = (idx = null, por_defecto = false) => {
                let item = idx != null ? this.SeccionesList[idx] : null;
                this.title_modal = item ? "Editar" : "Agregar";
                let selected_item = item;
                this.selected_seccion = selected_item;
                this.es_por_defecto = por_defecto;
                if (idx != null) {
                    this.is_first = idx == 0 ? true : false;
                }
                else {
                    this.is_first = this.SeccionesList.length > 0 ? false : true;
                }
                this.show_modal_seccion = true;
            };
            this.md_delete_seccion = (idx) => {
                let item = this.SeccionesList[idx];
                this.modal.confirm({
                    nzTitle: 'Eliminar',
                    nzContent: '¿Esta seguro de eliminar la sección seleccionada?',
                    nzOkText: 'Si',
                    nzOkType: 'primary',
                    nzCancelText: 'No',
                    nzOnOk: () => {
                        this.encuesta_s._EnableDisable(item.id_encuesta_seccion, "seccion")
                            .then((datos) => {
                            if (datos.data) {
                                if (datos.data.Success) {
                                    let str = '<ul>';
                                    datos.data.Messages.forEach(message => {
                                        str += `<li>${message}</li>`;
                                    });
                                    str += '</ul>';
                                    this.createNotification('success', 'Éxito', str);
                                    this.get_list();
                                }
                            }
                        }).catch(() => { });
                    },
                    nzOnCancel: () => { }
                });
            };
            this.send_to_datos = () => {
                this.onGoDatos.emit(true);
            };
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
            this.show_modal_reordenar_seccion = false;
            this.md_reordenar_seccion = () => {
                this.show_modal_reordenar_seccion = true;
            };
            this.handleOnCloseReordenarModal = (e) => {
                this.show_modal_reordenar_seccion = false;
            };
            this.handleOnSaveOrdenamiento = (e) => {
                this.show_modal_reordenar_seccion = false;
                this.get_list();
            };
        }
        ngOnInit() {
            this.get_list();
        }
        publicar() {
            this.encuesta_s._PublicarEncuesta(this.id_encuesta)
                .then((datos) => {
                if (datos.data) {
                    let str = '<ul>';
                    datos.data.Messages.forEach(message => {
                        str += `<li>${message}</li>`;
                    });
                    str += '</ul>';
                    if (datos.data.Success) {
                        this.createNotification('success', 'Éxito', str);
                        this.get_list();
                        this.onPublishSuccess.emit(true);
                    }
                    else {
                        this.createNotification('warning', 'Adveretencia', str);
                    }
                }
            }).catch(() => { });
        }
    };
    SeccionesPreguntaExtranetComponent.ctorParameters = () => [
        { type: _core_1.EncuestasService },
        { type: _core_1.SisEnumeradoService },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: ng_zorro_antd_1.NzModalService }
    ];
    tslib_1.__decorate([
        core_1.Input()
    ], SeccionesPreguntaExtranetComponent.prototype, "encuesta_data", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], SeccionesPreguntaExtranetComponent.prototype, "id_encuesta", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], SeccionesPreguntaExtranetComponent.prototype, "onPublishSuccess", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], SeccionesPreguntaExtranetComponent.prototype, "onGoEncuestados", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], SeccionesPreguntaExtranetComponent.prototype, "onGoDatos", void 0);
    SeccionesPreguntaExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-secciones-pregunta-extranet',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./secciones-pregunta-extranet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/secciones-pregunta-extranet/secciones-pregunta-extranet.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./secciones-pregunta-extranet.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/secciones-pregunta-extranet/secciones-pregunta-extranet.component.css")).default]
        })
    ], SeccionesPreguntaExtranetComponent);
    exports.SeccionesPreguntaExtranetComponent = SeccionesPreguntaExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/configuracion-encuesta-extranet.component.css":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/configuracion-encuesta-extranet.component.css ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lzdGVtYS9wYWdlcy9nZXN0aW9uLWV4dHJhbmV0L3BhZ2VzL2VuY3Vlc3Rhcy1leHRyYW5ldC9jb25maWd1cmFjaW9uLWVuY3Vlc3RhLWV4dC9jb25maWd1cmFjaW9uLWVuY3Vlc3RhLWV4dHJhbmV0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/configuracion-encuesta-extranet.component.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/configuracion-encuesta-extranet.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, forms_1, router_1, _core_1, ngx_spinner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let ConfiguracionEncuestaExtranetComponent = class ConfiguracionEncuestaExtranetComponent {
        constructor(activatedRoute, ref_change, _formBuilder, router, encuesta_s, spinner) {
            this.activatedRoute = activatedRoute;
            this.ref_change = ref_change;
            this._formBuilder = _formBuilder;
            this.router = router;
            this.encuesta_s = encuesta_s;
            this.spinner = spinner;
            this.id_encuesta = 0;
            this.encuesta_data = {};
            this.data_valid = false;
            this.tabs = [
                { title: "Datos", disabled: false },
                { title: "Secciones", disabled: !this.data_valid },
                { title: "Preguntas", disabled: !this.data_valid },
                { title: "Notificaciones", disabled: !this.data_valid }
                //{title:"Encuestados", disabled:!this.data_valid}
            ];
            this.index_tab = null;
            this.disable_preguntas = true;
            this.show_tab_by_index = (index_tab) => {
                this.index_tab = index_tab;
            };
            this.show_encuestados_tab = false;
            this.handleChangeAllPersonalStatus = (status) => {
                if (status != undefined) {
                    if (!status) {
                        if (this.encuesta_data.encuesta.es_con_seccion_pregunta) {
                            this.tabs = [
                                { title: "Datos", disabled: false },
                                { title: "Secciones", disabled: !this.data_valid },
                                { title: "Preguntas", disabled: !this.data_valid },
                                { title: "Notificaciones", disabled: !this.data_valid },
                                { title: "Encuestados", disabled: !this.data_valid },
                            ];
                        }
                        else {
                            this.tabs = [
                                { title: "Datos", disabled: false },
                                { title: "Secciones", disabled: true },
                                { title: "Preguntas", disabled: !this.data_valid },
                                { title: "Notificaciones", disabled: !this.data_valid },
                                { title: "Encuestados", disabled: !this.data_valid },
                            ];
                        }
                    }
                    else {
                        if (this.encuesta_data.encuesta != undefined) {
                            if (this.encuesta_data.encuesta.es_con_seccion_pregunta) {
                                this.tabs = [
                                    { title: "Datos", disabled: false },
                                    { title: "Secciones", disabled: !this.data_valid },
                                    { title: "Preguntas", disabled: !this.data_valid },
                                    { title: "Notificaciones", disabled: !this.data_valid }
                                ];
                            }
                            else {
                                this.tabs = [
                                    { title: "Datos", disabled: false },
                                    { title: "Secciones", disabled: true },
                                    { title: "Preguntas", disabled: !this.data_valid },
                                    { title: "Notificaciones", disabled: !this.data_valid }
                                ];
                            }
                        }
                    }
                    this.show_encuestados_tab = status;
                    this.ref_change.detectChanges();
                    this.ref_change.markForCheck();
                }
            };
            this.handleSaveUpdateEncuesta = (datos) => {
                this.encuesta_data = Object.assign({}, datos);
                this.id_encuesta = datos.encuesta.id_encuesta;
                this.data_valid = true;
                if (this.encuesta_data.encuesta.es_con_seccion_pregunta) {
                    this.index_tab = 1;
                    this.tabs.forEach(e => {
                        e.disabled = false;
                    });
                }
                else {
                    this.index_tab = 2;
                    this.tabs.forEach(e => {
                        if (e.title == "Secciones") {
                            e.disabled = true;
                        }
                        else {
                            e.disabled = false;
                        }
                    });
                    //let arrayTabs = this.tabs.filter(obj => obj.title != "Secciones");
                    //this.tabs = arrayTabs;
                }
            };
            this.handlePublishSuccess = (is_publised) => {
                if (is_publised) {
                    this.router.navigate(['/sistema/gestion-extranet/gestor-encuestas-extranet']);
                }
            };
            this.handleGoDatos = (go_previous) => {
                if (go_previous) {
                    if (this.encuesta_data.encuesta.es_con_seccion_pregunta) {
                        this.index_tab = 1;
                    }
                    else {
                        this.index_tab = 0;
                    }
                }
            };
            this.handleGoDatosSecciones = (go_previous) => {
                if (go_previous) {
                    this.index_tab = 0;
                }
            };
            this.handleGoDatosNotificaciones = (go_previous) => {
                if (go_previous) {
                    this.index_tab = 2;
                }
            };
            this.handleGoEncuestados = (go_next) => {
                if (go_next) {
                    this.index_tab = 2;
                }
            };
            this.handleGoPreguntas = (go_previous) => {
                if (go_previous) {
                    this.index_tab = 1;
                }
            };
        }
        ngOnInit() {
            this.activatedRoute.paramMap.subscribe(params => {
                const id = params.get('id');
                if (id && Number(id) > 0) {
                    this.id_encuesta = Number(id);
                    //encuesta_data
                    this.spinner.show();
                    this.encuesta_s._getEncuestaDataByID(Number(id)).then(datos => {
                        this.encuesta_data = datos.data;
                        this.data_valid = true;
                        if (this.encuesta_data.encuesta.es_todos) {
                            if (this.encuesta_data.encuesta.es_con_seccion_pregunta) {
                                this.tabs = [
                                    { title: "Datos", disabled: false },
                                    { title: "Secciones", disabled: !this.data_valid },
                                    { title: "Preguntas", disabled: !this.data_valid },
                                    { title: "Notificaciones", disabled: !this.data_valid }
                                ];
                            }
                            else {
                                this.tabs = [
                                    { title: "Datos", disabled: false },
                                    { title: "Secciones", disabled: true },
                                    { title: "Preguntas", disabled: !this.data_valid },
                                    { title: "Notificaciones", disabled: !this.data_valid }
                                ];
                            }
                        }
                        else {
                            if (this.encuesta_data.encuesta.es_con_seccion_pregunta) {
                                this.tabs = [
                                    { title: "Datos", disabled: false },
                                    { title: "Secciones", disabled: false },
                                    { title: "Preguntas", disabled: false },
                                    { title: "Encuestados", disabled: false },
                                    { title: "Notificaciones", disabled: false }
                                ];
                            }
                            else {
                                this.tabs = [
                                    { title: "Datos", disabled: false },
                                    { title: "Secciones", disabled: true },
                                    { title: "Preguntas", disabled: false },
                                    { title: "Encuestados", disabled: false },
                                    { title: "Notificaciones", disabled: false }
                                ];
                            }
                        }
                        this.index_tab = 0;
                        this.ref_change.detectChanges();
                        this.ref_change.markForCheck();
                        this.spinner.hide();
                    }).catch(err => { });
                }
                else {
                    this.index_tab = 0;
                    this.tabs = [
                        { title: "Datos", disabled: false },
                        { title: "Secciones", disabled: true },
                        { title: "Preguntas", disabled: true },
                        //{title:"Encuestados", disabled:true},
                        { title: "Notificaciones", disabled: true }
                    ];
                }
            });
        }
    };
    ConfiguracionEncuestaExtranetComponent.ctorParameters = () => [
        { type: router_1.ActivatedRoute },
        { type: core_1.ChangeDetectorRef },
        { type: forms_1.FormBuilder },
        { type: router_1.Router },
        { type: _core_1.EncuestasService },
        { type: ngx_spinner_1.NgxSpinnerService }
    ];
    ConfiguracionEncuestaExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-configuracion-encuesta-extranet',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./configuracion-encuesta-extranet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/configuracion-encuesta-extranet.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./configuracion-encuesta-extranet.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/configuracion-encuesta-extranet.component.css")).default]
        })
    ], ConfiguracionEncuestaExtranetComponent);
    exports.ConfiguracionEncuestaExtranetComponent = ConfiguracionEncuestaExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/encuestas-extranet-routing.module.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/encuestas-extranet-routing.module.ts ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"), __webpack_require__(/*! ./configuracion-encuesta-ext/configuracion-encuesta-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/configuracion-encuesta-extranet.component.ts"), __webpack_require__(/*! ./vista-encuesta-extranet/vista-encuesta-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/vista-encuesta-extranet.component.ts"), __webpack_require__(/*! ./encuestas-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/encuestas-extranet.component.ts"), __webpack_require__(/*! ./vista-resultados-cifras-extranet/vista-resultados-cifras-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-resultados-cifras-extranet/vista-resultados-cifras-extranet.component.ts"), __webpack_require__(/*! ./re-edit-encuesta-data-extranet/re-edit-encuesta-data-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/re-edit-encuesta-data-extranet.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, configuracion_encuesta_extranet_component_1, vista_encuesta_extranet_component_1, encuestas_extranet_component_1, vista_resultados_cifras_extranet_component_1, re_edit_encuesta_data_extranet_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const routes = [
        { path: "", component: encuestas_extranet_component_1.EncuestasExtranetComponent },
        {
            path: "add",
            component: configuracion_encuesta_extranet_component_1.ConfiguracionEncuestaExtranetComponent,
        },
        {
            path: "edit/:id",
            component: configuracion_encuesta_extranet_component_1.ConfiguracionEncuestaExtranetComponent,
        },
        {
            path: "reedit/:id",
            component: re_edit_encuesta_data_extranet_component_1.ReEditEncuestaDataExtranetComponent,
        },
        {
            path: "view/:id",
            component: vista_encuesta_extranet_component_1.VistaEncuestaExtranetComponent,
        },
        {
            path: "results/:id",
            component: vista_resultados_cifras_extranet_component_1.VistaResultadosCifrasExtranetComponent,
        }
    ];
    let EncuestasExtranetRoutingModule = class EncuestasExtranetRoutingModule {
    };
    EncuestasExtranetRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            declarations: [],
            exports: [router_1.RouterModule]
        })
    ], EncuestasExtranetRoutingModule);
    exports.EncuestasExtranetRoutingModule = EncuestasExtranetRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/encuestas-extranet.component.css":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/encuestas-extranet.component.css ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lzdGVtYS9wYWdlcy9nZXN0aW9uLWV4dHJhbmV0L3BhZ2VzL2VuY3Vlc3Rhcy1leHRyYW5ldC9lbmN1ZXN0YXMtZXh0cmFuZXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/encuestas-extranet.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/encuestas-extranet.component.ts ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-i18n.js"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js"), __webpack_require__(/*! @app/_core/services/respuesta.service */ "./src/app/_core/services/respuesta.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, _core_1, forms_1, i18n_1, ng_zorro_antd_1, router_1, ngx_spinner_1, respuesta_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let EncuestasExtranetComponent = class EncuestasExtranetComponent {
        constructor(i18n, fb, notification, router, activeRouter, encuesta_s, sis_enumerado_s, spinner, modal, respuesta_s, cd) {
            this.i18n = i18n;
            this.fb = fb;
            this.notification = notification;
            this.router = router;
            this.activeRouter = activeRouter;
            this.encuesta_s = encuesta_s;
            this.sis_enumerado_s = sis_enumerado_s;
            this.spinner = spinner;
            this.modal = modal;
            this.respuesta_s = respuesta_s;
            this.cd = cd;
            this._ESTADO_ENCUESTA_ENUMERADO = _core_1.ESTADO_ENCUESTA_ENUMERADO;
            this.formMACRO = {
                Titulo: new forms_1.FormControl(null),
                Estado: new forms_1.FormControl(null),
                FechaInicio: new forms_1.FormControl(null),
                FechaFin: new forms_1.FormControl(null),
            };
            this.show_super_edit = false;
            this.form = {
                titulo: null,
                estado: null,
                id_dependencia: -1,
                fecha_inicio: null,
                fecha_fin: null
            };
            this.selected_tipe = '';
            this.array_estado = [];
            this.EncuestaList = [];
            this.EncuestaAvanceList = [];
            this.cargando_tabla = true;
            this.pageIndex = 1;
            this.total = 0;
            this.pageSize = 10;
            this.get_list = () => {
                this.cargando_tabla = true;
                let filter = {
                    titulo: this.formMACRO.Titulo.value,
                    estado: this.formMACRO.Estado.value,
                    id_dependencia: -1,
                    fecha_inicio: this.formMACRO.FechaInicio.value,
                    fecha_fin: this.formMACRO.FechaFin.value,
                    show_all: this.show_super_edit,
                    id_tipo_encuesta: _core_1.TIPO_ENCUESTA.extranet
                };
                this.spinner.show();
                this.encuesta_s._getEncuestaWithAdministradosList(filter, this.pageIndex, this.pageSize)
                    .then((datos) => {
                    this.spinner.hide();
                    if (datos && datos.data && datos.data.Data) {
                        let dt = datos.data.Data;
                        let today = new Date();
                        dt.forEach(e => {
                            let fin = new Date(e.fecha_fin);
                            e.show_extra_options = (today > fin || e.id_estado == _core_1.ESTADO_ENCUESTA_ENUMERADO.procesado ? true : false);
                        });
                        this.EncuestaList = dt;
                        this.total = datos.data.TotalRows;
                    }
                    this.cargando_tabla = false;
                })
                    .catch(() => {
                    this.cargando_tabla = false;
                });
            };
            this.get_list_avance = () => {
                this.spinner.show();
                this.encuesta_s.GetListAvanceByIdEncuesta(this.selected_encuesta.id_encuesta)
                    .then((datos) => {
                    this.spinner.hide();
                    if (datos && datos.data) {
                        this.EncuestaAvanceList = datos.data;
                    }
                    this.cargando_tabla = false;
                })
                    .catch(() => {
                    this.cargando_tabla = false;
                });
            };
            this.handleClickLimpiar = () => {
                this.form = {
                    titulo: null,
                    estado: null,
                    fecha_inicio: null,
                    fecha_fin: null
                };
                this.pageIndex = 1;
                this.get_list();
            };
            this.handleClickBuscar = (reset = false) => {
                if (reset) {
                    this.pageIndex = 1;
                }
                this.get_list();
            };
            this.clean_all = () => {
                this.form = {
                    titulo: null,
                    estado: null,
                    fecha_inicio: null,
                    fecha_fin: null
                };
                this.formMACRO = {
                    Titulo: new forms_1.FormControl(null),
                    Estado: new forms_1.FormControl(null),
                    FechaInicio: new forms_1.FormControl(null),
                    FechaFin: new forms_1.FormControl(null),
                };
                this.pageIndex = 1;
                this.get_list();
            };
            this.modal_subir_resultados = false;
            this.selected_encuesta = null;
            this.handleOnCloseSaveModalResultados = (e = null) => {
                this.selected_encuesta = null;
                this.modal_subir_resultados = false;
                this.get_list();
            };
            this.modal_avance_resultados = false;
            this.blobType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            this.columnas_array = [
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                'AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AO', 'AP', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AV', 'AW', 'AX', 'AY', 'AZ',
                'BA', 'BB', 'BC', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BK', 'BL', 'BM', 'BN', 'BO', 'BP', 'BQ', 'BR', 'BS', 'BT', 'BU', 'BV', 'BW', 'BX', 'BY', 'BZ',
                'CA', 'CB', 'CC', 'CD', 'CE', 'CF', 'CG', 'CH', 'CI', 'CJ', 'CK', 'CL', 'CM', 'CN', 'CO', 'CP', 'CQ', 'CR', 'CS', 'CT', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ',
                'DA', 'DB', 'DC', 'DD', 'DE', 'DF', 'DG', 'DH', 'DI', 'DJ', 'DK', 'DL', 'DM', 'DN', 'DO', 'DP', 'DQ', 'DR', 'DS', 'DT', 'DU', 'DV', 'DW', 'DX', 'DY', 'DZ',
                'EA', 'EB', 'EC', 'ED', 'EE', 'EF', 'EG', 'EH', 'EI', 'EJ', 'EK', 'EL', 'EM', 'EN', 'EO', 'EP', 'EQ', 'ER', 'ES', 'ET', 'EU', 'EV', 'EW', 'EX', 'EY', 'EZ',
                'FA', 'FB', 'FC', 'FD', 'FE', 'FF', 'FG', 'FH', 'FI', 'FJ', 'FK', 'FL', 'FM', 'FN', 'FO', 'FP', 'FQ', 'FR', 'FS', 'FT', 'FU', 'FV', 'FW', 'FX', 'FY', 'FZ',
                'GA', 'GB', 'GC', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GJ', 'GK', 'GL', 'GM', 'GN', 'GO', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GV', 'GW', 'GX', 'GY', 'GZ',
                'HA', 'HB', 'HC', 'HD', 'HE', 'HF', 'HG', 'HH', 'HI', 'HJ', 'HK', 'HL', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS', 'HT', 'HU', 'HV', 'HW', 'HX', 'HY', 'HZ',
                'IA', 'IB', 'IC', 'ID', 'IE', 'IF', 'IG', 'IH', 'II', 'IJ', 'IK', 'IL', 'IM', 'IN', 'IO', 'IP', 'IQ', 'IR', 'IS', 'IT', 'IU', 'IV', 'IW', 'IX', 'IY', 'IZ'
            ];
            this.array_dependencias = [];
            this.array_regimen = [];
            this.total_pages_descarga = 0;
            this.descargar_data_encuesta = (_id_encuesta) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.spinner.show();
                yield this.encuesta_s.GetReporteEncuestadoPreguntaRespuesta(_id_encuesta)
                    .then((datos) => {
                    this.spinner.hide();
                    var binaryString = window.atob(datos.Value);
                    var binaryLen = binaryString.length;
                    var bytes = new Uint8Array(binaryLen);
                    for (var i = 0; i < binaryLen; i++) {
                        var ascii = binaryString.charCodeAt(i);
                        bytes[i] = ascii;
                    }
                    var blob = new Blob([bytes], { type: "application/vnd.openxmlformats" });
                    var link = document.createElement('a');
                    link.href = window.URL.createObjectURL(blob);
                    link.download = "Reporte_encuestados.xlsx";
                    link.click();
                }).catch(() => { });
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
            });
            this.show_save_update = false;
            this._delete_encuesta = (id_encuesta, title) => {
                this.modal.confirm({
                    nzTitle: 'Eliminar',
                    nzContent: '¿Esta seguro de eliminar la encuesta seleccionada?<br>' +
                        '<strong>Titulo: </strong>' + title,
                    nzOkText: 'Si',
                    nzOkType: 'primary',
                    nzCancelText: 'No',
                    nzOnOk: () => {
                        this.encuesta_s._EnableDisable(id_encuesta, "encuesta")
                            .then((datos) => {
                            if (datos.data) {
                                if (datos.data.Success) {
                                    let str = '<ul>';
                                    datos.data.Messages.forEach(message => {
                                        str += `<li>${message}</li>`;
                                    });
                                    str += '</ul>';
                                    this.createNotification('success', 'Éxito', str);
                                    this.get_list();
                                }
                            }
                        }).catch(() => { });
                    },
                    nzOnCancel: () => { }
                });
            };
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
            this._prepublicar_encuesta = (id_encuesta, title) => {
                this.modal.confirm({
                    nzTitle: 'Regresar a elaboración',
                    nzContent: '<p>Retroceder una encuesta publicada implica eliminar todas las respuestas existentes.</p>' +
                        '<p>¿Esta seguro de continuar?</p>',
                    nzOkText: 'Si',
                    nzOkType: 'primary',
                    nzCancelText: 'No',
                    nzOnOk: () => {
                        this.encuesta_s._Prepublicar(id_encuesta)
                            .then((datos) => {
                            if (datos.data) {
                                if (datos.data.Success) {
                                    let str = '<ul>';
                                    datos.data.Messages.forEach(message => {
                                        str += `<li>${message}</li>`;
                                    });
                                    str += '</ul>';
                                    this.createNotification('success', 'Éxito', str);
                                    this.get_list();
                                }
                            }
                        }).catch(() => { });
                    },
                    nzOnCancel: () => { }
                });
            };
            this.descargar_resultado_encuesta = (_id_encuesta) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.spinner.show();
                yield this.encuesta_s.GetReporteResultados(_id_encuesta)
                    .then((datos) => {
                    this.spinner.hide();
                    var binaryString = window.atob(datos.Value);
                    var binaryLen = binaryString.length;
                    var bytes = new Uint8Array(binaryLen);
                    for (var i = 0; i < binaryLen; i++) {
                        var ascii = binaryString.charCodeAt(i);
                        bytes[i] = ascii;
                    }
                    var blob = new Blob([bytes], { type: "application/vnd.openxmlformats" });
                    var link = document.createElement('a');
                    link.href = window.URL.createObjectURL(blob);
                    link.download = "Reporte_resultados.xlsx";
                    link.click();
                }).catch(() => { });
            });
            this.i18n.setLocale(i18n_1.es_ES);
        }
        ngOnInit() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                let show_super_edit = Number(localStorage.getItem("show_SuperEdit"));
                this.show_super_edit = show_super_edit == 1 ? true : false;
                this.getEstadoEncuestas();
                this.get_list();
                yield this.respuesta_s._GetDesplegableInstitucional(1).then((datos) => {
                    this.array_dependencias = datos.data;
                }).catch(() => { this.array_dependencias = []; });
                yield this.respuesta_s._GetDesplegableInstitucional(2).then((datos) => {
                    this.array_regimen = datos.data;
                }).catch(() => { this.array_regimen = []; });
            });
        }
        getEstadoEncuestas() {
            this.sis_enumerado_s.GetEnumeradoByTipoEnumerado(_core_1.SIS_TIPO_ENUMERADO.estado_encuesta).then(datos => {
                this.array_estado = datos.data.filter(x => x.es_eliminado == false);
            }).catch(err => { });
        }
        _show_resultados_upload(item) {
            this.modal_subir_resultados = true;
            this.selected_encuesta = item;
            this.get_list();
        }
        handleOnCloseModalResultados(e) {
            this.selected_encuesta = null;
            this.modal_subir_resultados = false;
        }
        _show_resultados_avance(item) {
            this.modal_avance_resultados = true;
            this.selected_encuesta = item;
            this.get_list_avance();
        }
        handleOnCloseModalAvance(e) {
            this.selected_encuesta = null;
            this.modal_avance_resultados = false;
        }
        ;
    };
    EncuestasExtranetComponent.ctorParameters = () => [
        { type: ng_zorro_antd_1.NzI18nService },
        { type: forms_1.FormBuilder },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: router_1.Router },
        { type: router_1.ActivatedRoute },
        { type: _core_1.EncuestasService },
        { type: _core_1.SisEnumeradoService },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: ng_zorro_antd_1.NzModalService },
        { type: respuesta_service_1.RespuestaService },
        { type: core_1.ChangeDetectorRef }
    ];
    EncuestasExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-encuestas-extranet',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./encuestas-extranet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/encuestas-extranet.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./encuestas-extranet.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/encuestas-extranet.component.css")).default]
        })
    ], EncuestasExtranetComponent);
    exports.EncuestasExtranetComponent = EncuestasExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/encuestas-extranet.module.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/encuestas-extranet.module.ts ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js"), __webpack_require__(/*! @app/_shared */ "./src/app/_shared/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! ng-zorro-antd/modal */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-modal.js"), __webpack_require__(/*! ng-zorro-antd/notification */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-notification.js"), __webpack_require__(/*! ng-zorro-antd/table */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-table.js"), __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-select.js"), __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-input.js"), __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-icon.js"), __webpack_require__(/*! @cmp/core */ "./src/app/_core/index.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js"), __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js"), __webpack_require__(/*! ./encuestas-extranet-routing.module */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/encuestas-extranet-routing.module.ts"), __webpack_require__(/*! ./encuestas-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/encuestas-extranet.component.ts"), __webpack_require__(/*! ./configuracion-encuesta-ext/configuracion-encuesta-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/configuracion-encuesta-extranet.component.ts"), __webpack_require__(/*! ./configuracion-encuesta-ext/components/datos-encuesta-extranet/datos-encuesta-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/datos-encuesta-extranet/datos-encuesta-extranet.component.ts"), __webpack_require__(/*! ./configuracion-encuesta-ext/components/preguntas-encuesta-extranet/preguntas-encuesta-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/preguntas-encuesta-extranet/preguntas-encuesta-extranet.component.ts"), __webpack_require__(/*! ./configuracion-encuesta-ext/components/encuestados-encuesta-extranet/encuestados-encuesta-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/encuestados-encuesta-extranet/encuestados-encuesta-extranet.component.ts"), __webpack_require__(/*! ./configuracion-encuesta-ext/components/configurar-encuestados-formulario-ext/configurar-encuestados-formulario-ext.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/configurar-encuestados-formulario-ext/configurar-encuestados-formulario-ext.component.ts"), __webpack_require__(/*! ./configuracion-encuesta-ext/components/modal-registro-pregunta-ext/modal-registro-pregunta-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-pregunta-ext/modal-registro-pregunta-extranet.component.ts"), __webpack_require__(/*! ./configuracion-encuesta-ext/components/modal-registro-pregunta-ext/modal-registro-columna-ext/modal-registro-columna-ext.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-pregunta-ext/modal-registro-columna-ext/modal-registro-columna-ext.component.ts"), __webpack_require__(/*! ./vista-encuesta-extranet/vista-encuesta-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/vista-encuesta-extranet.component.ts"), __webpack_require__(/*! ./vista-encuesta-extranet/components/datos-encuesta-view-extranet/datos-encuesta-view-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/datos-encuesta-view-extranet/datos-encuesta-view-extranet.component.ts"), __webpack_require__(/*! ./vista-encuesta-extranet/components/preguntas-encuesta-view-extranet/preguntas-encuesta-view-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/preguntas-encuesta-view-extranet/preguntas-encuesta-view-extranet.component.ts"), __webpack_require__(/*! ./vista-encuesta-extranet/components/encuestados-encuesta-view-extranet/encuestados-encuesta-view-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/encuestados-encuesta-view-extranet/encuestados-encuesta-view-extranet.component.ts"), __webpack_require__(/*! ./vista-encuesta-extranet/components/modal-vista-pregunta-extranet/modal-vista-pregunta-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/modal-vista-pregunta-extranet/modal-vista-pregunta-extranet.component.ts"), __webpack_require__(/*! ./vista-resultados-cifras-extranet/vista-resultados-cifras-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-resultados-cifras-extranet/vista-resultados-cifras-extranet.component.ts"), __webpack_require__(/*! ./re-edit-encuesta-data-extranet/re-edit-encuesta-data-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/re-edit-encuesta-data-extranet.component.ts"), __webpack_require__(/*! ./re-edit-encuesta-data-extranet/components/re-datos-encuesta-extranet/re-datos-encuesta-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/components/re-datos-encuesta-extranet/re-datos-encuesta-extranet.component.ts"), __webpack_require__(/*! ./re-edit-encuesta-data-extranet/components/re-modal-registro-pregunta-extranet/re-modal-registro-pregunta-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/components/re-modal-registro-pregunta-extranet/re-modal-registro-pregunta-extranet.component.ts"), __webpack_require__(/*! ./re-edit-encuesta-data-extranet/components/re-preguntas-encuesta-extranet/re-preguntas-encuesta-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/components/re-preguntas-encuesta-extranet/re-preguntas-encuesta-extranet.component.ts"), __webpack_require__(/*! ./subir-resultados-extranet/subir-resultados-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/subir-resultados-extranet/subir-resultados-extranet.component.ts"), __webpack_require__(/*! ./avance-resultados-extranet/avance-resultados-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/avance-resultados-extranet/avance-resultados-extranet.component.ts"), __webpack_require__(/*! ./configuracion-encuesta-ext/components/modal-reordenar-pregunta-ext/modal-reordenar-pregunta-ext.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-reordenar-pregunta-ext/modal-reordenar-pregunta-ext.component.ts"), __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js"), __webpack_require__(/*! ./configuracion-encuesta-ext/components/secciones-pregunta-extranet/secciones-pregunta-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/secciones-pregunta-extranet/secciones-pregunta-extranet.component.ts"), __webpack_require__(/*! ./configuracion-encuesta-ext/components/modal-registro-seccion-ext/modal-registro-seccion-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-seccion-ext/modal-registro-seccion-extranet.component.ts"), __webpack_require__(/*! ./configuracion-encuesta-ext/components/modal-reordenar-seccion-ext/modal-reordenar-seccion-ext.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-reordenar-seccion-ext/modal-reordenar-seccion-ext.component.ts"), __webpack_require__(/*! ./configuracion-encuesta-ext/components/notificaciones-extranet/notificaciones-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/notificaciones-extranet/notificaciones-extranet.component.ts"), __webpack_require__(/*! ./configuracion-encuesta-ext/components/modal-registro-notificacion-ext/modal-registro-notificacion-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-registro-notificacion-ext/modal-registro-notificacion-extranet.component.ts"), __webpack_require__(/*! ./configuracion-encuesta-ext/components/modal-reordenar-pregunta-sec-ext/modal-reordenar-pregunta-sec-ext.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/configuracion-encuesta-ext/components/modal-reordenar-pregunta-sec-ext/modal-reordenar-pregunta-sec-ext.component.ts"), __webpack_require__(/*! ./vista-encuesta-extranet/components/secciones-pregunta-view-extranet/secciones-pregunta-view-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/secciones-pregunta-view-extranet/secciones-pregunta-view-extranet.component.ts"), __webpack_require__(/*! ./vista-encuesta-extranet/components/notificaciones-view-extranet/notificaciones-view-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/notificaciones-view-extranet/notificaciones-view-extranet.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, _shared_1, ng_zorro_antd_1, modal_1, notification_1, table_1, select_1, input_1, icon_1, core_2, forms_1, ngx_spinner_1, ckeditor5_angular_1, encuestas_extranet_routing_module_1, encuestas_extranet_component_1, configuracion_encuesta_extranet_component_1, datos_encuesta_extranet_component_1, preguntas_encuesta_extranet_component_1, encuestados_encuesta_extranet_component_1, configurar_encuestados_formulario_ext_component_1, modal_registro_pregunta_extranet_component_1, modal_registro_columna_ext_component_1, vista_encuesta_extranet_component_1, datos_encuesta_view_extranet_component_1, preguntas_encuesta_view_extranet_component_1, encuestados_encuesta_view_extranet_component_1, modal_vista_pregunta_extranet_component_1, vista_resultados_cifras_extranet_component_1, re_edit_encuesta_data_extranet_component_1, re_datos_encuesta_extranet_component_1, re_modal_registro_pregunta_extranet_component_1, re_preguntas_encuesta_extranet_component_1, subir_resultados_extranet_component_1, avance_resultados_extranet_component_1, modal_reordenar_pregunta_ext_component_1, drag_drop_1, secciones_pregunta_extranet_component_1, modal_registro_seccion_extranet_component_1, modal_reordenar_seccion_ext_component_1, notificaciones_extranet_component_1, modal_registro_notificacion_extranet_component_1, modal_reordenar_pregunta_sec_ext_component_1, secciones_pregunta_view_extranet_component_1, notificaciones_view_extranet_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let EncuestasExtranetModule = class EncuestasExtranetModule {
    };
    EncuestasExtranetModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                encuestas_extranet_routing_module_1.EncuestasExtranetRoutingModule,
                _shared_1.SharedModule,
                ng_zorro_antd_1.NzButtonModule,
                ng_zorro_antd_1.NzDatePickerModule,
                modal_1.NzModalModule,
                notification_1.NzNotificationModule,
                table_1.NzTableModule,
                select_1.NzSelectModule,
                input_1.NzInputModule,
                icon_1.NzIconModule,
                ng_zorro_antd_1.NzCollapseModule,
                core_2.CoreComponentsModule,
                ngx_spinner_1.NgxSpinnerModule,
                ng_zorro_antd_1.NzFormModule,
                ng_zorro_antd_1.NzCheckboxModule,
                ckeditor5_angular_1.CKEditorModule,
                ng_zorro_antd_1.NzTabsModule,
                forms_1.ReactiveFormsModule,
                ng_zorro_antd_1.NzMessageModule,
                ng_zorro_antd_1.NzInputNumberModule,
                core_2.CoreDirectivesModule,
                drag_drop_1.DragDropModule
            ],
            declarations: [
                encuestas_extranet_component_1.EncuestasExtranetComponent,
                configuracion_encuesta_extranet_component_1.ConfiguracionEncuestaExtranetComponent,
                datos_encuesta_extranet_component_1.DatosEncuestaExtranetComponent,
                preguntas_encuesta_extranet_component_1.PreguntasEncuestaExtranetComponent,
                modal_registro_pregunta_extranet_component_1.ModalRegistroPreguntaExtranetComponent,
                modal_registro_columna_ext_component_1.ModalRegistroColumnaExtComponent,
                encuestados_encuesta_extranet_component_1.EncuestadosEncuestaExtranetComponent,
                configurar_encuestados_formulario_ext_component_1.ConfigurarEncuestadosFormularioExtComponent,
                vista_encuesta_extranet_component_1.VistaEncuestaExtranetComponent,
                datos_encuesta_view_extranet_component_1.DatosEncuestaViewExtranetComponent,
                preguntas_encuesta_view_extranet_component_1.PreguntasEncuestaViewExtranetComponent,
                encuestados_encuesta_view_extranet_component_1.EncuestadosEncuestaViewExtranetComponent,
                modal_vista_pregunta_extranet_component_1.ModalVistaPreguntaExtranetComponent,
                subir_resultados_extranet_component_1.SubirResultadosExtranetComponent,
                avance_resultados_extranet_component_1.AvanceResultadosExtranetComponent,
                vista_resultados_cifras_extranet_component_1.VistaResultadosCifrasExtranetComponent,
                re_edit_encuesta_data_extranet_component_1.ReEditEncuestaDataExtranetComponent,
                re_datos_encuesta_extranet_component_1.ReDatosEncuestaExtranetComponent,
                re_modal_registro_pregunta_extranet_component_1.ReModalRegistroPreguntaExtranetComponent,
                re_preguntas_encuesta_extranet_component_1.RePreguntasEncuestaExtranetComponent,
                modal_reordenar_pregunta_ext_component_1.ModalReordenarPreguntaExtranetComponent,
                secciones_pregunta_extranet_component_1.SeccionesPreguntaExtranetComponent,
                modal_registro_seccion_extranet_component_1.ModalRegistroSeccionExtranetComponent,
                modal_reordenar_seccion_ext_component_1.ModalReordenarSeccionExtranetComponent,
                notificaciones_extranet_component_1.NotificacionesExtranetComponent,
                modal_registro_notificacion_extranet_component_1.ModalRegistroNotificacionExtranetComponent,
                modal_reordenar_pregunta_sec_ext_component_1.ModalReordenarPreguntaSecExtranetComponent,
                secciones_pregunta_view_extranet_component_1.SeccionesPreguntaViewExtranetComponent,
                notificaciones_view_extranet_component_1.NotificacionesViewExtranetComponent
            ],
            entryComponents: []
        })
    ], EncuestasExtranetModule);
    exports.EncuestasExtranetModule = EncuestasExtranetModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/components/re-datos-encuesta-extranet/re-datos-encuesta-extranet.component.css":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/components/re-datos-encuesta-extranet/re-datos-encuesta-extranet.component.css ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ck-editor__editable {\r\n    /* min-height: 600px !important; */\r\n    border: 1px solid rgb(217, 217, 217) !important;\r\n}\r\n.ck-editor__editable_inline {\r\n    min-height: 250px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaXN0ZW1hL3BhZ2VzL2dlc3Rpb24tZXh0cmFuZXQvcGFnZXMvZW5jdWVzdGFzLWV4dHJhbmV0L3JlLWVkaXQtZW5jdWVzdGEtZGF0YS1leHRyYW5ldC9jb21wb25lbnRzL3JlLWRhdG9zLWVuY3Vlc3RhLWV4dHJhbmV0L3JlLWRhdG9zLWVuY3Vlc3RhLWV4dHJhbmV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7SUFDbEMsK0NBQStDO0FBQ25EO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Npc3RlbWEvcGFnZXMvZ2VzdGlvbi1leHRyYW5ldC9wYWdlcy9lbmN1ZXN0YXMtZXh0cmFuZXQvcmUtZWRpdC1lbmN1ZXN0YS1kYXRhLWV4dHJhbmV0L2NvbXBvbmVudHMvcmUtZGF0b3MtZW5jdWVzdGEtZXh0cmFuZXQvcmUtZGF0b3MtZW5jdWVzdGEtZXh0cmFuZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jay1lZGl0b3JfX2VkaXRhYmxlIHtcclxuICAgIC8qIG1pbi1oZWlnaHQ6IDYwMHB4ICFpbXBvcnRhbnQ7ICovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjE3LCAyMTcsIDIxNykgIWltcG9ydGFudDtcclxufVxyXG4uY2stZWRpdG9yX19lZGl0YWJsZV9pbmxpbmUge1xyXG4gICAgbWluLWhlaWdodDogMjUwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/components/re-datos-encuesta-extranet/re-datos-encuesta-extranet.component.ts":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/components/re-datos-encuesta-extranet/re-datos-encuesta-extranet.component.ts ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js"), __webpack_require__(/*! ../../../../../../../../../../../external/ckeditor5-build-decoupled-document */ "./external/ckeditor5-build-decoupled-document/build/ckeditor.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, forms_1, _core_1, ng_zorro_antd_1, ngx_spinner_1, DecoupledEditor) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    DecoupledEditor.defaultConfig = _core_1.DecoupledInit.defaultConfig;
    let ReDatosEncuestaExtranetComponent = class ReDatosEncuestaExtranetComponent {
        constructor(_formBuilder, notification, encuesta_s, spinner, sis_enumerado_s) {
            this._formBuilder = _formBuilder;
            this.notification = notification;
            this.encuesta_s = encuesta_s;
            this.spinner = spinner;
            this.sis_enumerado_s = sis_enumerado_s;
            this.onChangeAllPersonalStatus = new core_1.EventEmitter();
            this.onSaveUpdateEncuesta = new core_1.EventEmitter();
            this.array_tipo_file = [];
            this.frm_main_data = {
                id_encuesta: 0,
                titulo: null,
                encabezado: null,
                objetivo: null,
                descripcion: null,
                fecha_inicio: null,
                fecha_fin: null,
                tiempo_estimado: null,
                es_anonima: false,
                mensaje_es_anonima: null,
                es_todos: true,
                iden_imagen_presentacion: null,
                mensaje_corto_presentacion: null,
                id_estado: 0,
                estado_name: null
            };
            this.frm_welcome_data = {};
            this.frm_greet_data = {};
            this.tags = [];
            this.editor = DecoupledEditor;
            this.configEditor = _core_1.DecoupledInit.configEditor;
            this.expresion = /\[\[[A-Z0-9\_]+\]\]/g;
            this.show_mensaje_bienvenida_anonima = (status) => {
                this._show_mensaje_bienvenida_anonima = status;
            };
            this.show_tab_encuestados = (status) => {
                this.onChangeAllPersonalStatus.emit(status);
            };
            this._show_mensaje_bienvenida_anonima = false;
            this.estaGuardando = false;
            this.tiposMimePermitidos = ["image/png", "image/jpeg", "image/gif"];
            this.imagen_MimePermitidos = ["image/png", "image/jpeg", "image/gif"];
            this.imagen_extensionAceptados = [".png", ".jpeg", ".gif"];
            this.pesoMaximoEnMB = _core_1.FILE_SETTINGS.maxFileSize;
            this.url = "/api/comun/descargar-archivo";
            this.validar_fup = false;
            this.set_imagen_iden = (data) => {
                this.error_imagen_segundo_plano = false;
                this.frm_main_data.iden_imagen_presentacion = data.codigo;
            };
            this.handleRemovedFilePresentacion = (e) => {
                this.frm_main_data.iden_imagen_presentacion = null;
            };
            this.error_indicaciones = false;
            this.audio_estaGuardando = false;
            this.set_audio_iden = (data) => {
                this.frm_welcome_data.iden_audio = data.codigo;
            };
            this.handleRemovedAudioWelcome = (e) => {
                this.frm_welcome_data.iden_audio = null;
            };
            this.error_file_welcome = false;
            this.error_url_welcome = false;
            this.show_file_uploader = false;
            this.selected_tipo = '';
            this.show_file_input_welcome = false;
            this._extensionAceptados_welcome = [];
            this.video_extensionAceptados = [".mp4"];
            this.show_url_welcome = false;
            //imagen_extensionAceptados= [".png", ".jpeg"];
            this.set_tipo_file_permitidos_welcome = () => {
                let tipo = this.frm_welcome_data.id_tipo_archivo;
                if (tipo) {
                    let tipo_file = this.array_tipo_file.find(f => f.id_enumerado == tipo);
                    this.selected_tipo = tipo_file ? tipo_file.nombre : '';
                    this.show_file_input_welcome = (tipo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen ? true : false);
                    this.show_url_welcome = (tipo == _core_1.TIPO_ARCHIVO_ENUMERADO.video ? true : false);
                }
                else {
                    this.show_file_input_welcome = false;
                    this.show_url_welcome = false;
                }
            };
            this.set_file_iden_welcome = (data) => {
                this.error_file_welcome = false;
                this.frm_welcome_data.iden_imagen = data.codigo;
            };
            this.handleRemovedFileWelcome = (e) => {
                this.frm_welcome_data.iden_imagen = null;
            };
            this.error_imagen_segundo_plano = false;
            this.error_file_agradecimiento = false;
            this.show_file_agradecimiento = false;
            this.show_input_file = false;
            this.show_url = false;
            this._extensionAceptados_agradecimiento = [];
            this.set_tipo_file_permitidos_agradecimiento = () => {
                let tipo = this.frm_greet_data.id_tipo_archivo;
                if (tipo) {
                    let tipo_file = this.array_tipo_file.find(f => f.id_enumerado == tipo);
                    this.selected_tipo = tipo_file ? tipo_file.nombre : '';
                    this.show_file_agradecimiento = tipo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen ? true : false;
                    this.show_url = tipo == _core_1.TIPO_ARCHIVO_ENUMERADO.video ? true : false;
                    //this._extensionAceptados_agradecimiento=tipo?(tipo==TIPO_ARCHIVO_ENUMERADO.video?this.video_extensionAceptados:):[];
                }
            };
            this.set_file_iden_agradecimiento = (data) => {
                this.error_file_agradecimiento = false;
                this.frm_greet_data.iden_imagen = data.codigo;
            };
            this.handleRemovedFileAgradecimiento = (e) => {
                this.frm_greet_data.iden_imagen = null;
            };
            this.set_audio_iden_agradecimiento = (data) => {
                this.frm_greet_data.iden_audio = data.codigo;
            };
            this.handleRemovedAudioAgradecimiento = (e) => {
                this.frm_greet_data.iden_audio = null;
            };
            this.disabledStartDate = (startValue) => {
                if (!startValue || this.frm_main_data.fecha_fin == null) {
                    return false;
                }
                else {
                    return startValue.getTime() > new Date(this.frm_main_data.fecha_fin).getTime();
                }
            };
            this.disabledEndDate = (endValue) => {
                if (!endValue || this.frm_main_data.fecha_inicio == null) {
                    return false;
                }
                else {
                    return endValue.getTime() <= new Date(this.frm_main_data.fecha_inicio).getTime();
                }
            };
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
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
        }
        ngOnInit() {
            this.create_form();
            this.getTipoArchivos();
            let basic_form = { id_encuesta: 0, id_estado: _core_1.ESTADO_ENCUESTA_ENUMERADO.registrado, es_todos: true, es_anonima: false };
            let basic_welcome = {};
            let basic_greet = {};
            this._show_mensaje_bienvenida_anonima = this.encuesta_data.encuesta ? this.encuesta_data.encuesta.es_todos : false;
            this.frm_main_data = this.encuesta_data.encuesta ? this.encuesta_data.encuesta : basic_form;
            this.frm_welcome_data = this.encuesta_data.bienvenida ? this.encuesta_data.bienvenida : basic_welcome;
            this.frm_greet_data = this.encuesta_data.agradecimiento ? this.encuesta_data.agradecimiento : basic_greet;
            this._show_mensaje_bienvenida_anonima = this.frm_main_data.es_anonima;
        }
        getTipoArchivos() {
            this.sis_enumerado_s.GetEnumeradoByTipoEnumerado(_core_1.SIS_TIPO_ENUMERADO.tipo_archivo).then(datos => {
                this.array_tipo_file = datos.data.filter(x => x.es_eliminado == false);
            }).catch(err => { });
        }
        create_form() {
            this.formMACRO = this._formBuilder.group({
                Titulo: [null, forms_1.Validators.required],
                Encabezado: [null, forms_1.Validators.required],
                Objetivo: [null, forms_1.Validators.required],
                Descripcion: [null, forms_1.Validators.required],
                FechaHoraInicio: [null, forms_1.Validators.required],
                FechaHoraFin: [null, forms_1.Validators.required],
                TiempoEstimado: [null, [forms_1.Validators.required, forms_1.Validators.pattern('[0-9]*')]],
                EsAnonima: [false],
                EsParaTodos: [true],
                MensajeAnonimo: [null],
                MensajePresentacion: [null],
                IndicacionesBienvenida: [null, forms_1.Validators.required],
                TipoArchivoBienvenida: [null, forms_1.Validators.required],
                UrlMultimediaBienvenida: [null],
                IndicacionesAgradecimiento: [null, forms_1.Validators.required],
                TipoArchivoAgradecimiento: [null, forms_1.Validators.required],
                UrlMultimediaAgradecimiento: [null]
            });
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
            this.error_indicaciones = false;
        }
        onReady(editor) {
            editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
        }
        save_update() {
            const _controls = this.formMACRO.controls;
            let allow = true;
            if (this.formMACRO.invalid) {
                Object.keys(_controls).forEach(controlName => {
                    _controls[controlName].markAsTouched();
                    _controls[controlName].markAsDirty();
                    _controls[controlName].updateValueAndValidity();
                });
                allow = false;
            }
            if (this.frm_welcome_data.indicaciones == null || this.frm_welcome_data.indicaciones == '') {
                this.error_indicaciones = true;
                allow = false;
            }
            if (this.frm_main_data.iden_imagen_presentacion == null || this.frm_main_data.iden_imagen_presentacion == '') {
                this.error_imagen_segundo_plano = true;
                allow = false;
            }
            if (this.frm_greet_data.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.video) {
                if (this.frm_greet_data.url_video == null || this.frm_greet_data.url_video == "" || this.validURL(this.frm_greet_data.url_video) == false) {
                    this.error_url = true;
                    allow = false;
                }
            }
            if (this.frm_greet_data.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen) {
                if (this.frm_greet_data.iden_imagen == null || this.frm_greet_data.iden_imagen == "") {
                    this.error_file_agradecimiento = true;
                    allow = false;
                }
            }
            if (this.frm_welcome_data.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.video) {
                if (this.frm_welcome_data.url_video == null || this.frm_welcome_data.url_video == "" || this.validURL(this.frm_welcome_data.url_video) == false) {
                    this.error_url_welcome = true;
                    allow = false;
                }
            }
            if (this.frm_welcome_data.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen) {
                if (this.frm_welcome_data.iden_imagen == null || this.frm_welcome_data.iden_imagen == "") {
                    this.error_file_welcome = true;
                    allow = false;
                }
            }
            if (allow) {
                let input = {
                    ussername: '',
                    files_only: false,
                    encuesta: this.frm_main_data,
                    bienvenida: this.frm_welcome_data,
                    agradecimiento: this.frm_greet_data,
                    tipo_encuesta: _core_1.TIPO_ENCUESTA.intranet
                };
                this.spinner.show();
                this.encuesta_s._saveUpdateEncuestaData(input).then(datos => {
                    this.spinner.hide();
                    if (datos.data) {
                        let str = '<ul>';
                        datos.data.Messages.forEach(message => {
                            str += `<li>${message}</li>`;
                        });
                        str += '</ul>';
                        if (datos.data.Success) {
                            this.createNotification('success', 'Éxito', str);
                            input.encuesta.id_encuesta = datos.data.Value.RESULT_IDEN;
                            this.onSaveUpdateEncuesta.emit(input);
                        }
                        else {
                            this.createNotification('warning', 'Advertencia', str);
                        }
                    }
                }).catch(err => {
                    this.spinner.hide();
                });
            }
            else {
                this.createNotification('warning', 'Advertencia', 'Debe ingresar los campos obligatorios');
            }
        }
    };
    ReDatosEncuestaExtranetComponent.ctorParameters = () => [
        { type: forms_1.FormBuilder },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: _core_1.EncuestasService },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: _core_1.SisEnumeradoService }
    ];
    tslib_1.__decorate([
        core_1.Input()
    ], ReDatosEncuestaExtranetComponent.prototype, "encuesta_data", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ReDatosEncuestaExtranetComponent.prototype, "onChangeAllPersonalStatus", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ReDatosEncuestaExtranetComponent.prototype, "onSaveUpdateEncuesta", void 0);
    ReDatosEncuestaExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-re-datos-encuesta-extranet',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./re-datos-encuesta-extranet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/components/re-datos-encuesta-extranet/re-datos-encuesta-extranet.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./re-datos-encuesta-extranet.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/components/re-datos-encuesta-extranet/re-datos-encuesta-extranet.component.css")).default]
        })
    ], ReDatosEncuestaExtranetComponent);
    exports.ReDatosEncuestaExtranetComponent = ReDatosEncuestaExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/components/re-modal-registro-pregunta-extranet/re-modal-registro-pregunta-extranet.component.css":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/components/re-modal-registro-pregunta-extranet/re-modal-registro-pregunta-extranet.component.css ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hoverable:hover{\r\n    cursor:pointer;\r\n}\r\n\r\n.hoverable_txt:hover{\r\n    cursor:pointer;\r\n    background-color:#ffc1c1;\r\n}\r\n\r\n.is_selected_tipo{\r\n    background-color:#ffc1c1;\r\n}\r\n\r\n.btn_span {\r\n    float: right;\r\n    margin-right: 6px;\r\n    margin-top: -25px;\r\n    position: relative;\r\n    z-index: 2;\r\n    /*color: #244DAE;*/\r\n    /*background-color:#E9ECEF;*/\r\n    font-weight: bolder;\r\n}\r\n\r\n/*\r\n.btn_span:hover{\r\n    cursor: pointer;\r\n}*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaXN0ZW1hL3BhZ2VzL2dlc3Rpb24tZXh0cmFuZXQvcGFnZXMvZW5jdWVzdGFzLWV4dHJhbmV0L3JlLWVkaXQtZW5jdWVzdGEtZGF0YS1leHRyYW5ldC9jb21wb25lbnRzL3JlLW1vZGFsLXJlZ2lzdHJvLXByZWd1bnRhLWV4dHJhbmV0L3JlLW1vZGFsLXJlZ2lzdHJvLXByZWd1bnRhLWV4dHJhbmV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHdCQUF3QjtBQUM1Qjs7QUFDQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixtQkFBbUI7QUFDdkI7O0FBQ0E7OztFQUdFIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaXN0ZW1hL3BhZ2VzL2dlc3Rpb24tZXh0cmFuZXQvcGFnZXMvZW5jdWVzdGFzLWV4dHJhbmV0L3JlLWVkaXQtZW5jdWVzdGEtZGF0YS1leHRyYW5ldC9jb21wb25lbnRzL3JlLW1vZGFsLXJlZ2lzdHJvLXByZWd1bnRhLWV4dHJhbmV0L3JlLW1vZGFsLXJlZ2lzdHJvLXByZWd1bnRhLWV4dHJhbmV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG92ZXJhYmxlOmhvdmVye1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcbi5ob3ZlcmFibGVfdHh0OmhvdmVye1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmMxYzE7XHJcbn1cclxuLmlzX3NlbGVjdGVkX3RpcG97XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmMxYzE7XHJcbn1cclxuLmJ0bl9zcGFuIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTI1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgLypjb2xvcjogIzI0NERBRTsqL1xyXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiNFOUVDRUY7Ki9cclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLypcclxuLmJ0bl9zcGFuOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Ki8iXX0= */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/components/re-modal-registro-pregunta-extranet/re-modal-registro-pregunta-extranet.component.ts":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/components/re-modal-registro-pregunta-extranet/re-modal-registro-pregunta-extranet.component.ts ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, forms_1, _core_1, ng_zorro_antd_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let ReModalRegistroPreguntaExtranetComponent = class ReModalRegistroPreguntaExtranetComponent {
        constructor(sis_enumerado_s, categoria_s, encuesta_s, _formBuilder, notification, modal, cd) {
            this.sis_enumerado_s = sis_enumerado_s;
            this.categoria_s = categoria_s;
            this.encuesta_s = encuesta_s;
            this._formBuilder = _formBuilder;
            this.notification = notification;
            this.modal = modal;
            this.cd = cd;
            this._TIPO_PREGUNTA = _core_1.TIPO_PREGUNTA;
            this.title = "Agregar";
            this.is_first = false;
            this.es_por_defecto = false;
            this.isVisibleModal = false;
            this.preguntas_condicionales = [];
            this.onCloseModal = new core_1.EventEmitter();
            this.onSaveDataPregunta = new core_1.EventEmitter();
            this.modal_width = 800;
            this.frm = { id_pregunta: 0, id_encuesta: 0, es_obligatorio: true };
            this.selectedPreguntaCondicional = null;
            //frmPRG:FormGroup;
            this.frmPRG = {
                frmPregunta: new forms_1.FormControl(null, forms_1.Validators.required),
                frmTipoPregunta: new forms_1.FormControl(null, forms_1.Validators.required),
                frmEsObligatorio: new forms_1.FormControl(true),
                frmCategoria: new forms_1.FormControl(null),
                frmSubCategoria: new forms_1.FormControl(null),
                frmDescripcionAdicional: new forms_1.FormControl(null),
                frmTipoArchivo: new forms_1.FormControl(null, forms_1.Validators.required),
                frmEsCondicionada: new forms_1.FormControl(false),
                frmEsCondicional: new forms_1.FormControl(false),
                frmPreguntaCondicional: new forms_1.FormControl(null)
            };
            this.loading_condionales = false;
            this.setPreguntaSelecionadaCondicional = (e) => {
                let _find = this.preguntas_condicionales.find(x => x.id_pregunta == e);
                this.loading_condionales = true;
                setTimeout(() => {
                    this.selectedPreguntaCondicional = e ? _find : null;
                    this.loading_condionales = false;
                    this.cd.detectChanges();
                    this.cd.markForCheck();
                }, 200);
            };
            this.respuesta_disparadora = null;
            this.handleClickSaveRespuestaCondicionada = (e) => {
                this.respuesta_disparadora = e;
                this.frm.json_respuesta_condicional = JSON.stringify(e);
                this.cd.detectChanges();
                this.cd.markForCheck();
            };
            this.array_tipo_file = [];
            this.array_tipo_pregunta = [];
            this.array_categoria = [];
            this.array_sub_categoria = [];
            this.array_sub_categoria_all = [];
            this.filter_sub_categoria = (val, force = false) => {
                let id_categoria = this.frm.id_categoria;
                this.array_sub_categoria = id_categoria ? this.array_sub_categoria_all.filter(x => x.id_categoria == id_categoria) : [];
                if (force) {
                    //logica retirada
                }
                else {
                    this.frm.id_sub_categoria = null;
                }
            };
            //#endregion
            this.array_maestro_institucional = [
                { id_enumerado: 1, nombre: "Dependencia" },
                { id_enumerado: 2, nombre: "Régimen" }
            ];
            this.JSON_DESPLEGABLE_INSTITUCIONAL = _core_1.JSON_TIPO_PREGUNTA.desplegable_institucional;
            this.frmMaestroInstitucional = new forms_1.FormControl(null, forms_1.Validators.required);
            this.JSON_DESPLEGABLE_LIBRE = _core_1.JSON_TIPO_PREGUNTA.desplegable_libre;
            this.JSON_NUMERICO_ENTERO = _core_1.JSON_TIPO_PREGUNTA.numerico_entero;
            this.JSON_NUMERICO_DECIMAL = _core_1.JSON_TIPO_PREGUNTA.numerico_decimal;
            this.JSON_SELECCION_UNICA = _core_1.JSON_TIPO_PREGUNTA.seleccion_unica;
            this.JSON_SELECCION_MULTIPLE = _core_1.JSON_TIPO_PREGUNTA.seleccion_multiple;
            this.JSON_MATRIZ = _core_1.JSON_TIPO_PREGUNTA.matriz;
            this.array_alternativa_select = [];
            this.frmAlternativaDescripcion = [];
            this.frmAlternativaPeso = [];
            this.frmCantidadDigitos = new forms_1.FormControl(null, forms_1.Validators.required);
            this.array_filas = [];
            this.array_columnas = [];
            this.cargar_formato_byTipo = (idTipo, is_default = false /*is_first=false*/) => {
                this.modal_width = idTipo == _core_1.TIPO_PREGUNTA.matriz ? 1200 : 800;
                if (idTipo == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                    if (is_default) {
                        this.JSON_DESPLEGABLE_INSTITUCIONAL.tbl_data = 1;
                    }
                }
            };
            //#region ARCHIVOS
            this.estaGuardando = false;
            this.tiposMimePermitidos = ["image/png", "image/jpeg"];
            this.imagen_MimePermitidos = ["image/png", "image/jpeg", "image/gif"];
            this.video_extensionAceptados = [".mp4"];
            this.imagen_extensionAceptados = [".png", ".jpeg"];
            this.pesoMaximoEnMB = _core_1.FILE_SETTINGS.maxFileSize;
            this.url = "/api/comun/descargar-archivo";
            this.validar_fup = false;
            this.show_file_uploader = false;
            this.show_url = false;
            this.selected_tipo = '';
            this._extensionAceptados = [];
            this.set_tipo_file = () => {
                let tipo = this.frm.id_tipo_archivo;
                let tipo_file = this.array_tipo_file.find(f => f.id_enumerado == tipo);
                this.selected_tipo = tipo_file ? tipo_file.nombre.toLowerCase() : '';
                this.show_file_uploader = tipo ? (tipo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen ? true : false) : false;
                this.show_url = tipo ? (tipo == _core_1.TIPO_ARCHIVO_ENUMERADO.video ? true : false) : false;
                this._extensionAceptados = this.imagen_extensionAceptados; //tipo?(tipo==TIPO_ARCHIVO_ENUMERADO.video?this.video_extensionAceptados:this.imagen_extensionAceptados):[];
            };
            this.set_file_iden = (data) => {
                this.error_imagen = false;
                this.frm.iden_imagen = data.codigo;
            };
            this.handleRemovedFileExplicacion = (e) => {
                this.frm.iden_imagen = null;
            };
            //#endregion
            this.parseInt = (value) => value && value != "" ? Number(value).toFixed(0) : null;
            this.setJsonName = () => {
                let pregunta = this.frm.pregunta;
                this.JSON_DESPLEGABLE_INSTITUCIONAL.nombre = pregunta;
                this.JSON_DESPLEGABLE_LIBRE.nombre = pregunta;
                this.JSON_NUMERICO_ENTERO.nombre = pregunta;
                this.JSON_NUMERICO_DECIMAL.nombre = pregunta;
                this.JSON_SELECCION_UNICA.nombre = pregunta;
                this.JSON_SELECCION_MULTIPLE.nombre = pregunta;
                this.JSON_MATRIZ.nombre = pregunta;
            };
            //#region TIPO TABLA
            this.cargando_tabla = false;
            this._add_alternativa_table = () => {
                this.cargando_tabla = true;
                let data = this.array_alternativa_select;
                this.array_alternativa_select = [];
                setTimeout(() => {
                    let last = data.length;
                    data.push({ idx: last, peso: null, descripcion: null });
                    this.frmAlternativaDescripcion.push(new forms_1.FormControl(null, forms_1.Validators.required));
                    this.frmAlternativaPeso.push(new forms_1.FormControl(null, forms_1.Validators.required));
                    this.array_alternativa_select = data;
                    this.cargando_tabla = false;
                    this.cd.detectChanges();
                    this.cd.markForCheck();
                }, 350);
            };
            this._delete_alternativa_table = (idx) => {
                this.cargando_tabla = true;
                this.modal.confirm({
                    nzTitle: 'Eliminar',
                    nzContent: '¿Esta seguro de eliminar la alternativa seleccionada?',
                    nzOkText: 'Si',
                    nzOkType: 'primary',
                    nzCancelText: 'No',
                    nzOnOk: () => {
                        let table = this.array_alternativa_select;
                        this.array_alternativa_select = [];
                        setTimeout(() => {
                            table.splice(idx, 1);
                            this.frmAlternativaDescripcion.splice(idx, 1);
                            this.frmAlternativaPeso.splice(idx, 1);
                            table.forEach((f, index) => { f.idx = index; });
                            this.array_alternativa_select = table;
                            this.cargando_tabla = false;
                        }, 350);
                    },
                    nzOnCancel: () => {
                        this.cargando_tabla = false;
                    }
                });
            };
            //#endregion
            //#region TIPO MATRIZ
            this.frmFilaName = [];
            this.frmColumnaName = [];
            this._add_filas = () => {
                let data = this.array_filas; //this.JSON_MATRIZ.filas;
                this.array_filas = [];
                this.cargando_tabla = true;
                this.error_filas_matriz = false;
                setTimeout(() => {
                    let last = data.length;
                    let fila = {
                        idx: last,
                        nombre_fila: null
                    };
                    data.push(fila);
                    this.frmFilaName.push(new forms_1.FormControl(null, forms_1.Validators.required));
                    this.array_filas = data;
                    this.cargando_tabla = false;
                    this.cd.detectChanges();
                    this.cd.markForCheck();
                }, 350);
            };
            this._delete_fila = (idx) => {
                this.cargando_tabla = true;
                this.modal.confirm({
                    nzTitle: 'Eliminar',
                    nzContent: '¿Esta seguro de eliminar la fila seleccionada?',
                    nzOkText: 'Si',
                    nzOkType: 'primary',
                    nzCancelText: 'No',
                    nzOnOk: () => {
                        let table = this.array_filas;
                        this.array_filas = [];
                        setTimeout(() => {
                            table.splice(idx, 1);
                            this.frmFilaName.splice(idx, 1);
                            table.forEach((f, index) => { f.idx = index; });
                            this.array_filas = table;
                            this.cargando_tabla = false;
                        }, 350);
                    },
                    nzOnCancel: () => {
                        this.cargando_tabla = false;
                    }
                });
            };
            this.cargando_columnas = false;
            this.add_columnas = () => {
                let data = this.array_columnas;
                this.array_columnas = [];
                this.cargando_columnas = true;
                this.error_columnas_matriz = false;
                setTimeout(() => {
                    let last = data.length;
                    data.push({ idx: last, nombre_columna: null, forma: {} });
                    this.frmColumnaName.push(new forms_1.FormControl(null, forms_1.Validators.required));
                    this.array_columnas = data;
                    this.cargando_columnas = false;
                    this.cd.detectChanges();
                    this.cd.markForCheck();
                }, 350);
            };
            this._delete_columna = (idx) => {
                this.cargando_columnas = true;
                this.modal.confirm({
                    nzTitle: 'Eliminar',
                    nzContent: '¿Esta seguro de eliminar la columna seleccionada?',
                    nzOkText: 'Si',
                    nzOkType: 'primary',
                    nzCancelText: 'No',
                    nzOnOk: () => {
                        let table = this.array_columnas; //this.JSON_MATRIZ.columnas;
                        //this.JSON_MATRIZ.columnas=[];
                        this.array_columnas = [];
                        setTimeout(() => {
                            table.splice(idx, 1);
                            this.frmColumnaName.splice(idx, 1);
                            table.forEach((f, index) => { f.idx = index; });
                            //this.JSON_MATRIZ.columnas=table;
                            this.array_columnas = table;
                            this.cargando_columnas = false;
                        }, 350);
                    },
                    nzOnCancel: () => {
                        this.cargando_columnas = false;
                    }
                });
            };
            //#endregion
            //#region SAVE OR CANCEL FORM
            this.error_imagen = false;
            this.error_video = false;
            this.validURL = (str) => {
                var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
                    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
                    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
                return !!pattern.test(str);
            };
            this.error_filas_matriz = false;
            this.error_columnas_matriz = false;
            this.handleSaveFormularioModal = () => {
                let hasDuplicates = (a) => {
                    const noDups = new Set(a);
                    return a.length == noDups.size ? false : true;
                };
                let allow = true, required_filled = true;
                let frm_keys = Object.keys(this.frmPRG);
                let str = "<ul>";
                let filas_unicas = true;
                let columnas_unicas = true;
                for (let i = 0; i < frm_keys.length; i++) {
                    let frmkey = frm_keys[i];
                    if (this.frmPRG[frmkey].invalid) {
                        this.frmPRG[frmkey].markAsTouched();
                        this.frmPRG[frmkey].markAsDirty();
                        this.frmPRG[frmkey].updateValueAndValidity();
                        allow = false;
                        required_filled = false;
                    }
                }
                if (this.frm.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen) {
                    if (this.frm.iden_imagen == null || this.frm.iden_imagen == "") {
                        this.error_imagen = true;
                        allow = false;
                        required_filled = false;
                    }
                }
                if (this.frm.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.video) {
                    if (this.frm.url_video == null || this.frm.url_video == "" || this.validURL(this.frm.url_video) == false) {
                        this.error_video = true;
                        allow = false;
                        required_filled = false;
                    }
                }
                if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                    if (this.JSON_DESPLEGABLE_INSTITUCIONAL.tbl_data == null || this.JSON_DESPLEGABLE_INSTITUCIONAL.tbl_data == "") {
                        this.frmMaestroInstitucional.markAllAsTouched();
                        this.frmMaestroInstitucional.markAsDirty();
                        this.frmMaestroInstitucional.updateValueAndValidity();
                        allow = false;
                        required_filled = false;
                    }
                }
                let has_min_rows = true;
                if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.desplegable_libre ||
                    this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_multiple ||
                    this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                    if (this.array_alternativa_select.length < 2) {
                        allow = false;
                        has_min_rows = false;
                    }
                    else {
                        let is_filled = true;
                        this.frmAlternativaDescripcion.forEach(e => {
                            if (e.invalid) {
                                e.markAllAsTouched();
                                e.markAsDirty();
                                e.updateValueAndValidity();
                                allow = false;
                                required_filled = false,
                                    is_filled = false;
                            }
                        });
                    }
                }
                if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.numerico_decimal) {
                    if (this.JSON_NUMERICO_DECIMAL.nro_decimal == null || this.JSON_NUMERICO_DECIMAL.nro_decimal == 0) {
                        this.frmCantidadDigitos.markAllAsTouched();
                        this.frmCantidadDigitos.markAsDirty();
                        this.frmCantidadDigitos.updateValueAndValidity();
                        allow = false;
                        required_filled = false;
                    }
                }
                let has_min_filas = true, has_min_columnas = true;
                if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.matriz) {
                    this.error_filas_matriz = this.array_filas.length == 0 ? true : false;
                    this.error_columnas_matriz = this.array_columnas.length == 0 ? true : false;
                    if (this.array_filas.length == 0 || this.array_columnas.length == 0) {
                        allow = false;
                        has_min_filas = this.array_filas.length == 0 ? false : true;
                        has_min_columnas = this.array_columnas.length == 0 ? false : true;
                    }
                    this.frmColumnaName.forEach(e => {
                        if (e.invalid) {
                            e.markAllAsTouched();
                            e.markAsDirty();
                            e.updateValueAndValidity();
                            allow = false;
                            required_filled = false;
                        }
                    });
                    this.frmFilaName.forEach(e => {
                        if (e.invalid) {
                            e.markAllAsTouched();
                            e.markAsDirty();
                            e.updateValueAndValidity();
                            allow = false;
                            required_filled = false;
                        }
                    });
                }
                if (!allow) {
                    if (required_filled == false) {
                        str += "<li>Debe ingresar los campos obligatorios.</li>";
                    }
                    if (has_min_columnas == false) {
                        str += "<li>Debe contar con al menos una columna.</li>";
                    }
                    if (has_min_filas == false) {
                        str += "<li>Debe contar con al menos una fila.</li>";
                    }
                    if (has_min_rows == false) {
                        str += "<li>Debe contar con al menos dos alternativas.</li>";
                    }
                }
                else {
                    if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.matriz) {
                        let cols = [], rows = [];
                        this.frmColumnaName.forEach(e => {
                            cols.push(e.value);
                        });
                        this.frmFilaName.forEach(e => {
                            rows.push(e.value);
                        });
                        if (hasDuplicates(rows)) {
                            allow = false;
                            str += "<li>Existen filas repetidas.</li>";
                        }
                        if (hasDuplicates(cols)) {
                            allow = false;
                            str += "<li>Existen columnas repetidas.</li>";
                        }
                    }
                    if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_multiple
                        || this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_unica
                        || this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.desplegable_libre) {
                        let rows = [];
                        this.frmAlternativaDescripcion.forEach(e => {
                            rows.push(e.value);
                        });
                        if (hasDuplicates(rows)) {
                            allow = false;
                            str += "<li>Existen descripciones repetidas.</li>";
                        }
                    }
                }
                if (this.frmPRG.frmEsCondicionada.value) {
                    if (this.frm.id_pregunta_condicional == null) {
                        str += "<li>Debe seleccionar una pregunta.</li>";
                    }
                    else {
                        if (this.frm.json_respuesta_condicional) {
                            str += "<li>Debe ingresar una respuesta para la pregunta condicional.</li>";
                        }
                    }
                }
                str += "<ul>";
                if (!allow) {
                    this.createNotification('warning', 'Advertencia', str);
                }
                else {
                    let string_json = null;
                    if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                        string_json = JSON.stringify(this.JSON_DESPLEGABLE_INSTITUCIONAL);
                    }
                    if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.desplegable_libre) {
                        this.JSON_DESPLEGABLE_LIBRE.opciones = this.array_alternativa_select;
                        string_json = JSON.stringify(this.JSON_DESPLEGABLE_LIBRE);
                    }
                    if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.numerico_entero) {
                        string_json = JSON.stringify(this.JSON_NUMERICO_ENTERO);
                    }
                    if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.numerico_decimal) {
                        string_json = JSON.stringify(this.JSON_NUMERICO_DECIMAL);
                    }
                    if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                        this.JSON_SELECCION_UNICA.opciones = this.array_alternativa_select;
                        string_json = JSON.stringify(this.JSON_SELECCION_UNICA);
                    }
                    if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_multiple) {
                        this.JSON_SELECCION_MULTIPLE.opciones = this.array_alternativa_select;
                        string_json = JSON.stringify(this.JSON_SELECCION_MULTIPLE);
                    }
                    if (this.frm.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.matriz) {
                        this.JSON_MATRIZ.filas = this.array_filas;
                        this.JSON_MATRIZ.columnas = this.array_columnas; //idx,nombre_columna
                        string_json = JSON.stringify(this.JSON_MATRIZ);
                    }
                    if (this.frmPRG.frmTipoPregunta.value != this._TIPO_PREGUNTA.seleccion_unica) {
                        this.frm.es_condicional = false;
                    }
                    this.frm.json_alternativas = string_json;
                    let filter = Object.assign({}, this.frm);
                    filter.id_encuesta = this.id_encuesta;
                    if (this.frmPRG.frmSubCategoria.value) {
                        filter.id_sub_categoria = this.frmPRG.frmSubCategoria.value;
                    }
                    filter.files_only = true;
                    this.encuesta_s._SaveUpdatePregunta(filter).then(datos => {
                        if (datos.data) {
                            if (datos.data.Success) {
                                let str = '<ul>';
                                datos.data.Messages.forEach(message => {
                                    str += `<li>${message}</li>`;
                                });
                                str += '</ul>';
                                this.createNotification('success', 'Éxito', str);
                                this.onSaveDataPregunta.emit(true);
                            }
                            else {
                                let str = '<ul>';
                                datos.data.Messages.forEach(message => {
                                    str += `<li>${message}</li>`;
                                });
                                str += '</ul>';
                                this.createNotification('warning', 'Advertencia', str);
                            }
                        }
                    }).catch(err => { });
                    //guardar directo en bd a la de dios xdxdxd
                }
            };
            this.handleCancelarFormularioModal = () => {
                this.onCloseModal.emit(true);
            };
            //#endregion
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
            //#region  MATRIZ MODAL
            this.show_modal_matriz = false;
            this.selected_tipo_forma = null;
            this.selected_forma = {};
            this._modal_width = 400;
            this.vista_tipo = false;
            this.show_pre_modal_columna = (item) => {
                this.selected_col_idx = item.idx;
                this.vista_tipo = true;
                if (item.forma != undefined && item.forma && item.forma.id_tipo_pregunta) {
                    this.selected_tipo_forma = item.forma.id_tipo_pregunta;
                }
                else {
                    this.selected_tipo_forma = null;
                }
            };
            this.cerrar_pre_modal = () => {
                this.vista_tipo = false;
            };
            this._JSON_TIPO_PREGUNTA = _core_1.JSON_TIPO_PREGUNTA;
            this._show_modal_matriz = (selected_tipo) => {
                //idx,nombre_columna, forma: {}
                this.vista_tipo = false;
                this.selected_tipo_forma = selected_tipo;
                let item = this.array_columnas[this.selected_col_idx];
                if (selected_tipo == _core_1.TIPO_PREGUNTA.desplegable_institucional ||
                    selected_tipo == _core_1.TIPO_PREGUNTA.numerico_decimal) {
                    this._modal_width = 400;
                }
                else {
                    this._modal_width = 800;
                }
                if (item.forma && item.forma.id_tipo_pregunta == selected_tipo) {
                    let _forma = item.forma;
                    this.selected_forma = _forma;
                }
                else {
                    let _forma = selected_tipo == _core_1.TIPO_PREGUNTA.desplegable_institucional ?
                        {
                            id_tipo: 1,
                            nombre: "",
                            tbl_data: null,
                            respuesta: null
                        } : selected_tipo == _core_1.TIPO_PREGUNTA.desplegable_libre ?
                        {
                            id_tipo: 2,
                            nombre: "",
                            seleccion: "libre",
                            opciones: [],
                            respuesta: []
                        } : selected_tipo == _core_1.TIPO_PREGUNTA.numerico_entero ?
                        {
                            id_tipo: 3,
                            nombre: "",
                            respuesta: null
                        } : selected_tipo == _core_1.TIPO_PREGUNTA.numerico_decimal ?
                        {
                            id_tipo: 4,
                            nombre: "",
                            nro_decimal: null,
                            respuesta: null
                        } : selected_tipo == _core_1.TIPO_PREGUNTA.seleccion_unica ?
                        {
                            id_tipo: 5,
                            nombre: "",
                            seleccion: "unica",
                            opciones: [],
                            respuesta: []
                        } : {
                        id_tipo: 6,
                        nombre: "",
                        seleccion: "multiple",
                        opciones: [],
                        respuesta: []
                    };
                    this.selected_forma = _forma;
                    this.array_columnas[this.selected_col_idx].forma = _forma;
                }
                this.selected_forma.id_tipo_pregunta = selected_tipo;
                if (this.selected_tipo_forma != _core_1.TIPO_PREGUNTA.numerico_entero) {
                    this.nombre_columna = item.nombre_columna;
                    this.show_modal_matriz = true;
                }
            };
            this.handleOnCloseModalMatriz = (e) => {
                this.selected_forma = null;
                this.nombre_columna = null;
                this.show_modal_matriz = false;
            };
            this.handleOnSaveFormaColumnaMatriz = (forma) => {
                forma.nombre = this.nombre_columna;
                this.array_columnas[this.selected_col_idx].forma = forma;
                this.selected_forma = null;
                this.nombre_columna = null;
                this.show_modal_matriz = false;
            };
        }
        ngOnInit() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.array_filas = [];
                this.array_columnas = [];
                yield this.getComboInsitucional();
                yield this.getTipoPregunta();
                yield this.getTipoArchivos();
                yield this.getCategoriaList();
                yield this.getSubCategoriaList();
                let basic_frm = { id_pregunta: 0, id_encuesta: this.id_encuesta, es_obligatorio: true };
                let pregunta = Object.assign({}, this.pregunta);
                this.frm = pregunta ? pregunta : basic_frm;
                if (this.frm.id_pregunta != null && this.frm.id_pregunta > 0) {
                    let _id_categoria = pregunta.id_categoria;
                    this.respuesta_disparadora = JSON.parse(pregunta.json_respuesta_condicional);
                    this.array_sub_categoria = _id_categoria ? this.array_sub_categoria_all.filter(x => x.id_categoria == _id_categoria) : [];
                    this.frmPRG.frmSubCategoria.setValue(pregunta.id_sub_categoria);
                    this.frm.id_sub_categoria = pregunta.id_sub_categoria;
                    this.show_file_uploader = pregunta.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen ? true : false;
                    this.show_url = pregunta.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.video ? true : false;
                    if (this.es_por_defecto /*this.is_first*/) {
                        //this.frm.id_tipo_pregunta=TIPO_PREGUNTA.desplegable_institucional;
                        this.cargar_formato_byTipo(_core_1.TIPO_PREGUNTA.desplegable_institucional, true);
                    }
                    this.cd.markForCheck();
                    this.cd.detectChanges();
                    //manejo del json
                    this.JSON_INIT();
                }
                else {
                    this.frm.es_obligatorio = true;
                    this.frmPRG.frmEsObligatorio.setValue(true);
                    this.frmCantidadDigitos.setValue(null);
                    this.JSON_NUMERICO_DECIMAL.nro_decimal = null;
                    this.respuesta_disparadora = null;
                }
            });
        }
        JSON_INIT() {
            let json = JSON.parse(this.frm.json_alternativas);
            let id_tipo_pregunta = this.frm.id_tipo_pregunta;
            if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                this.JSON_DESPLEGABLE_INSTITUCIONAL = json;
            }
            if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.numerico_decimal) {
                this.JSON_NUMERICO_DECIMAL = json;
            }
            if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.desplegable_libre ||
                id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_unica ||
                id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_multiple) {
                json.opciones.forEach((e, _idx) => {
                    e.idx = _idx;
                    this.frmAlternativaDescripcion.push(new forms_1.FormControl(null, forms_1.Validators.required));
                    this.frmAlternativaPeso.push(new forms_1.FormControl(null));
                });
                this.array_alternativa_select = json.opciones;
                if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.desplegable_libre) {
                    this.JSON_DESPLEGABLE_LIBRE = json;
                }
                else if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                    this.JSON_SELECCION_UNICA = json;
                }
                else {
                    this.JSON_SELECCION_MULTIPLE = json;
                }
            }
            if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.matriz) {
                json.filas.forEach(e => {
                    this.frmFilaName.push(new forms_1.FormControl(null, forms_1.Validators.required));
                });
                json.columnas.forEach(e => {
                    this.frmColumnaName.push(new forms_1.FormControl(null, forms_1.Validators.required));
                });
                this.array_filas = json.filas;
                this.array_columnas = json.columnas;
                this.JSON_MATRIZ = json;
            }
        }
        //#region COMOBS
        getComboInsitucional() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.sis_enumerado_s.GetEnumeradoByTipoEnumerado(_core_1.SIS_TIPO_ENUMERADO.tipo_maestro_institucional).then(datos => {
                    this.array_maestro_institucional = datos.data.filter(x => x.es_eliminado == false);
                }).catch(err => { });
                //
            });
        }
        getTipoArchivos() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.sis_enumerado_s.GetEnumeradoByTipoEnumerado(_core_1.SIS_TIPO_ENUMERADO.tipo_archivo).then(datos => {
                    this.array_tipo_file = datos.data.filter(x => x.es_eliminado == false);
                }).catch(err => { });
            });
        }
        getTipoPregunta() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.sis_enumerado_s.GetEnumeradoByTipoEnumerado(_core_1.SIS_TIPO_ENUMERADO.tipo_pregunta).then(datos => {
                    this.array_tipo_pregunta = datos.data.filter(x => x.es_eliminado == false);
                    /*if(this.is_first){
                      this.frm.id_tipo_pregunta=TIPO_PREGUNTA.desplegable_institucional;
                      this.cargar_formato_byTipo(TIPO_PREGUNTA.desplegable_institucional);
                    }*/
                }).catch(err => { });
            });
        }
        getCategoriaList() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.categoria_s._getCategoriaList().then(datos => {
                    this.array_categoria = datos.data.filter(x => x.es_eliminado == false);
                }).catch(err => { });
            });
        }
        getSubCategoriaList() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.categoria_s._getSubCategoriaList().then(datos => {
                    this.array_sub_categoria_all = datos.data.filter(x => x.es_eliminado == false);
                }).catch(err => { });
            });
        }
        hideCondicional() {
            let val = this.frmPRG.frmEsCondicional.value;
            if (val) {
                this.frmPRG.frmEsCondicionada.setValue(false);
            }
        }
    };
    ReModalRegistroPreguntaExtranetComponent.ctorParameters = () => [
        { type: _core_1.SisEnumeradoService },
        { type: _core_1.CategoriaService },
        { type: _core_1.EncuestasService },
        { type: forms_1.FormBuilder },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: ng_zorro_antd_1.NzModalService },
        { type: core_1.ChangeDetectorRef }
    ];
    tslib_1.__decorate([
        core_1.Input()
    ], ReModalRegistroPreguntaExtranetComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ReModalRegistroPreguntaExtranetComponent.prototype, "is_first", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ReModalRegistroPreguntaExtranetComponent.prototype, "es_por_defecto", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ReModalRegistroPreguntaExtranetComponent.prototype, "pregunta", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ReModalRegistroPreguntaExtranetComponent.prototype, "id_encuesta", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ReModalRegistroPreguntaExtranetComponent.prototype, "isVisibleModal", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ReModalRegistroPreguntaExtranetComponent.prototype, "preguntas_condicionales", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ReModalRegistroPreguntaExtranetComponent.prototype, "onCloseModal", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ReModalRegistroPreguntaExtranetComponent.prototype, "onSaveDataPregunta", void 0);
    ReModalRegistroPreguntaExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-re-modal-registro-pregunta-extranet',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./re-modal-registro-pregunta-extranet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/components/re-modal-registro-pregunta-extranet/re-modal-registro-pregunta-extranet.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./re-modal-registro-pregunta-extranet.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/components/re-modal-registro-pregunta-extranet/re-modal-registro-pregunta-extranet.component.css")).default]
        })
    ], ReModalRegistroPreguntaExtranetComponent);
    exports.ReModalRegistroPreguntaExtranetComponent = ReModalRegistroPreguntaExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/components/re-preguntas-encuesta-extranet/re-preguntas-encuesta-extranet.component.css":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/components/re-preguntas-encuesta-extranet/re-preguntas-encuesta-extranet.component.css ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lzdGVtYS9wYWdlcy9nZXN0aW9uLWV4dHJhbmV0L3BhZ2VzL2VuY3Vlc3Rhcy1leHRyYW5ldC9yZS1lZGl0LWVuY3Vlc3RhLWRhdGEtZXh0cmFuZXQvY29tcG9uZW50cy9yZS1wcmVndW50YXMtZW5jdWVzdGEtZXh0cmFuZXQvcmUtcHJlZ3VudGFzLWVuY3Vlc3RhLWV4dHJhbmV0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/components/re-preguntas-encuesta-extranet/re-preguntas-encuesta-extranet.component.ts":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/components/re-preguntas-encuesta-extranet/re-preguntas-encuesta-extranet.component.ts ***!
  \******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, _core_1, ng_zorro_antd_1, ngx_spinner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let RePreguntasEncuestaExtranetComponent = class RePreguntasEncuestaExtranetComponent {
        constructor(encuesta_s, sis_enumerado_s, notification, spinner, modal) {
            this.encuesta_s = encuesta_s;
            this.sis_enumerado_s = sis_enumerado_s;
            this.notification = notification;
            this.spinner = spinner;
            this.modal = modal;
            this.onPublishSuccess = new core_1.EventEmitter();
            this.onGoEncuestados = new core_1.EventEmitter();
            this.onGoDatos = new core_1.EventEmitter();
            this.PreguntasList = [];
            this.PreguntasList_Condicionales = [];
            this.cargando_tabla = true;
            this.pageIndex = 1;
            this.total = 0;
            this.pageSize = 1000;
            this.get_list = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.cargando_tabla = true;
                let filtro = { id_encuesta: this.encuesta_data.encuesta.id_encuesta };
                this.spinner.show();
                yield this.getPreguntasCondicionales();
                this.encuesta_s._GetPreguntasByEncuesta(filtro, this.pageIndex, this.pageSize)
                    .then((datos) => {
                    this.spinner.hide();
                    if (datos && datos.data && datos.data.Data) {
                        let data = datos.data.Data;
                        data.forEach((e, _idx) => { e.idx = _idx; });
                        this.PreguntasList = data;
                        this.total = datos.data.TotalRows;
                    }
                    this.cargando_tabla = false;
                })
                    .catch(() => {
                    this.cargando_tabla = false;
                    this.spinner.hide();
                });
            });
            this.handleClickLimpiar = () => {
                this.pageIndex = 1;
                this.get_list();
            };
            this.handleClickBuscar = (reset = false) => {
                if (reset) {
                    this.pageIndex = 1;
                }
                this.get_list();
            };
            this.save_update_preguntas = (publicar = false, ir_siguiente = false) => {
                //se cambia estado en la bd
                let noValidos = this.PreguntasList.filter(f => f.id_tipo_archivo == null);
                //valida categoria y tipo archivo
                if (noValidos.length > 0) {
                    this.createNotification('warning', 'Advertencia', "<ul><li>Debe completar la configuración de la pregunta de dependencia.</li></ul>");
                }
                else {
                    this.createNotification('success', 'Éxito', "<ul><li>Guardado con éxito.</li></ul>");
                    if (ir_siguiente) {
                        this.onPublishSuccess.emit(true);
                    }
                }
            };
            this.handleOnCloseModal = (e) => {
                this.show_modal_pregunta = false;
            };
            this.handleOnSaveDataPregunta = (e) => {
                this.show_modal_pregunta = false;
                this.get_list();
            };
            this.title_modal = "";
            this.show_modal_pregunta = false;
            this.is_first = false;
            this.es_por_defecto = false;
            this.md_add_edit_pregunta = (idx = null, por_defecto = false) => {
                let item = idx != null ? this.PreguntasList[idx] : null;
                this.title_modal = item ? "Editar" : "Agregar";
                let selected_item = item;
                this.selected_pregunta = selected_item;
                this.es_por_defecto = por_defecto;
                if (idx != null) {
                    this.is_first = idx == 0 ? true : false;
                }
                else {
                    this.is_first = this.PreguntasList.length > 0 ? false : true;
                }
                this.show_modal_pregunta = true;
            };
            this.md_delete_pregunta = (idx) => {
                let item = this.PreguntasList[idx];
                this.modal.confirm({
                    nzTitle: 'Eliminar',
                    nzContent: '¿Esta seguro de eliminar la pregunta seleccionada?',
                    nzOkText: 'Si',
                    nzOkType: 'primary',
                    nzCancelText: 'No',
                    nzOnOk: () => {
                        this.encuesta_s._EnableDisable(item.id_pregunta, "pregunta")
                            .then((datos) => {
                            if (datos.data) {
                                if (datos.data.Success) {
                                    let str = '<ul>';
                                    datos.data.Messages.forEach(message => {
                                        str += `<li>${message}</li>`;
                                    });
                                    str += '</ul>';
                                    this.createNotification('success', 'Éxito', str);
                                    this.get_list();
                                }
                            }
                        }).catch(() => { });
                    },
                    nzOnCancel: () => { }
                });
            };
            this.send_to_datos = () => {
                this.onGoDatos.emit(true);
            };
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
        }
        ngOnInit() {
            this.get_list();
        }
        getPreguntasCondicionales() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                let filtro = { id_encuesta: this.encuesta_data.encuesta.id_encuesta, mostar_solo_condicional: true };
                yield this.encuesta_s._GetPreguntasByEncuesta(filtro, 0, 1000)
                    .then((datos) => {
                    this.spinner.hide();
                    if (datos && datos.data && datos.data.Data) {
                        let data = datos.data.Data;
                        this.PreguntasList_Condicionales = data;
                    }
                })
                    .catch(() => {
                    this.spinner.hide();
                });
            });
        }
        publicar() {
            this.encuesta_s._PublicarEncuesta(this.id_encuesta)
                .then((datos) => {
                if (datos.data) {
                    let str = '<ul>';
                    datos.data.Messages.forEach(message => {
                        str += `<li>${message}</li>`;
                    });
                    str += '</ul>';
                    if (datos.data.Success) {
                        this.createNotification('success', 'Éxito', str);
                        this.get_list();
                        this.onPublishSuccess.emit(true);
                    }
                    else {
                        this.createNotification('warning', 'Adveretencia', str);
                    }
                }
            }).catch(() => { });
        }
    };
    RePreguntasEncuestaExtranetComponent.ctorParameters = () => [
        { type: _core_1.EncuestasService },
        { type: _core_1.SisEnumeradoService },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: ng_zorro_antd_1.NzModalService }
    ];
    tslib_1.__decorate([
        core_1.Input()
    ], RePreguntasEncuestaExtranetComponent.prototype, "encuesta_data", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], RePreguntasEncuestaExtranetComponent.prototype, "id_encuesta", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], RePreguntasEncuestaExtranetComponent.prototype, "onPublishSuccess", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], RePreguntasEncuestaExtranetComponent.prototype, "onGoEncuestados", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], RePreguntasEncuestaExtranetComponent.prototype, "onGoDatos", void 0);
    RePreguntasEncuestaExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-re-preguntas-encuesta-extranet',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./re-preguntas-encuesta-extranet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/components/re-preguntas-encuesta-extranet/re-preguntas-encuesta-extranet.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./re-preguntas-encuesta-extranet.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/components/re-preguntas-encuesta-extranet/re-preguntas-encuesta-extranet.component.css")).default]
        })
    ], RePreguntasEncuestaExtranetComponent);
    exports.RePreguntasEncuestaExtranetComponent = RePreguntasEncuestaExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/re-edit-encuesta-data-extranet.component.css":
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/re-edit-encuesta-data-extranet.component.css ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lzdGVtYS9wYWdlcy9nZXN0aW9uLWV4dHJhbmV0L3BhZ2VzL2VuY3Vlc3Rhcy1leHRyYW5ldC9yZS1lZGl0LWVuY3Vlc3RhLWRhdGEtZXh0cmFuZXQvcmUtZWRpdC1lbmN1ZXN0YS1kYXRhLWV4dHJhbmV0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/re-edit-encuesta-data-extranet.component.ts":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/re-edit-encuesta-data-extranet.component.ts ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, forms_1, router_1, _core_1, ngx_spinner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let ReEditEncuestaDataExtranetComponent = class ReEditEncuestaDataExtranetComponent {
        constructor(activatedRoute, ref_change, _formBuilder, router, encuesta_s, spinner) {
            this.activatedRoute = activatedRoute;
            this.ref_change = ref_change;
            this._formBuilder = _formBuilder;
            this.router = router;
            this.encuesta_s = encuesta_s;
            this.spinner = spinner;
            this.id_encuesta = 0;
            this.encuesta_data = {};
            this.data_valid = false;
            this.tabs = [
                { title: "Datos", disabled: false },
                { title: "Preguntas", disabled: !this.data_valid },
            ];
            this.index_tab = null;
            this.disable_preguntas = true;
            this.show_tab_by_index = (index_tab) => {
                this.index_tab = index_tab;
            };
            this.show_encuestados_tab = false;
            this.handleChangeAllPersonalStatus = (status) => {
                if (status != undefined) {
                    if (!status) {
                        this.tabs = [
                            { title: "Datos", disabled: false },
                            { title: "Preguntas", disabled: !this.data_valid },
                            { title: "Encuestados", disabled: !this.data_valid }
                        ];
                    }
                    else {
                        this.tabs = [
                            { title: "Datos", disabled: false },
                            { title: "Preguntas", disabled: !this.data_valid },
                        ];
                    }
                    this.show_encuestados_tab = status;
                    this.ref_change.detectChanges();
                    this.ref_change.markForCheck();
                }
            };
            this.handleSaveUpdateEncuesta = (datos) => {
                this.encuesta_data = Object.assign({}, datos);
                this.id_encuesta = datos.encuesta.id_encuesta;
                this.data_valid = true;
                this.tabs.forEach(e => {
                    e.disabled = false;
                });
                this.index_tab = 1;
            };
            this.handlePublishSuccess = (is_publised) => {
                if (is_publised) {
                    this.router.navigate(['/sistema/gestion-extranet/gestor-encuestas-extranet']);
                }
            };
            this.handleGoDatos = (go_previous) => {
                if (go_previous) {
                    this.index_tab = 0;
                }
            };
            this.handleGoEncuestados = (go_next) => {
                if (go_next) {
                    this.index_tab = 2;
                }
            };
            this.handleGoPreguntas = (go_previous) => {
                if (go_previous) {
                    this.index_tab = 1;
                }
            };
        }
        ngOnInit() {
            this.activatedRoute.paramMap.subscribe(params => {
                const id = params.get('id');
                if (id && Number(id) > 0) {
                    this.id_encuesta = Number(id);
                    //encuesta_data
                    this.spinner.show();
                    this.encuesta_s._getEncuestaDataByID(Number(id)).then(datos => {
                        this.encuesta_data = datos.data;
                        this.data_valid = true;
                        if (this.encuesta_data.encuesta.es_todos) {
                            if (this.encuesta_data.encuesta.es_con_seccion_pregunta) {
                                this.tabs = [
                                    { title: "Datos", disabled: false },
                                    { title: "Secciones", disabled: !this.data_valid },
                                    { title: "Preguntas", disabled: !this.data_valid }
                                ];
                            }
                            else {
                                this.tabs = [
                                    { title: "Datos", disabled: false },
                                    { title: "Preguntas", disabled: !this.data_valid }
                                ];
                            }
                        }
                        else {
                            if (this.encuesta_data.encuesta.es_con_seccion_pregunta) {
                                this.tabs = [
                                    { title: "Datos", disabled: false },
                                    { title: "Secciones", disabled: false },
                                    { title: "Preguntas", disabled: false }
                                ];
                            }
                            else {
                                this.tabs = [
                                    { title: "Datos", disabled: false },
                                    { title: "Preguntas", disabled: false }
                                ];
                            }
                        }
                        this.index_tab = 0;
                        this.ref_change.detectChanges();
                        this.ref_change.markForCheck();
                        this.spinner.hide();
                    }).catch(err => { });
                }
                else {
                    this.index_tab = 0;
                    this.tabs = [
                        { title: "Datos", disabled: false },
                        { title: "Preguntas", disabled: true },
                        { title: "Encuestados", disabled: true }
                    ];
                }
            });
        }
    };
    ReEditEncuestaDataExtranetComponent.ctorParameters = () => [
        { type: router_1.ActivatedRoute },
        { type: core_1.ChangeDetectorRef },
        { type: forms_1.FormBuilder },
        { type: router_1.Router },
        { type: _core_1.EncuestasService },
        { type: ngx_spinner_1.NgxSpinnerService }
    ];
    ReEditEncuestaDataExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-re-edit-encuesta-data-extranet',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./re-edit-encuesta-data-extranet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/re-edit-encuesta-data-extranet.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./re-edit-encuesta-data-extranet.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/re-edit-encuesta-data-extranet/re-edit-encuesta-data-extranet.component.css")).default]
        })
    ], ReEditEncuestaDataExtranetComponent);
    exports.ReEditEncuestaDataExtranetComponent = ReEditEncuestaDataExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/subir-resultados-extranet/subir-resultados-extranet.component.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/subir-resultados-extranet/subir-resultados-extranet.component.css ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lzdGVtYS9wYWdlcy9nZXN0aW9uLWV4dHJhbmV0L3BhZ2VzL2VuY3Vlc3Rhcy1leHRyYW5ldC9zdWJpci1yZXN1bHRhZG9zLWV4dHJhbmV0L3N1YmlyLXJlc3VsdGFkb3MtZXh0cmFuZXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/subir-resultados-extranet/subir-resultados-extranet.component.ts":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/subir-resultados-extranet/subir-resultados-extranet.component.ts ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, platform_browser_1, _core_1, ng_zorro_antd_1, ngx_spinner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let SubirResultadosExtranetComponent = class SubirResultadosExtranetComponent {
        constructor(notification, encuesta_s, spinner, comun_s, _fileService, _authService, sanitizer, ref_change, _alertService) {
            this.notification = notification;
            this.encuesta_s = encuesta_s;
            this.spinner = spinner;
            this.comun_s = comun_s;
            this._fileService = _fileService;
            this._authService = _authService;
            this.sanitizer = sanitizer;
            this.ref_change = ref_change;
            this._alertService = _alertService;
            this.visible = false;
            this.selected_encuesta = {};
            this.onCloseModalResultados = new core_1.EventEmitter();
            this.onCloseSaveModalResultados = new core_1.EventEmitter();
            this.frm = {
                iden_completo: null,
                iden_encuestado: null,
                nro_informe: null,
            };
            this.error_nro_informe = false;
            this.valid_nro_informe = false;
            this.datos_sitradoc = null;
            this.show_modal_pdf = false;
            this._loaded_pdf_informe_sitradoc = false;
            this.onGetSavedFileByCode = (codigo, nro_informe = null) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                this._fileService.getFilesById(codigo).then(resp => {
                    if (resp.Success) {
                        if (resp.Data) {
                            if (resp.Data[0].content != null) {
                                var binary = atob(resp.Data[0].content.replace(/\s/g, ''));
                                var len = binary.length;
                                var buffer = new ArrayBuffer(len);
                                var view = new Uint8Array(buffer);
                                for (var i = 0; i < len; i++) {
                                    view[i] = binary.charCodeAt(i);
                                }
                                let contentType = resp.Data[0].contentType;
                                var blob = new Blob([view], { type: contentType });
                                var urlArchivo = 'data:' + contentType + ';base64,' + resp.Data[0].content;
                                this._loaded_pdf_informe_sitradoc = true;
                                this._urlArchivo_sitradoc = this.sanitizer.bypassSecurityTrustResourceUrl(urlArchivo);
                                this.createNotification('success', 'Éxito', 'Informe cargado con éxito desde SITRADOC.');
                                this.disabled_view_btn = false;
                            }
                            else {
                                this.createNotification('warning', 'Error de archivo', "El informe " + nro_informe + " existe en SITRADOC, pero el archivo no pudo ser cargado.");
                                //this._alertService.open("error",resp.Data[0].mensajeError,'Error de imagen');
                                this._loaded_pdf_informe_sitradoc = false;
                                this.disabled_view_btn = true;
                            }
                        }
                        else {
                            this.createNotification('error', 'Error de archivo', "Sin datos para cargar");
                            this._loaded_pdf_informe_sitradoc = false;
                            this.disabled_view_btn = true;
                        }
                    }
                    if (!resp.Success) {
                        this.createNotification('error', 'Error de archivo', resp.Messages[0]);
                        this._loaded_pdf_informe_sitradoc = false;
                        this.disabled_view_btn = true;
                    }
                });
            });
            this.disabled_view_btn = true;
            this.estaGuardando = false;
            this.tiposMimePermitidos = ["application/pdf"];
            this.imagen_MimePermitidos = ["application/pdf"];
            this.imagen_extensionAceptados = [".pdf"];
            this.pesoMaximoEnMB = _core_1.FILE_SETTINGS.maxFileSize;
            this.url = "/api/comun/descargar-archivo";
            this.validar_fup = false;
            this.error_completo = false;
            this.error_encuestado = false;
            this.set_imagen_iden = (data, tipo) => {
                if (tipo == 1) {
                    this.error_completo = false;
                    this.frm.iden_completo = data.codigo;
                }
                else {
                    this.error_encuestado = false;
                    this.frm.iden_encuestado = data.codigo;
                }
                this.ref_change.detectChanges();
                this.ref_change.markForCheck();
            };
            this.handleRemovedFilePresentacion = (e, tipo) => {
                if (tipo == 1) {
                    this.frm.iden_completo = null;
                    this.error_completo = false;
                }
                else {
                    this.frm.iden_encuestado = null;
                    this.error_encuestado = false;
                }
                this.ref_change.detectChanges();
                this.ref_change.markForCheck();
            };
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
            this._fileService.rutaBase = this._authService.GetConfig().Urls.URL_GA_UI;
        }
        ngOnInit() {
            let selected = this.selected_encuesta;
            this.frm.iden_completo = selected.iden_pdf_resultados_completo;
            this.frm.iden_encuestado = selected.iden_pdf_resultados;
            this.frm.nro_informe = selected.nro_informe;
        }
        search_nro_SITRADOC() {
            this.spinner.show();
            let content = this.frm.nro_informe;
            this.encuesta_s.GetDocumentoDataSITRADOC(content).then((datos) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (datos.data.Data) {
                    this.valid_nro_informe = true;
                    this.error_nro_informe = false;
                    let data_sitradoc_indicativo = datos.data.Data;
                    if (data_sitradoc_indicativo.cod_archivo) {
                        //data_sitradoc_interno
                        let doc = data_sitradoc_indicativo.cod_archivo;
                        yield this.onGetSavedFileByCode(doc, content);
                        this.datos_sitradoc = data_sitradoc_indicativo;
                    }
                    else {
                        this.createNotification('warning', 'Advertencia', 'El informe ' + content + ' exíste en SITRADOC, pero no cuenta con ningún archivo asociado.');
                        this.valid_nro_informe = false;
                        this._loaded_pdf_informe_sitradoc = false;
                        this.error_nro_informe = true;
                        this.disabled_view_btn = true;
                    }
                }
                else {
                    this._loaded_pdf_informe_sitradoc = false;
                    let str = '<ul>';
                    str += '<li>No se encontraron resultados para los datos ingresado</li>';
                    str += '</ul>';
                    this.createNotification('warning', 'Advertencia', str);
                    this.valid_nro_informe = false;
                    this.error_nro_informe = true;
                    this.disabled_view_btn = true;
                }
                this.spinner.hide();
                this.ref_change.detectChanges();
                this.ref_change.markForCheck();
            })).catch(err => { this.spinner.hide(); });
        }
        see_documento() {
            this.show_modal_pdf = true;
        }
        close_modal_pdf() {
            this.show_modal_pdf = false;
        }
        clean_nro() {
            this.frm.nro_informe = null;
            this.error_nro_informe = false;
            this.valid_nro_informe = false;
        }
        save_and_close() {
            let allow = true;
            if (this.frm.iden_completo == null) {
                this.error_completo = true;
            }
            if (this.frm.iden_encuestado == null) {
                this.error_encuestado = true;
            }
            if (this.frm.nro_informe == null || !this.valid_nro_informe) {
                this.error_nro_informe = true;
            }
            if (allow && this.valid_nro_informe) {
                this.spinner.show();
                let _frm = Object.assign({}, this.frm);
                this.encuesta_s._UpdateInformeEncuestas(this.selected_encuesta.id_encuesta, _frm.nro_informe, _frm.iden_encuestado, _frm.iden_completo).then(datos => {
                    this.createNotification('success', 'Éxito', 'Se ha registrado con éxito');
                    this.valid_nro_informe = true;
                    this.onCloseSaveModalResultados.emit(true);
                    this.spinner.hide();
                    this.ref_change.detectChanges();
                    this.ref_change.markForCheck();
                }).catch(err => { this.spinner.hide(); });
            }
            else {
                this.createNotification('warning', 'Advertencia', 'Debe ingresar los campos obligatorios');
            }
        }
        close_modal() {
            this.onCloseModalResultados.emit(true);
        }
    };
    SubirResultadosExtranetComponent.ctorParameters = () => [
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: _core_1.EncuestasService },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: _core_1.ComunService },
        { type: _core_1.FileService },
        { type: _core_1.AuthService },
        { type: platform_browser_1.DomSanitizer },
        { type: core_1.ChangeDetectorRef },
        { type: _core_1.AlertService }
    ];
    tslib_1.__decorate([
        core_1.Input()
    ], SubirResultadosExtranetComponent.prototype, "visible", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], SubirResultadosExtranetComponent.prototype, "selected_encuesta", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], SubirResultadosExtranetComponent.prototype, "onCloseModalResultados", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], SubirResultadosExtranetComponent.prototype, "onCloseSaveModalResultados", void 0);
    SubirResultadosExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-subir-resultados-extranet',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./subir-resultados-extranet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/subir-resultados-extranet/subir-resultados-extranet.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./subir-resultados-extranet.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/subir-resultados-extranet/subir-resultados-extranet.component.css")).default]
        })
    ], SubirResultadosExtranetComponent);
    exports.SubirResultadosExtranetComponent = SubirResultadosExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/datos-encuesta-view-extranet/datos-encuesta-view-extranet.component.css":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/datos-encuesta-view-extranet/datos-encuesta-view-extranet.component.css ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ck-editor__editable_inline {\r\n    min-height: 250px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaXN0ZW1hL3BhZ2VzL2dlc3Rpb24tZXh0cmFuZXQvcGFnZXMvZW5jdWVzdGFzLWV4dHJhbmV0L3Zpc3RhLWVuY3Vlc3RhLWV4dHJhbmV0L2NvbXBvbmVudHMvZGF0b3MtZW5jdWVzdGEtdmlldy1leHRyYW5ldC9kYXRvcy1lbmN1ZXN0YS12aWV3LWV4dHJhbmV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Npc3RlbWEvcGFnZXMvZ2VzdGlvbi1leHRyYW5ldC9wYWdlcy9lbmN1ZXN0YXMtZXh0cmFuZXQvdmlzdGEtZW5jdWVzdGEtZXh0cmFuZXQvY29tcG9uZW50cy9kYXRvcy1lbmN1ZXN0YS12aWV3LWV4dHJhbmV0L2RhdG9zLWVuY3Vlc3RhLXZpZXctZXh0cmFuZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jay1lZGl0b3JfX2VkaXRhYmxlX2lubGluZSB7XHJcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/datos-encuesta-view-extranet/datos-encuesta-view-extranet.component.ts":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/datos-encuesta-view-extranet/datos-encuesta-view-extranet.component.ts ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js"), __webpack_require__(/*! ../../../../../../../../../../../external/ckeditor5-build-decoupled-document */ "./external/ckeditor5-build-decoupled-document/build/ckeditor.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, forms_1, _core_1, ng_zorro_antd_1, ngx_spinner_1, DecoupledEditor) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    DecoupledEditor.defaultConfig = _core_1.DecoupledInit.defaultConfig;
    let DatosEncuestaViewExtranetComponent = class DatosEncuestaViewExtranetComponent {
        constructor(_formBuilder, notification, encuesta_s, spinner, cd, sis_enumerado_s) {
            this._formBuilder = _formBuilder;
            this.notification = notification;
            this.encuesta_s = encuesta_s;
            this.spinner = spinner;
            this.cd = cd;
            this.sis_enumerado_s = sis_enumerado_s;
            this.onGoPreguntas = new core_1.EventEmitter();
            this.array_tipo_file = [];
            this.frm_main_data = {
                id_encuesta: 0,
                titulo: null,
                encabezado: null,
                objetivo: null,
                descripcion: null,
                fecha_inicio: null,
                fecha_fin: null,
                tiempo_estimado: null,
                es_anonima: false,
                mensaje_es_anonima: null,
                es_todos: true,
                iden_imagen_presentacion: null,
                mensaje_corto_presentacion: null,
                id_estado: 0,
                estado_name: null
            };
            this.frm_welcome_data = { iden_imagen: null };
            this.frm_greet_data = { iden_imagen: null };
            this.tags = [];
            this.editor = DecoupledEditor;
            this.configEditor = _core_1.DecoupledInit.configEditor;
            this.expresion = /\[\[[A-Z0-9\_]+\]\]/g;
            this.show_mensaje_bienvenida_anonima = (status) => {
                this._show_mensaje_bienvenida_anonima = status;
            };
            this.show_tab_encuestados = (status) => {
                //this.onChangeAllPersonalStatus.emit(status);
            };
            this._show_mensaje_bienvenida_anonima = false;
            this.estaGuardando = false;
            this.tiposMimePermitidos = ["image/png", "image/jpeg", "image/gif"];
            this.imagen_MimePermitidos = ["image/png", "image/jpeg", "image/gif"];
            this.imagen_extensionAceptados = [".png", ".jpeg", ".gif"];
            this.pesoMaximoEnMB = _core_1.FILE_SETTINGS.maxFileSize;
            this.url = "/api/comun/descargar-archivo";
            this.validar_fup = false;
            this.set_imagen_iden = (data) => {
                this.error_imagen_segundo_plano = false;
                this.frm_main_data.iden_imagen_presentacion = data.codigo;
            };
            this.error_indicaciones = false;
            this.audio_estaGuardando = false;
            this.set_audio_iden = (data) => {
                this.frm_welcome_data.iden_audio = data.codigo;
            };
            this.error_file_welcome = false;
            this.error_url_welcome = false;
            this.show_file_uploader = false;
            this.selected_tipo = '';
            this.show_file_input_welcome = false;
            this._extensionAceptados_welcome = [];
            this.video_extensionAceptados = [".mp4"];
            this.show_url_welcome = false;
            //imagen_extensionAceptados= [".png", ".jpeg"];
            this.set_tipo_file_permitidos_welcome = () => {
                let tipo = this.frm_welcome_data.id_tipo_archivo;
                if (tipo) {
                    let tipo_file = this.array_tipo_file.find(f => f.id_enumerado == tipo);
                    this.selected_tipo = tipo_file ? tipo_file.nombre : '';
                    this.show_file_input_welcome = (tipo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen ? true : false);
                    this.show_url_welcome = (tipo == _core_1.TIPO_ARCHIVO_ENUMERADO.video ? true : false);
                }
                else {
                    this.show_file_input_welcome = false;
                    this.show_url_welcome = false;
                }
            };
            this.set_file_iden_welcome = (data) => {
                this.error_file_welcome = false;
                this.frm_welcome_data.iden_imagen = data.codigo;
            };
            this.error_imagen_segundo_plano = false;
            this.error_file_agradecimiento = false;
            this.show_file_agradecimiento = false;
            this.show_input_file = false;
            this.show_url = false;
            this._extensionAceptados_agradecimiento = [];
            this.set_tipo_file_permitidos_agradecimiento = () => {
                let tipo = this.frm_greet_data.id_tipo_archivo;
                if (tipo) {
                    let tipo_file = this.array_tipo_file.find(f => f.id_enumerado == tipo);
                    this.selected_tipo = tipo_file ? tipo_file.nombre : '';
                    this.show_file_agradecimiento = tipo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen ? true : false;
                    this.show_url = tipo == _core_1.TIPO_ARCHIVO_ENUMERADO.video ? true : false;
                    //this._extensionAceptados_agradecimiento=tipo?(tipo==TIPO_ARCHIVO_ENUMERADO.video?this.video_extensionAceptados:):[];
                }
            };
            this.set_file_iden_agradecimiento = (data) => {
                this.error_file_agradecimiento = false;
                this.frm_greet_data.iden_imagen = data.codigo;
            };
            this.set_audio_iden_agradecimiento = (data) => {
                this.frm_greet_data.iden_audio = data.codigo;
            };
            this.disabledStartDate = (startValue) => {
                if (!startValue || this.frm_main_data.fecha_fin == null) {
                    return false;
                }
                else {
                    return startValue.getTime() > new Date(this.frm_main_data.fecha_fin).getTime();
                }
            };
            this.disabledEndDate = (endValue) => {
                if (!endValue || this.frm_main_data.fecha_inicio == null) {
                    return false;
                }
                else {
                    return endValue.getTime() <= new Date(this.frm_main_data.fecha_inicio).getTime();
                }
            };
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
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
        }
        ngOnInit() {
            this.create_form();
            this.getTipoArchivos();
            let basic_form = { id_encuesta: 0, id_estado: _core_1.ESTADO_ENCUESTA_ENUMERADO.registrado, es_todos: true, es_anonima: false };
            let basic_welcome = {};
            let basic_greet = {};
            this._show_mensaje_bienvenida_anonima = this.encuesta_data.encuesta ? this.encuesta_data.encuesta.es_todos : false;
            this.frm_main_data = this.encuesta_data.encuesta ? this.encuesta_data.encuesta : basic_form;
            this.frm_welcome_data = this.encuesta_data.bienvenida ? this.encuesta_data.bienvenida : basic_welcome;
            this.frm_greet_data = this.encuesta_data.agradecimiento ? this.encuesta_data.agradecimiento : basic_greet;
            this._show_mensaje_bienvenida_anonima = this.frm_main_data.es_anonima;
            this.show_file_agradecimiento = this.frm_greet_data.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen ? true : false;
            this.show_url = this.frm_greet_data.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.video ? true : false;
            this.show_url_welcome = this.frm_welcome_data.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.video ? true : false;
            this.show_file_input_welcome = this.frm_welcome_data.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen ? true : false;
            this.formMACRO.controls.UrlMultimediaAgradecimiento.setValue(this.frm_greet_data.url_video);
            this.formMACRO.controls.UrlMultimediaBienvenida.setValue(this.frm_welcome_data.url_video);
            this.cd.markForCheck();
            this.cd.detectChanges();
        }
        getTipoArchivos() {
            this.sis_enumerado_s.GetEnumeradoByTipoEnumerado(_core_1.SIS_TIPO_ENUMERADO.tipo_archivo).then(datos => {
                this.array_tipo_file = datos.data.filter(x => x.es_eliminado == false);
            }).catch(err => { });
        }
        create_form() {
            this.formMACRO = this._formBuilder.group({
                Titulo: [null, forms_1.Validators.required],
                Encabezado: [null, forms_1.Validators.required],
                Objetivo: [null, forms_1.Validators.required],
                Descripcion: [null, forms_1.Validators.required],
                FechaHoraInicio: [null, forms_1.Validators.required],
                FechaHoraFin: [null, forms_1.Validators.required],
                TiempoEstimado: [null, [forms_1.Validators.required, forms_1.Validators.pattern('[0-9]*')]],
                EsAnonima: [false],
                EsParaTodos: [true],
                MensajeAnonimo: [null],
                MensajePresentacion: [null],
                IndicacionesBienvenida: [null, forms_1.Validators.required],
                TipoArchivoBienvenida: [null, forms_1.Validators.required],
                UrlMultimediaBienvenida: [null],
                IndicacionesAgradecimiento: [null, forms_1.Validators.required],
                TipoArchivoAgradecimiento: [null, forms_1.Validators.required],
                UrlMultimediaAgradecimiento: [null]
            });
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
            this.error_indicaciones = false;
        }
        onReady(editor) {
            editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
        }
        save_update() {
            const _controls = this.formMACRO.controls;
            let allow = true;
            if (this.formMACRO.invalid) {
                Object.keys(_controls).forEach(controlName => {
                    _controls[controlName].markAsTouched();
                    _controls[controlName].markAsDirty();
                    _controls[controlName].updateValueAndValidity();
                });
                allow = false;
            }
            if (this.frm_welcome_data.indicaciones == null || this.frm_welcome_data.indicaciones == '') {
                this.error_indicaciones = true;
                allow = false;
            }
            if (this.frm_main_data.iden_imagen_presentacion == null || this.frm_main_data.iden_imagen_presentacion == '') {
                this.error_imagen_segundo_plano = true;
                allow = false;
            }
            if (this.frm_greet_data.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.video) {
                if (this.frm_greet_data.url_video == null || this.frm_greet_data.url_video == "" || this.validURL(this.frm_greet_data.url_video) == false) {
                    this.error_url = true;
                    allow = false;
                }
            }
            if (this.frm_greet_data.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen) {
                if (this.frm_greet_data.iden_imagen == null || this.frm_greet_data.iden_imagen == "") {
                    this.error_file_agradecimiento = true;
                    allow = false;
                }
            }
            if (this.frm_welcome_data.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.video) {
                if (this.frm_welcome_data.url_video == null || this.frm_welcome_data.url_video == "" || this.validURL(this.frm_welcome_data.url_video) == false) {
                    this.error_url_welcome = true;
                    allow = false;
                }
            }
            if (allow) {
                let input = {
                    ussername: '',
                    encuesta: this.frm_main_data,
                    bienvenida: this.frm_welcome_data,
                    agradecimiento: this.frm_greet_data
                };
            }
            else {
                this.createNotification('warning', 'Advertencia', 'Debe ingresar los campos obligatorios');
            }
        }
        go_preguntas() {
            this.onGoPreguntas.emit(true);
        }
    };
    DatosEncuestaViewExtranetComponent.ctorParameters = () => [
        { type: forms_1.FormBuilder },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: _core_1.EncuestasService },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: core_1.ChangeDetectorRef },
        { type: _core_1.SisEnumeradoService }
    ];
    tslib_1.__decorate([
        core_1.Input()
    ], DatosEncuestaViewExtranetComponent.prototype, "encuesta_data", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], DatosEncuestaViewExtranetComponent.prototype, "onGoPreguntas", void 0);
    DatosEncuestaViewExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-datos-encuesta-view-extranet',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./datos-encuesta-view-extranet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/datos-encuesta-view-extranet/datos-encuesta-view-extranet.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./datos-encuesta-view-extranet.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/datos-encuesta-view-extranet/datos-encuesta-view-extranet.component.css")).default]
        })
    ], DatosEncuestaViewExtranetComponent);
    exports.DatosEncuestaViewExtranetComponent = DatosEncuestaViewExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/encuestados-encuesta-view-extranet/encuestados-encuesta-view-extranet.component.css":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/encuestados-encuesta-view-extranet/encuestados-encuesta-view-extranet.component.css ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lzdGVtYS9wYWdlcy9nZXN0aW9uLWV4dHJhbmV0L3BhZ2VzL2VuY3Vlc3Rhcy1leHRyYW5ldC92aXN0YS1lbmN1ZXN0YS1leHRyYW5ldC9jb21wb25lbnRzL2VuY3Vlc3RhZG9zLWVuY3Vlc3RhLXZpZXctZXh0cmFuZXQvZW5jdWVzdGFkb3MtZW5jdWVzdGEtdmlldy1leHRyYW5ldC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/encuestados-encuesta-view-extranet/encuestados-encuesta-view-extranet.component.ts":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/encuestados-encuesta-view-extranet/encuestados-encuesta-view-extranet.component.ts ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, _core_1, ng_zorro_antd_1, ngx_spinner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let EncuestadosEncuestaViewExtranetComponent = class EncuestadosEncuestaViewExtranetComponent {
        constructor(notification, encuesta_s, spinner, modal, cd) {
            this.notification = notification;
            this.encuesta_s = encuesta_s;
            this.spinner = spinner;
            this.modal = modal;
            this.cd = cd;
            this.onGoPreguntas = new core_1.EventEmitter();
            this.esVisibleFormularioEncuestados = false;
            this.form = {
                dni: null,
                nombres: null,
                id_encuesta: 0
            };
            this.EncuestadosList = [];
            this.EncuestadosList_origin = [];
            this.cargando_tabla = true;
            this.pageIndex = 1;
            this.total = 0;
            this.pageSize = 10;
            this.get_list = () => {
                this.form.id_encuesta = this.id_encuesta ? this.id_encuesta : 0;
                this.cargando_tabla = true;
                let filtro = Object.assign({}, this.form);
                this.spinner.show();
                this.encuesta_s._GetEncuestadosByFilterEncuestaExtranet(filtro, this.pageIndex, 1000000)
                    .then((datos) => {
                    this.spinner.hide();
                    this.error_encuestados = false;
                    if (datos && datos.data && datos.data.Data) {
                        let dt = datos.data.Data;
                        this.EncuestadosList = dt;
                        this.EncuestadosList_origin = dt;
                        this.total = datos.data.TotalRows;
                    }
                    this.cargando_tabla = false;
                })
                    .catch(() => {
                    this.cargando_tabla = false;
                });
            };
            this.handleSortByKey = (e, type = "default") => {
                let array = this.EncuestadosList; //.sort();
                this.EncuestadosList = [];
                this.cargando_tabla = true;
                if (type == "default") {
                    if (e.value == "ascend") {
                        array.sort((a, b) => (a[e.key] > b[e.key]) ? 1 : ((b[e.key] > a[e.key]) ? -1 : 0));
                    }
                    else if (e.value == "descend") {
                        array.sort((a, b) => (b[e.key] > a[e.key]) ? 1 : ((a[e.key] > b[e.key]) ? -1 : 0));
                    }
                    else {
                        array.sort((a, b) => a.nro - b.nro);
                    }
                }
                if (type == "string") {
                    if (e.value == "ascend") {
                        array.sort((a, b) => {
                            return (a[e.key] ? a[e.key].replace(/\s/g, "") : '').localeCompare((b[e.key] ? b[e.key].replace(/\s/g, "") : ''), 'en', { sensitivity: 'base' });
                        });
                    }
                    else if (e.value == "descend") {
                        array.sort((a, b) => {
                            return (b[e.key] ? b[e.key].replace(/\s/g, "") : '').localeCompare((a[e.key] ? a[e.key].replace(/\s/g, "") : ''), 'en', { sensitivity: 'base' });
                        });
                    }
                    else {
                        array.sort((a, b) => a.nro - b.nro);
                    }
                }
                setTimeout(() => {
                    this.EncuestadosList = array;
                    this.cargando_tabla = false;
                }, 350);
            };
            this.handleClickLimpiar = () => {
                this.form = {
                    id_encuesta: this.id_encuesta ? this.id_encuesta : 0,
                    dni: null,
                    nombres: null
                };
                this.pageIndex = 1;
                this.get_list();
            };
            this.handleClickBuscar = (reset = false) => {
                if (reset) {
                    this.pageIndex = 1;
                }
                this.get_list();
            };
            this._delete_encuestado = (id) => {
                this.modal.confirm({
                    nzTitle: 'Eliminar',
                    nzContent: '¿Esta seguro de eliminar el encuestado seleccionado?',
                    nzOkText: 'Si',
                    nzOkType: 'primary',
                    nzCancelText: 'No',
                    nzOnOk: () => {
                        this.encuesta_s._EnableDisable(id, "encuesta_administrado")
                            .then((datos) => {
                            if (datos.data) {
                                if (datos.data.Success) {
                                    let str = '<ul>';
                                    datos.data.Messages.forEach(message => {
                                        str += `<li>${message}</li>`;
                                    });
                                    str += '</ul>';
                                    this.createNotification('success', 'Éxito', str);
                                    this.get_list();
                                }
                            }
                        }).catch(() => { });
                    },
                    nzOnCancel: () => { }
                });
            };
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
            this.error_encuestados = false;
            this.save_update_encuestados = (publicar = false) => {
                //se cambia estado en la bd
                if (publicar) {
                    if (this.EncuestadosList.length > 0) {
                        this.error_encuestados = false;
                        this.modal.confirm({
                            nzTitle: '¿Esta seguro de publicar la encuesta?',
                            nzContent: 'Una vez publicada no podra modificarla.',
                            nzOkText: 'Si',
                            nzOkType: 'primary',
                            nzCancelText: 'No',
                            nzOnOk: () => {
                                this.publicar();
                            },
                            nzOnCancel: () => { }
                        });
                    }
                    else {
                        this.error_encuestados = true;
                        this.createNotification('warning', 'Advertencia', "<ul><li>Debe registrar al menos un encuestado.</li></ul>");
                    }
                }
                else {
                    if (this.EncuestadosList.length > 0) {
                        this.createNotification('success', 'Éxito', "<ul><li>Guardado con éxito.</li></ul>");
                        this.error_encuestados = false;
                    }
                    else {
                        this.error_encuestados = true;
                        this.createNotification('warning', 'Advertencia', "<ul><li>Debe registrar al menos un encuestado.</li></ul>");
                    }
                }
            };
            this.handleClickAgregarEncuestado = () => {
                this.esVisibleFormularioEncuestados = true;
            };
            this.handleCloseAgregarEncuestado = (e) => {
                this.esVisibleFormularioEncuestados = false;
            };
            this.handleSave = (e) => {
                this.esVisibleFormularioEncuestados = false;
            };
            this.handleEmitListaSeleccionada = (lista) => {
                this.esVisibleFormularioEncuestados = false;
                let lst = lista.map(m => {
                    return { dni_user: m.numero_documento,
                        id_encuesta: this.id_encuesta
                    };
                });
                this.spinner.show();
                this.encuesta_s._SaveEncuestadosExtranetList(lst)
                    .then((datos) => {
                    this.spinner.hide();
                    if (datos.data) {
                        if (datos.data.Success) {
                            let str = '<ul>';
                            datos.data.Messages.forEach(message => {
                                str += `<li>${message}</li>`;
                            });
                            str += '</ul>';
                            this.createNotification('success', 'Éxito', str);
                            setTimeout(() => {
                                this.get_list();
                            }, 150);
                        }
                    }
                })
                    .catch(() => { this.spinner.hide(); });
            };
        }
        ngOnInit() {
            this.get_list();
        }
        goback() {
            this.onGoPreguntas.emit(true);
        }
        publicar() {
            this.encuesta_s._PublicarEncuesta(this.id_encuesta)
                .then((datos) => {
                if (datos.data) {
                    let str = '<ul>';
                    datos.data.Messages.forEach(message => {
                        str += `<li>${message}</li>`;
                    });
                    str += '</ul>';
                    if (datos.data.Success) {
                        this.createNotification('success', 'Éxito', str);
                        // this.onPublishSuccess.emit(true);
                    }
                    else {
                        this.createNotification('warning', 'Adveretencia', str);
                    }
                }
            }).catch(() => { });
        }
    };
    EncuestadosEncuestaViewExtranetComponent.ctorParameters = () => [
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: _core_1.EncuestasService },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: ng_zorro_antd_1.NzModalService },
        { type: core_1.ChangeDetectorRef }
    ];
    tslib_1.__decorate([
        core_1.Input()
    ], EncuestadosEncuestaViewExtranetComponent.prototype, "id_encuesta", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], EncuestadosEncuestaViewExtranetComponent.prototype, "onGoPreguntas", void 0);
    EncuestadosEncuestaViewExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-encuestados-encuesta-view-extranet',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./encuestados-encuesta-view-extranet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/encuestados-encuesta-view-extranet/encuestados-encuesta-view-extranet.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./encuestados-encuesta-view-extranet.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/encuestados-encuesta-view-extranet/encuestados-encuesta-view-extranet.component.css")).default]
        })
    ], EncuestadosEncuestaViewExtranetComponent);
    exports.EncuestadosEncuestaViewExtranetComponent = EncuestadosEncuestaViewExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/modal-vista-pregunta-extranet/modal-vista-pregunta-extranet.component.css":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/modal-vista-pregunta-extranet/modal-vista-pregunta-extranet.component.css ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lzdGVtYS9wYWdlcy9nZXN0aW9uLWV4dHJhbmV0L3BhZ2VzL2VuY3Vlc3Rhcy1leHRyYW5ldC92aXN0YS1lbmN1ZXN0YS1leHRyYW5ldC9jb21wb25lbnRzL21vZGFsLXZpc3RhLXByZWd1bnRhLWV4dHJhbmV0L21vZGFsLXZpc3RhLXByZWd1bnRhLWV4dHJhbmV0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/modal-vista-pregunta-extranet/modal-vista-pregunta-extranet.component.ts":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/modal-vista-pregunta-extranet/modal-vista-pregunta-extranet.component.ts ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, forms_1, _core_1, ng_zorro_antd_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let ModalVistaPreguntaExtranetComponent = class ModalVistaPreguntaExtranetComponent {
        constructor(sis_enumerado_s, categoria_s, encuesta_s, _formBuilder, notification, modal, cd) {
            this.sis_enumerado_s = sis_enumerado_s;
            this.categoria_s = categoria_s;
            this.encuesta_s = encuesta_s;
            this._formBuilder = _formBuilder;
            this.notification = notification;
            this.modal = modal;
            this.cd = cd;
            this._TIPO_PREGUNTA = _core_1.TIPO_PREGUNTA;
            this.respuesta_disparadora = null;
            this.title = "Agregar";
            this.is_first = false;
            this.es_por_defecto = false;
            this.preguntas_condicionales = [];
            this.isVisibleModal = false;
            this.onCloseModal = new core_1.EventEmitter();
            this.modal_width = 800;
            this.frm = { id_pregunta: 0, id_encuesta: 0, es_obligatorio: true };
            //frmPRG:FormGroup;
            this.frmPRG = {
                frmPregunta: new forms_1.FormControl(null, forms_1.Validators.required),
                frmTipoPregunta: new forms_1.FormControl(null, forms_1.Validators.required),
                frmEsObligatorio: new forms_1.FormControl(true),
                frmCategoria: new forms_1.FormControl(null, forms_1.Validators.required),
                frmSubCategoria: new forms_1.FormControl(null),
                frmDescripcionAdicional: new forms_1.FormControl(null),
                frmTipoArchivo: new forms_1.FormControl(null, forms_1.Validators.required),
                frmEsCondicionada: new forms_1.FormControl(false),
                frmEsCondicional: new forms_1.FormControl(false),
                frmPreguntaCondicional: new forms_1.FormControl(null)
            };
            this.array_tipo_file = [];
            this.array_tipo_pregunta = [];
            this.array_categoria = [];
            this.array_sub_categoria = [];
            this.array_sub_categoria_all = [];
            this.filter_sub_categoria = (val, force = false) => {
                let id_categoria = this.frm.id_categoria;
                this.array_sub_categoria = id_categoria ? this.array_sub_categoria_all.filter(x => x.id_categoria == id_categoria) : [];
                if (force) {
                    //logica retirada
                }
                else {
                    this.frm.id_sub_categoria = null;
                }
            };
            //#endregion
            this.array_maestro_institucional = [
                { id_enumerado: 1, nombre: "Dependencia" },
                { id_enumerado: 2, nombre: "Régimen" }
            ];
            this.JSON_DESPLEGABLE_INSTITUCIONAL = _core_1.JSON_TIPO_PREGUNTA.desplegable_institucional;
            this.frmMaestroInstitucional = new forms_1.FormControl(null, forms_1.Validators.required);
            this.JSON_DESPLEGABLE_LIBRE = _core_1.JSON_TIPO_PREGUNTA.desplegable_libre;
            this.JSON_NUMERICO_ENTERO = _core_1.JSON_TIPO_PREGUNTA.numerico_entero;
            this.JSON_NUMERICO_DECIMAL = _core_1.JSON_TIPO_PREGUNTA.numerico_decimal;
            this.JSON_SELECCION_UNICA = _core_1.JSON_TIPO_PREGUNTA.seleccion_unica;
            this.JSON_SELECCION_MULTIPLE = _core_1.JSON_TIPO_PREGUNTA.seleccion_multiple;
            this.JSON_MATRIZ = _core_1.JSON_TIPO_PREGUNTA.matriz;
            this.array_alternativa_select = [];
            this.frmAlternativaDescripcion = [];
            this.frmAlternativaPeso = [];
            this.frmCantidadDigitos = new forms_1.FormControl(null, forms_1.Validators.required);
            this.array_filas = [];
            this.array_columnas = [];
            this.cargar_formato_byTipo = (idTipo, is_default = false /*is_first=false*/) => {
                this.modal_width = idTipo == _core_1.TIPO_PREGUNTA.matriz ? 1200 : 800;
                if (idTipo == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                    if (is_default) {
                        this.JSON_DESPLEGABLE_INSTITUCIONAL.tbl_data = 1;
                    }
                }
            };
            //#region ARCHIVOS
            this.estaGuardando = false;
            this.tiposMimePermitidos = ["image/png", "image/jpeg"];
            this.imagen_MimePermitidos = ["image/png", "image/jpeg", "image/gif"];
            this.video_extensionAceptados = [".mp4"];
            this.imagen_extensionAceptados = [".png", ".jpeg"];
            this.pesoMaximoEnMB = _core_1.FILE_SETTINGS.maxFileSize;
            this.url = "/api/comun/descargar-archivo";
            this.validar_fup = false;
            this.show_file_uploader = false;
            this.show_url = false;
            this.selected_tipo = '';
            this._extensionAceptados = [];
            this.set_tipo_file = () => {
                let tipo = this.frm.id_tipo_archivo;
                let tipo_file = this.array_tipo_file.find(f => f.id_enumerado == tipo);
                this.selected_tipo = tipo_file ? tipo_file.nombre.toLowerCase() : '';
                this.show_file_uploader = tipo ? (tipo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen ? true : false) : false;
                this.show_url = tipo ? (tipo == _core_1.TIPO_ARCHIVO_ENUMERADO.video ? true : false) : false;
                this._extensionAceptados = this.imagen_extensionAceptados; //tipo?(tipo==TIPO_ARCHIVO_ENUMERADO.video?this.video_extensionAceptados:this.imagen_extensionAceptados):[];
            };
            this.set_file_iden = (data) => {
                this.error_imagen = false;
                this.frm.iden_imagen = data.codigo;
            };
            //#endregion
            this.parseInt = (value) => value && value != "" ? Number(value).toFixed(0) : null;
            this.setJsonName = () => {
                let pregunta = this.frm.pregunta;
                this.JSON_DESPLEGABLE_INSTITUCIONAL.nombre = pregunta;
                this.JSON_DESPLEGABLE_LIBRE.nombre = pregunta;
                this.JSON_NUMERICO_ENTERO.nombre = pregunta;
                this.JSON_NUMERICO_DECIMAL.nombre = pregunta;
                this.JSON_SELECCION_UNICA.nombre = pregunta;
                this.JSON_SELECCION_MULTIPLE.nombre = pregunta;
                this.JSON_MATRIZ.nombre = pregunta;
            };
            //#region TIPO TABLA
            this.cargando_tabla = false;
            this._add_alternativa_table = () => {
                this.cargando_tabla = true;
                let data = this.array_alternativa_select;
                this.array_alternativa_select = [];
                setTimeout(() => {
                    let last = data.length;
                    data.push({ idx: last, peso: null, descripcion: null });
                    this.frmAlternativaDescripcion.push(new forms_1.FormControl(null, forms_1.Validators.required));
                    this.frmAlternativaPeso.push(new forms_1.FormControl(null, forms_1.Validators.required));
                    this.array_alternativa_select = data;
                    this.cargando_tabla = false;
                    this.cd.detectChanges();
                    this.cd.markForCheck();
                }, 350);
            };
            this._delete_alternativa_table = (idx) => {
                this.cargando_tabla = true;
                this.modal.confirm({
                    nzTitle: 'Eliminar',
                    nzContent: 'Esta seguro de eliminar la alternativa seleccionada',
                    nzOkText: 'Eliminar',
                    nzOkType: 'primary',
                    nzCancelText: 'No',
                    nzOnOk: () => {
                        let table = this.array_alternativa_select;
                        this.array_alternativa_select = [];
                        setTimeout(() => {
                            table.splice(idx, 1);
                            this.frmAlternativaDescripcion.splice(idx, 1);
                            this.frmAlternativaPeso.splice(idx, 1);
                            table.forEach((f, index) => { f.idx = index; });
                            this.array_alternativa_select = table;
                            this.cargando_tabla = false;
                        }, 350);
                    },
                    nzOnCancel: () => {
                        this.cargando_tabla = false;
                    }
                });
            };
            //#endregion
            //#region TIPO MATRIZ
            this.frmFilaName = [];
            this.frmColumnaName = [];
            this._add_filas = () => {
                let data = this.JSON_MATRIZ.filas;
                this.JSON_MATRIZ.filas = [];
                this.cargando_tabla = true;
                this.error_filas_matriz = false;
                setTimeout(() => {
                    let last = data.length;
                    let fila = {
                        idx: last,
                        nombre_fila: null
                    };
                    data.push(fila);
                    this.frmFilaName.push(new forms_1.FormControl(null, forms_1.Validators.required));
                    this.JSON_MATRIZ.filas = data;
                    this.cargando_tabla = false;
                    this.cd.detectChanges();
                    this.cd.markForCheck();
                }, 350);
            };
            this._delete_fila = (idx) => {
                this.cargando_tabla = true;
                this.modal.confirm({
                    nzTitle: 'Eliminar',
                    nzContent: 'Esta seguro de eliminar la fila seleccionada',
                    nzOkText: 'Eliminar',
                    nzOkType: 'primary',
                    nzCancelText: 'No',
                    nzOnOk: () => {
                        let table = this.array_filas;
                        this.array_filas = [];
                        setTimeout(() => {
                            table.splice(idx, 1);
                            this.frmFilaName.splice(idx, 1);
                            table.forEach((f, index) => { f.idx = index; });
                            this.array_filas = table;
                            this.cargando_tabla = false;
                        }, 350);
                    },
                    nzOnCancel: () => {
                        this.cargando_tabla = false;
                    }
                });
            };
            this.cargando_columnas = false;
            this.add_columnas = () => {
                let data = this.array_columnas;
                this.array_columnas = [];
                this.cargando_columnas = true;
                this.error_columnas_matriz = false;
                setTimeout(() => {
                    let last = data.length;
                    data.push({ idx: last, nombre_columna: null });
                    this.frmColumnaName.push(new forms_1.FormControl(null, forms_1.Validators.required));
                    this.array_columnas = data;
                    this.cargando_columnas = false;
                    this.cd.detectChanges();
                    this.cd.markForCheck();
                }, 350);
            };
            this._delete_columna = (idx) => {
                this.cargando_columnas = true;
                this.modal.confirm({
                    nzTitle: 'Eliminar',
                    nzContent: 'Esta seguro de eliminar la columna seleccionada',
                    nzOkText: 'Eliminar',
                    nzOkType: 'primary',
                    nzCancelText: 'No',
                    nzOnOk: () => {
                        let table = this.JSON_MATRIZ.columnas;
                        this.JSON_MATRIZ.columnas = [];
                        setTimeout(() => {
                            table.splice(idx, 1);
                            this.frmColumnaName.splice(idx, 1);
                            table.forEach((f, index) => { f.idx = index; });
                            this.JSON_MATRIZ.columnas = table;
                            this.cargando_columnas = false;
                        }, 350);
                    },
                    nzOnCancel: () => {
                        this.cargando_columnas = false;
                    }
                });
            };
            //#endregion
            //#region SAVE OR CANCEL FORM
            this.error_imagen = false;
            this.error_video = false;
            this.validURL = (str) => {
                var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
                    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
                    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
                return !!pattern.test(str);
            };
            this.error_filas_matriz = false;
            this.error_columnas_matriz = false;
            this.handleCancelarFormularioModal = () => {
                this.onCloseModal.emit(true);
            };
            //#endregion
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
        }
        ngOnInit() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.getComboInsitucional();
                yield this.getTipoPregunta();
                yield this.getTipoArchivos();
                yield this.getCategoriaList();
                yield this.getSubCategoriaList();
                let basic_frm = { id_pregunta: 0, id_encuesta: this.id_encuesta, es_obligatorio: true };
                let pregunta = Object.assign({}, this.pregunta);
                this.frm = pregunta ? pregunta : basic_frm;
                if (this.frm.id_pregunta != null && this.frm.id_pregunta > 0) {
                    this.show_file_uploader = pregunta.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen ? true : false;
                    this.show_url = pregunta.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.video ? true : false;
                    this.respuesta_disparadora = JSON.parse(pregunta.json_respuesta_condicional);
                    if (this.es_por_defecto /*this.is_first*/) {
                        //this.frm.id_tipo_pregunta=TIPO_PREGUNTA.desplegable_institucional;
                        this.cargar_formato_byTipo(_core_1.TIPO_PREGUNTA.desplegable_institucional, true);
                    }
                    this.cd.markForCheck();
                    this.cd.detectChanges();
                    //manejo del json
                    this.JSON_INIT();
                }
            });
        }
        JSON_INIT() {
            let json = JSON.parse(this.frm.json_alternativas);
            let id_tipo_pregunta = this.frm.id_tipo_pregunta;
            if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                this.JSON_DESPLEGABLE_INSTITUCIONAL = json;
            }
            if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.numerico_decimal) {
                this.JSON_NUMERICO_DECIMAL = json;
            }
            if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.desplegable_libre ||
                id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_unica ||
                id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_multiple) {
                json.opciones.forEach((e, _idx) => {
                    e.idx = _idx;
                    let control = new forms_1.FormControl(null, forms_1.Validators.required);
                    control.disable();
                    this.frmAlternativaDescripcion.push(control);
                    this.frmAlternativaPeso.push(new forms_1.FormControl(null));
                });
                this.array_alternativa_select = json.opciones;
                if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.desplegable_libre) {
                    this.JSON_DESPLEGABLE_LIBRE = json;
                }
                else if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                    this.JSON_SELECCION_UNICA = json;
                }
                else {
                    this.JSON_SELECCION_MULTIPLE = json;
                }
            }
            if (id_tipo_pregunta == _core_1.TIPO_PREGUNTA.matriz) {
                json.filas.forEach(e => {
                    let control = new forms_1.FormControl(null, forms_1.Validators.required);
                    control.disable();
                    this.frmFilaName.push(control);
                });
                json.columnas.forEach(e => {
                    let control = new forms_1.FormControl(null, forms_1.Validators.required);
                    control.disable();
                    this.frmColumnaName.push(control);
                });
                this.array_filas = json.filas;
                this.array_columnas = json.columnas;
                this.JSON_MATRIZ = json;
            }
        }
        //#region COMOBS
        getComboInsitucional() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.sis_enumerado_s.GetEnumeradoByTipoEnumerado(_core_1.SIS_TIPO_ENUMERADO.tipo_maestro_institucional).then(datos => {
                    this.array_maestro_institucional = datos.data.filter(x => x.es_eliminado == false);
                }).catch(err => { });
                //
            });
        }
        getTipoArchivos() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.sis_enumerado_s.GetEnumeradoByTipoEnumerado(_core_1.SIS_TIPO_ENUMERADO.tipo_archivo).then(datos => {
                    this.array_tipo_file = datos.data.filter(x => x.es_eliminado == false);
                }).catch(err => { });
            });
        }
        getTipoPregunta() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.sis_enumerado_s.GetEnumeradoByTipoEnumerado(_core_1.SIS_TIPO_ENUMERADO.tipo_pregunta).then(datos => {
                    this.array_tipo_pregunta = datos.data.filter(x => x.es_eliminado == false);
                }).catch(err => { });
            });
        }
        getCategoriaList() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.categoria_s._getCategoriaList().then(datos => {
                    this.array_categoria = datos.data.filter(x => x.es_eliminado == false);
                }).catch(err => { });
            });
        }
        getSubCategoriaList() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.categoria_s._getSubCategoriaList().then(datos => {
                    this.array_sub_categoria_all = datos.data.filter(x => x.es_eliminado == false);
                }).catch(err => { });
            });
        }
    };
    ModalVistaPreguntaExtranetComponent.ctorParameters = () => [
        { type: _core_1.SisEnumeradoService },
        { type: _core_1.CategoriaService },
        { type: _core_1.EncuestasService },
        { type: forms_1.FormBuilder },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: ng_zorro_antd_1.NzModalService },
        { type: core_1.ChangeDetectorRef }
    ];
    tslib_1.__decorate([
        core_1.Input()
    ], ModalVistaPreguntaExtranetComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalVistaPreguntaExtranetComponent.prototype, "is_first", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalVistaPreguntaExtranetComponent.prototype, "es_por_defecto", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalVistaPreguntaExtranetComponent.prototype, "pregunta", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalVistaPreguntaExtranetComponent.prototype, "preguntas_condicionales", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalVistaPreguntaExtranetComponent.prototype, "id_encuesta", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ModalVistaPreguntaExtranetComponent.prototype, "isVisibleModal", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ModalVistaPreguntaExtranetComponent.prototype, "onCloseModal", void 0);
    ModalVistaPreguntaExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-modal-vista-pregunta-extranet',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./modal-vista-pregunta-extranet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/modal-vista-pregunta-extranet/modal-vista-pregunta-extranet.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./modal-vista-pregunta-extranet.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/modal-vista-pregunta-extranet/modal-vista-pregunta-extranet.component.css")).default]
        })
    ], ModalVistaPreguntaExtranetComponent);
    exports.ModalVistaPreguntaExtranetComponent = ModalVistaPreguntaExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/notificaciones-view-extranet/notificaciones-view-extranet.component.css":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/notificaciones-view-extranet/notificaciones-view-extranet.component.css ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lzdGVtYS9wYWdlcy9nZXN0aW9uLWV4dHJhbmV0L3BhZ2VzL2VuY3Vlc3Rhcy1leHRyYW5ldC92aXN0YS1lbmN1ZXN0YS1leHRyYW5ldC9jb21wb25lbnRzL25vdGlmaWNhY2lvbmVzLXZpZXctZXh0cmFuZXQvbm90aWZpY2FjaW9uZXMtdmlldy1leHRyYW5ldC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/notificaciones-view-extranet/notificaciones-view-extranet.component.ts":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/notificaciones-view-extranet/notificaciones-view-extranet.component.ts ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, _core_1, ng_zorro_antd_1, ngx_spinner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let NotificacionesViewExtranetComponent = class NotificacionesViewExtranetComponent {
        constructor(encuesta_s, sis_enumerado_s, notification, spinner, modal) {
            this.encuesta_s = encuesta_s;
            this.sis_enumerado_s = sis_enumerado_s;
            this.notification = notification;
            this.spinner = spinner;
            this.modal = modal;
            this.onPublishSuccess = new core_1.EventEmitter();
            this.onGoEncuestados = new core_1.EventEmitter();
            this.onGoDatos = new core_1.EventEmitter();
            this.NotificacionesList = [];
            this.PreguntasList_Condicionales = [];
            this.cargando_tabla = true;
            this.pageIndex = 1;
            this.total = 0;
            this.pageSize = 1000;
            this.get_list = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.cargando_tabla = true;
                let filtro = { id_encuesta: this.encuesta_data.encuesta.id_encuesta };
                this.spinner.show();
                this.encuesta_s._GetNotificacionesByEncuesta(filtro, this.pageIndex, this.pageSize)
                    .then((datos) => {
                    this.spinner.hide();
                    if (datos && datos.data && datos.data.Data) {
                        let data = datos.data.Data;
                        data.forEach((e, _idx) => { e.idx = _idx; });
                        data.forEach(item => {
                            const items = JSON.parse(item.dirigido);
                            const seleccionado = items.filter(x => x.selected == true);
                            item.dirigido_texto = seleccionado[0].nombre;
                        });
                        this.NotificacionesList = data;
                        this.total = datos.data.TotalRows;
                    }
                    this.cargando_tabla = false;
                })
                    .catch(() => {
                    this.cargando_tabla = false;
                    this.spinner.hide();
                });
            });
            this.handleClickLimpiar = () => {
                this.pageIndex = 1;
                this.get_list();
            };
            this.handleClickBuscar = (reset = false) => {
                if (reset) {
                    this.pageIndex = 1;
                }
                this.get_list();
            };
            this.save_update_preguntas = (publicar = false, ir_siguiente = false) => {
                //se cambia estado en la bd
                let noValidos = this.NotificacionesList.filter(f => f.id_tipo_archivo == null);
                //valida categoria y tipo archivo
                if (noValidos.length > 0) {
                    this.createNotification('warning', 'Advertencia', "<ul><li>Debe completar la configuración de la pregunta de dependencia.</li></ul>");
                }
                else {
                    if (publicar) {
                        if (this.NotificacionesList.length > 0) {
                            this.modal.confirm({
                                nzTitle: '¿Esta seguro de publicar la encuesta?',
                                nzContent: 'Una vez publicada no podra modificarla.',
                                nzOkText: 'Si',
                                nzOkType: 'primary',
                                nzCancelText: 'No',
                                nzOnOk: () => {
                                    this.publicar();
                                },
                                nzOnCancel: () => { }
                            });
                        }
                        else {
                            this.createNotification('success', 'Éxito', "<ul><li>Debe ingresar al menos una pregunta.</li></ul>");
                        }
                    }
                    else {
                        this.createNotification('success', 'Éxito', "<ul><li>Guardado con éxito.</li></ul>");
                        if (ir_siguiente) {
                            this.onGoEncuestados.emit(true);
                        }
                    }
                }
            };
            this.handleOnCloseModal = (e) => {
                this.show_modal_notificacion = false;
            };
            this.handleOnSaveDataSeccion = (e) => {
                this.show_modal_notificacion = false;
                this.get_list();
            };
            this.title_modal = "";
            this.show_modal_notificacion = false;
            this.is_first = false;
            this.es_por_defecto = false;
            this.md_add_edit_notificacion = (idx = null, por_defecto = false) => {
                let item = idx != null ? this.NotificacionesList[idx] : null;
                this.title_modal = item ? "Editar" : "Agregar";
                let selected_item = item;
                this.selected_notificacion = selected_item;
                this.es_por_defecto = por_defecto;
                if (idx != null) {
                    this.is_first = idx == 0 ? true : false;
                }
                else {
                    this.is_first = this.NotificacionesList.length > 0 ? false : true;
                }
                this.show_modal_notificacion = true;
            };
            this.md_delete_notificacion = (idx) => {
                let item = this.NotificacionesList[idx];
                this.modal.confirm({
                    nzTitle: 'Eliminar',
                    nzContent: '¿Esta seguro de eliminar la notificación seleccionada?',
                    nzOkText: 'Si',
                    nzOkType: 'primary',
                    nzCancelText: 'No',
                    nzOnOk: () => {
                        this.encuesta_s._EnableDisable(item.id_encuesta_notificacion, "notificacion")
                            .then((datos) => {
                            if (datos.data) {
                                if (datos.data.Success) {
                                    let str = '<ul>';
                                    datos.data.Messages.forEach(message => {
                                        str += `<li>${message}</li>`;
                                    });
                                    str += '</ul>';
                                    this.createNotification('success', 'Éxito', str);
                                    this.get_list();
                                }
                            }
                        }).catch(() => { });
                    },
                    nzOnCancel: () => { }
                });
            };
            this.send_to_datos = () => {
                this.onGoDatos.emit(true);
            };
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
            this.show_modal_reordenar_seccion = false;
            this.md_reordenar_seccion = () => {
                this.show_modal_reordenar_seccion = true;
            };
            this.handleOnCloseReordenarModal = (e) => {
                this.show_modal_reordenar_seccion = false;
            };
            this.handleOnSaveOrdenamiento = (e) => {
                this.show_modal_reordenar_seccion = false;
                this.get_list();
            };
        }
        ngOnInit() {
            this.get_list();
        }
        publicar() {
            this.encuesta_s._PublicarEncuesta(this.id_encuesta)
                .then((datos) => {
                if (datos.data) {
                    let str = '<ul>';
                    datos.data.Messages.forEach(message => {
                        str += `<li>${message}</li>`;
                    });
                    str += '</ul>';
                    if (datos.data.Success) {
                        this.createNotification('success', 'Éxito', str);
                        this.get_list();
                        this.onPublishSuccess.emit(true);
                    }
                    else {
                        this.createNotification('warning', 'Adveretencia', str);
                    }
                }
            }).catch(() => { });
        }
    };
    NotificacionesViewExtranetComponent.ctorParameters = () => [
        { type: _core_1.EncuestasService },
        { type: _core_1.SisEnumeradoService },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: ng_zorro_antd_1.NzModalService }
    ];
    tslib_1.__decorate([
        core_1.Input()
    ], NotificacionesViewExtranetComponent.prototype, "encuesta_data", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], NotificacionesViewExtranetComponent.prototype, "id_encuesta", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], NotificacionesViewExtranetComponent.prototype, "onPublishSuccess", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], NotificacionesViewExtranetComponent.prototype, "onGoEncuestados", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], NotificacionesViewExtranetComponent.prototype, "onGoDatos", void 0);
    NotificacionesViewExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-notificaciones-view-extranet',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./notificaciones-view-extranet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/notificaciones-view-extranet/notificaciones-view-extranet.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./notificaciones-view-extranet.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/notificaciones-view-extranet/notificaciones-view-extranet.component.css")).default]
        })
    ], NotificacionesViewExtranetComponent);
    exports.NotificacionesViewExtranetComponent = NotificacionesViewExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/preguntas-encuesta-view-extranet/preguntas-encuesta-view-extranet.component.css":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/preguntas-encuesta-view-extranet/preguntas-encuesta-view-extranet.component.css ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lzdGVtYS9wYWdlcy9nZXN0aW9uLWV4dHJhbmV0L3BhZ2VzL2VuY3Vlc3Rhcy1leHRyYW5ldC92aXN0YS1lbmN1ZXN0YS1leHRyYW5ldC9jb21wb25lbnRzL3ByZWd1bnRhcy1lbmN1ZXN0YS12aWV3LWV4dHJhbmV0L3ByZWd1bnRhcy1lbmN1ZXN0YS12aWV3LWV4dHJhbmV0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/preguntas-encuesta-view-extranet/preguntas-encuesta-view-extranet.component.ts":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/preguntas-encuesta-view-extranet/preguntas-encuesta-view-extranet.component.ts ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, _core_1, ng_zorro_antd_1, ngx_spinner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let PreguntasEncuestaViewExtranetComponent = class PreguntasEncuestaViewExtranetComponent {
        constructor(encuesta_s, sis_enumerado_s, notification, spinner, modal) {
            this.encuesta_s = encuesta_s;
            this.sis_enumerado_s = sis_enumerado_s;
            this.notification = notification;
            this.spinner = spinner;
            this.modal = modal;
            this.onGoEncuestados = new core_1.EventEmitter();
            this.onGoDatos = new core_1.EventEmitter();
            this.PreguntasList = [];
            this.PreguntasList_Condicionales = [];
            this.cargando_tabla = true;
            this.pageIndex = 1;
            this.total = 0;
            this.pageSize = 1000;
            this.get_list = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.cargando_tabla = true;
                let filtro = { id_encuesta: this.encuesta_data.encuesta.id_encuesta };
                this.spinner.show();
                yield this.getPreguntasCondicionales();
                this.encuesta_s._GetPreguntasByEncuesta(filtro, this.pageIndex, this.pageSize)
                    .then((datos) => {
                    this.spinner.hide();
                    if (datos && datos.data && datos.data.Data) {
                        let data = datos.data.Data;
                        data.forEach((e, _idx) => { e.idx = _idx; });
                        this.PreguntasList = data;
                        this.total = datos.data.TotalRows;
                    }
                    this.cargando_tabla = false;
                })
                    .catch(() => {
                    this.cargando_tabla = false;
                    this.spinner.hide();
                });
            });
            this.handleClickLimpiar = () => {
                this.pageIndex = 1;
                this.get_list();
            };
            this.handleClickBuscar = (reset = false) => {
                if (reset) {
                    this.pageIndex = 1;
                }
                this.get_list();
            };
            this.save_update_preguntas = (publicar = false, ir_siguiente = false) => {
                //se cambia estado en la bd
            };
            this.handleOnCloseModal = (e) => {
                this.show_modal_pregunta = false;
            };
            this.handleOnSaveDataPregunta = (e) => {
                this.show_modal_pregunta = false;
                this.get_list();
            };
            this.title_modal = "";
            this.show_modal_pregunta = false;
            this.is_first = false;
            this.es_por_defecto = false;
            this.md_add_edit_pregunta = (idx = null) => {
                let item = idx != null ? this.PreguntasList[idx] : null;
                this.title_modal = "Vista de ";
                let selected_item = item;
                this.selected_pregunta = selected_item;
                this.show_modal_pregunta = true;
            };
            this.md_delete_pregunta = (item) => {
            };
            this.send_to_datos = () => {
                this.onGoDatos.emit(true);
            };
            this.send_to_encuestados = () => {
                this.onGoEncuestados.emit(true);
            };
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
        }
        ngOnInit() {
            this.get_list();
        }
        getPreguntasCondicionales() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                let filtro = { id_encuesta: this.encuesta_data.encuesta.id_encuesta, mostar_solo_condicional: true };
                yield this.encuesta_s._GetPreguntasByEncuesta(filtro, 0, 1000)
                    .then((datos) => {
                    this.spinner.hide();
                    if (datos && datos.data && datos.data.Data) {
                        let data = datos.data.Data;
                        this.PreguntasList_Condicionales = data;
                    }
                })
                    .catch(() => {
                    this.spinner.hide();
                });
            });
        }
    };
    PreguntasEncuestaViewExtranetComponent.ctorParameters = () => [
        { type: _core_1.EncuestasService },
        { type: _core_1.SisEnumeradoService },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: ng_zorro_antd_1.NzModalService }
    ];
    tslib_1.__decorate([
        core_1.Input()
    ], PreguntasEncuestaViewExtranetComponent.prototype, "encuesta_data", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], PreguntasEncuestaViewExtranetComponent.prototype, "id_encuesta", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], PreguntasEncuestaViewExtranetComponent.prototype, "onGoEncuestados", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], PreguntasEncuestaViewExtranetComponent.prototype, "onGoDatos", void 0);
    PreguntasEncuestaViewExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-preguntas-encuesta-view-extranet',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./preguntas-encuesta-view-extranet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/preguntas-encuesta-view-extranet/preguntas-encuesta-view-extranet.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./preguntas-encuesta-view-extranet.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/preguntas-encuesta-view-extranet/preguntas-encuesta-view-extranet.component.css")).default]
        })
    ], PreguntasEncuestaViewExtranetComponent);
    exports.PreguntasEncuestaViewExtranetComponent = PreguntasEncuestaViewExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/secciones-pregunta-view-extranet/secciones-pregunta-view-extranet.component.css":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/secciones-pregunta-view-extranet/secciones-pregunta-view-extranet.component.css ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lzdGVtYS9wYWdlcy9nZXN0aW9uLWV4dHJhbmV0L3BhZ2VzL2VuY3Vlc3Rhcy1leHRyYW5ldC92aXN0YS1lbmN1ZXN0YS1leHRyYW5ldC9jb21wb25lbnRzL3NlY2Npb25lcy1wcmVndW50YS12aWV3LWV4dHJhbmV0L3NlY2Npb25lcy1wcmVndW50YS12aWV3LWV4dHJhbmV0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/secciones-pregunta-view-extranet/secciones-pregunta-view-extranet.component.ts":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/secciones-pregunta-view-extranet/secciones-pregunta-view-extranet.component.ts ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, _core_1, ng_zorro_antd_1, ngx_spinner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let SeccionesPreguntaViewExtranetComponent = class SeccionesPreguntaViewExtranetComponent {
        constructor(encuesta_s, sis_enumerado_s, notification, spinner, modal) {
            this.encuesta_s = encuesta_s;
            this.sis_enumerado_s = sis_enumerado_s;
            this.notification = notification;
            this.spinner = spinner;
            this.modal = modal;
            this.onGoEncuestados = new core_1.EventEmitter();
            this.onGoDatos = new core_1.EventEmitter();
            this.SeccionesList = [];
            this.PreguntasList_Condicionales = [];
            this.cargando_tabla = true;
            this.pageIndex = 1;
            this.total = 0;
            this.pageSize = 1000;
            this.get_list = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.cargando_tabla = true;
                let filtro = { id_encuesta: this.encuesta_data.encuesta.id_encuesta };
                this.spinner.show();
                this.encuesta_s._GetSeccionesByEncuesta(filtro, this.pageIndex, this.pageSize)
                    .then((datos) => {
                    this.spinner.hide();
                    if (datos && datos.data && datos.data.Data) {
                        let data = datos.data.Data;
                        data.forEach((e, _idx) => { e.idx = _idx; });
                        this.SeccionesList = data;
                        this.total = datos.data.TotalRows;
                    }
                    this.cargando_tabla = false;
                })
                    .catch(() => {
                    this.cargando_tabla = false;
                    this.spinner.hide();
                });
            });
            this.handleClickLimpiar = () => {
                this.pageIndex = 1;
                this.get_list();
            };
            this.handleClickBuscar = (reset = false) => {
                if (reset) {
                    this.pageIndex = 1;
                }
                this.get_list();
            };
            this.save_update_preguntas = (publicar = false, ir_siguiente = false) => {
                //se cambia estado en la bd
                let noValidos = this.SeccionesList.filter(f => f.id_tipo_archivo == null);
                //valida categoria y tipo archivo
                if (noValidos.length > 0) {
                    this.createNotification('warning', 'Advertencia', "<ul><li>Debe completar la configuración de la pregunta de dependencia.</li></ul>");
                }
                else {
                    if (publicar) {
                        if (this.SeccionesList.length > 0) {
                            this.modal.confirm({
                                nzTitle: '¿Esta seguro de publicar la encuesta?',
                                nzContent: 'Una vez publicada no podra modificarla.',
                                nzOkText: 'Si',
                                nzOkType: 'primary',
                                nzCancelText: 'No',
                                nzOnOk: () => {
                                    this.publicar();
                                },
                                nzOnCancel: () => { }
                            });
                        }
                        else {
                            this.createNotification('success', 'Éxito', "<ul><li>Debe ingresar al menos una pregunta.</li></ul>");
                        }
                    }
                    else {
                        this.createNotification('success', 'Éxito', "<ul><li>Guardado con éxito.</li></ul>");
                        if (ir_siguiente) {
                            this.onGoEncuestados.emit(true);
                        }
                    }
                }
            };
            this.handleOnCloseModal = (e) => {
                this.show_modal_seccion = false;
            };
            this.handleOnSaveDataSeccion = (e) => {
                this.show_modal_seccion = false;
                this.get_list();
            };
            this.title_modal = "";
            this.show_modal_seccion = false;
            this.is_first = false;
            this.es_por_defecto = false;
            this.md_add_edit_seccion = (idx = null, por_defecto = false) => {
                let item = idx != null ? this.SeccionesList[idx] : null;
                this.title_modal = item ? "Editar" : "Agregar";
                let selected_item = item;
                this.selected_seccion = selected_item;
                this.es_por_defecto = por_defecto;
                if (idx != null) {
                    this.is_first = idx == 0 ? true : false;
                }
                else {
                    this.is_first = this.SeccionesList.length > 0 ? false : true;
                }
                this.show_modal_seccion = true;
            };
            this.md_delete_seccion = (idx) => {
                let item = this.SeccionesList[idx];
                this.modal.confirm({
                    nzTitle: 'Eliminar',
                    nzContent: '¿Esta seguro de eliminar la sección seleccionada?',
                    nzOkText: 'Si',
                    nzOkType: 'primary',
                    nzCancelText: 'No',
                    nzOnOk: () => {
                        this.encuesta_s._EnableDisable(item.id_encuesta_seccion, "seccion")
                            .then((datos) => {
                            if (datos.data) {
                                if (datos.data.Success) {
                                    let str = '<ul>';
                                    datos.data.Messages.forEach(message => {
                                        str += `<li>${message}</li>`;
                                    });
                                    str += '</ul>';
                                    this.createNotification('success', 'Éxito', str);
                                    this.get_list();
                                }
                            }
                        }).catch(() => { });
                    },
                    nzOnCancel: () => { }
                });
            };
            this.send_to_datos = () => {
                this.onGoDatos.emit(true);
            };
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
            this.show_modal_reordenar_seccion = false;
            this.md_reordenar_seccion = () => {
                this.show_modal_reordenar_seccion = true;
            };
            this.handleOnCloseReordenarModal = (e) => {
                this.show_modal_reordenar_seccion = false;
            };
            this.handleOnSaveOrdenamiento = (e) => {
                this.show_modal_reordenar_seccion = false;
                this.get_list();
            };
        }
        ngOnInit() {
            this.get_list();
        }
        publicar() {
            this.encuesta_s._PublicarEncuesta(this.id_encuesta)
                .then((datos) => {
                if (datos.data) {
                    let str = '<ul>';
                    datos.data.Messages.forEach(message => {
                        str += `<li>${message}</li>`;
                    });
                    str += '</ul>';
                    if (datos.data.Success) {
                        this.createNotification('success', 'Éxito', str);
                        this.get_list();
                    }
                    else {
                        this.createNotification('warning', 'Adveretencia', str);
                    }
                }
            }).catch(() => { });
        }
    };
    SeccionesPreguntaViewExtranetComponent.ctorParameters = () => [
        { type: _core_1.EncuestasService },
        { type: _core_1.SisEnumeradoService },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: ng_zorro_antd_1.NzModalService }
    ];
    tslib_1.__decorate([
        core_1.Input()
    ], SeccionesPreguntaViewExtranetComponent.prototype, "encuesta_data", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], SeccionesPreguntaViewExtranetComponent.prototype, "id_encuesta", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], SeccionesPreguntaViewExtranetComponent.prototype, "onGoEncuestados", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], SeccionesPreguntaViewExtranetComponent.prototype, "onGoDatos", void 0);
    SeccionesPreguntaViewExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-secciones-pregunta-view-extranet',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./secciones-pregunta-view-extranet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/secciones-pregunta-view-extranet/secciones-pregunta-view-extranet.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./secciones-pregunta-view-extranet.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/components/secciones-pregunta-view-extranet/secciones-pregunta-view-extranet.component.css")).default]
        })
    ], SeccionesPreguntaViewExtranetComponent);
    exports.SeccionesPreguntaViewExtranetComponent = SeccionesPreguntaViewExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/vista-encuesta-extranet.component.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/vista-encuesta-extranet.component.css ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lzdGVtYS9wYWdlcy9nZXN0aW9uLWV4dHJhbmV0L3BhZ2VzL2VuY3Vlc3Rhcy1leHRyYW5ldC92aXN0YS1lbmN1ZXN0YS1leHRyYW5ldC92aXN0YS1lbmN1ZXN0YS1leHRyYW5ldC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/vista-encuesta-extranet.component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/vista-encuesta-extranet.component.ts ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, forms_1, router_1, _core_1, ngx_spinner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let VistaEncuestaExtranetComponent = class VistaEncuestaExtranetComponent {
        constructor(activatedRoute, ref_change, _formBuilder, router, encuesta_s, spinner) {
            this.activatedRoute = activatedRoute;
            this.ref_change = ref_change;
            this._formBuilder = _formBuilder;
            this.router = router;
            this.encuesta_s = encuesta_s;
            this.spinner = spinner;
            this.id_encuesta = 0;
            this.encuesta_data = {};
            this.data_valid = false;
            this.tabs = [
                { title: "Datos", disabled: false },
                { title: "Secciones", disabled: !this.data_valid },
                { title: "Preguntas", disabled: !this.data_valid },
                { title: "Notificaciones", disabled: !this.data_valid },
            ];
            this.index_tab = null;
            this.disable_preguntas = true;
            this.show_tab_by_index = (index_tab) => {
                this.index_tab = index_tab;
            };
            this.show_encuestados_tab = false;
            this.handleChangeAllPersonalStatus = (status) => {
                if (status != undefined) {
                    if (!status) {
                        this.tabs = [
                            { title: "Datos", disabled: false },
                            { title: "Secciones", disabled: !this.data_valid },
                            { title: "Preguntas", disabled: !this.data_valid },
                            { title: "Notificaciones", disabled: !this.data_valid },
                            { title: "Encuestados", disabled: !this.data_valid }
                        ];
                    }
                    else {
                        this.tabs = [
                            { title: "Datos", disabled: false },
                            { title: "Secciones", disabled: !this.data_valid },
                            { title: "Preguntas", disabled: !this.data_valid },
                            { title: "Notificaciones", disabled: !this.data_valid },
                        ];
                    }
                    this.show_encuestados_tab = status;
                    this.ref_change.detectChanges();
                    this.ref_change.markForCheck();
                }
            };
            this.handleGoDatos = (go_previous) => {
                if (go_previous) {
                    this.index_tab = 0;
                }
            };
            this.handleGoDatosSecciones = (go_next) => {
                if (go_next) {
                    this.index_tab = 1;
                }
            };
            this.handleGoPreguntas = (go_previous) => {
                if (go_previous) {
                    this.index_tab = 2;
                }
            };
            this.handleGoDatosNotificaciones = (go_next) => {
                if (go_next) {
                    this.index_tab = 3;
                }
            };
            this.handleGoEncuestados = (go_next) => {
                if (go_next) {
                    this.index_tab = 4;
                }
            };
        }
        ngOnInit() {
            this.activatedRoute.paramMap.subscribe(params => {
                const id = params.get('id');
                if (id && Number(id) > 0) {
                    this.id_encuesta = Number(id);
                    //encuesta_data
                    this.spinner.show();
                    this.encuesta_s._getEncuestaDataByID(Number(id)).then(datos => {
                        this.encuesta_data = datos.data;
                        this.data_valid = true;
                        if (this.encuesta_data.encuesta.es_todos) {
                            if (this.encuesta_data.encuesta.es_con_seccion_pregunta) {
                                this.tabs = [
                                    { title: "Datos", disabled: false },
                                    { title: "Secciones", disabled: !this.data_valid },
                                    { title: "Preguntas", disabled: !this.data_valid },
                                    { title: "Notificaciones", disabled: !this.data_valid }
                                ];
                            }
                            else {
                                this.tabs = [
                                    { title: "Datos", disabled: false },
                                    { title: "Secciones", disabled: true },
                                    { title: "Preguntas", disabled: !this.data_valid },
                                    { title: "Notificaciones", disabled: !this.data_valid }
                                ];
                            }
                        }
                        else {
                            this.tabs = [
                                { title: "Datos", disabled: false },
                                { title: "Secciones", disabled: false },
                                { title: "Preguntas", disabled: false },
                                { title: "Notificaciones", disabled: false },
                                { title: "Encuestados", disabled: false }
                            ];
                        }
                        this.spinner.hide();
                        this.index_tab = 0;
                        this.ref_change.detectChanges();
                        this.ref_change.markForCheck();
                    }).catch(err => { });
                }
                else {
                    this.index_tab = 0;
                    this.tabs = [
                        { title: "Datos", disabled: false },
                        { title: "Secciones", disabled: true },
                        { title: "Preguntas", disabled: true },
                        { title: "Notificaciones", disabled: true },
                        { title: "Encuestados", disabled: true }
                    ];
                }
            });
        }
    };
    VistaEncuestaExtranetComponent.ctorParameters = () => [
        { type: router_1.ActivatedRoute },
        { type: core_1.ChangeDetectorRef },
        { type: forms_1.FormBuilder },
        { type: router_1.Router },
        { type: _core_1.EncuestasService },
        { type: ngx_spinner_1.NgxSpinnerService }
    ];
    VistaEncuestaExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-vista-encuesta-extranet',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./vista-encuesta-extranet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/vista-encuesta-extranet.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./vista-encuesta-extranet.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-encuesta-extranet/vista-encuesta-extranet.component.css")).default]
        })
    ], VistaEncuestaExtranetComponent);
    exports.VistaEncuestaExtranetComponent = VistaEncuestaExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-resultados-cifras-extranet/vista-resultados-cifras-extranet.component.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-resultados-cifras-extranet/vista-resultados-cifras-extranet.component.css ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lzdGVtYS9wYWdlcy9nZXN0aW9uLWV4dHJhbmV0L3BhZ2VzL2VuY3Vlc3Rhcy1leHRyYW5ldC92aXN0YS1yZXN1bHRhZG9zLWNpZnJhcy1leHRyYW5ldC92aXN0YS1yZXN1bHRhZG9zLWNpZnJhcy1leHRyYW5ldC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-resultados-cifras-extranet/vista-resultados-cifras-extranet.component.ts":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-resultados-cifras-extranet/vista-resultados-cifras-extranet.component.ts ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, forms_1, platform_browser_1, router_1, _core_1, ngx_spinner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let VistaResultadosCifrasExtranetComponent = class VistaResultadosCifrasExtranetComponent {
        constructor(activatedRoute, ref_change, _formBuilder, router, encuesta_s, spinner, _fileService, _authService, sanitizer) {
            this.activatedRoute = activatedRoute;
            this.ref_change = ref_change;
            this._formBuilder = _formBuilder;
            this.router = router;
            this.encuesta_s = encuesta_s;
            this.spinner = spinner;
            this._fileService = _fileService;
            this._authService = _authService;
            this.sanitizer = sanitizer;
            this.id_encuesta = 0;
            this.b64_pdf_file_completo = null;
            this.b64_pdf_file_encuestado = null;
            this.main_loaded = false;
            this.has_file_completo = false;
            this.has_file_encuestado = false;
            this.onGetSavedFileByCodeWithReturn = (codigo, tipo) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                let ur_file = null, has_file = false;
                yield this._fileService.getFilesById(codigo).then(resp => {
                    if (resp.Success && resp.Data && resp.Data[0].content != null) {
                        var binary = atob(resp.Data[0].content.replace(/\s/g, ''));
                        var len = binary.length;
                        var buffer = new ArrayBuffer(len);
                        var view = new Uint8Array(buffer);
                        for (var i = 0; i < len; i++) {
                            view[i] = binary.charCodeAt(i);
                        }
                        let contentType = resp.Data[0].contentType;
                        //var blob = new Blob([view], { type: contentType });
                        ur_file = 'data:' + contentType + ';base64,' + resp.Data[0].content;
                        if (tipo == 1) {
                            this.has_file_completo = true;
                        }
                        else {
                            this.has_file_encuestado = true;
                        }
                        has_file = true;
                    }
                    else {
                        has_file = false;
                        if (tipo == 1) {
                            this.has_file_completo = false;
                        }
                        else {
                            this.has_file_encuestado = false;
                        }
                    }
                });
                //return ur_file;
                return has_file ? this.sanitizer.bypassSecurityTrustResourceUrl(ur_file) : null;
            });
            this._fileService.rutaBase = this._authService.GetConfig().Urls.URL_GA_UI;
        }
        ngOnInit() {
            this.activatedRoute.paramMap.subscribe(params => {
                const id = params.get('id');
                if (id && Number(id) > 0) {
                    this.id_encuesta = Number(id);
                    //encuesta_data
                    this.spinner.show();
                    this.encuesta_s._getEncuestaDataByID(Number(id)).then((datos) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        let dt = datos.data.encuesta;
                        this.b64_pdf_file_completo = yield this.onGetSavedFileByCodeWithReturn(dt.pdf_completo, 1);
                        this.b64_pdf_file_encuestado = yield this.onGetSavedFileByCodeWithReturn(dt.pdf_encuestado, 2);
                        this.main_loaded = true;
                        this.spinner.hide();
                        this.ref_change.detectChanges();
                        this.ref_change.markForCheck();
                    })).catch(err => { });
                }
            });
        }
    };
    VistaResultadosCifrasExtranetComponent.ctorParameters = () => [
        { type: router_1.ActivatedRoute },
        { type: core_1.ChangeDetectorRef },
        { type: forms_1.FormBuilder },
        { type: router_1.Router },
        { type: _core_1.EncuestasService },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: _core_1.FileService },
        { type: _core_1.AuthService },
        { type: platform_browser_1.DomSanitizer }
    ];
    VistaResultadosCifrasExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-vista-resultados-cifras-extranet',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./vista-resultados-cifras-extranet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-resultados-cifras-extranet/vista-resultados-cifras-extranet.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./vista-resultados-cifras-extranet.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/encuestas-extranet/vista-resultados-cifras-extranet/vista-resultados-cifras-extranet.component.css")).default]
        })
    ], VistaResultadosCifrasExtranetComponent);
    exports.VistaResultadosCifrasExtranetComponent = VistaResultadosCifrasExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=3.js.map