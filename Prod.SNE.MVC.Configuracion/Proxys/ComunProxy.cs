using Prod.SNE.Entidades;
using Prod.SNE.Entidades.Trabajador;
using Release.Helper;
using Release.Helper.Pagination;
using Release.Helper.Proxy;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;

namespace Prod.SNE.MVC.Configuracion.Proxys
{
    public class ComunProxy : BaseProxy
    {
        private readonly string _url;
        public ComunProxy(AppConfig appConfig)
        {
            _url = string.Format("{0}Comun/", appConfig.Urls.URL_SNE_API);
        }
        
        public PersonaResponse GetPersonaById(PersonaRequest filtro)
        {
            return this.InvokeWebApi<PersonaResponse>(HttpMethod.Get, _url + "GetPersonaById", this.GetJsonParameters(filtro));
        }
        public ArchivoResponse GetArchivoById(ArchivoRequest filtro)
        {
            return this.InvokeWebApi<ArchivoResponse>(HttpMethod.Get, _url + "GetArchivoById", this.GetJsonParameters(filtro));
        }
        public StatusResponse RegistrarArchivo(ArchivoRequest nec)
        {
            return this.InvokeWebApi<StatusResponse>(HttpMethod.Post, _url + "RegistrarArchivo", this.GetJsonParameters(nec));
        }
        public List<SelectResponse> GetDepartamento()
        {
            return this.InvokeWebApi<List<SelectResponse>>(HttpMethod.Get, _url + "GetDepartamento", null);
        }
        public List<SelectResponse> GetProvincia(UbigeoRequest request)
        {
            return this.InvokeWebApi<List<SelectResponse>>(HttpMethod.Get, _url + "GetProvincia", this.GetJsonParameters(request));
        }
        public List<SelectResponse> GetDistrito(UbigeoRequest request)
        {
            return this.InvokeWebApi<List<SelectResponse>>(HttpMethod.Get, _url + "GetDistrito", this.GetJsonParameters(request));
        }
        public List<SelectResponse> GetRolSSA(RolSSARequest request)
        {
            return this.InvokeWebApi<List<SelectResponse>>(HttpMethod.Get, _url + "GetRolSSA", request);
        }
        public List<SelectResponse> GetPermiso(PermisoRequest request)
        {
            return this.InvokeWebApi<List<SelectResponse>>(HttpMethod.Get, _url + "GetPermiso", request);
        }
        public List<SelectResponse> GetDependencia()
        {
            return this.InvokeWebApi<List<SelectResponse>>(HttpMethod.Get, _url + "GetDependencia", null);
        }
        public StatusResponse<TrabajadorResponse> GetTrabajador(string username)
        {
            return this.InvokeWebApi<StatusResponse<TrabajadorResponse>>(HttpMethod.Get, _url + $"GetTrabajador?username={username}", null);
        }
        public List<SelectResponse> GetRegimen()
        {
            return this.InvokeWebApi<List<SelectResponse>>(HttpMethod.Get, _url + "GetRegimen", null);
        }
    }
}
