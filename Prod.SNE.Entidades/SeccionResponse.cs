using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Entidades
{
    public class SeccionResponse
    {
        public int id_encuesta_seccion { set; get; }
        public int id_encuesta { set; get; }
        public string seccion { set; get; }
        public int orden { get; set; }
        public bool es_eliminado { set; get; }
    }

    public class SeccionListResponse
    {
        public int id_encuesta_seccion { set; get; }
        public int id_encuesta { set; get; }
        public string seccion { set; get; }
        public int orden { get; set; }
        public bool es_eliminado { set; get; }
        public bool resuelto { get; set; } = false;
        public bool actual { get; set; } = false;
        public List<PreguntasSeccionResponseList> preguntas { get; set; } 
    }
    public class PreguntasSeccionResponseList
    {
        public int id_encuesta { set; get; }
        public int id_pregunta { set; get; }
        public string pregunta { set; get; }
        public int id_tipo_pregunta { set; get; }
        public string tipo_pregunta { set; get; }
        public bool es_obligatorio { set; get; }
        public int? id_categoria { set; get; }
        public string categoria { set; get; }
        public int? id_sub_categoria { set; get; }
        public string sub_categoria { set; get; }
        public string descripcion { set; get; }
        public int? id_tipo_archivo { set; get; }
        public string tipo_archivo { set; get; }
        public string iden_imagen { set; get; }
        public string url_video { set; get; }
        public string json_alternativas { set; get; }
        public bool? por_defecto { set; get; }
        public bool? es_condicional { set; get; }
        public bool? es_condicionada { set; get; }
        public int? id_pregunta_condicional { set; get; }
        public string json_respuesta_condicional { set; get; }
        public string json_archivo_tipo_archivo { set; get; }
        public bool es_agregar_pregunta { set; get; }
        public string condicional { get; set; }
        public string condicionada { get; set; }
        public int? orden { get; set; }
        public bool es_finaliza_encuesta { set; get; }
        public bool resuelto { get; set; } = false;
        public bool actual { get; set; } = false;
        public string seccion { get; set; }
        public int orden_seccion { get; set; }
        public int? id_encuesta_seccion { get; set; }
        public string json_tipo_fecha { get; set; }
    }

    public class SeccionListRequest
    {
        public int id_encuesta_seccion { set; get; }
        public int id_encuesta { set; get; }
        public string seccion { set; get; }
        public int orden { get; set; }
        public bool es_eliminado { set; get; }
        public bool resuelto { get; set; } = false;
        public bool actual { get; set; } = false;
        public List<PreguntasSeccionResponseList> preguntas { get; set; }
    }

    public class SeccionListOrdenamientoRequest
    {
        public List<SeccionListRequest> secciones { get; set; }
    }

}
