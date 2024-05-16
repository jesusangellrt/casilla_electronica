import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '@cmp/core';

@Injectable({ providedIn: 'root' })
export class AuthGuards implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthService,
  ) { 
  }
  config_roles
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.GetUser();
    const allowed_rol=this.authenticationService.GetConfig().Roles;

    if (currentUser) {
      if (route.data.allowedRoles[0]=="Administrado" || route.data.allowedRoles[0]=="SuperAdministrador" || route.data.allowedRoles[0]=="AdministradoExtranet") {
        
        let _existe_coincidencias = currentUser.RolesUsuario.filter(user_role=> user_role.IdRol==Number(allowed_rol.AdministradoIden) || user_role.IdRol==Number(allowed_rol.SuperAdministradorIden) || user_role.IdRol==Number(allowed_rol.AdministradoExtranetIden));
        if (_existe_coincidencias.length==0) {
          this.router.navigate(['/']);
          return false;
        }
      }else if(route.data.allowedRoles[0]=="Encuestado"){
        let _existe_coincidencias = currentUser.RolesUsuario.filter(user_role => user_role.IdRol==Number(allowed_rol.EncuestadoIden));
        if (_existe_coincidencias.length==0) {
          this.router.navigate(['/']);
          return false;
        }
      }else if(route.data.allowedRoles[0]=="EncuestadoExtranet"){
        let _existe_coincidencias = currentUser.RolesUsuario.filter(user_role => user_role.IdRol==Number(allowed_rol.EncuestadoExtranetIden));
        if (_existe_coincidencias.length==0) {
          this.router.navigate(['/']);
          return false;
        }
      }else{
        return false;
      }
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}


