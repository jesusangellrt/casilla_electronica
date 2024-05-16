using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Entidades
{
    public class EncuestadoresResponse
    {
        public int codigo_trabajador { get; set; }
        public string dni { get; set; }
        public string nombres_apellidos { get; set; }
        public int codigo_dependencia { get; set; }
        public string dependencia { get; set; }
        public int id_regimen { get; set; }
        public string str_regimen { get; set; }
        public bool es_seleccionado { get; set; }
    }
}
