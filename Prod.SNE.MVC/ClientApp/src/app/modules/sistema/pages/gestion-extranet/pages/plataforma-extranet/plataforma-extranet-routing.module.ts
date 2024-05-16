import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlataformaExtranetComponent } from "./plataforma-extranet.component";

const routes: Routes = [
    { path: "", component:  PlataformaExtranetComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [RouterModule]
})

export class PlataformaExtranetRoutingModule { }