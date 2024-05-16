import { NgModule, APP_INITIALIZER } from "@angular/core";
import { SharedModule } from "@app/_shared";
import { RegisterInterceptors } from "./interceptors/http-settings";
import { LoadingBarRouterModule } from "@ngx-loading-bar/router";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpClientInterceptor } from "./interceptors/http-client.interceptor";
import * as services from "./services";
const setAxiosInterceptor = () => {
  return () => RegisterInterceptors();
};

@NgModule({
  imports: [LoadingBarRouterModule, SharedModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: setAxiosInterceptor,
      deps: [],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientInterceptor,
      multi: true,
    },
    services.AlertService,
    services.ComunService,
    services.PersonaService
  ],
  exports: [LoadingBarRouterModule],
})
export class CoreModule { }
