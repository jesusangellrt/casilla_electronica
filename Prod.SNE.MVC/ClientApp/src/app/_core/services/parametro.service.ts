import { Injectable } from "@angular/core";
import axios from "axios";
import { environment } from "@cmp/environment";

@Injectable({
    providedIn: "root"
})
export class ParametroService {
    url: string = `${environment.api_target}/api/comun`;

    constructor() { }

    public GetEnumeradoList = filters => {
        return axios
            .post(`${this.url}/GetEnumeradoList`, filters)
            .then(resp => resp.data)
            .catch(err => {
                throw err.data || err;
            });
    };

}
