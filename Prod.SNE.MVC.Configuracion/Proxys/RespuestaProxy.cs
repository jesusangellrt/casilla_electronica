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
    public class RespuestaProxy : BaseProxy
    {
        private readonly string _url;
        public RespuestaProxy(AppConfig appConfig)
        {
            _url = string.Format("{0}Respuesta/", appConfig.Urls.URL_SNE_API);
        }

        public StatusResponse GetPreguntaActualEncuesta(StatusRespuestaRequest request)
        {
            return this.InvokeWebApi< StatusResponse > (HttpMethod.Get, _url + "GetPreguntaActualEncuesta", this.GetJsonParameters(request));
        }

        public StatusResponse UpdatePreguntaActualEncuesta(UpdateStatusRespuestaRequest request)
        {
            return this.InvokeWebApi<StatusResponse>(HttpMethod.Get, _url + "UpdatePreguntaActualEncuesta", this.GetJsonParameters(request));
        }


        public List<RespuestasIngresadasResponse> GetRespuestasByEncuestaAndEncuestado(StatusRespuestaRequest request)
        {
            return this.InvokeWebApi<List<RespuestasIngresadasResponse>>(HttpMethod.Get, _url + "GetRespuestasByEncuestaAndEncuestado", this.GetJsonParameters(request));
        }

        public List<BasicGroupedSelectResponse> GetDesplegableInstitucional(DesplegableInstitucionalRequest request)
        {
            return this.InvokeWebApi<List<BasicGroupedSelectResponse>>(HttpMethod.Get, _url + "GetDesplegableInstitucional", this.GetJsonParameters(request));
        }
        public StatusResponse SaveAndFinishEncuestaAnonima(SaveRespuestaAnonimaRequest request)
        {
            return this.InvokeWebApi<StatusResponse> (HttpMethod.Get, _url + "SaveAndFinishEncuestaAnonima", this.GetJsonParameters(request));
        }

        public StatusResponse GetPreguntaActualEncuestaExtranet(StatusRespuestaRequest request)
        {
            return this.InvokeWebApi<StatusResponse>(HttpMethod.Get, _url + "GetPreguntaActualEncuestaExtranet", this.GetJsonParameters(request));
        }

        public StatusResponse UpdatePreguntaActualEncuestaAdministrado(UpdateStatusRespuestaRequest request)
        {
            return this.InvokeWebApi<StatusResponse>(HttpMethod.Get, _url + "UpdatePreguntaActualEncuestaAdministrado", this.GetJsonParameters(request));
        }
    }
}

