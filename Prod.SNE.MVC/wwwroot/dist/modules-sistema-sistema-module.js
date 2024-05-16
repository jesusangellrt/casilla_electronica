(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-sistema-sistema-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/sistema.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/sistema.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n    <app-gestion></app-gestion>\r\n-->\r\n<!--\r\n<div class=\"container contenido-principal\">\r\n    <h1 class=\"title-custom\">Bandeja de núcleos ejecutores de compras</h1>\r\n    <hr class=\"mt-0\">\r\n</div>-->");

/***/ }),

/***/ "./src/app/modules/sistema/sistema-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/sistema/sistema-routing.module.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"), __webpack_require__(/*! ./sistema.component */ "./src/app/modules/sistema/sistema.component.ts"), __webpack_require__(/*! @app/_core/guards/auth.guard */ "./src/app/_core/guards/auth.guard.ts"), __webpack_require__(/*! @cmp/core */ "./src/app/_core/index.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, sistema_component_1, auth_guard_1, core_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const routes = [
        { path: "", component: sistema_component_1.SistemaComponent },
        {
            path: "gestion",
            loadChildren: () => new Promise((resolve_1, reject_1) => { __webpack_require__.e(/*! AMD require */ 11).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./pages/gestion/gestion.module */ "./src/app/modules/sistema/pages/gestion/gestion.module.ts")]; (resolve_1).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_1.bind(this)); }).then(m => m.GestionModule),
            canActivate: [auth_guard_1.AuthGuards],
            data: {
                allowedRoles: [core_2.ROLES.Administrado, core_2.ROLES.SuperAdministrador]
            }
        },
        {
            path: "gestion-extranet",
            loadChildren: () => new Promise((resolve_2, reject_2) => { __webpack_require__.e(/*! AMD require */ 9).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./pages/gestion-extranet/gestion-extranet.module */ "./src/app/modules/sistema/pages/gestion-extranet/gestion-extranet.module.ts")]; (resolve_2).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_2.bind(this)); }).then(m => m.GestionExtranetModule),
            canActivate: [auth_guard_1.AuthGuards],
            data: {
                allowedRoles: [core_2.ROLES.AdministradoExtranet]
            }
        }
    ];
    let SistemaRoutingModule = class SistemaRoutingModule {
    };
    SistemaRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            declarations: [],
            exports: [router_1.RouterModule]
        })
    ], SistemaRoutingModule);
    exports.SistemaRoutingModule = SistemaRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/sistema.component.css":
/*!*******************************************************!*\
  !*** ./src/app/modules/sistema/sistema.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaXN0ZW1hL3Npc3RlbWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaXN0ZW1hL3Npc3RlbWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/sistema/sistema.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/sistema/sistema.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @cmp/core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-i18n.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"), __webpack_require__(/*! ng-zorro-antd/notification */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-notification.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! ng-zorro-antd/modal */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-modal.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, core_2, i18n_1, router_1, notification_1, ngx_spinner_1, forms_1, modal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let SistemaComponent = class SistemaComponent {
        constructor(i18n, router, spinner, notification, fb, _authService, modalService) {
            this.i18n = i18n;
            this.router = router;
            this.spinner = spinner;
            this.notification = notification;
            this.fb = fb;
            this._authService = _authService;
            this.modalService = modalService;
            this._permisos = core_2.PERMISOS;
            this.rol_actual = {};
            this.ROLES = core_2.ROLES;
            this.i18n.setLocale(i18n_1.es_ES);
        }
        ngOnInit() {
            this.rol_actual = this._authService.GetCurrentRole();
            if (this.rol_actual.DescRol == "Administrador Extranet") {
                this.router.navigate(['/sistema/gestion-extranet']);
            }
            else {
                this.router.navigate(['/sistema/gestion']);
            }
            /*
              this.cargarListaNecs();
              this.cargarDepartamentos();
              this.buscarEntidadDemandante("");
              this.cargarEstadosNec();
              this.validarFormularioEnvio();*/
        }
    };
    SistemaComponent.ctorParameters = () => [
        { type: i18n_1.NzI18nService },
        { type: router_1.Router },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: notification_1.NzNotificationService },
        { type: forms_1.FormBuilder },
        { type: core_2.AuthService },
        { type: modal_1.NzModalService }
    ];
    SistemaComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "app-sistema",
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./sistema.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/sistema.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./sistema.component.css */ "./src/app/modules/sistema/sistema.component.css")).default]
        })
    ], SistemaComponent);
    exports.SistemaComponent = SistemaComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/sistema.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/sistema/sistema.module.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js"), __webpack_require__(/*! ./sistema.component */ "./src/app/modules/sistema/sistema.component.ts"), __webpack_require__(/*! ./sistema-routing.module */ "./src/app/modules/sistema/sistema-routing.module.ts"), __webpack_require__(/*! @app/_shared */ "./src/app/_shared/index.ts"), __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-button.js"), __webpack_require__(/*! ng-zorro-antd/date-picker */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-date-picker.js"), __webpack_require__(/*! ng-zorro-antd/table */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-table.js"), __webpack_require__(/*! ng-zorro-antd/modal */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-modal.js"), __webpack_require__(/*! ng-zorro-antd/notification */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-notification.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-input.js"), __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-icon.js"), __webpack_require__(/*! ng-zorro-antd/form */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-form.js"), __webpack_require__(/*! ng-zorro-antd/card */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-card.js"), __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-select.js"), __webpack_require__(/*! @cmp/core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js"), __webpack_require__(/*! ng-zorro-antd/layout */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-layout.js"), __webpack_require__(/*! ng-zorro-antd/menu */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-menu.js"), __webpack_require__(/*! ng-zorro-antd/progress */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-progress.js"), __webpack_require__(/*! ng-zorro-antd/descriptions */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-descriptions.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, sistema_component_1, sistema_routing_module_1, _shared_1, button_1, date_picker_1, table_1, modal_1, notification_1, forms_1, input_1, icon_1, form_1, card_1, select_1, core_2, ngx_spinner_1, layout_1, menu_1, progress_1, descriptions_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let SistemaModule = class SistemaModule {
    };
    SistemaModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                sistema_routing_module_1.SistemaRoutingModule,
                _shared_1.SharedModule,
                button_1.NzButtonModule,
                date_picker_1.NzDatePickerModule,
                table_1.NzTableModule,
                forms_1.FormsModule,
                modal_1.NzModalModule,
                notification_1.NzNotificationModule,
                input_1.NzInputModule,
                icon_1.NzIconModule,
                form_1.NzFormModule,
                card_1.NzCardModule,
                select_1.NzSelectModule,
                core_2.CoreComponentsModule,
                ngx_spinner_1.NgxSpinnerModule,
                layout_1.NzLayoutModule,
                menu_1.NzMenuModule,
                progress_1.NzProgressModule,
                descriptions_1.NzDescriptionsModule,
                core_2.CoreDirectivesModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                sistema_component_1.SistemaComponent
            ],
            providers: []
        })
    ], SistemaModule);
    exports.SistemaModule = SistemaModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=modules-sistema-sistema-module.js.map