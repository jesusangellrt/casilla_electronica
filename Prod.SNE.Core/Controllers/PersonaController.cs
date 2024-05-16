
using Microsoft.AspNetCore.Mvc;
using Prod.SNE.Core.Aplicacion.Interfaces;
using Prod.SNE.Entidades;

using Release.Helper;
using Release.Helper.Pagination;
using System.Collections.Generic;

namespace Prod.SNE.Core.Controllers
{
    [Route("[controller]")]
    public class PersonaController : Controller
    {
        private readonly IPersonaAplicacion _personaAplicacion;
        public PersonaController(IPersonaAplicacion personaAplicacion)
        {
            _personaAplicacion = personaAplicacion;
        }

        [HttpGet]
        [Route("GetPersonaList")]
        public PagedResponse<VWPersonaResponse> GetPersonaList([FromBody] VWPersonaRequest filtro)
        {
            var o = _personaAplicacion.GetList(filtro);
            return o;
        }

        [HttpGet]
        [Route("GetPersona")]
        public StatusResponse GetPersona([FromBody] VWPersonaRequest filtro)
        {
            var o = _personaAplicacion.GetBy(filtro);
            return o;
        }
        [HttpGet]
        [Route("GetById")]
        public StatusResponse GetById([FromBody] VWPersonaRequest filtro)
        {
            var o = _personaAplicacion.GetById(filtro);
            return o;
        }
    }
}