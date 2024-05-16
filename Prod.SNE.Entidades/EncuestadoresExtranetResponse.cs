using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Entidades
{
    public class EncuestadoresExtranetResponse
    {
        public int id_encuesta_administrado { get; set; }
        public int id_persona { get; set; }
        public string numero_documento { get; set; }
        public string tipo_persona { get; set; }
        public int id_tipo_persona { get; set; }
        public string codigo_departamento { get; set; }
        public string departamento { get; set; }
        public string razon_social { get; set; }
        public bool es_seleccionado { get; set; }

    }
}
