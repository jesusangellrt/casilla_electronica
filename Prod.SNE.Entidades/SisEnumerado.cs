using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Entidades
{
    public class SisTipoEnumeradoRequest
    {
        public int id_tipo_enumerado { set; get; }
        public int id_tipo_encuesta { get; set; }
    }
    public class SisEnumeradoResponse
    {
        public int id_tipo_enumerado { set; get; }
        public int id_enumerado { set; get; }
        public string nombre { set; get; }
        public bool? es_eliminado { set; get; }
        public bool selected { get; set; } = false;
    }
}
