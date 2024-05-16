import { Injectable } from "@angular/core";
import {IPERMISO} from "@app/_core";

const utf8_to_b64 = str => {
    return window.btoa(unescape(encodeURIComponent(str)));
};

const b64_to_utf8 = str => {
    return decodeURIComponent(escape(window.atob(str)));
};

declare global {
    interface Window {
        $$userinfo: any;
        $$configinfo: any;
    }
}

@Injectable({
    providedIn: "root"
})
export class AuthService {

    private user: any = null;
    private config: any = null;
    private file: any = null;
    private role: { IdRol?: number, DescRol?: string } = null;
    private permissions: Array<IPERMISO> = [];
    private roles: Array<{ IdRol?: number, DescRol?: string }> = [];
    
    constructor() {

    }

    public setUserToken = (token: string) => {
        const decoded_userdata = b64_to_utf8(token);
        this.user = JSON.parse(decoded_userdata);
    }

    public setConfigToken = (token: string) => {
        const decoded_configdata = b64_to_utf8(token);
        this.config = JSON.parse(decoded_configdata);
    }

    public setConfigFile = (cadena: string) => {
        const decoded_configdata = b64_to_utf8(cadena);
        this.file = JSON.parse(decoded_configdata);
    }
    
    public setUserPermissions = (token: string) => {
      const decoded_userdata = b64_to_utf8(token);
      this.permissions = JSON.parse(decoded_userdata);
    };

    public GetUser = () => this.user;
    public GetConfig = () => this.config;
    public GetConfigFile = () => this.file;
    public GetPermissions = () => this.permissions;
    public UserHasPermission = (permissions: Array<string>) => {
      return permissions.filter(x => {
          return this.permissions.filter(m => x != undefined && m.codigo.toUpperCase() == x.toUpperCase()).length > 0;        
      }).length > 0;
    };
    
    public UserHasRole = (role: Array<string>) => {
      return role.filter(x => {
        return x == this.role.DescRol
      }).length > 0;
    };
    
    public SetCurrentRole = (role: { IdRol?: number, DescRol?: string }) =>  {
      this.role = role;
      return this;
    };
    
    public GetCurrentRole = () => this.role;
}
