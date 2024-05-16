import {LOCALE_ID, NgModule} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "@app/_shared";
import { ModalModule } from "ngx-bootstrap/modal";
import { CoreModule, CoreComponentsModule } from "@cmp/core";

/** config angular i18n **/
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
//import en from '@angular/common/locales/en';
import {es_ES, NzI18nService, NZ_DATE_LOCALE, NZ_I18N} from 'ng-zorro-antd';
import { es as esDateLocale} from 'date-fns/locale';

/** config angular i18n **/

registerLocaleData(es);

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    CoreComponentsModule,
    CoreModule,
    ModalModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: NZ_I18N, useValue: es_ES },
    //{ provide: NZ_DATE_LOCALE, useValue: esDateLocale },
    //{ provide: NZ_I18N, useValue: es_ES },
  ],
  entryComponents: []
})
export class AppModule {}
