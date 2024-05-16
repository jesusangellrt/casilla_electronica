using Prod.SNE.Core.Datos;
using Prod.SNE.Datos;
using Prod.SNE.Entidades.Producto;
using Release.Helper;
using Release.Helper.Data.ICore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Prod.SNE.Core.Aplicacion.Validacion
{
    public class ProductoValidacion: ValidacionGenerica
    {
        private IContext _context;
        private IUnitOfWork _uow;
        public ProductoValidacion(IUnitOfWork unitOfWork)
        {
            _uow = unitOfWork;
            _context = _uow.Context;
        }

        public List<string> ValidarProducto(ProductoRequest request)
        {

            return Msg;
        }
    }
}
