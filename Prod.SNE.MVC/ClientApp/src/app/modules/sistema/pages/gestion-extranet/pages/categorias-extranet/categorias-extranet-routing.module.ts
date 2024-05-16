import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriasExtranetComponent } from "./categorias-extranet.component";

const routes: Routes = [
    { path: "", component:  CategoriasExtranetComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [RouterModule]
})
export class CategoriasExtranetRoutingModule { }