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
    public class ConfiguracionInicialProxy : BaseProxy
    {
        private readonly string _url;
        public ConfiguracionInicialProxy(AppConfig appConfig)
        {
            _url = string.Format("{0}ConfiguracionInicial/", appConfig.Urls.URL_SNE_API);
        }

        public ConfiguracionInicialResponse GetActualConfiguracion(int id_tipo_encuesta)
        {
            return this.InvokeWebApi<ConfiguracionInicialResponse> (HttpMethod.Get, _url + "GetActualConfiguracion", this.GetJsonParameters(id_tipo_encuesta));
        }

        public StatusResponse SaveUpdateConfiguracion(ConfiguracionInicialSaveUpdateRequest request)
        {
            return this.InvokeWebApi<StatusResponse>(HttpMethod.Post, _url + "SaveUpdateConfiguracion", this.GetJsonParameters(request));

        }
    }
}
