import { Injectable } from "@angular/core";
import axios from "axios";
import { environment } from "@cmp/environment";
import { ConfiguracionInicialSaveUpdateRequest } from "../interfaces";
@Injectable({
    providedIn: "root"
})

export class ConfiguracionInicialService {
    url: string = `${environment.api_target}/api/configuracion_inicial`;

    constructor() { }

    public GetActualConfiguracion = (id_tipo_encuesta: number) => {
      const options = { params: { id_tipo_encuesta} };
      return axios
        .get(`${this.url}/GetActualConfiguracion`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public SaveUpdateConfiguracion = (filtro:ConfiguracionInicialSaveUpdateRequest) => {
      return axios
        .post(`${this.url}/SaveUpdateConfiguracion`, filtro)
        .then((resp) => resp.data)
        .catch((err) => {
          throw err.data || err;
        });
    };
}
