using Prod.SNE.Entidades;
using Release.Helper;
using Release.Helper.Pagination;

namespace Prod.SNE.Core.Aplicacion.Interfaces
{
    public interface IPersonaAplicacion
    {
        PagedResponse<VWPersonaResponse> GetList(VWPersonaRequest request);
        StatusResponse Registrar(VWPersonaRequest request);
        StatusResponse Eliminar(VWPersonaRequest request);
        StatusResponse GetById(VWPersonaRequest request);
        StatusResponse GetBy(VWPersonaRequest request);
    }
}
