using Microsoft.AspNetCore.Mvc;
using Prod.SNE.Core.Aplicacion.Interfaces;
using Prod.SNE.Entidades;
using Release.Helper;
using Release.Helper.Pagination;
using System;
using System.Collections.Generic;

namespace Prod.SNE.Core.Controllers
{
    [Route("[controller]")]
    public class EncuestaController : Controller
    {
        private readonly IEncuestaAplicacion _EncuestaAplicacion;
        public EncuestaController(IEncuestaAplicacion __EncuestaAplicacion)
        {
            _EncuestaAplicacion = __EncuestaAplicacion;
        }

        #region PARA LA CONFIGURACIÓN
        [HttpPost]
        [Route("GetEncuestaWithDependenciaList")]
        public PagedResponse<EncuestaResponseList> GetEncuestaWithDependenciaList([FromBody] EncuestaRequestList request)
        {
            var o = _EncuestaAplicacion.GetEncuestaWithDependenciaList(request);
            return o;
        }
        [HttpPost]
        [Route("GetEncuestaWithAdministradosList")]
        public PagedResponse<EncuestaResponseList> GetEncuestaWithAdministradosList([FromBody] EncuestaRequestList request)
        {
            var o = _EncuestaAplicacion.GetEncuestaWithAdministradosList(request);
            return o;
        }

        [HttpPost]
        [Route("GetEncuestaDataByID")]
        public EncuestaResponseData GetEncuestaDataByID([FromBody] EncuestaIDENRequest request)
        {
            var o = _EncuestaAplicacion.GetEncuestaDataByID(request);
            return o;
        }

        [HttpPost]
        [Route("PublicarEncuesta")]
        public StatusResponse PublicarEncuesta([FromBody] EncuestaIDENRequest request)
        {
            var o = _EncuestaAplicacion.PublicarEncuesta(request);
            return o;
        }

        [HttpPost]
        [Route("SaveUpdateEncuestaData")]
        public StatusResponse SaveUpdateEncuestaData([FromBody] EncuestaSaveUpdateRequest request)
        {
            var o = _EncuestaAplicacion.SaveUpdateEncuestaData(request);
            return o;
        }

        [HttpPost]
        [Route("GetPreguntasByEncuesta")]
        public PagedResponse<PreguntasResponseList> GetPreguntasByEncuesta([FromBody] PreguntasRequestList request)
        {
            var o = _EncuestaAplicacion.GetPreguntasByEncuesta(request);
            return o;
        }
        [HttpGet]
        [Route("GetPreguntasCondicionalesByEncuesta")]
        public List<PreguntasResponseList> GetPreguntasCondicionalesByEncuesta([FromBody] PreguntaCondicionaldaRequestList request)
        {
            var o = _EncuestaAplicacion.GetPreguntasCondicionalesByEncuesta(request);
            return o;
        }
        [HttpPost]
        [Route("GetPaginadoRegistrado")]
        public PagedResponse<PaginadoPreguntasResponse> GetPaginadoRegistrado([FromBody] PaginadoPreguntasRequest request)
        {
            var o = _EncuestaAplicacion.GetPaginadoRegistrado(request);
            return o;
        }

        [HttpPost]
        [Route("GetPreguntaByIdenPregunta")]
        public PagedResponse<PreguntasResponseList> GetPreguntaByIdenPregunta([FromBody] PreguntasIdenRequest request)
        {
            var o = _EncuestaAplicacion.GetPreguntaByIdenPregunta(request);
            return o;
        }

        [HttpPost]
        [Route("SaveUpdatePregunta")]
        public StatusResponse SaveUpdatePregunta([FromBody] PreguntaSaveUpdateRequest request)
        {
            try
            {
                var o = _EncuestaAplicacion.SaveUpdatePregunta(request);
                return o;
            }
            catch(Exception error)
            {
                var sr = new StatusResponse { Value = 0 };
                sr.Success = false; sr.Value = error; sr.Messages.Add(error.Message);
                return sr;
            }
            
        }

        [HttpPost]
        [Route("EnableDisable")]
        public StatusResponse EnableDisable([FromBody] BasicDeleteRequest req)
        {
            var o = _EncuestaAplicacion.EnableDisable(req);
            return o;
        }

        [HttpPost]
        [Route("Prepublicar")]
        public StatusResponse Prepublicar([FromBody] BasicDeleteRequest req)
        {
            var o = _EncuestaAplicacion.Prepublicar(req);
            return o;
        }

        [HttpPost]
        [Route("GetEncuestadosByFilterEncuesta")]
        public PagedResponse<EncuestadosItemList> GetEncuestadosByFilterEncuesta([FromBody] EncuestadosRequestList request)
        {
            var o = _EncuestaAplicacion.GetEncuestadosByFilterEncuesta(request);
            return o;
        }


        [HttpPost]
        [Route("GetEncuestadosByFilterEncuestaExtranet")]
        public PagedResponse<EncuestadoresExtranetResponse> GetEncuestadosByFilterEncuestaExtranet([FromBody] EncuestadosRequestList request)
        {
            var o = _EncuestaAplicacion.GetEncuestadosByFilterEncuestaExtranet(request);
            return o;
        }

        [HttpPost]
        [Route("SaveEncuestaEncuestadosList")]
        public StatusResponse SaveEncuestaEncuestadosList([FromBody] EncuestadosEncuestaSaveRequest request)
        {
            var o = _EncuestaAplicacion.SaveEncuestaEncuestadosList(request);
            return o;
        }

        [HttpPost]
        [Route("SaveEncuestaAdministradoExtranet")]
        public StatusResponse SaveEncuestaAdministradoExtranet([FromBody] EncuestaByEncuestadoRequestList request)
        {
            var o = _EncuestaAplicacion.SaveEncuestaAdministradoExtranet(request);
            return o;
        }

        [HttpPost]
        [Route("SaveEncuestadosExtranetList")]
        public StatusResponse SaveEncuestadosExtranetList([FromBody] EncuestadosEncuestaExtranetSaveRequest request)
        {
            var o = _EncuestaAplicacion.SaveEncuestadosExtranetList(request);
            return o;
        }

        [HttpPost]
        [Route("UpdateInformeEncuestas")]
        public StatusResponse UpdateInformeEncuestas([FromBody] EncuestaResultadosSaveRequest req){
            var o = _EncuestaAplicacion.UpdateInformeEncuestas(req);
            return o;
        }

        [HttpPost]
        [Route("GetRespuestasByEncuesta")]
        public PagedResponse<RespuestasEncuestaItemList> GetRespuestasByEncuesta([FromBody] PagedIdenEncuesta req)
        {
            var o = _EncuestaAplicacion.GetRespuestasByEncuesta(req);
            return o;

        }

        [HttpPost]
        [Route("GetRespuestasByEncuestaExtranet")]
        public PagedResponse<RespuestasEncuestaExtranetItemList> GetRespuestasByEncuestaExtranet([FromBody] PagedIdenEncuesta req)
        {
            var o = _EncuestaAplicacion.GetRespuestasByEncuestaExtranet(req);
            return o;

        }

        [HttpGet]
        [Route("GetPreguntasByEncuestaOrdenamiento")]
        public List<PreguntasResponseList> GetPreguntasByEncuestaOrdenamiento([FromBody] PreguntasRequestList request)
        {
            var o = _EncuestaAplicacion.GetPreguntasByEncuestaOrdenamiento(request);
            return o;
        }

        [HttpPost]
        [Route("UpdatePreguntaEncuestaOrdenamiento")]
        public StatusResponse UpdatePreguntaEncuestaOrdenamiento([FromBody] PreguntaOrdenamientoRequest request)
        {
            var o = _EncuestaAplicacion.UpdatePreguntaEncuestaOrdenamiento(request);
            return o;
        }

        [HttpPost]
        [Route("GetSeccionesByEncuesta")]
        public PagedResponse<SeccionResponse> GetSeccionesByEncuesta([FromBody] PreguntasRequestList request)
        {
            var o = _EncuestaAplicacion.GetSeccionesByEncuesta(request);
            return o;
        }

        [HttpPost]
        [Route("SaveUpdateSeccion")]
        public StatusResponse SaveUpdateSeccion([FromBody] SeccionRequest request)
        {
            try
            {
                var o = _EncuestaAplicacion.SaveUpdateSeccion(request);
                return o;
            }
            catch (Exception error)
            {
                var sr = new StatusResponse { Value = 0 };
                sr.Success = false; sr.Value = error; sr.Messages.Add(error.Message);
                return sr;
            }

        }

        [HttpPost]
        [Route("UpdateSeccionEncuestaOrdenamiento")]
        public StatusResponse UpdateSeccionEncuestaOrdenamiento([FromBody] SeccionOrdenamientoRequest request)
        {
            var o = _EncuestaAplicacion.UpdateSeccionEncuestaOrdenamiento(request);
            return o;
        }

        [HttpPost]
        [Route("GetSeccionList")]
        public List<SeccionResponse> GetSeccionList([FromBody] SeccionRequest request)
        {
            var o = _EncuestaAplicacion.GetSeccionList(request);
            return o;
        }

        [HttpPost]
        [Route("GetNotificacionesByEncuesta")]
        public PagedResponse<NotificacionResponse> GetNotificacionesByEncuesta([FromBody] PreguntasRequestList request)
        {
            var o = _EncuestaAplicacion.GetNotificacionesByEncuesta(request);
            return o;
        }

        [HttpPost]
        [Route("SaveUpdateNotificacion")]
        public StatusResponse SaveUpdateNotificacion([FromBody] NotificacionRequest request)
        {
            try
            {
                var o = _EncuestaAplicacion.SaveUpdateNotificacion(request);
                return o;
            }
            catch (Exception error)
            {
                var sr = new StatusResponse { Value = 0 };
                sr.Success = false; sr.Value = error; sr.Messages.Add(error.Message);
                return sr;
            }

        }

        [HttpPost]
        [Route("UpdatePreguntaSeccionEncuestaOrdenamiento")]
        public StatusResponse UpdatePreguntaSeccionEncuestaOrdenamiento([FromBody] SeccionListOrdenamientoRequest request)
        {
            var o = _EncuestaAplicacion.UpdatePreguntaSeccionEncuestaOrdenamiento(request);
            return o;
        }
        #endregion

        #region PARA ENCUESTADOS
        [HttpPost]
        [Route("GetEncuestasListByUser")]
        public List<EncuestaByEncuestadoItem> GetEncuestasListByUser([FromBody] EncuestaByEncuestadoRequestList request)
        {
            var o = _EncuestaAplicacion.GetEncuestasListByUser(request);
            return o;
        }

        [HttpPost]
        [Route("GetAllEncuestasListByUser")]
        public PagedResponse<EncuestaResponseListAll> GetAllEncuestasListByUser([FromBody] EncuestaRequestByUserListAll request) {
            var o = _EncuestaAplicacion.GetAllEncuestasListByUser(request);
            return o;
        }

        [HttpPost]
        [Route("GetResultadosChartByEncuesta")]
        public ChartAnalisisEncuestaResponse GetResultadosChartByEncuesta([FromBody] EncuestaIDENRequest request)
        {
            var o = _EncuestaAplicacion.GetResultadosChartByEncuesta(request);
            return o;
        }

        [HttpPost]
        [Route("GetAllEncuestasListByUserExtranet")]
        public List<EncuestaResponseListAll> GetAllEncuestasListByUserExtranet([FromBody] EncuestaRequestByUserListAll request)
        {
            var o = _EncuestaAplicacion.GetAllEncuestasListByUserExtranet(request);
            return o;
        }

        [HttpPost]
        [Route("GetEncuestasListByUserExtranet")]
        public List<EncuestaByEncuestadoItem> GetEncuestasListByUserExtranet([FromBody] EncuestaByEncuestadoRequestList request)
        {
            var o = _EncuestaAplicacion.GetEncuestasListByUserExtranet(request);
            return o;
        }

        [HttpPost]
        [Route("GetListaPreguntasByEncuesta")]
        public List<PreguntasResponseList> GetListaPreguntasByEncuesta([FromBody] PreguntasRequestList request)
        {
            var o = _EncuestaAplicacion.GetListaPreguntasByEncuesta(request);
            return o;
        }

        [HttpPost]
        [Route("GetListaPreguntasSeccionByEncuesta")]
        public List<SeccionListResponse> GetListaPreguntasSeccionByEncuesta([FromBody] PreguntasRequestList request)
        {
            var o = _EncuestaAplicacion.GetListaPreguntasSeccionByEncuesta(request);
            return o;
        }

        [HttpPost]
        [Route("GetPreguntasSeccionesByEncuesta")]
        public PagedResponse<PreguntasResponseList> GetPreguntasSeccionesByEncuesta([FromBody] PreguntasRequestList request)
        {
            var o = _EncuestaAplicacion.GetPreguntasSeccionesByEncuesta(request);
            return o;
        }

        [HttpPost]
        [Route("GetPreguntasSinSeccionByEncuesta")]
        public PagedResponse<PreguntasResponseList> GetPreguntasSinSeccionByEncuesta([FromBody] PreguntasRequestList request)
        {
            var o = _EncuestaAplicacion.GetPreguntasSinSeccionByEncuesta(request);
            return o;
        }

        [HttpPost]
        [Route("GetListarPreguntaByIdEncuesta")]
        public List<PreguntaResponse> GetListarPreguntaByIdEncuesta([FromBody] PagedIdenEncuesta request)
        {
            var o = _EncuestaAplicacion.GetListarPreguntaByIdEncuesta(request);
            return o;
        }

        [HttpPost]
        [Route("GetListEncuestadoRespuestaPreguntaByIdEncuesta")]
        public List<EncuestadoPreguntaRespuestaResponse> GetListEncuestadoRespuestaPreguntaByIdEncuesta([FromBody] PagedIdenEncuesta request)
        {
            var o = _EncuestaAplicacion.GetListEncuestadoRespuestaPreguntaByIdEncuesta(request);
            return o;
        }

        [HttpPost]
        [Route("GetListEncuestadosByIdEncuesta")]
        public List<EncuestadoPreguntaRespuestaResponse> GetListEncuestadosByIdEncuesta([FromBody] PagedIdenEncuesta request)
        {
            var o = _EncuestaAplicacion.GetListEncuestadosByIdEncuesta(request);
            return o;
        }

        [HttpPost]
        [Route("GetListReporteExcel")]
        public List<EncuestadoPreguntaRespuestaResponse> GetListReporteExcel([FromBody] PagedIdenEncuesta request)
        {
            var o = _EncuestaAplicacion.GetListReporteExcel(request);
            return o;
        }
        [HttpPost]
        [Route("GetListAvanceByIdEncuesta")]
        public List<EncuestaAvanceResponseList> GetListAvanceByIdEncuesta([FromBody] PagedIdenEncuesta request)
        {
            var o = _EncuestaAplicacion.GetListAvanceByIdEncuesta(request);
            return o;
        }
        [HttpPost]
        [Route("GetListResultadosByIdEncuesta")]
        public List<EncuestaResultadosResponseList> GetListResultadosByIdEncuesta([FromBody] PagedIdenEncuesta request)
        {
            var o = _EncuestaAplicacion.GetListResultadosByIdEncuesta(request);
            return o;
        }
        #endregion
    }
}

