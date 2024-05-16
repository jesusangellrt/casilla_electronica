using Prod.SNE.Entidades;
using Release.Helper;
using Release.Helper.Pagination;
using Release.Helper.Proxy;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;

namespace Prod.SNE.MVC.Configuracion.Proxys
{
    public class PermisoProxy : BaseProxy
    {
        private readonly string _url;
        public PermisoProxy(AppConfig appConfig)
        {
            _url = string.Format("{0}Permiso/", appConfig.Urls.URL_SNE_API);
        }

        public PagedResponse<PermisoResponse> GetPermisoList(PermisoRequest request)
        {
            return this.InvokeWebApi<PagedResponse<PermisoResponse>>(HttpMethod.Get, _url + "GetPermisoList", this.GetJsonParameters(request));
        }

        public StatusResponse RegistroPermiso(PermisoRequest request)
        {
            return this.InvokeWebApi<StatusResponse>(HttpMethod.Post, _url + "RegistroPermiso", this.GetJsonParameters(request));
        }

        public StatusResponse EliminarPermiso(PermisoRequest request)
        {
            return this.InvokeWebApi<StatusResponse>(HttpMethod.Post, _url + "EliminarPermiso", this.GetJsonParameters(request));
        }

        public List<PermisoResponse> GetPermisoPorRolList(PermisoRolRequest request)
        {
            return this.InvokeWebApi<List<PermisoResponse>>(HttpMethod.Post, _url + "GetPermisoPorRolList", this.GetJsonParameters(request));

        }
    }
}
