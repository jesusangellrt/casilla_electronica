import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GestionExtComponent } from "./gestion-ext.component";

const routes: Routes = [
  {
    path: "",
    component: GestionExtComponent
  },
  /*
  {
    path: "plataforma",
    component: GestionComponent,
    loadChildren: () =>
      import("./pages/plataforma/plataforma.module").then(
        (m) => m.PlataformaModule
      ),
  },*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class WelcomeRoutingExtModule {}
