using Newtonsoft.Json;
using Release.Helper.Pagination;
using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Entidades
{
    public class PreguntaCondicionaldaRequestList
    {
        public int id_encuesta { set; get; }
        public bool es_autorizado_datos { get; set; }
        public bool es_actualizar { get; set; } = false;
    }

    public class PreguntasRequestList : PagedRequest
    {
        public int id_encuesta { set; get; }
        public Nullable<bool> mostar_solo_condicional { set; get; }
    }
    public class PreguntasIdenRequest : PagedRequest
    {
        public int id_pregunta { set; get; }
    }
    public class PaginadoPreguntasResponse
    {
        public string json { set; get; }
    }
    public class PaginadoPreguntasRequest : PagedRequest
    {
        public int id_encuesta { set; get; }
        public string dni_trabajador { set; get; }
        public int id_tipo_encuesta { get; set; }
    }

    public class PreguntasResponseList
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
        public Nullable<int> id_encuesta_seccion { get; set; }
        public string seccion { get; set; }
        public int orden_seccion { get; set; }
        public string json_tipo_fecha { get; set; }
    }

    public class PreguntaSaveUpdateRequest {
        public bool? files_only { set; get; }
        public int id_encuesta { set; get; }
        public int id_pregunta { set; get; }
        public string pregunta { set; get; }
        public int id_tipo_pregunta { set; get; }
        public bool es_obligatorio { set; get; }
        public int? id_categoria { set; get; }
        public int? id_sub_categoria { set; get; }
        public string descripcion { set; get; }
        public int? id_tipo_archivo { set; get; }
        public string iden_imagen { set; get; }
        public string url_video { set; get; }
        public string json_alternativas { set; get; }
        public string user_name { set; get; }


        public bool? es_condicional { set; get; }
        public bool? es_condicionada { set; get; }
        public int? id_pregunta_condicional { set; get; }
        public string json_respuesta_condicional { set; get; }
        public string json_archivo_tipo_archivo { get; set; }
        public bool es_agregar_pregunta { set; get; }
        public bool es_finaliza_encuesta { get; set; } = false;
        public Nullable<int> id_encuesta_seccion { get; set; }
        public string json_tipo_fecha { get; set; }
    }

    public class PreguntaOrdenamientoRequest
    {
        public List<PreguntaOrdenamientoList> lista { get; set; }
    }

    public class PreguntaOrdenamientoList
    {
        public int? orden { get; set; }
        public int id_pregunta { get; set; }
        public bool? es_condicional { get; set; }
        public bool? es_condicionada { get; set; }
        public int? id_pregunta_condicional { get; set; }
        public string pregunta { get; set; }
    }
}
