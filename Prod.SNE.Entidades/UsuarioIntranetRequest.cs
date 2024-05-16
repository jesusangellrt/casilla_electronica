using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Entidades
{
    public class UsuarioIntranetRequest
    {
        public string usuario { get; set; }
        public string clave { get; set; }
        public int id_aplicacion { get; set; }
    }
}
