using Prod.SNE.Entidades;
using Release.Helper;
using Release.Helper.Pagination;
using System.Collections.Generic;

namespace Prod.SNE.Core.Aplicacion.Interfaces
{
    public interface IRespuestaAplicacion
    {
        StatusResponse GetPreguntaActualEncuesta(StatusRespuestaRequest request);
        StatusResponse UpdatePreguntaActualEncuesta(UpdateStatusRespuestaRequest req);

        List<RespuestasIngresadasResponse> GetRespuestasByEncuestaAndEncuestado(StatusRespuestaRequest request);
        List<BasicGroupedSelectResponse> GetDesplegableInstitucional(DesplegableInstitucionalRequest request);

        StatusResponse SaveAndFinishEncuestaAnonima(SaveRespuestaAnonimaRequest request);
        StatusResponse GetPreguntaActualEncuestaExtranet(StatusRespuestaRequest request);
        StatusResponse UpdatePreguntaActualEncuestaAdministrado(UpdateStatusRespuestaRequest req);

    }
}
