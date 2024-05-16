using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Prod.SNE.Entidades;
using Prod.SNE.MVC.Configuracion.Proxys;
using Prod.SNE.MVC.Helpers;
using Prod.ServiciosExternos;
using Release.Helper;

namespace Prod.SNE.MVC.Controllers
{
    [Route("api/persona")]
    public class PersonaController : CustomBaseController
    {
        private readonly IReniecServicio _reniecServicio;
        public PersonaController(IReniecServicio reniecServicio)
        {
            this._reniecServicio = reniecServicio;
        }

        [HttpPost]
        [Route("GetPersona")]
        public IActionResult GetPersona([FromBody]VWPersonaRequest request)
        {
            var result = new StatusResponse() { Success = false };
            if (!string.IsNullOrWhiteSpace(request.NRO_DOCPERNATURAL))
            {
                var validar = this._reniecServicio.Persona_Natural_Reniec(request.NRO_DOCPERNATURAL);
                if (validar.Success)
                {
                    var persona = new PersonaModel()
                    {
                        ID = validar.Data.ID,
                        APELLIDOS = validar.Data.APELLIDOS,
                        NOMBRES = validar.Data.NOMBRES,
                        CELULAR = validar.Data.CELULAR,
                        CODIGO_DEPARTAMENTO = validar.Data.CODIGO_DEPARTAMENTO,
                        CODIGO_DISTRITO = validar.Data.CODIGO_DISTRITO,
                        CODIGO_PROVINCIA = validar.Data.CODIGO_PROVINCIA,
                        DIRECCION = validar.Data.DIRECCION,
                        EMAIL = validar.Data.EMAIL,
                        NRO_DOCPERNATURAL = validar.Data.NRO_DOCPERNATURAL == null ? validar.Data.NRO_DOCUMENTO : validar.Data.NRO_DOCPERNATURAL,
                        RAZON_SOCIAL = validar.Data.RAZON_SOCIAL,
                        NRO_DOCUMENTO = validar.Data.NRO_DOCUMENTO,
                        TELEFONO = validar.Data.TELEFONO
                    };
                    result.Success = true;
                    result.Value = persona;
                }
            }
         
            return _Response(result); 
        }
    }
}