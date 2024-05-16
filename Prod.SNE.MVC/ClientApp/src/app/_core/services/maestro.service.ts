import { Injectable } from "@angular/core";
import axios from "axios";
import { environment } from "@cmp/environment";


@Injectable({
    providedIn: "root"
})
export class MaestroService{
    url: string = `${environment.api_target}/api/maestro`;

    constructor (){}

    public GetMaestroList = (filters, Page = 1, pageSize = 10) => {
        const options = { ...filters, Page, pageSize, Order: 'DESC', ColumnName: null };
        return axios
          .post(`${this.url}/GetList`, options)
          .then(resp => resp.data)
          .catch(err => {
              throw err.data || err;
          });
      };
      
      public Registrar = (maestro) => {
        return axios
          .post(`${this.url}/Registrar`, maestro)
          .then((resp) => resp.data)
          .catch((err) => {
            throw err.data || err;
          });
    };
    public Eliminar = (maestro) => {
        return axios
          .post(`${this.url}/Eliminar`, maestro)
          .then((resp) => resp.data)
          .catch((err) => {
            throw err.data || err;
          });
    };

  
      public GetReporte = (filters, Page = 1, pageSize = 10) => {
        const options = { ...filters, Page, pageSize, Order: 'DESC', ColumnName: 'permiso_id' };
        return axios
          .post(`${this.url}/GetReporte`, options)
          .then(resp => resp.data)
          .catch(err => {
              throw err.data || err;
          });
      };
}