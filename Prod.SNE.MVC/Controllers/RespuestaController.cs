using Microsoft.AspNetCore.Mvc;
using Prod.SNE.Entidades;
using Prod.SNE.MVC.Configuracion.Proxys;
using Prod.ServiciosExternos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Prod.SNE.MVC.Controllers
{
    [Route("api/respuesta")]
    public class RespuestaController:CustomBaseController
    {
        private readonly RespuestaProxy _RespuestaProxy;
        private readonly IReniecServicio _reniecService;
        private readonly ComunProxy _comunProxy;

        public RespuestaController(RespuestaProxy _RespuestaProxy, 
                                   IReniecServicio _reniecService,
                                   ComunProxy comunProxy
                                   )
        {
            this._RespuestaProxy = _RespuestaProxy;
            this._reniecService = _reniecService;
            _comunProxy = comunProxy;
        }

        [HttpPost]
        [Route("GetPreguntaActualEncuesta")]
        public IActionResult GetPreguntaActualEncuesta([FromBody] StatusRespuestaRequest request)
        {
            var user = this.GetUser().Usuario;
            request.user_name = user.UserName;
            request.dni_trabajador = user.NumeroDocumento;
            var result = _RespuestaProxy.GetPreguntaActualEncuesta(request);
            return _Response(result);
        }

        [HttpPost]
        [Route("UpdatePreguntaActualEncuesta")]
        public IActionResult UpdatePreguntaActualEncuesta([FromBody] UpdateStatusRespuestaRequest request)
        {
            var user = this.GetUser().Usuario;
            request.user_name = user.UserName;
            request.dni_trabajador = user.NumeroDocumento;        
            var x = _comunProxy.GetTrabajador(user.UserName).Data;

            DateTime fecha_nace = Convert.ToDateTime(x.fecha_nacimiento);
            request.edad = DateTime.Today.AddTicks(-fecha_nace.Ticks).Year - 1;
            request.sexo = x.genero == "FEMENINO" ? "F" : "M";

            var result = _RespuestaProxy.UpdatePreguntaActualEncuesta(request);
            return _Response(result);
        }

        [HttpPost]
        [Route("GetRespuestasByEncuestaAndEncuestado")]
        public IActionResult GetRespuestasByEncuestaAndEncuestado([FromBody] StatusRespuestaRequest request)
        {
            var user = this.GetUser().Usuario;
            request.user_name = user.UserName;
            request.dni_trabajador = request.id_tipo_encuesta == (int)TIPO_ENCUESTA.intranet ? user.NumeroDocumento: user.NumeroDocumento == user.RUC ? user.NumeroDocumento : user.RUC;
            request.ruc_encuestado = user.RUC;

            var result = _RespuestaProxy.GetRespuestasByEncuestaAndEncuestado(request);
            return _Response(result);
        }

        [HttpPost]
        [Route("GetDesplegableInstitucional")]
        public IActionResult GetDesplegableInstitucional([FromBody] DesplegableInstitucionalRequest request)
        {
            var result = _RespuestaProxy.GetDesplegableInstitucional(request);
            return _Response(result);
        }


        [HttpPost]
        [Route("SaveAndFinishEncuestaAnonima")]
        public IActionResult SaveAndFinishEncuestaAnonima([FromBody] SaveRespuestaAnonimaRequest request)
        {
            var user = this.GetUser().Usuario;
            request.user_name = user.UserName;
            request.dni_trabajador = user.NumeroDocumento;

            var x = this._reniecService.Buscar(user.NumeroDocumento);
            DateTime fecha_nace = x.Data.fechaNacimiento;
            request.edad = DateTime.Today.AddTicks(-fecha_nace.Ticks).Year - 1;
            request.sexo = x.Data.genero == "FEMENINO" ? "F" : "M";

            var result = _RespuestaProxy.SaveAndFinishEncuestaAnonima(request);
            return _Response(result);
        }

        [HttpPost]
        [Route("GetPreguntaActualEncuestaExtranet")]
        public IActionResult GetPreguntaActualEncuestaExtranet([FromBody] StatusRespuestaRequest request)
        {
            var user = this.GetUser().Usuario;
            request.ruc_encuestado = user.RUC;
            request.dni_trabajador = user.NumeroDocumento == user.RUC ? user.NumeroDocumento : user.RUC;
            var result = _RespuestaProxy.GetPreguntaActualEncuestaExtranet(request);
            return _Response(result);
        }

        [HttpPost]
        [Route("UpdatePreguntaActualEncuestaAdministrado")]
        public IActionResult UpdatePreguntaActualEncuestaAdministrado([FromBody] UpdateStatusRespuestaRequest request)
        {
            var user = this.GetUser().Usuario;
            request.ruc_encuestado = user.RUC;
            request.dni_trabajador = user.NumeroDocumento == user.RUC ? user.NumeroDocumento : user.RUC;
            var result = _RespuestaProxy.UpdatePreguntaActualEncuestaAdministrado(request);
            return _Response(result);
        }
    }
}


//StatusResponse 