using Microsoft.AspNetCore.Mvc;
using Prod.SNE.Core.Aplicacion.Interfaces;
using Prod.SNE.Entidades;
using Release.Helper;
using Release.Helper.Pagination;
using System.Collections.Generic;

namespace Prod.SNE.Core.Controllers
{
    [Route("[controller]")]
    public class RespuestaController : Controller
    {
        private readonly IRespuestaAplicacion _IRespuestaAplicacion;
        public RespuestaController(IRespuestaAplicacion _IRespuestaAplicacion)
        {
            this._IRespuestaAplicacion = _IRespuestaAplicacion;
        }

        [HttpGet]
        [Route("GetPreguntaActualEncuesta")]
        public StatusResponse GetPreguntaActualEncuesta([FromBody] StatusRespuestaRequest request)
        {
            var o = _IRespuestaAplicacion.GetPreguntaActualEncuesta(request);
            return o;
        }
        [HttpGet]
        [Route("UpdatePreguntaActualEncuesta")]
        public StatusResponse UpdatePreguntaActualEncuesta([FromBody] UpdateStatusRespuestaRequest request)
        {
            var o = _IRespuestaAplicacion.UpdatePreguntaActualEncuesta(request);
            return o;
        }
        [HttpGet]
        [Route("GetRespuestasByEncuestaAndEncuestado")]
        public List<RespuestasIngresadasResponse> GetRespuestasByEncuestaAndEncuestado([FromBody] StatusRespuestaRequest request)
        {
            var o = _IRespuestaAplicacion.GetRespuestasByEncuestaAndEncuestado(request);
            return o;
        }

        [HttpGet]
        [Route("GetDesplegableInstitucional")]
        public List<BasicGroupedSelectResponse> GetDesplegableInstitucional([FromBody] DesplegableInstitucionalRequest request) {
            var o = _IRespuestaAplicacion.GetDesplegableInstitucional(request);
            return o;
        }

        [HttpGet]
        [Route("SaveAndFinishEncuestaAnonima")]
        public StatusResponse SaveAndFinishEncuestaAnonima([FromBody] SaveRespuestaAnonimaRequest request) {
            var o = _IRespuestaAplicacion.SaveAndFinishEncuestaAnonima(request);
            return o;
        }

        [HttpGet]
        [Route("GetPreguntaActualEncuestaExtranet")]
        public StatusResponse GetPreguntaActualEncuestaExtranet([FromBody] StatusRespuestaRequest request)
        {
            var o = _IRespuestaAplicacion.GetPreguntaActualEncuestaExtranet(request);
            return o;
        }

        [HttpGet]
        [Route("UpdatePreguntaActualEncuestaAdministrado")]
        public StatusResponse UpdatePreguntaActualEncuestaAdministrado ([FromBody] UpdateStatusRespuestaRequest request)
        {
            var o = _IRespuestaAplicacion.UpdatePreguntaActualEncuestaAdministrado(request);
            return o;
        }
    }
}
