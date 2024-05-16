import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EncuestadoExtComponent } from "./encuestado-ext.component";
import {AuthGuards} from "@app/_core/guards/auth.guard";
import {ROLES} from "@cmp/core";

const routes: Routes = [
    {
      path: "",
      component: EncuestadoExtComponent,
    },
    { path: "", redirectTo: "/encuestado-ext/welcome", pathMatch: "full" },
    {
      path: "welcome",
      component: EncuestadoExtComponent,
      loadChildren: () =>
        import("./pages/gestion-ext/gestion-ext.module").then(
          (m) => m.GestionExtModule
        ),
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [RouterModule]
})
export class EncuestadoExtRoutingModule { }
