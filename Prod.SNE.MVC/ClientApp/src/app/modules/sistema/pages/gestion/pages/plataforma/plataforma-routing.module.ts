import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlataformaComponent } from "./plataforma.component";

const routes: Routes = [
    { path: "", component:  PlataformaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [RouterModule]
})
export class PlataformaRoutingModule { }