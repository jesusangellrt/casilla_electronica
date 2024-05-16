import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConfiguracionEncuestaComponent } from "./configuracion-encuesta/configuracion-encuesta.component";
import { VistaEncuestaComponent } from "./vista-encuesta/vista-encuesta.component";
import { EncuestasComponent } from "./encuestas.component";
import { VistaResultadosCifrasComponent } from "./vista-resultados-cifras/vista-resultados-cifras.component";
import { ReEditEncuestaDataComponent } from "./re-edit-encuesta-data/re-edit-encuesta-data.component";

const routes: Routes = [
    { path: "", component:  EncuestasComponent },
    {
        path: "add",
        component: ConfiguracionEncuestaComponent,
    },
    {
        path: "edit/:id",
        component: ConfiguracionEncuestaComponent,
    },
    {
        path: "reedit/:id",
        component: ReEditEncuestaDataComponent,
    },
    {
        path: "view/:id",
        component: VistaEncuestaComponent,
    },
    {
        path: "results/:id",
        component: VistaResultadosCifrasComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [RouterModule]
})
export class EncuestasRoutingModule { }