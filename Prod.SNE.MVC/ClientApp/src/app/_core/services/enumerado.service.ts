import { Injectable } from "@angular/core";
import axios from "axios";
import { environment } from "@cmp/environment";

@Injectable({
    providedIn: "root"
})
export class EnumeradoService {
    url: string = `${environment.api_target}/api/enumerado`;

    constructor() { }

    public GetEnumeradoList = (filters, Page = 1, pageSize = 10) => {
      const options = { ...filters, Page, pageSize, Order: 'DESC', ColumnName: 'fecha_creacion' };
      return axios
        .post(`${this.url}/GetEnumeradoList`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public RegistroEnumerado = (filtro) => {
        return axios
          .post(`${this.url}/RegistroEnumerado`, filtro)
          .then((resp) => resp.data)
          .catch((err) => {
            throw err.data || err;
          });
      };
}
