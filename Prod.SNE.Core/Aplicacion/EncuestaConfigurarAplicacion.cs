using Prod.SNE.Core.Aplicacion.Interfaces;
using Prod.SNE.Core.Datos;
using Prod.SNE.Entidades;
using Release.Helper.Data.ICore;
using Release.Helper.Pagination;
using System.Linq;
using Modelo = Prod.SNE.Datos.Modelo;

namespace Prod.SNE.Core.Aplicacion
{
    public class EncuestaConfigurarAplicacion : IEncuestaConfigurarAplicacion
    {
        private IContext _context;
        private IUnitOfWork _uow;

        public EncuestaConfigurarAplicacion(IUnitOfWork unitOfWork)
        {
            _uow = unitOfWork;
            _context = _uow.Context;
        }

        public PagedResponse<EncuestadoresResponse> GetListEncuestados(EncuestadoresRequest request)
        {
            var config = (from trabajador in _context.Query<Modelo.vw_trabajador>().Where(x => x.ESTADO == "ACTIVO")
                          join depen in _context.Query<Modelo.vw_dependencia>() on trabajador.CODIGO_DEPENDENCIA equals depen.CODIGO_DEPENDENCIA into dep
                          from dependencia in dep.DefaultIfEmpty()
                          join reg in _context.Query<Modelo.vw_regimen>() on trabajador.ID_REGIMEN equals reg.ID_REGIMEN into regi
                          from regimen in regi.DefaultIfEmpty()
                          where
                            (request.codigo_dependencia == null || trabajador.CODIGO_DEPENDENCIA == request.codigo_dependencia)
                            && (request.id_regimen == null || trabajador.ID_REGIMEN == request.id_regimen)
                            && (request.dni == null || string.IsNullOrEmpty(request.dni) || trabajador.DNI.ToUpper().Contains(request.dni.ToUpper()))
                            && (request.nombres_apellidos == null || string.IsNullOrEmpty(request.nombres_apellidos) || trabajador.NOMBRES_TRABAJADOR.ToUpper().Contains(request.nombres_apellidos.ToUpper()) || trabajador.APELLIDOS_TRABAJADOR.ToUpper().Contains(request.nombres_apellidos.ToUpper()))
                          select new EncuestadoresResponse
                          {
                              codigo_trabajador = trabajador.CODIGO_TRABAJADOR,
                              dni = trabajador.DNI,
                              nombres_apellidos = trabajador.NOMBRES_TRABAJADOR + " " + trabajador.APELLIDOS_TRABAJADOR,
                              dependencia = dependencia.DEPENDENCIA,
                              str_regimen = regimen.DESCRIPCION,
                              es_seleccionado = false                            
                          }).OrderByDescending(x => x.dni).PagedResponse(request);
            return config;
        }

        public PagedResponse<EncuestadoresExtranetResponse> GetListEncuestadosExtranet(EncuestadoresExtranetRequest request)
        {
            var config = _uow.GetListEncuestadosExtranet(request);
            return config;
        }
    }
}
