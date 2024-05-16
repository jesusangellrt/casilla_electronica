using Prod.SNE.Core.Aplicacion.Interfaces;
using Prod.SNE.Core.Datos;
using Prod.SNE.Entidades;
using Release.Helper;
using Release.Helper.Data.ICore;
using Release.Helper.Pagination;
using System;

namespace Prod.SNE.Core.Aplicacion
{
    public class PersonaAplicacion : IPersonaAplicacion
    {
        private IContext _context;
        private IUnitOfWork _uow;
        public PersonaAplicacion(IUnitOfWork unitOfWork)
        {
            _uow = unitOfWork;
            _context = _uow.Context;
        }

        public StatusResponse Eliminar(VWPersonaRequest request)
        {
            throw new NotImplementedException();
        }

        public StatusResponse GetById(VWPersonaRequest request)
        {
            throw new NotImplementedException();
        }

        public PagedResponse<VWPersonaResponse> GetList(VWPersonaRequest request)
        {
            throw new NotImplementedException();
        }

        public StatusResponse Registrar(VWPersonaRequest request)
        {
            throw new NotImplementedException();
        }

        public StatusResponse GetBy(VWPersonaRequest request)
        {
            throw new NotImplementedException();
        }
    }
}
