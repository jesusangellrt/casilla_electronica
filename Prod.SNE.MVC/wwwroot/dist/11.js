(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion/gestion.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion/gestion.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container contenido-interno\">\r\n    <nz-layout class=\"app-layout app-layout-interno\">\r\n        <nz-sider class=\"menu-sidebar\" nzCollapsible nzWidth=\"256px\" nzBreakpoint=\"md\">\r\n            <ul nz-menu nzMode=\"inline\">\r\n              <!--\r\n              <ng-container *hasRole=\"[_roles.Administrado,_roles.EspecialistaNucleo,_roles.AdministradorGeneral, _roles.Administrador, _roles.AsistenteInformatico, _roles.EspecialistaInformatico, \r\n              _roles.Evaluador, _roles.InspectorGeneral, _roles.InspectorTecnico, _roles.SupervisorGeneral, _roles.SupervisorTecnico, _roles.AsistenteAdministrativo]\">\r\n                <li nz-submenu nzOpen nzTitle=\"Configuración\" nzIcon=\"dashboard\" *hasPermission=\"[_permisos.VerNucleoEjecutor]\">\r\n                  <ul>\r\n                    <ng-container *hasRole=\"[_roles.Administrado,_roles.AdministradorGeneral, _roles.AsistenteInformatico, _roles.EspecialistaInformatico, _roles.Evaluador]\">\r\n                      <li nz-menu-item nzMatchRouter>\r\n                        <a routerLink=\"/nec/gestion/integrante\">Plataforma</a>\r\n                      </li>\r\n                    </ng-container>\r\n                    <ng-container *hasRole=\"[_roles.Administrado,_roles.AdministradorGeneral, _roles.AsistenteInformatico, _roles.EspecialistaInformatico, _roles.InspectorTecnico, _roles.Evaluador]\">\r\n                      <li nz-menu-item nzMatchRouter>\r\n                        <a routerLink=\"/nec/gestion/lugar-entrega\">Encuestas</a>\r\n                      </li>\r\n                    </ng-container>\r\n                  </ul>\r\n                </li>\r\n              </ng-container>-->\r\n              <ng-container>\r\n                <li nz-submenu nzOpen nzTitle=\"Configuración\" nzIcon=\"dashboard\">\r\n                  <ul>\r\n                    <ng-container>\r\n                      <li nz-menu-item nzMatchRouter>\r\n                        <a routerLink=\"/sistema/gestion/plataforma\">Plataforma</a>\r\n                      </li>\r\n                    </ng-container>\r\n                    <ng-container>\r\n                      <li nz-menu-item nzMatchRouter>\r\n                        <a routerLink=\"/sistema/gestion/gestor-encuestas\">Encuestas</a>\r\n                      </li>\r\n                    </ng-container>  \r\n                    <ng-container>\r\n                      <li nz-menu-item nzMatchRouter>\r\n                        <a routerLink=\"/sistema/gestion/categorias\">Categorías</a>\r\n                      </li>\r\n                    </ng-container>                    \r\n                  </ul>\r\n                </li>\r\n              </ng-container>\r\n            </ul>\r\n        </nz-sider>\r\n        <nz-layout>\r\n            <!--\r\n            <nz-header>\r\n                <div class=\"app-header\">\r\n                    <div class=\"app-header-title\">\r\n                        PLATAFORMA DE ENCUESTAS\r\n                    </div>\r\n                </div>\r\n            </nz-header>-->\r\n            <nz-content>\r\n                <div class=\"inner-content internal-content\">\r\n                    <router-outlet></router-outlet>\r\n                </div>\r\n            </nz-content>\r\n        </nz-layout>\r\n    </nz-layout>\r\n</div>");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion/gestion-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion/gestion-routing.module.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"), __webpack_require__(/*! ./gestion.component */ "./src/app/modules/sistema/pages/gestion/gestion.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, gestion_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const routes = [
        {
            path: "",
            component: gestion_component_1.GestionComponent
        },
        //{ path: "", redirectTo: "/nec/gestion/perfil", pathMatch: "full" },
        {
            path: "gestor-encuestas",
            component: gestion_component_1.GestionComponent,
            loadChildren: () => new Promise((resolve_1, reject_1) => { Promise.all(/*! AMD require */[__webpack_require__.e(1), __webpack_require__.e(4)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./pages/encuestas/encuestas.module */ "./src/app/modules/sistema/pages/gestion/pages/encuestas/encuestas.module.ts")]; (resolve_1).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_1.bind(this)); }).then((m) => m.EncuestasModule),
        },
        {
            path: "plataforma",
            component: gestion_component_1.GestionComponent,
            loadChildren: () => new Promise((resolve_2, reject_2) => { Promise.all(/*! AMD require */[__webpack_require__.e(2), __webpack_require__.e(12)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./pages/plataforma/plataforma.module */ "./src/app/modules/sistema/pages/gestion/pages/plataforma/plataforma.module.ts")]; (resolve_2).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_2.bind(this)); }).then((m) => m.PlataformaModule),
        },
        {
            path: "categorias",
            component: gestion_component_1.GestionComponent,
            loadChildren: () => new Promise((resolve_3, reject_3) => { __webpack_require__.e(/*! AMD require */ 8).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./pages/categorias/categorias.module */ "./src/app/modules/sistema/pages/gestion/pages/categorias/categorias.module.ts")]; (resolve_3).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_3.bind(this)); }).then((m) => m.CategoriasModule),
        },
    ];
    let HomeRoutingModule = class HomeRoutingModule {
    };
    HomeRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            declarations: [],
            exports: [router_1.RouterModule],
        })
    ], HomeRoutingModule);
    exports.HomeRoutingModule = HomeRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion/gestion.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion/gestion.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-header-title {\r\n  font-size: 24px;\r\n  display: inline-block;\r\n  float: right;\r\n  line-height: initial;\r\n  margin-top: 12px;\r\n}\r\n\r\n.sidebar-logo {\r\n  height: 64px;\r\n  overflow: hidden;\r\n  padding: 15px;\r\n}\r\n\r\n.sidebar-logo a span {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  color: rgba(0, 0, 0, 0.65);\r\n}\r\n\r\nnz-sider {\r\n  overflow: auto;\r\n  height: calc(100vh - 198px);\r\n  position: fixed;\r\n  left: 0;\r\n}\r\n\r\n.app-layout-interno {\r\n  padding-left: 256px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaXN0ZW1hL3BhZ2VzL2dlc3Rpb24vZ2VzdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Npc3RlbWEvcGFnZXMvZ2VzdGlvbi9nZXN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWhlYWRlci10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG5cclxuLnNpZGViYXItbG9nbyB7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLnNpZGViYXItbG9nbyBhIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcclxufVxyXG5cclxubnotc2lkZXIge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE5OHB4KTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLmFwcC1sYXlvdXQtaW50ZXJubyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNTZweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion/gestion.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion/gestion.component.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @cmp/core */ "./src/app/_core/index.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, core_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let GestionComponent = class GestionComponent {
        constructor() {
            this._permisos = core_2.PERMISOS;
            this._roles = core_2.ROLES;
        }
        ngOnInit() {
            //this.nec = JSON.parse(localStorage.getItem('nec'));
        }
    };
    GestionComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "app-gestion",
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./gestion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistema/pages/gestion/gestion.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./gestion.component.css */ "./src/app/modules/sistema/pages/gestion/gestion.component.css")).default]
        })
    ], GestionComponent);
    exports.GestionComponent = GestionComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/sistema/pages/gestion/gestion.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/sistema/pages/gestion/gestion.module.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js"), __webpack_require__(/*! ./gestion.component */ "./src/app/modules/sistema/pages/gestion/gestion.component.ts"), __webpack_require__(/*! ./gestion-routing.module */ "./src/app/modules/sistema/pages/gestion/gestion-routing.module.ts"), __webpack_require__(/*! @app/_shared */ "./src/app/_shared/index.ts"), __webpack_require__(/*! ng-zorro-antd/layout */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-layout.js"), __webpack_require__(/*! ng-zorro-antd/menu */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-menu.js"), __webpack_require__(/*! ng-zorro-antd/progress */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-progress.js"), __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-icon.js"), __webpack_require__(/*! @cmp/core */ "./src/app/_core/index.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, gestion_component_1, gestion_routing_module_1, _shared_1, layout_1, menu_1, progress_1, icon_1, core_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let GestionModule = class GestionModule {
    };
    GestionModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                gestion_routing_module_1.HomeRoutingModule,
                _shared_1.SharedModule,
                layout_1.NzLayoutModule,
                menu_1.NzMenuModule,
                progress_1.NzProgressModule,
                icon_1.NzIconModule,
                core_2.CoreDirectivesModule
            ],
            declarations: [
                gestion_component_1.GestionComponent
            ],
            providers: []
        })
    ], GestionModule);
    exports.GestionModule = GestionModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=11.js.map