import { Injectable } from "@angular/core";
import axios from "axios";
import { environment } from "@cmp/environment";
import { ConfiguracionInicialSaveUpdateRequest } from "../interfaces";
@Injectable({
    providedIn: "root"
})

export class SisEnumeradoService {
    url: string = `${environment.api_target}/api/sis_enumerado`;
    constructor() { }

    public GetEnumeradoByTipoEnumerado = (_id_tipo_enumerado: number) => {
        let filtro = { id_tipo_enumerado: _id_tipo_enumerado };
        return axios
            .post(`${this.url}/GetEnumeradoByTipoEnumerado`, filtro)
            .then((resp) => resp.data)
            .catch((err) => {
            throw err.data || err;
            });
    };
}
