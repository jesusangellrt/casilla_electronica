using Microsoft.AspNetCore.Mvc;
using Prod.SNE.Core.Aplicacion.Interfaces;
using Prod.SNE.Entidades;
using Release.Helper.Pagination;
using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Core.Controllers
{
    [Route("[controller]")]
    public class EncuestaConfigurarController : Controller
    {

        private readonly IEncuestaConfigurarAplicacion _encuestaConfigurarAplicacion;
        public EncuestaConfigurarController(IEncuestaConfigurarAplicacion encuestaConfigurarAplicacion)
        {
            this._encuestaConfigurarAplicacion = encuestaConfigurarAplicacion;
        }

        [HttpPost]
        [Route("GetListEncuestados")]
        public PagedResponse<EncuestadoresResponse> GetListEncuestados([FromBody] EncuestadoresRequest request)
        {
            var o = this._encuestaConfigurarAplicacion.GetListEncuestados(request);
            return o;
        }

        [HttpPost]
        [Route("GetListEncuestadosExtranet")]
        public PagedResponse<EncuestadoresExtranetResponse> GetListEncuestadosExtranet([FromBody] EncuestadoresExtranetRequest request)
        {
            var o = this._encuestaConfigurarAplicacion.GetListEncuestadosExtranet(request);
            return o;
        }
    }
}
