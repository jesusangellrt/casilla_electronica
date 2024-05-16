using Microsoft.AspNetCore.Mvc;
using Prod.SNE.Entidades;
using Prod.SNE.MVC.Configuracion.Proxys;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Prod.SNE.MVC.Controllers
{
    [Route("api/sis_enumerado")]
    public class SisEnumeradoController : CustomBaseController
    {
        private readonly SisEnumeradoProxy _sisEnumeradoProxy;
        public SisEnumeradoController(SisEnumeradoProxy _sisEnumeradoProxy)
        {
            this._sisEnumeradoProxy = _sisEnumeradoProxy;
        }

        [HttpPost]
        [Route("GetEnumeradoByTipoEnumerado")]
        public IActionResult GetEnumeradoByTipoEnumerado([FromBody] SisTipoEnumeradoRequest req)
        {
            var result = _sisEnumeradoProxy.GetEnumeradoByTipoEnumerado(req);
            return _Response(result);
        }
    }
}