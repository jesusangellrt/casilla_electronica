using Prod.SNE.Entidades.Producto;
using Release.Helper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Prod.SNE.Core.Aplicacion.Interfaces.Comandos
{
    public interface IProductoComandoAplicacion
    {
        StatusResponse GuardarProducto(ProductoRequest request);
    }
}
