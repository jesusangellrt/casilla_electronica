import { Injectable } from "@angular/core";
import axios from "axios";
import { environment } from "@cmp/environment";

@Injectable({
    providedIn: "root"
})
export class PermisoPorRolService {
    url: string = `${environment.api_target}/api/permiso_por_rol`;

    constructor() { }

    public GetPermisosPorRolList = (filters, Page = 1, pageSize = 10) => {
      const options = { ...filters, Page, pageSize, Order: 'DESC', ColumnName: null };
      return axios
        .post(`${this.url}/GetPermisosPorRolList`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public RegistroPermisoPorRol = (actividad) => {
        return axios
          .post(`${this.url}/RegistroPermisoPorRol`, actividad)
          .then((resp) => resp.data)
          .catch((err) => {
            throw err.data || err;
          });
    };

    public EliminarPermisoPorRol = (actividad) => {
      return axios
        .post(`${this.url}/EliminarPermisoPorRol`, actividad)
        .then((resp) => resp.data)
        .catch((err) => {
          throw err.data || err;
        });
  };

  public GetPermisosPorRolReporte = (filters, Page = 1, pageSize = 10) => {
    const options = { ...filters, Page, pageSize, Order: 'DESC', ColumnName: 'permiso_id' };
    return axios
      //.post(`${this.url}/GetMaestroFichaTecnicaReporte`, options)
      .post(`${this.url}/GetPermisosPorRolReporte`, options)
      .then(resp => resp.data)
      .catch(err => {
          throw err.data || err;
      });
  };

}
