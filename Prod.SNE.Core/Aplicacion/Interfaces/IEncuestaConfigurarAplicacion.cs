using Prod.SNE.Entidades;
using Release.Helper.Pagination;
using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Core.Aplicacion.Interfaces
{
    public interface IEncuestaConfigurarAplicacion
    {
        PagedResponse<EncuestadoresResponse> GetListEncuestados(EncuestadoresRequest request);
        PagedResponse<EncuestadoresExtranetResponse> GetListEncuestadosExtranet(EncuestadoresExtranetRequest request);
    }
}
