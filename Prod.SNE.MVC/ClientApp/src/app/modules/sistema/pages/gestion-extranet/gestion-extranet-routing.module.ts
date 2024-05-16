import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GestionExtranetComponent } from "./gestion-extranet.component";

const routes: Routes = [
  {
    path: "",
    component: GestionExtranetComponent
  },
  //{ path: "", redirectTo: "/nec/gestion/perfil", pathMatch: "full" },
  {
    path: "gestor-encuestas-extranet",
    component: GestionExtranetComponent,
    loadChildren: () =>
      import("./pages/encuestas-extranet/encuestas-extranet.module").then(
        (m) => m.EncuestasExtranetModule
      ),
  },
  {
    path: "plataforma-extranet",
    component: GestionExtranetComponent,
    loadChildren: () =>
      import("./pages/plataforma-extranet/plataforma-extranet.module").then(
        (m) => m.PlataformaExtranetModule
      ),
  },
  {
    path: "categorias-extranet",
    component: GestionExtranetComponent,
    loadChildren: () =>
      import("./pages/categorias-extranet/categorias-extranet.module").then(
        (m) => m.CategoriasExtranetModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
