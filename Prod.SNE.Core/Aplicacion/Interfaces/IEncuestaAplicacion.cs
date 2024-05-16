using Microsoft.AspNetCore.Mvc;
using Prod.SNE.Entidades;
using Release.Helper;
using Release.Helper.Pagination;
using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Core.Aplicacion.Interfaces
{
    public interface IEncuestaAplicacion
    {
        #region PARA CONFIGURACIONES
        PagedResponse<EncuestaResponseList> GetEncuestaWithDependenciaList(EncuestaRequestList request);
        EncuestaResponseData GetEncuestaDataByID(EncuestaIDENRequest request);
        StatusResponse PublicarEncuesta(EncuestaIDENRequest request);
        StatusResponse SaveUpdateEncuestaData(EncuestaSaveUpdateRequest request);
        PagedResponse<PreguntasResponseList> GetPreguntasByEncuesta(PreguntasRequestList request);
        List<PreguntasResponseList> GetPreguntasCondicionalesByEncuesta(PreguntaCondicionaldaRequestList request);
        PagedResponse<PaginadoPreguntasResponse> GetPaginadoRegistrado(PaginadoPreguntasRequest request);
        PagedResponse<PreguntasResponseList> GetPreguntaByIdenPregunta(PreguntasIdenRequest request);

        StatusResponse SaveUpdatePregunta(PreguntaSaveUpdateRequest request);
        StatusResponse EnableDisable(BasicDeleteRequest req);
        StatusResponse Prepublicar(BasicDeleteRequest req);
        StatusResponse UpdateInformeEncuestas(EncuestaResultadosSaveRequest req);
        PagedResponse<EncuestadosItemList> GetEncuestadosByFilterEncuesta(EncuestadosRequestList request);
        StatusResponse SaveEncuestaEncuestadosList(EncuestadosEncuestaSaveRequest request);
        PagedResponse<RespuestasEncuestaItemList> GetRespuestasByEncuesta(PagedIdenEncuesta request);
        List<PreguntasResponseList> GetPreguntasByEncuestaOrdenamiento(PreguntasRequestList request);
        StatusResponse UpdatePreguntaEncuestaOrdenamiento(PreguntaOrdenamientoRequest request);
        PagedResponse<SeccionResponse> GetSeccionesByEncuesta(PreguntasRequestList request);
        StatusResponse SaveUpdateSeccion(SeccionRequest request);
        StatusResponse UpdateSeccionEncuestaOrdenamiento(SeccionOrdenamientoRequest request);
        List<SeccionResponse> GetSeccionList(SeccionRequest request);
        PagedResponse<NotificacionResponse> GetNotificacionesByEncuesta(PreguntasRequestList request);
        StatusResponse SaveUpdateNotificacion(NotificacionRequest request);
        StatusResponse UpdatePreguntaSeccionEncuestaOrdenamiento(SeccionListOrdenamientoRequest request);
        PagedResponse<PreguntasResponseList> GetPreguntasSinSeccionByEncuesta(PreguntasRequestList request);
        #endregion

        #region PARA EL ENCUESTADO
        List<EncuestaByEncuestadoItem> GetEncuestasListByUser(EncuestaByEncuestadoRequestList request);
        PagedResponse<EncuestaResponseListAll> GetAllEncuestasListByUser(EncuestaRequestByUserListAll request);
        ChartAnalisisEncuestaResponse GetResultadosChartByEncuesta(EncuestaIDENRequest request);
        List<EncuestaResponseListAll> GetAllEncuestasListByUserExtranet(EncuestaRequestByUserListAll request);
        List<EncuestaByEncuestadoItem> GetEncuestasListByUserExtranet(EncuestaByEncuestadoRequestList request);

        List<PreguntasResponseList> GetListaPreguntasByEncuesta(PreguntasRequestList request);
        List<SeccionListResponse> GetListaPreguntasSeccionByEncuesta(PreguntasRequestList request);
        StatusResponse SaveEncuestadosExtranetList(EncuestadosEncuestaExtranetSaveRequest req);
        StatusResponse SaveEncuestaAdministradoExtranet(EncuestaByEncuestadoRequestList request);
        PagedResponse<PreguntasResponseList> GetPreguntasSeccionesByEncuesta(PreguntasRequestList request);
        PagedResponse<EncuestadoresExtranetResponse> GetEncuestadosByFilterEncuestaExtranet(EncuestadosRequestList request);
        PagedResponse<RespuestasEncuestaExtranetItemList> GetRespuestasByEncuestaExtranet(PagedIdenEncuesta request);
        List<PreguntaResponse> GetListarPreguntaByIdEncuesta(PagedIdenEncuesta request);
        List<EncuestadoPreguntaRespuestaResponse> GetListEncuestadoRespuestaPreguntaByIdEncuesta(PagedIdenEncuesta request);
        List<EncuestadoPreguntaRespuestaResponse> GetListEncuestadosByIdEncuesta(PagedIdenEncuesta request);
        PagedResponse<EncuestaResponseList> GetEncuestaWithAdministradosList(EncuestaRequestList request);
        List<EncuestadoPreguntaRespuestaResponse> GetListReporteExcel(PagedIdenEncuesta request);
        List<EncuestaResultadosResponseList> GetListResultadosByIdEncuesta(PagedIdenEncuesta req);
        List<EncuestaAvanceResponseList> GetListAvanceByIdEncuesta(PagedIdenEncuesta req);
        #endregion


    }
}


