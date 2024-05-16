using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Entidades
{
    public class UsuarioProduceVirtualResponse
    {
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public string Nombres { get; set; }
        public string NumeroDocumento { get; set; }
        public long IdUsuario { get; set; }
    }
}
