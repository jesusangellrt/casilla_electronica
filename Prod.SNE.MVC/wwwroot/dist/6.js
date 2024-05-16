(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado-ext/pages/gestion-ext/gestion-ext.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado-ext/pages/gestion-ext/gestion-ext.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"show_welcome\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\">&nbsp;</div>\r\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\">&nbsp;</div>\r\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\">&nbsp;</div>\r\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\">&nbsp;</div>\r\n            <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\">&nbsp;</div>\r\n        </div>\r\n        <div class=\"row\">\r\n            \r\n            <div class=\"col-md-12\" style=\"float:none;margin:auto;\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div>\r\n                            <app-my-chk-editor [(ngModel)]=\"welcome_text\" [configEditor]=\"{}\" [readonly]=\"true\"></app-my-chk-editor>\r\n                        <br><br>\r\n                        <button (click)=\"goMainList()\" type=\"button\" style=\"background-color: #128C3C;color: #ffffff;margin-left: 10px;\" class=\"btn btn-success\">Continuar</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                            <div class=\"row\">\r\n                                \r\n                                <div class=\"col-md-12\" *ngIf=\"!show_loader_encuesta && _loaded_media && _idYoutubeVideo\" align=\"center\">\r\n                                    <youtube-player\r\n                                        [videoId]=\"_idYoutubeVideo\"\r\n                                        (ready)=\"_savePlayer($event)\"\r\n                                        [width]=\"'100%'\"\r\n                                        [height]=\"400\"\r\n                                        (change)=\"_onStateChange($event)\">\r\n                                    </youtube-player>\r\n                                </div>\r\n                            </div>\r\n                    </div>\r\n                </div>\r\n            </div>  \r\n                 \r\n        </div>        \r\n    </div>\r\n</ng-container>\r\n<ng-container *ngIf=\"show_main_list\">\r\n    <app-listado-principal-ext (onIniciarLLenado)=\"handleOnIniciarLLenado($event)\" \r\n    (onIniciarListado)=\"handleOnIniciarListado($event)\"></app-listado-principal-ext>\r\n</ng-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado-ext/pages/gestion-ext/pages/listado-principal-ext/listado-principal-ext.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado-ext/pages/gestion-ext/pages/listado-principal-ext/listado-principal-ext.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-scale-multiple\">\r\n    <p style=\"font-size: 20px; color: white\">Procesando información, por favor no cierre la ventana.</p>\r\n</ngx-spinner>\r\n<div class=\"_container\" *ngIf=\"show_actual_list\">\r\n    <div class=\"row\" style=\"padding-left: 11px;\">\r\n        <div class=\"col-md-12\">\r\n            <p class=\"text-general\">Completa estas encuestas para conocer tu opinión</p>\r\n        </div>\r\n        <div class=\"col-md-12\" style=\"padding-top: 10px;\">\r\n            \r\n                <div class=\"col-md-3 div-bloque\" style=\"width: 268px\" *ngFor=\"let item of array_paged_front;let idx of index\"\r\n                [ngStyle]=\"{'opacity' : item.fecha_fin_date<today ? 0.5 : 1}\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12 div-cabecera\">\r\n                            <span *ngIf=\"item.es_anonima\" class=\"bg-warning text-anonimo\">*Esta encuesta es anónima</span>        \r\n                        </div>\r\n                        <div class=\"col-md-12\" style=\"padding: 25px 25px 15px 25px;\">\r\n                            <span class=\"text-activo\">Encuesta</span>\r\n                        </div>\r\n                        <div class=\"col-md-12\" style=\"padding: 0px 25px 0px 25px;\">\r\n                            <h3 class=\"text-titulo\">{{item.titulo}}</h3>\r\n                        </div>\r\n                        <div class=\"col-md-12 text-fecha\" style=\"padding: 0px 25px 5px 25px;\">\r\n                            <span class=\"text-fechas\">Desde {{item.fecha_inicio | date:'dd/MM/yyyy'}}</span><br>\r\n                            <span class=\"text-fechas\">Hasta {{item.fecha_fin | date:'dd/MM/yyyy'}}</span>\r\n                        </div>\r\n                       <div class=\"col-md-12\" *ngIf=\"!item.resuelto && item.fecha_fin_date>today && item.id_estado_resuelto ==_ESTADO.sin_comenzar\" style=\"padding: 25px\">\r\n                            <button type=\"button\" class=\"btn btn-default btn-comenzar\" (click)=\"verParaLLenado(item)\">Comenzar</button>\r\n                        </div>\r\n                        <div class=\"col-md-12\" *ngIf=\"!item.resuelto && item.fecha_fin_date>today && item.id_estado_resuelto == _ESTADO.comenzada\"\r\n                         style=\"padding: 25px\">\r\n                            <button type=\"button\" class=\"btn btn-success btn-completar\" (click)=\"verParaLLenado(item)\">Continuar</button>\r\n                        </div>\r\n                        <div class=\"col-md-12\" *ngIf=\"item.resuelto && item.id_estado_resuelto == _ESTADO.completada\" style=\"padding: 25px\">\r\n                            <span class=\"bg-primary text-completado\">Encuesta completada</span>\r\n                        </div>\r\n                        <!--<div class=\"col-md-12\" *ngIf=\"item.resuelto && item.id_estado_resuelto == _ESTADO.completada\" style=\"padding: 25px\">\r\n                            <span class=\"bg-primary text-completado\">Encuesta completada</span>\r\n                        </div>-->\r\n                        <div class=\"col-md-12\" *ngIf=\"!item.resuelto && item.fecha_fin_date<today\" style=\"padding: 25px\">\r\n                            <span class=\"bg-primary text-finalizado\">Encuesta finalizada</span>\r\n                        </div>                        \r\n                    </div>\r\n                </div>\r\n           \r\n        </div>\r\n        <div class=\"col-md-12\">\r\n            <p class=\"text-todas\" (click)=\"goListadoTodosEncuestas()\" style=\"padding-top: 40px;\"><u>Ver todas las encuestas</u></p>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-container *ngIf=\"verItemParaLLenado\">\r\n    <app-vista-encuesta-ext *ngIf=\"verItemParaLLenado\"\r\n    (onGoInicio)=\"handleGoInicio($event)\"\r\n    [main_data]=\"encuesta_main_data\"\r\n    [welcome_data]=\"encuesta_welcome_data\"\r\n    [indicaciones]=\"indicaciones\"\r\n    [agradecimiento_data]=\"encuesta_agradecimiento_data\"></app-vista-encuesta-ext>\r\n</ng-container>\r\n<ng-container *ngIf=\"verListadoTodos\">\r\n    <app-listado-todos-por-usuario-ext *ngIf=\"verListadoTodos\"\r\n    (onGoListadoPrincipal)=\"handleGoListadoPrincipal($event)\">\r\n    </app-listado-todos-por-usuario-ext>\r\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado-ext/pages/gestion-ext/pages/listado-todos-por-usuario-ext/listado-todos-por-usuario-ext.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado-ext/pages/gestion-ext/pages/listado-todos-por-usuario-ext/listado-todos-por-usuario-ext.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"_container\" *ngIf=\"verListado\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\" style=\"padding-top: 10px\"> \r\n            <button type=\"button\" class=\"btn btn-atras\" (click)=\"goBackMainList()\">\r\n                <i class=\"fa fa-arrow-left\"></i>&nbsp;&nbsp;&nbsp;&nbsp;Atrás\r\n            </button>            \r\n        </div>\r\n        <div class=\"col-md-12\" style=\"padding-top: 40px;\">\r\n            <p class=\"text-general\">Listado de encuestas</p>\r\n        </div> \r\n        <div class=\"col-md-12\" style=\"padding-top: 15px;\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12 div-filtro\" >                 \r\n                    <div class=\"row div-center\">\r\n                        <div class=\"col-md-3 div-input\" style=\"border-right: 1px solid #C5CEDB;\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Título\" style=\"padding-left: 25px;\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"input-icon\" viewBox=\"0 0 20 20\" fill=\"currentColor\">\r\n                                <path fill-rule=\"evenodd\" d=\"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z\" clip-rule=\"evenodd\" />\r\n                            </svg>\r\n                        </div>\r\n                        <div class=\"col-md-5\" style=\"border-right: 1px solid #C5CEDB;\">\r\n                            <form class=\"form-inline\" style=\"text-align: center;\" [formGroup]=\"formMACRO\">\r\n                                <div class=\"form-group\">            \r\n                                    <nz-form-item>\r\n                                        <nz-form-control>\r\n                                            <nz-input-group>\r\n                                                <nz-date-picker formControlName=\"FechaHoraInicio\" \r\n                                                    [(ngModel)]=\"frm.fecha_inicio\" \r\n                                                    nzFormat=\"dd/MM/yyyy\"\r\n                                                    [nzDisabledDate]=\"disabledStartDate\"\r\n                                                    nzPlaceHolder=\"Desde\" ngModel>\r\n                                                </nz-date-picker>\r\n                                            </nz-input-group>\r\n                                        </nz-form-control>\r\n                                    </nz-form-item>                                    \r\n                                </div>\r\n                                <div class=\"form-group\">   \r\n                                    <nz-form-item>\r\n                                        <nz-form-control>\r\n                                            <nz-input-group>\r\n                                                <nz-date-picker formControlName=\"FechaHoraFin\"\r\n                                                    [(ngModel)]=\"frm.fecha_fin\"\r\n                                                    nzFormat=\"dd/MM/yyyy\"\r\n                                                    [nzDisabledDate]=\"disabledEndDate\"\r\n                                                    nzPlaceHolder=\"Hasta\" ngModel>\r\n                                                </nz-date-picker>\r\n                                            </nz-input-group>\r\n                                        </nz-form-control>\r\n                                    </nz-form-item>                                    \r\n                                </div>\r\n                            </form>                           \r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <nz-select\r\n                            [(ngModel)]=\"frm.estado\">\r\n                            <ng-container *ngFor=\"let item of array_estados; let _idx of index\">\r\n                                <nz-option [nzValue]=\"item.id\" [nzLabel]=\"item.name\"></nz-option>\r\n                            </ng-container>\r\n                            </nz-select>\r\n                        </div>\r\n                        <div class=\"col-md-2\" style=\"text-align: center;\">\r\n                            <button type=\"button\" class=\"btn btn-default btn-limpiar\" (click)=\"handleClickLimpiar()\" style=\"margin-right: 10px;\">Limpiar</button>\r\n                            <button type=\"button\" class=\"btn btn-success btn-buscar\" (click)=\"get_list()\">Buscar</button>                             \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div> \r\n    </div>\r\n\r\n    \r\n    <div class=\"row\" style=\"padding-top: 45px;\">\r\n        <div class=\"col-md-3 div-bloque\" style=\"width: 268px\"  *ngFor=\"let item of EncuestaList; let _idx of index\"\r\n                [ngStyle]=\"{'opacity' : item.fecha_fin_date<today ? 0.5 : 1}\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12 div-cabecera\">\r\n                            <span *ngIf=\"item.es_anonima\" class=\"bg-warning text-anonimo\">*Esta encuesta es anónima</span>        \r\n                        </div>\r\n                        <div class=\"col-md-12\" style=\"padding: 25px 25px 15px 25px;\">\r\n                            <span class=\"text-activo\">Encuesta</span>\r\n                        </div>\r\n                        <div class=\"col-md-12\" style=\"padding: 0px 25px 0px 25px;\">\r\n                            <h3 class=\"text-titulo\">{{item.titulo}}</h3>\r\n                        </div>\r\n                        <div class=\"col-md-12 text-fecha\" style=\"padding: 0px 25px 5px 25px;\">\r\n                            <span class=\"text-fechas\">Desde {{item.inicio | date:'dd/MM/yyyy'}}</span><br>\r\n                            <span class=\"text-fechas\">Hasta {{item.fin | date:'dd/MM/yyyy'}}</span>\r\n                        </div>\r\n                       <div class=\"col-md-12\" *ngIf=\"!item.resuelto && item.fecha_fin_date>today && item.id_estado_resuelto ==_ESTADO.sin_comenzar\" style=\"padding: 25px\">\r\n                            <button type=\"button\" class=\"btn btn-default btn-comenzar\" (click)=\"verParaLLenado(item)\">Comenzar</button>\r\n                        </div>\r\n                        <div class=\"col-md-12\" *ngIf=\"!item.resuelto && item.fecha_fin_date>today && item.id_estado_resuelto ==_ESTADO.comenzada\"\r\n                         style=\"padding: 25px\">\r\n                            <button type=\"button\" class=\"btn btn-success btn-completar\" (click)=\"verParaLLenado(item)\">Continuar</button>\r\n                        </div>\r\n                        <div class=\"col-md-12\" *ngIf=\"item.resuelto && item.id_estado_resuelto == _ESTADO.completada\" style=\"padding: 25px\">\r\n                            <span class=\"bg-primary text-completado\">Encuesta completada</span>\r\n                        </div>\r\n                        <div class=\"col-md-12\" *ngIf=\"!item.resuelto && item.fecha_fin_date<today\" style=\"padding: 25px\">\r\n                            <span class=\"bg-primary text-finalizado\">Encuesta finalizada</span>\r\n                        </div>                        \r\n                    </div>\r\n                </div>    \r\n                \r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<ng-container *ngIf=\"verItemParaLLenado\">\r\n    <app-vista-encuesta-ext *ngIf=\"verItemParaLLenado\"\r\n    (onGoInicio)=\"handleGoInicio($event)\"\r\n    [main_data]=\"encuesta_main_data\"\r\n    [welcome_data]=\"encuesta_welcome_data\"\r\n    [indicaciones]=\"indicaciones\"\r\n    [agradecimiento_data]=\"encuesta_agradecimiento_data\"></app-vista-encuesta-ext>\r\n</ng-container>\r\n\r\n\r\n<!--<ng-container *ngIf=\"show_resultados\">\r\n    <app-resultado-chart *ngIf=\"show_resultados\"\r\n    (onEmitDataToHeader)=\"handleOnEmitDataToHeader($event)\"\r\n    (onGoBackListadoAll)=\"handleGoBackListadoAll($event)\"\r\n    [titulo_encuesta]=\"selected_title\"\r\n    [id_encuesta]=\"selected_id_encuesta\"></app-resultado-chart>\r\n</ng-container>-->\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado-ext/pages/gestion-ext/pages/llenado-pregunta-ext/llenado-pregunta-ext.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado-ext/pages/gestion-ext/pages/llenado-pregunta-ext/llenado-pregunta-ext.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ng-container *ngIf=\"show_pregunta_llenado\">\r\n    <div class=\"_container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-1\"></div>\r\n            <div class=\"col-sm-10\">\r\n                <div class=\"row\" *ngIf=\"total>0\">\r\n                    <div class=\"col-sm-12\" style=\"padding-top:10px; padding-bottom:10px\" *ngIf=\"!loaded_pagination\" align=\"center\">\r\n                        <span style=\"color:#cf2a27;font-size:25px\">\r\n                            <nz-spin nzSimple></nz-spin>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"col-sm-12\" style=\"padding-top:10px; padding-bottom:10px\" *ngIf=\"loaded_pagination\" align=\"center\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\" style=\"padding-top: 50px;\">\r\n                                <span *ngFor=\"let item of arrayPreguntas\" style=\"padding-right: 10px;\">\r\n                                    <img *ngIf=\"item.resuelto && !item.actual\" src=\"assets/img/contestado.png\" >\r\n                                    <img *ngIf=\"item.actual && !item.resuelto\" src=\"assets/img/actual.png\" >\r\n                                    <img *ngIf=\"!item.resuelto && !item.actual\" src=\"assets/img/sin_contestar.png\">\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n                    <div class=\"row\" *ngIf=\"total>0 && JSON_PREGUNTA!=null\" >\r\n                        <div [ngClass]=\"tieneArchivo ? 'col-md-7': 'col-md-12'\" style=\"padding-top: 50px;\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                    <span class=\"text-pregunta\">Pregunta</span>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                    <img (click)=\"start_speech()\" src=\"assets/img/audio.png\">&nbsp;&nbsp;&nbsp;\r\n                                    <span *ngIf=\"JSON_PREGUNTA.es_obligatorio\" class=\"text-obligatorio\">*Obligatorio</span>\r\n                                </div>\r\n                                <div class=\"col-md-12\" style=\"padding-top: 20px;\">\r\n                                    <span style=\"font-size: 20px;\" class=\"text-titulo\">{{Pregunta.pregunta}}</span>\r\n                                </div>\r\n                                <div class=\"col-md-12\" style=\"padding-top: 5px;\">\r\n                                    <span style=\"font-size: 15px;\" class=\"text-descripcion\">{{Pregunta.descripcion}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-12\" style=\"padding-top: 25px;padding-left: 0;\" *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.desplegable_institucional && JSON_PREGUNTA.tbl_data==2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-5 col-sm-6\">\r\n                                        <div style=\"background-color:#EAEFF5; height: 40px;\">\r\n                                            <label style=\"padding-top:9px\">\r\n                                                &nbsp;&nbsp;<strong>{{JSON_PREGUNTA.tbl_data==1?'Dependecia':'Regimen'}}</strong>\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-7 col-sm-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <nz-form-item>\r\n                                                <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\">\r\n                                                    <nz-input-group>\r\n                                                        <nz-select nzAllowClear nzShowSearch \r\n                                                        [(ngModel)]=\"JSON_PREGUNTA.respuesta\"\r\n                                                        style=\"width: 304px !important;\"\r\n                                                        nzPlaceHolder=\"--Seleccione--\">\r\n                                                            <ng-container *ngFor=\"let item of array_regimen_cbo\">\r\n                                                                <nz-option [nzValue]=\"item.id\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                                            </ng-container>\r\n                                                        </nz-select>\r\n                                                    </nz-input-group>\r\n                                                </nz-form-control>\r\n                                            </nz-form-item>\r\n                                        </div>\r\n                                       \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-12\" style=\"padding-top: 25px;padding-left: 0;\" *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.desplegable_institucional && JSON_PREGUNTA.tbl_data==1\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-5 col-sm-6\">\r\n                                        <div style=\"background-color:#EAEFF5; height: 40px;\">\r\n                                            <label style=\"padding-top:9px\">\r\n                                                &nbsp;&nbsp;<strong>Órgano de alta dirección</strong>\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-7 col-sm-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <nz-form-item>\r\n                                                <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\">\r\n                                                    <nz-input-group>\r\n                                                        <nz-select nzAllowClear \r\n                                                        [(ngModel)]=\"JSON_PREGUNTA.respuesta.d1\"\r\n                                                        (ngModelChange)=\"getD2($event)\"\r\n                                                        style=\"width: 304px !important;\"\r\n                                                        nzPlaceHolder=\"Opción 1\">\r\n                                                            <ng-container *ngFor=\"let item of d1\">\r\n                                                                <nz-option [nzValue]=\"item.id\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                                            </ng-container>\r\n                                                        </nz-select>\r\n                                                    </nz-input-group>\r\n                                                </nz-form-control>\r\n                                            </nz-form-item>\r\n                                        </div>\r\n                                       \r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-5 col-sm-6\" style=\"padding-top: 15px;\">\r\n                                        <div style=\"background-color:#EAEFF5; height: 40px;\">\r\n                                            <label style=\"padding-top:9px\">\r\n                                                &nbsp;&nbsp;<strong>Dirección/Oficina General</strong>\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-7 col-sm-6\" style=\"padding-top: 15px;\">\r\n                                        <nz-form-item>\r\n                                            <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\">\r\n                                                <nz-input-group>\r\n                                                    <nz-select nzAllowClear \r\n                                                    [(ngModel)]=\"JSON_PREGUNTA.respuesta.d2\"\r\n                                                    (ngModelChange)=\"getD3($event)\"\r\n                                                    [nzDisabled]=\"d2_disabled\"\r\n                                                    style=\"width: 304px !important;\"\r\n                                                    nzPlaceHolder=\"Opción 2\">\r\n                                                        <ng-container *ngFor=\"let item of d2\">\r\n                                                            <nz-option [nzValue]=\"item.id\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                                        </ng-container>\r\n                                                    </nz-select>\r\n                                                </nz-input-group>\r\n                                            </nz-form-control>\r\n                                        </nz-form-item>\r\n                                    </div>\r\n                                </div>\r\n    \r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-5 col-sm-6\" style=\"padding-top: 15px;\">\r\n                                        <div style=\"background-color:#EAEFF5; height: 40px;\">\r\n                                            <label style=\"padding-top:9px\">\r\n                                                &nbsp;&nbsp;<strong>Unidad Orgánica</strong>\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-7 col-sm-6\" style=\"padding-top: 15px;\">\r\n                                        <nz-form-item>\r\n                                            <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\">\r\n                                                <nz-input-group>\r\n                                                    <nz-select nzAllowClear \r\n                                                    [(ngModel)]=\"JSON_PREGUNTA.respuesta.d3\"\r\n                                                    [nzDisabled]=\"d3_disabled\"\r\n                                                    style=\"width: 304px !important;\"\r\n                                                    nzPlaceHolder=\"Opción 3\">\r\n                                                        <ng-container *ngFor=\"let item of d3\">\r\n                                                            <nz-option [nzValue]=\"item.id\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                                        </ng-container>\r\n                                                    </nz-select>\r\n                                                </nz-input-group>\r\n                                            </nz-form-control>\r\n                                        </nz-form-item>\r\n                                    </div>\r\n                                </div>\r\n                            </div> \r\n                            <div class=\"col-md-12\" style=\"padding-top: 25px;padding-left: 0;\" *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.desplegable_libre\">\r\n                                <nz-form-item>\r\n                                    <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\">\r\n                                        <nz-input-group>\r\n                                            <nz-select nzAllowClear nzShowSearch \r\n                                            [(ngModel)]=\"JSON_PREGUNTA.respuesta[0]\"\r\n                                            style=\"width: 304px !important;\"\r\n                                            nzPlaceHolder=\"--Seleccione--\">\r\n                                                <ng-container *ngFor=\"let item of JSON_PREGUNTA.opciones\">\r\n                                                    <nz-option [nzValue]=\"item.idx\" [nzLabel]=\"item.descripcion\"></nz-option>\r\n                                                </ng-container>\r\n                                            </nz-select>\r\n                                        </nz-input-group>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div> \r\n                            <div class=\"col-md-12\"  style=\"padding-top: 25px;padding-left: 0;\" *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.numerico_entero\" >\r\n                                <nz-form-item>\r\n                                    <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\" style=\"width:100%\">\r\n                                        <nz-input-group>\r\n                                            <input type=\"text\" style=\"width: 304px !important;\"\r\n                                            [(ngModel)]=\"JSON_PREGUNTA.respuesta\" \r\n                                            (keypress)=\"conteoDigitosEntero($event, JSON_PREGUNTA)\"\r\n                                            nz-input nzPlaceHolder=\"--Valor numérico decimal--\" >\r\n                                        </nz-input-group>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>   \r\n                            </div>  \r\n                            <div class=\"col-md-12\" style=\"padding-top: 25px;padding-left: 0;\" *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.numerico_decimal\" >\r\n                                \r\n                                    <nz-form-item style=\"width:100%\">\r\n                                        <nz-form-control nzErrorTip=\"Debe seleccionar un número!\" style=\"width:100%\">\r\n                                            <nz-input-group style=\"width:100%\">\r\n                                                <input \r\n                                                type=\"text\" \r\n                                                style=\"width:304px !important;\"\r\n                                                [(ngModel)]=\"JSON_PREGUNTA.respuesta\" \r\n                                                (keypress)=\"conteoDigitosDecimal($event, JSON_PREGUNTA)\"\r\n                                                >\r\n                                            </nz-input-group>\r\n                                        </nz-form-control>\r\n                                    </nz-form-item>                                \r\n                            </div> \r\n                            <div class=\"col-md-12\" style=\"padding-top: 25px;padding-left: 0;\" *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.seleccion_unica\">\r\n                               \r\n                                    <div class=\"radio\" *ngFor=\"let item of JSON_PREGUNTA.opciones; let idx=index\">\r\n                                        <label class=\"label-radio\">\r\n                                          <input \r\n                                          (click)=\"setOneClickedOnly(idx)\" \r\n                                          [class]=\"JSON_PREGUNTA.respuesta[item.idx].selected?'_btn btn-primary-custom':'_btn btn-white'\" \r\n                                          type=\"radio\" \r\n                                          name=\"optionsRadios\" \r\n                                          id=\"optionsRadios1\" \r\n                                          [checked]=\"JSON_PREGUNTA.respuesta[item.idx].selected\">\r\n                                          {{item.descripcion}}\r\n                                        </label>\r\n                                    </div>      \r\n                                    <div class=\"form-group\" *ngIf=\"esAgregarPreguntaMultiple\">\r\n                                        <nz-form-item>\r\n                                            <nz-form-control>\r\n                                                <nz-input-group>\r\n                                                    <textarea nz-input class=\"form-control\" \r\n                                                    maxlength=\"20\"\r\n                                                    [(ngModel)]=\"JSON_PREGUNTA.otro\"  placeholder=\"Otro\"></textarea>\r\n                                                </nz-input-group>\r\n                                            </nz-form-control>\r\n                                        </nz-form-item>  \r\n                                        <span class=\"text-caracteres\">max 20 caracteres</span>  \r\n                                    </div>\r\n                            </div>\r\n                            <div class=\"col-md-12\" style=\"padding-top: 25px;padding-left: 0;\" *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.seleccion_multiple\">\r\n                                <div class=\"checkbox\" *ngFor=\"let item of JSON_PREGUNTA.opciones; let idx=index\">\r\n                                    <label class=\"label-checkbox\">\r\n                                        <input \r\n                                        type=\"checkbox\" \r\n                                        [class]=\"JSON_PREGUNTA.respuesta[item.idx].selected?'_btn btn-primary-custom':'_btn btn-white'\"\r\n                                        [checked]=\"JSON_PREGUNTA.respuesta[item.idx].selected\"\r\n                                        (click)=\"setOneClickedMultiple(idx, item.idx)\">\r\n                                      {{item.descripcion}}\r\n                                    </label>\r\n                                </div>\r\n                                <div class=\"form-group\" *ngIf=\"esAgregarPreguntaMultiple\">\r\n                                    <nz-form-item>\r\n                                        <nz-form-control>\r\n                                            <nz-input-group>\r\n                                                <textarea nz-input class=\"form-control\" \r\n                                                maxlength=\"20\"\r\n                                                [(ngModel)]=\"JSON_PREGUNTA.otro\"  placeholder=\"Otro\"></textarea>\r\n                                            </nz-input-group>\r\n                                        </nz-form-control>\r\n                                    </nz-form-item>  \r\n                                    <span class=\"text-caracteres\">max 20 caracteres</span>  \r\n                                </div>\r\n                            </div>   \r\n                            <div class=\"col-md-12\" style=\"padding-top: 25px;padding-left: 0;\"  *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.matriz\">\r\n                                \r\n                                <div class=\"table-responsive table-striped table-bordered table-hover\" *ngIf=\"JSON_PREGUNTA.es_columna_matriz\">\r\n                                    <nz-table #basicTable \r\n                                    [nzData]=\"JSON_PREGUNTA.respuesta\"\r\n                                    [nzFrontPagination]=\"false\"\r\n                                    [nzShowPagination]=\"false\"\r\n                                    [nzLoading]=\"loading_matriz\"\r\n                                    class=\"container-table-custom\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th class=\"th-columna\"></th>\r\n                                                <th style=\"width:170px\" class=\"th-columna\" *ngFor=\"let col of JSON_PREGUNTA.columnas\" align=\"center\">{{col.nombre_columna}}</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr  *ngFor=\"let fila of basicTable.data\">\r\n                                                <td class=\"td-fila\" style=\"width:170px\" align=\"center\">{{ fila.nombre_fila }}</td>\r\n                                                <td *ngFor=\"let col of fila.columnas;\" align=\"center\">\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.numerico_entero\">\r\n                                                        <nz-form-item style=\"width:100%\">\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar un número!\" style=\"width:100%\">\r\n                                                                <nz-input-group style=\"width:100%\">\r\n                                                                    <input \r\n                                                                    type=\"text\" \r\n                                                                    style=\"width:170px\"\r\n                                                                    [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                    (ngModelChange)\t=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                    (keypress)=\"conteoDigitosEnteroMatriz($event,fila.idx,col.idx)\"\r\n                                                                    >\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.numerico_decimal\">\r\n                                                        <nz-form-item style=\"width:100%\">\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar un número!\" style=\"width:100%\">\r\n                                                                <nz-input-group style=\"width:100%\">\r\n                                                                    <input \r\n                                                                    type=\"text\" \r\n                                                                    style=\"width:170px\"\r\n                                                                    [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                    (ngModelChange)=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                    (keypress)=\"conteoDigitosEnteroMatriz($event,fila.idx,col.idx)\"\r\n                                                                    >\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.seleccion_unica\">\r\n                                                        <nz-form-item>\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\" style=\"width:100%\">\r\n                                                                <nz-input-group>\r\n                                                                    <nz-select nzAllowClear nzShowSearch\r\n                                                                    (ngModelChange)\t=\"setRespuestaMatriz(fila.idx,col.idx,true)\"\r\n                                                                    [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                    style=\"max-width: 100% !important; min-width: 170px !important;\"\r\n                                                                    nzPlaceHolder=\"--Seleccione--\">\r\n                                                                        <ng-container *ngFor=\"let _item of col.forma.opciones\">\r\n                                                                            <nz-option [nzValue]=\"_item.descripcion\" [nzLabel]=\"_item.descripcion\"></nz-option>\r\n                                                                        </ng-container>\r\n                                                                    </nz-select>\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.seleccion_multiple ||\r\n                                                    col.forma.id_tipo==_TIPO_PREGUNTA.desplegable_libre\">\r\n                                                        <nz-form-item>\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\" style=\"width:100%\">\r\n                                                                <nz-input-group>\r\n                                                                    <nz-select nzAllowClear nzShowSearch \r\n                                                                    [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                    (ngModelChange)\t=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                    style=\"max-width: 100% !important; min-width: 170px !important;\"\r\n                                                                    nzMode=\"multiple\"\r\n                                                                    nzPlaceHolder=\"--Seleccione--\">\r\n                                                                        <ng-container *ngFor=\"let _item of col.forma.opciones\">\r\n                                                                            <nz-option [nzValue]=\"_item.descripcion\" [nzLabel]=\"_item.descripcion\"></nz-option>\r\n                                                                        </ng-container>\r\n                                                                    </nz-select>\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.desplegable_institucional && col.forma.tbl_data==2\" class=\"row\">\r\n                                                        <nz-form-item>\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\" style=\"width:100%\">\r\n                                                                <nz-input-group>\r\n                                                                    <nz-select nzAllowClear nzShowSearch \r\n                                                                    [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                    (ngModelChange)\t=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                    style=\"max-width: 100% !important; min-width: 170px !important;\"\r\n                                                                    nzPlaceHolder=\"--Seleccione--\">\r\n                                                                        <ng-container *ngFor=\"let item of array_regimen_cbo\">\r\n                                                                            <nz-option [nzValue]=\"item.id\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                                                        </ng-container>\r\n                                                                    </nz-select>\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>\r\n    \r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.desplegable_institucional && col.forma.tbl_data==1\" class=\"row\">\r\n                                                        <nz-form-item>\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\" style=\"width:100%\">\r\n                                                                <nz-input-group>\r\n                                                                    <nz-select nzAllowClear nzShowSearch \r\n                                                                    [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                    (ngModelChange)\t=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                    style=\"max-width: 100% !important; min-width: 170px !important;\"\r\n                                                                    nzPlaceHolder=\"--Seleccione--\">\r\n                                                                        <ng-container *ngFor=\"let item of array_d_gen\">\r\n                                                                            <nz-option [nzValue]=\"item.id\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                                                        </ng-container>\r\n                                                                    </nz-select>\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.fecha\">\r\n                                                        <nz-form-item style=\"width:100%\">\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar una fecha!\" style=\"width:100%\">\r\n                                                                <nz-input-group style=\"width:100%\">\r\n                                                                    <nz-date-picker \r\n                                                                        style=\"width:170px\"\r\n                                                                        [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                        nzFormat=\"{{ col.forma.formato }}\"\r\n                                                                        nzPlaceHolder=\"{{ col.forma.formato }}\">\r\n                                                                        </nz-date-picker>\r\n                                                                    </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.texto\">\r\n                                                        <nz-form-item>\r\n                                                            <nz-form-control nzErrorTip=\"Debe ingresar un texto.\" style=\"width:100%\">\r\n                                                                <nz-input-group>\r\n                                                                    <textarea nz-input class=\"form-control\" \r\n                                                                    style=\"width:190px\"\r\n                                                                    maxlength=\"100\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\"  placeholder=\"Ingresar\"></textarea>\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>   \r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.archivo\">\r\n                                                        <app-file-uploader-extranet  \r\n                                                            [fileInfo]=\"false\"  \r\n                                                            [id]=\"fila.respuestas[col.idx]\" \r\n                                                            [(Files)]=\"_imagen_archivo\" \r\n                                                            [(Uploading)]=\"estaGuardando\"\r\n                                                            [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                                                            [esBorrador]=\"false\" \r\n                                                            (FileChange)=\"set_archivo_fila_matriz($event,fila.idx,col.idx)\"\r\n                                                            (onRemovedIdFile)=\"handleRemovedFilePresentacionMatriz($event,fila.idx,col.idx)\"\r\n                                                            [extensionAceptados]=\"imagen_extensionAceptados\"   \r\n                                                            [tiposMimePermitidos]=\"imagen_MimePermitidos\" \r\n                                                            [view_width]=\"600\"\r\n                                                            [puedeVerArchivo]=\"true\"\r\n                                                            [puedeEliminarArchivo]=\"true\"\r\n                                                            [puedeDescargarArchivo] = \"true\"\r\n                                                            [url]=\"url\" \r\n                                                            [loading]=\"estaGuardando\">\r\n                                                        </app-file-uploader-extranet>  \r\n                                                    </div>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </nz-table>\r\n                                </div>\r\n                                <div class=\"table-responsive table-striped table-bordered table-hover\" *ngIf=\"!JSON_PREGUNTA.es_columna_matriz\">\r\n                                    <nz-table #basicTable \r\n                                    [nzData]=\"JSON_PREGUNTA.respuesta\"\r\n                                    [nzFrontPagination]=\"false\"\r\n                                    [nzShowPagination]=\"false\"\r\n                                    [nzLoading]=\"loading_matriz\"\r\n                                    class=\"container-table-custom\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th class=\"th-columna\"></th>\r\n                                                <th class=\"th-columna\" style=\"width:170px\"  *ngFor=\"let col of JSON_PREGUNTA.columnas\" align=\"center\">{{col.nombre_columna}}</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody >\r\n                                            <tr *ngFor=\"let fila of basicTable.data\" align=\"center\">\r\n                                                <td class=\"td-fila\" style=\"min-width:250px\" align=\"center\">{{fila.nombre_fila}}</td>\r\n                                                <td align=\"center\" *ngFor=\"let col of fila.columnas;\">\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.numerico_entero\">\r\n                                                        <nz-form-item style=\"width:100%\">\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar un número!\" style=\"width:100%\">\r\n                                                                <nz-input-group style=\"width:100%\">\r\n                                                                    <input \r\n                                                                    type=\"text\" \r\n                                                                    style=\"width:170px\"\r\n                                                                    [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                    (ngModelChange)\t=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                    (keypress)=\"conteoDigitosEnteroMatriz($event,fila.idx,col.idx)\"\r\n                                                                    >\r\n                                                                    <!-- <nz-input-number  style=\"width:95%\"\r\n                                                                        [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                        [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                        (ngModelChange)\t=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                        [nzMin]=\"1\" \r\n                                                                        [nzMax]=\"9999\">\r\n                                                                    </nz-input-number> -->\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.numerico_decimal\">\r\n                                                        <nz-form-item style=\"width: 95%\">\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar un número!\"style=\"width:100%\">\r\n                                                                <nz-input-group style=\"width:100%\">\r\n                                                                    <input \r\n                                                                    type=\"text\" \r\n                                                                    style=\"width:170px\"\r\n                                                                    [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                    (ngModelChange)=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                    (keypress)=\"conteoDigitosDecimalMatriz($event,fila.idx,col.idx)\"\r\n                                                                    >\r\n                                                                    <!-- <nz-input-number  style=\"width:95%\"\r\n                                                                        [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                        [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                        (ngModelChange)=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                        [nzMin]=\"1\" \r\n                                                                        [nzMax]=\"9999\" \r\n                                                                        [nzStep]=\"setNroDecimales(col.forma.nro_decimal)\">\r\n                                                                    </nz-input-number> -->\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.seleccion_unica\">\r\n                                                        <nz-form-item>\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\" style=\"width:100%\">\r\n                                                                <nz-input-group>\r\n                                                                    <nz-select nzAllowClear nzShowSearch\r\n                                                                    (ngModelChange)\t=\"setRespuestaMatriz(fila.idx,col.idx,true)\"\r\n                                                                    [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                    style=\"max-width: 100% !important; min-width: 170px !important;\"\r\n                                                                    nzPlaceHolder=\"--Seleccione--\">\r\n                                                                        <ng-container *ngFor=\"let _item of col.forma.opciones\">\r\n                                                                            <nz-option [nzValue]=\"_item.descripcion\" [nzLabel]=\"_item.descripcion\"></nz-option>\r\n                                                                        </ng-container>\r\n                                                                    </nz-select>\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.seleccion_multiple ||\r\n                                                    col.forma.id_tipo==_TIPO_PREGUNTA.desplegable_libre\">\r\n                                                        <nz-form-item>\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\" style=\"width:100%\">\r\n                                                                <nz-input-group>\r\n                                                                    <nz-select nzAllowClear nzShowSearch \r\n                                                                    [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                    (ngModelChange)\t=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                    style=\"max-width: 100% !important; min-width: 170px !important;\"\r\n                                                                    nzMode=\"multiple\"\r\n                                                                    nzPlaceHolder=\"--Seleccione--\">\r\n                                                                        <ng-container *ngFor=\"let _item of col.forma.opciones\">\r\n                                                                            <nz-option [nzValue]=\"_item.descripcion\" [nzLabel]=\"_item.descripcion\"></nz-option>\r\n                                                                        </ng-container>\r\n                                                                    </nz-select>\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.desplegable_institucional && col.forma.tbl_data==2\" class=\"row\">\r\n                                                        <nz-form-item>\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\" style=\"width:100%\">\r\n                                                                <nz-input-group>\r\n                                                                    <nz-select nzAllowClear nzShowSearch \r\n                                                                    [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                    (ngModelChange)\t=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                    style=\"max-width: 100% !important; min-width: 170px !important;\"\r\n                                                                    nzPlaceHolder=\"--Seleccione--\">\r\n                                                                        <ng-container *ngFor=\"let item of array_regimen_cbo\">\r\n                                                                            <nz-option [nzValue]=\"item.id\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                                                        </ng-container>\r\n                                                                    </nz-select>\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>    \r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.desplegable_institucional && col.forma.tbl_data==1\" class=\"row\">\r\n                                                        <nz-form-item>\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\" style=\"width:100%\">\r\n                                                                <nz-input-group>\r\n                                                                    <nz-select nzAllowClear nzShowSearch \r\n                                                                    [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                    (ngModelChange)\t=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                    style=\"max-width: 100% !important; min-width: 170px !important;\"\r\n                                                                    nzPlaceHolder=\"--Seleccione--\">\r\n                                                                        <ng-container *ngFor=\"let item of array_d_gen\">\r\n                                                                            <nz-option [nzValue]=\"item.id\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                                                        </ng-container>\r\n                                                                    </nz-select>\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.fecha\">\r\n                                                        <nz-form-item style=\"width:100%\">\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar una fecha!\" style=\"width:100%\">\r\n                                                                <nz-input-group style=\"width:100%\">\r\n                                                                    <nz-date-picker \r\n                                                                    style=\"max-width: 100%!important;\"\r\n                                                                        [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                        nzFormat=\"{{ col.forma.formato }}\"\r\n                                                                        nzPlaceHolder=\"{{ col.forma.formato }}\">\r\n                                                                        </nz-date-picker>\r\n                                                                    </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.texto\">\r\n                                                        <nz-form-item>\r\n                                                            <nz-form-control nzErrorTip=\"Debe ingresar un texto.\" style=\"width:100%\">\r\n                                                                <nz-input-group>\r\n                                                                    <textarea nz-input class=\"form-control\" \r\n                                                                    style=\"width:190px\"\r\n                                                                    maxlength=\"100\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\"  placeholder=\"Ingresar\"></textarea>\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>   \r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.archivo\">\r\n                                                        <app-file-uploader-extranet  \r\n                                                            [fileInfo]=\"false\"  \r\n                                                            [id]=\"fila.respuestas[col.idx]\" \r\n                                                            [(Files)]=\"_imagen_archivo\" \r\n                                                            [(Uploading)]=\"estaGuardando\"\r\n                                                            [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                                                            [esBorrador]=\"false\" \r\n                                                            (FileChange)=\"set_archivo_fila_matriz($event,fila.idx,col.idx)\"\r\n                                                            (onRemovedIdFile)=\"handleRemovedFilePresentacionMatriz($event,fila.idx,col.idx)\"\r\n                                                            [extensionAceptados]=\"imagen_extensionAceptados\"   \r\n                                                            [tiposMimePermitidos]=\"imagen_MimePermitidos\" \r\n                                                            [view_width]=\"600\"\r\n                                                            [puedeVerArchivo]=\"true\"\r\n                                                            [puedeEliminarArchivo]=\"true\"\r\n                                                            [puedeDescargarArchivo] = \"true\"\r\n                                                            [url]=\"url\" \r\n                                                            [loading]=\"estaGuardando\">\r\n                                                        </app-file-uploader-extranet>  \r\n                                                    </div>\r\n                                                </td>                                                \r\n                                            </tr>             \r\n                                        </tbody>\r\n                                    </nz-table>\r\n                                </div>\r\n                            </div> \r\n                            <div class=\"col-md-12\" style=\"padding-top: 25px;padding-left: 0;\" *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.fecha\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-5 col-sm-6\">\r\n                                        <div style=\"background-color:#EAEFF5; height: 40px;\">\r\n                                            <label style=\"padding-top:9px\">\r\n                                                &nbsp;&nbsp;<strong>Selecciona fecha</strong>\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-7 col-sm-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <nz-date-picker \r\n                                            [(ngModel)]=\"JSON_PREGUNTA.respuesta\" \r\n                                            nzFormat=\"{{formato_fecha}}\"\r\n                                            nzPlaceHolder=\"{{formato_fecha}}\">\r\n                                            </nz-date-picker>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div> \r\n                            <div class=\"col-md-12\" style=\"padding-top: 25px;padding-left: 0;\" *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.texto\" >\r\n                                <div class=\"form-group\">\r\n                                    <nz-form-item>\r\n                                        <nz-form-control nzErrorTip=\"Debe ingresar un texto.\">\r\n                                            <nz-input-group>\r\n                                                <textarea nz-input class=\"form-control\" \r\n                                                maxlength=\"{{cantidad_caracteres}}\"\r\n                                                [(ngModel)]=\"JSON_PREGUNTA.respuesta\"  placeholder=\"Ingresar\"></textarea>\r\n                                            </nz-input-group>\r\n                                        </nz-form-control>\r\n                                    </nz-form-item>   \r\n                                </div>\r\n                                <span class=\"text-caracteres\">Caracteres max {{cantidad_caracteres}}</span>\r\n                            </div> \r\n                            <div class=\"col-md-12 \" style=\"padding-top: 25px;padding-left: 0;\" *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.mensaje\" >\r\n                                <div class=\"text-mensaje\" [innerHTML]=\"JSON_PREGUNTA.mensaje\"></div>\r\n                            </div> \r\n                            <div class=\"col-md-12\" style=\"padding-top: 25px;padding-left: 0;\" *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.archivo\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-8 col-sm-12\">\r\n                                        <app-file-uploader-extranet  \r\n                                            [fileInfo]=\"true\"  \r\n                                            [id]=\"JSON_PREGUNTA.respuesta\" \r\n                                            [(Files)]=\"_imagen_archivo\" \r\n                                            [(Uploading)]=\"estaGuardando\"\r\n                                            [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                                            [esBorrador]=\"false\" \r\n                                            (FileChange)=\"set_imagen_iden($event)\"\r\n                                            (onRemovedIdFile)=\"handleRemovedFilePresentacion($event)\"\r\n                                            [extensionAceptados]=\"_imagen_extensionAceptados\"   \r\n                                            [tiposMimePermitidos]=\"_imagen_MimePermitidos\" \r\n                                            [nombreSeleccion] = \"_placeholder\"\r\n                                            [view_width]=\"600\"\r\n                                            [puedeVerArchivo]=\"true\"\r\n                                            [puedeEliminarArchivo]=\"true\"\r\n                                            [puedeDescargarArchivo] = \"true\"\r\n                                            [url]=\"url\" \r\n                                            [loading]=\"estaGuardando\">\r\n                                        </app-file-uploader-extranet>\r\n                                    </div> \r\n                                    <div class=\"col-md-8 col-sm-12\" style=\"padding-top: 30px;\">\r\n                                        <p class=\"text-archivo\">Para subir un archivo sigue estos pasos</p>\r\n                                    </div>  \r\n                                    <div class=\"col-md-12 col-sm-12\" style=\"padding-top: 12px;\">\r\n                                        <span class=\"text-archivo\">1. Da click en el icono <img src=\"assets/img/adjuntar.png\"> para adjuntar un archivo desde tu dispositivo</span><br>\r\n                                        <span class=\"text-archivo\">2. Da click en el icono <img src=\"assets/img/subir.png\"> para cargarlo y guardarlo</span>\r\n                                    </div>                                 \r\n                                </div>\r\n                            </div> \r\n                        </div>    \r\n\r\n                        <div [ngClass]=\"tieneArchivo ? 'col-md-5': 'col-md-12'\" style=\"padding-top: 50px;\"  align=\"center\">\r\n                           <div *ngIf=\"_loaded_media_pregunta && _idYoutubeVideo_pregunta && Pregunta && Pregunta.id_tipo_archivo==_TIPO_ARCHIVO.video\">\r\n                            <youtube-player\r\n                                [videoId]=\"_idYoutubeVideo_pregunta\"\r\n                                (ready)=\"_savePlayer_pregunta($event)\"\r\n                                [width]=\"'100%'\"\r\n                                [height]=\"300\"\r\n                                (change)=\"_onStateChange_pregunta($event)\">\r\n                            </youtube-player>\r\n                           </div>\r\n                           <div  style=\"width: 100%;\" *ngIf=\"_loaded_media_pregunta && Pregunta && Pregunta.id_tipo_archivo==_TIPO_ARCHIVO.imagen\">\r\n                            <img [src]=\"_urlArchivo_pregunta\" width=\"400px\" height=\"415px\">\r\n                            </div>\r\n                            <div  style=\"width: 100%;\" *ngIf=\"_loaded_media_pregunta==false && Pregunta && Pregunta.id_tipo_archivo==_TIPO_ARCHIVO.imagen\">\r\n                                <img src=\"../../../../../../../assets/images/Imagen_no_disponible.png\" width=\"400px\" height=\"415px\">\r\n                            </div> \r\n                        </div>                        \r\n                    </div>      \r\n                </div>\r\n                <div class=\"row\" style=\"padding-top: 80px\">\r\n                    <div class=\"col-sm-6 text-left\">\r\n                        <button style=\"font-size: 16px !important;\" type=\"button\" class=\"btn btn-atras\" (click)=\"onPageChangePrev()\" *ngIf=\"pageIndex>1\" >\r\n                            <i class=\"fa fa-arrow-left\"></i>&nbsp;&nbsp;&nbsp;&nbsp;Volver\r\n                        </button>\r\n                        <button style=\"font-size: 16px !important;\" type=\"button\" class=\"btn btn-atras\" (click)=\"GoBackEncuesta()\" *ngIf=\"pageIndex==1\">\r\n                            <i class=\"fa fa-arrow-left\"></i>&nbsp;&nbsp;&nbsp;&nbsp;Atrás\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"col-sm-6 text-right\">\r\n                        <button type=\"button\" class=\"btn btn-finalizar\" (click)=\"goFinalizarEncuesta()\" *ngIf=\"pageIndex>=total\" style=\"margin-right: 0px; font-size: 16px !important;\">\r\n                            Finalizar&nbsp;&nbsp;&nbsp;&nbsp;<i class=\"fa fa-arrow-right\"></i></button>\r\n                        <button type=\"button\" class=\"btn btn-siguiente\" (click)=\"onPageChangeNext()\" *ngIf=\"total>pageIndex\" style=\"margin-right: 0px; font-size: 16px !important;\">\r\n                            Siguiente&nbsp;&nbsp;&nbsp;&nbsp;<i class=\"fa fa-arrow-right\"></i></button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-1\"></div>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n<ng-container *ngIf=\"show_final_envio\">\r\n    <div class=\"_container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-1\"></div>\r\n            <div class=\"col-sm-10 row\">\r\n                <div class=\"col-sm-12\" align=\"center\" style=\"padding-top: 100px;\">\r\n                    <br><h1 class=\"text-gracias\">Muchas gracias por participar en el Censo de Startups peruanas 2023&nbsp;&nbsp;&nbsp;&nbsp;\r\n                        <img src=\"assets/img/audio.png\"></h1>\r\n                </div>\r\n                <div class=\"col-sm-12\" align=\"center\">\r\n                    <br><br>\r\n                    <p class=\"text-mensaje\">Tu encuesta ha sido completada satisfactoriamente el {{fecha_envio | date:'dd/MM/yyyy'}} a las {{fecha_envio | date:'hh:mm:ss a'}}</p>\r\n                </div>\r\n                <div class=\"col-sm-12\" align=\"center\" style=\"padding-top: 30px;\">\r\n                    <br>\r\n                        <button (click)=\"goBackToInicio()\" type=\"button\" style=\"background-color: #128C3C;color: #ffffff;font-size: 16px !important;\" \r\n                        class=\"btn btn-continuar\">Finalizar</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-1\"></div>\r\n            <div class=\"col-md-12\" style=\"padding-left: 0px;padding-right: 0px; margin-top: 250px;\">\r\n                <div class=\"col-md-4\" style=\"padding: 0px; text-align-last: left;\">\r\n                    <img src=\"../../../../../../../assets/images/logo-produce2.png\" width=\"65%\">\r\n                </div>\r\n                <div class=\"col-md-4\" style=\"padding: 0px; text-align-last: center;\">\r\n                    <img src=\"../../../../../../../assets/images/logo-proinnovate.png\" width=\"60%\">\r\n                </div>\r\n                <div class=\"col-md-4\" style=\"padding: 0px; text-align-last: right;\">\r\n                    <img src=\"../../../../../../../assets/images/logo-pecap.png\" width=\"60%\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"show_pantalla_agradecimiento\">\r\n    <div class=\"_container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <br><h1 style=\"color:#dc3545\">{{title?title:''}}</h1>\r\n            </div>\r\n            <div class=\"col-sm-1\"></div>\r\n            <div class=\"col-sm-10 row\">\r\n                <div class=\"col-sm-11\">\r\n                    <h3 style=\"color:#dc3545\">{{agradecimiento_data?agradecimiento_data.mensaje_agradecimiento:''}}</h3>\r\n                </div>\r\n                <div class=\"col-sm-1\" align=\"right\"></div>\r\n                \r\n                <div class=\"col-sm-12\" align=\"center\">\r\n                    <br>\r\n                    <div  *ngIf=\"_loaded_media_agradecimiento && _idYoutubeVideo_agradecimiento \r\n                    && agradecimiento_data \r\n                    && agradecimiento_data.id_tipo_archivo==_TIPO_ARCHIVO.video\" align=\"center\">\r\n                        <youtube-player\r\n                            [videoId]=\"_idYoutubeVideo_agradecimiento\"\r\n                            (ready)=\"_savePlayer_agradecimiento($event)\"\r\n                            [width]=\"'100%'\"\r\n                            [height]=\"400\"\r\n                            (change)=\"_onStateChange_agradecimiento($event)\">\r\n                        </youtube-player>\r\n                    </div>\r\n                    <div  style=\"width: 100%;\" *ngIf=\"_loaded_media_agradecimiento && agradecimiento_data && agradecimiento_data.id_tipo_archivo==_TIPO_ARCHIVO.imagen\">\r\n                        <img [src]=\"_urlArchivo_agradecimiento\" width=\"400px\" height=\"415px\">\r\n                    </div>\r\n                    <div  style=\"width: 100%;\" *ngIf=\"_loaded_media_agradecimiento==false && agradecimiento_data && agradecimiento_data.id_tipo_archivo==_TIPO_ARCHIVO.imagen\">\r\n                        <img src=\"../../../../../../../assets/images/Imagen_no_disponible.png\" width=\"400px\" height=\"415px\">\r\n                    </div> \r\n                </div>\r\n                <div class=\"col-sm-12\" align=\"center\">\r\n                    <br>\r\n                    <button type=\"button\" class=\"btn btn-primary-custom\" (click)=\"goBackToInicio()\" style=\"font-size:15px;font-size: 16px !important;\">\r\n                        Volver al inicio <i class=\"fa fa-share\"></i>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-1\"></div>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado-ext/pages/gestion-ext/pages/llenado-pregunta-seccion-ext/llenado-pregunta-seccion-ext.component.html":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado-ext/pages/gestion-ext/pages/llenado-pregunta-seccion-ext/llenado-pregunta-seccion-ext.component.html ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ng-container *ngIf=\"show_pregunta_llenado\">\r\n    <div class=\"_container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-1\"></div>\r\n            <div class=\"col-sm-10\">\r\n                <div class=\"row\" *ngIf=\"total>0\">\r\n                    <div class=\"col-sm-12\" style=\"padding-top:10px; padding-bottom:10px\" *ngIf=\"!loaded_pagination\" align=\"center\">\r\n                        <span style=\"color:#cf2a27;font-size:25px\">\r\n                            <nz-spin nzSimple></nz-spin>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"col-sm-12\" style=\"padding-top:10px; padding-bottom:10px\" *ngIf=\"loaded_pagination\" align=\"center\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\" style=\"padding-top: 50px;\">\r\n                                <span *ngFor=\"let item of arraySecciones\" style=\"padding-right: 10px;\">\r\n                                    <span style=\"font-size: 20px;\" class=\"text-seccion-activo\" *ngIf=\"item.actual\">{{item.seccion}} {{item.orden}} <img style=\"margin-top: -3px;\" src=\"assets/img/seccion.png\"></span>\r\n                                    <span style=\"font-size: 20px;\" class=\"text-seccion-inactivo\" *ngIf=\"!item.actual\">{{item.orden}}</span>         \r\n                                </span>\r\n                            </div>\r\n                            <div class=\"col-md-12\" style=\"padding-top: 20px;\">\r\n                                <span *ngFor=\"let item of arraySeccionActivo.preguntas\" style=\"padding-right: 10px;\">\r\n                                    <img *ngIf=\"item.resuelto && !item.actual\" src=\"assets/img/contestado.png\" >\r\n                                    <img *ngIf=\"item.actual && !item.resuelto\" src=\"assets/img/actual.png\" >\r\n                                    <img *ngIf=\"!item.resuelto && !item.actual\" src=\"assets/img/sin_contestar.png\">\r\n                                </span>\r\n                            </div>\r\n                            <!-- <nz-radio-group [(ngModel)]=\"pageIndex\" nzButtonStyle=\"solid\" (ngModelChange)=\"onPageChange($event)\">\r\n                                <label *ngFor=\"let page of getPaginationNotHidden(); let idx=index;\"  \r\n                                nz-radio-button\r\n                                [ngClass]=\"{'btn_marked': page.resolved}\"\r\n                                [nzValue]=\"page.page\" >{{page.page}}</label>\r\n                            </nz-radio-group> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" *ngIf=\"total>0 && JSON_PREGUNTA!=null\" >\r\n                        <div [ngClass]=\"tieneArchivo ? 'col-md-7': 'col-md-12'\" style=\"padding-top: 50px;\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                    <span class=\"text-pregunta\">Pregunta</span>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                    <img (click)=\"start_speech()\" src=\"assets/img/audio.png\">&nbsp;&nbsp;&nbsp;\r\n                                    <span *ngIf=\"JSON_PREGUNTA.es_obligatorio\" class=\"text-obligatorio\">*Obligatorio</span>\r\n                                </div>\r\n                                <div class=\"col-md-12\" style=\"padding-top: 20px;\">\r\n                                    <span style=\"font-size: 20px;\" class=\"text-titulo\">{{Pregunta.pregunta}}</span>\r\n                                </div>\r\n                                <div class=\"col-md-12\" style=\"padding-top: 5px;\">\r\n                                    <span style=\"font-size: 15px;\" class=\"text-descripcion\">{{Pregunta.descripcion}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-12\" style=\"padding-top: 25px;padding-left: 0;\" *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.desplegable_institucional && JSON_PREGUNTA.tbl_data==2\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-5 col-sm-6\">\r\n                                        <div style=\"background-color:#EAEFF5; height: 40px;\">\r\n                                            <label style=\"padding-top:9px\">\r\n                                                &nbsp;&nbsp;<strong>{{JSON_PREGUNTA.tbl_data==1?'Dependecia':'Regimen'}}</strong>\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-7 col-sm-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <nz-form-item>\r\n                                                <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\">\r\n                                                    <nz-input-group>\r\n                                                        <nz-select nzAllowClear nzShowSearch \r\n                                                        [(ngModel)]=\"JSON_PREGUNTA.respuesta\"\r\n                                                        style=\"width: 304px !important;\"\r\n                                                        nzPlaceHolder=\"--Seleccione--\">\r\n                                                            <ng-container *ngFor=\"let item of array_regimen_cbo\">\r\n                                                                <nz-option [nzValue]=\"item.id\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                                            </ng-container>\r\n                                                        </nz-select>\r\n                                                    </nz-input-group>\r\n                                                </nz-form-control>\r\n                                            </nz-form-item>\r\n                                        </div>\r\n                                       \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-12\" style=\"padding-top: 25px;padding-left: 0;\" *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.desplegable_institucional && JSON_PREGUNTA.tbl_data==1\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-5 col-sm-6\">\r\n                                        <div style=\"background-color:#EAEFF5; height: 40px;\">\r\n                                            <label style=\"padding-top:9px\">\r\n                                                &nbsp;&nbsp;<strong>Órgano de alta dirección</strong>\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-7 col-sm-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <nz-form-item>\r\n                                                <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\">\r\n                                                    <nz-input-group>\r\n                                                        <nz-select nzAllowClear \r\n                                                        [(ngModel)]=\"JSON_PREGUNTA.respuesta.d1\"\r\n                                                        (ngModelChange)=\"getD2($event)\"\r\n                                                        style=\"width: 304px !important;\"\r\n                                                        nzPlaceHolder=\"Opción 1\">\r\n                                                            <ng-container *ngFor=\"let item of d1\">\r\n                                                                <nz-option [nzValue]=\"item.id\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                                            </ng-container>\r\n                                                        </nz-select>\r\n                                                    </nz-input-group>\r\n                                                </nz-form-control>\r\n                                            </nz-form-item>\r\n                                        </div>\r\n                                       \r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-5 col-sm-6\" style=\"padding-top: 15px;\">\r\n                                        <div style=\"background-color:#EAEFF5; height: 40px;\">\r\n                                            <label style=\"padding-top:9px\">\r\n                                                &nbsp;&nbsp;<strong>Dirección/Oficina General</strong>\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-7 col-sm-6\" style=\"padding-top: 15px;\">\r\n                                        <nz-form-item>\r\n                                            <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\">\r\n                                                <nz-input-group>\r\n                                                    <nz-select nzAllowClear \r\n                                                    [(ngModel)]=\"JSON_PREGUNTA.respuesta.d2\"\r\n                                                    (ngModelChange)=\"getD3($event)\"\r\n                                                    [nzDisabled]=\"d2_disabled\"\r\n                                                    style=\"width: 304px !important;\"\r\n                                                    nzPlaceHolder=\"Opción 2\">\r\n                                                        <ng-container *ngFor=\"let item of d2\">\r\n                                                            <nz-option [nzValue]=\"item.id\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                                        </ng-container>\r\n                                                    </nz-select>\r\n                                                </nz-input-group>\r\n                                            </nz-form-control>\r\n                                        </nz-form-item>\r\n                                    </div>\r\n                                </div>\r\n    \r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-5 col-sm-6\" style=\"padding-top: 15px;\">\r\n                                        <div style=\"background-color:#EAEFF5; height: 40px;\">\r\n                                            <label style=\"padding-top:9px\">\r\n                                                &nbsp;&nbsp;<strong>Unidad Orgánica</strong>\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-7 col-sm-6\" style=\"padding-top: 15px;\">\r\n                                        <nz-form-item>\r\n                                            <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\">\r\n                                                <nz-input-group>\r\n                                                    <nz-select nzAllowClear \r\n                                                    [(ngModel)]=\"JSON_PREGUNTA.respuesta.d3\"\r\n                                                    [nzDisabled]=\"d3_disabled\"\r\n                                                    style=\"width: 304px !important;\"\r\n                                                    nzPlaceHolder=\"Opción 3\">\r\n                                                        <ng-container *ngFor=\"let item of d3\">\r\n                                                            <nz-option [nzValue]=\"item.id\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                                        </ng-container>\r\n                                                    </nz-select>\r\n                                                </nz-input-group>\r\n                                            </nz-form-control>\r\n                                        </nz-form-item>\r\n                                    </div>\r\n                                </div>\r\n                            </div> \r\n                            <div class=\"col-md-12\" style=\"padding-top: 25px;padding-left: 0;\" *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.desplegable_libre\">\r\n                                <nz-form-item>\r\n                                    <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\">\r\n                                        <nz-input-group>\r\n                                            <nz-select nzAllowClear nzShowSearch \r\n                                            [(ngModel)]=\"JSON_PREGUNTA.respuesta[0]\"\r\n                                            style=\"width: 304px !important;\"\r\n                                            nzPlaceHolder=\"--Seleccione--\">\r\n                                                <ng-container *ngFor=\"let item of JSON_PREGUNTA.opciones\">\r\n                                                    <nz-option [nzValue]=\"item.idx\" [nzLabel]=\"item.descripcion\"></nz-option>\r\n                                                </ng-container>\r\n                                            </nz-select>\r\n                                        </nz-input-group>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div> \r\n                            <div class=\"col-md-12\"  style=\"padding-top: 25px;padding-left: 0;\" *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.numerico_entero\" >\r\n                                <nz-form-item>\r\n                                    <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\" style=\"width:100%\">\r\n                                        <nz-input-group>\r\n                                            <input type=\"text\" style=\"width: 304px !important;\"\r\n                                            [(ngModel)]=\"JSON_PREGUNTA.respuesta\" \r\n                                            (keypress)=\"conteoDigitosEntero($event, JSON_PREGUNTA)\"\r\n                                            nz-input nzPlaceHolder=\"--Valor numérico decimal--\" >\r\n                                        </nz-input-group>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>   \r\n                            </div>  \r\n                            <div class=\"col-md-12\" style=\"padding-top: 25px;padding-left: 0;\" *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.numerico_decimal\" >\r\n                                \r\n                                    <nz-form-item style=\"width:100%\">\r\n                                        <nz-form-control nzErrorTip=\"Debe seleccionar un número!\" style=\"width:100%\">\r\n                                            <nz-input-group style=\"width:100%\">\r\n                                                <input \r\n                                                type=\"text\" \r\n                                                style=\"width:304px !important;\"\r\n                                                [(ngModel)]=\"JSON_PREGUNTA.respuesta\" \r\n                                                (keypress)=\"conteoDigitosDecimal($event, JSON_PREGUNTA)\"\r\n                                                >\r\n                                            </nz-input-group>\r\n                                        </nz-form-control>\r\n                                    </nz-form-item>                                \r\n                            </div> \r\n                            <div class=\"col-md-12\" style=\"padding-top: 25px;padding-left: 0;\" *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.seleccion_unica\">\r\n                               \r\n                                    <div class=\"radio\" *ngFor=\"let item of JSON_PREGUNTA.opciones; let idx=index\">\r\n                                        <label class=\"label-radio\">\r\n                                          <input \r\n                                            (click)=\"setOneClickedOnly(idx, item.idx)\" \r\n                                            [class]=\"JSON_PREGUNTA.respuesta[item.idx].selected?'_btn btn-primary-custom':'_btn btn-white'\"\r\n                                            [checked]=\"JSON_PREGUNTA.respuesta[item.idx].selected\"\r\n                                            type=\"radio\" \r\n                                            name=\"optionsRadios\" \r\n                                            id=\"optionsRadios1\">\r\n                                          {{item.descripcion}}\r\n                                        </label>\r\n                                    </div>   \r\n                                    <div class=\"form-group\" *ngIf=\"esAgregarPreguntaMultiple\">\r\n                                        <nz-form-item>\r\n                                            <nz-form-control>\r\n                                                <nz-input-group>\r\n                                                    <textarea nz-input class=\"form-control\" \r\n                                                    maxlength=\"20\"\r\n                                                    [(ngModel)]=\"JSON_PREGUNTA.otro\"  placeholder=\"Otro\"></textarea>\r\n                                                </nz-input-group>\r\n                                            </nz-form-control>\r\n                                        </nz-form-item>  \r\n                                        <span class=\"text-caracteres\">max 20 caracteres</span>  \r\n                                    </div> \r\n                            </div>\r\n                            <div class=\"col-md-12\" style=\"padding-top: 25px;padding-left: 0;\" *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.seleccion_multiple\">\r\n                                <div class=\"checkbox\" *ngFor=\"let item of JSON_PREGUNTA.opciones; let idx=index\">\r\n                                    <label class=\"label-checkbox\">\r\n                                      <input \r\n                                      type=\"checkbox\" \r\n                                      [class]=\"JSON_PREGUNTA.respuesta[item.idx].selected?'_btn btn-primary-custom':'_btn btn-white'\"\r\n                                      [checked]=\"JSON_PREGUNTA.respuesta[item.idx].selected\"\r\n                                      (click)=\"setOneClickedMultiple(idx, item.idx)\">\r\n                                      {{item.descripcion}}\r\n                                    </label>\r\n                                </div>\r\n                                <div class=\"form-group\" *ngIf=\"esAgregarPreguntaMultiple\">\r\n                                    <nz-form-item>\r\n                                        <nz-form-control>\r\n                                            <nz-input-group>\r\n                                                <textarea nz-input class=\"form-control\" \r\n                                                maxlength=\"20\"\r\n                                                [(ngModel)]=\"JSON_PREGUNTA.otro\"  placeholder=\"Otro\"></textarea>\r\n                                            </nz-input-group>\r\n                                        </nz-form-control>\r\n                                    </nz-form-item>  \r\n                                    <span class=\"text-caracteres\">max 20 caracteres</span>  \r\n                                </div>\r\n                            </div>   \r\n                            <div class=\"col-md-12\" style=\"padding-top: 25px;padding-left: 0;\"  *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.matriz\">\r\n                                \r\n                                <div class=\"table-responsive table-striped table-bordered table-hover\" *ngIf=\"JSON_PREGUNTA.es_columna_matriz\">\r\n                                    <nz-table #basicTable \r\n                                    [nzData]=\"JSON_PREGUNTA.respuesta\"\r\n                                    [nzFrontPagination]=\"false\"\r\n                                    [nzShowPagination]=\"false\"\r\n                                    [nzLoading]=\"loading_matriz\"\r\n                                    class=\"container-table-custom\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th class=\"th-columna\"></th>\r\n                                                <th style=\"width:170px\" class=\"th-columna\" *ngFor=\"let col of JSON_PREGUNTA.columnas\" align=\"center\">{{col.nombre_columna}}</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr  *ngFor=\"let fila of basicTable.data\">\r\n                                                <td class=\"td-fila\" style=\"width:170px\" align=\"center\">{{ fila.nombre_fila }}</td>\r\n                                                <td *ngFor=\"let col of fila.columnas;\" align=\"center\">\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.numerico_entero\">\r\n                                                        <nz-form-item style=\"width:100%\">\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar un número!\" style=\"width:100%\">\r\n                                                                <nz-input-group style=\"width:100%\">\r\n                                                                    <input \r\n                                                                    type=\"text\" \r\n                                                                    style=\"width:170px\"\r\n                                                                    [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                    (ngModelChange)\t=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                    (keypress)=\"conteoDigitosEnteroMatriz($event,fila.idx,col.idx)\"\r\n                                                                    >\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.numerico_decimal\">\r\n                                                        <nz-form-item style=\"width:100%\">\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar un número!\" style=\"width:100%\">\r\n                                                                <nz-input-group style=\"width:100%\">\r\n                                                                    <input \r\n                                                                    type=\"text\" \r\n                                                                    style=\"width:170px\"\r\n                                                                    [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                    (ngModelChange)=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                    (keypress)=\"conteoDigitosDecimalMatriz($event,fila.idx,col.idx)\"\r\n                                                                    >\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.seleccion_unica\">\r\n                                                        <nz-form-item>\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\" style=\"width:100%\">\r\n                                                                <nz-input-group>\r\n                                                                    <nz-select nzAllowClear nzShowSearch\r\n                                                                    (ngModelChange)\t=\"setRespuestaMatriz(fila.idx,col.idx,true)\"\r\n                                                                    [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                    style=\"max-width: 100% !important; min-width: 170px !important;\"\r\n                                                                    nzPlaceHolder=\"--Seleccione--\">\r\n                                                                        <ng-container *ngFor=\"let _item of col.forma.opciones\">\r\n                                                                            <nz-option [nzValue]=\"_item.descripcion\" [nzLabel]=\"_item.descripcion\"></nz-option>\r\n                                                                        </ng-container>\r\n                                                                    </nz-select>\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.seleccion_multiple ||\r\n                                                    col.forma.id_tipo==_TIPO_PREGUNTA.desplegable_libre\">\r\n                                                        <nz-form-item>\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\" style=\"width:100%\">\r\n                                                                <nz-input-group>\r\n                                                                    <nz-select nzAllowClear nzShowSearch \r\n                                                                    [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                    (ngModelChange)\t=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                    style=\"max-width: 100% !important; min-width: 170px !important;\"\r\n                                                                    nzMode=\"multiple\"\r\n                                                                    nzPlaceHolder=\"--Seleccione--\">\r\n                                                                        <ng-container *ngFor=\"let _item of col.forma.opciones\">\r\n                                                                            <nz-option [nzValue]=\"_item.descripcion\" [nzLabel]=\"_item.descripcion\"></nz-option>\r\n                                                                        </ng-container>\r\n                                                                    </nz-select>\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.desplegable_institucional && col.forma.tbl_data==2\" class=\"row\">\r\n                                                        <nz-form-item>\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\" style=\"width:100%\">\r\n                                                                <nz-input-group>\r\n                                                                    <nz-select nzAllowClear nzShowSearch \r\n                                                                    [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                    (ngModelChange)\t=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                    style=\"max-width: 100% !important; min-width: 170px !important;\"\r\n                                                                    nzPlaceHolder=\"--Seleccione--\">\r\n                                                                        <ng-container *ngFor=\"let item of array_regimen_cbo\">\r\n                                                                            <nz-option [nzValue]=\"item.id\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                                                        </ng-container>\r\n                                                                    </nz-select>\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>\r\n    \r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.desplegable_institucional && col.forma.tbl_data==1\" class=\"row\">\r\n                                                        <nz-form-item>\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\" style=\"width:100%\">\r\n                                                                <nz-input-group>\r\n                                                                    <nz-select nzAllowClear nzShowSearch \r\n                                                                    [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                    (ngModelChange)\t=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                    style=\"max-width: 100% !important; min-width: 170px !important;\"\r\n                                                                    nzPlaceHolder=\"--Seleccione--\">\r\n                                                                        <ng-container *ngFor=\"let item of array_d_gen\">\r\n                                                                            <nz-option [nzValue]=\"item.id\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                                                        </ng-container>\r\n                                                                    </nz-select>\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.fecha\">\r\n                                                        <nz-form-item style=\"width:100%\">\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar una fecha!\" style=\"width:100%\">\r\n                                                                <nz-input-group style=\"width:100%\">\r\n                                                                    <nz-date-picker \r\n                                                                        style=\"width:170px\"\r\n                                                                        [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                        nzFormat=\"{{ col.forma.formato }}\"\r\n                                                                        nzPlaceHolder=\"{{ col.forma.formato }}\">\r\n                                                                        </nz-date-picker>\r\n                                                                    </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.texto\">\r\n                                                        <nz-form-item>\r\n                                                            <nz-form-control nzErrorTip=\"Debe ingresar un texto.\" style=\"width:100%\">\r\n                                                                <nz-input-group>\r\n                                                                    <textarea nz-input class=\"form-control\" \r\n                                                                    style=\"width:190px\"\r\n                                                                    maxlength=\"100\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\"  placeholder=\"Ingresar\"></textarea>\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>   \r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.archivo\">\r\n                                                        <app-file-uploader-extranet  \r\n                                                            [fileInfo]=\"false\"  \r\n                                                            [id]=\"fila.respuestas[col.idx]\" \r\n                                                            [(Files)]=\"_imagen_archivo\" \r\n                                                            [(Uploading)]=\"estaGuardando\"\r\n                                                            [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                                                            [esBorrador]=\"false\" \r\n                                                            (FileChange)=\"set_archivo_fila_matriz($event,fila.idx,col.idx)\"\r\n                                                            (onRemovedIdFile)=\"handleRemovedFilePresentacionMatriz($event,fila.idx,col.idx)\"\r\n                                                            [extensionAceptados]=\"imagen_extensionAceptados\"   \r\n                                                            [tiposMimePermitidos]=\"imagen_MimePermitidos\" \r\n                                                            [view_width]=\"600\"\r\n                                                            [puedeVerArchivo]=\"true\"\r\n                                                            [puedeEliminarArchivo]=\"true\"\r\n                                                            [puedeDescargarArchivo] = \"true\"\r\n                                                            [url]=\"url\" \r\n                                                            [loading]=\"estaGuardando\">\r\n                                                        </app-file-uploader-extranet>  \r\n                                                    </div>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </nz-table>\r\n                                </div>\r\n                                <div class=\"table-responsive table-striped table-bordered table-hover\" *ngIf=\"!JSON_PREGUNTA.es_columna_matriz\">\r\n                                    <nz-table #basicTable \r\n                                    [nzData]=\"JSON_PREGUNTA.respuesta\"\r\n                                    [nzFrontPagination]=\"false\"\r\n                                    [nzShowPagination]=\"false\"\r\n                                    [nzLoading]=\"loading_matriz\"\r\n                                    class=\"container-table-custom\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th class=\"th-columna\"></th>\r\n                                                <th class=\"th-columna\" style=\"width:170px\"  *ngFor=\"let col of JSON_PREGUNTA.columnas\" align=\"center\">{{col.nombre_columna}}</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody >\r\n                                            <tr *ngFor=\"let fila of basicTable.data\" align=\"center\">\r\n                                                <td class=\"td-fila\" style=\"min-width:250px\" align=\"center\">{{fila.nombre_fila}}</td>\r\n                                                <td align=\"center\" *ngFor=\"let col of fila.columnas;\">\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.numerico_entero\">\r\n                                                        <nz-form-item style=\"width:100%\">\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar un número!\" style=\"width:100%\">\r\n                                                                <nz-input-group style=\"width:100%\">\r\n                                                                    <input \r\n                                                                    type=\"text\" \r\n                                                                    style=\"width:170px\"\r\n                                                                    [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                    (ngModelChange)\t=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                    (keypress)=\"conteoDigitosEnteroMatriz($event,fila.idx,col.idx)\"\r\n                                                                    >\r\n                                                                    <!-- <nz-input-number  style=\"width:95%\"\r\n                                                                        [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                        [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                        (ngModelChange)\t=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                        [nzMin]=\"1\" \r\n                                                                        [nzMax]=\"9999\">\r\n                                                                    </nz-input-number> -->\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.numerico_decimal\">\r\n                                                        <nz-form-item style=\"width: 95%\">\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar un número!\"style=\"width:100%\">\r\n                                                                <nz-input-group style=\"width:100%\">\r\n                                                                    <input \r\n                                                                    type=\"text\" \r\n                                                                    style=\"width:170px\"\r\n                                                                    [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                    (ngModelChange)=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                    (keypress)=\"conteoDigitosDecimalMatriz($event,fila.idx,col.idx)\"\r\n                                                                    >\r\n                                                                    <!-- <nz-input-number  style=\"width:95%\"\r\n                                                                        [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                        [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                        (ngModelChange)=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                        [nzMin]=\"1\" \r\n                                                                        [nzMax]=\"9999\" \r\n                                                                        [nzStep]=\"setNroDecimales(col.forma.nro_decimal)\">\r\n                                                                    </nz-input-number> -->\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.seleccion_unica\">\r\n                                                        <nz-form-item>\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\" style=\"width:100%\">\r\n                                                                <nz-input-group>\r\n                                                                    <nz-select nzAllowClear nzShowSearch\r\n                                                                    (ngModelChange)\t=\"setRespuestaMatriz(fila.idx,col.idx,true)\"\r\n                                                                    [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                    style=\"max-width: 100% !important; min-width: 170px !important;\"\r\n                                                                    nzPlaceHolder=\"--Seleccione--\">\r\n                                                                        <ng-container *ngFor=\"let _item of col.forma.opciones\">\r\n                                                                            <nz-option [nzValue]=\"_item.descripcion\" [nzLabel]=\"_item.descripcion\"></nz-option>\r\n                                                                        </ng-container>\r\n                                                                    </nz-select>\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.seleccion_multiple ||\r\n                                                    col.forma.id_tipo==_TIPO_PREGUNTA.desplegable_libre\">\r\n                                                        <nz-form-item>\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\" style=\"width:100%\">\r\n                                                                <nz-input-group>\r\n                                                                    <nz-select nzAllowClear nzShowSearch \r\n                                                                    [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                    (ngModelChange)\t=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                    style=\"max-width: 100% !important; min-width: 170px !important;\"\r\n                                                                    nzMode=\"multiple\"\r\n                                                                    nzPlaceHolder=\"--Seleccione--\">\r\n                                                                        <ng-container *ngFor=\"let _item of col.forma.opciones\">\r\n                                                                            <nz-option [nzValue]=\"_item.descripcion\" [nzLabel]=\"_item.descripcion\"></nz-option>\r\n                                                                        </ng-container>\r\n                                                                    </nz-select>\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.desplegable_institucional && col.forma.tbl_data==2\" class=\"row\">\r\n                                                        <nz-form-item>\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\" style=\"width:100%\">\r\n                                                                <nz-input-group>\r\n                                                                    <nz-select nzAllowClear nzShowSearch \r\n                                                                    [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                    (ngModelChange)\t=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                    style=\"max-width: 100% !important; min-width: 170px !important;\"\r\n                                                                    nzPlaceHolder=\"--Seleccione--\">\r\n                                                                        <ng-container *ngFor=\"let item of array_regimen_cbo\">\r\n                                                                            <nz-option [nzValue]=\"item.id\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                                                        </ng-container>\r\n                                                                    </nz-select>\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>    \r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.desplegable_institucional && col.forma.tbl_data==1\" class=\"row\">\r\n                                                        <nz-form-item>\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\" style=\"width:100%\">\r\n                                                                <nz-input-group>\r\n                                                                    <nz-select nzAllowClear nzShowSearch \r\n                                                                    [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                    (ngModelChange)\t=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                    style=\"max-width: 100% !important; min-width: 170px !important;\"\r\n                                                                    nzPlaceHolder=\"--Seleccione--\">\r\n                                                                        <ng-container *ngFor=\"let item of array_d_gen\">\r\n                                                                            <nz-option [nzValue]=\"item.id\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                                                        </ng-container>\r\n                                                                    </nz-select>\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.fecha\">\r\n                                                        <nz-form-item style=\"width:100%\">\r\n                                                            <nz-form-control nzErrorTip=\"Debe seleccionar una fecha!\" style=\"width:100%\">\r\n                                                                <nz-input-group style=\"width:100%\">\r\n                                                                    <nz-date-picker \r\n                                                                    style=\"max-width: 100%!important;\"\r\n                                                                        [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                        nzFormat=\"{{ col.forma.formato }}\"\r\n                                                                        nzPlaceHolder=\"{{ col.forma.formato }}\">\r\n                                                                        </nz-date-picker>\r\n                                                                    </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>\r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.texto\">\r\n                                                        <nz-form-item>\r\n                                                            <nz-form-control nzErrorTip=\"Debe ingresar un texto.\" style=\"width:100%\">\r\n                                                                <nz-input-group>\r\n                                                                    <textarea nz-input class=\"form-control\" \r\n                                                                    style=\"width:190px\"\r\n                                                                    maxlength=\"100\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\"  placeholder=\"Ingresar\"></textarea>\r\n                                                                </nz-input-group>\r\n                                                            </nz-form-control>\r\n                                                        </nz-form-item>   \r\n                                                    </div>\r\n                                                    <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.archivo\">\r\n                                                        <app-file-uploader-extranet  \r\n                                                            [fileInfo]=\"false\"  \r\n                                                            [id]=\"fila.respuestas[col.idx]\" \r\n                                                            [(Files)]=\"_imagen_archivo\" \r\n                                                            [(Uploading)]=\"estaGuardando\"\r\n                                                            [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                                                            [esBorrador]=\"false\" \r\n                                                            (FileChange)=\"set_archivo_fila_matriz($event,fila.idx,col.idx)\"\r\n                                                            (onRemovedIdFile)=\"handleRemovedFilePresentacionMatriz($event,fila.idx,col.idx)\"\r\n                                                            [extensionAceptados]=\"imagen_extensionAceptados\"   \r\n                                                            [tiposMimePermitidos]=\"imagen_MimePermitidos\" \r\n                                                            [view_width]=\"600\"\r\n                                                            [puedeVerArchivo]=\"true\"\r\n                                                            [puedeEliminarArchivo]=\"true\"\r\n                                                            [puedeDescargarArchivo] = \"true\"\r\n                                                            [url]=\"url\" \r\n                                                            [loading]=\"estaGuardando\">\r\n                                                        </app-file-uploader-extranet>  \r\n                                                    </div>\r\n                                                </td>                                                \r\n                                            </tr>             \r\n                                        </tbody>\r\n                                    </nz-table>\r\n                                </div>\r\n                            </div> \r\n                            <div class=\"col-md-12\" style=\"padding-top: 25px;padding-left: 0;\" *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.fecha\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-5 col-sm-6\">\r\n                                        <div style=\"background-color:#EAEFF5; height: 40px;\">\r\n                                            <label style=\"padding-top:9px\">\r\n                                                &nbsp;&nbsp;<strong>Selecciona fecha</strong>\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-7 col-sm-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <nz-date-picker \r\n                                            [(ngModel)]=\"JSON_PREGUNTA.respuesta\" \r\n                                            nzFormat=\"{{formato_fecha}}\"\r\n                                            nzPlaceHolder=\"{{formato_fecha}}\">\r\n                                            </nz-date-picker>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div> \r\n                            <div class=\"col-md-12\" style=\"padding-top: 25px;padding-left: 0;\" *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.texto\" >\r\n                                <div class=\"form-group\">\r\n                                    <nz-form-item>\r\n                                        <nz-form-control nzErrorTip=\"Debe ingresar un texto.\">\r\n                                            <nz-input-group>\r\n                                                <textarea nz-input class=\"form-control\" \r\n                                                maxlength=\"{{cantidad_caracteres}}\"\r\n                                                [(ngModel)]=\"JSON_PREGUNTA.respuesta\"  placeholder=\"Ingresar\"></textarea>\r\n                                            </nz-input-group>\r\n                                        </nz-form-control>\r\n                                    </nz-form-item>   \r\n                                </div>\r\n                                <span class=\"text-caracteres\">Caracteres max {{cantidad_caracteres}}</span>\r\n                            </div> \r\n                            <div class=\"col-md-12 \" style=\"padding-top: 25px;padding-left: 0;\" *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.mensaje\" >\r\n                                <div class=\"text-mensaje\" [innerHTML]=\"JSON_PREGUNTA.mensaje\"></div>\r\n                            </div> \r\n                            <div class=\"col-md-12\" style=\"padding-top: 25px;padding-left: 0;\" *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.archivo\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-8 col-sm-12\">\r\n                                        <app-file-uploader-extranet  \r\n                                            [fileInfo]=\"true\"  \r\n                                            [id]=\"JSON_PREGUNTA.respuesta\" \r\n                                            [(Files)]=\"_imagen_archivo\" \r\n                                            [(Uploading)]=\"estaGuardando\"\r\n                                            [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                                            [esBorrador]=\"false\" \r\n                                            (FileChange)=\"set_imagen_iden($event)\"\r\n                                            (onRemovedIdFile)=\"handleRemovedFilePresentacion($event)\"\r\n                                            [extensionAceptados]=\"_imagen_extensionAceptados\"   \r\n                                            [tiposMimePermitidos]=\"_imagen_MimePermitidos\" \r\n                                            [nombreSeleccion] = \"_placeholder\"\r\n                                            [view_width]=\"600\"\r\n                                            [puedeVerArchivo]=\"true\"\r\n                                            [puedeEliminarArchivo]=\"true\"\r\n                                            [puedeDescargarArchivo] = \"true\"\r\n                                            [url]=\"url\" \r\n                                            [loading]=\"estaGuardando\">\r\n                                        </app-file-uploader-extranet>\r\n                                    </div> \r\n                                    <div class=\"col-md-8 col-sm-12\" style=\"padding-top: 30px;\">\r\n                                        <p class=\"text-archivo\">Para subir un archivo sigue estos pasos</p>\r\n                                    </div>  \r\n                                    <div class=\"col-md-12 col-sm-12\" style=\"padding-top: 12px;\">\r\n                                        <span class=\"text-archivo\">1. Da click en el icono <img src=\"assets/img/adjuntar.png\"> para adjuntar un archivo desde tu dispositivo</span><br>\r\n                                        <span class=\"text-archivo\">2. Da click en el icono <img src=\"assets/img/subir.png\"> para cargarlo y guardarlo</span>\r\n                                    </div>                                 \r\n                                </div>\r\n                            </div> \r\n                        </div>    \r\n\r\n                        <div [ngClass]=\"tieneArchivo ? 'col-md-5': 'col-md-12'\" style=\"padding-top: 50px;\"  align=\"center\">\r\n                           <div *ngIf=\"_loaded_media_pregunta && _idYoutubeVideo_pregunta && Pregunta && Pregunta.id_tipo_archivo==_TIPO_ARCHIVO.video\">\r\n                            <youtube-player\r\n                                [videoId]=\"_idYoutubeVideo_pregunta\"\r\n                                (ready)=\"_savePlayer_pregunta($event)\"\r\n                                [width]=\"'100%'\"\r\n                                [height]=\"300\"\r\n                                (change)=\"_onStateChange_pregunta($event)\">\r\n                            </youtube-player>\r\n                           </div>\r\n                           <div  style=\"width: 100%;\" *ngIf=\"_loaded_media_pregunta && Pregunta && Pregunta.id_tipo_archivo==_TIPO_ARCHIVO.imagen\">\r\n                            <img [src]=\"_urlArchivo_pregunta\" width=\"400px\" height=\"415px\">\r\n                            </div>\r\n                            <div  style=\"width: 100%;\" *ngIf=\"_loaded_media_pregunta==false && Pregunta && Pregunta.id_tipo_archivo==_TIPO_ARCHIVO.imagen\">\r\n                                <img src=\"../../../../../../../assets/images/Imagen_no_disponible.png\" width=\"400px\" height=\"415px\">\r\n                            </div> \r\n                        </div>                        \r\n                    </div>        \r\n                </div>\r\n                <div class=\"row\" style=\"padding-top: 80px\">\r\n                    <div class=\"col-sm-6 text-left\">\r\n                        <button style=\"font-size: 16px !important;\" type=\"button\" class=\"btn btn-atras\" (click)=\"onPageChangePrev()\" *ngIf=\"pageIndex>1\" >\r\n                            <i class=\"fa fa-arrow-left\"></i>&nbsp;&nbsp;&nbsp;&nbsp;Volver\r\n                        </button>\r\n                        <button style=\"font-size: 16px !important;\" type=\"button\" class=\"btn btn-atras\" (click)=\"GoBackEncuesta()\" *ngIf=\"pageIndex==1\">\r\n                            <i class=\"fa fa-arrow-left\"></i>&nbsp;&nbsp;&nbsp;&nbsp;Atrás\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"col-sm-6 text-right\">\r\n                        <button type=\"button\" class=\"btn btn-finalizar\" (click)=\"goFinalizarEncuesta()\" *ngIf=\"pageIndex>=total\" style=\"margin-right: 0px; font-size: 16px !important;\">\r\n                            Finalizar&nbsp;&nbsp;&nbsp;&nbsp;<i class=\"fa fa-arrow-right\"></i></button>\r\n                        <button type=\"button\" class=\"btn btn-siguiente\" (click)=\"onPageChangeNext()\" *ngIf=\"total>pageIndex && !esPreguntaUltima\"  style=\"margin-right: 0px; font-size: 16px !important;\">\r\n                            Siguiente&nbsp;&nbsp;&nbsp;&nbsp;<i class=\"fa fa-arrow-right\"></i></button>\r\n                        <button type=\"button\" class=\"btn btn-finalizar\" (click)=\"onPageChangeNext()\" *ngIf=\"total>pageIndex && esPreguntaUltima\"  style=\"margin-right: 0px; font-size: 16px !important;\">\r\n                            Ir a la sección {{numeroSeccion}}&nbsp;&nbsp;&nbsp;&nbsp;<i class=\"fa fa-arrow-right\"></i></button>\r\n                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-1\"></div>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n<ng-container *ngIf=\"show_final_envio\">\r\n    <div class=\"_container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-1\"></div>\r\n            <div class=\"col-sm-10 row\">\r\n                <div class=\"col-sm-12\" align=\"center\" style=\"padding-top: 100px;\">\r\n                    <br><h1 class=\"text-gracias\">Muchas gracias por participar en el Censo de Startups peruanas 2023&nbsp;&nbsp;&nbsp;&nbsp;\r\n                        <img src=\"assets/img/audio.png\"></h1>\r\n                </div>\r\n                <div class=\"col-sm-12\" align=\"center\">\r\n                    <br><br>\r\n                    <p class=\"text-mensaje\">Tu encuesta ha sido completada satisfactoriamente el {{fecha_envio | date:'dd/MM/yyyy'}} a las {{fecha_envio | date:'hh:mm:ss a'}}</p>\r\n                </div>\r\n                <div class=\"col-sm-12\" align=\"center\" style=\"padding-top: 30px;\">\r\n                    <br>\r\n                        <button (click)=\"goBackToInicio()\" type=\"button\" style=\"background-color: #128C3C;color: #ffffff;font-size: 16px !important;\" \r\n                        class=\"btn btn-continuar\">Finalizar</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-1\"></div>\r\n            <div class=\"col-md-12\" style=\"padding-left: 0px;padding-right: 0px; margin-top: 250px;\">\r\n                <div class=\"col-md-4\" style=\"padding: 0px; text-align-last: left;\">\r\n                    <img src=\"../../../../../../../assets/images/logo-produce2.png\" width=\"65%\">\r\n                </div>\r\n                <div class=\"col-md-4\" style=\"padding: 0px; text-align-last: center;\">\r\n                    <img src=\"../../../../../../../assets/images/logo-proinnovate.png\" width=\"60%\">\r\n                </div>\r\n                <div class=\"col-md-4\" style=\"padding: 0px; text-align-last: right;\">\r\n                    <img src=\"../../../../../../../assets/images/logo-pecap.png\" width=\"60%\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"show_pantalla_agradecimiento\">\r\n    <div class=\"_container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <br><h1 style=\"color:#dc3545\">{{title?title:''}}</h1>\r\n            </div>\r\n            <div class=\"col-sm-1\"></div>\r\n            <div class=\"col-sm-10 row\">\r\n                <div class=\"col-sm-11\">\r\n                    <h3 style=\"color:#dc3545\">{{agradecimiento_data?agradecimiento_data.mensaje_agradecimiento:''}}</h3>\r\n                </div>\r\n                <div class=\"col-sm-1\" align=\"right\"></div>\r\n                \r\n                <div class=\"col-sm-12\" align=\"center\">\r\n                    <br>\r\n                    <div  *ngIf=\"_loaded_media_agradecimiento && _idYoutubeVideo_agradecimiento \r\n                    && agradecimiento_data \r\n                    && agradecimiento_data.id_tipo_archivo==_TIPO_ARCHIVO.video\" align=\"center\">\r\n                        <youtube-player\r\n                            [videoId]=\"_idYoutubeVideo_agradecimiento\"\r\n                            (ready)=\"_savePlayer_agradecimiento($event)\"\r\n                            [width]=\"'100%'\"\r\n                            [height]=\"400\"\r\n                            (change)=\"_onStateChange_agradecimiento($event)\">\r\n                        </youtube-player>\r\n                    </div>\r\n                    <div  style=\"width: 100%;\" *ngIf=\"_loaded_media_agradecimiento && agradecimiento_data && agradecimiento_data.id_tipo_archivo==_TIPO_ARCHIVO.imagen\">\r\n                        <img [src]=\"_urlArchivo_agradecimiento\" width=\"400px\" height=\"415px\">\r\n                    </div>\r\n                    <div  style=\"width: 100%;\" *ngIf=\"_loaded_media_agradecimiento==false && agradecimiento_data && agradecimiento_data.id_tipo_archivo==_TIPO_ARCHIVO.imagen\">\r\n                        <img src=\"../../../../../../../assets/images/Imagen_no_disponible.png\" width=\"400px\" height=\"415px\">\r\n                    </div> \r\n                </div>\r\n                <div class=\"col-sm-12\" align=\"center\">\r\n                    <br>\r\n                    <button type=\"button\" class=\"btn btn-primary-custom\" (click)=\"goBackToInicio()\" style=\"font-size:15px;font-size: 16px !important;\">\r\n                        Volver al inicio <i class=\"fa fa-share\"></i>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-1\"></div>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado-ext/pages/gestion-ext/pages/vista-encuesta-ext/vista-encuesta-ext.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado-ext/pages/gestion-ext/pages/vista-encuesta-ext/vista-encuesta-ext.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"show_selected_encuesta\">\r\n    <div class=\"_container\">\r\n        <div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\" style=\"padding-top: 50px\">\r\n                    <button type=\"button\" class=\"btn btn-atras\" (click)=\"goInicio()\">\r\n                        <i class=\"fa fa-arrow-left\"></i>&nbsp;&nbsp;&nbsp;&nbsp;Atrás\r\n                    </button> \r\n                </div>\r\n            </div> \r\n            <div class=\"row\" style=\"padding-top: 50px;\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <form class=\"form-inline\" style=\"text-align: left;\">\r\n                                <div class=\"form-group\" *ngIf=\"main_data.es_anonima\">                          \r\n                                    <span class=\"bg-warning text-anonimo\">*Esta encuesta es anónima</span>\r\n                                </div>\r\n                                <div class=\"form-group\" style=\"padding-left: 10px;\">                                      \r\n                                    <button [hidden]=\"true\" #btnPlayWelcomeAudio id=\"btnPlayWelcomeAudio\" \r\n                                    class=\"btnPlayWelcomeAudio\" (click)=\"this.welcome_audio.muted = true;this.welcome_audio.play()\">Play</button>\r\n                                    \r\n                                        <div align=\"right\" *ngIf=\"_audio_loaded && _audio_exists\">\r\n                                \r\n                                            <span *ngIf=\"_audio_loaded && _audio_exists\" style=\"color:#2473B6;font-size:25px\" \r\n                                            class=\"btn_hoverable\" (click)=\"_handleWelcomeEncuestaClick()\">\r\n                                                <i [class]=\"_volume_value>0?(_volume_value>30?'fa fa-volume-up':'fa fa-volume-down'):'fa fa-volume-off'\"></i>\r\n                                            </span>\r\n                                        \r\n                                            <span *ngIf=\"_audio_loaded && _audio_exists\" style=\"color:#2473B6;font-size:25px;padding-left:5px\" \r\n                                            class=\"btn_hoverable\" (click)=\"handleAudioPauseEncuesta()\">\r\n                                                <i [class]=\"audio_paused_encuesta?'fa fa-play-circle-o':'fa fa-pause-circle-o'\"></i>\r\n                                        </span>                           \r\n                                \r\n                                </div>\r\n                                <div  align=\"right\" *ngIf=\"!_audio_loaded && _audio_exists\" style=\"margin-top: 2px\">\r\n                                    <div class=\"col-md-2 col-sm-12\">\r\n                                        <span *ngIf=\"_audio_exists\" \r\n                                        class=\"btn_disabled\" >\r\n                                        <img src=\"assets/img/audio.png\">\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                </div>\r\n                            </form>  \r\n                                \r\n                                \r\n                                \r\n                        </div>\r\n                        <div class=\"col-md-12\" style=\"padding-top: 30px;\">\r\n                            <h3 class=\"text-titulo\">{{main_data?main_data.titulo:''}}</h3>\r\n                        </div>\r\n                        <div class=\"col-md-12\" style=\"padding-top: 10px;\">\r\n                            <form>\r\n                                <div class=\"form-group row\">\r\n                                  <label for=\"\" class=\"col-md-4 col-sm-6 col-form-label\" style=\"margin-right: -30px;\">\r\n                                    <img src=\"assets/img/clock.png\" width=\"18px\">\r\n                                    <span style=\"margin-left: 10px;\">Tiempo: {{main_data.tiempo_estimado}} min</span>\r\n                                  </label>\r\n                                  <div class=\"col-md-4 col-sm-6\">\r\n                                    <img src=\"assets/img/total.png\" width=\"18px\">\r\n                                    <span style=\"margin-left: 10px;\">{{PreguntasList.length}} preguntas</span>\r\n                                  </div>\r\n                                </div>                                \r\n                            </form>\r\n                            <!--<div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <img src=\"assets/img/clock.png\" width=\"18px\">\r\n                                    <span style=\"margin-left: 15px;\">Tiempo: {{main_data.tiempo_estimado}} min</span>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <img src=\"assets/img/total.png\" width=\"18px\">\r\n                                    <span style=\"margin-left: 15px;\">{{PreguntasList.length}} preguntas</span>\r\n                                </div>\r\n                            </div>-->\r\n                        </div>\r\n                        <div class=\"col-md-12\" style=\"padding-top: 20px;\">\r\n                            <p class=\"text-indicacion\">Indicaciones:</p>\r\n                        </div>\r\n                        <div class=\"col-md-12\" style=\"padding-top: -10px;\">\r\n                            <app-my-chk-editor [(ngModel)]=\"indicaciones\" [configEditor]=\"{}\" [readonly]=\"true\"></app-my-chk-editor>\r\n                        </div>\r\n                        <div class=\"col-md-12\" style=\"padding-top: 20px;\">\r\n                            <div class=\"checkbox\">\r\n                                <label>\r\n                                  <input type=\"checkbox\"\r\n                                  [(ngModel)]=\"isCheckedAutorizo\">\r\n                                  <span >Autorizó el uso de tratamiento de datos. Ver <span style=\"color: #2473B6;\"><u (click)=\"onDownloadFileItem()\">Términos y condiciones</u></span></span>  \r\n                                </label>\r\n                              </div>\r\n                            \r\n                        </div>\r\n                        <div class=\"col-md-12\" style=\"padding-top: 25px;\">\r\n                            <button type=\"button\" class=\"btn btn-success btn-iniciar\" (click)=\"goEncuesta()\" style=\"font-size: 16px !important;\">Iniciar encuesta</button> \r\n                        </div>\r\n                     </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div align=\"center\" *ngIf=\"show_loader_encuesta\" style=\"margin-top: 5px\">\r\n                        <div>\r\n                            <span style=\"color:#2473B6;\">\r\n                                <nz-spin nzSimple [nzSize]=\"'large'\"></nz-spin>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div  style=\"width: 100%;\" *ngIf=\"!show_loader_encuesta && _loaded_media && _idYoutubeVideo\" align=\"center\">\r\n                        <youtube-player\r\n                            [videoId]=\"_idYoutubeVideo\"\r\n                            (ready)=\"_savePlayer($event)\"\r\n                            [width]=\"'100%'\"\r\n                            [height]=\"400\"\r\n                            (change)=\"_onStateChange($event)\">\r\n                        </youtube-player>\r\n                    </div>\r\n                    <div  style=\"width: 100%;\" *ngIf=\"!show_loader_encuesta && _loaded_media && welcome_data.url_video==null\">\r\n                        <img [src]=\"_urlArchivo\" width=\"95%\">\r\n                    </div>\r\n                    <div  style=\"width: 100%;\" *ngIf=\"!show_loader_encuesta && _loaded_media==false && welcome_data.url_video==null\">\r\n                        <img src=\"../../../../../../../assets/images/Imagen_no_disponible.png\" width=\"95%\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-12\" style=\"padding: 0px;\">\r\n                    <div class=\"col-md-4\" style=\"padding: 0px; text-align-last: left;\">\r\n                        <img src=\"../../../../../../../assets/images/logo-produce2.png\" width=\"65%\">\r\n                    </div>\r\n                    <div class=\"col-md-4\" style=\"padding: 0px; text-align-last: center;\">\r\n                        <img src=\"../../../../../../../assets/images/logo-proinnovate.png\" width=\"60%\">\r\n                    </div>\r\n                    <div class=\"col-md-4\" style=\"padding: 0px; text-align-last: right;\">\r\n                        <img src=\"../../../../../../../assets/images/logo-pecap.png\" width=\"60%\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</ng-container>\r\n<ng-container *ngIf=\"show_preguntas\">\r\n    <app-llenado-pregunta-ext *ngIf=\"show_preguntas\"\r\n    (onEmitDataToHeader)=\"handleOnEmitDataToHeader($event)\"\r\n    (onGoBackEncuesta)=\"handleGoBackEncuesta($event)\"\r\n    (onGoToInicio)=\"handleGoBackInicio($event)\"\r\n    [agradecimiento_data]=\"agradecimiento_data\"\r\n    [es_anonima]=\"main_data?main_data.es_anonima:true\"\r\n    [disparadoresRespuestas]=\"disparadoresRespuestas\"\r\n    [paginado_registrado]=\"paginado_registrado\"\r\n    [_total_preguntas]=\"_total_preguntas\"\r\n    [total]=\"total\" [pageIndex]=\"pageIndex\"\r\n    [presetIndex]=\"presetIndex\"\r\n    [id_encuesta]=\"id_encuesta\" \r\n    [title]=\"main_data?main_data.titulo:''\"\r\n   ></app-llenado-pregunta-ext>\r\n</ng-container>\r\n<ng-container *ngIf=\"show_preguntas_seccion\">\r\n    <app-llenado-pregunta-seccion-ext *ngIf=\"show_preguntas_seccion\"\r\n    (onEmitDataToHeader)=\"handleOnEmitDataToHeader($event)\"\r\n    (onGoBackEncuesta)=\"handleGoBackEncuesta($event)\"\r\n    (onGoToInicio)=\"handleGoBackInicio($event)\"\r\n    [agradecimiento_data]=\"agradecimiento_data\"\r\n    [es_anonima]=\"main_data?main_data.es_anonima:true\"\r\n    [disparadoresRespuestas]=\"disparadoresRespuestas\"\r\n    [paginado_registrado]=\"paginado_registrado\"\r\n    [_total_preguntas]=\"_total_preguntas\"\r\n    [total]=\"total\" [pageIndex]=\"pageIndex\"\r\n    [presetIndex]=\"presetIndex\"\r\n    [id_encuesta]=\"id_encuesta\" \r\n    [pageIndexSeccion]=\"pageIndexSeccion\"\r\n    [title]=\"main_data?main_data.titulo:''\"\r\n   ></app-llenado-pregunta-seccion-ext>\r\n</ng-container>");

/***/ }),

/***/ "./src/app/modules/encuestado-ext/pages/gestion-ext/gestion-ext-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/encuestado-ext/pages/gestion-ext/gestion-ext-routing.module.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"), __webpack_require__(/*! ./gestion-ext.component */ "./src/app/modules/encuestado-ext/pages/gestion-ext/gestion-ext.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, gestion_ext_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const routes = [
        {
            path: "",
            component: gestion_ext_component_1.GestionExtComponent
        },
    ];
    let WelcomeRoutingExtModule = class WelcomeRoutingExtModule {
    };
    WelcomeRoutingExtModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            declarations: [],
            exports: [router_1.RouterModule],
        })
    ], WelcomeRoutingExtModule);
    exports.WelcomeRoutingExtModule = WelcomeRoutingExtModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/encuestado-ext/pages/gestion-ext/gestion-ext.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/modules/encuestado-ext/pages/gestion-ext/gestion-ext.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn_hoverable:hover{\r\n  cursor: pointer;\r\n}\r\n\r\n.btn_disabled:hover{\r\n  cursor: not-allowed;\r\n}\r\n\r\nbutton:active { background-color: #128C3C; color: White; border: none; outline:none !important;;\r\n  }\r\n\r\nbutton:focus { background-color: #128C3C; border: none; outline:none !important;}\r\n\r\n.ck-editor__editable {\r\n    padding-left: 0 !important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lbmN1ZXN0YWRvLWV4dC9wYWdlcy9nZXN0aW9uLWV4dC9nZXN0aW9uLWV4dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSxnQkFBZ0IseUJBQXlCLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSx1QkFBdUI7RUFDNUY7O0FBRUEsZUFBZSx5QkFBeUIsRUFBRSxZQUFZLEVBQUUsdUJBQXVCLENBQUM7O0FBRWhGO0lBQ0UsMEJBQTBCO0VBQzVCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9lbmN1ZXN0YWRvLWV4dC9wYWdlcy9nZXN0aW9uLWV4dC9nZXN0aW9uLWV4dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bl9ob3ZlcmFibGU6aG92ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnRuX2Rpc2FibGVkOmhvdmVye1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbmJ1dHRvbjphY3RpdmUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI4QzNDOyBjb2xvcjogV2hpdGU7IGJvcmRlcjogbm9uZTsgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uOmZvY3VzIHsgYmFja2dyb3VuZC1jb2xvcjogIzEyOEMzQzsgYm9yZGVyOiBub25lOyBvdXRsaW5lOm5vbmUgIWltcG9ydGFudDt9XHJcblxyXG4gIC5jay1lZGl0b3JfX2VkaXRhYmxlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/modules/encuestado-ext/pages/gestion-ext/gestion-ext.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/encuestado-ext/pages/gestion-ext/gestion-ext.component.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-i18n.js"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, _core_1, forms_1, i18n_1, ng_zorro_antd_1, router_1, ngx_spinner_1, platform_browser_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let GestionExtComponent = class GestionExtComponent {
        constructor(_fileService, _authService, i18n, file_Service, fb, notification, router, activeRouter, _alertService, configuracion_inicial_s, sis_enumerado_s, spinner, sanitizer, cd, encuesta_s) {
            this._fileService = _fileService;
            this._authService = _authService;
            this.i18n = i18n;
            this.file_Service = file_Service;
            this.fb = fb;
            this.notification = notification;
            this.router = router;
            this.activeRouter = activeRouter;
            this._alertService = _alertService;
            this.configuracion_inicial_s = configuracion_inicial_s;
            this.sis_enumerado_s = sis_enumerado_s;
            this.spinner = spinner;
            this.sanitizer = sanitizer;
            this.cd = cd;
            this.encuesta_s = encuesta_s;
            this.show_welcome = true;
            this.show_main_list = false;
            this._loaded_media = false;
            this.show_loader_encuesta = true;
            this.url_video = null;
            this.audio_exists = false;
            this.page_loaded = false;
            this.welcome_text = '';
            this.welcome_video = '';
            this.loading_audio = true;
            //#region  YOUTUBE VIDEO
            this._idYoutubeVideo = null;
            this.version = '...';
            //#endregion
            this.contentType = "";
            this.urlArchivo = [null, null];
            this.b64_audio = null;
            this.loaded_media = false;
            this.audio_finally_loaded = false;
            this.onGetSavedFileByCode = (codigo, index) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this._fileService.getFilesById(codigo).then(resp => {
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
                                this.contentType = resp.Data[0].contentType;
                                let contentType = this.contentType;
                                var blob = new Blob([view], { type: contentType });
                                var urlArchivo = 'data:' + contentType + ';base64,' + resp.Data[0].content;
                                this.loaded_media = true;
                                this.urlArchivo[index] = this.sanitizer.bypassSecurityTrustResourceUrl(urlArchivo);
                            }
                            else {
                                this._alertService.open("error", resp.Data[0].mensajeError, null);
                                this.loaded_media = false;
                            }
                        }
                        else {
                            this._alertService.open("error", "Sin datos para cargar", null);
                            this.loaded_media = false;
                        }
                    }
                    if (!resp.Success) {
                        this._alertService.open("error", resp.Messages[0], null);
                        this.loaded_media = false;
                    }
                });
            });
            this.AudioContext = new AudioContext();
            this.audio_started = false;
            this.onGetSavedFileByCodeAudio = (codigo, has_video = false) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this._fileService.getFilesById(codigo).then((resp) => tslib_1.__awaiter(this, void 0, void 0, function* () {
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
                                const audioContext = new AudioContext();
                                const gainNode = audioContext.createGain();
                                gainNode.gain.value = this.volume_value / 100; // setting it to 10%
                                gainNode.connect(audioContext.destination);
                                const arr = view; // Uint8Array.from(response.data.data)
                                const audio = yield audioContext.decodeAudioData(arr.buffer);
                                const source = audioContext.createBufferSource();
                                source.buffer = audio;
                                source.loop = true;
                                source.connect(gainNode);
                                if (!has_video) {
                                    source.start(0);
                                    this.audio_started = true;
                                    this.audio_paused = false;
                                }
                                else {
                                    this.audio_paused = true;
                                }
                                this.AudioContext = audioContext;
                                this.AudioSource = source;
                                this.GainNode = gainNode;
                                //var blob = new Blob([view], { type: contentType });
                                this.audio_finally_loaded = true;
                                this.audio_exists = true;
                                this.loading_audio = false;
                            }
                            else {
                                this._alertService.open("error", resp.Data[0].mensajeError, "Error de audio");
                                this.audio_finally_loaded = false;
                                this.loading_audio = false;
                                this.audio_exists = false;
                            }
                        }
                        else {
                            this._alertService.open("error", "Sin datos para cargar", "Error de audio");
                            this.audio_finally_loaded = false;
                            this.loading_audio = false;
                            this.audio_exists = false;
                        }
                    }
                    if (!resp.Success) {
                        this._alertService.open("error", resp.Messages[0], "Error de audio");
                        this.audio_finally_loaded = false;
                        this.loading_audio = false;
                    }
                }));
            });
            //#region AUDIO
            this.audio_paused = true;
            this.handleAudioPause = () => {
                this.audio_paused = !this.audio_paused;
                if (!this.audio_paused) {
                    if (!this.audio_started) {
                        const gainNode = this.GainNode;
                        gainNode.gain.value = this.volume_value / 100; // setting it to 10%
                        gainNode.connect(this.AudioContext.destination);
                        this.AudioSource.connect(gainNode);
                        this.AudioSource.start(0);
                        this.audio_started = true;
                    }
                    else {
                        this.AudioContext.resume();
                    }
                }
                else {
                    this.AudioContext.suspend();
                }
            };
            this.volume_value = 50;
            this.setVolumeOfObject = (e) => {
                setTimeout(() => {
                    if (!this.audio_paused) {
                        const gainNode = this.GainNode;
                        gainNode.gain.value = e / 100; // setting it to 10%
                        gainNode.connect(this.AudioContext.destination);
                        this.AudioSource.connect(gainNode);
                        if (!this.audio_started) {
                            this.AudioSource.start(0);
                            this.audio_started = true;
                        }
                    }
                    this.cd.markForCheck();
                    this.cd.detectChanges();
                    /*
                    this.main_audio.volume= e/100;
                    this.main_audio.play();*/
                }, 100);
            };
            this.is_muted = false;
            this.mute_unmute_audio = () => {
                this.is_muted = !this.is_muted;
                if (this.is_muted) {
                    this.AudioContext.resume();
                }
                else {
                    this.AudioContext.suspend();
                }
            };
            this.show_control_audio = false;
            //#endregion
            this.show_main_title = true;
            this.disable_next_btn = false;
            this.handleOnIniciarLLenado = (event) => {
                if (event) { //ocultar el play y pausar
                    if (this.audio_finally_loaded && this.audio_exists) {
                        if (!this.audio_started) {
                            const gainNode = this.GainNode;
                            gainNode.gain.value = this.volume_value / 100; // setting it to 10%
                            gainNode.connect(this.AudioContext.destination);
                            this.AudioSource.connect(gainNode);
                            this.AudioSource.start(0);
                            this.audio_started = true;
                        }
                        if (this.AudioContext.state === 'running') {
                            this.AudioContext.suspend();
                        }
                        else if (this.AudioContext.state === 'suspended') {
                            //this.AudioContext.resume()  
                        }
                    }
                    this.show_main_title = false;
                }
                else { //mostrar y desmutear
                    if (this.audio_finally_loaded && this.audio_exists) {
                        if (!this.audio_started) {
                            const gainNode = this.GainNode;
                            gainNode.gain.value = this.volume_value / 100; // setting it to 10%
                            gainNode.connect(this.AudioContext.destination);
                            this.AudioSource.connect(gainNode);
                            this.AudioSource.start(0);
                            this.audio_started = true;
                        }
                        if (this.AudioContext.state === 'running') {
                            //this.AudioContext.suspend()
                        }
                        else if (this.AudioContext.state === 'suspended') {
                            if (!this.audio_paused) {
                                this.AudioContext.resume();
                            }
                        }
                    }
                    /*
                    this.main_audio.muted=false;
                    this.main_audio.play();*/
                    this.show_main_title = true;
                    this.disable_next_btn = false;
                }
            };
            this.handleOnIniciarListado = (event) => {
                if (event) { //ocultar el play y mutear O PAUSAR
                    if (this.audio_finally_loaded && this.audio_exists) {
                        if (!this.audio_started) {
                            const gainNode = this.GainNode;
                            gainNode.gain.value = this.volume_value / 100; // setting it to 10%
                            gainNode.connect(this.AudioContext.destination);
                            this.AudioSource.connect(gainNode);
                            this.AudioSource.start(0);
                            this.audio_started = true;
                        }
                        if (this.AudioContext.state === 'running') {
                            this.AudioContext.suspend();
                        }
                        else if (this.AudioContext.state === 'suspended') {
                            //this.AudioContext.resume()  
                        }
                    }
                    /*
                    this.main_audio.muted=true;
                    this.main_audio.play();*/
                    this.show_main_title = false;
                }
                else { //mostrar y desmutear
                    /*
                    this.main_audio.muted=false;
                    this.main_audio.play();*/
                    if (this.audio_finally_loaded && this.audio_exists) {
                        if (!this.audio_started) {
                            const gainNode = this.GainNode;
                            gainNode.gain.value = this.volume_value / 100; // setting it to 10%
                            gainNode.connect(this.AudioContext.destination);
                            this.AudioSource.connect(gainNode);
                            this.AudioSource.start(0);
                            this.audio_started = true;
                        }
                        if (this.AudioContext.state === 'running') {
                            //this.AudioContext.suspend()
                        }
                        else if (this.AudioContext.state === 'suspended') {
                            if (!this.audio_paused) {
                                this.AudioContext.resume();
                            }
                        }
                    }
                    this.show_main_title = true;
                    this.disable_next_btn = false;
                    this.cd.markForCheck();
                    this.cd.detectChanges();
                }
            };
            this.i18n.setLocale(i18n_1.es_ES);
            this._fileService.rutaBase = this._authService.GetConfig().Urls.URL_GA_UI;
            this.version = '12.0.1'; //que coincida con el package json--->// "ngx-youtube-player": "^12.0.1
        }
        ngOnInit() {
            this.getConfiguracion_inicial();
        }
        getConfiguracion_inicial() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                localStorage.setItem("is_filling", "false");
                this.spinner.show();
                this.loading_audio = true;
                this.configuracion_inicial_s.GetActualConfiguracion(_core_1.TIPO_ENCUESTA.extranet).then((datos) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    if (datos.data) {
                        let item = datos.data;
                        //datos.data.texto_bienvenida=datos.data.texto_bienvenida.replace(`\"`,'"');
                        this.welcome_text = datos.data.texto_bienvenida;
                        this.welcome_video = datos.data.url_video;
                        this.configuracion = datos.data;
                        if (item.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen) {
                            if (item.iden_imagen) {
                                yield this.onGetSavedFileByCode(item.iden_imagen, 0);
                                this.show_loader_encuesta = false;
                            }
                        }
                        else {
                            this.url_video = item.url_video;
                            this._idYoutubeVideo = item.url_video.substring(32, 43);
                            this._loaded_media = true;
                            this.show_loader_encuesta = false;
                        }
                        this.page_loaded = true;
                        this.spinner.hide();
                        if (item.iden_audio_fondo) {
                            //await this.onGetSavedFileByCodeAudio(item.iden_audio_fondo,item.url_video?true:false);
                            yield this.onGetSavedFileByCodeAudio(item.iden_audio_fondo, item.url_video ? true : false);
                            this.loading_audio = false;
                        }
                        else {
                            this.loading_audio = false;
                        }
                    }
                    this.cd.markForCheck();
                    this.cd.detectChanges();
                })).catch(err => { });
            });
        }
        _onStateChange(event) {
            this._ytEvent = event.data;
        }
        _savePlayer(player) {
            this._player = player;
            //this.player.playVideo();
            setTimeout(() => { this._player.playVideo(); }, 350);
        }
        handleAudioClick() {
            this.show_control_audio = !this.show_control_audio;
            this.cd.markForCheck();
            this.cd.detectChanges();
        }
        //#region PASES ENTRE PANTALLAS
        goMainList() {
            this.disable_next_btn = true;
            this.show_welcome = false;
            this.show_main_list = true;
        }
    };
    GestionExtComponent.ctorParameters = () => [
        { type: _core_1.FileService },
        { type: _core_1.AuthService },
        { type: ng_zorro_antd_1.NzI18nService },
        { type: _core_1.FileService },
        { type: forms_1.FormBuilder },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: router_1.Router },
        { type: router_1.ActivatedRoute },
        { type: _core_1.AlertService },
        { type: _core_1.ConfiguracionInicialService },
        { type: _core_1.SisEnumeradoService },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: platform_browser_1.DomSanitizer },
        { type: core_1.ChangeDetectorRef },
        { type: _core_1.EncuestasService }
    ];
    tslib_1.__decorate([
        core_1.ViewChild('btnPlayMainAudio', { static: false })
    ], GestionExtComponent.prototype, "btnPlayMainAudio", void 0);
    GestionExtComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-gestion-ext',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./gestion-ext.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado-ext/pages/gestion-ext/gestion-ext.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./gestion-ext.component.css */ "./src/app/modules/encuestado-ext/pages/gestion-ext/gestion-ext.component.css")).default]
        })
    ], GestionExtComponent);
    exports.GestionExtComponent = GestionExtComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/encuestado-ext/pages/gestion-ext/gestion-ext.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/encuestado-ext/pages/gestion-ext/gestion-ext.module.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js"), __webpack_require__(/*! @app/_shared */ "./src/app/_shared/index.ts"), __webpack_require__(/*! @cmp/core */ "./src/app/_core/index.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js"), __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js"), __webpack_require__(/*! ./gestion-ext.component */ "./src/app/modules/encuestado-ext/pages/gestion-ext/gestion-ext.component.ts"), __webpack_require__(/*! ./gestion-ext-routing.module */ "./src/app/modules/encuestado-ext/pages/gestion-ext/gestion-ext-routing.module.ts"), __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/fesm2015/ngx-youtube-player.js"), __webpack_require__(/*! @app/_core/ng-zorro-modules */ "./src/app/_core/ng-zorro-modules.ts"), __webpack_require__(/*! ./pages/listado-principal-ext/listado-principal-ext.component */ "./src/app/modules/encuestado-ext/pages/gestion-ext/pages/listado-principal-ext/listado-principal-ext.component.ts"), __webpack_require__(/*! ./pages/listado-todos-por-usuario-ext/listado-todos-por-usuario-ext.component */ "./src/app/modules/encuestado-ext/pages/gestion-ext/pages/listado-todos-por-usuario-ext/listado-todos-por-usuario-ext.component.ts"), __webpack_require__(/*! ./pages/vista-encuesta-ext/vista-encuesta-ext.component */ "./src/app/modules/encuestado-ext/pages/gestion-ext/pages/vista-encuesta-ext/vista-encuesta-ext.component.ts"), __webpack_require__(/*! ./pages/llenado-pregunta-ext/llenado-pregunta-ext.component */ "./src/app/modules/encuestado-ext/pages/gestion-ext/pages/llenado-pregunta-ext/llenado-pregunta-ext.component.ts"), __webpack_require__(/*! ./pages/llenado-pregunta-seccion-ext/llenado-pregunta-seccion-ext.component */ "./src/app/modules/encuestado-ext/pages/gestion-ext/pages/llenado-pregunta-seccion-ext/llenado-pregunta-seccion-ext.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, _shared_1, core_2, forms_1, ngx_spinner_1, ckeditor5_angular_1, gestion_ext_component_1, gestion_ext_routing_module_1, ngx_youtube_player_1, ng_zorro_modules_1, listado_principal_ext_component_1, listado_todos_por_usuario_ext_component_1, vista_encuesta_ext_component_1, llenado_pregunta_ext_component_1, llenado_pregunta_seccion_ext_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let GestionExtModule = class GestionExtModule {
    };
    GestionExtModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                gestion_ext_routing_module_1.WelcomeRoutingExtModule,
                _shared_1.SharedModule,
                ng_zorro_modules_1.DemoNgZorroAntdModule,
                //HighchartsChartModule,
                core_2.CoreComponentsModule,
                ngx_spinner_1.NgxSpinnerModule,
                ckeditor5_angular_1.CKEditorModule,
                forms_1.ReactiveFormsModule,
                core_2.CoreDirectivesModule,
                ngx_youtube_player_1.NgxYoutubePlayerModule.forRoot()
            ],
            declarations: [
                gestion_ext_component_1.GestionExtComponent,
                listado_principal_ext_component_1.ListadoPrincipalExtComponent,
                listado_todos_por_usuario_ext_component_1.ListadoTodosPorUsuarioExtComponent,
                vista_encuesta_ext_component_1.VistaEncuestaExtComponent,
                llenado_pregunta_ext_component_1.LlenadoPreguntaExtComponent,
                llenado_pregunta_seccion_ext_component_1.LlenadoPreguntaSeccionExtComponent
            ],
            providers: []
        })
    ], GestionExtModule);
    exports.GestionExtModule = GestionExtModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/encuestado-ext/pages/gestion-ext/pages/listado-principal-ext/listado-principal-ext.component.css":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/encuestado-ext/pages/gestion-ext/pages/listado-principal-ext/listado-principal-ext.component.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*.btn_hoverable:hover{\r\n    cursor: pointer;\r\n}\r\n.carrusel_icon{\r\n    font-size:30px;\r\n}\r\n.text_red{\r\n    color: #dc3545;\r\n    font-size:14px\r\n}\r\n.btn_footer_card_carrusel{\r\n    height: 45px;\r\n    width: 200px;\r\n    font-size: 18px;\r\n}\r\n.text_completar {\r\n    float: center;\r\n    margin-right: 6px;\r\n    margin-top: -35px;\r\n    position: relative;\r\n    z-index: 2;\r\n    font-size: 18px;\r\n    color:#ffffff;\r\n    text-align: center;\r\n}\r\n.w3-green,.w3-hover-green:hover{color:#fff!important;background-color:#4CAF50!important}\r\n.w3-light-red{\r\n    color: #000!important;\r\n    background-color: #dc3545!important;\r\n}\r\n\r\n.w3-round-xlarge {\r\n    border-radius: 5px;\r\n    height: 43px;\r\n}\r\n.w3-container {\r\n    padding: 0.2em 16px;\r\n}\r\n.w3-round-xlarge {\r\n\tborder-radius: 5px;\r\n}\r\n.w3-round-xlarge{border-radius:5px}\r\n\r\n.w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row:after,.w3-row:before,.w3-row-padding:after,.w3-row-padding:before,\r\n.w3-cell-row:before,.w3-cell-row:after,.w3-clear:after,.w3-clear:before,.w3-bar:before,.w3-bar:after{content:\"\";display:table;clear:both}\r\n.w3-container,.w3-panel{padding:0.01em 16px}.w3-panel{margin-top:16px;margin-bottom:16px}*/\r\n/* End extract */\r\n.div-bloque {\r\n    margin-left: 14px;\r\n    background: #FFFFFF;\r\n    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);\r\n    border-radius: 8px;\r\n    height: 365px;\r\n    margin-top: 17px;\r\n}\r\n.div-bloque .text-activo {\r\n    color: #128C3C;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n}\r\n.div-bloque .text-titulo {\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 20px;\r\n    color: #404347;\r\n}\r\n.div-bloque .text-fechas {\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 11px;\r\n    color: #404347;\r\n}\r\n._container{\r\n    padding-top: 50px;\r\n}\r\n._container .text-general {\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    color: #404347;\r\n}\r\n.div-bloque .div-cabecera {\r\n    height: 116px;\r\n    background: #C5CEDB;\r\n    border-radius: 8px 8px 0px 0px;\r\n    padding: 11px;\r\n    text-align: right;\r\n}\r\n.div-bloque .text-fecha{\r\n    font-weight: 500;\r\n}\r\n.btn-comenzar{\r\n    border: 1px solid #2473B6 !important;\r\n    color: #2473B6 !important;\r\n}\r\n.btn-comenzar:hover{\r\n    border: 1px solid #2473B6 !important;\r\n    color: #2473B6 !important;\r\n    background: #ffffff !important;\r\n    outline:none\r\n}\r\n.btn-comenzar:focus{\r\n    border: 1px solid #2473B6 !important;\r\n    color: #2473B6 !important;\r\n    background: #ffffff !important;\r\n    outline:none\r\n}\r\n.btn-comenzar:active{\r\n    border: 1px solid #2473B6 !important;\r\n    color: #2473B6 !important;\r\n    background: #ffffff !important;\r\n    outline:none\r\n}\r\n._container .text-todas {\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    color: #2473B6;\r\n}\r\n.div-bloque .text-finalizado{\r\n    color: #848B96;\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n    background: #F4F7FB;\r\n    border-radius: 8px;\r\n    padding: 10px;\r\n}\r\n.div-bloque .text-completado{\r\n    color: #2473B6;\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n    background: #F3FAFF;\r\n    border-radius: 8px;\r\n    padding: 10px;\r\n}\r\n.btn-completar{\r\n    border: 1px solid #128C3C !important;\r\n    color: #128C3C !important;\r\n    background: rgba(18, 140, 60, 0.12) !important;\r\n}\r\n.btn-completar:hover{\r\n    border: 1px solid #128C3C !important;\r\n    color: #128C3C !important;\r\n    background: rgba(18, 140, 60, 0.12) !important;\r\n    outline:none\r\n}\r\n.btn-completar:focus{\r\n    border: 1px solid #128C3C !important;\r\n    color: #128C3C !important;\r\n    background: rgba(18, 140, 60, 0.12) !important;\r\n    outline:none\r\n}\r\n.btn-completar:active{\r\n    border: 1px solid #128C3C !important;\r\n    color: #128C3C !important;\r\n    background: rgba(18, 140, 60, 0.12) !important;\r\n    outline:none\r\n}\r\n.text-anonimo {    \r\n    font-style: normal;   \r\n    color: #E9AD13;\r\n    padding: 0px 5px 2px 5px;\r\n    border-radius: 15px;\r\n    background: #FBF2DC;\r\n    font-size: 13px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lbmN1ZXN0YWRvLWV4dC9wYWdlcy9nZXN0aW9uLWV4dC9wYWdlcy9saXN0YWRvLXByaW5jaXBhbC1leHQvbGlzdGFkby1wcmluY2lwYWwtZXh0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswRkE2QzBGO0FBQzFGLGdCQUFnQjtBQUVoQjtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBSUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUI7QUFDSjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUI7QUFDSjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUI7QUFDSjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsOENBQThDO0FBQ2xEO0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLDhDQUE4QztJQUM5QztBQUNKO0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLDhDQUE4QztJQUM5QztBQUNKO0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLDhDQUE4QztJQUM5QztBQUNKO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2VuY3Vlc3RhZG8tZXh0L3BhZ2VzL2dlc3Rpb24tZXh0L3BhZ2VzL2xpc3RhZG8tcHJpbmNpcGFsLWV4dC9saXN0YWRvLXByaW5jaXBhbC1leHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLmJ0bl9ob3ZlcmFibGU6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNhcnJ1c2VsX2ljb257XHJcbiAgICBmb250LXNpemU6MzBweDtcclxufVxyXG4udGV4dF9yZWR7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIGZvbnQtc2l6ZToxNHB4XHJcbn1cclxuLmJ0bl9mb290ZXJfY2FyZF9jYXJydXNlbHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4udGV4dF9jb21wbGV0YXIge1xyXG4gICAgZmxvYXQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTM1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6I2ZmZmZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udzMtZ3JlZW4sLnczLWhvdmVyLWdyZWVuOmhvdmVye2NvbG9yOiNmZmYhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6IzRDQUY1MCFpbXBvcnRhbnR9XHJcbi53My1saWdodC1yZWR7XHJcbiAgICBjb2xvcjogIzAwMCFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1IWltcG9ydGFudDtcclxufVxyXG5cclxuLnczLXJvdW5kLXhsYXJnZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDQzcHg7XHJcbn1cclxuLnczLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwLjJlbSAxNnB4O1xyXG59XHJcbi53My1yb3VuZC14bGFyZ2Uge1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4udzMtcm91bmQteGxhcmdle2JvcmRlci1yYWRpdXM6NXB4fVxyXG5cclxuLnczLWNvbnRhaW5lcjphZnRlciwudzMtY29udGFpbmVyOmJlZm9yZSwudzMtcGFuZWw6YWZ0ZXIsLnczLXBhbmVsOmJlZm9yZSwudzMtcm93OmFmdGVyLC53My1yb3c6YmVmb3JlLC53My1yb3ctcGFkZGluZzphZnRlciwudzMtcm93LXBhZGRpbmc6YmVmb3JlLFxyXG4udzMtY2VsbC1yb3c6YmVmb3JlLC53My1jZWxsLXJvdzphZnRlciwudzMtY2xlYXI6YWZ0ZXIsLnczLWNsZWFyOmJlZm9yZSwudzMtYmFyOmJlZm9yZSwudzMtYmFyOmFmdGVye2NvbnRlbnQ6XCJcIjtkaXNwbGF5OnRhYmxlO2NsZWFyOmJvdGh9XHJcbi53My1jb250YWluZXIsLnczLXBhbmVse3BhZGRpbmc6MC4wMWVtIDE2cHh9LnczLXBhbmVse21hcmdpbi10b3A6MTZweDttYXJnaW4tYm90dG9tOjE2cHh9Ki9cclxuLyogRW5kIGV4dHJhY3QgKi9cclxuXHJcbi5kaXYtYmxvcXVlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgaGVpZ2h0OiAzNjVweDtcclxuICAgIG1hcmdpbi10b3A6IDE3cHg7XHJcbn1cclxuXHJcbi5kaXYtYmxvcXVlIC50ZXh0LWFjdGl2byB7XHJcbiAgICBjb2xvcjogIzEyOEMzQztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5kaXYtYmxvcXVlIC50ZXh0LXRpdHVsbyB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICM0MDQzNDc7XHJcbn1cclxuXHJcbi5kaXYtYmxvcXVlIC50ZXh0LWZlY2hhcyB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6ICM0MDQzNDc7XHJcbn1cclxuXHJcblxyXG5cclxuLl9jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxufVxyXG5cclxuLl9jb250YWluZXIgLnRleHQtZ2VuZXJhbCB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM0MDQzNDc7XHJcbn1cclxuXHJcbi5kaXYtYmxvcXVlIC5kaXYtY2FiZWNlcmEge1xyXG4gICAgaGVpZ2h0OiAxMTZweDtcclxuICAgIGJhY2tncm91bmQ6ICNDNUNFREI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDBweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5kaXYtYmxvcXVlIC50ZXh0LWZlY2hhe1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmJ0bi1jb21lbnphcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyNDczQjYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMjQ3M0I2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tY29tZW56YXI6aG92ZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjQ3M0I2ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzI0NzNCNiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZTpub25lXHJcbn1cclxuXHJcbi5idG4tY29tZW56YXI6Zm9jdXN7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjQ3M0I2ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzI0NzNCNiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZTpub25lXHJcbn1cclxuXHJcbi5idG4tY29tZW56YXI6YWN0aXZle1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzI0NzNCNiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMyNDczQjYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIG91dGxpbmU6bm9uZVxyXG59XHJcblxyXG4uX2NvbnRhaW5lciAudGV4dC10b2RhcyB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMyNDczQjY7XHJcbn1cclxuXHJcbi5kaXYtYmxvcXVlIC50ZXh0LWZpbmFsaXphZG97XHJcbiAgICBjb2xvcjogIzg0OEI5NjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjRGN0ZCO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmRpdi1ibG9xdWUgLnRleHQtY29tcGxldGFkb3tcclxuICAgIGNvbG9yOiAjMjQ3M0I2O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICNGM0ZBRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uYnRuLWNvbXBsZXRhcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMjhDM0MgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMTI4QzNDICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4LCAxNDAsIDYwLCAwLjEyKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLWNvbXBsZXRhcjpob3ZlcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMjhDM0MgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMTI4QzNDICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4LCAxNDAsIDYwLCAwLjEyKSAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZTpub25lXHJcbn1cclxuXHJcbi5idG4tY29tcGxldGFyOmZvY3Vze1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzEyOEMzQyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMxMjhDM0MgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTgsIDE0MCwgNjAsIDAuMTIpICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lOm5vbmVcclxufVxyXG5cclxuLmJ0bi1jb21wbGV0YXI6YWN0aXZle1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzEyOEMzQyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMxMjhDM0MgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTgsIDE0MCwgNjAsIDAuMTIpICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lOm5vbmVcclxufVxyXG5cclxuLnRleHQtYW5vbmltbyB7ICAgIFxyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyAgIFxyXG4gICAgY29sb3I6ICNFOUFEMTM7XHJcbiAgICBwYWRkaW5nOiAwcHggNXB4IDJweCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZCRjJEQztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/encuestado-ext/pages/gestion-ext/pages/listado-principal-ext/listado-principal-ext.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/encuestado-ext/pages/gestion-ext/pages/listado-principal-ext/listado-principal-ext.component.ts ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, _core_1, forms_1, ng_zorro_antd_1, router_1, ngx_spinner_1, platform_browser_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let ListadoPrincipalExtComponent = class ListadoPrincipalExtComponent {
        constructor(_fileService, _authService, i18n, fb, notification, router, activeRouter, _alertService, encuesta_s, sis_enumerado_s, spinner, sanitizer, cd) {
            this._fileService = _fileService;
            this._authService = _authService;
            this.i18n = i18n;
            this.fb = fb;
            this.notification = notification;
            this.router = router;
            this.activeRouter = activeRouter;
            this._alertService = _alertService;
            this.encuesta_s = encuesta_s;
            this.sis_enumerado_s = sis_enumerado_s;
            this.spinner = spinner;
            this.sanitizer = sanitizer;
            this.cd = cd;
            this._ESTADO = _core_1.ESTADO_ADMINISTRADO;
            this.today = new Date();
            this.array = [1, 2, 3, 4, 5];
            this.array_paged_front = [];
            this.array_hover_control = {};
            this.total_pages = 0;
            this.index_carrusel = 0;
            this.check_index_carrusel = () => {
                let actual = this.myCarousel ? this.myCarousel.activeIndex : 0;
                setTimeout(() => {
                    this.index_carrusel = actual;
                    this.cd.markForCheck();
                    this.cd.detectChanges();
                    this.check_index_carrusel();
                }, 150);
            };
            this.contentType = "";
            this.urlArchivo = [];
            this.b64_audio = null;
            this.onGetSavedFileByCode = (codigo) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this._fileService.getFilesById(codigo).then(resp => {
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
                                this.contentType = resp.Data[0].contentType;
                                let contentType = this.contentType;
                                var urlArchivo = 'data:' + contentType + ';base64,' + resp.Data[0].content;
                            }
                            else {
                                this._alertService.open("error", resp.Data[0].mensajeError);
                            }
                        }
                        else {
                            this._alertService.open("error", "Sin datos para cargar");
                        }
                    }
                    if (!resp.Success)
                        this._alertService.open("error", resp.Messages[0]);
                });
            });
            this.onGetSavedFileByCodeWithReturn = (codigo) => tslib_1.__awaiter(this, void 0, void 0, function* () {
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
                        this.contentType = resp.Data[0].contentType;
                        let contentType = this.contentType;
                        ur_file = 'data:' + contentType + ';base64,' + resp.Data[0].content;
                        has_file = true;
                    }
                });
                return ur_file;
            });
            this.show_actual_list = true;
            this.verItemParaLLenado = false;
            this.selected_item = null;
            this.onIniciarLLenado = new core_1.EventEmitter();
            this.encuesta_data = {};
            this.onIniciarListado = new core_1.EventEmitter();
            this.verListadoTodos = false;
            this.goListadoTodosEncuestas = () => {
                this.show_actual_list = false;
                this.verListadoTodos = true;
                this.onIniciarListado.emit(true);
            };
            this.handleGoListadoPrincipal = (e = null) => {
                this.show_actual_list = true;
                this.verListadoTodos = false;
                this.onIniciarListado.emit(false);
            };
        }
        ngOnInit() {
            this.getEncuestasListByUser();
            this.check_index_carrusel();
        }
        getEncuestasListByUser() {
            localStorage.setItem("is_filling", "false");
            let filtro = { dni_user: '', id_dependencia: 0, today: new Date(), id_tipo_encuesta: _core_1.TIPO_ENCUESTA.extranet };
            this.spinner.show();
            let filtros = { dni_user: '' };
            this.encuesta_s._SaveEncuestaAdministradoExtranet(filtros)
                .then((datos) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                console.log(datos);
                this.encuesta_s._GetEncuestasListByUserExtranet(filtro)
                    .then((datos) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    let array_data = datos.data; //.filter(f=>f.resuelto!=true);
                    array_data.forEach(x => {
                        let prs = (x.conteo_resuelto ? (100 * (x.conteo_resuelto / x.total_preguntas)) : 0);
                        x.porcentaje_avance = String(prs > 100 ? 100 : prs);
                        x.id_encuesta_str = String(x.id_encuesta);
                        x.fecha_fin_date = new Date(x.fecha_fin);
                        this.array_hover_control[String(x.id_encuesta)] = false;
                    });
                    let new_front = [];
                    let idx = 0, _arr = [], page = 1;
                    for (let i = 0; i < array_data.length; i++) {
                        let e = array_data[i];
                        e.is_mouse_hover = false; ///ogligatorio, no remover, es un auxiliar para el mouseover
                        e.loaded = false; ///ogligatorio, no remover, es un auxiliar para el mouseover
                        let b64 = null;
                        if (e.iden_imagen_presentacion != null) {
                            b64 = yield this.onGetSavedFileByCodeWithReturn(e.iden_imagen_presentacion);
                        }
                        e.b64_img_presentacion = b64;
                        e.has_imagen = b64 ? true : false;
                        e.loaded = true;
                    }
                    this.total_pages = array_data.length;
                    this.array_paged_front = array_data;
                    this.spinner.hide();
                    this.cd.markForCheck();
                    this.cd.detectChanges();
                }))
                    .catch(() => { this.spinner.hide(); });
            }))
                .catch(() => { });
        }
        prev() {
            this.myCarousel.pre();
        }
        next() {
            this.myCarousel.next();
        }
        verParaLLenado(item) {
            this.spinner.show();
            this.encuesta_s._getEncuestaDataByID(item.id_encuesta).then(datos => {
                this.encuesta_data = datos.data;
                this.encuesta_main_data = this.encuesta_data.encuesta;
                this.encuesta_welcome_data = this.encuesta_data.bienvenida;
                this.encuesta_welcome_data.id_tipo_archivo = this.encuesta_data.bienvenida.id_tipo_archivo == null ? this.encuesta_data.agradecimiento.id_tipo_archivo : this.encuesta_data.bienvenida.id_tipo_archivo;
                this.encuesta_welcome_data.iden_imagen = this.encuesta_data.bienvenida.iden_imagen == null ? this.encuesta_data.agradecimiento.iden_imagen : this.encuesta_data.bienvenida.iden_imagen;
                this.indicaciones = this.encuesta_data.bienvenida.indicaciones ? this.encuesta_data.bienvenida.indicaciones : '';
                this.encuesta_agradecimiento_data = this.encuesta_data.agradecimiento;
                this.selected_item = item;
                this.onIniciarLLenado.emit(true);
                this.verItemParaLLenado = true;
                this.spinner.hide();
                this.show_actual_list = false;
                this.cd.detectChanges();
                this.cd.markForCheck();
            }).catch(err => { });
        }
        handleGoInicio(e) {
            this.verItemParaLLenado = false;
            this.show_actual_list = true;
            this.onIniciarLLenado.emit(false);
            this.getEncuestasListByUser();
        }
    };
    ListadoPrincipalExtComponent.ctorParameters = () => [
        { type: _core_1.FileService },
        { type: _core_1.AuthService },
        { type: ng_zorro_antd_1.NzI18nService },
        { type: forms_1.FormBuilder },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: router_1.Router },
        { type: router_1.ActivatedRoute },
        { type: _core_1.AlertService },
        { type: _core_1.EncuestasService },
        { type: _core_1.SisEnumeradoService },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: platform_browser_1.DomSanitizer },
        { type: core_1.ChangeDetectorRef }
    ];
    tslib_1.__decorate([
        core_1.ViewChild(ng_zorro_antd_1.NzCarouselComponent, { static: false })
    ], ListadoPrincipalExtComponent.prototype, "myCarousel", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ListadoPrincipalExtComponent.prototype, "onIniciarLLenado", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ListadoPrincipalExtComponent.prototype, "onIniciarListado", void 0);
    ListadoPrincipalExtComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-listado-principal-ext',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./listado-principal-ext.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado-ext/pages/gestion-ext/pages/listado-principal-ext/listado-principal-ext.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./listado-principal-ext.component.css */ "./src/app/modules/encuestado-ext/pages/gestion-ext/pages/listado-principal-ext/listado-principal-ext.component.css")).default]
        })
    ], ListadoPrincipalExtComponent);
    exports.ListadoPrincipalExtComponent = ListadoPrincipalExtComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/encuestado-ext/pages/gestion-ext/pages/listado-todos-por-usuario-ext/listado-todos-por-usuario-ext.component.css":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/modules/encuestado-ext/pages/gestion-ext/pages/listado-todos-por-usuario-ext/listado-todos-por-usuario-ext.component.css ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn_hoverable:hover{\r\n    cursor: pointer;\r\n}\r\n\r\ntable{\r\n    border:0px\r\n}\r\n\r\n.text_completar {\r\n    float: center;\r\n    margin-right: 0px;\r\n    margin-top: -28px;\r\n    position: relative;\r\n    z-index: 2;\r\n    /*color: #244DAE;*/\r\n    font-size: 14px;\r\n    color:#ffffff;\r\n    text-align: center;\r\n}\r\n\r\n.w3-green,.w3-hover-green:hover{color:#fff!important;background-color:#4CAF50!important}\r\n\r\n.w3-light-red{\r\n    color: #000!important;\r\n    background-color: #dc3545!important;\r\n}\r\n\r\n.w3-round-xlarge {\r\n    border-radius: 5px;\r\n    height: 34px;\r\n}\r\n\r\n.w3-container {\r\n    padding: 0.2em 16px;\r\n}\r\n\r\n.w3-round-xlarge {\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.w3-round-xlarge{border-radius:5px}\r\n\r\n.w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row:after,.w3-row:before,.w3-row-padding:after,.w3-row-padding:before,\r\n.w3-cell-row:before,.w3-cell-row:after,.w3-clear:after,.w3-clear:before,.w3-bar:before,.w3-bar:after{content:\"\";display:table;clear:both}\r\n\r\n.w3-container,.w3-panel{padding:0.01em 16px}\r\n\r\n.w3-panel{margin-top:16px;margin-bottom:16px}\r\n\r\n/* End extract */\r\n\r\n.text-atras {\r\n    color: #2473B6;\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n    background: #F4F7FB;\r\n    border-radius: 20px;            \r\n    padding: 10px;\r\n}\r\n\r\n.div-filtro {\r\n    background: #FFFFFF;\r\n    border: 1px solid #EAEFF5;\r\n    border-radius: 8px;\r\n    height: 69px;\r\n    display: inline-table;\r\n}\r\n\r\n.div-filtro .div-center {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\ninput {\r\n    border: 0;\r\n}\r\n\r\nselect {\r\n    border: 0;\r\n}\r\n\r\n.btn-buscar {\r\n    background-color: #128C3C;color: #ffffff;\r\n}\r\n\r\n.btn-buscar:active { background-color: #128C3C; color: White; border: none; outline:none !important;;\r\n}\r\n\r\n.btn-buscar:focus { background-color: #128C3C; border: none; outline:none !important;}\r\n\r\n.btn-limpiar {\r\n    background-color: #EFF0F2;color: #404347;\r\n    border:  1px solid #EFF0F2;\r\n}\r\n\r\n.btn-limpiar:active { background-color: #EFF0F2; color: #404347;; border: none; outline:none !important;\r\n    border:  1px solid #EFF0F2;\r\n}\r\n\r\n.btn-limpiar:focus { background-color: #EFF0F2; border: none; outline:none !important; color: #404347;border:  1px solid #EFF0F2;}\r\n\r\n.div-input .input-icon {\r\n    color: #848B96;\r\n  position: absolute;\r\n  width: 20px;\r\n  height: 20px;\r\n  left: 12px;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.ant-input{\r\n    border: 1px solid #ffffff !important;\r\n}\r\n\r\n/*****/\r\n\r\n.div-bloque {\r\n    margin-left: 14px;\r\n    background: #FFFFFF;\r\n    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);\r\n    border-radius: 8px;\r\n    height: 365px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.div-bloque .text-activo {\r\n    color: #128C3C;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n}\r\n\r\n._container{\r\n    padding-top: 50px;\r\n}\r\n\r\n._container .text-general {\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    color: #000000;\r\n}\r\n\r\n.div-bloque .text-titulo {\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 20px;\r\n    color: #404347;\r\n}\r\n\r\n.div-bloque .div-cabecera {\r\n    height: 116px;\r\n    background: #C5CEDB;\r\n    border-radius: 8px 8px 0px 0px;\r\n    padding: 11px;\r\n    text-align: right;\r\n}\r\n\r\n.div-bloque .text-fecha{\r\n    font-weight: 500;\r\n}\r\n\r\n.div-bloque .text-fechas {\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 11px;\r\n    color: #404347;\r\n}\r\n\r\n.btn-comenzar{\r\n    border: 1px solid #2473B6 !important;\r\n    color: #2473B6 !important;\r\n}\r\n\r\n.btn-comenzar:hover{\r\n    border: 1px solid #2473B6 !important;\r\n    color: #2473B6 !important;\r\n    background: #ffffff !important;\r\n    outline:none\r\n}\r\n\r\n.btn-comenzar:focus{\r\n    border: 1px solid #2473B6 !important;\r\n    color: #2473B6 !important;\r\n    background: #ffffff !important;\r\n    outline:none\r\n}\r\n\r\n.btn-comenzar:active{\r\n    border: 1px solid #2473B6 !important;\r\n    color: #2473B6 !important;\r\n    background: #ffffff !important;\r\n    outline:none\r\n}\r\n\r\n._container .text-todas {\r\n    font-weight: 500;\r\n    font-size: 17px;\r\n    color: #2473B6;\r\n}\r\n\r\n.div-bloque .text-finalizado{\r\n    color: #848B96;\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n    background: #F4F7FB;\r\n    border-radius: 8px;\r\n    padding: 10px;\r\n}\r\n\r\n.div-bloque .text-completado{\r\n    color: #2473B6;\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n    background: #F3FAFF;\r\n    border-radius: 8px;\r\n    padding: 10px;\r\n}\r\n\r\n.btn-completar{\r\n    border: 1px solid #128C3C !important;\r\n    color: #128C3C !important;\r\n    background: rgba(18, 140, 60, 0.12) !important;\r\n}\r\n\r\n.btn-completar:hover{\r\n    border: 1px solid #128C3C !important;\r\n    color: #128C3C !important;\r\n    background: rgba(18, 140, 60, 0.12) !important;\r\n    outline:none\r\n}\r\n\r\n.btn-completar:focus{\r\n    border: 1px solid #128C3C !important;\r\n    color: #128C3C !important;\r\n    background: rgba(18, 140, 60, 0.12) !important;\r\n    outline:none\r\n}\r\n\r\n.btn-completar:active{\r\n    border: 1px solid #128C3C !important;\r\n    color: #128C3C !important;\r\n    background: rgba(18, 140, 60, 0.12) !important;\r\n    outline:none\r\n}\r\n\r\n.text-anonimo {    \r\n    font-style: normal;   \r\n    color: #E9AD13;\r\n    padding: 0px 5px 2px 5px;\r\n    border-radius: 15px;\r\n    background: #FBF2DC;\r\n    font-size: 13px;\r\n}\r\n\r\n.btn-atras {\r\n    color: #2473B6;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n    background: #F4F7FB;\r\n    border-radius: 20px;        \r\n    padding: 10px;\r\n    width: 92px;\r\n  }\r\n\r\n.btn-atras:active { background-color: #EAEFF5; color: #2473B6; border: none; outline:none !important;}\r\n\r\n.btn-atras:focus { background-color: #EAEFF5; color: #2473B6; border: none; outline:none !important;}\r\n\r\n.btn-atras:hover { background-color: #EAEFF5; color: #2473B6; border: none; outline:none !important;}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lbmN1ZXN0YWRvLWV4dC9wYWdlcy9nZXN0aW9uLWV4dC9wYWdlcy9saXN0YWRvLXRvZG9zLXBvci11c3VhcmlvLWV4dC9saXN0YWRvLXRvZG9zLXBvci11c3VhcmlvLWV4dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJO0FBQ0o7O0FBSUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFDQSxnQ0FBZ0Msb0JBQW9CLENBQUMsa0NBQWtDOztBQUN2RjtJQUNJLHFCQUFxQjtJQUNyQixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFDQSxpQkFBaUIsaUJBQWlCOztBQUVsQztxR0FDcUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVOztBQUN4SSx3QkFBd0IsbUJBQW1COztBQUFDLFVBQVUsZUFBZSxDQUFDLGtCQUFrQjs7QUFDeEYsZ0JBQWdCOztBQUloQjtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCLENBQUMsY0FBYztBQUM1Qzs7QUFFQSxxQkFBcUIseUJBQXlCLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSx1QkFBdUI7QUFDbkc7O0FBRUEsb0JBQW9CLHlCQUF5QixFQUFFLFlBQVksRUFBRSx1QkFBdUIsQ0FBQzs7QUFFckY7SUFDSSx5QkFBeUIsQ0FBQyxjQUFjO0lBQ3hDLDBCQUEwQjtBQUM5Qjs7QUFFQSxzQkFBc0IseUJBQXlCLEVBQUUsY0FBYyxHQUFHLFlBQVksRUFBRSx1QkFBdUI7SUFDbkcsMEJBQTBCO0FBQzlCOztBQUVBLHFCQUFxQix5QkFBeUIsRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsY0FBYyxDQUFDLDBCQUEwQixDQUFDOztBQUVqSTtJQUNJLGNBQWM7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLFFBQVE7RUFDUiwyQkFBMkI7QUFDN0I7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBR0EsTUFBTTs7QUFDTjtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBR0E7SUFDSSxvQ0FBb0M7SUFDcEMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUI7QUFDSjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCO0FBQ0o7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6Qiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLDhDQUE4QztJQUM5QztBQUNKOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6Qiw4Q0FBOEM7SUFDOUM7QUFDSjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsOENBQThDO0lBQzlDO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsV0FBVztFQUNiOztBQUNBLG9CQUFvQix5QkFBeUIsRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixDQUFDOztBQUVyRyxtQkFBbUIseUJBQXlCLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSx1QkFBdUIsQ0FBQzs7QUFFcEcsbUJBQW1CLHlCQUF5QixFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsdUJBQXVCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2VuY3Vlc3RhZG8tZXh0L3BhZ2VzL2dlc3Rpb24tZXh0L3BhZ2VzL2xpc3RhZG8tdG9kb3MtcG9yLXVzdWFyaW8tZXh0L2xpc3RhZG8tdG9kb3MtcG9yLXVzdWFyaW8tZXh0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuX2hvdmVyYWJsZTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxudGFibGV7XHJcbiAgICBib3JkZXI6MHB4XHJcbn1cclxuXHJcblxyXG5cclxuLnRleHRfY29tcGxldGFyIHtcclxuICAgIGZsb2F0OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IC0yOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIC8qY29sb3I6ICMyNDREQUU7Ki9cclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiNmZmZmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnczLWdyZWVuLC53My1ob3Zlci1ncmVlbjpob3Zlcntjb2xvcjojZmZmIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiM0Q0FGNTAhaW1wb3J0YW50fVxyXG4udzMtbGlnaHQtcmVke1xyXG4gICAgY29sb3I6ICMwMDAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53My1yb3VuZC14bGFyZ2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG59XHJcbi53My1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMC4yZW0gMTZweDtcclxufVxyXG4udzMtcm91bmQteGxhcmdlIHtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLnczLXJvdW5kLXhsYXJnZXtib3JkZXItcmFkaXVzOjVweH1cclxuXHJcbi53My1jb250YWluZXI6YWZ0ZXIsLnczLWNvbnRhaW5lcjpiZWZvcmUsLnczLXBhbmVsOmFmdGVyLC53My1wYW5lbDpiZWZvcmUsLnczLXJvdzphZnRlciwudzMtcm93OmJlZm9yZSwudzMtcm93LXBhZGRpbmc6YWZ0ZXIsLnczLXJvdy1wYWRkaW5nOmJlZm9yZSxcclxuLnczLWNlbGwtcm93OmJlZm9yZSwudzMtY2VsbC1yb3c6YWZ0ZXIsLnczLWNsZWFyOmFmdGVyLC53My1jbGVhcjpiZWZvcmUsLnczLWJhcjpiZWZvcmUsLnczLWJhcjphZnRlcntjb250ZW50OlwiXCI7ZGlzcGxheTp0YWJsZTtjbGVhcjpib3RofVxyXG4udzMtY29udGFpbmVyLC53My1wYW5lbHtwYWRkaW5nOjAuMDFlbSAxNnB4fS53My1wYW5lbHttYXJnaW4tdG9wOjE2cHg7bWFyZ2luLWJvdHRvbToxNnB4fVxyXG4vKiBFbmQgZXh0cmFjdCAqL1xyXG5cclxuXHJcblxyXG4udGV4dC1hdHJhcyB7XHJcbiAgICBjb2xvcjogIzI0NzNCNjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjRGN0ZCO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDsgICAgICAgICAgICBcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5kaXYtZmlsdHJvIHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRUFFRkY1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgaGVpZ2h0OiA2OXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG59XHJcblxyXG4uZGl2LWZpbHRybyAuZGl2LWNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4uYnRuLWJ1c2NhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI4QzNDO2NvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uYnRuLWJ1c2NhcjphY3RpdmUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI4QzNDOyBjb2xvcjogV2hpdGU7IGJvcmRlcjogbm9uZTsgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7O1xyXG59XHJcblxyXG4uYnRuLWJ1c2Nhcjpmb2N1cyB7IGJhY2tncm91bmQtY29sb3I6ICMxMjhDM0M7IGJvcmRlcjogbm9uZTsgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7fVxyXG5cclxuLmJ0bi1saW1waWFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRkYwRjI7Y29sb3I6ICM0MDQzNDc7XHJcbiAgICBib3JkZXI6ICAxcHggc29saWQgI0VGRjBGMjtcclxufVxyXG5cclxuLmJ0bi1saW1waWFyOmFjdGl2ZSB7IGJhY2tncm91bmQtY29sb3I6ICNFRkYwRjI7IGNvbG9yOiAjNDA0MzQ3OzsgYm9yZGVyOiBub25lOyBvdXRsaW5lOm5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogIDFweCBzb2xpZCAjRUZGMEYyO1xyXG59XHJcblxyXG4uYnRuLWxpbXBpYXI6Zm9jdXMgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZGMEYyOyBib3JkZXI6IG5vbmU7IG91dGxpbmU6bm9uZSAhaW1wb3J0YW50OyBjb2xvcjogIzQwNDM0Nztib3JkZXI6ICAxcHggc29saWQgI0VGRjBGMjt9XHJcblxyXG4uZGl2LWlucHV0IC5pbnB1dC1pY29uIHtcclxuICAgIGNvbG9yOiAjODQ4Qjk2O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbGVmdDogMTJweDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5hbnQtaW5wdXR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vKioqKiovXHJcbi5kaXYtYmxvcXVlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgaGVpZ2h0OiAzNjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5kaXYtYmxvcXVlIC50ZXh0LWFjdGl2byB7XHJcbiAgICBjb2xvcjogIzEyOEMzQztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5fY29udGFpbmVye1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5fY29udGFpbmVyIC50ZXh0LWdlbmVyYWwge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4uZGl2LWJsb3F1ZSAudGV4dC10aXR1bG8ge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjNDA0MzQ3O1xyXG59XHJcblxyXG4uZGl2LWJsb3F1ZSAuZGl2LWNhYmVjZXJhIHtcclxuICAgIGhlaWdodDogMTE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQzVDRURCO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwcHggMHB4O1xyXG4gICAgcGFkZGluZzogMTFweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uZGl2LWJsb3F1ZSAudGV4dC1mZWNoYXtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5kaXYtYmxvcXVlIC50ZXh0LWZlY2hhcyB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6ICM0MDQzNDc7XHJcbn1cclxuXHJcblxyXG4uYnRuLWNvbWVuemFye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzI0NzNCNiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMyNDczQjYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1jb21lbnphcjpob3ZlcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyNDczQjYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMjQ3M0I2ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lOm5vbmVcclxufVxyXG5cclxuLmJ0bi1jb21lbnphcjpmb2N1c3tcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyNDczQjYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMjQ3M0I2ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lOm5vbmVcclxufVxyXG5cclxuLmJ0bi1jb21lbnphcjphY3RpdmV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjQ3M0I2ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzI0NzNCNiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZTpub25lXHJcbn1cclxuXHJcbi5fY29udGFpbmVyIC50ZXh0LXRvZGFzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogIzI0NzNCNjtcclxufVxyXG5cclxuLmRpdi1ibG9xdWUgLnRleHQtZmluYWxpemFkb3tcclxuICAgIGNvbG9yOiAjODQ4Qjk2O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICNGNEY3RkI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uZGl2LWJsb3F1ZSAudGV4dC1jb21wbGV0YWRve1xyXG4gICAgY29sb3I6ICMyNDczQjY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0YzRkFGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5idG4tY29tcGxldGFye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzEyOEMzQyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMxMjhDM0MgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTgsIDE0MCwgNjAsIDAuMTIpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tY29tcGxldGFyOmhvdmVye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzEyOEMzQyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMxMjhDM0MgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTgsIDE0MCwgNjAsIDAuMTIpICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lOm5vbmVcclxufVxyXG5cclxuLmJ0bi1jb21wbGV0YXI6Zm9jdXN7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTI4QzNDICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzEyOEMzQyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOCwgMTQwLCA2MCwgMC4xMikgIWltcG9ydGFudDtcclxuICAgIG91dGxpbmU6bm9uZVxyXG59XHJcblxyXG4uYnRuLWNvbXBsZXRhcjphY3RpdmV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTI4QzNDICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzEyOEMzQyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOCwgMTQwLCA2MCwgMC4xMikgIWltcG9ydGFudDtcclxuICAgIG91dGxpbmU6bm9uZVxyXG59XHJcblxyXG4udGV4dC1hbm9uaW1vIHsgICAgXHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7ICAgXHJcbiAgICBjb2xvcjogI0U5QUQxMztcclxuICAgIHBhZGRpbmc6IDBweCA1cHggMnB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkJGMkRDO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uYnRuLWF0cmFzIHtcclxuICAgIGNvbG9yOiAjMjQ3M0I2O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICNGNEY3RkI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyAgICAgICAgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDkycHg7XHJcbiAgfVxyXG4gIC5idG4tYXRyYXM6YWN0aXZlIHsgYmFja2dyb3VuZC1jb2xvcjogI0VBRUZGNTsgY29sb3I6ICMyNDczQjY7IGJvcmRlcjogbm9uZTsgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7fVxyXG5cclxuICAuYnRuLWF0cmFzOmZvY3VzIHsgYmFja2dyb3VuZC1jb2xvcjogI0VBRUZGNTsgY29sb3I6ICMyNDczQjY7IGJvcmRlcjogbm9uZTsgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7fVxyXG5cclxuICAuYnRuLWF0cmFzOmhvdmVyIHsgYmFja2dyb3VuZC1jb2xvcjogI0VBRUZGNTsgY29sb3I6ICMyNDczQjY7IGJvcmRlcjogbm9uZTsgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7fVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/encuestado-ext/pages/gestion-ext/pages/listado-todos-por-usuario-ext/listado-todos-por-usuario-ext.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/encuestado-ext/pages/gestion-ext/pages/listado-todos-por-usuario-ext/listado-todos-por-usuario-ext.component.ts ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, forms_1, platform_browser_1, _core_1, ng_zorro_antd_1, ngx_spinner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let ListadoTodosPorUsuarioExtComponent = class ListadoTodosPorUsuarioExtComponent {
        constructor(notification, encuesta_s, sis_enumerado_s, spinner, modal, _fileService, sanitizer, cd, _formBuilder) {
            this.notification = notification;
            this.encuesta_s = encuesta_s;
            this.sis_enumerado_s = sis_enumerado_s;
            this.spinner = spinner;
            this.modal = modal;
            this._fileService = _fileService;
            this.sanitizer = sanitizer;
            this.cd = cd;
            this._formBuilder = _formBuilder;
            this.onGoListadoPrincipal = new core_1.EventEmitter();
            this.onEmitDataToHeader = new core_1.EventEmitter();
            this.array_estados = [{ id: 0, name: 'Estados' }, { id: 1, name: 'Sin comenzar' }, { id: 2, name: 'Comenzadas' }, { id: 3, name: 'Completadas' }, { id: 4, name: 'Finalizadas' }];
            this.frm = {
                titulo: null,
                estado: 1,
                fecha_inicio: null,
                fecha_fin: null
            };
            this.today = new Date();
            this.handleOnEmitDataToHeader = (e) => {
                this.onEmitDataToHeader.emit(e);
            };
            this._ESTADO = _core_1.ESTADO_ADMINISTRADO;
            this.EncuestaList = [];
            this.cargando_tabla = true;
            this.pageIndex = 1;
            this.total = 0;
            this.pageSize = 10;
            this.get_list = () => {
                localStorage.setItem("is_filling", "false");
                this.cargando_tabla = true;
                let filtro = Object.assign({}, this.frm);
                this.spinner.show();
                let today = new Date();
                this.encuesta_s._GetAllEncuestasListByUserExtranet(filtro, this.pageIndex, this.pageSize)
                    .then((datos) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    this.spinner.hide();
                    if (datos && datos.data) {
                        let dt = datos.data;
                        for (let i = 0; i < dt.length; i++) {
                            let e = dt[i];
                            e.porcentaje_avance = String(e.conteo_resuelto ? (100 * (e.conteo_resuelto / e.total_preguntas)) : 0);
                            e.fecha_fin_date = new Date(e.fin);
                            e.today = today;
                            let b64 = null;
                            if (e.iden_imagen != null) {
                                b64 = yield this.onGetSavedFileByCodeWithReturn(e.iden_imagen);
                            }
                            dt[i].b64_file = b64;
                            dt[i].has_imagen = b64 ? true : false;
                        }
                        this.EncuestaList = dt;
                        this.total = datos.data.TotalRows;
                    }
                    this.cargando_tabla = false;
                }))
                    .catch(() => {
                    this.cargando_tabla = false;
                });
            };
            this.onGetSavedFileByCodeWithReturn = (codigo) => tslib_1.__awaiter(this, void 0, void 0, function* () {
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
                        has_file = true;
                    }
                });
                //return ur_file;
                return has_file ? this.sanitizer.bypassSecurityTrustResourceUrl(ur_file) : null;
            });
            this.handleClickLimpiar = () => {
                this.frm = {
                    titulo: null,
                    estado: 1,
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
            this.goBackMainList = () => {
                this.onGoListadoPrincipal.emit(true);
                localStorage.setItem("is_filling", "false");
            };
            this.verListado = true;
            this.verItemParaLLenado = false;
            this.encuesta_data = {};
            this.selected_id_encuesta = 0;
            this.selected_title = 0;
            this.show_resultados = false;
            this.handleGoBackListadoAll = (e) => {
                this.show_resultados = false;
                this.verListado = true;
                localStorage.setItem("is_filling", "false");
            };
            this.disabledStartDate = (startValue) => {
                if (!startValue || this.frm.fecha_fin == null) {
                    return false;
                }
                else {
                    return startValue.getTime() > new Date(this.frm.fecha_fin).getTime();
                }
            };
            this.disabledEndDate = (endValue) => {
                if (!endValue || this.frm.fecha_inicio == null) {
                    return false;
                }
                else {
                    return endValue.getTime() <= new Date(this.frm.fecha_inicio).getTime();
                }
            };
        }
        ngOnInit() {
            this.get_list();
            this.formMACRO = this._formBuilder.group({
                FechaHoraInicio: [null],
                FechaHoraFin: [null]
            });
        }
        verParaLLenado(item) {
            this.spinner.show();
            this.encuesta_s._getEncuestaDataByID(item.id_encuesta).then(datos => {
                this.encuesta_data = datos.data;
                this.encuesta_main_data = this.encuesta_data.encuesta;
                this.encuesta_welcome_data = this.encuesta_data.bienvenida;
                this.indicaciones = this.encuesta_data.bienvenida.indicaciones ? this.encuesta_data.bienvenida.indicaciones : '';
                this.encuesta_agradecimiento_data = this.encuesta_data.agradecimiento;
                this.selected_item = item;
                this.verItemParaLLenado = true;
                this.verListado = false;
                this.spinner.hide();
                this.cd.detectChanges();
                this.cd.markForCheck();
            }).catch(err => { });
        }
        handleGoInicio(e) {
            this.verItemParaLLenado = false;
            this.verListado = true;
            localStorage.setItem("is_filling", "false");
            this.get_list();
        }
        verResultados(item) {
            this.selected_title = item.titulo;
            this.selected_id_encuesta = item.id_encuesta;
            this.verListado = false;
            this.show_resultados = true;
        }
    };
    ListadoTodosPorUsuarioExtComponent.ctorParameters = () => [
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: _core_1.EncuestasService },
        { type: _core_1.SisEnumeradoService },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: ng_zorro_antd_1.NzModalService },
        { type: _core_1.FileService },
        { type: platform_browser_1.DomSanitizer },
        { type: core_1.ChangeDetectorRef },
        { type: forms_1.FormBuilder }
    ];
    tslib_1.__decorate([
        core_1.Output()
    ], ListadoTodosPorUsuarioExtComponent.prototype, "onGoListadoPrincipal", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ListadoTodosPorUsuarioExtComponent.prototype, "onEmitDataToHeader", void 0);
    ListadoTodosPorUsuarioExtComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-listado-todos-por-usuario-ext',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./listado-todos-por-usuario-ext.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado-ext/pages/gestion-ext/pages/listado-todos-por-usuario-ext/listado-todos-por-usuario-ext.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./listado-todos-por-usuario-ext.component.css */ "./src/app/modules/encuestado-ext/pages/gestion-ext/pages/listado-todos-por-usuario-ext/listado-todos-por-usuario-ext.component.css")).default]
        })
    ], ListadoTodosPorUsuarioExtComponent);
    exports.ListadoTodosPorUsuarioExtComponent = ListadoTodosPorUsuarioExtComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/encuestado-ext/pages/gestion-ext/pages/llenado-pregunta-ext/llenado-pregunta-ext.component.css":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/encuestado-ext/pages/gestion-ext/pages/llenado-pregunta-ext/llenado-pregunta-ext.component.css ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn_hoverable:hover{\r\n    cursor: pointer;\r\n}\r\n  \r\n.label-css {\r\n    font-size: 16px !important;\r\n    background: #EAEFF5;\r\n    border-radius: 0px;\r\n    text-align: left;\r\n    height: 40px;\r\n}\r\n  \r\n.text-pregunta {\r\n    color: #000000;\r\n    font-style: normal;\r\nfont-weight: 500;\r\nfont-size: 16px;\r\n}\r\n  \r\n.text-titulo {\r\n    color: #000000;\r\n    font-style: normal;\r\nfont-weight: 400;\r\nfont-size: 16px;\r\n}\r\n  \r\n.text-descripcion{\r\n    color: #848B96;\r\n    font-style: normal;\r\nfont-weight: 400;\r\nfont-size: 12px;\r\n}\r\n  \r\n.text-obligatorio {\r\n    color: #DC3545;\r\n    font-style: normal;\r\nfont-weight: 400;\r\nfont-size: 12px;\r\n}\r\n  \r\n.btn-siguiente {\r\n    color: #2473B6;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n    background: rgba(182, 218, 249, 0.5);\r\n    border-radius: 20px;           \r\n    padding: 10px;\r\n    width: 119px;\r\n  }\r\n  \r\n.btn-siguiente:active { background-color: rgba(182, 218, 249, 0.5);; color: #2473B6; border: none; outline:none !important;}\r\n  \r\n.btn-siguiente:focus { background-color: rgba(182, 218, 249, 0.5);; color: #2473B6; border: none; outline:none !important;}\r\n  \r\n.btn-siguiente:hover { background-color: rgba(182, 218, 249, 0.5);; color: #2473B6; border: none; outline:none !important;}\r\n  \r\n.btn-atras {\r\n    color: #848B96;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n    background: #EAEFF5;\r\n    border-radius: 20px;           \r\n    padding: 10px;\r\n    width: 119px;\r\n  }\r\n  \r\n.btn-atras:active { background-color: #EAEFF5; color: #848B96; border: none; outline:none !important;}\r\n  \r\n.btn-atras:focus { background-color: #EAEFF5; color: #848B96; border: none; outline:none !important;}\r\n  \r\n.btn-atras:hover { background-color: #EAEFF5; color: #848B96; border: none; outline:none !important;}\r\n  \r\n.btn-finalizar {\r\n    color: #128C3C;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n    background: #D5F6D6;\r\n    border-radius: 20px;        \r\n    padding: 10px;\r\n    width: 119px;\r\n  }\r\n  \r\n.btn-finalizar:active { background-color: #D5F6D6; color: #128C3C; border: none; outline:none !important;}\r\n  \r\n.btn-finalizar:focus { background-color: #D5F6D6; color: #128C3C; border: none; outline:none !important;}\r\n  \r\n.btn-finalizar:hover { background-color: #D5F6D6; color: #128C3C; border: none; outline:none !important;}\r\n  \r\n.label-radio {\r\n    color: #000000;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n  }\r\n  \r\ninput[type='radio'] {\r\n    accent-color: #128C3C;\r\n}\r\n  \r\ninput[type='radio']:hover {\r\n    accent-color: #128C3C;\r\n}\r\n  \r\ninput[type='checkbox'] {\r\n    accent-color: #128C3C;\r\n}\r\n  \r\ninput[type='checkbox']:hover {\r\n    accent-color: #128C3C;\r\n}\r\n  \r\n.td-fila {\r\n    color: #000000 !important;\r\n    font-style: normal !important;\r\n    font-weight: 400 !important;\r\n    font-size: 13px !important;\r\n}\r\n  \r\n.th-columna {\r\n    color: #FFFFFF !important;\r\n    font-style: normal !important;\r\n    font-weight: 400 !important;\r\n    font-size: 13px !important;\r\n    background: #2473B6 !important;\r\n    border: 1px solid #FFFFFF !important;\r\n}\r\n  \r\n.text-gracias {\r\n    color: #2473B6;\r\n    font-style: normal;\r\nfont-weight: 500;\r\nfont-size: 24px;\r\n}\r\n  \r\n.text-mensaje {\r\n    color: #000000;\r\n    font-style: normal;\r\nfont-weight: 400;\r\nfont-size: 16px;\r\n}\r\n  \r\n.btn-continuar:active { background-color: #128C3C; color: White; border: none; outline:none !important;;\r\n}\r\n  \r\n.btn-continuar:focus { background-color: #128C3C; color: White; border: none; outline:none !important;}\r\n  \r\n.btn-continuar:hover { background-color: #128C3C; color: White; border: none; outline:none !important;;\r\n}\r\n  \r\n.text-caracteres {\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 10px;\r\n    color: #848B96;\r\n}\r\n  \r\n.text-mensaje {\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    color: #000000;\r\n}\r\n  \r\n.text-archivo {\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 11px;\r\n    color: #848B96;\r\n}\r\n  \r\n.ant-input {\r\n    margin-top: 5px;\r\n    background: #EAEFF5;\r\n    border: 1px solid #EAEFF5;\r\n}\r\n  \r\n.btn-file-input {\r\n    background: #FFFFFF;\r\n    box-shadow: 0px 0px 12px rgb(0 0 0 / 12%);\r\n    border-radius: 8px;\r\n}\r\n  \r\n.btn-file-input i {\r\n    color: #000000 !important;\r\n}\r\n  \r\n.input-group {\r\n    background: #EAEFF5;\r\n    height: 45px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lbmN1ZXN0YWRvLWV4dC9wYWdlcy9nZXN0aW9uLWV4dC9wYWdlcy9sbGVuYWRvLXByZWd1bnRhLWV4dC9sbGVuYWRvLXByZWd1bnRhLWV4dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0QixnQkFBZ0I7QUFDaEIsZUFBZTtBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0QixnQkFBZ0I7QUFDaEIsZUFBZTtBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0QixnQkFBZ0I7QUFDaEIsZUFBZTtBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0QixnQkFBZ0I7QUFDaEIsZUFBZTtBQUNmOztBQUVFO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7RUFDZDs7QUFFQSx3QkFBd0IsMENBQTBDLEdBQUcsY0FBYyxFQUFFLFlBQVksRUFBRSx1QkFBdUIsQ0FBQzs7QUFFM0gsdUJBQXVCLDBDQUEwQyxHQUFHLGNBQWMsRUFBRSxZQUFZLEVBQUUsdUJBQXVCLENBQUM7O0FBRTFILHVCQUF1QiwwQ0FBMEMsR0FBRyxjQUFjLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixDQUFDOztBQUUxSDtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0FBQ0Esb0JBQW9CLHlCQUF5QixFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsdUJBQXVCLENBQUM7O0FBRXJHLG1CQUFtQix5QkFBeUIsRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixDQUFDOztBQUVwRyxtQkFBbUIseUJBQXlCLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSx1QkFBdUIsQ0FBQzs7QUFFcEc7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtFQUNkOztBQUNBLHdCQUF3Qix5QkFBeUIsRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixDQUFDOztBQUV6Ryx1QkFBdUIseUJBQXlCLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSx1QkFBdUIsQ0FBQzs7QUFFeEcsdUJBQXVCLHlCQUF5QixFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsdUJBQXVCLENBQUM7O0FBRXhHO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7QUFHRjtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0QixnQkFBZ0I7QUFDaEIsZUFBZTtBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0QixnQkFBZ0I7QUFDaEIsZUFBZTtBQUNmOztBQUVBLHdCQUF3Qix5QkFBeUIsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLHVCQUF1QjtBQUN0Rzs7QUFFQSx1QkFBdUIseUJBQXlCLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsQ0FBQzs7QUFFdEcsdUJBQXVCLHlCQUF5QixFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsdUJBQXVCO0FBQ3JHOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6QyxrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZW5jdWVzdGFkby1leHQvcGFnZXMvZ2VzdGlvbi1leHQvcGFnZXMvbGxlbmFkby1wcmVndW50YS1leHQvbGxlbmFkby1wcmVndW50YS1leHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5faG92ZXJhYmxlOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiAgXHJcbi5sYWJlbC1jc3Mge1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUFFRkY1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLnRleHQtcHJlZ3VudGEge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtd2VpZ2h0OiA1MDA7XHJcbmZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnRleHQtdGl0dWxvIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogNDAwO1xyXG5mb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi50ZXh0LWRlc2NyaXBjaW9ue1xyXG4gICAgY29sb3I6ICM4NDhCOTY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtd2VpZ2h0OiA0MDA7XHJcbmZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnRleHQtb2JsaWdhdG9yaW8ge1xyXG4gICAgY29sb3I6ICNEQzM1NDU7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtd2VpZ2h0OiA0MDA7XHJcbmZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4gIFxyXG4gIC5idG4tc2lndWllbnRlIHtcclxuICAgIGNvbG9yOiAjMjQ3M0I2O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTgyLCAyMTgsIDI0OSwgMC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7ICAgICAgICAgICBcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMTE5cHg7XHJcbiAgfVxyXG5cclxuICAuYnRuLXNpZ3VpZW50ZTphY3RpdmUgeyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MiwgMjE4LCAyNDksIDAuNSk7OyBjb2xvcjogIzI0NzNCNjsgYm9yZGVyOiBub25lOyBvdXRsaW5lOm5vbmUgIWltcG9ydGFudDt9XHJcblxyXG4gIC5idG4tc2lndWllbnRlOmZvY3VzIHsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODIsIDIxOCwgMjQ5LCAwLjUpOzsgY29sb3I6ICMyNDczQjY7IGJvcmRlcjogbm9uZTsgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7fVxyXG5cclxuICAuYnRuLXNpZ3VpZW50ZTpob3ZlciB7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgyLCAyMTgsIDI0OSwgMC41KTs7IGNvbG9yOiAjMjQ3M0I2OyBib3JkZXI6IG5vbmU7IG91dGxpbmU6bm9uZSAhaW1wb3J0YW50O31cclxuXHJcbiAgLmJ0bi1hdHJhcyB7XHJcbiAgICBjb2xvcjogIzg0OEI5NjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUFFRkY1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDsgICAgICAgICAgIFxyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAxMTlweDtcclxuICB9XHJcbiAgLmJ0bi1hdHJhczphY3RpdmUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjRUFFRkY1OyBjb2xvcjogIzg0OEI5NjsgYm9yZGVyOiBub25lOyBvdXRsaW5lOm5vbmUgIWltcG9ydGFudDt9XHJcblxyXG4gIC5idG4tYXRyYXM6Zm9jdXMgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjRUFFRkY1OyBjb2xvcjogIzg0OEI5NjsgYm9yZGVyOiBub25lOyBvdXRsaW5lOm5vbmUgIWltcG9ydGFudDt9XHJcblxyXG4gIC5idG4tYXRyYXM6aG92ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjRUFFRkY1OyBjb2xvcjogIzg0OEI5NjsgYm9yZGVyOiBub25lOyBvdXRsaW5lOm5vbmUgIWltcG9ydGFudDt9XHJcblxyXG4gIC5idG4tZmluYWxpemFyIHtcclxuICAgIGNvbG9yOiAjMTI4QzNDO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICNENUY2RDY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyAgICAgICAgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDExOXB4O1xyXG4gIH1cclxuICAuYnRuLWZpbmFsaXphcjphY3RpdmUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjRDVGNkQ2OyBjb2xvcjogIzEyOEMzQzsgYm9yZGVyOiBub25lOyBvdXRsaW5lOm5vbmUgIWltcG9ydGFudDt9XHJcblxyXG4gIC5idG4tZmluYWxpemFyOmZvY3VzIHsgYmFja2dyb3VuZC1jb2xvcjogI0Q1RjZENjsgY29sb3I6ICMxMjhDM0M7IGJvcmRlcjogbm9uZTsgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7fVxyXG5cclxuICAuYnRuLWZpbmFsaXphcjpob3ZlciB7IGJhY2tncm91bmQtY29sb3I6ICNENUY2RDY7IGNvbG9yOiAjMTI4QzNDOyBib3JkZXI6IG5vbmU7IG91dGxpbmU6bm9uZSAhaW1wb3J0YW50O31cclxuXHJcbiAgLmxhYmVsLXJhZGlvIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG5cclxuaW5wdXRbdHlwZT0ncmFkaW8nXSB7XHJcbiAgICBhY2NlbnQtY29sb3I6ICMxMjhDM0M7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9J3JhZGlvJ106aG92ZXIge1xyXG4gICAgYWNjZW50LWNvbG9yOiAjMTI4QzNDO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcclxuICAgIGFjY2VudC1jb2xvcjogIzEyOEMzQztcclxufVxyXG5cclxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpob3ZlciB7XHJcbiAgICBhY2NlbnQtY29sb3I6ICMxMjhDM0M7XHJcbn1cclxuXHJcbi50ZC1maWxhIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGgtY29sdW1uYSB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICMyNDczQjYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRkZGRkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtZ3JhY2lhcyB7XHJcbiAgICBjb2xvcjogIzI0NzNCNjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC13ZWlnaHQ6IDUwMDtcclxuZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4udGV4dC1tZW5zYWplIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogNDAwO1xyXG5mb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5idG4tY29udGludWFyOmFjdGl2ZSB7IGJhY2tncm91bmQtY29sb3I6ICMxMjhDM0M7IGNvbG9yOiBXaGl0ZTsgYm9yZGVyOiBub25lOyBvdXRsaW5lOm5vbmUgIWltcG9ydGFudDs7XHJcbn1cclxuXHJcbi5idG4tY29udGludWFyOmZvY3VzIHsgYmFja2dyb3VuZC1jb2xvcjogIzEyOEMzQzsgY29sb3I6IFdoaXRlOyBib3JkZXI6IG5vbmU7IG91dGxpbmU6bm9uZSAhaW1wb3J0YW50O31cclxuXHJcbi5idG4tY29udGludWFyOmhvdmVyIHsgYmFja2dyb3VuZC1jb2xvcjogIzEyOEMzQzsgY29sb3I6IFdoaXRlOyBib3JkZXI6IG5vbmU7IG91dGxpbmU6bm9uZSAhaW1wb3J0YW50OztcclxufVxyXG5cclxuLnRleHQtY2FyYWN0ZXJlcyB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICM4NDhCOTY7XHJcbn1cclxuXHJcbi50ZXh0LW1lbnNhamUge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4udGV4dC1hcmNoaXZvIHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogIzg0OEI5NjtcclxufVxyXG5cclxuLmFudC1pbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUFFRkY1O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0VBRUZGNTtcclxufVxyXG5cclxuLmJ0bi1maWxlLWlucHV0IHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggcmdiKDAgMCAwIC8gMTIlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuXHJcbi5idG4tZmlsZS1pbnB1dCBpIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUFFRkY1O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/modules/encuestado-ext/pages/gestion-ext/pages/llenado-pregunta-ext/llenado-pregunta-ext.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/encuestado-ext/pages/gestion-ext/pages/llenado-pregunta-ext/llenado-pregunta-ext.component.ts ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! @app/_core/services/respuesta.service */ "./src/app/_core/services/respuesta.service.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js"), __webpack_require__(/*! speak-tts */ "./node_modules/speak-tts/lib/speak-tts.js"), __webpack_require__(/*! external/ckeditor5-build-decoupled-document */ "./external/ckeditor5-build-decoupled-document/build/ckeditor.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, forms_1, platform_browser_1, _core_1, respuesta_service_1, ng_zorro_antd_1, ngx_spinner_1, speak_tts_1, DecoupledEditor) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    DecoupledEditor.defaultConfig = _core_1.DecoupledInit.defaultConfig;
    let LlenadoPreguntaExtComponent = class LlenadoPreguntaExtComponent {
        constructor(spinner, encuesta_s, notification, respuesta_s, _fileService, modal, _authService, _alertService, sanitizer, cd) {
            this.spinner = spinner;
            this.encuesta_s = encuesta_s;
            this.notification = notification;
            this.respuesta_s = respuesta_s;
            this._fileService = _fileService;
            this.modal = modal;
            this._authService = _authService;
            this._alertService = _alertService;
            this.sanitizer = sanitizer;
            this.cd = cd;
            this.id_encuesta = 0;
            this.es_anonima = false;
            this.total = 7;
            this.paginado_registrado = [];
            this.pageIndex = 1;
            this.disparadoresRespuestas = [];
            this.onGoBackEncuesta = new core_1.EventEmitter();
            this.onGoToInicio = new core_1.EventEmitter();
            this.onEmitDataToHeader = new core_1.EventEmitter();
            this.show_pregunta_llenado = true;
            this.total_page = 5;
            this.respuestas = [];
            this.JSON_PREGUNTA = null;
            this.JSON_PREGUNTA_MATRIZ = null;
            this.cargando_tabla = true;
            this.pageSize = 1;
            this._TIPO_ARCHIVO = _core_1.TIPO_ARCHIVO_ENUMERADO;
            this._array_preguntas_visibles = [];
            this.formato_fecha = "";
            this.cantidad_caracteres = "1000";
            this.estaGuardando = false;
            this.pesoMaximoEnMB = _core_1.FILE_SETTINGS.maxFileSize;
            this.imagen_extensionAceptados = [".png", ".jpeg", ".gif", ".pdf", ".doc", ".docx", ".xls", ".xlsx"];
            this.url = "/api/comun/descargar-archivo";
            this.imagen_MimePermitidos = ["image/png", "image/jpeg", "image/gif", "application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"];
            this._imagen_extensionAceptados = [];
            this._imagen_MimePermitidos = [];
            this.esAgregarPreguntaMultiple = false;
            this.tieneArchivo = false;
            this.loaded_pagination = false;
            this.pagination_array = [];
            this.pagination_array_resolved = [];
            this.buscarDisparadores = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.encuesta_s._GetPreguntasCondicionalesByEncuesta({ id_encuesta: this.id_encuesta }).then((datos) => {
                    if (datos && datos.data) {
                        this.disparadoresRespuestas = datos.data;
                    }
                    else {
                        this.disparadoresRespuestas = [];
                    }
                }).catch(() => { this.disparadoresRespuestas = []; });
            });
            this.detectar_resueltos = () => {
                let copy_page = this.pagination_array; //_resolved;
                this.loaded_pagination = false;
                this.pagination_array.forEach((f, index) => {
                    let rpta = this.respuestas.find(x => x.id_pregunta == f.id_pregunta);
                    let _pregunta = copy_page.find(x => x.id_pregunta == f.id_pregunta);
                    if (_pregunta) {
                        let _idx_pregunta = copy_page.indexOf(_pregunta);
                        if (rpta) {
                            let json_respuesta = JSON.parse(rpta.json_respuesta);
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                                if (json_respuesta.tbl_data == 1) {
                                    copy_page[_idx_pregunta].resolved = json_respuesta.respuesta.d1 == null ? false : true;
                                }
                                if (json_respuesta.tbl_data == 2) {
                                    copy_page[_idx_pregunta].resolved = json_respuesta.respuesta == null ? false : true;
                                }
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_multiple ||
                                json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                                let filter = json_respuesta.respuesta.length == 0 ? null : json_respuesta.respuesta.filter(ff => ff.selected == true);
                                copy_page[_idx_pregunta].resolved = filter.length == 0 ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_libre) {
                                let filter = json_respuesta.respuesta.length == 0 ? null : json_respuesta.respuesta[0];
                                copy_page[_idx_pregunta].resolved = filter ? true : false;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.numerico_entero || json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.numerico_decimal) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.respuesta == null ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.fecha) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.respuesta == null ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.texto) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.respuesta == null ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.archivo) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.respuesta == null ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.mensaje) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.mensaje == null ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.matriz) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.respuesta.length == 0 ? false : true;
                            }
                        }
                        else {
                            copy_page[_idx_pregunta].resolved = false;
                        }
                    }
                });
                copy_page.forEach((x, idx) => { x.page = idx + 1; });
                setTimeout(() => {
                    //this.pagination_array_resolved=copy_page;
                    this.pagination_array = copy_page;
                    this.loaded_pagination = true;
                    this.cd.markForCheck();
                    this.cd.detectChanges();
                }, 120);
            };
            this.getResolved = (id_pregunta) => {
                let find = this.pagination_array_resolved.find(x => x.id_pregunta == id_pregunta);
                return find ? find.resolved : false;
            };
            //#region AUDIO PREGUNTA 
            this.volume_value_pregunta = 50;
            this.show_volume_audio = false;
            this.audio_paused_pregunta = true;
            this.audio_speech_pregunta = false;
            this.first_run = true;
            this.result = '';
            this.check_if_pending_audio = () => {
                if (!this.speech.pending()) { //ya no qujeda nada por hablar
                    this.audio_speech_pregunta = false;
                    this.audio_paused_pregunta = true;
                }
            };
            //#endregion
            //#region MANEJO VIDEO
            this._idYoutubeVideo_pregunta = null;
            this._idYoutubeVideo_agradecimiento = null;
            //#endregion
            this._TIPO_PREGUNTA = _core_1.TIPO_PREGUNTA;
            this.RESPUESTA_MATRIZ = [];
            this.frmMtz = [];
            this.get_Preguntas = (show_spinner = true) => {
                this.cargando_tabla = true;
                let _id_pregunta = 0;
                //this.pageIndex = 8;
                setTimeout(() => {
                    if (this.Pregunta) {
                        let _filtered = this.pagination_array.filter(x => x.page == this.pageIndex);
                        if (_filtered.find(x => x.hidden == true)) {
                            this.pageIndex = this.pageIndex + 1;
                            _id_pregunta = this.pagination_array.find(x => x.page == this.pageIndex && x.hidden == false).id_pregunta;
                        }
                        else {
                            _id_pregunta = _filtered.find(x => x.hidden == false) ? _filtered.find(x => x.hidden == false).id_pregunta : 0;
                        }
                    }
                    else {
                        if (this.pagination_array.find(x => x.page == this.pageIndex && x.hidden == true)) {
                            this.pageIndex = this.pageIndex + 1;
                        }
                        _id_pregunta = this.pagination_array.find(x => x.page == this.pageIndex && x.hidden == false).id_pregunta;
                    }
                    let filtro = { id_pregunta: _id_pregunta }; //this.pageIndex;
                    if (show_spinner) {
                        this.spinner.show();
                    }
                    localStorage.setItem("is_filling", "true");
                    this.detectar_resueltos();
                    this.total = this.pagination_array.filter(x => x.hidden == false).length;
                    this.encuesta_s._GetPreguntaByIdenPregunta(filtro)
                        .then((datos) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        if (datos && datos.data && datos.data.Data) {
                            let data = datos.data.Data;
                            let pregunta = data[0];
                            this.tieneArchivo = pregunta.id_tipo_archivo == null ? false : true;
                            this.Pregunta = data[0];
                            this.html_pregunta = '<p>' + pregunta.pregunta + '</p>';
                            if (this.arrayPreguntas.length > 0) {
                                for (let i = 0; i < this.pagination_array.length; i++) {
                                    let item = this.arrayPreguntas.find(item => item.id_pregunta === this.pagination_array[i].id_pregunta);
                                    let itemActual = this.arrayPreguntas.find(item => item.id_pregunta === pregunta.id_pregunta);
                                    if (item.id_pregunta == itemActual.id_pregunta) {
                                        item.actual = true;
                                        item.resuelto = false;
                                    }
                                    else {
                                        item.actual = false;
                                        item.resuelto = this.pagination_array[i].resolved;
                                    }
                                }
                            }
                            if (this.respuestas.find(f => f.id_pregunta == pregunta.id_pregunta)) {
                                let rpta = this.respuestas.find(f => f.id_pregunta == pregunta.id_pregunta);
                                let json_ = JSON.parse(rpta.json_respuesta);
                                if (json_.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                                    //this.setComboInstitucional(Number(this.JSON_PREGUNTA.tbl_data));
                                }
                                if (json_.id_tipo == _core_1.TIPO_PREGUNTA.matriz) {
                                    let controls = [];
                                    if (json_.es_columna_matriz) {
                                        json_.respuesta.forEach((f, fidx) => {
                                            controls.push([]);
                                            f.columnas.forEach((c, cidx) => {
                                                controls[fidx].push(new forms_1.FormControl(f.respuestas[cidx]));
                                            });
                                        });
                                    }
                                    else {
                                        json_.respuesta.forEach((f, fidx) => {
                                            controls.push([]);
                                            f.columnas.forEach((c, cidx) => {
                                                controls[fidx].push(new forms_1.FormControl(f.respuestas[cidx]));
                                            });
                                        });
                                    }
                                    this.frmMtz = controls;
                                }
                                else {
                                    this.frmMtz = [];
                                }
                                if (json_.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_multiple) {
                                    this.esAgregarPreguntaMultiple = pregunta.es_agregar_pregunta;
                                    let rpta = [];
                                    json_.opciones.forEach(f => {
                                        let item = f;
                                        item.selected = false;
                                        rpta.push(item);
                                    });
                                }
                                if (json_.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                                    this.esAgregarPreguntaMultiple = pregunta.es_agregar_pregunta;
                                    let rpta = [];
                                    json_.opciones.forEach(f => {
                                        let item = f;
                                        item.selected = false;
                                        rpta.push(item);
                                    });
                                }
                                if (json_.id_tipo == _core_1.TIPO_PREGUNTA.fecha) {
                                    let fechas = JSON.parse(pregunta.json_tipo_fecha);
                                    for (let i = 0; i < fechas.length; i++) {
                                        if (fechas[i].id_enumerado == 1 && fechas[i].selected) {
                                            this.formato_fecha = "yyyy";
                                        }
                                        if (fechas[i].id_enumerado == 2 && fechas[i].selected) {
                                            this.formato_fecha = "MM/yyyy";
                                        }
                                        if (fechas[i].id_enumerado == 3 && fechas[i].selected) {
                                            this.formato_fecha = "dd/MM/yyyy";
                                        }
                                    }
                                }
                                this.JSON_PREGUNTA = json_;
                                this.JSON_PREGUNTA.es_obligatorio = pregunta.es_obligatorio;
                            }
                            else {
                                this.JSON_PREGUNTA = JSON.parse(pregunta.json_alternativas);
                                this.JSON_PREGUNTA.es_obligatorio = pregunta.es_obligatorio;
                                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                                    if (this.JSON_PREGUNTA.tbl_data == 1) {
                                        this.JSON_PREGUNTA.respuesta = { d1: null, d2: null, d3: null };
                                    }
                                }
                                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_libre ||
                                    this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_multiple ||
                                    this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                                    this.esAgregarPreguntaMultiple = pregunta.es_agregar_pregunta;
                                    if (this.JSON_PREGUNTA.id_tipo != _core_1.TIPO_PREGUNTA.desplegable_libre) {
                                        let rpta = [];
                                        this.JSON_PREGUNTA.opciones.forEach(f => {
                                            let item = f;
                                            item.selected = false;
                                            rpta.push(item);
                                        });
                                        this.JSON_PREGUNTA.respuesta = rpta;
                                    }
                                    else {
                                        this.JSON_PREGUNTA.respuesta = [null];
                                    }
                                }
                                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.matriz) {
                                    let rpta = [];
                                    let controls = [];
                                    if (this.JSON_PREGUNTA.es_columna_matriz) {
                                        this.JSON_PREGUNTA.filas.forEach((f, fidx) => {
                                            let item = f;
                                            let vals = [];
                                            let columnas = [];
                                            controls.push([]);
                                            this.JSON_PREGUNTA.columnas.forEach(c => {
                                                let col = c;
                                                if (c.forma.id_tipo == _core_1.TIPO_PREGUNTA.numerico_decimal || c.forma.id_tipo == _core_1.TIPO_PREGUNTA.numerico_entero
                                                    || c.forma.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_unica || c.forma.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                                                    vals.push(null);
                                                }
                                                else {
                                                    vals.push([]);
                                                }
                                                if (c.forma.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                                                    col.forma.respuesta = [null];
                                                    controls[fidx].push(new forms_1.FormControl(null));
                                                }
                                                else {
                                                    controls[fidx].push(new forms_1.FormControl(col.forma.respuesta));
                                                }
                                                columnas.push(col);
                                            });
                                            item.respuestas = vals;
                                            item.columnas = columnas;
                                            rpta.push(item);
                                        });
                                    }
                                    else if (!this.JSON_PREGUNTA.es_columna_matriz) {
                                        var filas = this.JSON_PREGUNTA.filas;
                                        for (var i = 0; i < filas.length; i++) {
                                            // Iterate over numeric indexes from 0 to 5, as everyone expects.
                                            const item = filas[i];
                                            let vals = [];
                                            let columna = [];
                                            controls.push([]);
                                            filas[i].columnas = [];
                                            const _json_ = JSON.parse(pregunta.json_alternativas);
                                            var columnass = _json_.columnas;
                                            for (var j = 0; j < columnass.length; j++) {
                                                var col = columnass[j];
                                                col.forma = item.forma;
                                                col.nombre_fila = item.nombre_fila;
                                                if (filas[i].forma.id_tipo == _core_1.TIPO_PREGUNTA.numerico_decimal || filas[i].forma.id_tipo == _core_1.TIPO_PREGUNTA.numerico_entero
                                                    || filas[i].forma.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_unica || filas[i].forma.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                                                    vals.push(null);
                                                }
                                                else {
                                                    vals.push([]);
                                                }
                                                if (filas[i].forma.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                                                    col.forma.respuesta = [null];
                                                    controls[filas[i].idx].push(new forms_1.FormControl(null));
                                                }
                                                else {
                                                    controls[filas[i].idx].push(new forms_1.FormControl(columnass[j].forma.respuesta));
                                                }
                                                columna.push(col);
                                            }
                                            let fila_item = this.JSON_PREGUNTA.filas.find(x => x.idx == filas[i].idx);
                                            fila_item.respuestas = vals;
                                            fila_item.columnas = columna;
                                            rpta.push(fila_item);
                                        }
                                    }
                                    this.frmMtz = controls;
                                    this.RESPUESTA_MATRIZ = rpta;
                                    this.JSON_PREGUNTA.respuesta = rpta;
                                }
                                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.fecha) {
                                    let fechas = JSON.parse(pregunta.json_tipo_fecha);
                                    for (let i = 0; i < fechas.length; i++) {
                                        if (fechas[i].id_enumerado == 1 && fechas[i].selected) {
                                            this.formato_fecha = "yyyy";
                                        }
                                        if (fechas[i].id_enumerado == 2 && fechas[i].selected) {
                                            this.formato_fecha = "MM/yyyy";
                                        }
                                        if (fechas[i].id_enumerado == 3 && fechas[i].selected) {
                                            this.formato_fecha = "dd/MM/yyyy";
                                        }
                                    }
                                }
                                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.texto) {
                                    let caracter = JSON.parse(pregunta.json_alternativas);
                                    this.cantidad_caracteres = caracter.nro_caracteres;
                                }
                                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.archivo) {
                                    this.JSON_PREGUNTA.respuesta = null;
                                    this._imagen_archivo = [];
                                    this._imagen_extensionAceptados = [];
                                    this._imagen_MimePermitidos = [];
                                    this._placeholder = "Adjunta ";
                                    let count = 0;
                                    let archivoTipos = JSON.parse(pregunta.json_archivo_tipo_archivo);
                                    for (let i = 0; i < archivoTipos.length; i++) {
                                        if (archivoTipos[i].id_enumerado == 1 && archivoTipos[i].selected) {
                                            this._imagen_extensionAceptados.push(".png", ".jpeg", ".gif");
                                            this._imagen_MimePermitidos.push("image/png", "image/jpeg", "image/gif");
                                            this._placeholder = this._placeholder + "JPG, GIF, PNG";
                                            count++;
                                        }
                                        if (archivoTipos[i].id_enumerado == 2 && archivoTipos[i].selected) {
                                            this._imagen_extensionAceptados.push(".pdf");
                                            this._imagen_MimePermitidos.push("application/pdf");
                                            if (count > 0) {
                                                this._placeholder = this._placeholder + ", PDF";
                                            }
                                            else {
                                                this._placeholder = this._placeholder + "PDF";
                                            }
                                            count++;
                                        }
                                        if (archivoTipos[i].id_enumerado == 3 && archivoTipos[i].selected) {
                                            this._imagen_extensionAceptados.push(".doc", ".docx");
                                            this._imagen_MimePermitidos.push("application/vnd.openxmlformats-officedocument.wordprocessingml.document");
                                            if (count > 0) {
                                                this._placeholder = this._placeholder + ", WORD";
                                            }
                                            else {
                                                this._placeholder = this._placeholder + "WORD";
                                            }
                                            count++;
                                        }
                                        if (archivoTipos[i].id_enumerado == 4 && archivoTipos[i].selected) {
                                            this._imagen_extensionAceptados.push(".xls", ".xlsx");
                                            this._imagen_MimePermitidos.push("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
                                            if (count > 0) {
                                                this._placeholder = this._placeholder + ", XLS";
                                            }
                                            else {
                                                this._placeholder = this._placeholder + "XLS";
                                            }
                                        }
                                    }
                                }
                            }
                            this.emit_data_to_header(data[0], this.pageIndex);
                            if (pregunta.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.video) {
                                let url = pregunta.url_video;
                                this._idYoutubeVideo_pregunta = url.substring(32, 43);
                                this._loaded_media_pregunta = true;
                            }
                            else {
                                if (pregunta.iden_imagen != null) {
                                    yield this.onGetSavedFileByCode(pregunta.iden_imagen);
                                }
                                this._loaded_media_pregunta = true;
                            }
                        }
                        console.log(this.JSON_PREGUNTA);
                        this.cargando_tabla = false;
                        this.cd.markForCheck();
                        this.cd.detectChanges();
                        this.spinner.hide();
                    }))
                        .catch(() => {
                        this.cargando_tabla = false;
                        this.spinner.hide();
                    });
                }, 120);
            };
            this.emit_data_to_header = (pregunta, page_index) => {
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
                let _respuesta = this.respuestas.find(f => f.id_pregunta == _id_pregunta) ? this.respuestas.find(f => f.id_pregunta == _id_pregunta).json_respuesta : posibles;
                let data_emit = {
                    id_encuesta: this.id_encuesta,
                    pageIndex: page_index,
                    id_pregunta: _id_pregunta,
                    respuesta: _respuesta,
                    es_anonima: this.es_anonima,
                    paginado: this.pagination_array
                };
                let json = JSON.stringify(data_emit);
                localStorage.setItem("is_filling_content", json);
                this.onEmitDataToHeader.emit(data_emit);
            };
            //#region COMBOS INSTITUCIONAL
            this.array_cbo_intitucional = [];
            this.d1 = [];
            this.d2 = [];
            this.d3 = [];
            this.d2_disabled = false;
            this.d3_disabled = false;
            this.array_regimen_cbo = [];
            this.array_d_gen = [];
            this.array_d1 = [];
            this.array_d2 = [];
            this.array_d3 = [];
            this.getD2 = ($event) => {
                let dt = this.array_d_gen;
                this.JSON_PREGUNTA.respuesta.d2 = null;
                this.JSON_PREGUNTA.respuesta.d3 = null;
                this.d2 = dt.filter(f => f.CODDEP_RESPONSABLE == $event);
                this.d2_disabled = this.d2.length > 0 ? false : true;
                this.d3_disabled = this.d2.length > 0 ? false : true;
            };
            this.getD3 = ($event) => {
                let dt = this.array_d_gen;
                this.JSON_PREGUNTA.respuesta.d3 = null;
                this.d3 = dt.filter(f => f.CODDEP_RESPONSABLE == $event);
                this.d3_disabled = this.d3.length > 0 ? false : true;
            };
            this.getPreguntasEncuesta = (show_spinner = true) => {
                let filtro = { id_encuesta: this.id_encuesta, _mostar_solo_condicional: false };
                this.encuesta_s._GetListaPreguntasByEncuesta(filtro, this.pageIndex, 10000)
                    .then((datos) => {
                    this.arrayPreguntas = datos.data;
                    this.get_Preguntas(show_spinner);
                }).catch(() => { });
            };
            //#endregion
            //#region  EVENTOS DEL LLENADO
            this.setOneClickedOnly = (idx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.JSON_PREGUNTA.respuesta.forEach((e, index) => {
                    e.selected = (index == idx ? true : false);
                });
                this.cd.markForCheck();
                this.cd.detectChanges();
                yield this.detectarDisparador();
                this.JSON_PREGUNTA.respuesta[idx].selected = true;
            });
            this.setOneClickedMultiple = (idx, id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (this.JSON_PREGUNTA.respuesta[id].selected) {
                    this.JSON_PREGUNTA.respuesta[id].selected = false;
                }
                else {
                    this.JSON_PREGUNTA.respuesta[id].selected = true;
                }
            });
            this.loading_matriz = false;
            //#endregion
            this._loaded_media_pregunta = false;
            this._loaded_media_agradecimiento = false;
            this.onGetSavedFileByCode = (codigo, es_agradecimiento = false) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this._fileService.getFilesById(codigo).then(resp => {
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
                                if (es_agradecimiento == false) {
                                    this._urlArchivo_pregunta = this.sanitizer.bypassSecurityTrustResourceUrl(urlArchivo);
                                    this._loaded_media_pregunta = true;
                                }
                                else {
                                    this._urlArchivo_agradecimiento = this.sanitizer.bypassSecurityTrustResourceUrl(urlArchivo);
                                    this._loaded_media_agradecimiento = true;
                                }
                            }
                            else {
                                this._alertService.open("error", resp.Data[0].mensajeError, 'Error de imagen');
                                if (es_agradecimiento == false) {
                                    this._loaded_media_pregunta = false;
                                }
                                else {
                                    this._loaded_media_agradecimiento = false;
                                }
                            }
                        }
                        else {
                            this._alertService.open("error", "Sin datos para cargar", "Error de imagen");
                            if (es_agradecimiento == false) {
                                this._loaded_media_pregunta = false;
                            }
                            else {
                                this._loaded_media_agradecimiento = false;
                            }
                        }
                    }
                    if (!resp.Success) {
                        this._alertService.open("error", resp.Messages[0], "Error de imagen");
                        if (es_agradecimiento == false) {
                            this._loaded_media_pregunta = false;
                        }
                        else {
                            this._loaded_media_agradecimiento = false;
                        }
                    }
                    this.cd.detectChanges();
                    this.cd.markForCheck();
                }, (error) => {
                    console.error(error);
                });
            });
            //#region VIAJE ENTE PREGUNTAS
            this.onPageChange = (e) => {
                e = e ? Number(e) : null;
                let _continue = true;
                if (this.Pregunta.es_obligatorio) {
                    if (this.is_validChangePregunta()) {
                        _continue = true;
                        this.calcel_speech();
                    }
                    else {
                        _continue = false;
                    }
                }
                else {
                    _continue = true;
                }
                if (_continue) {
                    setTimeout(() => {
                        /*this.pagination_array.forEach(pg=>{
                          pg.selected=(pg.page==e?true:false);
                        })*/
                        this.presetIndex = e;
                        this.goNextPregunta();
                        this.cd.markForCheck();
                        this.cd.detectChanges();
                    }, 150);
                }
                else {
                    setTimeout(() => {
                        let before = this.presetIndex;
                        this.pageIndex = before;
                        this.cd.markForCheck();
                        this.cd.detectChanges();
                    }, 150);
                }
            };
            this.onPageChangeNext = () => {
                let e = this.pageIndex + 1;
                //this.pageIndex += 1;
                let _continue = true;
                if (this.Pregunta.es_obligatorio) {
                    if (this.is_validChangePregunta()) {
                        _continue = true;
                        this.calcel_speech();
                    }
                    else {
                        _continue = false;
                    }
                }
                else {
                    _continue = true;
                }
                if (_continue) {
                    setTimeout(() => {
                        /*this.pagination_array.forEach(pg=>{
                          pg.selected=(pg.page==e?true:false);
                        })*/
                        this.presetIndex = e;
                        this.goNextPregunta(1);
                        this.cd.markForCheck();
                        this.cd.detectChanges();
                    }, 150);
                }
                else {
                    setTimeout(() => {
                        //let before = this.presetIndex;
                        //this.pageIndex=before;
                        this.cd.markForCheck();
                        this.cd.detectChanges();
                    }, 150);
                }
            };
            this.onPageChangePrev = () => {
                let e = this.pageIndex - 1;
                //this.pageIndex = e;
                let _continue = true;
                if (this.Pregunta.es_obligatorio) {
                    if (this.is_validChangePregunta()) {
                        _continue = true;
                        this.calcel_speech();
                    }
                    else {
                        _continue = false;
                    }
                }
                else {
                    _continue = true;
                }
                if (_continue) {
                    setTimeout(() => {
                        /*this.pagination_array.forEach(pg=>{
                          pg.selected=(pg.page==e?true:false);
                        })*/
                        this.presetIndex = e;
                        this.goNextPregunta(-1);
                        this.cd.markForCheck();
                        this.cd.detectChanges();
                        for (let i = 0; i < this.arrayPreguntas.length; i++) {
                            this.arrayPreguntas[i].actual = false;
                            this.arrayPreguntas[i].resuelto = false;
                        }
                    }, 150);
                }
                else {
                    setTimeout(() => {
                        //let before = this.presetIndex;
                        //this.pageIndex=before;
                        this.cd.markForCheck();
                        this.cd.detectChanges();
                    }, 150);
                }
            };
            this.conteo_lleno = 0;
            this.conteo_vacio = 0;
            this.is_validChangePregunta = () => {
                let valid = true;
                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                    if (this.JSON_PREGUNTA.tbl_data == 2 && this.JSON_PREGUNTA.respuesta == null) {
                        valid = false;
                    }
                    if (this.JSON_PREGUNTA.tbl_data == 1 && this.JSON_PREGUNTA.respuesta.d1 == null) {
                        valid = false;
                    }
                }
                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_multiple) {
                    let filter = this.JSON_PREGUNTA.respuesta.filter(f => f.selected == true).length;
                    let otro = this.JSON_PREGUNTA.otro;
                    if (filter == 0) {
                        if (this.esAgregarPreguntaMultiple) {
                            if (otro == "" || otro == undefined) {
                                valid = false;
                            }
                        }
                        else {
                            if (filter == 0) {
                                valid = false;
                            }
                        }
                    }
                }
                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                    let filter = this.JSON_PREGUNTA.respuesta.filter(f => f.selected == true).length;
                    let otro = this.JSON_PREGUNTA.otro;
                    if (filter == 0) {
                        if (this.esAgregarPreguntaMultiple) {
                            if (otro == "" || otro == undefined) {
                                valid = false;
                            }
                        }
                        else {
                            if (filter == 0) {
                                valid = false;
                            }
                        }
                    }
                }
                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_libre) {
                    if (this.JSON_PREGUNTA.respuesta[0] == null) {
                        valid = false;
                    }
                }
                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.fecha) {
                    if (this.JSON_PREGUNTA.respuesta == null) {
                        valid = false;
                    }
                }
                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.numerico_decimal
                    || this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.numerico_entero) {
                    if (this.JSON_PREGUNTA.respuesta == null) {
                        valid = false;
                    }
                }
                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.matriz) {
                    this.conteo_vacio = 0;
                    const _json_ = this.JSON_PREGUNTA;
                    if (this.JSON_PREGUNTA.es_columna_matriz) {
                        for (var j = 0; j < _json_.filas.length; j++) {
                            this.conteo_lleno = 0;
                            for (var i = 0; i < _json_.columnas.length; i++) {
                                if (_json_.respuesta[j].respuestas[i] == null || _json_.respuesta[j].respuestas[i] == "" || _json_.respuesta[j].respuestas[i].length == 0) {
                                    this.conteo_vacio++;
                                }
                                else {
                                    this.conteo_lleno++;
                                }
                            }
                            if (this.conteo_lleno > 0) {
                                if (_json_.columnas.length > this.conteo_lleno) {
                                    valid = false;
                                }
                            }
                        }
                        var total = _json_.columnas.length * _json_.filas.length;
                        if (this.conteo_vacio == total) {
                            valid = false;
                        }
                    }
                    else {
                        for (var i = 0; i < _json_.columnas.length; i++) {
                            this.conteo_lleno = 0;
                            for (var j = 0; j < _json_.filas.length; j++) {
                                if (_json_.respuesta[j].respuestas[i] == null || _json_.respuesta[j].respuestas[i] == "" || _json_.respuesta[j].respuestas[i].length == 0) {
                                    this.conteo_vacio++;
                                }
                                else {
                                    this.conteo_lleno++;
                                }
                            }
                            if (this.conteo_lleno > 0) {
                                if (_json_.filas.length > this.conteo_lleno) {
                                    valid = false;
                                }
                            }
                        }
                        var total = _json_.columnas.length * _json_.filas.length;
                        if (this.conteo_vacio == total) {
                            valid = false;
                        }
                        for (var i = 0; i < _json_.columnas.length; i++) {
                            this.conteo_lleno = 0;
                            for (var j = 0; j < _json_.filas.length; j++) {
                                if (_json_.respuesta[j].respuestas[i] == null || _json_.respuesta[j].respuestas[i] == "" || _json_.respuesta[j].respuestas[i].length == 0) {
                                    this.conteo_vacio++;
                                }
                                else {
                                    this.conteo_lleno++;
                                }
                            }
                            if (this.conteo_lleno > 0) {
                                if (_json_.filas.length > this.conteo_lleno) {
                                    valid = false;
                                }
                            }
                        }
                        var total = _json_.columnas.length * _json_.filas.length;
                        if (this.conteo_vacio == total) {
                            valid = false;
                        }
                        // for (var i = 0; i < _json_.filas.length; i++) {
                        //   for (var j = 0; j < _json_.filas[i].respuestas.length; j++) {
                        //     if(_json_.filas[i].respuestas[j] == null || _json_.filas[i].respuestas[j] == "" || _json_.filas[i].respuestas[j].length == 0){
                        //       valid=false;
                        //     }
                        //   }
                        // }
                    }
                }
                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.archivo) {
                    if (!this.JSON_PREGUNTA.respuesta) {
                        valid = false;
                    }
                }
                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.fecha) {
                    if (this.JSON_PREGUNTA.respuesta == null) {
                        valid = false;
                    }
                }
                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.texto) {
                    if (this.JSON_PREGUNTA.respuesta == null) {
                        valid = false;
                    }
                }
                if (!valid) {
                    this.createNotification('warning', 'Advertencia', '<ul><li>Debe responder a esta pregunta para poder continuar.</li></ul>');
                }
                return valid;
            };
            this.goNextPregunta = (aumento = 0) => {
                if (this.Pregunta.es_finaliza_encuesta && this.Pregunta.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.mensaje) {
                    this.goFinalizarEncuesta();
                }
                else {
                    let _id_pregunta_actual = this.Pregunta.id_pregunta;
                    let _actual_page = 0;
                    this.pagination_array.forEach(x => {
                        if (x.id_pregunta == _id_pregunta_actual) {
                            _actual_page = x.page;
                        }
                    });
                    this.pageIndex = _actual_page + aumento;
                    if (!this.es_anonima) {
                        if (this.respuestas.find(f => f.id_pregunta == this.Pregunta.id_pregunta)) {
                            this.respuestas.forEach(e => {
                                if (e.id_pregunta == this.Pregunta.id_pregunta) {
                                    e.json_respuesta = JSON.stringify(this.JSON_PREGUNTA);
                                }
                            });
                        }
                        else {
                            this.respuestas.push({
                                id_pregunta: this.Pregunta.id_pregunta,
                                json_respuesta: JSON.stringify(this.JSON_PREGUNTA)
                            });
                        }
                        let id_pregunta = this.Pregunta.id_pregunta;
                        let respuesta = this.respuestas.find(f => f.id_pregunta == id_pregunta).json_respuesta;
                        this.spinner.show();
                        let _arr = this._detectar_resueltos(this.pagination_array);
                        _arr.forEach((x, idx) => x.page = idx + 1);
                        this.total = _arr.filter(x => x.hidden == false).length;
                        setTimeout(() => {
                            this.pagination_array = _arr;
                            this.respuesta_s._UpdatePreguntaActualEncuestaAdministrado(this.id_encuesta, this.pageIndex, id_pregunta, respuesta, 1, JSON.stringify(this.pagination_array))
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
                        }, 100);
                    }
                    else {
                        if (this.respuestas.find(f => f.id_pregunta == this.Pregunta.id_pregunta)) {
                            this.respuestas.forEach(e => {
                                if (e.id_pregunta == this.Pregunta.id_pregunta) {
                                    e.json_respuesta = JSON.stringify(this.JSON_PREGUNTA);
                                }
                            });
                        }
                        else {
                            this.respuestas.push({
                                id_pregunta: this.Pregunta.id_pregunta,
                                json_respuesta: JSON.stringify(this.JSON_PREGUNTA)
                            });
                        }
                        let _arr = this._detectar_resueltos(this.pagination_array);
                        this.total = _arr.filter(x => x.hidden == false).length;
                        _arr.forEach((x, idx) => x.page = idx + 1);
                        /*
                        setTimeout(()=>{
                          this.pagination_array=_arr;
                        },100)*/
                        this.pagination_array = _arr;
                        this.get_Preguntas();
                    }
                }
            };
            this.GoBackEncuesta = () => {
                /*if(this.RESPUESTA_MATRIZ.length > 0){
                  let rpts=this.RESPUESTA_MATRIZ;
                  this.JSON_PREGUNTA.respuesta=rpts;
                }*/
                if (this.respuestas.find(f => f.id_pregunta == this.Pregunta.id_pregunta)) {
                    this.respuestas.forEach(e => {
                        if (e.id_pregunta == this.Pregunta.id_pregunta) {
                            e.json_respuesta = JSON.stringify(this.JSON_PREGUNTA);
                        }
                    });
                }
                else {
                    this.respuestas.push({
                        id_pregunta: this.Pregunta.id_pregunta,
                        json_respuesta: JSON.stringify(this.JSON_PREGUNTA)
                    });
                }
                let str = this.es_anonima ? 'Perderá los datos registrados hasta el momento.' : 'Podrás volver a ingresar y responder desde donde te quedaste.';
                this.modal.confirm({
                    nzTitle: 'Confirmación de salir de encuesta',
                    nzContent: '¿Esta seguro de salir de la plataforma sin completar su encuesta?<br>' + str,
                    nzOkText: 'Si',
                    nzOkType: 'primary',
                    nzCancelText: 'No',
                    nzOnOk: () => {
                        if (!this.es_anonima) {
                            let id_pregunta = this.Pregunta.id_pregunta;
                            let respuesta = this.respuestas.find(f => f.id_pregunta == id_pregunta).json_respuesta;
                            this.spinner.show();
                            this.respuesta_s._UpdatePreguntaActualEncuestaAdministrado(this.id_encuesta, this.pageIndex, id_pregunta, respuesta, 1, JSON.stringify(this.pagination_array))
                                .then((datos) => {
                                //NAVEGAR A PANTALLA DE FINALIZACION
                                this.onGoBackEncuesta.emit(true);
                                this.go_GoodBye();
                                this.spinner.hide();
                                this.cd.markForCheck();
                                this.cd.detectChanges();
                            })
                                .catch(() => { });
                        }
                        else {
                            this.onGoBackEncuesta.emit(true);
                        }
                    },
                    nzOnCancel: () => { }
                });
            };
            this.respuesta_final = null;
            this.fecha_envio = new Date();
            this.goFinalizarEncuesta = () => {
                let _continue = true;
                if (this.Pregunta.es_obligatorio) {
                    if (this.is_validChangePregunta()) {
                        _continue = true;
                        this.calcel_speech();
                    }
                    else {
                        _continue = false;
                    }
                }
                else {
                    _continue = true;
                }
                if (_continue) {
                    let valid = true;
                    if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.archivo) {
                        if (!this.JSON_PREGUNTA.respuesta) {
                            valid = false;
                        }
                    }
                    if (!valid) {
                        this.createNotification('warning', 'Advertencia', '<ul><li>Debe responder a esta pregunta para poder continuar.</li></ul>');
                    }
                    else {
                        if (this.respuestas.find(f => f.id_pregunta == this.Pregunta.id_pregunta)) {
                            this.respuestas.forEach(e => {
                                if (e.id_pregunta == this.Pregunta.id_pregunta) {
                                    e.json_respuesta = JSON.stringify(this.JSON_PREGUNTA);
                                }
                            });
                        }
                        else {
                            this.respuestas.push({
                                id_pregunta: this.Pregunta.id_pregunta,
                                json_respuesta: JSON.stringify(this.JSON_PREGUNTA)
                            });
                        }
                        this.calcel_speech();
                        if (this.Pregunta.es_finaliza_encuesta && this.Pregunta.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.mensaje) {
                            localStorage.setItem("is_filling", "true");
                            if (!this.es_anonima) {
                                let id_pregunta = this.Pregunta.id_pregunta;
                                let respuesta = this.respuestas.find(f => f.id_pregunta == id_pregunta).json_respuesta;
                                this.spinner.show();
                                this.respuesta_s._UpdatePreguntaActualEncuestaAdministrado(this.id_encuesta, this.pageIndex, id_pregunta, respuesta, 2, JSON.stringify(this.pagination_array))
                                    .then((datos) => {
                                    this.respuesta_final = datos.data;
                                    this.fecha_envio = new Date(datos.data.Value.fecha_envio);
                                    //NAVEGAR A PANTALLA DE FINALIZACION
                                    this.go_GoodBye();
                                    this.spinner.hide();
                                    this.cd.markForCheck();
                                    this.cd.detectChanges();
                                })
                                    .catch(() => { });
                            }
                            else {
                                //SaveAndFinishEncuestaAnonima
                                let _respuestas = this.respuestas.map(m => { return { id_pregunta: Number(m.id_pregunta), json_rpta: m.json_respuesta }; });
                                this.respuestas.forEach;
                                let filter = {
                                    id_encuesta: this.id_encuesta,
                                    user_name: '',
                                    dni_trabajador: '',
                                    id_estado: 2,
                                    nro_pregunta: this.pageIndex,
                                    sexo: "",
                                    edad: 0,
                                    respuestas: _respuestas
                                };
                                this.spinner.show();
                                this.respuesta_s._SaveAndFinishEncuestaAnonima(filter)
                                    .then((datos) => {
                                    if (datos.data.Success) {
                                        this.respuesta_final = datos.data;
                                        this.fecha_envio = new Date(datos.data.Value);
                                        //NAVEGAR A PANTALLA DE FINALIZACION
                                        this.spinner.hide();
                                        this.go_GoodBye();
                                    }
                                    else {
                                        let str = '<ul>';
                                        datos.data.Messages.forEach(e => {
                                            str += '<li>' + e + '</li>';
                                        });
                                        str += '</ul>';
                                        this.createNotification('error', 'Advertencia', str);
                                    }
                                    this.cd.markForCheck();
                                    this.cd.detectChanges();
                                })
                                    .catch(() => { });
                            }
                        }
                        else {
                            this.modal.confirm({
                                nzTitle: 'Confirmación de finalización de encuesta',
                                nzContent: '¿Esta seguro de finalizar la encuesta?<br>Una vez finalizada no podrá modificar su respuesta.',
                                nzOkText: 'Si',
                                nzOkType: 'primary',
                                nzCancelText: 'No',
                                nzOnOk: () => {
                                    localStorage.setItem("is_filling", "true");
                                    if (!this.es_anonima) {
                                        let id_pregunta = this.Pregunta.id_pregunta;
                                        let respuesta = this.respuestas.find(f => f.id_pregunta == id_pregunta).json_respuesta;
                                        this.spinner.show();
                                        this.respuesta_s._UpdatePreguntaActualEncuestaAdministrado(this.id_encuesta, this.pageIndex, id_pregunta, respuesta, 2, JSON.stringify(this.pagination_array))
                                            .then((datos) => {
                                            this.respuesta_final = datos.data;
                                            this.fecha_envio = new Date(datos.data.Value.fecha_envio);
                                            //NAVEGAR A PANTALLA DE FINALIZACION
                                            this.go_GoodBye();
                                            this.spinner.hide();
                                            this.cd.markForCheck();
                                            this.cd.detectChanges();
                                        })
                                            .catch(() => { });
                                    }
                                    else {
                                        //SaveAndFinishEncuestaAnonima
                                        let _respuestas = this.respuestas.map(m => { return { id_pregunta: Number(m.id_pregunta), json_rpta: m.json_respuesta }; });
                                        this.respuestas.forEach;
                                        let filter = {
                                            id_encuesta: this.id_encuesta,
                                            user_name: '',
                                            dni_trabajador: '',
                                            id_estado: 2,
                                            nro_pregunta: this.pageIndex,
                                            sexo: "",
                                            edad: 0,
                                            respuestas: _respuestas
                                        };
                                        this.spinner.show();
                                        this.respuesta_s._SaveAndFinishEncuestaAnonima(filter)
                                            .then((datos) => {
                                            if (datos.data.Success) {
                                                this.respuesta_final = datos.data;
                                                this.fecha_envio = new Date(datos.data.Value);
                                                //NAVEGAR A PANTALLA DE FINALIZACION
                                                this.spinner.hide();
                                                this.go_GoodBye();
                                            }
                                            else {
                                                let str = '<ul>';
                                                datos.data.Messages.forEach(e => {
                                                    str += '<li>' + e + '</li>';
                                                });
                                                str += '</ul>';
                                                this.createNotification('error', 'Advertencia', str);
                                            }
                                            this.cd.markForCheck();
                                            this.cd.detectChanges();
                                        })
                                            .catch(() => { });
                                    }
                                },
                                nzOnCancel: () => {
                                    if (!this.es_anonima) {
                                        let id_pregunta = this.Pregunta.id_pregunta;
                                        let respuesta = this.respuestas.find(f => f.id_pregunta == id_pregunta).json_respuesta;
                                        this.respuesta_s._UpdatePreguntaActualEncuestaAdministrado(this.id_encuesta, this.pageIndex, id_pregunta, respuesta, 1, JSON.stringify(this.pagination_array))
                                            .then((datos) => {
                                            if (!datos.data.Success) {
                                                let str = '<ul>';
                                                datos.data.Messages.forEach(e => {
                                                    str += '<li>' + e + '</li>';
                                                });
                                                str += '</ul>';
                                                this.createNotification('error', 'Advertencia', str);
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
                    }
                }
                else {
                    setTimeout(() => {
                        this.cd.markForCheck();
                        this.cd.detectChanges();
                    }, 150);
                }
            };
            this.show_final_envio = false;
            this.goBackToInicio = () => {
                this.onGoToInicio.emit(true);
            };
            this.getPaginationNotHidden = () => {
                let _arr = this.pagination_array.filter(x => x.hidden == false);
                _arr.forEach((x, idx) => x.page = idx + 1);
                return _arr;
            };
            this._detectar_resueltos = (array) => {
                let copy_page = array; //_resolved;
                this._total_preguntas.forEach((f, index) => {
                    let rpta = this.respuestas.find(x => x.id_pregunta == f.id_pregunta);
                    let _pregunta = copy_page.find(x => x.id_pregunta == f.id_pregunta);
                    if (_pregunta) {
                        let _idx_pregunta = copy_page.indexOf(_pregunta);
                        if (rpta) {
                            let json_respuesta = JSON.parse(rpta.json_respuesta);
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                                if (json_respuesta.tbl_data == 1) {
                                    copy_page[_idx_pregunta].resolved = json_respuesta.respuesta.d1 == null ? false : true;
                                }
                                if (json_respuesta.tbl_data == 2) {
                                    copy_page[_idx_pregunta].resolved = json_respuesta.respuesta == null ? false : true;
                                }
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_multiple ||
                                json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                                let filter = json_respuesta.respuesta.length == 0 ? null : json_respuesta.respuesta.filter(ff => ff.selected == true);
                                copy_page[_idx_pregunta].resolved = filter.length == 0 ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_libre) {
                                let filter = json_respuesta.respuesta.length == 0 ? null : json_respuesta.respuesta[0];
                                copy_page[_idx_pregunta].resolved = filter ? true : false;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.numerico_entero || json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.numerico_decimal) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.respuesta == null ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.fecha) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.respuesta == null ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.texto) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.respuesta == null ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.archivo) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.respuesta == null ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.mensaje) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.mensaje == null ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.matriz) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.respuesta.length == 0 ? false : true;
                            }
                        }
                        else {
                            copy_page[_idx_pregunta].resolved = false;
                        }
                    }
                });
                return copy_page;
            };
            this.paginado_totalizado = [];
            //#endregion
            this.show_pantalla_agradecimiento = false;
            this.show_agradecimientos = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.spinner.show();
                this.show_final_envio = false;
                this.show_pantalla_agradecimiento = true;
                if (this.agradecimiento_data.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.video) {
                    let url = this.agradecimiento_data.url_video;
                    this._idYoutubeVideo_agradecimiento = url.substring(32, 43);
                    this._loaded_media_agradecimiento = true;
                }
                else {
                    yield this.onGetSavedFileByCode(this.agradecimiento_data.iden_imagen, true);
                }
                this.spinner.hide();
            });
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
            this.editor = DecoupledEditor;
            this.configEditor = _core_1.DecoupledInit.configEditor;
            this.esInvalidoContenido = false;
            this.tags = [];
            this.expresion = /\[\[[A-Z0-9\_]+\]\]/g;
            this.set_imagen_iden = (data) => {
                //this.error_imagen_segundo_plano=false;
                this.JSON_PREGUNTA.respuesta = data.codigo;
                //this.id_archivo =data.codigo;
            };
            this.handleRemovedFilePresentacion = (e) => {
                this.id_archivo = null;
            };
            this.handleRemovedFilePresentacionMatriz = (e, fila, columna) => {
                //this.id_archivo=null;}
                this.JSON_PREGUNTA.respuesta[fila].respuestas[columna] = null;
            };
            this.set_archivo_fila_matriz = (data, fila, columna) => {
                this.JSON_PREGUNTA.respuesta[fila].respuestas[columna] = data.codigo;
                //this.error_imagen_segundo_plano=false;
                //this.JSON_PREGUNTA.respuesta = data.codigo;
                //this.id_archivo =data.codigo;
            };
            this.speech = new speak_tts_1.default();
            if (this.speech.hasBrowserSupport()) {
                this.speech
                    .init({
                    'volume': this.volume_value_pregunta / 100,
                    'lang': 'es-ES',
                    'rate': 1,
                    'pitch': 1,
                    'voice': 'Google español',
                    'splitSentences': true,
                    'listeners': {
                        'onvoiceschanged': (voices) => {
                            console.log("Event voiceschanged", voices);
                        }
                    }
                })
                    .then((data) => {
                    this.speechData = data;
                })
                    .catch((e) => { console.error('An error occured while initializing : ', e); });
            }
        }
        ngOnInit() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.getPaginationNotHidden();
                yield this._getComboInstitucional(1);
                yield this._getComboInstitucional(2);
                if (this.disparadoresRespuestas.length == 0) {
                    yield this.buscarDisparadores();
                }
                this.crear_paginado();
                this.detectar_resueltos();
                setTimeout(() => {
                    this.loaded_pagination = true;
                    if (!this.es_anonima) {
                        this.spinner.show();
                        this.respuesta_s._GetRespuestasByEncuestaAndEncuestado(this.id_encuesta, _core_1.TIPO_ENCUESTA.extranet)
                            .then((datos) => {
                            this.respuestas = datos.data;
                            this.getPreguntasEncuesta(false);
                            //this.get_Preguntas(false);
                        })
                            .catch(() => { });
                    }
                    else {
                        this.getPreguntasEncuesta();
                        //this.get_Preguntas();
                    }
                    this.cd.markForCheck();
                    this.cd.detectChanges();
                }, 350);
            });
        }
        _show_hide_controlVolume() {
            this.show_volume_audio = !this.show_volume_audio;
            this.cd.markForCheck();
            this.cd.detectChanges();
        }
        setVolumeOfPregunta(valor) {
            setTimeout(() => {
                if (this.audio_speech_pregunta) {
                    if (this.speech.pending()) {
                        this.speech.pause();
                        this.speech.setVolume(valor / 100);
                        this.speech.resume();
                    }
                    else {
                        this.speech.setVolume(valor / 100);
                        this.start_speech();
                    }
                }
            }, 100);
        }
        start_speech() {
            this.audio_speech_pregunta = true;
            let temporalDivElement = document.createElement('div');
            temporalDivElement.innerHTML = this.html_pregunta;
            this.result =
                temporalDivElement.textContent || temporalDivElement.innerText || '';
            this.speech
                .speak({
                text: this.result,
            })
                .then(() => {
                this.audio_speech_pregunta = false;
                this.audio_paused_pregunta = true;
            })
                .catch((e) => {
                console.error('An error occurred :', e);
            });
        }
        pause() {
            this.speech.pause();
        }
        calcel_speech() {
            this.speech.cancel();
        }
        resume() {
            this.speech.resume();
        }
        setLanguage(i) {
            this.speech.setLanguage(this.speechData.voices[i].lang);
            this.speech.setVoice(this.speechData.voices[i].name);
        }
        _onStateChange_pregunta(event) {
            this._ytEvent_pregunta = event.data;
        }
        _savePlayer_pregunta(player) {
            this._player_pregunta = player;
            //setTimeout(() =>{ this._player_agradecimiento.playVideo();},350)
        }
        _onStateChange_agradecimiento(event) {
            this._ytEvent_agradecimiento = event.data;
        }
        _savePlayer_agradecimiento(player) {
            this._player_agradecimiento = player;
            setTimeout(() => { this._player_agradecimiento.playVideo(); }, 350);
        }
        json_to_String(st) {
            return JSON.stringify(st);
        }
        setRespuestaMatriz(fila_idx, col_idx, es_seleccion_unica = false) {
        }
        getComboInstitucional(id_tabla) {
            this.respuesta_s._GetDesplegableInstitucional(id_tabla)
                .then((datos) => {
                if (id_tabla == 2) {
                    this.array_cbo_intitucional = datos.data;
                }
                else {
                    let dt = datos.data;
                    let d1 = datos.data.filter(f => f.ID_TIPO_DEPENDENCIA == 2
                        && f.ES_DEPGENERAL == true && f.CODDEP_RESPONSABLE == null);
                    d1.forEach(e => {
                        let d2 = dt.filter(f => f.CODDEP_RESPONSABLE == e.id);
                        d2.forEach(x => {
                            let d3 = dt.filter(f => f.CODDEP_RESPONSABLE == x.id);
                            d3.forEach(y => {
                                let d4 = dt.filter(f => f.CODDEP_RESPONSABLE == y.id);
                                y.data = d4;
                            });
                            x.data = d3;
                        });
                        e.data = d2;
                    });
                    this.array_cbo_intitucional = datos.data;
                    this.d1 = d1.map(m => { return { id: m.id, nombre: m.nombre }; });
                    if (this.JSON_PREGUNTA.respuesta.d1) {
                        this.d2 = datos.data.filter(x => x.CODDEP_RESPONSABLE == this.JSON_PREGUNTA.respuesta.d1);
                        this.d2_disabled = this.d2.length > 0 ? false : true;
                        this.d3_disabled = this.d2.length > 0 ? false : true;
                    }
                    if (this.JSON_PREGUNTA.respuesta.d2) {
                        this.d3 = datos.data.filter(x => x.CODDEP_RESPONSABLE == this.JSON_PREGUNTA.respuesta.d2);
                        this.d3_disabled = this.d3.length > 0 ? false : true;
                    }
                }
                //CODDEP_RESPONSABLE
            })
                .catch(() => { });
        }
        setComboInstitucional(id_tabla) {
            if (id_tabla == 1) {
                if (this.JSON_PREGUNTA.respuesta.d1) {
                    this.d2 = this.array_d_gen.filter(x => x.CODDEP_RESPONSABLE == this.JSON_PREGUNTA.respuesta.d1);
                    this.d2_disabled = this.d2.length > 0 ? false : true;
                    this.d3_disabled = this.d2.length > 0 ? false : true;
                }
                if (this.JSON_PREGUNTA.respuesta.d2) {
                    this.d3 = this.array_d_gen.filter(x => x.CODDEP_RESPONSABLE == this.JSON_PREGUNTA.respuesta.d2);
                    this.d3_disabled = this.d3.length > 0 ? false : true;
                }
            }
        }
        _getComboInstitucional(id_tabla) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.respuesta_s._GetDesplegableInstitucional(id_tabla)
                    .then((datos) => {
                    if (id_tabla == 2) {
                        this.array_regimen_cbo = datos.data;
                    }
                    else {
                        let dt = datos.data;
                        let d1 = datos.data.filter(f => f.ID_TIPO_DEPENDENCIA == 2
                            && f.ES_DEPGENERAL == true && f.CODDEP_RESPONSABLE == null);
                        d1.forEach(e => {
                            let d2 = dt.filter(f => f.CODDEP_RESPONSABLE == e.id);
                            d2.forEach(x => {
                                let d3 = dt.filter(f => f.CODDEP_RESPONSABLE == x.id);
                                d3.forEach(y => {
                                    let d4 = dt.filter(f => f.CODDEP_RESPONSABLE == y.id);
                                    y.data = d4;
                                });
                                x.data = d3;
                            });
                            e.data = d2;
                        });
                        this.array_d_gen = datos.data;
                        this.d1 = d1.map(m => { return { id: m.id, nombre: m.nombre }; });
                    }
                    //CODDEP_RESPONSABLE
                })
                    .catch(() => { });
            });
        }
        setNroDecimales(nroDecimales) {
            return 1 / (100 * nroDecimales);
        }
        change_status_matriz(idFila, idCol, future_status) {
            let rpta = this.JSON_PREGUNTA.respuesta;
            this.JSON_PREGUNTA.respuesta = [];
            rpta[idFila].columnas[idCol].selected = future_status;
            this.loading_matriz = true;
            setTimeout(() => {
                this.JSON_PREGUNTA.respuesta = rpta;
                this.loading_matriz = false;
            }, 450);
        }
        go_GoodBye() {
            this.show_pregunta_llenado = false;
            this.show_final_envio = true;
        }
        //#endregion
        //#region DETECCION DE DISPARADORES Y PAGINADOR
        detectarDisparador() {
            if (this.Pregunta.es_condicional) {
                let disparadores_noVisibles = [];
                let disparadores_visibles = [];
                let array_pag = [];
                this.loaded_pagination = false;
                if (this.Pregunta.id_tipo_pregunta == this._TIPO_PREGUNTA.seleccion_unica) {
                    let _tiene_respuesta = this.JSON_PREGUNTA.respuesta.find(x => x.selected == true);
                    if (_tiene_respuesta) {
                        let _rpta = JSON.stringify(this.JSON_PREGUNTA.respuesta);
                        let _id_pregunta = this.Pregunta.id_pregunta;
                        disparadores_noVisibles = this.disparadoresRespuestas.filter(x => x.id_pregunta_condicional == this.Pregunta.id_pregunta && x.json_respuesta_condicional != _rpta);
                        disparadores_visibles = this.disparadoresRespuestas.filter(x => x.id_pregunta_condicional == this.Pregunta.id_pregunta && x.json_respuesta_condicional == _rpta);
                    }
                    else {
                        disparadores_noVisibles = [];
                        disparadores_visibles = this.disparadoresRespuestas.filter(x => x.id_pregunta_condicional == this.Pregunta.id_pregunta);
                    }
                }
                this.pagination_array.forEach(x => {
                    if (disparadores_noVisibles.find(f => f.id_pregunta == x.id_pregunta) || disparadores_visibles.find(f => f.id_pregunta == x.id_pregunta)) {
                        if (disparadores_noVisibles.find(f => f.id_pregunta == x.id_pregunta)) {
                            let find = this.paginado_totalizado.find(f => f.id_pregunta == x.id_pregunta);
                            find.hidden = true;
                            array_pag.push(find);
                        }
                        if (disparadores_visibles.find(f => f.id_pregunta == x.id_pregunta)) {
                            let find = this.paginado_totalizado.find(f => f.id_pregunta == x.id_pregunta);
                            find.hidden = false;
                            array_pag.push(find);
                        }
                    }
                    else {
                        let find = this.paginado_totalizado.find(f => f.id_pregunta == x.id_pregunta);
                        array_pag.push(find);
                    }
                });
                array_pag.forEach((x, idx) => { x.page = idx + 1; });
                this.total = array_pag.filter(x => x.hidden == false).length;
                this.pagination_array = this._detectar_resueltos(array_pag);
                this.loaded_pagination = true;
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
        crear_paginado() {
            let array_pag = [];
            let _existentes = this.paginado_registrado;
            if (_existentes.length > 0) {
                this.pagination_array = _existentes;
                this.paginado_totalizado = _existentes;
            }
            else {
                for (let i = 0; i < this._total_preguntas.length; i++) {
                    let _find = _existentes.find(x => x.id_pregunta == this._total_preguntas[i].id_pregunta);
                    let e = {
                        page: i + 1,
                        selected: this.pageIndex == i + 1 ? true : false,
                        id_pregunta: this._total_preguntas[i].id_pregunta,
                        resolved: false,
                        hidden: false
                    };
                    if (_find) {
                        e.resolved = _find.resolved;
                    }
                    array_pag.push(e);
                    this.pagination_array_resolved.push(e);
                }
                this.pagination_array = array_pag;
                this.paginado_totalizado = array_pag;
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
            //this.texto_mensaje = this.tags.join();
        }
        conteoDigitosDecimal(item, json_pregunta) {
            var numero_actual = json_pregunta.respuesta == null ? "" : json_pregunta.respuesta;
            var nro_entero = json_pregunta.nro_entero;
            var nro_decimal = json_pregunta.nro_decimal;
            var digito_adicional = item.key;
            var d = digito_adicional == "." ? numero_actual : numero_actual + digito_adicional;
            var numberValue = Number(d);
            var parteDecimal = numberValue % 1;
            var parteEntera = numberValue - parteDecimal;
            var dec = d.replace(parteEntera.toString() + ".", "");
            var valida_existe_decimal = d.includes('.');
            var valid = false;
            if (item.charCode >= 48 && item.charCode < 58 || item.charCode == 46) {
                if (valida_existe_decimal) {
                    if (dec.length <= nro_decimal) {
                        valid = true;
                    }
                    else {
                        valid = false;
                    }
                }
                else {
                    if (parteEntera.toString().length <= nro_entero) {
                        valid = true;
                    }
                    else {
                        valid = false;
                    }
                }
            }
            else {
                valid = false;
            }
            return valid;
        }
        conteoDigitosEntero(item, json_pregunta) {
            var numero_actual = json_pregunta.respuesta == null ? "" : json_pregunta.respuesta;
            var nro_entero = json_pregunta.nro_entero;
            var digito_adicional = item.key;
            var d = numero_actual + digito_adicional;
            var numberValue = Number(d);
            var parteEntera = numberValue;
            var valid = false;
            if (item.charCode >= 48 && item.charCode < 58) {
                if (parteEntera.toString().length <= nro_entero) {
                    valid = true;
                }
                else {
                    valid = false;
                }
            }
            else {
                valid = false;
            }
            return valid;
        }
        conteoDigitosEnteroMatriz(item, fila, columna) {
            var respuesta = this.JSON_PREGUNTA.respuesta[fila].respuestas[columna] == null ? "" : this.JSON_PREGUNTA.respuesta[fila].respuestas[columna] + item.key;
            var numero_actual = respuesta == null ? "" : respuesta;
            var nro_entero = this.JSON_PREGUNTA.respuesta[fila].columnas[columna].forma.nro_entero;
            var numberValue = Number(numero_actual);
            var parteEntera = numberValue;
            var valid = false;
            if (item.charCode >= 48 && item.charCode < 58) {
                if (parteEntera.toString().length <= nro_entero) {
                    valid = true;
                }
                else {
                    valid = false;
                }
            }
            else {
                valid = false;
            }
            return valid;
        }
        conteoDigitosDecimalMatriz(item, fila, columna) {
            var respuesta = this.JSON_PREGUNTA.respuesta[fila].respuestas[columna] == null ? "" : this.JSON_PREGUNTA.respuesta[fila].respuestas[columna] + item.key;
            var numero_actual = respuesta == null ? "" : respuesta;
            var nro_entero = this.JSON_PREGUNTA.respuesta[fila].columnas[columna].forma.nro_entero;
            var nro_decimal = this.JSON_PREGUNTA.respuesta[fila].columnas[columna].forma.nro_decimal;
            var digito_adicional = item.key;
            var d = digito_adicional == "." ? numero_actual : numero_actual;
            var numberValue = Number(d);
            var parteDecimal = numberValue % 1;
            var parteEntera = numberValue - parteDecimal;
            var dec = d.replace(parteEntera.toString() + ".", "");
            var valida_existe_decimal = d.includes('.');
            var valid = false;
            if (item.charCode >= 48 && item.charCode < 58 || item.charCode == 46) {
                if (valida_existe_decimal) {
                    if (dec.length <= nro_decimal) {
                        valid = true;
                    }
                    else {
                        valid = false;
                    }
                }
                else {
                    if (parteEntera.toString().length <= nro_entero) {
                        valid = true;
                    }
                    else {
                        valid = false;
                    }
                }
            }
            else {
                valid = false;
            }
            return valid;
        }
    };
    LlenadoPreguntaExtComponent.ctorParameters = () => [
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: _core_1.EncuestasService },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: respuesta_service_1.RespuestaService },
        { type: _core_1.FileService },
        { type: ng_zorro_antd_1.NzModalService },
        { type: _core_1.AuthService },
        { type: _core_1.AlertService },
        { type: platform_browser_1.DomSanitizer },
        { type: core_1.ChangeDetectorRef }
    ];
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaExtComponent.prototype, "id_encuesta", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaExtComponent.prototype, "es_anonima", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaExtComponent.prototype, "total", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaExtComponent.prototype, "_total_preguntas", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaExtComponent.prototype, "paginado_registrado", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaExtComponent.prototype, "pageIndex", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaExtComponent.prototype, "presetIndex", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaExtComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaExtComponent.prototype, "agradecimiento_data", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaExtComponent.prototype, "disparadoresRespuestas", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], LlenadoPreguntaExtComponent.prototype, "onGoBackEncuesta", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], LlenadoPreguntaExtComponent.prototype, "onGoToInicio", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], LlenadoPreguntaExtComponent.prototype, "onEmitDataToHeader", void 0);
    LlenadoPreguntaExtComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-llenado-pregunta-ext',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./llenado-pregunta-ext.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado-ext/pages/gestion-ext/pages/llenado-pregunta-ext/llenado-pregunta-ext.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./llenado-pregunta-ext.component.css */ "./src/app/modules/encuestado-ext/pages/gestion-ext/pages/llenado-pregunta-ext/llenado-pregunta-ext.component.css")).default]
        })
    ], LlenadoPreguntaExtComponent);
    exports.LlenadoPreguntaExtComponent = LlenadoPreguntaExtComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/encuestado-ext/pages/gestion-ext/pages/llenado-pregunta-seccion-ext/llenado-pregunta-seccion-ext.component.css":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/encuestado-ext/pages/gestion-ext/pages/llenado-pregunta-seccion-ext/llenado-pregunta-seccion-ext.component.css ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn_hoverable:hover{\r\n    cursor: pointer;\r\n}\r\n  \r\n.label-css {\r\n    font-size: 16px !important;\r\n    background: #EAEFF5;\r\n    border-radius: 0px;\r\n    text-align: left;\r\n    height: 40px;\r\n}\r\n  \r\n.text-pregunta {\r\n    color: #000000;\r\n    font-style: normal;\r\nfont-weight: 500;\r\nfont-size: 16px;\r\n}\r\n  \r\n.text-titulo {\r\n    color: #000000;\r\n    font-style: normal;\r\nfont-weight: 400;\r\nfont-size: 16px;\r\n}\r\n  \r\n.text-descripcion{\r\n    color: #848B96;\r\n    font-style: normal;\r\nfont-weight: 400;\r\nfont-size: 12px;\r\n}\r\n  \r\n.text-obligatorio {\r\n    color: #DC3545;\r\n    font-style: normal;\r\nfont-weight: 400;\r\nfont-size: 12px;\r\n}\r\n  \r\n.btn-siguiente {\r\n    color: #2473B6;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n    background: rgba(182, 218, 249, 0.5);\r\n    border-radius: 20px;           \r\n    padding: 10px;\r\n    width: 119px;\r\n  }\r\n  \r\n.btn-siguiente:active { background-color: rgba(182, 218, 249, 0.5);; color: #2473B6; border: none; outline:none !important;}\r\n  \r\n.btn-siguiente:focus { background-color: rgba(182, 218, 249, 0.5);; color: #2473B6; border: none; outline:none !important;}\r\n  \r\n.btn-siguiente:hover { background-color: rgba(182, 218, 249, 0.5);; color: #2473B6; border: none; outline:none !important;}\r\n  \r\n.btn-atras {\r\n    color: #848B96;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n    background: #EAEFF5;\r\n    border-radius: 20px;           \r\n    padding: 10px;\r\n    width: 119px;\r\n  }\r\n  \r\n.btn-atras:active { background-color: #EAEFF5; color: #848B96; border: none; outline:none !important;}\r\n  \r\n.btn-atras:focus { background-color: #EAEFF5; color: #848B96; border: none; outline:none !important;}\r\n  \r\n.btn-atras:hover { background-color: #EAEFF5; color: #848B96; border: none; outline:none !important;}\r\n  \r\n.btn-finalizar {\r\n    color: #128C3C;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n    background: #D5F6D6;\r\n    border-radius: 20px;        \r\n    padding: 10px;\r\n    width: 119px;\r\n  }\r\n  \r\n.btn-finalizar:active { background-color: #D5F6D6; color: #128C3C; border: none; outline:none !important;}\r\n  \r\n.btn-finalizar:focus { background-color: #D5F6D6; color: #128C3C; border: none; outline:none !important;}\r\n  \r\n.btn-finalizar:hover { background-color: #D5F6D6; color: #128C3C; border: none; outline:none !important;}\r\n  \r\n.label-radio {\r\n    color: #000000;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n  }\r\n  \r\ninput[type='radio'] {\r\n    accent-color: #128C3C;\r\n}\r\n  \r\ninput[type='radio']:hover {\r\n    accent-color: #128C3C;\r\n}\r\n  \r\ninput[type='checkbox'] {\r\n    accent-color: #128C3C;\r\n}\r\n  \r\ninput[type='checkbox']:hover {\r\n    accent-color: #128C3C;\r\n}\r\n  \r\n.td-fila {\r\n    color: #000000 !important;\r\n    font-style: normal !important;\r\nfont-weight: 400 !important;\r\nfont-size: 13px !important;\r\n}\r\n  \r\n.th-columna {\r\n    color: #FFFFFF !important;\r\n    font-style: normal !important;\r\n    font-weight: 400 !important;\r\n    font-size: 13px !important;\r\n    background: #2473B6 !important;\r\n    border: 1px solid #FFFFFF !important;\r\n}\r\n  \r\n.text-gracias {\r\n    color: #2473B6;\r\n    font-style: normal;\r\nfont-weight: 500;\r\nfont-size: 24px;\r\n}\r\n  \r\n.text-mensaje {\r\n    color: #000000;\r\n    font-style: normal;\r\nfont-weight: 400;\r\nfont-size: 16px;\r\n}\r\n  \r\n.btn-continuar:active { background-color: #128C3C; color: White; border: none; outline:none !important;;\r\n}\r\n  \r\n.btn-continuar:focus { background-color: #128C3C; color: White; border: none; outline:none !important;}\r\n  \r\n.btn-continuar:hover { background-color: #128C3C; color: White; border: none; outline:none !important;;\r\n}\r\n  \r\n.text-caracteres {\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 10px;\r\n    color: #848B96;\r\n}\r\n  \r\n.text-mensaje {\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    color: #000000;\r\n}\r\n  \r\n.text-archivo {\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 11px;\r\n    color: #848B96;\r\n}\r\n  \r\n.ant-input {\r\n    margin-top: 5px;\r\n    background: #EAEFF5;\r\n    border: 1px solid #EAEFF5;\r\n}\r\n  \r\n.btn-file-input {\r\n    background: #FFFFFF;\r\n    box-shadow: 0px 0px 12px rgb(0 0 0 / 12%);\r\n    border-radius: 8px;\r\n}\r\n  \r\n.btn-file-input i {\r\n    color: #000000 !important;\r\n}\r\n  \r\n.input-group {\r\n    background: #EAEFF5;\r\n    height: 45px;\r\n}\r\n  \r\n.text-seccion-activo {\r\n    color: #2473B6;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n}\r\n  \r\n.text-seccion-inactivo {\r\n    color: #C5CEDB;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lbmN1ZXN0YWRvLWV4dC9wYWdlcy9nZXN0aW9uLWV4dC9wYWdlcy9sbGVuYWRvLXByZWd1bnRhLXNlY2Npb24tZXh0L2xsZW5hZG8tcHJlZ3VudGEtc2VjY2lvbi1leHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEIsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEIsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEIsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEIsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZjs7QUFFRTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0FBRUEsd0JBQXdCLDBDQUEwQyxHQUFHLGNBQWMsRUFBRSxZQUFZLEVBQUUsdUJBQXVCLENBQUM7O0FBRTNILHVCQUF1QiwwQ0FBMEMsR0FBRyxjQUFjLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixDQUFDOztBQUUxSCx1QkFBdUIsMENBQTBDLEdBQUcsY0FBYyxFQUFFLFlBQVksRUFBRSx1QkFBdUIsQ0FBQzs7QUFFMUg7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtFQUNkOztBQUNBLG9CQUFvQix5QkFBeUIsRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixDQUFDOztBQUVyRyxtQkFBbUIseUJBQXlCLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSx1QkFBdUIsQ0FBQzs7QUFFcEcsbUJBQW1CLHlCQUF5QixFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsdUJBQXVCLENBQUM7O0FBRXBHO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7RUFDZDs7QUFDQSx3QkFBd0IseUJBQXlCLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSx1QkFBdUIsQ0FBQzs7QUFFekcsdUJBQXVCLHlCQUF5QixFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsdUJBQXVCLENBQUM7O0FBRXhHLHVCQUF1Qix5QkFBeUIsRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixDQUFDOztBQUV4RztJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0FBR0Y7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNkJBQTZCO0FBQ2pDLDJCQUEyQjtBQUMzQiwwQkFBMEI7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEIsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEIsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZjs7QUFFQSx3QkFBd0IseUJBQXlCLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSx1QkFBdUI7QUFDdEc7O0FBRUEsdUJBQXVCLHlCQUF5QixFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsdUJBQXVCLENBQUM7O0FBRXRHLHVCQUF1Qix5QkFBeUIsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLHVCQUF1QjtBQUNyRzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsa0JBQWtCO0FBQ3RCOztBQUdBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZW5jdWVzdGFkby1leHQvcGFnZXMvZ2VzdGlvbi1leHQvcGFnZXMvbGxlbmFkby1wcmVndW50YS1zZWNjaW9uLWV4dC9sbGVuYWRvLXByZWd1bnRhLXNlY2Npb24tZXh0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuX2hvdmVyYWJsZTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4gIFxyXG4ubGFiZWwtY3NzIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI0VBRUZGNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi50ZXh0LXByZWd1bnRhIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogNTAwO1xyXG5mb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi50ZXh0LXRpdHVsbyB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC13ZWlnaHQ6IDQwMDtcclxuZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4udGV4dC1kZXNjcmlwY2lvbntcclxuICAgIGNvbG9yOiAjODQ4Qjk2O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogNDAwO1xyXG5mb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi50ZXh0LW9ibGlnYXRvcmlvIHtcclxuICAgIGNvbG9yOiAjREMzNTQ1O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogNDAwO1xyXG5mb250LXNpemU6IDEycHg7XHJcbn1cclxuICBcclxuICAuYnRuLXNpZ3VpZW50ZSB7XHJcbiAgICBjb2xvcjogIzI0NzNCNjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4MiwgMjE4LCAyNDksIDAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyAgICAgICAgICAgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDExOXB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1zaWd1aWVudGU6YWN0aXZlIHsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODIsIDIxOCwgMjQ5LCAwLjUpOzsgY29sb3I6ICMyNDczQjY7IGJvcmRlcjogbm9uZTsgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7fVxyXG5cclxuICAuYnRuLXNpZ3VpZW50ZTpmb2N1cyB7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgyLCAyMTgsIDI0OSwgMC41KTs7IGNvbG9yOiAjMjQ3M0I2OyBib3JkZXI6IG5vbmU7IG91dGxpbmU6bm9uZSAhaW1wb3J0YW50O31cclxuXHJcbiAgLmJ0bi1zaWd1aWVudGU6aG92ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MiwgMjE4LCAyNDksIDAuNSk7OyBjb2xvcjogIzI0NzNCNjsgYm9yZGVyOiBub25lOyBvdXRsaW5lOm5vbmUgIWltcG9ydGFudDt9XHJcblxyXG4gIC5idG4tYXRyYXMge1xyXG4gICAgY29sb3I6ICM4NDhCOTY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0VBRUZGNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7ICAgICAgICAgICBcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMTE5cHg7XHJcbiAgfVxyXG4gIC5idG4tYXRyYXM6YWN0aXZlIHsgYmFja2dyb3VuZC1jb2xvcjogI0VBRUZGNTsgY29sb3I6ICM4NDhCOTY7IGJvcmRlcjogbm9uZTsgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7fVxyXG5cclxuICAuYnRuLWF0cmFzOmZvY3VzIHsgYmFja2dyb3VuZC1jb2xvcjogI0VBRUZGNTsgY29sb3I6ICM4NDhCOTY7IGJvcmRlcjogbm9uZTsgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7fVxyXG5cclxuICAuYnRuLWF0cmFzOmhvdmVyIHsgYmFja2dyb3VuZC1jb2xvcjogI0VBRUZGNTsgY29sb3I6ICM4NDhCOTY7IGJvcmRlcjogbm9uZTsgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7fVxyXG5cclxuICAuYnRuLWZpbmFsaXphciB7XHJcbiAgICBjb2xvcjogIzEyOEMzQztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRDVGNkQ2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDsgICAgICAgIFxyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAxMTlweDtcclxuICB9XHJcbiAgLmJ0bi1maW5hbGl6YXI6YWN0aXZlIHsgYmFja2dyb3VuZC1jb2xvcjogI0Q1RjZENjsgY29sb3I6ICMxMjhDM0M7IGJvcmRlcjogbm9uZTsgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7fVxyXG5cclxuICAuYnRuLWZpbmFsaXphcjpmb2N1cyB7IGJhY2tncm91bmQtY29sb3I6ICNENUY2RDY7IGNvbG9yOiAjMTI4QzNDOyBib3JkZXI6IG5vbmU7IG91dGxpbmU6bm9uZSAhaW1wb3J0YW50O31cclxuXHJcbiAgLmJ0bi1maW5hbGl6YXI6aG92ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjRDVGNkQ2OyBjb2xvcjogIzEyOEMzQzsgYm9yZGVyOiBub25lOyBvdXRsaW5lOm5vbmUgIWltcG9ydGFudDt9XHJcblxyXG4gIC5sYWJlbC1yYWRpbyB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuXHJcbmlucHV0W3R5cGU9J3JhZGlvJ10ge1xyXG4gICAgYWNjZW50LWNvbG9yOiAjMTI4QzNDO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPSdyYWRpbyddOmhvdmVyIHtcclxuICAgIGFjY2VudC1jb2xvcjogIzEyOEMzQztcclxufVxyXG5cclxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XHJcbiAgICBhY2NlbnQtY29sb3I6ICMxMjhDM0M7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9J2NoZWNrYm94J106aG92ZXIge1xyXG4gICAgYWNjZW50LWNvbG9yOiAjMTI4QzNDO1xyXG59XHJcblxyXG4udGQtZmlsYSB7XHJcbiAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbmZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aC1jb2x1bW5hIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogIzI0NzNCNiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1ncmFjaWFzIHtcclxuICAgIGNvbG9yOiAjMjQ3M0I2O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogNTAwO1xyXG5mb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi50ZXh0LW1lbnNhamUge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtd2VpZ2h0OiA0MDA7XHJcbmZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmJ0bi1jb250aW51YXI6YWN0aXZlIHsgYmFja2dyb3VuZC1jb2xvcjogIzEyOEMzQzsgY29sb3I6IFdoaXRlOyBib3JkZXI6IG5vbmU7IG91dGxpbmU6bm9uZSAhaW1wb3J0YW50OztcclxufVxyXG5cclxuLmJ0bi1jb250aW51YXI6Zm9jdXMgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI4QzNDOyBjb2xvcjogV2hpdGU7IGJvcmRlcjogbm9uZTsgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7fVxyXG5cclxuLmJ0bi1jb250aW51YXI6aG92ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI4QzNDOyBjb2xvcjogV2hpdGU7IGJvcmRlcjogbm9uZTsgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7O1xyXG59XHJcblxyXG4udGV4dC1jYXJhY3RlcmVzIHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogIzg0OEI5NjtcclxufVxyXG5cclxuLnRleHQtbWVuc2FqZSB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi50ZXh0LWFyY2hpdm8ge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiAjODQ4Qjk2O1xyXG59XHJcblxyXG4uYW50LWlucHV0IHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNFQUVGRjU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRUFFRkY1O1xyXG59XHJcblxyXG4uYnRuLWZpbGUtaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCByZ2IoMCAwIDAgLyAxMiUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5cclxuLmJ0bi1maWxlLWlucHV0IGkge1xyXG4gICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIHtcclxuICAgIGJhY2tncm91bmQ6ICNFQUVGRjU7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbi50ZXh0LXNlY2Npb24tYWN0aXZvIHtcclxuICAgIGNvbG9yOiAjMjQ3M0I2O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnRleHQtc2VjY2lvbi1pbmFjdGl2byB7XHJcbiAgICBjb2xvcjogI0M1Q0VEQjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/encuestado-ext/pages/gestion-ext/pages/llenado-pregunta-seccion-ext/llenado-pregunta-seccion-ext.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/encuestado-ext/pages/gestion-ext/pages/llenado-pregunta-seccion-ext/llenado-pregunta-seccion-ext.component.ts ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! @app/_core/services/respuesta.service */ "./src/app/_core/services/respuesta.service.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js"), __webpack_require__(/*! speak-tts */ "./node_modules/speak-tts/lib/speak-tts.js"), __webpack_require__(/*! external/ckeditor5-build-decoupled-document */ "./external/ckeditor5-build-decoupled-document/build/ckeditor.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, forms_1, platform_browser_1, _core_1, respuesta_service_1, ng_zorro_antd_1, ngx_spinner_1, speak_tts_1, DecoupledEditor) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    DecoupledEditor.defaultConfig = _core_1.DecoupledInit.defaultConfig;
    let LlenadoPreguntaSeccionExtComponent = class LlenadoPreguntaSeccionExtComponent {
        constructor(spinner, encuesta_s, notification, respuesta_s, _fileService, modal, _authService, _alertService, sanitizer, cd) {
            this.spinner = spinner;
            this.encuesta_s = encuesta_s;
            this.notification = notification;
            this.respuesta_s = respuesta_s;
            this._fileService = _fileService;
            this.modal = modal;
            this._authService = _authService;
            this._alertService = _alertService;
            this.sanitizer = sanitizer;
            this.cd = cd;
            this.id_encuesta = 0;
            this.es_anonima = false;
            this.total = 7;
            this.paginado_registrado = [];
            this.pageIndex = 1;
            this.disparadoresRespuestas = [];
            this.onGoBackEncuesta = new core_1.EventEmitter();
            this.onGoToInicio = new core_1.EventEmitter();
            this.onEmitDataToHeader = new core_1.EventEmitter();
            this.show_pregunta_llenado = true;
            this.total_page = 5;
            this.respuestas = [];
            this.JSON_PREGUNTA = null;
            this.cargando_tabla = true;
            this.pageSize = 1;
            this._TIPO_ARCHIVO = _core_1.TIPO_ARCHIVO_ENUMERADO;
            this._array_preguntas_visibles = [];
            this.numeroSeccion = 0;
            this.esPreguntaUltima = false;
            this.estaGuardando = false;
            this.pesoMaximoEnMB = _core_1.FILE_SETTINGS.maxFileSize;
            this.imagen_extensionAceptados = [".png", ".jpeg", ".gif", ".pdf", ".doc", ".docx", ".xls", ".xlsx"];
            this.url = "/api/comun/descargar-archivo";
            this.imagen_MimePermitidos = ["image/png", "image/jpeg", "image/gif", "application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"];
            this.esAgregarPreguntaMultiple = false;
            this.formato_fecha = "";
            this.cantidad_caracteres = "1000";
            this._imagen_extensionAceptados = [];
            this._imagen_MimePermitidos = [];
            this.tieneArchivo = false;
            this.is_archivo = false;
            this.loaded_pagination = false;
            this.pagination_array = [];
            this.pagination_array_resolved = [];
            this.GetRespuestasByEncuestaAndEncuestado = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (!this.es_anonima) {
                    this.spinner.show();
                    yield this.respuesta_s._GetRespuestasByEncuestaAndEncuestado(this.id_encuesta, _core_1.TIPO_ENCUESTA.extranet)
                        .then((datos) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        this.respuestas = datos.data;
                        yield this.getPreguntasEncuesta(false);
                        this.loaded_pagination = true;
                    }))
                        .catch(() => { });
                }
                else {
                    this.getPreguntasEncuesta();
                }
            });
            this.buscarDisparadores = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.encuesta_s._GetPreguntasCondicionalesByEncuesta({ id_encuesta: this.id_encuesta }).then((datos) => {
                    if (datos && datos.data) {
                        this.disparadoresRespuestas = datos.data;
                    }
                    else {
                        this.disparadoresRespuestas = [];
                    }
                }).catch(() => { this.disparadoresRespuestas = []; });
            });
            this.detectar_resueltos = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                let copy_page = this.pagination_array; //_resolved;
                this.pagination_array.forEach((f, index) => {
                    let rpta = this.respuestas.find(x => x.id_pregunta == f.id_pregunta);
                    let _pregunta = copy_page.find(x => x.id_pregunta == f.id_pregunta);
                    if (_pregunta) {
                        let _idx_pregunta = copy_page.indexOf(_pregunta);
                        if (rpta) {
                            let json_respuesta = JSON.parse(rpta.json_respuesta);
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                                if (json_respuesta.tbl_data == 1) {
                                    copy_page[_idx_pregunta].resolved = json_respuesta.respuesta.d1 == null ? false : true;
                                }
                                if (json_respuesta.tbl_data == 2) {
                                    copy_page[_idx_pregunta].resolved = json_respuesta.respuesta == null ? false : true;
                                }
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_multiple ||
                                json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                                let filter = json_respuesta.respuesta.length == 0 ? null : json_respuesta.respuesta.filter(ff => ff.selected == true);
                                copy_page[_idx_pregunta].resolved = filter.length == 0 ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_libre) {
                                let filter = json_respuesta.respuesta.length == 0 ? null : json_respuesta.respuesta[0];
                                copy_page[_idx_pregunta].resolved = filter ? true : false;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.numerico_entero || json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.numerico_decimal) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.respuesta == null ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.fecha) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.respuesta == null ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.texto) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.respuesta == null ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.archivo) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.respuesta == null ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.mensaje) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.respuesta == null ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.matriz) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.respuesta.length == 0 ? false : true;
                            }
                        }
                        else {
                            copy_page[_idx_pregunta].resolved = false;
                        }
                    }
                });
                copy_page.forEach((x, idx) => { x.page = idx + 1; });
                this.pagination_array = copy_page;
            });
            this.getResolved = (id_pregunta) => {
                let find = this.pagination_array_resolved.find(x => x.id_pregunta == id_pregunta);
                return find ? find.resolved : false;
            };
            //#region AUDIO PREGUNTA 
            this.volume_value_pregunta = 50;
            this.show_volume_audio = false;
            this.audio_paused_pregunta = true;
            this.audio_speech_pregunta = false;
            this.first_run = true;
            this.result = '';
            this.check_if_pending_audio = () => {
                if (!this.speech.pending()) { //ya no qujeda nada por hablar
                    this.audio_speech_pregunta = false;
                    this.audio_paused_pregunta = true;
                }
            };
            //#endregion
            //#region MANEJO VIDEO
            this._idYoutubeVideo_pregunta = null;
            this._idYoutubeVideo_agradecimiento = null;
            //#endregion
            this._TIPO_PREGUNTA = _core_1.TIPO_PREGUNTA;
            this.RESPUESTA_MATRIZ = [];
            this.frmMtz = [];
            this.get_Preguntas = (show_spinner = true) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.cargando_tabla = true;
                let _id_pregunta = 0;
                if (this.Pregunta) {
                    let _filtered = this.pagination_array.filter(x => x.page == this.pageIndex);
                    if (_filtered.find(x => x.hidden == true)) {
                        this.pageIndex = this.pageIndex + 1;
                        //aqui se cae
                        _id_pregunta = this.pagination_array.find(x => x.page == this.pageIndex && x.hidden == false).id_pregunta;
                    }
                    else {
                        _id_pregunta = _filtered.find(x => x.hidden == false) ? _filtered.find(x => x.hidden == false).id_pregunta : 0;
                    }
                }
                else {
                    if (this.pagination_array.find(x => x.page == this.pageIndex && x.hidden == true)) {
                        this.pageIndex = this.pageIndex + 1;
                    }
                    _id_pregunta = this.pagination_array.find(x => x.page == this.pageIndex && x.hidden == false).id_pregunta;
                }
                let filtro = { id_pregunta: _id_pregunta }; //this.pageIndex;
                if (show_spinner) {
                    this.spinner.show();
                }
                localStorage.setItem("is_filling", "true");
                yield this.detectar_resueltos();
                this.total = this.pagination_array.length; //this.pagination_array.filter(x=>x.hidden==false).length;
                yield this.encuesta_s._GetPreguntaByIdenPregunta(filtro)
                    .then((datos) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    if (datos && datos.data && datos.data.Data) {
                        let data = datos.data.Data;
                        let pregunta = data[0];
                        this.tieneArchivo = pregunta.id_tipo_archivo == null ? false : true;
                        this.Pregunta = data[0];
                        this.seccion_actual = this.arraySecciones.find(x => x.id_encuesta_seccion == pregunta.id_encuesta_seccion);
                        let seccionActual = this.arraySecciones.find(x => x.id_encuesta_seccion == pregunta.id_encuesta_seccion);
                        let ultimaPreguntaSeccionActual = 0;
                        let esPrimero = true;
                        let ordenPregunta = 0;
                        for (let i = 0; i < seccionActual.preguntas.length; i++) {
                            if (esPrimero) {
                                ordenPregunta = seccionActual.preguntas[i].orden;
                                ultimaPreguntaSeccionActual = seccionActual.preguntas[i].id_pregunta;
                                esPrimero = false;
                            }
                            else {
                                if (seccionActual.preguntas[i].orden > ordenPregunta) {
                                    ordenPregunta = seccionActual.preguntas[i].orden;
                                    ultimaPreguntaSeccionActual = seccionActual.preguntas[i].id_pregunta;
                                }
                            }
                        }
                        this.html_pregunta = '<p>' + pregunta.pregunta + '</p>';
                        if (this.arrayPreguntas.length > 0) {
                            for (let i = 0; i < this.pagination_array.length; i++) {
                                let item = this.arrayPreguntas.find(item => item.id_pregunta === this.pagination_array[i].id_pregunta);
                                let itemActual = this.arrayPreguntas.find(item => item.id_pregunta === pregunta.id_pregunta);
                                if (item.id_pregunta == itemActual.id_pregunta) {
                                    item.actual = true;
                                    item.resuelto = false;
                                }
                                else {
                                    item.actual = false;
                                    item.resuelto = this.pagination_array[i].resolved;
                                }
                            }
                        }
                        if (this.arraySecciones.length > 0) {
                            let item = this.arraySecciones.find(item => item.orden === seccionActual.orden);
                            this.arraySeccionActivo = item;
                            for (let i = 0; i < this.arraySecciones.length; i++) {
                                if (this.arraySecciones[i].orden == seccionActual.orden) {
                                    this.arraySecciones[i].actual = true;
                                }
                                else {
                                    this.arraySecciones[i].actual = false;
                                }
                            }
                        }
                        if (ultimaPreguntaSeccionActual == pregunta.id_pregunta) {
                            this.esPreguntaUltima = true;
                            this.numeroSeccion = seccionActual.orden + 1;
                        }
                        else {
                            this.esPreguntaUltima = false;
                        }
                        for (let i = 0; i < this.pagination_array.length; i++) {
                            let item = this.arraySeccionActivo.preguntas.find(item => item.id_pregunta === this.pagination_array[i].id_pregunta);
                            let itemActual = this.arraySeccionActivo.preguntas.find(item => item.id_pregunta === pregunta.id_pregunta);
                            if (item && itemActual) {
                                if (item.id_pregunta == itemActual.id_pregunta) {
                                    item.actual = true;
                                    item.resuelto = false;
                                }
                                else {
                                    item.actual = false;
                                    item.resuelto = this.pagination_array[i].resolved;
                                }
                            }
                        }
                        if (this.respuestas.find(f => f.id_pregunta == pregunta.id_pregunta)) {
                            let rpta = this.respuestas.find(f => f.id_pregunta == pregunta.id_pregunta);
                            let json_ = JSON.parse(rpta.json_respuesta);
                            if (json_.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                                //this.setComboInstitucional(Number(this.JSON_PREGUNTA.tbl_data));
                            }
                            if (json_.id_tipo == _core_1.TIPO_PREGUNTA.matriz) {
                                let controls = [];
                                if (json_.es_columna_matriz) {
                                    json_.respuesta.forEach((f, fidx) => {
                                        controls.push([]);
                                        f.columnas.forEach((c, cidx) => {
                                            controls[fidx].push(new forms_1.FormControl(f.respuestas[cidx]));
                                        });
                                    });
                                }
                                else {
                                    json_.respuesta.forEach((f, fidx) => {
                                        controls.push([]);
                                        f.columnas.forEach((c, cidx) => {
                                            controls[fidx].push(new forms_1.FormControl(f.respuestas[cidx]));
                                        });
                                    });
                                }
                                this.frmMtz = controls;
                            }
                            else {
                                this.frmMtz = [];
                            }
                            if (json_.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_multiple) {
                                this.esAgregarPreguntaMultiple = pregunta.es_agregar_pregunta;
                                let rpta = [];
                                json_.opciones.forEach(f => {
                                    let item = f;
                                    item.selected = false;
                                    rpta.push(item);
                                });
                            }
                            if (json_.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                                this.esAgregarPreguntaMultiple = pregunta.es_agregar_pregunta;
                                let rpta = [];
                                json_.opciones.forEach(f => {
                                    let item = f;
                                    item.selected = false;
                                    rpta.push(item);
                                });
                            }
                            if (json_.id_tipo == _core_1.TIPO_PREGUNTA.fecha) {
                                let fechas = JSON.parse(pregunta.json_tipo_fecha);
                                for (let i = 0; i < fechas.length; i++) {
                                    if (fechas[i].id_enumerado == 1 && fechas[i].selected) {
                                        this.formato_fecha = "yyyy";
                                    }
                                    if (fechas[i].id_enumerado == 2 && fechas[i].selected) {
                                        this.formato_fecha = "MM/yyyy";
                                    }
                                    if (fechas[i].id_enumerado == 3 && fechas[i].selected) {
                                        this.formato_fecha = "dd/MM/yyyy";
                                    }
                                }
                            }
                            if (json_.id_tipo == _core_1.TIPO_PREGUNTA.archivo) {
                                this.is_archivo = false;
                                this.is_archivo = true;
                                this._placeholder = "Adjunta ";
                                let count = 0;
                                let archivoTipos = JSON.parse(pregunta.json_archivo_tipo_archivo);
                                for (let i = 0; i < archivoTipos.length; i++) {
                                    if (archivoTipos[i].id_enumerado == 1 && archivoTipos[i].selected) {
                                        this._imagen_extensionAceptados.push(".png", ".jpeg", ".gif");
                                        this._imagen_MimePermitidos.push("image/png", "image/jpeg", "image/gif");
                                        this._placeholder = this._placeholder + "JPG, GIF, PNG";
                                        count++;
                                    }
                                    if (archivoTipos[i].id_enumerado == 2 && archivoTipos[i].selected) {
                                        this._imagen_extensionAceptados.push(".pdf");
                                        this._imagen_MimePermitidos.push("application/pdf");
                                        if (count > 0) {
                                            this._placeholder = this._placeholder + ", PDF";
                                        }
                                        else {
                                            this._placeholder = this._placeholder + "PDF";
                                        }
                                        count++;
                                    }
                                    if (archivoTipos[i].id_enumerado == 3 && archivoTipos[i].selected) {
                                        this._imagen_extensionAceptados.push(".doc", ".docx");
                                        this._imagen_MimePermitidos.push("application/vnd.openxmlformats-officedocument.wordprocessingml.document");
                                        if (count > 0) {
                                            this._placeholder = this._placeholder + ", WORD";
                                        }
                                        else {
                                            this._placeholder = this._placeholder + "WORD";
                                        }
                                        count++;
                                    }
                                    if (archivoTipos[i].id_enumerado == 4 && archivoTipos[i].selected) {
                                        this._imagen_extensionAceptados.push(".xls", ".xlsx");
                                        this._imagen_MimePermitidos.push("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
                                        if (count > 0) {
                                            this._placeholder = this._placeholder + ", XLS";
                                        }
                                        else {
                                            this._placeholder = this._placeholder + "XLS";
                                        }
                                    }
                                }
                            }
                            this.JSON_PREGUNTA = json_;
                            this.JSON_PREGUNTA.es_obligatorio = pregunta.es_obligatorio;
                        }
                        else {
                            this._placeholder = null;
                            this.JSON_PREGUNTA = JSON.parse(pregunta.json_alternativas);
                            this.JSON_PREGUNTA.es_obligatorio = pregunta.es_obligatorio;
                            if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                                if (this.JSON_PREGUNTA.tbl_data == 1) {
                                    this.JSON_PREGUNTA.respuesta = { d1: null, d2: null, d3: null };
                                }
                                //this.setComboInstitucional(Number(this.JSON_PREGUNTA.tbl_data));
                            }
                            if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_libre ||
                                this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_multiple ||
                                this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                                this.esAgregarPreguntaMultiple = pregunta.es_agregar_pregunta;
                                if (this.JSON_PREGUNTA.id_tipo != _core_1.TIPO_PREGUNTA.desplegable_libre) {
                                    let rpta = [];
                                    this.JSON_PREGUNTA.opciones.forEach(f => {
                                        let item = f;
                                        item.selected = false;
                                        rpta.push(item);
                                    });
                                    this.JSON_PREGUNTA.respuesta = rpta;
                                }
                                else {
                                    this.JSON_PREGUNTA.respuesta = [null];
                                }
                            }
                            if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.matriz) {
                                let rpta = [];
                                let controls = [];
                                if (this.JSON_PREGUNTA.es_columna_matriz) {
                                    this.JSON_PREGUNTA.filas.forEach((f, fidx) => {
                                        let item = f;
                                        let vals = [];
                                        let columnas = [];
                                        controls.push([]);
                                        this.JSON_PREGUNTA.columnas.forEach(c => {
                                            let col = c;
                                            if (c.forma.id_tipo == _core_1.TIPO_PREGUNTA.numerico_decimal || c.forma.id_tipo == _core_1.TIPO_PREGUNTA.numerico_entero
                                                || c.forma.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_unica || c.forma.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                                                vals.push(null);
                                            }
                                            else {
                                                vals.push([]);
                                            }
                                            if (c.forma.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                                                col.forma.respuesta = [null];
                                                controls[fidx].push(new forms_1.FormControl(null));
                                            }
                                            else {
                                                controls[fidx].push(new forms_1.FormControl(col.forma.respuesta));
                                            }
                                            columnas.push(col);
                                        });
                                        item.respuestas = vals;
                                        item.columnas = columnas;
                                        rpta.push(item);
                                    });
                                }
                                else if (!this.JSON_PREGUNTA.es_columna_matriz) {
                                    var filas = this.JSON_PREGUNTA.filas;
                                    for (var i = 0; i < filas.length; i++) {
                                        // Iterate over numeric indexes from 0 to 5, as everyone expects.
                                        const item = filas[i];
                                        let vals = [];
                                        let columna = [];
                                        controls.push([]);
                                        filas[i].columnas = [];
                                        const _json_ = JSON.parse(pregunta.json_alternativas);
                                        var columnass = _json_.columnas;
                                        for (var j = 0; j < columnass.length; j++) {
                                            var col = columnass[j];
                                            col.forma = item.forma;
                                            col.nombre_fila = item.nombre_fila;
                                            if (filas[i].forma.id_tipo == _core_1.TIPO_PREGUNTA.numerico_decimal || filas[i].forma.id_tipo == _core_1.TIPO_PREGUNTA.numerico_entero
                                                || filas[i].forma.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_unica || filas[i].forma.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                                                vals.push(null);
                                            }
                                            else {
                                                vals.push([]);
                                            }
                                            if (filas[i].forma.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                                                col.forma.respuesta = [null];
                                                controls[filas[i].idx].push(new forms_1.FormControl(null));
                                            }
                                            else {
                                                controls[filas[i].idx].push(new forms_1.FormControl(columnass[j].forma.respuesta));
                                            }
                                            columna.push(col);
                                        }
                                        let fila_item = this.JSON_PREGUNTA.filas.find(x => x.idx == filas[i].idx);
                                        fila_item.respuestas = vals;
                                        fila_item.columnas = columna;
                                        rpta.push(fila_item);
                                    }
                                }
                                this.frmMtz = controls;
                                this.RESPUESTA_MATRIZ = rpta;
                                this.JSON_PREGUNTA.respuesta = rpta;
                            }
                            if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.fecha) {
                                let fechas = JSON.parse(pregunta.json_tipo_fecha);
                                for (let i = 0; i < fechas.length; i++) {
                                    if (fechas[i].id_enumerado == 1 && fechas[i].selected) {
                                        this.formato_fecha = "yyyy";
                                    }
                                    if (fechas[i].id_enumerado == 2 && fechas[i].selected) {
                                        this.formato_fecha = "MM/yyyy";
                                    }
                                    if (fechas[i].id_enumerado == 3 && fechas[i].selected) {
                                        this.formato_fecha = "dd/MM/yyyy";
                                    }
                                }
                            }
                            if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.texto) {
                                let caracter = JSON.parse(pregunta.json_alternativas);
                                this.cantidad_caracteres = caracter.nro_caracteres;
                            }
                            if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.archivo) {
                                this.is_archivo = false;
                                this.is_archivo = true;
                                this._placeholder = "Adjunta ";
                                let count = 0;
                                let archivoTipos = JSON.parse(pregunta.json_archivo_tipo_archivo);
                                for (let i = 0; i < archivoTipos.length; i++) {
                                    if (archivoTipos[i].id_enumerado == 1 && archivoTipos[i].selected) {
                                        this._imagen_extensionAceptados.push(".png", ".jpeg", ".gif");
                                        this._imagen_MimePermitidos.push("image/png", "image/jpeg", "image/gif");
                                        this._placeholder = this._placeholder + "JPG, GIF, PNG";
                                        count++;
                                    }
                                    if (archivoTipos[i].id_enumerado == 2 && archivoTipos[i].selected) {
                                        this._imagen_extensionAceptados.push(".pdf");
                                        this._imagen_MimePermitidos.push("application/pdf");
                                        if (count > 0) {
                                            this._placeholder = this._placeholder + ", PDF";
                                        }
                                        else {
                                            this._placeholder = this._placeholder + "PDF";
                                        }
                                        count++;
                                    }
                                    if (archivoTipos[i].id_enumerado == 3 && archivoTipos[i].selected) {
                                        this._imagen_extensionAceptados.push(".doc", ".docx");
                                        this._imagen_MimePermitidos.push("application/vnd.openxmlformats-officedocument.wordprocessingml.document");
                                        if (count > 0) {
                                            this._placeholder = this._placeholder + ", WORD";
                                        }
                                        else {
                                            this._placeholder = this._placeholder + "WORD";
                                        }
                                        count++;
                                    }
                                    if (archivoTipos[i].id_enumerado == 4 && archivoTipos[i].selected) {
                                        this._imagen_extensionAceptados.push(".xls", ".xlsx");
                                        this._imagen_MimePermitidos.push("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
                                        if (count > 0) {
                                            this._placeholder = this._placeholder + ", XLS";
                                        }
                                        else {
                                            this._placeholder = this._placeholder + "XLS";
                                        }
                                    }
                                }
                            }
                        }
                        yield this.emit_data_to_header(data[0], this.pageIndex);
                        if (pregunta.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.video) {
                            let url = pregunta.url_video;
                            this._idYoutubeVideo_pregunta = url.substring(32, 43);
                            this._loaded_media_pregunta = true;
                        }
                        else if (pregunta.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen) {
                            yield this.onGetSavedFileByCode(pregunta.iden_imagen);
                            this._loaded_media_pregunta = true;
                        }
                        else {
                            console.log("");
                        }
                    }
                    this.cargando_tabla = false;
                    // this.cd.markForCheck();
                    // this.cd.detectChanges();
                    this.spinner.hide();
                }))
                    .catch(() => {
                    this.cargando_tabla = false;
                    this.spinner.hide();
                });
            });
            this.emit_data_to_header = (pregunta, page_index) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                let _id_pregunta = pregunta.id_pregunta;
                let posibles = this.JSON_PREGUNTA;
                let _respuesta = this.respuestas.find(f => f.id_pregunta == _id_pregunta) ? this.respuestas.find(f => f.id_pregunta == _id_pregunta).json_respuesta : posibles;
                let data_emit = {
                    id_encuesta: this.id_encuesta,
                    pageIndex: page_index,
                    id_pregunta: _id_pregunta,
                    respuesta: _respuesta,
                    es_anonima: this.es_anonima,
                    paginado: this.pagination_array
                };
                let json = JSON.stringify(data_emit);
                localStorage.setItem("is_filling_content", json);
                this.onEmitDataToHeader.emit(data_emit);
            });
            //#region COMBOS INSTITUCIONAL
            this.array_cbo_intitucional = [];
            this.d1 = [];
            this.d2 = [];
            this.d3 = [];
            this.d2_disabled = false;
            this.d3_disabled = false;
            this.array_regimen_cbo = [];
            this.array_d_gen = [];
            this.array_d1 = [];
            this.array_d2 = [];
            this.array_d3 = [];
            this.getD2 = ($event) => {
                let dt = this.array_d_gen;
                this.JSON_PREGUNTA.respuesta.d2 = null;
                this.JSON_PREGUNTA.respuesta.d3 = null;
                this.d2 = dt.filter(f => f.CODDEP_RESPONSABLE == $event);
                this.d2_disabled = this.d2.length > 0 ? false : true;
                this.d3_disabled = this.d2.length > 0 ? false : true;
            };
            this.getD3 = ($event) => {
                let dt = this.array_d_gen;
                this.JSON_PREGUNTA.respuesta.d3 = null;
                this.d3 = dt.filter(f => f.CODDEP_RESPONSABLE == $event);
                this.d3_disabled = this.d3.length > 0 ? false : true;
            };
            this.getPreguntasEncuesta = (show_spinner = true) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                let filtro = { id_encuesta: this.id_encuesta, _mostar_solo_condicional: false };
                yield this.encuesta_s._GetListaPreguntasByEncuesta(filtro, this.pageIndex, 10000)
                    .then((datos) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    this.arrayPreguntas = datos.data;
                    yield this.getPreguntasSeccionEncuesta(show_spinner);
                })).catch(() => { });
            });
            this.getPreguntasSeccionEncuesta = (show_spinner = true) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                let filtro = { id_encuesta: this.id_encuesta, _mostar_solo_condicional: false };
                yield this.encuesta_s._GetListaPreguntasSeccionByEncuesta(filtro, this.pageIndex, 10000)
                    .then((datos) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    this.arraySecciones = datos.data;
                    console.log(this.arraySecciones);
                    yield this.get_Preguntas(show_spinner);
                })).catch(() => { });
            });
            this.getPreguntasSeccion = () => {
                let filtro = { id_encuesta: this.id_encuesta };
                this.encuesta_s._GetListaPreguntasByEncuesta(filtro, this.pageIndex, 10000)
                    .then((datos) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    this.arraySecciones = datos.data;
                })).catch(() => { });
            };
            //#endregion
            //#region  EVENTOS DEL LLENADO
            this.setOneClickedOnly = (idx, id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.JSON_PREGUNTA.respuesta.forEach((e, index) => {
                    e.selected = (index == idx ? true : false);
                });
                // this.JSON_PREGUNTA.respuesta[id].selected = true;
                this.cd.markForCheck();
                this.cd.detectChanges();
                yield this.detectarDisparador();
            });
            this.setOneClickedMultiple = (idx, id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (this.JSON_PREGUNTA.respuesta[id].selected) {
                    this.JSON_PREGUNTA.respuesta[id].selected = false;
                }
                else {
                    this.JSON_PREGUNTA.respuesta[id].selected = true;
                }
            });
            this.loading_matriz = false;
            //#endregion
            this._loaded_media_pregunta = false;
            this._loaded_media_agradecimiento = false;
            this.onGetSavedFileByCode = (codigo, es_agradecimiento = false) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this._fileService.getFilesById(codigo).then((resp) => tslib_1.__awaiter(this, void 0, void 0, function* () {
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
                                if (es_agradecimiento == false) {
                                    this._urlArchivo_pregunta = this.sanitizer.bypassSecurityTrustResourceUrl(urlArchivo);
                                    this._loaded_media_pregunta = true;
                                }
                                else {
                                    this._urlArchivo_agradecimiento = this.sanitizer.bypassSecurityTrustResourceUrl(urlArchivo);
                                    this._loaded_media_agradecimiento = true;
                                }
                            }
                            else {
                                this._alertService.open("error", resp.Data[0].mensajeError, 'Error de imagen');
                                if (es_agradecimiento == false) {
                                    this._loaded_media_pregunta = false;
                                }
                                else {
                                    this._loaded_media_agradecimiento = false;
                                }
                            }
                        }
                        else {
                            this._alertService.open("error", "Sin datos para cargar", "Error de imagen");
                            if (es_agradecimiento == false) {
                                this._loaded_media_pregunta = false;
                            }
                            else {
                                this._loaded_media_agradecimiento = false;
                            }
                        }
                    }
                    if (!resp.Success) {
                        this._alertService.open("error", resp.Messages[0], "Error de imagen");
                        if (es_agradecimiento == false) {
                            this._loaded_media_pregunta = false;
                        }
                        else {
                            this._loaded_media_agradecimiento = false;
                        }
                    }
                    // this.cd.detectChanges();
                    // this.cd.markForCheck();
                }), (error) => {
                    console.error(error);
                });
            });
            //#region VIAJE ENTE PREGUNTAS
            this.direccion = "";
            this.onPageChange = (e) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                e = e ? Number(e) : null;
                let _continue = true;
                if (this.Pregunta.es_obligatorio) {
                    if (this.is_validChangePregunta()) {
                        _continue = true;
                        this.calcel_speech();
                    }
                    else {
                        _continue = false;
                    }
                }
                else {
                    _continue = true;
                }
                if (_continue) {
                    this.presetIndex = e;
                    yield this.goNextPregunta();
                    this.cd.markForCheck();
                    this.cd.detectChanges();
                }
                else {
                    let before = this.presetIndex;
                    this.pageIndex = before;
                    this.cd.markForCheck();
                    this.cd.detectChanges();
                }
            });
            this.onPageChangeNext = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                let e = this.pageIndex + 1;
                let _continue = true;
                if (this.Pregunta.es_obligatorio) {
                    if (this.is_validChangePregunta()) {
                        _continue = true;
                        this.calcel_speech();
                    }
                    else {
                        _continue = false;
                    }
                }
                else {
                    _continue = true;
                }
                if (_continue) {
                    this.presetIndex = e;
                    this.direccion = "adelante";
                    var numero = yield this.obtenerPaginado();
                    yield this.goNextPregunta(numero);
                    this.cd.markForCheck();
                    this.cd.detectChanges();
                }
                else {
                    this.cd.markForCheck();
                    this.cd.detectChanges();
                }
            });
            this.onPageChangePrev = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                let e = this.pageIndex - 1;
                //this.pageIndex = e;
                let _continue = true;
                for (let i = 0; i < this.arrayPreguntas.length; i++) {
                    this.arrayPreguntas[i].actual = false;
                    this.arrayPreguntas[i].resuelto = false;
                }
                if (this.Pregunta.es_obligatorio) {
                    if (this.is_validChangePregunta()) {
                        _continue = true;
                        this.calcel_speech();
                    }
                    else {
                        _continue = false;
                    }
                }
                else {
                    _continue = true;
                }
                if (_continue) {
                    this.presetIndex = e;
                    this.direccion = "atras";
                    var numero = yield this.obtenerPaginado();
                    yield this.goNextPregunta(numero);
                    this.cd.markForCheck();
                    this.cd.detectChanges();
                }
                else {
                    this.cd.markForCheck();
                    this.cd.detectChanges();
                }
            });
            this.conteo_lleno = 0;
            this.conteo_vacio = 0;
            this.is_validChangePregunta = () => {
                let valid = true;
                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                    if (this.JSON_PREGUNTA.tbl_data == 2 && this.JSON_PREGUNTA.respuesta == null) {
                        valid = false;
                    }
                    if (this.JSON_PREGUNTA.tbl_data == 1 && this.JSON_PREGUNTA.respuesta.d1 == null) {
                        valid = false;
                    }
                }
                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_multiple) {
                    let filter = this.JSON_PREGUNTA.respuesta.filter(f => f.selected == true).length;
                    let otro = this.JSON_PREGUNTA.otro;
                    if (filter == 0) {
                        if (this.esAgregarPreguntaMultiple) {
                            if (otro == "" || otro == undefined) {
                                valid = false;
                            }
                        }
                        else {
                            if (filter == 0) {
                                valid = false;
                            }
                        }
                    }
                }
                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                    let filter = this.JSON_PREGUNTA.respuesta.filter(f => f.selected == true).length;
                    let otro = this.JSON_PREGUNTA.otro;
                    if (filter == 0) {
                        if (this.esAgregarPreguntaMultiple) {
                            if (otro == "" || otro == undefined) {
                                valid = false;
                            }
                        }
                        else {
                            if (filter == 0) {
                                valid = false;
                            }
                        }
                    }
                }
                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_libre) {
                    if (this.JSON_PREGUNTA.respuesta[0] == null) {
                        valid = false;
                    }
                }
                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.fecha) {
                    if (this.JSON_PREGUNTA.respuesta == null) {
                        valid = false;
                    }
                }
                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.numerico_decimal
                    || this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.numerico_entero) {
                    if (this.JSON_PREGUNTA.respuesta == null) {
                        valid = false;
                    }
                }
                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.matriz) {
                    this.conteo_vacio = 0;
                    const _json_ = this.JSON_PREGUNTA;
                    if (this.JSON_PREGUNTA.es_columna_matriz) {
                        for (var j = 0; j < _json_.filas.length; j++) {
                            this.conteo_lleno = 0;
                            for (var i = 0; i < _json_.columnas.length; i++) {
                                if (_json_.respuesta[j].respuestas[i] == null || _json_.respuesta[j].respuestas[i] == "" || _json_.respuesta[j].respuestas[i].length == 0) {
                                    this.conteo_vacio++;
                                }
                                else {
                                    this.conteo_lleno++;
                                }
                            }
                            if (this.conteo_lleno > 0) {
                                if (_json_.columnas.length > this.conteo_lleno) {
                                    valid = false;
                                }
                            }
                        }
                        var total = _json_.columnas.length * _json_.filas.length;
                        if (this.conteo_vacio == total) {
                            valid = false;
                        }
                    }
                    else {
                        for (var i = 0; i < _json_.columnas.length; i++) {
                            this.conteo_lleno = 0;
                            for (var j = 0; j < _json_.filas.length; j++) {
                                if (_json_.respuesta[j].respuestas[i] == null || _json_.respuesta[j].respuestas[i] == "" || _json_.respuesta[j].respuestas[i].length == 0) {
                                    this.conteo_vacio++;
                                }
                                else {
                                    this.conteo_lleno++;
                                }
                            }
                            if (this.conteo_lleno > 0) {
                                if (_json_.filas.length > this.conteo_lleno) {
                                    valid = false;
                                }
                            }
                        }
                        var total = _json_.columnas.length * _json_.filas.length;
                        if (this.conteo_vacio == total) {
                            valid = false;
                        }
                        for (var i = 0; i < _json_.columnas.length; i++) {
                            this.conteo_lleno = 0;
                            for (var j = 0; j < _json_.filas.length; j++) {
                                if (_json_.respuesta[j].respuestas[i] == null || _json_.respuesta[j].respuestas[i] == "" || _json_.respuesta[j].respuestas[i].length == 0) {
                                    this.conteo_vacio++;
                                }
                                else {
                                    this.conteo_lleno++;
                                }
                            }
                            if (this.conteo_lleno > 0) {
                                if (_json_.filas.length > this.conteo_lleno) {
                                    valid = false;
                                }
                            }
                        }
                        var total = _json_.columnas.length * _json_.filas.length;
                        if (this.conteo_vacio == total) {
                            valid = false;
                        }
                        // for (var i = 0; i < _json_.filas.length; i++) {
                        //   for (var j = 0; j < _json_.filas[i].respuestas.length; j++) {
                        //     if(_json_.filas[i].respuestas[j] == null || _json_.filas[i].respuestas[j] == "" || _json_.filas[i].respuestas[j].length == 0){
                        //       valid=false;
                        //     }
                        //   }
                        // }
                    }
                }
                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.archivo) {
                    if (!this.JSON_PREGUNTA.respuesta) {
                        valid = false;
                    }
                }
                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.texto) {
                    if (this.JSON_PREGUNTA.respuesta == null) {
                        valid = false;
                    }
                }
                if (!valid) {
                    this.createNotification('warning', 'Advertencia', '<ul><li>Debe responder a esta pregunta para poder continuar.</li></ul>');
                }
                return valid;
            };
            this.goNextPregunta = (aumento = 0) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (this.Pregunta.es_finaliza_encuesta && this.Pregunta.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.mensaje) {
                    yield this.goFinalizarEncuesta();
                }
                else {
                    let _id_pregunta_actual = this.Pregunta.id_pregunta;
                    let _actual_page = 0;
                    this.pagination_array.forEach(x => {
                        if (x.id_pregunta == _id_pregunta_actual) {
                            _actual_page = x.page;
                        }
                    });
                    this.pageIndex = aumento; // _actual_page + aumento; // aqui
                    if (!this.es_anonima) {
                        if (this.respuestas.find(f => f.id_pregunta == this.Pregunta.id_pregunta)) {
                            this.respuestas.forEach(e => {
                                if (e.id_pregunta == this.Pregunta.id_pregunta) {
                                    e.json_respuesta = JSON.stringify(this.JSON_PREGUNTA);
                                }
                            });
                        }
                        else {
                            this.respuestas.push({
                                id_pregunta: this.Pregunta.id_pregunta,
                                json_respuesta: JSON.stringify(this.JSON_PREGUNTA)
                            });
                        }
                        let id_pregunta = this.Pregunta.id_pregunta;
                        let respuesta = this.respuestas.find(f => f.id_pregunta == id_pregunta).json_respuesta;
                        this.spinner.show();
                        let _arr = yield this._detectar_resueltos(this.pagination_array);
                        _arr.forEach((x, idx) => x.page = idx + 1);
                        this.total = _arr.length; //_arr.filter(x=>x.hidden==false).length;
                        this.pagination_array = _arr;
                        yield this.respuesta_s._UpdatePreguntaActualEncuestaAdministrado(this.id_encuesta, this.pageIndex, id_pregunta, respuesta, 1, JSON.stringify(this.pagination_array))
                            .then((datos) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                            yield this.get_Preguntas(false);
                            this.cd.markForCheck();
                            this.cd.detectChanges();
                        }))
                            .catch(() => {
                        });
                    }
                    else {
                        if (this.respuestas.find(f => f.id_pregunta == this.Pregunta.id_pregunta)) {
                            this.respuestas.forEach(e => {
                                if (e.id_pregunta == this.Pregunta.id_pregunta) {
                                    e.json_respuesta = JSON.stringify(this.JSON_PREGUNTA);
                                }
                            });
                        }
                        else {
                            this.respuestas.push({
                                id_pregunta: this.Pregunta.id_pregunta,
                                json_respuesta: JSON.stringify(this.JSON_PREGUNTA)
                            });
                        }
                        let _arr = yield this._detectar_resueltos(this.pagination_array);
                        this.total = _arr.length; //_arr.filter(x=>x.hidden==false).length;
                        _arr.forEach((x, idx) => x.page = idx + 1);
                        this.pagination_array = _arr;
                        yield this.get_Preguntas();
                    }
                }
            });
            this.GoBackEncuesta = () => {
                if (this.respuestas.find(f => f.id_pregunta == this.Pregunta.id_pregunta)) {
                    this.respuestas.forEach(e => {
                        if (e.id_pregunta == this.Pregunta.id_pregunta) {
                            e.json_respuesta = JSON.stringify(this.JSON_PREGUNTA);
                        }
                    });
                }
                else {
                    this.respuestas.push({
                        id_pregunta: this.Pregunta.id_pregunta,
                        json_respuesta: JSON.stringify(this.JSON_PREGUNTA)
                    });
                }
                let str = this.es_anonima ? 'Perderá los datos registrados hasta el momento.' : 'Podrás volver a ingresar y responder desde donde te quedaste.';
                this.modal.confirm({
                    nzTitle: 'Confirmación de salir de encuesta',
                    nzContent: '¿Esta seguro de salir de la plataforma sin completar su encuesta?<br>' + str,
                    nzOkText: 'Si',
                    nzOkType: 'primary',
                    nzCancelText: 'No',
                    nzOnOk: () => {
                        if (!this.es_anonima) {
                            let id_pregunta = this.Pregunta.id_pregunta;
                            let respuesta = this.respuestas.find(f => f.id_pregunta == id_pregunta).json_respuesta;
                            this.spinner.show();
                            this.respuesta_s._UpdatePreguntaActualEncuestaAdministrado(this.id_encuesta, this.pageIndex, id_pregunta, respuesta, 1, JSON.stringify(this.pagination_array))
                                .then((datos) => {
                                //NAVEGAR A PANTALLA DE FINALIZACION
                                this.onGoBackEncuesta.emit(true);
                                this.go_GoodBye();
                                this.spinner.hide();
                                this.cd.markForCheck();
                                this.cd.detectChanges();
                            })
                                .catch(() => { });
                        }
                        else {
                            this.onGoBackEncuesta.emit(true);
                        }
                    },
                    nzOnCancel: () => { }
                });
            };
            this.respuesta_final = null;
            this.fecha_envio = new Date();
            this.goFinalizarEncuesta = () => {
                let _continue = true;
                if (this.Pregunta.es_obligatorio) {
                    if (this.is_validChangePregunta()) {
                        _continue = true;
                        this.calcel_speech();
                    }
                    else {
                        _continue = false;
                    }
                }
                else {
                    _continue = true;
                }
                if (_continue) {
                    let valid = true;
                    if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.archivo) {
                        if (!this.JSON_PREGUNTA.respuesta) {
                            valid = false;
                        }
                    }
                    if (!valid) {
                        this.createNotification('warning', 'Advertencia', '<ul><li>Debe responder a esta pregunta para poder continuar.</li></ul>');
                    }
                    else {
                        if (this.respuestas.find(f => f.id_pregunta == this.Pregunta.id_pregunta)) {
                            this.respuestas.forEach(e => {
                                if (e.id_pregunta == this.Pregunta.id_pregunta) {
                                    e.json_respuesta = JSON.stringify(this.JSON_PREGUNTA);
                                }
                            });
                        }
                        else {
                            this.respuestas.push({
                                id_pregunta: this.Pregunta.id_pregunta,
                                json_respuesta: JSON.stringify(this.JSON_PREGUNTA)
                            });
                        }
                        this.calcel_speech();
                        if (this.Pregunta.es_finaliza_encuesta && this.Pregunta.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.mensaje) {
                            localStorage.setItem("is_filling", "true");
                            if (!this.es_anonima) {
                                let id_pregunta = this.Pregunta.id_pregunta;
                                let respuesta = this.respuestas.find(f => f.id_pregunta == id_pregunta).json_respuesta;
                                this.spinner.show();
                                this.respuesta_s._UpdatePreguntaActualEncuestaAdministrado(this.id_encuesta, this.pageIndex, id_pregunta, respuesta, 2, JSON.stringify(this.pagination_array))
                                    .then((datos) => {
                                    this.respuesta_final = datos.data;
                                    this.fecha_envio = new Date(datos.data.Value.fecha_envio);
                                    //NAVEGAR A PANTALLA DE FINALIZACION
                                    this.go_GoodBye();
                                    this.spinner.hide();
                                    this.cd.markForCheck();
                                    this.cd.detectChanges();
                                })
                                    .catch(() => { });
                            }
                            else {
                                //SaveAndFinishEncuestaAnonima
                                let _respuestas = this.respuestas.map(m => { return { id_pregunta: Number(m.id_pregunta), json_rpta: m.json_respuesta }; });
                                this.respuestas.forEach;
                                let filter = {
                                    id_encuesta: this.id_encuesta,
                                    user_name: '',
                                    dni_trabajador: '',
                                    id_estado: 2,
                                    nro_pregunta: this.pageIndex,
                                    sexo: "",
                                    edad: 0,
                                    respuestas: _respuestas
                                };
                                this.spinner.show();
                                this.respuesta_s._SaveAndFinishEncuestaAnonima(filter)
                                    .then((datos) => {
                                    if (datos.data.Success) {
                                        this.respuesta_final = datos.data;
                                        this.fecha_envio = new Date(datos.data.Value);
                                        //NAVEGAR A PANTALLA DE FINALIZACION
                                        this.spinner.hide();
                                        this.go_GoodBye();
                                    }
                                    else {
                                        let str = '<ul>';
                                        datos.data.Messages.forEach(e => {
                                            str += '<li>' + e + '</li>';
                                        });
                                        str += '</ul>';
                                        this.createNotification('error', 'Advertencia', str);
                                    }
                                    this.cd.markForCheck();
                                    this.cd.detectChanges();
                                })
                                    .catch(() => { });
                            }
                        }
                        else {
                            this.modal.confirm({
                                nzTitle: 'Confirmación de finalización de encuesta',
                                nzContent: '¿Esta seguro de finalizar la encuesta?<br>Una vez finalizada no podrá modificar su respuesta.',
                                nzOkText: 'Si',
                                nzOkType: 'primary',
                                nzCancelText: 'No',
                                nzOnOk: () => {
                                    localStorage.setItem("is_filling", "true");
                                    if (!this.es_anonima) {
                                        let id_pregunta = this.Pregunta.id_pregunta;
                                        let respuesta = this.respuestas.find(f => f.id_pregunta == id_pregunta).json_respuesta;
                                        this.spinner.show();
                                        this.respuesta_s._UpdatePreguntaActualEncuestaAdministrado(this.id_encuesta, this.pageIndex, id_pregunta, respuesta, 2, JSON.stringify(this.pagination_array))
                                            .then((datos) => {
                                            this.respuesta_final = datos.data;
                                            this.fecha_envio = new Date(datos.data.Value.fecha_envio);
                                            //NAVEGAR A PANTALLA DE FINALIZACION
                                            this.go_GoodBye();
                                            this.spinner.hide();
                                            this.cd.markForCheck();
                                            this.cd.detectChanges();
                                        })
                                            .catch(() => { });
                                    }
                                    else {
                                        //SaveAndFinishEncuestaAnonima
                                        let _respuestas = this.respuestas.map(m => { return { id_pregunta: Number(m.id_pregunta), json_rpta: m.json_respuesta }; });
                                        this.respuestas.forEach;
                                        let filter = {
                                            id_encuesta: this.id_encuesta,
                                            user_name: '',
                                            dni_trabajador: '',
                                            id_estado: 2,
                                            nro_pregunta: this.pageIndex,
                                            sexo: "",
                                            edad: 0,
                                            respuestas: _respuestas
                                        };
                                        this.spinner.show();
                                        this.respuesta_s._SaveAndFinishEncuestaAnonima(filter)
                                            .then((datos) => {
                                            if (datos.data.Success) {
                                                this.respuesta_final = datos.data;
                                                this.fecha_envio = new Date(datos.data.Value);
                                                //NAVEGAR A PANTALLA DE FINALIZACION
                                                this.spinner.hide();
                                                this.go_GoodBye();
                                            }
                                            else {
                                                let str = '<ul>';
                                                datos.data.Messages.forEach(e => {
                                                    str += '<li>' + e + '</li>';
                                                });
                                                str += '</ul>';
                                                this.createNotification('error', 'Advertencia', str);
                                            }
                                            this.cd.markForCheck();
                                            this.cd.detectChanges();
                                        })
                                            .catch(() => { });
                                    }
                                },
                                nzOnCancel: () => {
                                    if (!this.es_anonima) {
                                        let id_pregunta = this.Pregunta.id_pregunta;
                                        let respuesta = this.respuestas.find(f => f.id_pregunta == id_pregunta).json_respuesta;
                                        this.respuesta_s._UpdatePreguntaActualEncuestaAdministrado(this.id_encuesta, this.pageIndex, id_pregunta, respuesta, 1, JSON.stringify(this.pagination_array))
                                            .then((datos) => {
                                            if (!datos.data.Success) {
                                                let str = '<ul>';
                                                datos.data.Messages.forEach(e => {
                                                    str += '<li>' + e + '</li>';
                                                });
                                                str += '</ul>';
                                                this.createNotification('error', 'Advertencia', str);
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
                    }
                }
                else {
                    setTimeout(() => {
                        this.cd.markForCheck();
                        this.cd.detectChanges();
                    }, 150);
                }
            };
            this.show_final_envio = false;
            this.goBackToInicio = () => {
                this.onGoToInicio.emit(true);
            };
            //#endregion
            this.total_novisible = 0;
            //#region DETECCION DE DISPARADORES Y PAGINADOR
            this.detectarDisparador = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (this.Pregunta.es_condicional) {
                    let disparadores_noVisibles = [];
                    let disparadores_visibles = [];
                    let array_pag = [];
                    this.loaded_pagination = false;
                    if (this.Pregunta.id_tipo_pregunta == this._TIPO_PREGUNTA.seleccion_unica) {
                        let _tiene_respuesta = this.JSON_PREGUNTA.respuesta.find(x => x.selected == true);
                        if (_tiene_respuesta) {
                            let _rpta = JSON.stringify(this.JSON_PREGUNTA.respuesta);
                            let _id_pregunta = this.Pregunta.id_pregunta;
                            disparadores_noVisibles = this.disparadoresRespuestas.filter(x => x.id_pregunta_condicional == this.Pregunta.id_pregunta && x.json_respuesta_condicional != _rpta);
                            disparadores_visibles = this.disparadoresRespuestas.filter(x => x.id_pregunta_condicional == this.Pregunta.id_pregunta && x.json_respuesta_condicional == _rpta);
                        }
                        else {
                            disparadores_noVisibles = [];
                            disparadores_visibles = this.disparadoresRespuestas.filter(x => x.id_pregunta_condicional == this.Pregunta.id_pregunta);
                        }
                    }
                    this.pagination_array.forEach(x => {
                        var sds = disparadores_noVisibles.find(f => f.id_pregunta == x.id_pregunta);
                        var dsd = disparadores_visibles.find(f => f.id_pregunta == x.id_pregunta);
                        if (disparadores_noVisibles.find(f => f.id_pregunta == x.id_pregunta) || disparadores_visibles.find(f => f.id_pregunta == x.id_pregunta)) {
                            if (disparadores_noVisibles.find(f => f.id_pregunta == x.id_pregunta)) {
                                let find = this.paginado_totalizado.find(f => f.id_pregunta == x.id_pregunta);
                                find.hidden = true;
                                array_pag.push(find);
                            }
                            if (disparadores_visibles.find(f => f.id_pregunta == x.id_pregunta)) {
                                let find = this.paginado_totalizado.find(f => f.id_pregunta == x.id_pregunta);
                                find.hidden = false;
                                array_pag.push(find);
                            }
                        }
                        else {
                            let find = this.paginado_totalizado.find(f => f.id_pregunta == x.id_pregunta);
                            array_pag.push(find);
                        }
                    });
                    array_pag.forEach((x, idx) => { x.page = idx + 1; });
                    this.total = array_pag.length;
                    ; //array_pag.filter(x=>x.hidden==false).length;
                    this.pagination_array = this._detectar_resueltos(array_pag);
                    this.total_novisible;
                    this.loaded_pagination = true;
                    this.cd.markForCheck();
                    this.cd.detectChanges();
                }
            });
            this.getPaginationNotHidden = () => {
                let _arr = this.pagination_array.filter(x => x.hidden == false);
                _arr.forEach((x, idx) => x.page = idx + 1);
                return _arr;
            };
            this._detectar_resueltos = (array) => {
                let copy_page = array; //_resolved;
                this._total_preguntas.forEach((f, index) => {
                    let rpta = this.respuestas.find(x => x.id_pregunta == f.id_pregunta);
                    let _pregunta = copy_page.find(x => x.id_pregunta == f.id_pregunta);
                    if (_pregunta) {
                        let _idx_pregunta = copy_page.indexOf(_pregunta);
                        if (rpta) {
                            let json_respuesta = JSON.parse(rpta.json_respuesta);
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                                if (json_respuesta.tbl_data == 1) {
                                    copy_page[_idx_pregunta].resolved = json_respuesta.respuesta.d1 == null ? false : true;
                                }
                                if (json_respuesta.tbl_data == 2) {
                                    copy_page[_idx_pregunta].resolved = json_respuesta.respuesta == null ? false : true;
                                }
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_multiple ||
                                json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                                let filter = json_respuesta.respuesta.length == 0 ? null : json_respuesta.respuesta.filter(ff => ff.selected == true);
                                copy_page[_idx_pregunta].resolved = filter.length == 0 ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_libre) {
                                let filter = json_respuesta.respuesta.length == 0 ? null : json_respuesta.respuesta[0];
                                copy_page[_idx_pregunta].resolved = filter ? true : false;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.numerico_entero || json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.numerico_decimal) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.respuesta == null ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.fecha) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.respuesta == null ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.texto) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.respuesta == null ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.archivo) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.respuesta == null ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.mensaje) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.respuesta == null ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.matriz) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.respuesta.length == 0 ? false : true;
                            }
                        }
                        else {
                            copy_page[_idx_pregunta].resolved = false;
                        }
                    }
                });
                return copy_page;
            };
            this.paginado_totalizado = [];
            this.crear_paginado = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                let array_pag = [];
                let _existentes = this.paginado_registrado;
                if (_existentes.length > 0) {
                    this.pagination_array = _existentes;
                    this.paginado_totalizado = _existentes;
                }
                else {
                    for (let i = 0; i < this._total_preguntas.length; i++) {
                        let _find = _existentes.find(x => x.id_pregunta == this._total_preguntas[i].id_pregunta);
                        let e = {
                            page: i + 1,
                            selected: this.pageIndex == i + 1 ? true : false,
                            id_pregunta: this._total_preguntas[i].id_pregunta,
                            resolved: false,
                            hidden: false
                        };
                        if (_find) {
                            e.resolved = _find.resolved;
                        }
                        array_pag.push(e);
                        this.pagination_array_resolved.push(e);
                    }
                    this.pagination_array = array_pag;
                    this.paginado_totalizado = array_pag;
                }
            });
            //#endregion
            this.show_pantalla_agradecimiento = false;
            this.show_agradecimientos = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.spinner.show();
                this.show_final_envio = false;
                this.show_pantalla_agradecimiento = true;
                if (this.agradecimiento_data.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.video) {
                    let url = this.agradecimiento_data.url_video;
                    this._idYoutubeVideo_agradecimiento = url.substring(32, 43);
                    this._loaded_media_agradecimiento = true;
                }
                else {
                    yield this.onGetSavedFileByCode(this.agradecimiento_data.iden_imagen, true);
                }
                this.spinner.hide();
            });
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
            this.editor = DecoupledEditor;
            this.configEditor = _core_1.DecoupledInit.configEditor;
            this.esInvalidoContenido = false;
            this.tags = [];
            this.expresion = /\[\[[A-Z0-9\_]+\]\]/g;
            this.set_imagen_iden = (data) => {
                //this.error_imagen_segundo_plano=false;
                this.JSON_PREGUNTA.respuesta = data.codigo;
                //this.id_archivo =data.codigo;
            };
            this.handleRemovedFilePresentacion = (e) => {
                this.id_archivo = null;
            };
            this.set_archivo_fila_matriz = (data, fila, columna) => {
                this.JSON_PREGUNTA.respuesta[fila].respuestas[columna] = data.codigo;
                //this.error_imagen_segundo_plano=false;
                //this.JSON_PREGUNTA.respuesta = data.codigo;
                //this.id_archivo =data.codigo;
            };
            this.handleRemovedFilePresentacionMatriz = (e, fila, columna) => {
                //this.id_archivo=null;}
                this.JSON_PREGUNTA.respuesta[fila].respuestas[columna] = null;
            };
            this.obtenerPaginado = (page = 0) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (this.direccion == "adelante") {
                    let preguntas_total = this.pagination_array.filter(x => x.hidden == false);
                    const page_index = preguntas_total.findIndex((elemento, indice) => {
                        if (elemento.id_pregunta === this.Pregunta.id_pregunta) {
                            return true;
                        }
                    });
                    page = preguntas_total[page_index + 1].page;
                }
                else {
                    let preguntas_total = this.pagination_array.filter(x => x.hidden == false);
                    const page_index = preguntas_total.findIndex((elemento, indice) => {
                        if (elemento.id_pregunta === this.Pregunta.id_pregunta) {
                            return true;
                        }
                    });
                    page = preguntas_total[page_index - 1].page;
                }
                return page;
            });
            this.speech = new speak_tts_1.default();
            if (this.speech.hasBrowserSupport()) {
                this.speech
                    .init({
                    'volume': this.volume_value_pregunta / 100,
                    'lang': 'es-ES',
                    'rate': 1,
                    'pitch': 1,
                    'voice': 'Google español',
                    'splitSentences': true,
                    'listeners': {
                        'onvoiceschanged': (voices) => {
                            console.log("Event voiceschanged", voices);
                        }
                    }
                })
                    .then((data) => {
                    this.speechData = data;
                    console.log("Speech is ready, voices are available", data);
                })
                    .catch((e) => { console.error('An error occured while initializing : ', e); });
            }
        }
        ngOnInit() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                debugger;
                this.title;
                this.pageIndex;
                this.getPaginationNotHidden();
                yield this._getComboInstitucional(1);
                yield this._getComboInstitucional(2);
                if (this.disparadoresRespuestas.length == 0) {
                    yield this.buscarDisparadores();
                }
                yield this.crear_paginado();
                yield this.GetRespuestasByEncuestaAndEncuestado();
                yield this.detectar_resueltos();
            });
        }
        _show_hide_controlVolume() {
            this.show_volume_audio = !this.show_volume_audio;
            this.cd.markForCheck();
            this.cd.detectChanges();
        }
        setVolumeOfPregunta(valor) {
            setTimeout(() => {
                if (this.audio_speech_pregunta) {
                    if (this.speech.pending()) {
                        this.speech.pause();
                        this.speech.setVolume(valor / 100);
                        this.speech.resume();
                    }
                    else {
                        this.speech.setVolume(valor / 100);
                        this.start_speech();
                    }
                }
            }, 100);
        }
        start_speech() {
            this.audio_speech_pregunta = true;
            let temporalDivElement = document.createElement('div');
            temporalDivElement.innerHTML = this.html_pregunta;
            this.result =
                temporalDivElement.textContent || temporalDivElement.innerText || '';
            this.speech
                .speak({
                text: this.result,
            })
                .then(() => {
                this.audio_speech_pregunta = false;
                this.audio_paused_pregunta = true;
            })
                .catch((e) => {
                console.error('An error occurred :', e);
            });
        }
        pause() {
            this.speech.pause();
        }
        calcel_speech() {
            this.speech.cancel();
        }
        resume() {
            this.speech.resume();
        }
        setLanguage(i) {
            this.speech.setLanguage(this.speechData.voices[i].lang);
            this.speech.setVoice(this.speechData.voices[i].name);
        }
        _onStateChange_pregunta(event) {
            this._ytEvent_pregunta = event.data;
        }
        _savePlayer_pregunta(player) {
            this._player_pregunta = player;
            //setTimeout(() =>{ this._player_agradecimiento.playVideo();},350)
        }
        _onStateChange_agradecimiento(event) {
            this._ytEvent_agradecimiento = event.data;
        }
        _savePlayer_agradecimiento(player) {
            this._player_agradecimiento = player;
            setTimeout(() => { this._player_agradecimiento.playVideo(); }, 350);
        }
        json_to_String(st) {
            return JSON.stringify(st);
        }
        setRespuestaMatriz(fila_idx, col_idx, es_seleccion_unica = false) {
        }
        getComboInstitucional(id_tabla) {
            this.respuesta_s._GetDesplegableInstitucional(id_tabla)
                .then((datos) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (id_tabla == 2) {
                    this.array_cbo_intitucional = datos.data;
                }
                else {
                    let dt = datos.data;
                    let d1 = datos.data.filter(f => f.ID_TIPO_DEPENDENCIA == 2
                        && f.ES_DEPGENERAL == true && f.CODDEP_RESPONSABLE == null);
                    d1.forEach(e => {
                        let d2 = dt.filter(f => f.CODDEP_RESPONSABLE == e.id);
                        d2.forEach(x => {
                            let d3 = dt.filter(f => f.CODDEP_RESPONSABLE == x.id);
                            d3.forEach(y => {
                                let d4 = dt.filter(f => f.CODDEP_RESPONSABLE == y.id);
                                y.data = d4;
                            });
                            x.data = d3;
                        });
                        e.data = d2;
                    });
                    this.array_cbo_intitucional = datos.data;
                    this.d1 = d1.map(m => { return { id: m.id, nombre: m.nombre }; });
                    if (this.JSON_PREGUNTA.respuesta.d1) {
                        this.d2 = datos.data.filter(x => x.CODDEP_RESPONSABLE == this.JSON_PREGUNTA.respuesta.d1);
                        this.d2_disabled = this.d2.length > 0 ? false : true;
                        this.d3_disabled = this.d2.length > 0 ? false : true;
                    }
                    if (this.JSON_PREGUNTA.respuesta.d2) {
                        this.d3 = datos.data.filter(x => x.CODDEP_RESPONSABLE == this.JSON_PREGUNTA.respuesta.d2);
                        this.d3_disabled = this.d3.length > 0 ? false : true;
                    }
                }
                //CODDEP_RESPONSABLE
            }))
                .catch(() => { });
        }
        setComboInstitucional(id_tabla) {
            if (id_tabla == 1) {
                if (this.JSON_PREGUNTA.respuesta.d1) {
                    this.d2 = this.array_d_gen.filter(x => x.CODDEP_RESPONSABLE == this.JSON_PREGUNTA.respuesta.d1);
                    this.d2_disabled = this.d2.length > 0 ? false : true;
                    this.d3_disabled = this.d2.length > 0 ? false : true;
                }
                if (this.JSON_PREGUNTA.respuesta.d2) {
                    this.d3 = this.array_d_gen.filter(x => x.CODDEP_RESPONSABLE == this.JSON_PREGUNTA.respuesta.d2);
                    this.d3_disabled = this.d3.length > 0 ? false : true;
                }
            }
        }
        _getComboInstitucional(id_tabla) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.respuesta_s._GetDesplegableInstitucional(id_tabla)
                    .then((datos) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    if (id_tabla == 2) {
                        this.array_regimen_cbo = datos.data;
                    }
                    else {
                        let dt = datos.data;
                        let d1 = datos.data.filter(f => f.ID_TIPO_DEPENDENCIA == 2
                            && f.ES_DEPGENERAL == true && f.CODDEP_RESPONSABLE == null);
                        d1.forEach(e => {
                            let d2 = dt.filter(f => f.CODDEP_RESPONSABLE == e.id);
                            d2.forEach(x => {
                                let d3 = dt.filter(f => f.CODDEP_RESPONSABLE == x.id);
                                d3.forEach(y => {
                                    let d4 = dt.filter(f => f.CODDEP_RESPONSABLE == y.id);
                                    y.data = d4;
                                });
                                x.data = d3;
                            });
                            e.data = d2;
                        });
                        this.array_d_gen = datos.data;
                        this.d1 = d1.map(m => { return { id: m.id, nombre: m.nombre }; });
                    }
                    //CODDEP_RESPONSABLE
                }))
                    .catch(() => { });
            });
        }
        setNroDecimales(nroDecimales) {
            return 1 / (100 * nroDecimales);
        }
        conteoDigitosDecimal(item, json_pregunta) {
            var numero_actual = json_pregunta.respuesta == null ? "" : json_pregunta.respuesta;
            var nro_entero = json_pregunta.nro_entero;
            var nro_decimal = json_pregunta.nro_decimal;
            var digito_adicional = item.key;
            var d = digito_adicional == "." ? numero_actual : numero_actual + digito_adicional;
            var numberValue = Number(d);
            var parteDecimal = numberValue % 1;
            var parteEntera = numberValue - parteDecimal;
            var dec = d.replace(parteEntera.toString() + ".", "");
            var valida_existe_decimal = d.includes('.');
            var valid = false;
            if (item.charCode >= 48 && item.charCode < 58 || item.charCode == 46) {
                if (valida_existe_decimal) {
                    if (dec.length <= nro_decimal) {
                        valid = true;
                    }
                    else {
                        valid = false;
                    }
                }
                else {
                    if (parteEntera.toString().length <= nro_entero) {
                        valid = true;
                    }
                    else {
                        valid = false;
                    }
                }
            }
            else {
                valid = false;
            }
            return valid;
        }
        conteoDigitosEntero(item, json_pregunta) {
            var numero_actual = json_pregunta.respuesta == null ? "" : json_pregunta.respuesta;
            var nro_entero = json_pregunta.nro_entero;
            var digito_adicional = item.key;
            var d = numero_actual + digito_adicional;
            var numberValue = Number(d);
            var parteEntera = numberValue;
            var valid = false;
            if (item.charCode >= 48 && item.charCode < 58) {
                if (parteEntera.toString().length <= nro_entero) {
                    valid = true;
                }
                else {
                    valid = false;
                }
            }
            else {
                valid = false;
            }
            return valid;
        }
        conteoDigitosEnteroMatriz(item, fila, columna) {
            var respuesta = this.JSON_PREGUNTA.respuesta[fila].respuestas[columna] == null ? "" : this.JSON_PREGUNTA.respuesta[fila].respuestas[columna] + item.key;
            var numero_actual = respuesta == null ? "" : respuesta;
            var nro_entero = this.JSON_PREGUNTA.respuesta[fila].columnas[columna].forma.nro_entero;
            var numberValue = Number(numero_actual);
            var parteEntera = numberValue;
            var valid = false;
            if (item.charCode >= 48 && item.charCode < 58) {
                if (parteEntera.toString().length <= nro_entero) {
                    valid = true;
                }
                else {
                    valid = false;
                }
            }
            else {
                valid = false;
            }
            return valid;
        }
        conteoDigitosDecimalMatriz(item, fila, columna) {
            var respuesta = this.JSON_PREGUNTA.respuesta[fila].respuestas[columna] == null ? "" : this.JSON_PREGUNTA.respuesta[fila].respuestas[columna] + item.key;
            var numero_actual = respuesta == null ? "" : respuesta;
            var nro_entero = this.JSON_PREGUNTA.respuesta[fila].columnas[columna].forma.nro_entero;
            var nro_decimal = this.JSON_PREGUNTA.respuesta[fila].columnas[columna].forma.nro_decimal;
            var digito_adicional = item.key;
            var d = digito_adicional == "." ? numero_actual : numero_actual;
            var numberValue = Number(d);
            var parteDecimal = numberValue % 1;
            var parteEntera = numberValue - parteDecimal;
            var dec = d.replace(parteEntera.toString() + ".", "");
            var valida_existe_decimal = d.includes('.');
            var valid = false;
            if (item.charCode >= 48 && item.charCode < 58 || item.charCode == 46) {
                if (valida_existe_decimal) {
                    if (dec.length <= nro_decimal) {
                        valid = true;
                    }
                    else {
                        valid = false;
                    }
                }
                else {
                    if (parteEntera.toString().length <= nro_entero) {
                        valid = true;
                    }
                    else {
                        valid = false;
                    }
                }
            }
            else {
                valid = false;
            }
            return valid;
        }
        change_status_matriz(idFila, idCol, future_status) {
            let rpta = this.JSON_PREGUNTA.respuesta;
            this.JSON_PREGUNTA.respuesta = [];
            rpta[idFila].columnas[idCol].selected = future_status;
            this.loading_matriz = true;
            setTimeout(() => {
                this.JSON_PREGUNTA.respuesta = rpta;
                this.loading_matriz = false;
            }, 450);
        }
        go_GoodBye() {
            this.show_pregunta_llenado = false;
            this.show_final_envio = true;
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
            //this.texto_mensaje = this.tags.join();
        }
    };
    LlenadoPreguntaSeccionExtComponent.ctorParameters = () => [
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: _core_1.EncuestasService },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: respuesta_service_1.RespuestaService },
        { type: _core_1.FileService },
        { type: ng_zorro_antd_1.NzModalService },
        { type: _core_1.AuthService },
        { type: _core_1.AlertService },
        { type: platform_browser_1.DomSanitizer },
        { type: core_1.ChangeDetectorRef }
    ];
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaSeccionExtComponent.prototype, "id_encuesta", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaSeccionExtComponent.prototype, "es_anonima", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaSeccionExtComponent.prototype, "total", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaSeccionExtComponent.prototype, "pageIndexSeccion", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaSeccionExtComponent.prototype, "_total_preguntas", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaSeccionExtComponent.prototype, "paginado_registrado", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaSeccionExtComponent.prototype, "pageIndex", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaSeccionExtComponent.prototype, "presetIndex", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaSeccionExtComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaSeccionExtComponent.prototype, "agradecimiento_data", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaSeccionExtComponent.prototype, "disparadoresRespuestas", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], LlenadoPreguntaSeccionExtComponent.prototype, "onGoBackEncuesta", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], LlenadoPreguntaSeccionExtComponent.prototype, "onGoToInicio", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], LlenadoPreguntaSeccionExtComponent.prototype, "onEmitDataToHeader", void 0);
    LlenadoPreguntaSeccionExtComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-llenado-pregunta-seccion-ext',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./llenado-pregunta-seccion-ext.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado-ext/pages/gestion-ext/pages/llenado-pregunta-seccion-ext/llenado-pregunta-seccion-ext.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./llenado-pregunta-seccion-ext.component.css */ "./src/app/modules/encuestado-ext/pages/gestion-ext/pages/llenado-pregunta-seccion-ext/llenado-pregunta-seccion-ext.component.css")).default]
        })
    ], LlenadoPreguntaSeccionExtComponent);
    exports.LlenadoPreguntaSeccionExtComponent = LlenadoPreguntaSeccionExtComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/encuestado-ext/pages/gestion-ext/pages/vista-encuesta-ext/vista-encuesta-ext.component.css":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/encuestado-ext/pages/gestion-ext/pages/vista-encuesta-ext/vista-encuesta-ext.component.css ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn_hoverable:hover{\r\n  cursor: pointer;\r\n}\r\n\r\n.btn_disabled:hover{\r\n  cursor: not-allowed;\r\n}\r\n\r\n/**************************/\r\n\r\n.text-atras {\r\n  color: #2473B6;\r\n  font-weight: 400;\r\n  font-size: 12px;\r\n  background: #F4F7FB;\r\n  border-radius: 20px;            \r\n  padding: 10px;\r\n}\r\n\r\n.text-anonimo {    \r\n  font-style: normal;   \r\n  color: #E9AD13;\r\n  padding: 0px 5px 2px 5px;\r\n  border-radius: 16px;\r\n  background: #FBF2DC;\r\n  font-size: 10px;\r\n}\r\n\r\n.text-titulo {\r\n  color: #2473B6;\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 24px;\r\n}\r\n\r\n.text-indicacion {\r\n  color: #404347;\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n}\r\n\r\n.btn-iniciar {\r\n  background-color: #128C3C;color: #ffffff;\r\n}\r\n\r\n.btn-iniciar:active { background-color: #128C3C; color: White; border: none; outline:none !important;;\r\n}\r\n\r\n.btn-iniciar:focus { background-color: #128C3C; border: none; outline:none !important;}\r\n\r\n.btn-atras {\r\n  color: #2473B6;\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 12px;\r\n  background: #FCFCFC;\r\n  border-radius: 20px;        \r\n  padding: 10px;\r\n  width: 92px;\r\n}\r\n\r\n.btn-atras:active { background-color: #FCFCFC; color: #2473B6; border: none; outline:none !important;}\r\n\r\n.btn-atras:focus { background-color: #FCFCFC; color: #2473B6; border: none; outline:none !important;}\r\n\r\n.btn-atras:hover { background-color: #FCFCFC; color: #2473B6; border: none; outline:none !important;}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lbmN1ZXN0YWRvLWV4dC9wYWdlcy9nZXN0aW9uLWV4dC9wYWdlcy92aXN0YS1lbmN1ZXN0YS1leHQvdmlzdGEtZW5jdWVzdGEtZXh0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLDJCQUEyQjs7QUFDM0I7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBR0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCLENBQUMsY0FBYztBQUMxQzs7QUFFQSxzQkFBc0IseUJBQXlCLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSx1QkFBdUI7QUFDcEc7O0FBRUEscUJBQXFCLHlCQUF5QixFQUFFLFlBQVksRUFBRSx1QkFBdUIsQ0FBQzs7QUFFdEY7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUNBLG9CQUFvQix5QkFBeUIsRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixDQUFDOztBQUVyRyxtQkFBbUIseUJBQXlCLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSx1QkFBdUIsQ0FBQzs7QUFFcEcsbUJBQW1CLHlCQUF5QixFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsdUJBQXVCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2VuY3Vlc3RhZG8tZXh0L3BhZ2VzL2dlc3Rpb24tZXh0L3BhZ2VzL3Zpc3RhLWVuY3Vlc3RhLWV4dC92aXN0YS1lbmN1ZXN0YS1leHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5faG92ZXJhYmxlOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ0bl9kaXNhYmxlZDpob3ZlcntcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi50ZXh0LWF0cmFzIHtcclxuICBjb2xvcjogIzI0NzNCNjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBiYWNrZ3JvdW5kOiAjRjRGN0ZCO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7ICAgICAgICAgICAgXHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnRleHQtYW5vbmltbyB7ICAgIFxyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgICBcclxuICBjb2xvcjogI0U5QUQxMztcclxuICBwYWRkaW5nOiAwcHggNXB4IDJweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBiYWNrZ3JvdW5kOiAjRkJGMkRDO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLnRleHQtdGl0dWxvIHtcclxuICBjb2xvcjogIzI0NzNCNjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcblxyXG4udGV4dC1pbmRpY2FjaW9uIHtcclxuICBjb2xvcjogIzQwNDM0NztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5idG4taW5pY2lhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyOEMzQztjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmJ0bi1pbmljaWFyOmFjdGl2ZSB7IGJhY2tncm91bmQtY29sb3I6ICMxMjhDM0M7IGNvbG9yOiBXaGl0ZTsgYm9yZGVyOiBub25lOyBvdXRsaW5lOm5vbmUgIWltcG9ydGFudDs7XHJcbn1cclxuXHJcbi5idG4taW5pY2lhcjpmb2N1cyB7IGJhY2tncm91bmQtY29sb3I6ICMxMjhDM0M7IGJvcmRlcjogbm9uZTsgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7fVxyXG5cclxuLmJ0bi1hdHJhcyB7XHJcbiAgY29sb3I6ICMyNDczQjY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNGQ0ZDRkM7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDsgICAgICAgIFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgd2lkdGg6IDkycHg7XHJcbn1cclxuLmJ0bi1hdHJhczphY3RpdmUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGQ0ZDOyBjb2xvcjogIzI0NzNCNjsgYm9yZGVyOiBub25lOyBvdXRsaW5lOm5vbmUgIWltcG9ydGFudDt9XHJcblxyXG4uYnRuLWF0cmFzOmZvY3VzIHsgYmFja2dyb3VuZC1jb2xvcjogI0ZDRkNGQzsgY29sb3I6ICMyNDczQjY7IGJvcmRlcjogbm9uZTsgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7fVxyXG5cclxuLmJ0bi1hdHJhczpob3ZlciB7IGJhY2tncm91bmQtY29sb3I6ICNGQ0ZDRkM7IGNvbG9yOiAjMjQ3M0I2OyBib3JkZXI6IG5vbmU7IG91dGxpbmU6bm9uZSAhaW1wb3J0YW50O31cclxuIl19 */");

/***/ }),

/***/ "./src/app/modules/encuestado-ext/pages/gestion-ext/pages/vista-encuesta-ext/vista-encuesta-ext.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/encuestado-ext/pages/gestion-ext/pages/vista-encuesta-ext/vista-encuesta-ext.component.ts ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! @app/_core/services/respuesta.service */ "./src/app/_core/services/respuesta.service.ts"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, platform_browser_1, _core_1, respuesta_service_1, ngx_spinner_1, ng_zorro_antd_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let VistaEncuestaExtComponent = class VistaEncuestaExtComponent {
        constructor(spinner, respuesta_s, encuesta_s, _fileService, _authService, _alertService, sanitizer, cd, notification) {
            this.spinner = spinner;
            this.respuesta_s = respuesta_s;
            this.encuesta_s = encuesta_s;
            this._fileService = _fileService;
            this._authService = _authService;
            this._alertService = _alertService;
            this.sanitizer = sanitizer;
            this.cd = cd;
            this.notification = notification;
            this.onGoInicio = new core_1.EventEmitter();
            this.onEmitDataToHeader = new core_1.EventEmitter();
            this.show_selected_encuesta = true;
            this.show_preguntas = false;
            this.show_preguntas_seccion = false;
            this.isCheckedAutorizo = false;
            this.PreguntasList = [];
            this._loaded_media = false;
            this.show_loader_encuesta = true;
            this.handleOnEmitDataToHeader = (e) => {
                this.onEmitDataToHeader.emit(e);
            };
            this._audio_loaded = false;
            this._audio_exists = false;
            this._b64_audio = null;
            this.onGetSavedFileByCode = (codigo, is_audio = false) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this._fileService.getFilesById(codigo).then(resp => {
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
                                var urlArchivo = 'data:' + contentType + ';base64,' + resp.Data[0].content;
                                if (is_audio) {
                                    this._b64_audio = urlArchivo;
                                    this._audio_loaded = true;
                                }
                                else {
                                    this._urlArchivo = this.sanitizer.bypassSecurityTrustResourceUrl(urlArchivo);
                                    this._loaded_media = true;
                                }
                            }
                            else {
                                this._alertService.open("error", resp.Data[0].mensajeError, is_audio ? "Error de audio" : null);
                                if (is_audio)
                                    this._audio_loaded = false;
                                else
                                    this._loaded_media = false;
                            }
                        }
                        else {
                            this._alertService.open("error", "Sin datos para cargar", is_audio ? "Error de audio" : null);
                            if (is_audio)
                                this._audio_loaded = false;
                            else
                                this._loaded_media = false;
                        }
                    }
                    if (!resp.Success) {
                        this._alertService.open("error", resp.Messages[0], is_audio ? "Error de audio" : null);
                        this._audio_loaded = false;
                    }
                });
            });
            //#region MANEJO VIDEO
            this._idYoutubeVideo = null;
            //#endregion
            this.goInicio = () => {
                if (this._audio_loaded) {
                    const gainNode = this.GainNodeEncuesta;
                    gainNode.gain.value = this._volume_value / 100; // setting it to 10%
                    gainNode.connect(this.AudioContextEncuesta.destination);
                    this.AudioSourceEncuesta.connect(gainNode);
                    if (!this._audio_started) {
                        this.AudioSourceEncuesta.start(0);
                        this._audio_started = true;
                    }
                    if (this.AudioContextEncuesta.state === 'running') {
                        this.AudioContextEncuesta.suspend();
                    }
                    else if (this.AudioContextEncuesta.state === 'suspended') {
                        //this.AudioContextEncuesta.resume()  
                    }
                }
                localStorage.setItem("is_filling", "false");
                this.onGoInicio.emit(true);
            };
            //#region CONTROL AUDIOI
            this.AudioContextEncuesta = new AudioContext();
            this._audio_started = false;
            this.audio_paused_encuesta = true;
            this.onGetSavedFileByCodeAudio = (codigo, has_video = true) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this._fileService.getFilesById(codigo).then((resp) => tslib_1.__awaiter(this, void 0, void 0, function* () {
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
                                const audioContext = new AudioContext();
                                const gainNode = audioContext.createGain();
                                gainNode.gain.value = this._volume_value / 100; // setting it to 10%
                                gainNode.connect(audioContext.destination);
                                const arr = view; // Uint8Array.from(response.data.data)
                                const audio = yield audioContext.decodeAudioData(arr.buffer);
                                const source = audioContext.createBufferSource();
                                source.buffer = audio;
                                source.loop = true;
                                source.connect(gainNode);
                                if (!has_video) {
                                    source.start(0);
                                    this._audio_started = true;
                                    this.audio_paused_encuesta = false;
                                }
                                else {
                                    this.audio_paused_encuesta = true;
                                }
                                this.AudioContextEncuesta = audioContext;
                                this.AudioSourceEncuesta = source;
                                this.GainNodeEncuesta = gainNode;
                                this._b64_audio = 'xasdasd';
                                this._audio_loaded = true;
                                this._loading_audio = false;
                            }
                            else {
                                this._alertService.open("error", resp.Data[0].mensajeError, "Error de audio");
                                this._audio_loaded = false;
                                this._loading_audio = false;
                            }
                        }
                        else {
                            this._alertService.open("error", "Sin datos para cargar", "Error de audio");
                            this._audio_loaded = false;
                            this._loading_audio = false;
                        }
                    }
                    if (!resp.Success) {
                        this._alertService.open("error", resp.Messages[0], "Error de audio");
                        this._audio_loaded = false;
                        this._loading_audio = false;
                    }
                }));
            });
            this._loading_audio = true;
            this._show_control_audio = false;
            this._volume_value = 50;
            this.handleAudioPauseEncuesta = () => {
                this.audio_paused_encuesta = !this.audio_paused_encuesta;
                if (!this.audio_paused_encuesta) {
                    const gainNode = this.GainNodeEncuesta;
                    gainNode.gain.value = this._volume_value / 100; // setting it to 10%
                    gainNode.connect(this.AudioContextEncuesta.destination);
                    this.AudioSourceEncuesta.connect(gainNode);
                    if (!this._audio_started) {
                        this.AudioSourceEncuesta.start(0);
                        this._audio_started = true;
                    }
                    if (this.AudioContextEncuesta.state === 'suspended') {
                        this.AudioContextEncuesta.resume();
                    }
                }
                else {
                    if (this.AudioContextEncuesta.state === 'running') {
                        this.AudioContextEncuesta.suspend();
                    }
                }
            };
            this._total_preguntas = [];
            this.disparadoresRespuestas = [];
            this.paginado_registrado = [];
            this.goEncuesta = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (this.isCheckedAutorizo) {
                    if (this._audio_loaded) {
                        //this.welcome_audio.volume= 0;
                        //this.welcome_audio.play();
                        if (!this._audio_started) {
                            const gainNode = this.GainNodeEncuesta;
                            gainNode.gain.value = this._volume_value / 100; // setting it to 10%
                            gainNode.connect(this.AudioContextEncuesta.destination);
                            this.AudioSourceEncuesta.connect(gainNode);
                            this.AudioSourceEncuesta.start(0);
                            this._audio_started = true;
                        }
                        if (this.AudioContextEncuesta.state === 'running') {
                            this.AudioContextEncuesta.suspend();
                        }
                        else if (this.AudioContextEncuesta.state === 'suspended') {
                            //this.AudioContextEncuesta.resume()  
                        }
                    }
                    this.id_encuesta = this.main_data.id_encuesta;
                    yield this.encuesta_s._GetPreguntasCondicionalesByEncuesta({ id_encuesta: this.id_encuesta, es_autorizado_datos: this.isCheckedAutorizo, es_actualizar: true })
                        .then((datos) => {
                        if (datos && datos.data) {
                            this.disparadoresRespuestas = datos.data;
                        }
                        else {
                            this.disparadoresRespuestas = [];
                        }
                    })
                        .catch(() => { this.disparadoresRespuestas = []; });
                    if (this.main_data.es_anonima) {
                        this.paginado_registrado = [];
                        let filtro = { id_encuesta: this.id_encuesta, _mostar_solo_condicional: false };
                        this.encuesta_s._GetPreguntasByEncuesta(filtro, 1, 1000)
                            .then((datos) => {
                            let _rr = [];
                            if (datos && datos.data && datos.data.Data) {
                                this.total = datos.data.TotalRows;
                                datos.data.Data.forEach((e, idx) => {
                                    _rr.push({
                                        nro: idx + 1,
                                        id_pregunta: e.id_pregunta
                                    });
                                });
                                this._total_preguntas = _rr;
                            }
                            else {
                                this._total_preguntas = [];
                            }
                            this.pageIndex = 1;
                            this.presetIndex = 1;
                            this.show_selected_encuesta = false;
                            if (this.main_data.es_con_seccion_pregunta) {
                                this.show_preguntas_seccion = true;
                                this.show_preguntas = false;
                            }
                            else {
                                this.show_preguntas_seccion = false;
                                this.show_preguntas = true;
                            }
                            this.cd.markForCheck();
                            this.cd.detectChanges();
                        })
                            .catch(() => { });
                    }
                    else {
                        yield this.encuesta_s._GetPaginadoRegistrado({ id_encuesta: this.id_encuesta, id_tipo_encuesta: _core_1.TIPO_ENCUESTA.extranet }, 1, 1000)
                            .then((datos) => {
                            if (datos && datos.data && datos.data.Data) {
                                this.paginado_registrado = datos.data.Data[0].json ? JSON.parse(datos.data.Data[0].json) : [];
                            }
                            else {
                                this.paginado_registrado = [];
                            }
                        }).catch(() => { this.disparadoresRespuestas = []; });
                        let filtro = { id_encuesta: this.id_encuesta, _mostar_solo_condicional: false };
                        this.encuesta_s._GetPreguntasByEncuesta(filtro, this.pageIndex, 1000)
                            .then((datos) => {
                            let _rr = [];
                            datos.data.Data.forEach((e, idx) => {
                                _rr.push({
                                    nro: idx + 1,
                                    id_pregunta: e.id_pregunta
                                });
                            });
                            this._total_preguntas = _rr;
                            this.respuesta_s._GetPreguntaActualEncuestaExtranet(this.id_encuesta)
                                .then((datos) => {
                                let splited = datos.data ? datos.data.Value.split(',') : "0,0,0".split(',');
                                this.total = Number(splited[1]);
                                this.pageIndex = Number(splited[0]);
                                this.presetIndex = Number(splited[0]);
                                this.pageIndexSeccion = Number(splited[2]);
                                this.cd.markForCheck();
                                this.cd.detectChanges();
                                this.show_selected_encuesta = false;
                                if (this.main_data.es_con_seccion_pregunta) {
                                    this.show_preguntas_seccion = true;
                                    this.show_preguntas = false;
                                }
                                else {
                                    this.show_preguntas_seccion = false;
                                    this.show_preguntas = true;
                                }
                            })
                                .catch(() => { });
                        }).catch(() => { });
                    }
                }
                else {
                    this.createNotification('error', '', 'Para continuar acepta los términos y condiciones de la encuesta');
                }
            });
            this.handleGoBackEncuesta = ($event) => {
                this.id_encuesta = 0;
                this.show_selected_encuesta = true;
                this.show_preguntas = false;
                this.show_preguntas_seccion = false;
                localStorage.setItem("is_filling", "false");
                if (!this._audio_started && this.GainNodeEncuesta) {
                    const gainNode = this.GainNodeEncuesta;
                    gainNode.gain.value = this._volume_value / 100; // setting it to 10%
                    gainNode.connect(this.AudioContextEncuesta.destination);
                    this.AudioSourceEncuesta.connect(gainNode);
                    this.AudioSourceEncuesta.start(0);
                    this._audio_started = true;
                }
                if (this.AudioContextEncuesta.state === 'running') {
                    //this.AudioContextEncuesta.suspend()
                }
                else if (this.AudioContextEncuesta.state === 'suspended') {
                    this.AudioContextEncuesta.resume();
                }
            };
            this.handleGoBackInicio = ($event) => {
                this.id_encuesta = 0;
                localStorage.setItem("is_filling", "false");
                this.show_selected_encuesta = true;
                this.show_preguntas = false;
                this.show_preguntas_seccion = false;
                if (!this._audio_started && this.GainNodeEncuesta) {
                    const gainNode = this.GainNodeEncuesta;
                    gainNode.gain.value = this._volume_value / 100; // setting it to 10%
                    gainNode.connect(this.AudioContextEncuesta.destination);
                    this.AudioSourceEncuesta.connect(gainNode);
                    this.AudioSourceEncuesta.start(0);
                    this._audio_started = true;
                }
                if (this.AudioContextEncuesta.state === 'running') {
                    this.AudioContextEncuesta.suspend();
                }
                else if (this.AudioContextEncuesta.state === 'suspended') {
                    //this.AudioContextEncuesta.resume()  
                }
                this.onGoInicio.emit(true);
            };
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
            this.onDownloadFileItem = (codigo = undefined) => {
                if (this.welcome_data.iden_terminos_condiciones != "" && this.welcome_data.iden_terminos_condiciones != null
                    && this.welcome_data.iden_terminos_condiciones != undefined) {
                    codigo = this.welcome_data.iden_terminos_condiciones;
                    this._fileService.DownloadFile({
                        id: codigo,
                        version: 0,
                        BuscarBorrador: false
                    });
                }
            };
        }
        ;
        ngOnInit() {
            this.isCheckedAutorizo = this.main_data.es_autorizado_datos;
            this.getPreguntasList();
            this.load_media();
        }
        getPreguntasList() {
            localStorage.setItem("is_filling", "false");
            let filtro = { id_encuesta: this.main_data.id_encuesta };
            this.encuesta_s._GetPreguntasByEncuesta(filtro, 1, 200)
                .then((datos) => {
                if (datos && datos.data && datos.data.Data) {
                    let data = datos.data.Data;
                    data.forEach((e, _idx) => { e.idx = _idx; });
                    this.PreguntasList = data;
                }
            })
                .catch(() => { });
        }
        load_media() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (this.welcome_data.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen) {
                    if (this.welcome_data.iden_imagen) {
                        yield this.onGetSavedFileByCode(this.welcome_data.iden_imagen);
                        this.show_loader_encuesta = false;
                        this._loaded_media = true;
                    }
                }
                else {
                    if (this.welcome_data.url_video != null) {
                        let url = this.welcome_data.url_video;
                        this._idYoutubeVideo = url.substring(32, 43);
                        this._loaded_media = true;
                        this.show_loader_encuesta = false;
                    }
                    else {
                        this._idYoutubeVideo = null;
                        this._loaded_media = false;
                        if (this.welcome_data.id_tipo_archivo == null) {
                            this.show_loader_encuesta = false;
                        }
                        else {
                            this.show_loader_encuesta = true;
                        }
                    }
                }
                if (this.welcome_data.iden_audio) {
                    yield this.onGetSavedFileByCodeAudio(this.welcome_data.iden_audio, this.welcome_data.url_video && this.welcome_data.url_video != '' ? true : false);
                }
                else {
                    this._loading_audio = false;
                }
                this._audio_exists = this.welcome_data.iden_audio ? true : false;
            });
        }
        _onStateChange(event) {
            this._ytEvent = event.data;
        }
        _savePlayer(player) {
            this._player = player;
            setTimeout(() => { this._player.playVideo(); }, 350);
        }
        _setVolumeOfObject(valor) {
            setTimeout(() => {
                if (!this.audio_paused_encuesta) {
                    const gainNode = this.GainNodeEncuesta;
                    gainNode.gain.value = valor / 100; // setting it to 10%
                    gainNode.connect(this.AudioContextEncuesta.destination);
                    this.AudioSourceEncuesta.connect(gainNode);
                    if (!this._audio_started) {
                        this.AudioSourceEncuesta.start(0);
                        this._audio_started = true;
                    }
                }
                this.cd.markForCheck();
                this.cd.detectChanges();
                //this.welcome_audio.volume= valor/100;
                //this.welcome_audio.play();
            }, 100);
        }
        _handleWelcomeEncuestaClick() {
            this._show_control_audio = !this._show_control_audio;
            this.cd.markForCheck();
            this.cd.detectChanges();
        }
    };
    VistaEncuestaExtComponent.ctorParameters = () => [
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: respuesta_service_1.RespuestaService },
        { type: _core_1.EncuestasService },
        { type: _core_1.FileService },
        { type: _core_1.AuthService },
        { type: _core_1.AlertService },
        { type: platform_browser_1.DomSanitizer },
        { type: core_1.ChangeDetectorRef },
        { type: ng_zorro_antd_1.NzNotificationService }
    ];
    tslib_1.__decorate([
        core_1.Input()
    ], VistaEncuestaExtComponent.prototype, "main_data", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], VistaEncuestaExtComponent.prototype, "welcome_data", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], VistaEncuestaExtComponent.prototype, "indicaciones", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], VistaEncuestaExtComponent.prototype, "agradecimiento_data", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], VistaEncuestaExtComponent.prototype, "onGoInicio", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], VistaEncuestaExtComponent.prototype, "onEmitDataToHeader", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('btnPlayMainAudio', { static: false })
    ], VistaEncuestaExtComponent.prototype, "btnPlayMainAudio", void 0);
    VistaEncuestaExtComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-vista-encuesta-ext',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./vista-encuesta-ext.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado-ext/pages/gestion-ext/pages/vista-encuesta-ext/vista-encuesta-ext.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./vista-encuesta-ext.component.css */ "./src/app/modules/encuestado-ext/pages/gestion-ext/pages/vista-encuesta-ext/vista-encuesta-ext.component.css")).default]
        })
    ], VistaEncuestaExtComponent);
    exports.VistaEncuestaExtComponent = VistaEncuestaExtComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=6.js.map