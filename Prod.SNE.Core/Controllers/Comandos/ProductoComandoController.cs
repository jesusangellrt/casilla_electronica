using Microsoft.AspNetCore.Mvc;
using Prod.SNE.Core.Aplicacion.Interfaces.Comandos;
using Prod.SNE.Entidades.Producto;
using Release.Helper;

namespace Prod.SNE.Core.Controllers
{
    [Route("[controller]")]
    public class ProductoComandoController: Controller
    {
        private readonly IProductoComandoAplicacion _productoComandoAplicacion;

        public ProductoComandoController(IProductoComandoAplicacion productoComandoAplicacion)
        {
            _productoComandoAplicacion = productoComandoAplicacion;
        }

        [HttpPost]
        [Route("Guardar")]
        public StatusResponse GuardarProducto([FromBody] ProductoRequest req)
        {
            var sr = _productoComandoAplicacion.GuardarProducto(req);
            sr.Value = "HOLA MUNDO :D";
            return sr;
        }
    }
}
