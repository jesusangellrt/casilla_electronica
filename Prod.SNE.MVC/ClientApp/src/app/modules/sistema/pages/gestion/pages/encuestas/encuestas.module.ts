import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/_shared';
import { NzButtonModule, NzFormModule, NzMessageModule, NzInputNumberModule, NzDatePickerModule, NzTabsModule, NzCheckboxModule, NzCollapseModule } from 'ng-zorro-antd';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CoreComponentsModule, CoreDirectivesModule } from '@cmp/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { environment } from "@cmp/environment";
import { EncuestasRoutingModule } from './encuestas-routing.module';
import { EncuestasComponent } from './encuestas.component';
import { ConfiguracionEncuestaComponent } from './configuracion-encuesta/configuracion-encuesta.component';
import { DatosEncuestaComponent } from './configuracion-encuesta/components/datos-encuesta/datos-encuesta.component';
import { PreguntasEncuestaComponent } from './configuracion-encuesta/components/preguntas-encuesta/preguntas-encuesta.component';
import { EncuestadosEncuestaComponent } from './configuracion-encuesta/components/encuestados-encuesta/encuestados-encuesta.component';
import { ConfigurarEncuestadosFormularioComponent } from './configuracion-encuesta/components/configurar-encuestados-formulario/configurar-encuestados-formulario.component';
import { ModalRegistroPreguntaComponent } from './configuracion-encuesta/components/modal-registro-pregunta/modal-registro-pregunta.component';
import { ModalRegistroColumnaComponent } from './configuracion-encuesta/components/modal-registro-pregunta/modal-registro-columna/modal-registro-columna.component';
import { VistaEncuestaComponent } from './vista-encuesta/vista-encuesta.component';
import { DatosEncuestaViewComponent } from './vista-encuesta/components/datos-encuesta-view/datos-encuesta-view.component';
import { PreguntasEncuestaViewComponent } from './vista-encuesta/components/preguntas-encuesta-view/preguntas-encuesta-view.component';
import { EncuestadosEncuestaViewComponent } from './vista-encuesta/components/encuestados-encuesta-view/encuestados-encuesta-view.component';
import { ModalVistaPreguntaComponent } from './vista-encuesta/components/modal-vista-pregunta/modal-vista-pregunta.component';
import { SubirResultadosComponent } from './subir-resultados/subir-resultados.component';
import { VistaResultadosCifrasComponent } from './vista-resultados-cifras/vista-resultados-cifras.component';
import { ReEditEncuestaDataComponent } from './re-edit-encuesta-data/re-edit-encuesta-data.component';
import { ReDatosEncuestaComponent } from './re-edit-encuesta-data/components/re-datos-encuesta/re-datos-encuesta.component';
import { ReModalRegistroPreguntaComponent } from './re-edit-encuesta-data/components/re-modal-registro-pregunta/re-modal-registro-pregunta.component';
import { RePreguntasEncuestaComponent } from './re-edit-encuesta-data/components/re-preguntas-encuesta/re-preguntas-encuesta.component';
import { ModalReordenarPreguntaComponent } from './configuracion-encuesta/components/modal-reordenar-pregunta/modal-reordenar-pregunta.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    EncuestasRoutingModule,
    SharedModule, 
    NzButtonModule,
    NzDatePickerModule,
    NzModalModule,
    NzNotificationModule,
    NzTableModule,
    NzSelectModule,
    NzInputModule,
    NzIconModule,
    NzCollapseModule,
    CoreComponentsModule,
    NgxSpinnerModule,
    NzFormModule,
    NzCheckboxModule,
    CKEditorModule,
    NzTabsModule,
    ReactiveFormsModule,
    NzMessageModule,
    NzInputNumberModule,
    CoreDirectivesModule,
    DragDropModule 
  ],
  declarations: [
    EncuestasComponent, 
    ConfiguracionEncuestaComponent, DatosEncuestaComponent, 
    PreguntasEncuestaComponent, EncuestadosEncuestaComponent,
    ConfigurarEncuestadosFormularioComponent,
    ModalRegistroPreguntaComponent,
    ModalRegistroColumnaComponent,
    VistaEncuestaComponent,
    DatosEncuestaViewComponent,
    PreguntasEncuestaViewComponent,
    EncuestadosEncuestaViewComponent,
    ModalVistaPreguntaComponent,
    SubirResultadosComponent,
    VistaResultadosCifrasComponent,
    ReEditEncuestaDataComponent,
    ReDatosEncuestaComponent,
    ReModalRegistroPreguntaComponent,
    RePreguntasEncuestaComponent,
    ModalReordenarPreguntaComponent
  ],
  entryComponents:[]
})
export class EncuestasModule { }
