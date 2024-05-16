import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GestionComponent } from "./gestion.component";

const routes: Routes = [
  {
    path: "",
    component: GestionComponent
  },
  //{ path: "", redirectTo: "/nec/gestion/perfil", pathMatch: "full" },
  {
    path: "gestor-encuestas",
    component: GestionComponent,
    loadChildren: () =>
      import("./pages/encuestas/encuestas.module").then(
        (m) => m.EncuestasModule
      ),
  },
  {
    path: "plataforma",
    component: GestionComponent,
    loadChildren: () =>
      import("./pages/plataforma/plataforma.module").then(
        (m) => m.PlataformaModule
      ),
  },
  {
    path: "categorias",
    component: GestionComponent,
    loadChildren: () =>
      import("./pages/categorias/categorias.module").then(
        (m) => m.CategoriasModule
      ),
  },

  
  /*
  {
    path: "formato/:id",
    component: GestionComponent,
    loadChildren: () =>
      import(
        "./pages/convocatoria/pages/formato-gestion/formato-gestion/formato-gestion.module"
      ).then((m) => m.FormatoGestionModule),
  },
  {
    path: "convocatoria/:id/plantilla",
    component: GestionComponent,
    loadChildren: () =>
      import("./pages/convocatoria/pages/plantilla/plantilla.module").then(
        (m) => m.PlantillaModule
      ),
  },
  {
    path: "convocatoria/:id_convocatoria/convocatoriabasesformulario/:id_convocatoria_base",
    component: GestionComponent,
    loadChildren: () =>
    import("./pages/convocatoria/components/convocatoria-bases/components/convocatoria-bases-formulario/convocatoria-bases-formulario.module").then(
      (m) => m.ConvocatoriaBasesFormularioModule
    ),
  },*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
