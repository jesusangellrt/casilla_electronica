using Microsoft.AspNetCore.Mvc;
using Prod.SNE.Core.Aplicacion.Interfaces;
using Prod.SNE.Entidades;
using Release.Helper;
using Release.Helper.Pagination;

namespace Prod.SNE.Core.Controllers
{
    [Route("[controller]")]
    public class ConfiguracionInicialController: Controller
    {
        private readonly IConfiguracionInicialAplicacion _configuracionInicialAplicacion;
        public ConfiguracionInicialController(IConfiguracionInicialAplicacion configuracionInicialAplicacion)
        {
            _configuracionInicialAplicacion = configuracionInicialAplicacion;
        }

        [HttpGet]
        [Route("GetActualConfiguracion")]
        public ConfiguracionInicialResponse GetActualConfiguracion([FromBody] int id_tipo_encuesta)
        {
            var o = _configuracionInicialAplicacion.getActualConfiguracion(id_tipo_encuesta);
            return o;
        }

        [HttpPost]
        [Route("SaveUpdateConfiguracion")]
        public StatusResponse SaveUpdateConfiguracion([FromBody] ConfiguracionInicialSaveUpdateRequest req)
        {
            var o = _configuracionInicialAplicacion.SaveUpdateConfiguracion(req);
            return o;
        }
    }
}
