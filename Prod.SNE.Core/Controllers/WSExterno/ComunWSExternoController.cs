using Microsoft.AspNetCore.Mvc;
using Prod.SNE.Core.Aplicacion.Interfaces;
using Prod.SNE.Entidades;
using Release.Helper;
using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Core.Controllers
{
    [Route("[controller]")]
    public class ComunWSExternoController : Controller
    {
        private readonly IComunAplicacion _comunAplicacion;
        public ComunWSExternoController(IComunAplicacion comunAplicacion)
        {
            _comunAplicacion = comunAplicacion;
        }
    }
}
