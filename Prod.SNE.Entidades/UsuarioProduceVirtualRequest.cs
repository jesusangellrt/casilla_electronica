using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Entidades
{
    public class UsuarioProduceVirtualRequest
    {
        public int IdAplicacion { get; set; }
        public int? IdRol { get; set; }
        public string NombreRol { get; set; }
        public string NumeroDocumento { get; set; }
        public string TipoRol { get; set; }

    }
}
