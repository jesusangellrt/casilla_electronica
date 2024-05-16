import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConfiguracionEncuestaExtranetComponent } from "./configuracion-encuesta-ext/configuracion-encuesta-extranet.component";
import { VistaEncuestaExtranetComponent } from "./vista-encuesta-extranet/vista-encuesta-extranet.component";
import { EncuestasExtranetComponent } from "./encuestas-extranet.component";
import { VistaResultadosCifrasExtranetComponent } from "./vista-resultados-cifras-extranet/vista-resultados-cifras-extranet.component";
import { ReEditEncuestaDataExtranetComponent } from "./re-edit-encuesta-data-extranet/re-edit-encuesta-data-extranet.component";

const routes: Routes = [
    { path: "", component:  EncuestasExtranetComponent },
    {
        path: "add",
        component: ConfiguracionEncuestaExtranetComponent,
    },
    {
        path: "edit/:id",
        component: ConfiguracionEncuestaExtranetComponent,
    },
    {
        path: "reedit/:id",
        component: ReEditEncuestaDataExtranetComponent,
    },
    {
        path: "view/:id",
        component: VistaEncuestaExtranetComponent,
    },
    {
        path: "results/:id",
        component: VistaResultadosCifrasExtranetComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [RouterModule]
})
export class EncuestasExtranetRoutingModule { }