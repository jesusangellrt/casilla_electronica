using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Entidades
{
    public class SeccionRequest
    {
        public bool? files_only { set; get; }
        public int id_encuesta_seccion { set; get; }
        public int id_encuesta { set; get; }
        public string seccion { set; get; }
        public string user_name { set; get; }
    }

    public class SeccionOrdenamientoRequest
    {
        public List<SeccionOrdenamientoList> lista { get; set; }
    }

    public class SeccionOrdenamientoList
    {
        public int orden { get; set; }
        public int id_encuesta_seccion { get; set; }
        public string seccion { get; set; }
    }
}
