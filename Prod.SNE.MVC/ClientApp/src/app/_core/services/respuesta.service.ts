import { Injectable } from "@angular/core";
import axios from "axios";
import { environment } from "@cmp/environment";
import { SaveRespuestaAnonimaRequest } from "../interfaces";
@Injectable({
    providedIn: "root"
})

export class RespuestaService {
    url: string = `${environment.api_target}/api/respuesta`;

    constructor() { }

    //#region PARA ENCUESTADOS
    public _GetPreguntaActualEncuesta = (_id_encuesta: number) => {
        const options = { id_encuesta: _id_encuesta, user_name: '',dni_trabajador:'' };
        return axios
        .post(`${this.url}/GetPreguntaActualEncuesta`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _GetRespuestasByEncuestaAndEncuestado = (_id_encuesta: number, _id_tipo_encuesta: number) => {
        const options = { id_encuesta: _id_encuesta, user_name: '',dni_trabajador:'',id_tipo_encuesta:_id_tipo_encuesta };
        return axios
        .post(`${this.url}/GetRespuestasByEncuestaAndEncuestado`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _UpdatePreguntaActualEncuesta = (_id_encuesta: number,_nro_pregunta:number,_id_pregunta,json_respuesta,_id_estado:number, json_paginado, finalizar=false) => {
        const options = { id_encuesta: _id_encuesta, nro_pregunta:_nro_pregunta, 
            id_pregunta: _id_pregunta,
            json_rpta: json_respuesta,
            id_estado:_id_estado, user_name: '',dni_trabajador:'', sexo:'', edad:0,
            json_paginador: json_paginado,
            //finalizar_encuesta:finalizar
        };
        return axios
        .post(`${this.url}/UpdatePreguntaActualEncuesta`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _GetDesplegableInstitucional = (_id_tabla: number) => {
        const options = { id_tabla: _id_tabla};
        return axios
        .post(`${this.url}/GetDesplegableInstitucional`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _SaveAndFinishEncuestaAnonima = (req: SaveRespuestaAnonimaRequest) => {
        return axios
        .post(`${this.url}/SaveAndFinishEncuestaAnonima`, req)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _GetPreguntaActualEncuestaExtranet = (_id_encuesta: number) => {
        const options = { id_encuesta: _id_encuesta, user_name: '',dni_trabajador:'' };
        return axios
        .post(`${this.url}/GetPreguntaActualEncuestaExtranet`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _UpdatePreguntaActualEncuestaAdministrado = (_id_encuesta: number,_nro_pregunta:number,_id_pregunta,json_respuesta,_id_estado:number, json_paginado, finalizar=false) => {
        const options = { id_encuesta: _id_encuesta, nro_pregunta:_nro_pregunta, 
            id_pregunta: _id_pregunta,
            json_rpta: json_respuesta,
            id_estado:_id_estado, user_name: '',
            json_paginador: json_paginado,
            //finalizar_encuesta:finalizar
        };
        return axios
        .post(`${this.url}/UpdatePreguntaActualEncuestaAdministrado`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };
    //#endregion 
    
}
