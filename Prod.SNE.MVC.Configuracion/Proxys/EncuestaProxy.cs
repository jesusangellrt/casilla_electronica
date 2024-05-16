using Microsoft.AspNetCore.Mvc;
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
    public class EncuestaProxy : BaseProxy
    {
        private readonly string _url;
        public EncuestaProxy(AppConfig appConfig)
        {
            _url = string.Format("{0}Encuesta/", appConfig.Urls.URL_SNE_API);
        }
        #region PARA CONFIGURACIONES
        public PagedResponse<EncuestaResponseList> GetEncuestaWithDependenciaList(EncuestaRequestList request)
        {
            return this.InvokeWebApi<PagedResponse<EncuestaResponseList>>(HttpMethod.Post, _url + "GetEncuestaWithDependenciaList", this.GetJsonParameters(request));
        }

        public PagedResponse<EncuestaResponseList> GetEncuestaWithAdministradosList(EncuestaRequestList request)
        {
            return this.InvokeWebApi<PagedResponse<EncuestaResponseList>>(HttpMethod.Post, _url + "GetEncuestaWithAdministradosList", this.GetJsonParameters(request));
        }
        public EncuestaResponseData GetEncuestaDataByID(EncuestaIDENRequest request)
        {
            return this.InvokeWebApi<EncuestaResponseData> (HttpMethod.Post, _url + "GetEncuestaDataByID", this.GetJsonParameters(request));
        }

        public StatusResponse PublicarEncuesta(EncuestaIDENRequest request)
        {
            return this.InvokeWebApi<StatusResponse>(HttpMethod.Post, _url + "PublicarEncuesta", this.GetJsonParameters(request));
        }
        

        public StatusResponse SaveUpdateEncuestaData(EncuestaSaveUpdateRequest request)
        {
            return this.InvokeWebApi<StatusResponse>(HttpMethod.Post, _url + "SaveUpdateEncuestaData", this.GetJsonParameters(request));
        }

        public PagedResponse<PreguntasResponseList> GetPreguntasByEncuesta(PreguntasRequestList request)
        {
            return this.InvokeWebApi<PagedResponse<PreguntasResponseList>>(HttpMethod.Post, _url + "GetPreguntasByEncuesta", this.GetJsonParameters(request));
        }
        public List<PreguntasResponseList> GetPreguntasCondicionalesByEncuesta(PreguntaCondicionaldaRequestList request)
        {
            return this.InvokeWebApi<List<PreguntasResponseList>>(HttpMethod.Get, _url + "GetPreguntasCondicionalesByEncuesta", this.GetJsonParameters(request));
        }
        public PagedResponse<PaginadoPreguntasResponse> GetPaginadoRegistrado(PaginadoPreguntasRequest request)
        {
            return this.InvokeWebApi<PagedResponse<PaginadoPreguntasResponse>>(HttpMethod.Post, _url + "GetPaginadoRegistrado", this.GetJsonParameters(request));
        }
        public PagedResponse<PreguntasResponseList> GetPreguntaByIdenPregunta(PreguntasIdenRequest request)
        {
            return this.InvokeWebApi<PagedResponse<PreguntasResponseList>>(HttpMethod.Post, _url + "GetPreguntaByIdenPregunta", this.GetJsonParameters(request));
        }
        public StatusResponse SaveUpdatePregunta(PreguntaSaveUpdateRequest request)
        {
            return this.InvokeWebApi<StatusResponse>(HttpMethod.Post, _url + "SaveUpdatePregunta", this.GetJsonParameters(request));
        }

        public StatusResponse EnableDisable(BasicDeleteRequest request)
        {
            return this.InvokeWebApi<StatusResponse>(HttpMethod.Post, _url + "EnableDisable", this.GetJsonParameters(request));
        }
        public StatusResponse Prepublicar(BasicDeleteRequest request)
        {
            return this.InvokeWebApi<StatusResponse>(HttpMethod.Post, _url + "Prepublicar", this.GetJsonParameters(request));
        }

        
        public PagedResponse<EncuestadosItemList> GetEncuestadosByFilterEncuesta(EncuestadosRequestList request) 
        {
            return this.InvokeWebApi<PagedResponse<EncuestadosItemList>>(HttpMethod.Post, _url + "GetEncuestadosByFilterEncuesta", this.GetJsonParameters(request));
        }

        public PagedResponse<EncuestadoresExtranetResponse> GetEncuestadosByFilterEncuestaExtranet(EncuestadosRequestList request)
        {
            return this.InvokeWebApi<PagedResponse<EncuestadoresExtranetResponse>>(HttpMethod.Post, _url + "GetEncuestadosByFilterEncuestaExtranet", this.GetJsonParameters(request));
        }

        public StatusResponse SaveEncuestaEncuestadosList(EncuestadosEncuestaSaveRequest request)
        {
            return this.InvokeWebApi<StatusResponse>(HttpMethod.Post, _url + "SaveEncuestaEncuestadosList", this.GetJsonParameters(request));
        }

        public StatusResponse SaveEncuestadosExtranetList(EncuestadosEncuestaExtranetSaveRequest request)
        {
            return this.InvokeWebApi<StatusResponse>(HttpMethod.Post, _url + "SaveEncuestadosExtranetList", this.GetJsonParameters(request));
        }

        public StatusResponse UpdateInformeEncuestas(EncuestaResultadosSaveRequest request)
        {
            return this.InvokeWebApi<StatusResponse>(HttpMethod.Post, _url + "UpdateInformeEncuestas", this.GetJsonParameters(request));
        }

        public PagedResponse<RespuestasEncuestaItemList> GetRespuestasByEncuesta(PagedIdenEncuesta request)
        {
            return this.InvokeWebApi<PagedResponse<RespuestasEncuestaItemList>>(HttpMethod.Post, _url + "GetRespuestasByEncuesta", this.GetJsonParameters(request));
        }

        public PagedResponse<RespuestasEncuestaExtranetItemList> GetRespuestasByEncuestaExtranet(PagedIdenEncuesta request)
        {
            return this.InvokeWebApi<PagedResponse<RespuestasEncuestaExtranetItemList>>(HttpMethod.Post, _url + "GetRespuestasByEncuestaExtranet", this.GetJsonParameters(request));
        }

        public List<PreguntasResponseList> GetPreguntasByEncuestaOrdenamiento(PreguntasRequestList request)
        {
            return this.InvokeWebApi<List<PreguntasResponseList>>(HttpMethod.Get, _url + "GetPreguntasByEncuestaOrdenamiento", this.GetJsonParameters(request));
        }

        public StatusResponse UpdatePreguntaEncuestaOrdenamiento(PreguntaOrdenamientoRequest request)
        {
            return this.InvokeWebApi<StatusResponse>(HttpMethod.Post, _url + "UpdatePreguntaEncuestaOrdenamiento", this.GetJsonParameters(request));
        }

        public PagedResponse<SeccionResponse> GetSeccionesByEncuesta(PreguntasRequestList request)
        {
            return this.InvokeWebApi<PagedResponse<SeccionResponse>>(HttpMethod.Post, _url + "GetSeccionesByEncuesta", this.GetJsonParameters(request));
        }

        public StatusResponse SaveUpdateSeccion(SeccionRequest request)
        {
            return this.InvokeWebApi<StatusResponse>(HttpMethod.Post, _url + "SaveUpdateSeccion", this.GetJsonParameters(request));
        }

        public StatusResponse UpdateSeccionEncuestaOrdenamiento(SeccionOrdenamientoRequest request)
        {
            return this.InvokeWebApi<StatusResponse>(HttpMethod.Post, _url + "UpdateSeccionEncuestaOrdenamiento", this.GetJsonParameters(request));
        }
        public List<SeccionResponse> GetSeccionList(SeccionRequest request)
        {
            return this.InvokeWebApi<List<SeccionResponse>>(HttpMethod.Post, _url + "GetSeccionList", this.GetJsonParameters(request));
        }

        public PagedResponse<NotificacionResponse> GetNotificacionesByEncuesta(PreguntasRequestList request)
        {
            return this.InvokeWebApi<PagedResponse<NotificacionResponse>>(HttpMethod.Post, _url + "GetNotificacionesByEncuesta", this.GetJsonParameters(request));
        }

        public StatusResponse SaveUpdateNotificacion(NotificacionRequest request)
        {
            return this.InvokeWebApi<StatusResponse>(HttpMethod.Post, _url + "SaveUpdateNotificacion", this.GetJsonParameters(request));
        }

        public StatusResponse UpdatePreguntaSeccionEncuestaOrdenamiento(SeccionListOrdenamientoRequest request)
        {
            return this.InvokeWebApi<StatusResponse>(HttpMethod.Post, _url + "UpdatePreguntaSeccionEncuestaOrdenamiento", this.GetJsonParameters(request));
        }

        public PagedResponse<PreguntasResponseList> GetPreguntasSinSeccionByEncuesta(PreguntasRequestList request)
        {
            return this.InvokeWebApi<PagedResponse<PreguntasResponseList>>(HttpMethod.Post, _url + "GetPreguntasSinSeccionByEncuesta", this.GetJsonParameters(request));
        }
        #endregion

        #region PARA ENCUESTADOS
        public List<EncuestaByEncuestadoItem> GetEncuestasListByUser(EncuestaByEncuestadoRequestList request) {
            return this.InvokeWebApi<List<EncuestaByEncuestadoItem>>(HttpMethod.Post, _url + "GetEncuestasListByUser", this.GetJsonParameters(request));
        }

        public PagedResponse<EncuestaResponseListAll> GetAllEncuestasListByUser(EncuestaRequestByUserListAll request) {
            return this.InvokeWebApi<PagedResponse<EncuestaResponseListAll>>(HttpMethod.Post, _url + "GetAllEncuestasListByUser", this.GetJsonParameters(request));
        }
        public ChartAnalisisEncuestaResponse GetResultadosChartByEncuesta(EncuestaIDENRequest request)
        {
            return this.InvokeWebApi<ChartAnalisisEncuestaResponse> (HttpMethod.Post, _url + "GetResultadosChartByEncuesta", this.GetJsonParameters(request));
        }

        public List<EncuestaResponseListAll> GetAllEncuestasListByUserExtranet(EncuestaRequestByUserListAll request)
        {
            return this.InvokeWebApi<List<EncuestaResponseListAll>>(HttpMethod.Post, _url + "GetAllEncuestasListByUserExtranet", this.GetJsonParameters(request));
        }

        public List<EncuestaByEncuestadoItem> GetEncuestasListByUserExtranet(EncuestaByEncuestadoRequestList request)
        {
            return this.InvokeWebApi<List<EncuestaByEncuestadoItem>>(HttpMethod.Post, _url + "GetEncuestasListByUserExtranet", this.GetJsonParameters(request));
        }

        public List<PreguntasResponseList> GetListaPreguntasByEncuesta(PreguntasRequestList request)
        {
            return this.InvokeWebApi<List<PreguntasResponseList>>(HttpMethod.Post, _url + "GetListaPreguntasByEncuesta", this.GetJsonParameters(request));
        }

        public List<SeccionListResponse> GetListaPreguntasSeccionByEncuesta(PreguntasRequestList request)
        {
            return this.InvokeWebApi<List<SeccionListResponse>>(HttpMethod.Post, _url + "GetListaPreguntasSeccionByEncuesta", this.GetJsonParameters(request));
        }

        public StatusResponse SaveEncuestaAdministradoExtranet(EncuestaByEncuestadoRequestList request)
        {
            return this.InvokeWebApi<StatusResponse>(HttpMethod.Post, _url + "SaveEncuestaAdministradoExtranet", this.GetJsonParameters(request));
        }

        public PagedResponse<PreguntasResponseList> GetPreguntasSeccionesByEncuesta(PreguntasRequestList request)
        {
            return this.InvokeWebApi<PagedResponse<PreguntasResponseList>>(HttpMethod.Post, _url + "GetPreguntasSeccionesByEncuesta", this.GetJsonParameters(request));
        }

        public List<PreguntaResponse> GetListarPreguntaByIdEncuesta(PagedIdenEncuesta request)
        {
            return this.InvokeWebApi<List<PreguntaResponse>>(HttpMethod.Post, _url + "GetListarPreguntaByIdEncuesta", this.GetJsonParameters(request));
        }

        public List<EncuestadoPreguntaRespuestaResponse> GetListEncuestadoRespuestaPreguntaByIdEncuesta(PagedIdenEncuesta request)
        {
            return this.InvokeWebApi<List<EncuestadoPreguntaRespuestaResponse>>(HttpMethod.Post, _url + "GetListEncuestadoRespuestaPreguntaByIdEncuesta", this.GetJsonParameters(request));
        }

        public List<EncuestadoPreguntaRespuestaResponse> GetListEncuestadosByIdEncuesta(PagedIdenEncuesta request)
        {
            return this.InvokeWebApi<List<EncuestadoPreguntaRespuestaResponse>>(HttpMethod.Post, _url + "GetListEncuestadosByIdEncuesta", this.GetJsonParameters(request));
        }
        public List<EncuestadoPreguntaRespuestaResponse> GetListReporteExcel([FromBody] PagedIdenEncuesta request)
        {
            return this.InvokeWebApi<List<EncuestadoPreguntaRespuestaResponse>>(HttpMethod.Post, _url + "GetListReporteExcel", this.GetJsonParameters(request));
        }
        public List<EncuestaAvanceResponseList> GetListAvanceByIdEncuesta([FromBody] PagedIdenEncuesta request)
        {
            return this.InvokeWebApi<List<EncuestaAvanceResponseList>>(HttpMethod.Post, _url + "GetListAvanceByIdEncuesta", this.GetJsonParameters(request));
        }
        public List<EncuestaResultadosResponseList> GetListResultadosByIdEncuesta([FromBody] PagedIdenEncuesta request)
        {
            return this.InvokeWebApi<List<EncuestaResultadosResponseList>>(HttpMethod.Post, _url + "GetListResultadosByIdEncuesta", this.GetJsonParameters(request));
        }
        #endregion


    }
}