using Microsoft.AspNetCore.Mvc;
using Prod.SNE.Core.Aplicacion.Interfaces;
using Prod.SNE.Entidades;
using Release.Helper;
using Release.Helper.Pagination;
using System.Collections.Generic;

namespace Prod.SNE.Core.Controllers
{
    [Route("[controller]")]
    public class SisEnumeradoController : Controller
    {
        private readonly ISisEnumeradoAplicacion _sisEnumeradoAplicacion;
        public SisEnumeradoController(ISisEnumeradoAplicacion sisEnumeradoAplicacion)
        {
            _sisEnumeradoAplicacion = sisEnumeradoAplicacion;
        }

        [HttpGet]
        [Route("GetEnumeradoByTipoEnumerado")]
        public List<SisEnumeradoResponse> GetEnumeradoByTipoEnumerado([FromBody] SisTipoEnumeradoRequest req)
        {
            var o = _sisEnumeradoAplicacion.getEnumeradoByTipoEnumerado(req);
            return o;
        }
    }
}

