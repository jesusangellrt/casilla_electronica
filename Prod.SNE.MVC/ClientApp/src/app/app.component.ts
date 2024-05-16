import { Component, ElementRef } from "@angular/core";
import {AuthService, ROLES} from "@cmp/core";
import { Location } from '@angular/common';
import {
    ActivatedRoute,
    Router,
    NavigationEnd
} from "@angular/router";
import { environment } from "@cmp/environment";
@Component({
    selector: "app-cmp",
    templateUrl: "./app.component.html",
    styleUrls: []
})
export class AppComponent {
    appInfo = { };
    menuOptions = [];
    user: any;
    userFullname: string = "";
    breadcrumb: any;
    _environment: any;
    loadingBarColor = "#c92329";
    roles: Array<any> = [];
    role: any;
    loginPath: string;

    config_roles:any;
    esEncuestadoExtranet: boolean=false;
    
    constructor(private location: Location, private _authService: AuthService, private route: ActivatedRoute, private router: Router, private elementRef: ElementRef) {
      this.setUserData();
      this.user = _authService.GetUser();
      this.config_roles = this._authService.GetConfig().Roles;
      this.buildUserFullname();
      this._environment = environment;
      let role = localStorage.getItem('current_role');
      if (role) {
        let orole = JSON.parse(role);
        if ( Number(this.config_roles.AdministradoIden)==orole.IdRol || Number(this.config_roles.EncuestadoIden)==orole.IdRol || Number(this.config_roles.SuperAdministradorIden)==orole.IdRol || Number(this.config_roles.AdministradoExtranetIden)==orole.IdRol || Number(this.config_roles.EncuestadoExtranetIden)==orole.IdRol) {
          this.role = orole;
          _authService.SetCurrentRole(orole);
          this.redireccionar(orole);
        }
      }
    }

    ngOnInit(): void {
      const a = this.user;
      this.getRole();
    }

    
    handleOnEmitDataToHeader=(e)=>{
    }

    handleChangeRol = (role) => {
      this.role = role;
      this._authService.SetCurrentRole(role);
      localStorage.setItem('current_role', JSON.stringify(role));
      this.redireccionar(role, true);
    };

    getRole = () => {      
      if (this.user && this.user.Usuario && this.user.Usuario && this.user.RolesUsuario) {
        if (!this.role && this.user.RolesUsuario[0]) {
          localStorage.setItem('current_role', JSON.stringify(this.user.RolesUsuario[0]));
          this._authService.SetCurrentRole(this.user.RolesUsuario[0]);
          this.role = this.user.RolesUsuario[0];
          this.redireccionar(this.role);
        }
      } else {
        this.router.navigate(['/']);
      }
    };
    
    redireccionar = (role, cambio_manual: boolean = false) => {      
      let ruta: string = this.location.path();
      let secciones: Array<string> = ruta.split('/'); 
      if (cambio_manual) {
        window.location.href = '/';
      }else{
        if (role.IdRol == Number(this.config_roles.AdministradoIden) || role.IdRol == Number(this.config_roles.SuperAdministradorIden) || role.IdRol == Number(this.config_roles.AdministradoExtranetIden)) {
          if (secciones && secciones.length > 1 && secciones[1] == 'sistema') {
            this.router.navigate([ruta]);          
          } else {
            this.router.navigate(['/sistema']);
          }
        }
        else if(role.IdRol == Number(this.config_roles.EncuestadoIden)){
          if (secciones && secciones.length > 1 && secciones[1] == 'encuestado') {
            this.router.navigate([ruta]);
          } else {
            this.router.navigate(['/encuestado']);
          }
        }else if(role.IdRol == Number(this.config_roles.EncuestadoExtranetIden)){
          this.esEncuestadoExtranet = true;
          this.router.navigate(['/encuestado-ext']);
        }
        else {
          this.router.navigate(['/']);
        } 
      }
    };

    subsCribeNavigationEnd = () => {
        this.router.events.subscribe(val => {
            if (val instanceof NavigationEnd) {
                let route = this.route.firstChild;
                while (route.firstChild) {
                    route = route.firstChild;
                }
                route.data.subscribe(x => {
                    this.breadcrumb = x.breadcrumb;
                });
            }
        });
    };

    buildUserFullname = () => {
      this.userFullname = '';
      if (this.user && this.user.Usuario) {
        let user_name= `${ this.user.Usuario.ApellidoPaterno ? this.user.Usuario.ApellidoPaterno: '' }, ${ this.user.Usuario.Nombres ? this.user.Usuario.Nombres: '' }`;
        this.userFullname = `${ this.user.Usuario.ApellidoPaterno ? this.user.Usuario.ApellidoPaterno: '' }, ${ this.user.Usuario.Nombres ? this.user.Usuario.Nombres: '' }`;
        /*if(user_name.includes('EULER LANNE') || user_name.includes('JOSE ARTURO') || user_name.includes('DILAYDA MERCEDES ESTELA')){
          localStorage.setItem("show_SuperEdit", '1');
        }*/
        let role = localStorage.getItem('current_role');
        if (role) {
          let orole = JSON.parse(role);
          if (Number(this.config_roles.SuperAdministradorIden)==orole.IdRol) {
            localStorage.setItem("show_SuperEdit", '1');
          }
        }

      }else{
        localStorage.setItem("show_SuperEdit",'0');
      }
    };

    private setUserData = () => {
        const userToken = this.elementRef.nativeElement.getAttribute('user-data');
        const configToken = this.elementRef.nativeElement.getAttribute('config-data');
        const configFile = this.elementRef.nativeElement.getAttribute('config-file');
        const permissionToken = this.elementRef.nativeElement.getAttribute('per-data');
        
        this.loginPath = this.elementRef.nativeElement.getAttribute('login-path');

        this._authService.setUserToken(userToken);
        this._authService.setConfigToken(configToken);
        this._authService.setConfigFile(configFile);
        this._authService.setUserPermissions(permissionToken);
    }
}
