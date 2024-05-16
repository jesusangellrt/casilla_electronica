using Prod.SNE.Entidades;
using Release.Helper;
using Release.Helper.Pagination;
using System.Collections.Generic;

namespace Prod.SNE.Core.Aplicacion.Interfaces
{
    public interface IPermisoAplicacion
    {
        PagedResponse<PermisoResponse> GetList(PermisoRequest request);
        StatusResponse Registrar(PermisoRequest request);
        StatusResponse Eliminar(PermisoRequest request);
        StatusResponse GetById(PermisoRequest request);
        List<PermisoResponse> GetListByRol(PermisoRolRequest request);
    }
}
