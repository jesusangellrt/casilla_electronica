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
import { EncuestasExtranetRoutingModule } from './encuestas-extranet-routing.module';
import { EncuestasExtranetComponent } from './encuestas-extranet.component';
import { ConfiguracionEncuestaExtranetComponent } from './configuracion-encuesta-ext/configuracion-encuesta-extranet.component';
import { DatosEncuestaExtranetComponent } from './configuracion-encuesta-ext/components/datos-encuesta-extranet/datos-encuesta-extranet.component';
import { PreguntasEncuestaExtranetComponent } from './configuracion-encuesta-ext/components/preguntas-encuesta-extranet/preguntas-encuesta-extranet.component';
import { EncuestadosEncuestaExtranetComponent } from './configuracion-encuesta-ext/components/encuestados-encuesta-extranet/encuestados-encuesta-extranet.component';
import { ConfigurarEncuestadosFormularioExtComponent } from './configuracion-encuesta-ext/components/configurar-encuestados-formulario-ext/configurar-encuestados-formulario-ext.component';
import { ModalRegistroPreguntaExtranetComponent } from './configuracion-encuesta-ext/components/modal-registro-pregunta-ext/modal-registro-pregunta-extranet.component';
import { ModalRegistroColumnaExtComponent } from './configuracion-encuesta-ext/components/modal-registro-pregunta-ext/modal-registro-columna-ext/modal-registro-columna-ext.component';
import { VistaEncuestaExtranetComponent } from './vista-encuesta-extranet/vista-encuesta-extranet.component';
import { DatosEncuestaViewExtranetComponent } from './vista-encuesta-extranet/components/datos-encuesta-view-extranet/datos-encuesta-view-extranet.component';
import { PreguntasEncuestaViewExtranetComponent } from './vista-encuesta-extranet/components/preguntas-encuesta-view-extranet/preguntas-encuesta-view-extranet.component';
import { EncuestadosEncuestaViewExtranetComponent } from './vista-encuesta-extranet/components/encuestados-encuesta-view-extranet/encuestados-encuesta-view-extranet.component';
import { ModalVistaPreguntaExtranetComponent } from './vista-encuesta-extranet/components/modal-vista-pregunta-extranet/modal-vista-pregunta-extranet.component';

import { VistaResultadosCifrasExtranetComponent } from './vista-resultados-cifras-extranet/vista-resultados-cifras-extranet.component';
import { ReEditEncuestaDataExtranetComponent } from './re-edit-encuesta-data-extranet/re-edit-encuesta-data-extranet.component';
import { ReDatosEncuestaExtranetComponent } from './re-edit-encuesta-data-extranet/components/re-datos-encuesta-extranet/re-datos-encuesta-extranet.component';
import { ReModalRegistroPreguntaExtranetComponent } from './re-edit-encuesta-data-extranet/components/re-modal-registro-pregunta-extranet/re-modal-registro-pregunta-extranet.component';
import { RePreguntasEncuestaExtranetComponent } from './re-edit-encuesta-data-extranet/components/re-preguntas-encuesta-extranet/re-preguntas-encuesta-extranet.component';
import { SubirResultadosExtranetComponent } from './subir-resultados-extranet/subir-resultados-extranet.component';
import { AvanceResultadosExtranetComponent} from './avance-resultados-extranet/avance-resultados-extranet.component';
import { ModalReordenarPreguntaExtranetComponent } from './configuracion-encuesta-ext/components/modal-reordenar-pregunta-ext/modal-reordenar-pregunta-ext.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { SeccionesPreguntaExtranetComponent } from './configuracion-encuesta-ext/components/secciones-pregunta-extranet/secciones-pregunta-extranet.component';
import { ModalRegistroSeccionExtranetComponent } from './configuracion-encuesta-ext/components/modal-registro-seccion-ext/modal-registro-seccion-extranet.component';
import { ModalReordenarSeccionExtranetComponent } from './configuracion-encuesta-ext/components/modal-reordenar-seccion-ext/modal-reordenar-seccion-ext.component';
import { NotificacionesExtranetComponent } from './configuracion-encuesta-ext/components/notificaciones-extranet/notificaciones-extranet.component';
import { ModalRegistroNotificacionExtranetComponent } from './configuracion-encuesta-ext/components/modal-registro-notificacion-ext/modal-registro-notificacion-extranet.component';
import { ModalReordenarPreguntaSecExtranetComponent } from './configuracion-encuesta-ext/components/modal-reordenar-pregunta-sec-ext/modal-reordenar-pregunta-sec-ext.component';
import { SeccionesPreguntaViewExtranetComponent } from './vista-encuesta-extranet/components/secciones-pregunta-view-extranet/secciones-pregunta-view-extranet.component';
import { NotificacionesViewExtranetComponent } from './vista-encuesta-extranet/components/notificaciones-view-extranet/notificaciones-view-extranet.component';


@NgModule({
  imports: [
    CommonModule,
    EncuestasExtranetRoutingModule,
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
    EncuestasExtranetComponent,
    ConfiguracionEncuestaExtranetComponent,
    DatosEncuestaExtranetComponent, 
    PreguntasEncuestaExtranetComponent, 
    ModalRegistroPreguntaExtranetComponent,
    ModalRegistroColumnaExtComponent,
    EncuestadosEncuestaExtranetComponent,
    ConfigurarEncuestadosFormularioExtComponent,    
    
    VistaEncuestaExtranetComponent,
    DatosEncuestaViewExtranetComponent,
    PreguntasEncuestaViewExtranetComponent,
    EncuestadosEncuestaViewExtranetComponent,
    ModalVistaPreguntaExtranetComponent,
    SubirResultadosExtranetComponent,
    AvanceResultadosExtranetComponent,
    VistaResultadosCifrasExtranetComponent,
    ReEditEncuestaDataExtranetComponent,
    ReDatosEncuestaExtranetComponent,
    ReModalRegistroPreguntaExtranetComponent,
    RePreguntasEncuestaExtranetComponent,
    ModalReordenarPreguntaExtranetComponent,
    SeccionesPreguntaExtranetComponent,
    ModalRegistroSeccionExtranetComponent,
    ModalReordenarSeccionExtranetComponent,
    NotificacionesExtranetComponent,
    ModalRegistroNotificacionExtranetComponent,
    ModalReordenarPreguntaSecExtranetComponent,
    SeccionesPreguntaViewExtranetComponent,
    NotificacionesViewExtranetComponent],
  entryComponents:[]
})
export class EncuestasExtranetModule { }
