using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Entidades
{
    public class NotificacionRequest
    {
        public bool? files_only { set; get; }
        public int id_encuesta_notificacion { set; get; }
        public int id_encuesta { set; get; }
        public string titulo { set; get; }
        public string asunto { set; get; }
        public string dirigido { set; get; }
        public DateTime fecha_notificacion { set; get; }
        public string mensaje { set; get; }
        public string user_name { set; get; }

    }
}
