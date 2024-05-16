import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/_shared';
//import { HighchartsChartModule } from 'highcharts-angular';
import { CoreComponentsModule, CoreDirectivesModule } from '@cmp/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { GestionComponent } from "./gestion.component";
import { WelcomeRoutingModule } from "./gestion-routing.module";
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { ListadoPrincipalComponent } from './pages/listado-principal/listado-principal.component';
import { VistaEncuestaComponent } from './pages/vista-encuesta/vista-encuesta.component';
import { LlenadoPreguntaComponent } from './pages/llenado-pregunta/llenado-pregunta.component';
import { DemoNgZorroAntdModule } from '@app/_core/ng-zorro-modules';
import { ListadoTodosPorUsuarioComponent } from './pages/listado-todos-por-usuario/listado-todos-por-usuario.component';
import { ResultadoChartComponent } from './pages/resultado-chart/resultado-chart.component';
@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
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
    GestionComponent,
    ListadoPrincipalComponent,
    VistaEncuestaComponent,
    LlenadoPreguntaComponent,
    ListadoTodosPorUsuarioComponent,
    ResultadoChartComponent,
  ],
  providers: []
})
export class GestionModule { }
