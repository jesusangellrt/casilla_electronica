using Microsoft.AspNetCore.Mvc;
using Prod.SNE.Entidades;
using Prod.SNE.MVC.Configuracion.Proxys;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.RegularExpressions;
using System.Threading.Tasks;


namespace Prod.SNE.MVC.Controllers
{
    [Route("api/configuracion_inicial")]
    public class ConfiguracionInicialController : CustomBaseController
    {
        private readonly ConfiguracionInicialProxy _configuracionInicialProxy;
        public ConfiguracionInicialController(ConfiguracionInicialProxy _configuracionInicialProxy)
        {
            this._configuracionInicialProxy = _configuracionInicialProxy;
        }

        [HttpGet]
        [Route("GetActualConfiguracion")]
        public IActionResult GetActualConfiguracion(int id_tipo_encuesta)
        {
            var result = _configuracionInicialProxy.GetActualConfiguracion(id_tipo_encuesta);
            return _Response(result);
        }

        [HttpPost]
        [Route("SaveUpdateConfiguracion")]
        public IActionResult SaveUpdateConfiguracion([FromBody] ConfiguracionInicialSaveUpdateRequest req)
        {
            req.user_name = this.GetUser().Usuario.UserName;

            req.ip = this.getIP();

            var result = _configuracionInicialProxy.SaveUpdateConfiguracion(req);
            return _Response(result);
        }
    }
}