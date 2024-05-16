import { Injectable } from "@angular/core";
import axios from "axios";
import { environment } from "@cmp/environment";
import { HttpClient, HttpRequest, HttpResponse, HttpEventType } from '@angular/common/http';

@Injectable({
    providedIn: "root"
})
export class ComunService {
    url: string = `${environment.api_target}/api/comun`;

    constructor(private http: HttpClient) { }

    GetIpCliente=()=>{
      return this.http.get(`https://api.ipify.org?format=json`);
    }

  GetVerArchivo = (id_archivo: string) => {
    const options = { params: { id_archivo} };
    return axios
      .get(`${this.url}/GetVerArchivo`, options)
      .then(resp => resp.data)
      .catch(err => {
          throw err.data || err;
      });
  };

    GetBuscarPersonaRegistro = (dni: string) => {
      const options = { params: { dni} };
      return axios
        .get(`${this.url}/GetBuscarPersonaRegistro`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };


    GetDocumentoDataSITRADOC = (nro_documento: string) => {
      return axios
        .post(`${this.url}/GetDocumentoDataSITRADOC`, {valor: nro_documento})
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };


    

    GetPersonaByDniNec = (dni: string, nec:number) => {
      const options = { params: { dni,nec} };

      return axios
        .get(`${this.url}/GetPersonaByDniNec`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    ValidarUsuarioProduceVirtual = (dni: string) => {
      const options = { params: { dni} };
      return axios
        .get(`${this.url}/ValidarUsuarioProduceVirtual`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    ValidarUsuarioCualquierRoleProduceVirtual = (dni: string, rol:string) => {
      const options = { params: { dni,rol} };
      return axios
        .get(`${this.url}/ValidarUsuarioCualquierRoleProduceVirtual`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };


    GetConsultaSunat = (ruc) => {
      const options = { params: { ruc } };
      return axios
        .get(`${this.url}/GetConsultaSunat`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    GetBuscarPersonaSunatRegistro = (ruc: string) => {
      const options = { params: { ruc } };
      return axios
        .get(`${this.url}/GetBuscarPersonaSunatRegistro`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    GetConsultaRepresentantesSunat = (ruc, page = 1, pageSize = 10) => {
      const options = { params: { ruc, page, pageSize } };
      return axios
        .get(`${this.url}/GetConsultaRepresentantesSunat`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    GetBuscarPersona = (dni) => {
      const options = { params: {  dni } };
      return axios
        .get(`${this.url}/GetBuscarPersona`, options)
        .then(resp => resp.data.data)
        .catch(err => []);
    };



    GetBuscarPersonaReniecSunatRegistro = (dni, ruc) => {
      const options = { params: {  dni, ruc } };
      return axios
        .get(`${this.url}/GetBuscarPersonaReniecSunatRegistro`, options)
        .then(resp => resp.data.data)
        .catch(err => []);
    };

    GetBuscarPersonaReniecRegistro = (dni) => {
      const options = { params: {  dni } };
      return axios
        .get(`${this.url}/GetBuscarPersonaReniecRegistro`, options)
        .then(resp => resp.data.data)
        .catch(err => []);
    };

    GetCarnetExtranjeria = (documento) => {
      const options = { params: {  documento } };
      return axios
        .get(`${this.url}/GetCarnetExtranjeria`, options)
        .then(resp => resp.data.data)
        .catch(err => []);
    };

    GetBusquedaCarnetExtranjeria = (documento, cod_depa, cod_prov, cod_dist) => {
      const options = { params: {  documento, cod_depa, cod_prov, cod_dist } };
      return axios
        .get(`${this.url}/GetBusquedaCarnetExtranjeria`, options)
        .then(resp => resp.data.data)
        .catch(err => []);
    };

    GetBusquedaCarnetExtranjeriaMype = (documento, cod_depa, cod_prov, cod_dist) => {
      const options = { params: {  documento, cod_depa, cod_prov, cod_dist } };
      return axios
        .get(`${this.url}/GetBusquedaCarnetExtranjeriaMype`, options)
        .then(resp => resp.data.data)
        .catch(err => []);
    };



    GetConsultaReniec = (dni) => {
      const options = { params: {  dni } };
      return axios
        .get(`${this.url}/GetConsultaReniec`, options)
        .then(resp => resp.data.data)
        .catch(err => []);
    };

    GetEnumeradoList = (id_tipo_enumerado: number) => {
      const options = {id_tipo_enumerado};
      return axios
      .post(`${this.url}/GetEnumeradoList`, options)
      .then(resp => resp.data.data)
      .catch(err => []);
    };

    GetTipoEnumeradoList = (id_tipo_enumerados: Array<number>) => {
      const options = {id_tipo_enumerados};
      return axios
      .post(`${this.url}/GetTipoEnumeradoList`, options)
      .then(resp => resp.data.data)
      .catch(err => []);
    };

    GetBancos = () => {
      return axios
      .get(`${this.url}/GetBancos`)
      .then(resp => resp.data.data)
      .catch(err => console.log(err));
    };

    GetCargoDirectorio = () => {
      return axios
      .get(`${this.url}/GetCargoDirectorio`)
      .then(resp => resp.data.data)
      .catch(err => console.log(err));
    };


    GetTipoBeneficiario = () => {
      return axios
      .get(`${this.url}/GetTipoBeneficiario`)
      .then(resp => resp.data.data)
      .catch(err => console.log(err));
    };

   

    GetTipoDocumento = () => {
      return axios
      .get(`${this.url}/GetTipoDocumentos`)
      .then(resp => resp.data.data)
      .catch(err => console.log(err));
    };

    GetTipoCuentas = () => {
      return axios
        .get(`${this.url}/GetTipoCuentas`)
        .then(resp => resp.data.data)
        .catch(err => console.log(err));
    };

    GetProvincia = (departamento) => {
      const options = {params : {departamento: departamento }};
      return axios
      .get(`${this.url}/GetProvincia`, options)
      .then(resp => resp.data.data)
      .catch(err => []);
    };

    GetDistrito = (departamento,provincia) => {
      const options = {params : {departamento: departamento, provincia:provincia }};
      return axios
      .get(`${this.url}/GetDistrito`, options)
      .then(resp => resp.data.data)
      .catch(err => []);
    };

    SubirFile = (formData: FormData) => {
      const req = new HttpRequest('POST', `${this.url}/SubirArchivo`, formData);
      return this.http.request(req);
    }


    RegistrarFile = (file) => {
      const options = {file};
      return axios
      .post(`${this.url}/RegistrarArchivo`, options)
      .then(resp => resp.data.data)
      .catch(err => []);
    };

    RegistrarPersona = (persona) => {
      return axios
        .post(`${this.url}/RegistroPersona`, persona)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };
    
    RegistrarPersonaMype = (persona) => {
      return axios
        .post(`${this.url}/RegistroPersonaMype`, persona)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };
    GetEstadoDistribucion = () => {
      return axios
      .get(`${this.url}/GetEstadoDistribucion`)
      .then(resp => resp.data.data)
      .catch(err => console.log(err));
    };

    GetNec = () => {
        return axios
        .get(`${this.url}/GetNec`)
        .then(resp => resp.data.data)
        .catch(err => console.log(err));
    };

    GetTiposTransferencias = () => {
      return axios
      .get(`${this.url}/GetTiposTransferencias`)
      .then(resp => resp.data.data)
      .catch(err => console.log(err));
    };
    GetEstadoOrden = () => {
      return axios
      .get(`${this.url}/GetEstadoOrden`)
      .then(resp => resp.data.data)
      .catch(err => console.log(err));
    };
    GetArea = () => {
      return axios
      .get(`${this.url}/GetArea`)
      .then(resp => resp.data.data)
      .catch(err => console.log(err));
    };
    
    GetPresupuesto = (param) => {

      return axios
      .post(`${this.url}/GetPresupuesto`, param)
      .then(resp => resp.data.data)
      .catch(err => {
          throw err.data || err;
      });
    };

    GetTipoReferenciaPunto = () => {
      return axios
      .get(`${this.url}/GetTipoReferenciaPunto`)
      .then(resp => resp.data.data)
      .catch(err => console.log(err));
    };

    GetTipoTransporte = () => {
      return axios
      .get(`${this.url}/GetTipoTransporte`)
      .then(resp => resp.data.data)
      .catch(err => console.log(err));
    };


    GetRubro = () => {
      return axios
      .get(`${this.url}/GetRubro`)
      .then(resp => resp.data.data)
      .catch(err => console.log(err));
    };

    GetRubroMae = () => {
      return axios
      .get(`${this.url}/GetRubroMae`)
      .then(resp => resp.data.data)
      .catch(err => console.log(err));
    };
    
    GetClasificador = () => {
      return axios
      .get(`${this.url}/GetClasificador`)
      .then(resp => resp.data.data)
      .catch(err => console.log(err));
    };

    GetPresupuestos = (item) => {      
      return axios
      .post(`${this.url}/GetPresupuestos`, item)
      .then(resp => resp.data.data)
      .catch(err => console.log(err));
    };
    GetRubroOrden = (item) => {
      return axios
        .post(`${this.url}/GetRubroOrden`, item)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };
    GetClasificadorOrden = (item) => {
      return axios
        .post(`${this.url}/GetClasificadorOrden`, item)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };
    GetBancoo = () => {
      return axios
      .get(`${this.url}/GetBancoo`)
      .then(resp => resp.data.data)
      .catch(err => console.log(err));
    };
    GetTipoDocumentoComprobante = () => {
      return axios
      .get(`${this.url}/GetTipoDocumentoComprobante`)
      .then(resp => resp.data.data)
      .catch(err => console.log(err));
    };

    GetEnumeradoPorTipo = (tipoEnumerado) => {
      const options = { params: {  tipoEnumerado } };
      return axios
        .get(`${this.url}/GetEnumeradoPorTipo`, options)
        .then(resp => resp.data.data)
        .catch(err => []);
    };

    GetMypePorContrato = (item) => {      
      return axios
        .post(`${this.url}/GetMypeporContrato`, item)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };
    GetRubroByPresupuesto = (param) => {
      return axios
      .post(`${this.url}/GetRubroByPresupuesto`, param)
      .then(resp => resp.data.data)
      .catch(err => {
          throw err.data || err;
      });
    };
    GetRolSSA = () => {
      return axios
      .post(`${this.url}/GetRolSSA`, null)
      .then(resp => resp.data.data)
      .catch(err => {
          throw err.data || err;
      });
    };

    GetPermiso = () => {
      return axios
      .post(`${this.url}/GetPermiso`,null)
      .then(resp => resp.data.data)
      .catch(err => {
          throw err.data || err;
      });
    };

    GetTipoMaestroByName = (item) => {
      return axios
      .post(`${this.url}/GetTipoMaestroByName`,item)
      .then(resp => resp.data.data)
      .catch(err => {
          throw err.data || err;
      });
    };

    GetListEnumeradoMaestroByTipo = (item) => {
      return axios
        .post(`${this.url}/GetListEnumeradoMaestroByTipo`,item)
        .then(resp => resp.data.data)
        .catch(err => {
          throw err.data || err;
        });
    };

    GetFaseTipoEmpresaListByFase = (item) => {
      return axios
        .post(`${this.url}/GetFaseTipoEmpresaListByFase`,item)
        .then(resp => resp.data.data)
        .catch(err => {
          throw err.data || err;
        });
    };

    GetMaquinaEquipoListByMaquina = (item) => {
      return axios
        .post(`${this.url}/GetMaquinaEquipoListByMaquina`,item)
        .then(resp => resp.data.data)
        .catch(err => {
          throw err.data || err;
        });
    };

    GetHerramientaEquipoListByHerramienta = (item) => {
      return axios
        .post(`${this.url}/GetHerramientaEquipoListByHerramienta`,item)
        .then(resp => resp.data.data)
        .catch(err => {
          throw err.data || err;
        });
    };

    GetMaestroListByTipoSector = (filtro) => {
      return axios
        .post(`${this.url}/GetMaestroListByTipoSector`, filtro)
        .then(resp => resp.data)
        .catch(err => {
          throw err.data || err;
        });
    };

    public GetListEnumeradoMaestro = (filters, Page = 1, pageSize = 10) => {
      const options = { ...filters, Page, pageSize, Order: 'DESC', ColumnName: 'fecha_creacion' };
      return axios
        .post(`${this.url}/GetListEnumeradoMaestro`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };

    public GetListEnumeradoMaestroByTipoSector = (filters, Page = 1, pageSize = 10) => {
      const options = { ...filters, Page, pageSize, Order: 'DESC', ColumnName: 'fecha_creacion' };
      return axios
        .post(`${this.url}/GetListEnumeradoMaestroByTipoSector`, options)
        .then(resp => resp.data)
        .catch(err => {
            throw err.data || err;
        });
    };


    

    public RegistrarEnumeradoMaestro = (filtro) => {
        return axios
          .post(`${this.url}/RegistrarEnumeradoMaestro`, filtro)
          .then((resp) => resp.data)
          .catch((err) => {
            throw err.data || err;
          });
      };

      public GetMaestroFichaTecnicaReporte = (filters, Page = 1, pageSize = 10) => {
        const options = { ...filters, Page, pageSize, Order: 'DESC', ColumnName: 'id_maestro' };
        return axios
          .post(`${this.url}/GetMaestroFichaTecnicaReporte`, options)
          .then(resp => resp.data)
          .catch(err => {
              throw err.data || err;
          });
      };

      public GetMaestroTextilReporte = (filters, Page = 1, pageSize = 10) => {
        const options = { ...filters, Page, pageSize, Order: 'DESC', ColumnName: 'id_maestro' };
        return axios
          .post(`${this.url}/GetMaestroTextilReporte`, options)
          .then(resp => resp.data)
          .catch(err => {
              throw err.data || err;
          });
      };
      GetRolPorSeguridad = (id_equipo) => {
        const options = {params : {id_equipo: id_equipo }};
        return axios
        .get(`${this.url}/GetRolPorSeguridad`, options)
        .then(resp => resp.data.data)
        .catch(err => []);
      };

      public GetListEnumeradoSoloMaestro = (filters, Page = 1, pageSize = 10) => {
        const options = { ...filters, Page, pageSize, Order: 'DESC', ColumnName: 'fecha_creacion' };
        return axios
          .post(`${this.url}/GetListEnumeradoSoloMaestro`, options)
          .then(resp => resp.data)
          .catch(err => {
              throw err.data || err;
          });
      };
  
      GetListEnumeradoEsMaestro = (item) => {
        return axios
        .post(`${this.url}/GetListEnumeradoEsMaestro`,item)
        .then(resp => resp.data.data)
        .catch(err => {
            throw err.data || err;
        });
      };

      public GetEnumeradosMaestrosReporte = (filters, Page = 1, pageSize = 10) => {
        const options = { ...filters, Page, pageSize, Order: 'DESC', ColumnName: 'id_enumerado' };
        return axios
          .post(`${this.url}/GetEnumeradoSoloMaestroReporte`, options)
          .then(resp => resp.data)
          .catch(err => {
              throw err.data || err;
          });
      };

      public RegistrarEnumeradoSoloMaestro = (filtro) => {
        return axios
          .post(`${this.url}/RegistrarEnumeradoSoloMaestro`, filtro)
          .then((resp) => resp.data)
          .catch((err) => {
            throw err.data || err;
          });
      };


      GetConvocatoriasMype = (id_nec) => {
        const options = {params : {id_nec: id_nec }};
        return axios
          .get(`${this.url}/GetConvocatoriasMype`,options)
          .then(resp => resp.data.data)
          .catch(err => console.log(err));
      };     


      GetConvocatoriaBasexExpediente = (id_expediente_adquisicion,id_convocatoria) => {
        const options = {params : {id_expediente_adquisicion: id_expediente_adquisicion,id_convocatoria: id_convocatoria  }};
        return axios
          .get(`${this.url}/GetConvocatoriaBasexExpediente`,options)
          .then(resp => resp.data.data)
          .catch(err => console.log(err));
      };     

    
      GetTipoMaestroList = (item) => {
        return axios
        .post(`${this.url}/GetTipoMaestroList`,item)
        .then(resp => resp.data.data)
        .catch(err => {
            throw err.data || err;
        });
      };

      GetDependencia = () => {
        return axios
        .post(`${this.url}/GetDependencia`)
        .then(resp => resp.data.data)
        .catch(err => {
            throw err.data || err;
        });
      };

      GetDepartamentos = () => {
        return axios
        .post(`${this.url}/GetDepartamentos`)
        .then(resp => resp.data.data)
        .catch(err => console.log(err));
      };

      GetRegimen = () => {
        return axios
        .post(`${this.url}/GetRegimen`)
        .then(resp => resp.data.data)
        .catch(err => {
            throw err.data || err;
        });
      };
}
