using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Entidades
{
    public class NotificacionResponse
    {
        public int id_encuesta_notificacion { set; get; }
        public int id_encuesta { set; get; }
        public string titulo { set; get; }
        public DateTime fecha_notificacion { get; set; }
        public string dirigido { get; set; }
        public string dirigido_texto { get; set; }
        public string mensaje { get; set; }
        public string asunto { get; set; }
        public bool es_eliminado { set; get; }
    }
}
