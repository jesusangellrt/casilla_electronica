import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EncuestadoComponent } from "./encuestado.component";
import {AuthGuards} from "@app/_core/guards/auth.guard";
import {ROLES} from "@cmp/core";

const routes: Routes = [
    {
      path: "",
      component: EncuestadoComponent,
    },
    //{ path: "", redirectTo: "/encuestado/welcome", pathMatch: "full" },
    {
      path: "welcome",
      component: EncuestadoComponent,
      loadChildren: () =>
        import("./pages/gestion/gestion.module").then(
          (m) => m.GestionModule
        ),
    }/*,
    {
      path: "plataforma",
      component: EncuestadoComponent,
      loadChildren: () =>
        import("./pages/listado-principal/listado-principal.module").then(
          (m) => m.ListadoPrincipalModule
        ),
    }*/
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [RouterModule]
})
export class EncuestadoRoutingModule { }
