using Prod.SNE.Core.Aplicacion.Interfaces;
using Prod.SNE.Core.Datos;
using Prod.SNE.Entidades;
using Release.Helper;
using Release.Helper.Data.ICore;
using Release.Helper.Pagination;
using System;
using System.Collections.Generic;

namespace Prod.SNE.Core.Aplicacion
{
    public class PermisoAplicacion : IPermisoAplicacion
    {
        private IContext _context;
        private IUnitOfWork _uow;

        public PermisoAplicacion(IUnitOfWork unitOfWork)
        {
            _uow = unitOfWork;
            _context = _uow.Context;
        }

        public StatusResponse Eliminar(PermisoRequest request)
        {
            throw new NotImplementedException(); //return _permisoProceso.EjecutaEliminar(request);
        }

        public StatusResponse GetById(PermisoRequest request)
        {
            throw new NotImplementedException();
        }

        public PagedResponse<PermisoResponse> GetList(PermisoRequest request)
        {
            throw new NotImplementedException();
        }

        public StatusResponse Registrar(PermisoRequest request)
        {
            throw new NotImplementedException();
        }

        public List<PermisoResponse> GetListByRol(PermisoRolRequest request)
        {
            var res = new List<PermisoResponse>();
            var _new = new PermisoResponse();
            _new.permiso_id =1; _new.nombre = "prueba";
            _new.codigo = "00100";
            res.Add(_new);
            return res;
        }
    }
}
