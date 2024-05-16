using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Entidades
{
   public class PersonaResponse
    {
        public int ID { get; set; }
        public string NRO_DOCUMENTO { get; set; }
        public string RAZON_SOCIAL { get; set; }
        public string NOMBRES { get; set; }
        public string APELLIDOS { get; set; }
        public string CODIGO_DEPARTAMENTO { get; set; }
        public string CODIGO_PROVINCIA { get; set; }
        public string CODIGO_DISTRITO { get; set; }
        public string DIRECCION { get; set; }
        public string TELEFONO { get; set; }
        public string EMAIL { get; set; }
        public string CELULAR { get; set; }
    }
}
