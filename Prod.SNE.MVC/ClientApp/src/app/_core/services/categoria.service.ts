import { Injectable } from "@angular/core";
import axios from "axios";
import { environment } from "@cmp/environment";
import { ConfiguracionInicialSaveUpdateRequest, EncuestaSaveUpdateRequest } from "../interfaces";
@Injectable({
    providedIn: "root"
})

export class CategoriaService {
    url: string = `${environment.api_target}/api/categoria`;

    constructor() { }
    public _getCategoriaList = () => {
        return axios
        .get(`${this.url}/GetCategoriaList`)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };
    public _getSubCategoriaList = () => {
        return axios
        .get(`${this.url}/GetSubCategoriaList`)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _GetCategoriasMntList = (filters, Page = 1, pageSize = 10,order='DESC') => {
        const options = { ...filters, Page, pageSize, Order: order, ColumnName: 'fecha_registro' };
        return axios
        .post(`${this.url}/GetCategoriasMntList`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _SaveUpdateCategorias = (filters) => {
        const options = { ...filters };
        return axios
        .post(`${this.url}/SaveUpdateCategorias`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };


    public _EnableDisableCategoria = (id_categoria,status) => {
        const options = { 
            id: id_categoria,
            name:'categoria',
            future_status: status
         };
        
        return axios
        .post(`${this.url}/EnableDisableCategoria`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };
    
    public _GetCategoriasExtranetMntList = (filters, Page = 1, pageSize = 10,order='DESC') => {
        const options = { ...filters, Page, pageSize, Order: order, ColumnName: 'fecha_registro' };
        return axios
        .post(`${this.url}/GetCategoriasExtranetMntList`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _EnableDisableCategoriaExtranet = (id_categoria_extranet,status) => {
        const options = { 
            id: id_categoria_extranet,
            name:'categoria',
            future_status: status
         };
        
        return axios
        .post(`${this.url}/EnableDisableCategoriaExtranet`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _SaveUpdateCategoriasExtranet = (filters) => {
        const options = { ...filters };
        return axios
        .post(`${this.url}/SaveUpdateCategoriasExtranet`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _getCategoriaExtranetList = () => {
        return axios
        .get(`${this.url}/GetCategoriaExtranetList`)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _getSubCategoriaExtranetList = () => {
        return axios
        .get(`${this.url}/GetSubCategoriaExtranetList`)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

}
