import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GestionComponent } from "./gestion.component";

const routes: Routes = [
  {
    path: "",
    component: GestionComponent
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
export class WelcomeRoutingModule {}
