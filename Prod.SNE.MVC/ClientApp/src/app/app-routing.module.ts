import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {AppPageNotFoundComponent, ROLES} from "@cmp/core";
import { AuthGuards } from "@app/_core/guards/auth.guard";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full', },
    {
        path: "sistema",
        loadChildren: "./modules/sistema/sistema.module#SistemaModule",
        canActivate: [AuthGuards],
        data: {
            breadcrumb: [{ label: "Sistema", link: "/sistema", active: true }],
            allowedRoles: [ROLES.Administrado, ROLES.AdministradoExtranet]
        }
    },
    {
        path: "encuestado",
        loadChildren: "./modules/encuestado/encuestado.module#EncuestadoModule",
        canActivate: [AuthGuards],
        data: {
            breadcrumb: [{ label: "Encuestado", link: "/encuestado", active: true }],
            allowedRoles: [ROLES.Encuestado]
        }   
    },
    {
        path: "encuestado-ext",
        loadChildren: "./modules/encuestado-ext/encuestado-ext.module#EncuestadoExtModule",
        canActivate: [AuthGuards],
        data: {
            breadcrumb: [{ label: "EncuestadoExtranet", link: "/encuestado-ext", active: true }],
            allowedRoles: [ROLES.EncuestadoExtranet]
        }   
    },
    /*
    {
      path: "programa",
      loadChildren: "./modules/programa/programa.module#ProgramaModule",
      canActivate: [AuthGuards],
      data: {
        breadcrumb: [{ label: "PROGRAMA", link: "/programa", active: true }],
        allowedRoles: [ROLES.EspecialistaPrograma, 
          ROLES.AdministradorGeneralPrograma, ROLES.AsistenteAdministrativoPrograma, 
          ROLES.JefeUnidadPrograma, ROLES.EspecialistaFichaTecnicaPrograma,
          ROLES.EspecialistaExpedientePrograma]
      },
    },*/
    {
        path: "**",
        component: AppPageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
