using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Entidades
{
    public class PersonaRequest
    {
        public int ID { get; set; }
        public string numero_documento { get; set; }
        public string direccion { get; set; }
        public string cod_departamento { get; set; }
        public string cod_provincia { get; set; }
        public string cod_distrito { get; set; }
        public string telefono { get; set; }
        public string celular { get; set; }
        public string correo { get; set; }
        public string email { get; set; }
    }
}
