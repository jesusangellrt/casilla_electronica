import { Injectable } from "@angular/core";
import axios from "axios";
import { environment } from "@cmp/environment";
@Injectable({
    providedIn: "root"
})

export class EncuestasConfigurarService {
    url: string = `${environment.api_target}/api/encuestaConfigurar`;

    constructor() { }
    public GetListEncuestados = (filters, Page = 1, pageSize = 10,order='DESC') => {
        const options = { ...filters, Page, pageSize, Order: order, ColumnName: 'fecha_registro' };
        return axios
        .post(`${this.url}/GetListEncuestados`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public GetListEncuestadosExtranet = (filters, Page = 1, pageSize = 10,order='DESC') => {
        const options = { ...filters, Page, pageSize, Order: order, ColumnName: 'fecha_registro' };
        return axios
        .post(`${this.url}/GetListEncuestadosExtranet`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

}
