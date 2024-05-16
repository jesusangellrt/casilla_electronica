using Prod.SNE.Entidades;
using Release.Helper;
using Release.Helper.Pagination;
using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Core.Aplicacion.Interfaces
{
    public interface ISisEnumeradoAplicacion
    {
        List<SisEnumeradoResponse> getEnumeradoByTipoEnumerado(SisTipoEnumeradoRequest req);
    }
}


