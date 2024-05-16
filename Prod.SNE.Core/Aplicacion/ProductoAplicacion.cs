using Prod.SNE.Core.Aplicacion.Interfaces.Comandos;
using Prod.SNE.Core.Aplicacion.Proceso;
using Prod.SNE.Core.Aplicacion.Validacion;
using Prod.SNE.Entidades.Producto;
using Release.Helper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Prod.SNE.Core.Aplicacion
{
    public class ProductoAplicacion : IProductoComandoAplicacion
    {
        private readonly ProductoProceso _productoProceso;
        private readonly ProductoValidacion _productoValidacion;

        public ProductoAplicacion(ProductoProceso productoProceso, ProductoValidacion productoValidacion)
        {
            _productoProceso = productoProceso;
            _productoValidacion = productoValidacion;
        }

        public StatusResponse GuardarProducto(ProductoRequest request)
        {
            var sr = new StatusResponse() { Success = true };
            sr = _productoProceso.EjecutaRegistrar(request);
            return sr;
        }
    }
}
