import { Injectable } from "@angular/core";
import axios from "axios";
import { environment } from "@cmp/environment";
import { ConfiguracionInicialSaveUpdateRequest, 
    EncuestadoEncuestaSaveItem, EncuestaSaveUpdateRequest, 
    PreguntaSaveUpdateItem, PreguntaOrdenamientoItem, EncuestadoEncuestaExtranetSaveItem } from "../interfaces";
import { SeccionListRequest, SeccionResponseItem, SeccionSaveUpdateItem } from "../interfaces/secciones.interface";
import { NotificacionSaveUpdateItem } from "../interfaces/notificaciones.interface";
@Injectable({
    providedIn: "root"
})

export class EncuestasService {
    url: string = `${environment.api_target}/api/encuesta`;

    constructor() { }
    public GetDocumentoDataSITRADOC = (nro_documento: string) => {
        return axios
          .post(`${this.url}/GetDocumentoDataSITRADOC`, {valor: nro_documento})
          .then(resp => resp.data)
          .catch(err => {
              throw err.data || err;
          });
      };
  

      
    //#region PARA CONFIGURACIONES
    public _getEncuestaWithDependenciaList = (filters, Page = 1, pageSize = 10,order='DESC') => {
        const options = { ...filters, Page, pageSize, Order: order, ColumnName: 'fecha_registro' };
        return axios
        .post(`${this.url}/GetEncuestaWithDependenciaList`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _getEncuestaWithAdministradosList = (filters, Page = 1, pageSize = 10,order='DESC') => {
        const options = { ...filters, Page, pageSize, Order: order, ColumnName: 'fecha_registro' };
        return axios
        .post(`${this.url}/GetEncuestaWithAdministradosList`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    
    public _getRespuestasByEncuesta = (filters, Page = 1, pageSize = 10,order='DESC') => {
        const options = { ...filters, Page, pageSize, Order: order, ColumnName: 'fecha_registro' };
        return axios
        .post(`${this.url}/GetRespuestasByEncuesta`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _getRespuestasByEncuestaExtranet = (filters, Page = 1, pageSize = 10,order='DESC') => {
        const options = { ...filters, Page, pageSize, Order: order, ColumnName: 'fecha_registro' };
        return axios
        .post(`${this.url}/GetRespuestasByEncuestaExtranet`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _getEncuestaDataByID = (_id_encuesta:number) => {
        const options = { id_encuesta: _id_encuesta };
        return axios
        .post(`${this.url}/GetEncuestaDataByID`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };
    public _PublicarEncuesta = (_id_encuesta:number) => {
        const options = { id_encuesta: _id_encuesta };
        return axios
        .post(`${this.url}/PublicarEncuesta`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };
    public _saveUpdateEncuestaData = (filter:EncuestaSaveUpdateRequest) => {
        const options = { ...filter };
        return axios
        .post(`${this.url}/SaveUpdateEncuestaData`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };
    public _GetPreguntasByEncuesta = (filters, Page = 1, pageSize = 10,order='DESC') => {
        const options = { ...filters, Page, pageSize, Order: order, ColumnName: 'fecha_registro' };
        return axios
        .post(`${this.url}/GetPreguntasByEncuesta`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _GetPreguntasSinSeccionByEncuesta = (filters, Page = 1, pageSize = 10,order='DESC') => {
        const options = { ...filters, Page, pageSize, Order: order, ColumnName: 'fecha_registro' };
        return axios
        .post(`${this.url}/GetPreguntasSinSeccionByEncuesta`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _GetPreguntaByIdenPregunta = (filters, Page = 1, pageSize = 10,order='DESC') => {
        const options = { ...filters, Page, pageSize, Order: order, ColumnName: 'fecha_registro' };
        return axios
        .post(`${this.url}/GetPreguntaByIdenPregunta`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _GetPreguntasCondicionalesByEncuesta = (filters) => {
        const options = { ...filters };
        return axios
        .post(`${this.url}/GetPreguntasCondicionalesByEncuesta`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };


    public _GetPaginadoRegistrado = (filters, Page = 1, pageSize = 10,order='DESC') => {
        const options = { ...filters, Page, pageSize, Order: order, ColumnName: 'fecha_registro' };
        return axios
        .post(`${this.url}/GetPaginadoRegistrado`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    
    public _SaveUpdatePregunta = (filters:PreguntaSaveUpdateItem) => {
        const options = { ...filters };
        return axios
        .post(`${this.url}/SaveUpdatePregunta`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };
    public _EnableDisable = (_id:number, _table: string) => {
        const options = { id:_id, table: _table, user_name:""};
        return axios
        .post(`${this.url}/EnableDisable`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _Prepublicar = (_id:number) => {
        const options = { id:_id};
        return axios
        .post(`${this.url}/Prepublicar`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };
    public _GetEncuestadosByFilterEncuesta = (filters, Page = 1, pageSize = 10,order='DESC') => {
        const options = { ...filters, Page, pageSize, Order: order, ColumnName: 'fecha_registro' };
        return axios
        .post(`${this.url}/GetEncuestadosByFilterEncuesta`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _GetEncuestadosByFilterEncuestaExtranet = (filters, Page = 1, pageSize = 10,order='DESC') => {
        const options = { ...filters, Page, pageSize, Order: order, ColumnName: 'fecha_registro' };
        return axios
        .post(`${this.url}/GetEncuestadosByFilterEncuestaExtranet`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };


    public _SaveEncuestadosList = (list: EncuestadoEncuestaSaveItem[]) => {
        let data = {
            data: list,
            user_name:""
        };
        return axios
        .post(`${this.url}/SaveEncuestaEncuestadosList`, data)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _SaveEncuestadosExtranetList = (list: EncuestadoEncuestaExtranetSaveItem[]) => {
        let data = {
            data: list,
            user_name:""
        };
        return axios
        .post(`${this.url}/SaveEncuestadosExtranetList`, data)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };
    
    public _UpdateInformeEncuestas = (_id_encuesta, _nro_informe, _iden_pdf_encuestado, _iden_pdf_completo) => {
        let data = {
            id_encuesta:_id_encuesta, 
            nro_informe:_nro_informe, 
            iden_pdf_encuestado:_iden_pdf_encuestado, 
            iden_pdf_completo:_iden_pdf_completo
        };
        return axios
        .post(`${this.url}/UpdateInformeEncuestas`, data)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };
    //#endregion
    
    //#region PARA ENCUESTADOS
    public _GetEncuestasListByUser = (filters, Page = 1, pageSize = 10,order='DESC') => {
        const options = { ...filters, Page, pageSize, Order: order, ColumnName: 'fecha_registro' };
        return axios
        .post(`${this.url}/GetEncuestasListByUser`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _GetAllEncuestasListByUser = (filters, Page = 1, pageSize = 10,order='DESC') => {
        const options = { ...filters,dni_trabajador:'', Page, pageSize, Order: order, ColumnName: 'fecha_registro' };
        return axios
        .post(`${this.url}/GetAllEncuestasListByUser`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _GetAllEncuestasListByUserExtranet = (filters, Page = 1, pageSize = 10,order='DESC') => {
        const options = { ...filters,dni_trabajador:'', Page, pageSize, Order: order, ColumnName: 'fecha_registro' };
        return axios
        .post(`${this.url}/GetAllEncuestasListByUserExtranet`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _GetResultadosChartByEncuesta = (_id_encuesta:number) => {
        const options = { id_encuesta: _id_encuesta };
        return axios
        .post(`${this.url}/GetResultadosChartByEncuesta`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };
    
    public _GetPreguntasByEncuestaOrdenamiento = (_id_encuesta:number) => {
        const options = { id_encuesta: _id_encuesta };
        return axios
        .post(`${this.url}/GetPreguntasByEncuestaOrdenamiento`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _UpdatePreguntaEncuestaOrdenamiento = (list: PreguntaOrdenamientoItem[]) => {
        let data = {
            lista: list
        };
        return axios
        .post(`${this.url}/UpdatePreguntaEncuestaOrdenamiento`, data)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };    

    public _GetEncuestasListByUserExtranet = (filters, Page = 1, pageSize = 10,order='DESC') => {
        const options = { ...filters, Page, pageSize, Order: order, ColumnName: 'fecha_registro' };
        return axios
        .post(`${this.url}/GetEncuestasListByUserExtranet`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _GetListaPreguntasByEncuesta = (filters, Page = 1, pageSize = 10,order='DESC') => {
        const options = { ...filters, Page, pageSize, Order: order, ColumnName: 'fecha_registro' };
        return axios
        .post(`${this.url}/GetListaPreguntasByEncuesta`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _GetSeccionesByEncuesta = (filters, Page = 1, pageSize = 10,order='DESC') => {
        const options = { ...filters, Page, pageSize, Order: order, ColumnName: 'fecha_registro' };
        return axios
        .post(`${this.url}/GetSeccionesByEncuesta`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _SaveUpdateSeccion = (filters:SeccionSaveUpdateItem) => {
        const options = { ...filters };
        return axios
        .post(`${this.url}/SaveUpdateSeccion`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _UpdateSeccionEncuestaOrdenamiento = (list: SeccionResponseItem[]) => {
        let data = {
            lista: list
        };
        return axios
        .post(`${this.url}/UpdateSeccionEncuestaOrdenamiento`, data)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };    

    public _getSeccionList = (id_encuesta: number) => {
        const options = { id_encuesta: id_encuesta };
        return axios
        .post(`${this.url}/GetSeccionList`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _GetListaPreguntasSeccionByEncuesta = (filters, Page = 1, pageSize = 10,order='DESC') => {
        const options = { ...filters, Page, pageSize, Order: order, ColumnName: 'fecha_registro' };
        return axios
        .post(`${this.url}/GetListaPreguntasSeccionByEncuesta`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _GetNotificacionesByEncuesta = (filters, Page = 1, pageSize = 10,order='DESC') => {
        const options = { ...filters, Page, pageSize, Order: order, ColumnName: 'fecha_registro' };
        return axios
        .post(`${this.url}/GetNotificacionesByEncuesta`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _SaveUpdateNotificacion = (filters:NotificacionSaveUpdateItem) => {
        const options = { ...filters };
        return axios
        .post(`${this.url}/SaveUpdateNotificacion`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _UpdatePreguntaSeccionEncuestaOrdenamiento = (secciones: SeccionListRequest[]) => {
        let data = {
            secciones: secciones
        };
        return axios
        .post(`${this.url}/UpdatePreguntaSeccionEncuestaOrdenamiento`, data)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };   

    public _SaveEncuestaAdministradoExtranet = (filters, Page = 1, pageSize = 10,order='DESC') => {
        const options = { ...filters, Page, pageSize, Order: order, ColumnName: 'fecha_registro' };
        return axios
        .post(`${this.url}/SaveEncuestaAdministradoExtranet`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public _GetPreguntasSeccionesByEncuesta = (filters, Page = 1, pageSize = 10,order='DESC') => {
        const options = { ...filters, Page, pageSize, Order: order, ColumnName: 'fecha_registro' };
        return axios
        .post(`${this.url}/GetPreguntasSeccionesByEncuesta`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public GetDepartamentos = () => {
        return axios
        .post(`${this.url}/GetDepartamentos`)
        .then(resp => resp.data.data)
        .catch(err => {throw err.data || err;});
      };

      public GetProvincia = (departamento) => {
        let data = {cod_departamento : departamento };
        return axios
        .post(`${this.url}/GetProvincia`, data)
        .then(resp => resp.data.data)
        .catch(err => {throw err.data || err;});
      };
  
      public GetDistrito = (departamento,provincia) => {
        let data = {cod_departamento : departamento , cod_provincia:provincia};
        return axios
        .post(`${this.url}/GetDistrito`, data)
        .then(resp => resp.data.data)
        .catch(err => {throw err.data || err;});
      };

      public GetReporteEncuestadoPreguntaRespuesta = (id_encuesta) => {
        let data = {id_encuesta : id_encuesta};
        return axios
        .post(`${this.url}/GetReporteEncuestadoPreguntaRespuesta`, data)
        .then(resp => resp.data.data)
        .catch(err => {throw err.data || err;});
      };
      public GetListAvanceByIdEncuesta = (id_encuesta) => {
        let data = {id_encuesta : id_encuesta};
        return axios
        .post(`${this.url}/GetListAvanceByIdEncuesta`, data)
        .then(resp => resp.data)
        .catch(err => { 
            throw err.data || err;
        });
    };
    public GetReporteResultados = (id_encuesta) => {
        let data = {id_encuesta : id_encuesta};
        return axios
        .post(`${this.url}/GetReporteResultados`, data)
        .then(resp => resp.data.data)
        .catch(err => {
            throw err.data || err;
        });
    };
}
