import { Injectable } from "@angular/core";
import axios from "axios";
import { environment } from "@cmp/environment";


@Injectable({
    providedIn: "root"
})
export class EquipoRolSeguridadService{
    url: string = `${environment.api_target}/api/equipo_rol_seguridad`;

    constructor (){}

    public GetEquipoRolSeguridadList = (filters, Page = 1, pageSize = 10) => {
        const options = { ...filters, Page, pageSize, Order: 'DESC', ColumnName: null };
        return axios
          .post(`${this.url}/GetEquipoRolSeguridadList`, options)
          .then(resp => resp.data)
          .catch(err => {
              throw err.data || err;
          });
      };
      
      public RegistroEquipoRolSeguridad = (actividad) => {
        return axios
          .post(`${this.url}/RegistroEquipoRolSeguridad`, actividad)
          .then((resp) => resp.data)
          .catch((err) => {
            throw err.data || err;
          });
    };
    public EliminarEquipoRolSeguridad = (actividad) => {
        return axios
          .post(`${this.url}/EliminarEquipoRolSeguridad`, actividad)
          .then((resp) => resp.data)
          .catch((err) => {
            throw err.data || err;
          });
    };

    getEquipoRolSeguridadById = (filters) => {
        const options = { ...filters };
        return axios
          .post(`${this.url}/GetEquipoRolSeguridadById`, options)
          .then(resp => resp.data)
          .catch(err => {
              throw err.data || err;
          });
      };
      public GetEquipoRolSeguridadReporte = (filters, Page = 1, pageSize = 10) => {
        const options = { ...filters, Page, pageSize, Order: 'DESC', ColumnName: 'permiso_id' };
        return axios
          //.post(`${this.url}/GetMaestroFichaTecnicaReporte`, options)
          .post(`${this.url}/GetEquipoRolSeguridadReporte`, options)
          .then(resp => resp.data)
          .catch(err => {
              throw err.data || err;
          });
      };
}