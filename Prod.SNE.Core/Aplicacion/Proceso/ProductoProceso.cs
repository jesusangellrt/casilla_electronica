using Prod.SNE.Core.Datos;
using Prod.SNE.Entidades.Producto;
using Release.Helper;
using Release.Helper.Data.ICore;

namespace Prod.SNE.Core.Aplicacion.Proceso
{
    public class ProductoProceso : AccionGenerica<ProductoRequest>
    {

        private IContext _context;
        private IUnitOfWork _uow;

        public ProductoProceso(IUnitOfWork unitOfWork)
        {
            _uow = unitOfWork;
            _context = _uow.Context;
        }
        protected override StatusResponse Registrar(ProductoRequest request)
        {
            var sr = new StatusResponse { Success = true };

            return sr;
        }
    }
}
