using Prod.SNE.Entidades;
using Release.Helper.Pagination;
using Release.Helper.Proxy;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;

namespace Prod.SNE.MVC.Configuracion.Proxys
{
    public class EncuestaConfigurarProxy : BaseProxy
    {
        private readonly string _url;
        public EncuestaConfigurarProxy(AppConfig appConfig)
        {
            _url = string.Format("{0}EncuestaConfigurar/", appConfig.Urls.URL_SNE_API);
        }
        public PagedResponse<EncuestadoresResponse> GetListEncuestados(EncuestadoresRequest request)
        {
            return this.InvokeWebApi<PagedResponse<EncuestadoresResponse>>(HttpMethod.Post, _url + "GetListEncuestados", this.GetJsonParameters(request));

        }

        public PagedResponse<EncuestadoresExtranetResponse> GetListEncuestadosExtranet(EncuestadoresExtranetRequest request)
        {
            return this.InvokeWebApi<PagedResponse<EncuestadoresExtranetResponse>>(HttpMethod.Post, _url + "GetListEncuestadosExtranet", this.GetJsonParameters(request));

        }
    }
}
