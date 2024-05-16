using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Prod.SNE.Core.Controllers.Consultas
{
    [Route("[controller]")]
    public class ComunConsultaController : BaseController
    {

        public ComunConsultaController()
        {

        }

        [HttpGet]
        [Route("GetFullName")]
        public IActionResult GetFullName()
        {
            return Ok("Hola");
        }
    }
}
