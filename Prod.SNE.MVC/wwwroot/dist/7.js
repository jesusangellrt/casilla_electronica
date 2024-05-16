(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/categorias-extranet/categorias-extranet.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/categorias-extranet/categorias-extranet.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-scale-multiple\">\r\n    <p style=\"font-size: 20px; color: white\">Procesando información, por favor no cierre la ventana.</p>\r\n    </ngx-spinner>\r\n    <br>\r\n    <h1 class=\"title-custom\">Categorías Extranet</h1>\r\n    <hr class=\"mt-0\">\r\n    <ng-container >\r\n        <div class=\"panel panel-default panel-custom\">\r\n            <div class=\"panel-heading\">Buscar registros</div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"\">Categoría:</label>\r\n                            <div>\r\n                                <input type=\"text\"  [(ngModel)]=\"form.nombre\" class=\"form-control\" placeholder=\"Categoría\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\"></div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"\">Estado:</label>\r\n                            <div>\r\n                                <nz-select nzAllowClear nzShowSearch nzPlaceHolder=\"--Todos--\"\r\n                                [(ngModel)]=\"form.es_eliminado\">\r\n                                    <ng-container *ngFor=\"let item of array_estado\">\r\n                                        <nz-option [nzValue]=\"item.valor\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                    </ng-container>\r\n                                </nz-select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-footer text-center\">\r\n                <button type=\"button\" class=\"btn btn-default-custom\" (click)=\"clean_all()\"><i class=\"fa fa-eraser\"\r\n                    aria-hidden=\"true\"></i> Limpiar</button>\r\n                &nbsp;&nbsp;\r\n                <button type=\"button\" class=\"btn btn-primary-custom\" (click)=\"get_list()\"><i class=\"fa fa-search\"></i> Buscar</button>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n    <ng-container>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 text-right\">\r\n                <div class=\"form-group\" style=\"margin-top: -15px;\">\r\n                    <button class=\"btn btn-primary-custom pull-right\" (click)=\"show_save_edit(null,true)\">\r\n                        <i class=\"fa fa-plus-circle\"></i> Crear categoria\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n    <ng-container> \r\n        <div class=\"table-responsive table-striped table-bordered table-hover\">\r\n            <nz-table #ajaxTable class=\"container-table-custom\" nzShowSizeChanger [nzFrontPagination]=\"false\"\r\n            [nzBordered]=\"true\" [nzData]=\"CategoriasList\" [nzLoading]=\"cargando_tabla\" [nzTotal]=\"total\"\r\n            [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\" (nzPageIndexChange)=\"handleClickBuscar()\"\r\n            (nzPageSizeChange)=\"handleClickBuscar(true)\">\r\n    \r\n                <thead>\r\n                    <tr>\r\n                        <th>N°</th>\r\n                        <th WIDTH=\"800\">Categoría</th>\r\n                        <th>Estado</th>\r\n                        <th WIDTH=\"100\">Acciones</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of ajaxTable.data; let i = index\">\r\n                        <td align=\"center\">{{ (pageSize * (pageIndex - 1)) + (i + 1) }}</td>\r\n                        <td>{{ item.nombre}}</td>\r\n                        <td align=\"center\">{{ item.es_eliminado?'Anulado':'Activo' }}</td>              \r\n                        <td align=\"center\" >\r\n                            <ng-container  *ngIf=\"item.es_eliminado==false\">\r\n                                <a class=\"btn btn-icon\"  data-tooltip=\"tooltip\" data-placement=\"bottom\" \r\n                                title=\"Editar\" (click)=\"show_save_edit(item,true)\">\r\n                                    <i class=\"fa fa-edit\" aria-hidden=\"true\"></i>\r\n                                </a>\r\n                            </ng-container>\r\n                            <ng-container>\r\n                                <a class=\"btn btn-icon\"  data-tooltip=\"tooltip\" data-placement=\"bottom\" \r\n                                title=\"Visualizar\" (click)=\"show_save_edit(item,false)\">\r\n                                    <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\r\n                                </a>\r\n                            </ng-container>  \r\n                            <ng-container *ngIf=\"item.es_eliminado==false\">\r\n                                <a  class=\"btn btn-icon\" data-tooltip=\"tooltip\" data-placement=\"bottom\" (click)=\"_enable_disable(item.id_categoria_extranet,true)\" \r\n                                title=\"Eliminar\" >\r\n                                    <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                                </a>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.es_eliminado\">\r\n                                <a  class=\"btn btn-icon\" data-tooltip=\"tooltip\" data-placement=\"bottom\" (click)=\"_enable_disable(item.id_categoria_extranet,false)\"\r\n                                 title=\"Habilitar\" >\r\n                                    <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\r\n                                </a>\r\n                            </ng-container>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </ng-container>\r\n    \r\n    <ng-container *ngIf=\"isVisibleModal\">\r\n        <app-save-update-categoria-ext\r\n        [allow_edit]=\"allow_edit\"   \r\n        [categoria]=\"selected_categoria\"\r\n        [isVisibleModal]=\"isVisibleModal\"\r\n        [title]=\"title_modal\"\r\n        (onCloseForm)=\"handleOnCloseModal($event)\"></app-save-update-categoria-ext>\r\n    </ng-container>\r\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/categorias-extranet/save-update-categoria-ext/save-update-categoria-ext.component.html":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/categorias-extranet/save-update-categoria-ext/save-update-categoria-ext.component.html ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-modal \r\n  [(nzVisible)]=\"isVisibleModal\" \r\n  nzTitle=\"{{title}} categorías\" \r\n  [nzWidth]=\"600\" \r\n  nzClosable=\"false\"\r\n  [nzFooter]=\"extraTemplate\">\r\n    <ng-container >\r\n        <div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12 col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\"><span class=\"span_required\">*</span> Categoría</label>\r\n                        <nz-form-item>\r\n                            <nz-form-control nzErrorTip=\"Debe ingresar la categoría!\">\r\n                                <nz-input-group>\r\n                                    <input\r\n                                    [formControl]=\"frmPRG.frmNombre\" \r\n                                    class=\"form-control\" \r\n                                    placeholder=\"--Ingresar categoría--\"\r\n                                    maxlength=\"80\"\r\n                                    [readonly]=\"!allow_edit\"\r\n                                    [disabled]=\"!allow_edit\"\r\n                                    [(ngModel)]=\"categoria.nombre\">\r\n                                </nz-input-group>\r\n                            </nz-form-control>\r\n                        </nz-form-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <hr>\r\n            <div class=\"row\" *ngIf=\"allow_edit\">\r\n                <div class=\"col-sm-12 text-right\"><button nz-button nzType=\"primary\" (click)=\"_add_sub_categoria()\">\r\n                    <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i> Crear subcategoría</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <ng-container> \r\n                        <div class=\"table-responsive table-striped table-bordered table-hover\">\r\n                            <nz-table #ajaxTable class=\"container-table-custom\" nzShowSizeChanger [nzFrontPagination]=\"true\"\r\n                            [nzBordered]=\"true\" [nzData]=\"array_sub_categorias_extranet\" [nzLoading]=\"cargando_tabla\">\r\n                    \r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Nro</th>\r\n                                        <th WIDTH=\"500\">Sub categoría</th>\r\n                                        <th WIDTH=\"80\" *ngIf=\"allow_edit\">Acciones</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of ajaxTable.data;\">\r\n                                        <td align=\"center\">{{ item.nro }}</td>\r\n                                        <td>\r\n                                            <div *ngIf=\"allow_edit\">\r\n                                                <nz-form-item>\r\n                                                    <nz-form-control nzErrorTip=\"Debe ingresar sub categoría!\">\r\n                                                        <nz-input-group>\r\n                                                            <input type=\"text\" [formControl]=\"frmSubCategorias[item.nro-1]\" \r\n                                                            class=\"form-control\" \r\n                                                            placeholder=\"--Ingresar sub categoría--\"\r\n                                                            maxlength=\"500\"\r\n                                                            [(ngModel)]=\"item.nombre\">\r\n                                                        </nz-input-group>\r\n                                                    </nz-form-control>\r\n                                                </nz-form-item>\r\n                                            </div>\r\n                                            <div *ngIf=\"!allow_edit\">\r\n                                                {{item.nombre}}\r\n                                            </div>\r\n                                        </td>              \r\n                                        <td align=\"center\" *ngIf=\"allow_edit\">\r\n                                            <ng-container *ngIf=\"item.es_eliminado==false\">\r\n                                                <a  class=\"btn btn-icon\" data-tooltip=\"tooltip\" data-placement=\"bottom\" \r\n                                                    (click)=\"_delete_sub_categoria(item.nro-1)\" title=\"Eliminar sub categoría\" >\r\n                                                    <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                                                </a>\r\n                                            </ng-container>\r\n                    \r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </nz-table>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </ng-container>\r\n    <ng-template #extraTemplate>      \r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 text-left\"><button type=\"button\" class=\"btn btn-default-custom\" (click)=\"handleCancelarFormularioModal()\"><i class=\"fa fa-ban\" aria-hidden=\"true\"></i> Cancelar</button></div>\r\n            <div class=\"col-sm-6 text-right\"><button nz-button nzType=\"primary\" [disabled]=\"!allow_edit\" (click)=\"handleSaveFormularioModal()\"><i class=\"fa fa-save\" aria-hidden=\"true\"></i> Guardar</button></div>\r\n        </div>  \r\n    </ng-template>\r\n</nz-modal>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/categorias-extranet/categorias-extranet-routing.module.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/categorias-extranet/categorias-extranet-routing.module.ts ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"), __webpack_require__(/*! ./categorias-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/categorias-extranet/categorias-extranet.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, categorias_extranet_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const routes = [
        { path: "", component: categorias_extranet_component_1.CategoriasExtranetComponent }
    ];
    let CategoriasExtranetRoutingModule = class CategoriasExtranetRoutingModule {
    };
    CategoriasExtranetRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            declarations: [],
            exports: [router_1.RouterModule]
        })
    ], CategoriasExtranetRoutingModule);
    exports.CategoriasExtranetRoutingModule = CategoriasExtranetRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/categorias-extranet/categorias-extranet.component.css":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/categorias-extranet/categorias-extranet.component.css ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lzdGVtYS9wYWdlcy9nZXN0aW9uLWV4dHJhbmV0L3BhZ2VzL2NhdGVnb3JpYXMtZXh0cmFuZXQvY2F0ZWdvcmlhcy1leHRyYW5ldC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/categorias-extranet/categorias-extranet.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/categorias-extranet/categorias-extranet.component.ts ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-i18n.js"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js"), __webpack_require__(/*! @app/_core/services/respuesta.service */ "./src/app/_core/services/respuesta.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, _core_1, forms_1, i18n_1, ng_zorro_antd_1, router_1, ngx_spinner_1, respuesta_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let CategoriasExtranetComponent = class CategoriasExtranetComponent {
        constructor(i18n, fb, notification, router, activeRouter, encuesta_s, sis_enumerado_s, spinner, modal, respuesta_s, categoria_s, cd) {
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
            this.categoria_s = categoria_s;
            this.cd = cd;
            this.array_estado = [
                { valor: "0", nombre: 'Activo' },
                { valor: "1", nombre: 'Eliminado' }
            ];
            this.CategoriasList = [];
            this.cargando_tabla = true;
            this.pageIndex = 1;
            this.total = 0;
            this.pageSize = 10;
            this.form = {
                id_categoria_extranet: 0,
                nombre: null,
                es_eliminado: null,
            };
            this.get_list = () => {
                this.cargando_tabla = true;
                let filter = Object.assign({}, this.form);
                this.spinner.show();
                this.categoria_s._GetCategoriasExtranetMntList(filter, this.pageIndex, this.pageSize)
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
            };
            this.handleClickLimpiar = () => {
                this.form = {
                    nombre: null,
                    id_categoria_extranet: 0,
                    es_eliminado: null
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
                    nombre: null,
                    id_categoria_extranet: 0,
                    es_eliminado: null
                };
                this.pageIndex = 1;
                this.get_list();
            };
            this.isVisibleModal = false;
            this.allow_edit = true;
            this.title_modal = '';
            this.show_save_edit = (itemCategoria, allow_edits = true) => {
                if (itemCategoria) {
                    this.selected_categoria = itemCategoria;
                    this.title_modal = "Editar";
                }
                else {
                    this.selected_categoria = {
                        id_categoria_extranet: 0,
                        nombre: null,
                        es_eliminado: false,
                        array_sub_categorias_extranet: []
                    };
                    this.title_modal = "Registrar";
                }
                this.allow_edit = allow_edits;
                this.isVisibleModal = true;
            };
            this.handleOnCloseModal = (event) => {
                this.isVisibleModal = false;
                if (event) {
                    this.get_list();
                }
            };
            this._enable_disable = (id_categoria_extranet, future_status) => {
                this.modal.confirm({
                    nzTitle: future_status ? 'Anular' : 'Activar',
                    nzContent: 'Esta seguro de ' + (future_status ? 'anular' : 'activar') + ' la categoria seleccionada',
                    nzOkText: 'Si',
                    nzOkType: 'primary',
                    nzCancelText: 'No',
                    nzOnOk: () => {
                        this.categoria_s._EnableDisableCategoriaExtranet(id_categoria_extranet, future_status)
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
            this.i18n.setLocale(i18n_1.es_ES);
        }
        ngOnInit() {
            this.get_list();
        }
    };
    CategoriasExtranetComponent.ctorParameters = () => [
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
        { type: _core_1.CategoriaService },
        { type: core_1.ChangeDetectorRef }
    ];
    CategoriasExtranetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-categorias-extranet',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./categorias-extranet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/categorias-extranet/categorias-extranet.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./categorias-extranet.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/categorias-extranet/categorias-extranet.component.css")).default]
        })
    ], CategoriasExtranetComponent);
    exports.CategoriasExtranetComponent = CategoriasExtranetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/categorias-extranet/categorias-extranet.module.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/categorias-extranet/categorias-extranet.module.ts ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js"), __webpack_require__(/*! ./categorias-extranet-routing.module */ "./src/app/modules/sistema/pages/gestion-extranet/pages/categorias-extranet/categorias-extranet-routing.module.ts"), __webpack_require__(/*! @app/_shared */ "./src/app/_shared/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! ng-zorro-antd/modal */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-modal.js"), __webpack_require__(/*! ng-zorro-antd/notification */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-notification.js"), __webpack_require__(/*! ng-zorro-antd/table */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-table.js"), __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-select.js"), __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-input.js"), __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-icon.js"), __webpack_require__(/*! @cmp/core */ "./src/app/_core/index.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js"), __webpack_require__(/*! ../categorias-extranet/categorias-extranet.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/categorias-extranet/categorias-extranet.component.ts"), __webpack_require__(/*! ./save-update-categoria-ext/save-update-categoria-ext.component */ "./src/app/modules/sistema/pages/gestion-extranet/pages/categorias-extranet/save-update-categoria-ext/save-update-categoria-ext.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, categorias_extranet_routing_module_1, _shared_1, ng_zorro_antd_1, modal_1, notification_1, table_1, select_1, input_1, icon_1, core_2, forms_1, ngx_spinner_1, categorias_extranet_component_1, save_update_categoria_ext_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let CategoriasExtranetModule = class CategoriasExtranetModule {
    };
    CategoriasExtranetModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                categorias_extranet_component_1.CategoriasExtranetComponent,
                save_update_categoria_ext_component_1.SaveUpdateCategoriaExtComponent
            ],
            entryComponents: [],
            imports: [
                common_1.CommonModule,
                categorias_extranet_routing_module_1.CategoriasExtranetRoutingModule,
                _shared_1.SharedModule,
                ng_zorro_antd_1.NzButtonModule,
                ng_zorro_antd_1.NzDatePickerModule,
                modal_1.NzModalModule,
                notification_1.NzNotificationModule,
                table_1.NzTableModule,
                select_1.NzSelectModule,
                input_1.NzInputModule,
                icon_1.NzIconModule,
                core_2.CoreComponentsModule,
                ngx_spinner_1.NgxSpinnerModule,
                ng_zorro_antd_1.NzFormModule,
                ng_zorro_antd_1.NzCheckboxModule,
                ng_zorro_antd_1.NzTabsModule,
                forms_1.ReactiveFormsModule,
                ng_zorro_antd_1.NzMessageModule,
                ng_zorro_antd_1.NzInputNumberModule,
                core_2.CoreDirectivesModule
            ]
        })
    ], CategoriasExtranetModule);
    exports.CategoriasExtranetModule = CategoriasExtranetModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/categorias-extranet/save-update-categoria-ext/save-update-categoria-ext.component.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/categorias-extranet/save-update-categoria-ext/save-update-categoria-ext.component.css ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lzdGVtYS9wYWdlcy9nZXN0aW9uLWV4dHJhbmV0L3BhZ2VzL2NhdGVnb3JpYXMtZXh0cmFuZXQvc2F2ZS11cGRhdGUtY2F0ZWdvcmlhLWV4dC9zYXZlLXVwZGF0ZS1jYXRlZ29yaWEtZXh0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion-extranet/pages/categorias-extranet/save-update-categoria-ext/save-update-categoria-ext.component.ts":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion-extranet/pages/categorias-extranet/save-update-categoria-ext/save-update-categoria-ext.component.ts ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, forms_1, _core_1, ng_zorro_antd_1, ngx_spinner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let SaveUpdateCategoriaExtComponent = class SaveUpdateCategoriaExtComponent {
        constructor(notification, spinner, modal, categoria_s) {
            this.notification = notification;
            this.spinner = spinner;
            this.modal = modal;
            this.categoria_s = categoria_s;
            this.allow_edit = true;
            this.isVisibleModal = false;
            this.title = null;
            this.onCloseForm = new core_1.EventEmitter();
            this.cargando_tabla = true;
            this.array_sub_categorias_extranet = [];
            this.sub_categoria_name = null;
            this.frmPRG = {
                frmNombre: new forms_1.FormControl(null, forms_1.Validators.required),
            };
            this.frmSubCategorias = [];
            this.all_sub_categorias = [];
            this.clean_search = () => {
                this.sub_categoria_name = null;
            };
            this.set_list = () => {
                let search = this.sub_categoria_name;
                this.frmSubCategorias = [];
                let array = search ? this.all_sub_categorias.filter(x => x.nombre.toLowerCase().indexOf(search) > -1) : this.all_sub_categorias;
                array.filter((x, index) => {
                    x.nro = index + 1;
                    this.frmSubCategorias.push(new forms_1.FormControl(x.nombre, forms_1.Validators.required));
                });
                this.array_sub_categorias_extranet = array;
                this.cargando_tabla = false;
            };
            this._delete_sub_categoria = (idx) => {
                this.cargando_tabla = true;
                let array = this.array_sub_categorias_extranet;
                array.splice(idx, 1);
                this.array_sub_categorias_extranet = [];
                let _frmSubCategorias = [];
                setTimeout(() => {
                    array.filter((x, index) => {
                        x.nro = index + 1;
                        _frmSubCategorias.push(new forms_1.FormControl(x.nombre, forms_1.Validators.required));
                    });
                    this.frmSubCategorias = _frmSubCategorias;
                    this.array_sub_categorias_extranet = array;
                    this.cargando_tabla = false;
                }, 200);
            };
            this.handleSaveFormularioModal = () => {
                if (this.frmPRG.frmNombre.valid) {
                    if (this.array_sub_categorias_extranet.filter(x => x.nombre == null || x.nombre == '').length == 0) {
                        this.spinner.show();
                        let filter = Object.assign({}, this.categoria);
                        filter.array_sub_categorias_extranet = this.array_sub_categorias_extranet.map(m => {
                            return {
                                id_sub_categoria_extranet: m.id_sub_categoria_extranet,
                                id_categoria_extranet: m.id_categoria_extranet,
                                nombre: m.nombre,
                                es_eliminado: m.es_eliminado
                            };
                        });
                        this.categoria_s._SaveUpdateCategoriasExtranet(filter)
                            .then((datos) => {
                            if (datos.data) {
                                if (datos.data.Success) {
                                    let str = '<ul>';
                                    datos.data.Messages.forEach(message => {
                                        str += `<li>${message}</li>`;
                                    });
                                    str += '</ul>';
                                    this.createNotification('success', 'Éxito', str);
                                    this.onCloseForm.emit(true);
                                    this.isVisibleModal = false;
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
                        })
                            .catch(() => {
                            this.cargando_tabla = false;
                        });
                    }
                    else {
                        this.createNotification('warning', 'Advertencia', 'El nombre de las subcategorías es obligatorio');
                    }
                }
                else {
                    this.frmPRG.frmNombre.markAllAsTouched();
                    this.frmPRG.frmNombre.markAsDirty();
                    this.createNotification('warning', 'Advertencia', 'El nombre de la categoría es obligatorio.');
                }
            };
            this.handleCancelarFormularioModal = () => {
                this.onCloseForm.emit(false);
                this.isVisibleModal = false;
            };
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
        }
        ngOnInit() {
            this.all_sub_categorias = this.categoria.array_sub_categorias_extranet.filter(x => x.es_eliminado == false);
            this.set_list();
        }
        _add_sub_categoria() {
            let new_item = {
                id_sub_categoria_extranet: 0,
                id_categoria_extranet: this.categoria.id_categoria_extranet ? this.categoria.id_categoria_extranet : 0,
                nombre: null,
                es_eliminado: false
            };
            this.cargando_tabla = true;
            let array = this.array_sub_categorias_extranet;
            array.push(new_item);
            this.array_sub_categorias_extranet = [];
            let _frmSubCategorias = [];
            setTimeout(() => {
                array.filter((x, index) => {
                    x.nro = index + 1;
                    _frmSubCategorias.push(new forms_1.FormControl(x.nombre, forms_1.Validators.required));
                });
                this.frmSubCategorias = _frmSubCategorias;
                this.array_sub_categorias_extranet = array;
                this.cargando_tabla = false;
            }, 200);
        }
    };
    SaveUpdateCategoriaExtComponent.ctorParameters = () => [
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: ng_zorro_antd_1.NzModalService },
        { type: _core_1.CategoriaService }
    ];
    tslib_1.__decorate([
        core_1.Input()
    ], SaveUpdateCategoriaExtComponent.prototype, "allow_edit", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], SaveUpdateCategoriaExtComponent.prototype, "categoria", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], SaveUpdateCategoriaExtComponent.prototype, "isVisibleModal", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], SaveUpdateCategoriaExtComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], SaveUpdateCategoriaExtComponent.prototype, "onCloseForm", void 0);
    SaveUpdateCategoriaExtComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-save-update-categoria-ext',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./save-update-categoria-ext.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion-extranet/pages/categorias-extranet/save-update-categoria-ext/save-update-categoria-ext.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./save-update-categoria-ext.component.css */ "./src/app/modules/sistema/pages/gestion-extranet/pages/categorias-extranet/save-update-categoria-ext/save-update-categoria-ext.component.css")).default]
        })
    ], SaveUpdateCategoriaExtComponent);
    exports.SaveUpdateCategoriaExtComponent = SaveUpdateCategoriaExtComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=7.js.map