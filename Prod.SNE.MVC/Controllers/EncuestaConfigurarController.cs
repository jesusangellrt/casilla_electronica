using Microsoft.AspNetCore.Mvc;
using Prod.SNE.Entidades;
using Prod.SNE.MVC.Configuracion.Proxys;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Prod.SNE.MVC.Controllers
{
    [Route("api/encuestaConfigurar")]
    public class EncuestaConfigurarController : CustomBaseController
    {
        private readonly EncuestaConfigurarProxy _encuestaConfigurarProxy;
        public EncuestaConfigurarController(EncuestaConfigurarProxy encuestaConfigurarProxy)
        {
            this._encuestaConfigurarProxy = encuestaConfigurarProxy;
        }

        [HttpPost]
        [Route("GetListEncuestados")]
        public IActionResult GetListEncuestados([FromBody] EncuestadoresRequest request)
        {
            var result = _encuestaConfigurarProxy.GetListEncuestados(request);
            return _Response(result);
        }

        [HttpPost]
        [Route("GetListEncuestadosExtranet")]
        public IActionResult GetListEncuestadosExtranet([FromBody] EncuestadoresExtranetRequest request)
        {
            var result = _encuestaConfigurarProxy.GetListEncuestadosExtranet(request);
            return _Response(result);
        }
    }
}
