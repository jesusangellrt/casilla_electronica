using Microsoft.AspNetCore.Mvc;
using Prod.SNE.Core.Aplicacion.Interfaces;
using Prod.SNE.Entidades;
using Release.Helper;
using Release.Helper.Pagination;
using System.Collections.Generic;

namespace Prod.SNE.Core.Controllers
{
    [Route("[controller]")]
    public class PermisoController : Controller
    {
        private readonly IPermisoAplicacion _permisoAplicacion;
        public PermisoController(IPermisoAplicacion _permisoAplicacion)
        {
            this._permisoAplicacion = _permisoAplicacion;
        }

        [HttpGet]
        [Route("GetPermisoList")]
        public PagedResponse<PermisoResponse> GetPermisoList([FromBody] PermisoRequest filtro)
        {
            var o = _permisoAplicacion.GetList(filtro);
            return o;
        }

        [HttpPost]
        [Route("RegistroPermiso")]
        public StatusResponse RegistroPermiso([FromBody] PermisoRequest filtro)
        {
            var o = _permisoAplicacion.Registrar(filtro);
            return o;
        }

        [HttpPost]
        [Route("EliminarPermiso")]
        public StatusResponse EliminarPermiso([FromBody] PermisoRequest filtro)
        {
            var o = _permisoAplicacion.Eliminar(filtro);
            return o;
        }

        [HttpPost]
        [Route("GetPermisoPorRolList")]
        public List<PermisoResponse> GetPermisoPorRolList([FromBody] PermisoRolRequest request)
        {
            var o = _permisoAplicacion.GetListByRol(request);
            return o;
        }
    }
}
