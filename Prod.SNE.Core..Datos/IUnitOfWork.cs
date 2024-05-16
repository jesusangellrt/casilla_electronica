using Prod.SNE.Entidades;
using Release.Helper;
using Release.Helper.Data.ICore;
using Release.Helper.Pagination;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Prod.SNE.Core.Datos
{
    public interface IUnitOfWork : IBaseUnitOfWork
    {
        IEnumerable<int> GetListId();
        StatusResponse SaveUpdateEncuestaData(EncuestaSaveUpdateRequest request);
        StatusResponse Prepublicar(BasicDeleteRequest request);


        List<EncuestaByEncuestadoItem> GetEncuestasListByUser(EncuestaByEncuestadoRequestList req);

        StatusResponse GetPreguntaActualEncuesta(StatusRespuestaRequest req);
        StatusResponse UpdatePreguntaActualEncuesta(UpdateStatusRespuestaRequest req);
        List<BasicSelectResponse> GetDesplegableInstitucional(DesplegableInstitucionalRequest req);
        List<PreguntasResponseList> GetPreguntasCondicionalesByEncuesta(PreguntaCondicionaldaRequestList request);
        List<ChartAnalisisResponse> getResultado_byDependencia(int id_encuesta);
        List<ChartAnalisisResponse> getResultado_byEdades(int id_encuesta);
        List<ChartAnalisisResponse> getResultado_bySexo(int id_encuesta);
        List<ChartAnalisisResponse> getResultado_byRegimen(int id_encuesta);

        StatusResponse SaveUpdateCategorias(string xml, int id_categoria, string nombre, string username);
        List<EncuestaByEncuestadoItem> GetEncuestasListByUserExtranet(EncuestaByEncuestadoRequestList req);
        StatusResponse GetPreguntaActualEncuestaExtranet(StatusRespuestaRequest req);
        StatusResponse UpdatePreguntaActualEncuestaAdministrado(UpdateStatusRespuestaRequest req);
        StatusResponse SaveUpdateCategoriasExtranet(string xml, int id_categoria_extranet, string nombre, string username);
        StatusResponse SaveEncuestaAdministradoExtranet(EncuestaByEncuestadoRequestList req);
        StatusResponse InsertarEncuestasByAdministrado(EncuestaByEncuestadoRequestList req);
        PagedResponse<EncuestadoresExtranetResponse> GetListEncuestadosExtranet(EncuestadoresExtranetRequest req);
        List<PreguntaResponse> GetListarPreguntaByIdEncuesta(PagedIdenEncuesta req);
        List<EncuestadoPreguntaRespuestaResponse> GetListEncuestadoRespuestaPreguntaByIdEncuesta(PagedIdenEncuesta req);
        List<EncuestadoPreguntaRespuestaResponse> GetListEncuestadosByIdEncuesta(PagedIdenEncuesta req);
        List<EncuestadoPreguntaRespuestaResponse> GetListReporteExcel(PagedIdenEncuesta req);
        List<EncuestaResultadosResponseList> GetListResultadosByIdEncuesta(PagedIdenEncuesta req);
        List<EncuestaAvanceResponseList> GetListAvanceByIdEncuesta(PagedIdenEncuesta req);
    }
}
