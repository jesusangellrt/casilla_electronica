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
    public class SisEnumeradoProxy : BaseProxy
    {
        private readonly string _url;
        public SisEnumeradoProxy(AppConfig appConfig)
        {
            _url = string.Format("{0}SisEnumerado/", appConfig.Urls.URL_SNE_API);
        }

        public List<SisEnumeradoResponse> GetEnumeradoByTipoEnumerado(SisTipoEnumeradoRequest req)
        {
            return this.InvokeWebApi<List<SisEnumeradoResponse>>(HttpMethod.Get, _url + "GetEnumeradoByTipoEnumerado", this.GetJsonParameters(req));
        }

    }
}
