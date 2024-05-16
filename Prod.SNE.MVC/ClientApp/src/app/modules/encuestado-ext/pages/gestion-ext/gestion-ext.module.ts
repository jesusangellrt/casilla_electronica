import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/_shared';
//import { HighchartsChartModule } from 'highcharts-angular';
import { CoreComponentsModule, CoreDirectivesModule } from '@cmp/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { GestionExtComponent } from "./gestion-ext.component";
import { WelcomeRoutingExtModule } from "./gestion-ext-routing.module";
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { DemoNgZorroAntdModule } from '@app/_core/ng-zorro-modules';
import { ListadoPrincipalExtComponent } from './pages/listado-principal-ext/listado-principal-ext.component';
import { ListadoTodosPorUsuarioExtComponent } from './pages/listado-todos-por-usuario-ext/listado-todos-por-usuario-ext.component';
import { VistaEncuestaExtComponent } from './pages/vista-encuesta-ext/vista-encuesta-ext.component';
import { LlenadoPreguntaExtComponent } from './pages/llenado-pregunta-ext/llenado-pregunta-ext.component';
import { LlenadoPreguntaSeccionExtComponent } from './pages/llenado-pregunta-seccion-ext/llenado-pregunta-seccion-ext.component';


@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingExtModule,
    SharedModule, 
    DemoNgZorroAntdModule,
    //HighchartsChartModule,
    CoreComponentsModule,
    NgxSpinnerModule,
    CKEditorModule,
    ReactiveFormsModule,
    CoreDirectivesModule,
    NgxYoutubePlayerModule.forRoot() 
  ],
  declarations: [
    GestionExtComponent,
    ListadoPrincipalExtComponent,
    ListadoTodosPorUsuarioExtComponent,
    VistaEncuestaExtComponent,
    LlenadoPreguntaExtComponent,
    LlenadoPreguntaSeccionExtComponent
  ],
  providers: []
})
export class GestionExtModule { }
