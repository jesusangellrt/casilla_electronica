import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SistemaComponent } from "./sistema.component";
import {AuthGuards} from "@app/_core/guards/auth.guard";
import {ROLES} from "@cmp/core";

const routes: Routes = [
    { path: "", component: SistemaComponent },
    { 
      path: "gestion", 
      loadChildren: () => import('./pages/gestion/gestion.module').then(m => m.GestionModule), 
      canActivate: [AuthGuards],
      data: {
        allowedRoles: [ROLES.Administrado,ROLES.SuperAdministrador]
      }
    },
    { 
      path: "gestion-extranet", 
      loadChildren: () => import('./pages/gestion-extranet/gestion-extranet.module').then(m => m.GestionExtranetModule), 
      canActivate: [AuthGuards],
      data: {
        allowedRoles: [ROLES.AdministradoExtranet]
      }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [RouterModule]
})
export class SistemaRoutingModule { }
