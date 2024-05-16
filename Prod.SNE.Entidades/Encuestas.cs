using Release.Helper.Pagination;
using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Entidades
{
    public class EncuestaByEncuestadoRequestList : PagedRequest
    {
        public string dni_user { set; get; }
        public int id_dependencia { set; get; }
        public DateTime today { set; get; }
        public int? id_tipo_encuesta { get; set; }
        public int? id_encuesta { get; set; }
        public string usuario { set; get; }
    }
    public class EncuestaByEncuestadoItem
    {
        public int id_encuesta { set; get; }
        public string titulo { set; get; }
        public string mensaje_corto_presentacion { set; get; }
        public DateTime fecha_inicio { set; get; }
        public DateTime fecha_fin { set; get; }
        public bool? es_anonima { set; get; }
        public int? id_grupo_encuestado { set; get; }
        public bool? resuelto { set; get; }
        public int? id_estado_resuelto { set; get; }
        public string estado_resuelto { set; get; }
        public string iden_imagen_presentacion { set; get; }
        public int? conteo_resuelto { set; get; }
        public int total_preguntas { set; get; }
        public DateTime? fecha_resuelto { set; get; }
        public DateTime? fecha_publicacion { set; get; }
    }

    public class EncuestaRequestList: PagedRequest
    {
        public string titulo { set; get; }
        public int? estado { set; get; }
        public int id_dependencia { set; get; }
        public DateTime? fecha_inicio { set; get; }
        public DateTime? fecha_fin { set; get; }
        public bool? show_all { set; get; }
        public int? id_tipo_encuesta { get; set; }

    }

    public class EncuestaRequestByUserListAll: PagedRequest
    {
        public string titulo { set; get; }
        public int? estado { set; get; }
        public string dni_trabajador { set; get; }
        public DateTime? fecha_inicio { set; get; }
        public DateTime? fecha_fin { set; get; }
    }
    public class EncuestaResponseListAll
    {
        public int id_encuesta { set; get; }
        public string titulo { set; get; }
        public string descripcion { set; get; }
        public int? id_estado_resuelto { set; get; }
        public bool es_anonima { set; get; }
        public bool? resuelto { set; get; }
        public string iden_imagen { set; get; }
        public int conteo_resuelto { set; get; }
        public int total_preguntas { set; get; }

        public DateTime inicio{ set; get; }
        public DateTime fin { set; get; }
        public DateTime fin_semana { set; get; }

    }
    public class PagedIdenEncuesta : PagedRequest
    {
        public int id_encuesta { set; get; }

    }
    public class RespuestasEncuestaItemList
    {
        public int id_respuesta { set; get; }
        public int? edad { set; get; }
        public string regimen { set; get; }
        public string sexo { set; get; }
        public List<RespuestaPreguntaBasic> Preguntas { set; get; }
    }

    public class RespuestaPreguntaBasic
    {
        public int id_pregunta { set; get; }
        public string pregunta { set; get; }
        public string json_respuestas { set; get; }
    }

    public class RespuestasEncuestaExtranetItemList
    {
        public int id_respuesta { set; get; }
        public string numero_documento { set; get; }
        public string razon_social { set; get; }
        public List<RespuestaPreguntaBasicExtranet> Preguntas { set; get; }
    }

    public class RespuestaPreguntaBasicExtranet
    {
        public int id_pregunta { set; get; }
        public string pregunta { set; get; }
        public string json_respuestas { set; get; }
        public int id_tipo_pregunta { set; get; }
    }

    public class PreguntaResponse
    {
        public int id_pregunta { set; get; }
        public string pregunta { set; get; }
        public string json_respuestas { set; get; }
        public int id_tipo_pregunta { set; get; }
        public string json_tipo_fecha { set; get; }
        public int orden_seccion { get; set; }
        public int orden_pregunta { get; set; }
        public bool es_condicionada { get; set; }
    }

    public class EncuestadoPreguntaRespuestaResponse
    {
        public string ruc_administrado { set; get; }
        public string razon_social { set; get; }
        public int id_respuesta { set; get; }
        public string json_respuestas { set; get; }
        public int id_pregunta { set; get; }  
        public string pregunta { set; get; }
        public int id_tipo_pregunta { get; set; }
        public string desc_pregunta { set; get; }
        public string seccion { set; get; }
        public int orden_seccion { get; set; }
        public int orden_pregunta { get; set; }
        public string json_tipo_fecha { set; get; }
    }

    public class EncuestaResponseList
    {
        public int id_encuesta { set; get; }
        public string titulo { set; get; }
        public bool es_anonimo { set; get; }
        public int id_estado { set; get; }
        public string total_encuestados{ set; get; }
        public bool es_eliminado { set; get; }
        public DateTime? fecha_vigencia { set; get; }
        public DateTime? fecha_inicio { set; get; }
        public DateTime? fecha_fin { set; get; }
        public string estado_name { set; get; }

        public string nro_informe { get; set; }
        public string iden_pdf_resultados { get; set; }
        public string iden_pdf_resultados_completo { get; set; }
        public DateTime? fecha_publicacion { get; set; }
        public bool es_con_seccion_pregunta { get; set; }
    }

    public class EncuestaIDENRequest {
        public int id_encuesta {set;get;}
    }
    public class EncuestaResponseData {
        public EncuestaMainData encuesta { set; get; }
        public EncuestaBienvenidaData bienvenida { set; get; }
        public EncuestaAgradecimientoData agradecimiento { set; get; }

    }
    public class EncuestaMainData {
        public int id_encuesta { get; set; }
        public int id_dependendia { get; set; }
        public string dependencia_name { get; set; }
        public string titulo { get; set; }
        public string encabezado { get; set; }
        public string objetivo { get; set; }
        public string descripcion { get; set; }
        public Nullable<DateTime> fecha_inicio { get; set; }
        public Nullable<DateTime> fecha_fin { get; set; }
        public int tiempo_estimado { get; set; }
        public bool es_anonima { get; set; }
        public string mensaje_es_anonima { get; set; }
        public bool es_todos { get; set; }
        public string iden_imagen_presentacion { get; set; }
        public string mensaje_corto_presentacion { get; set; }
        public int id_estado { get; set; }
        public string estado_name{ get; set; }

        public string nro_informe { get; set; }
        public string pdf_completo { get; set; }
        public string pdf_encuestado { get; set; }
        public bool es_con_seccion_pregunta { get; set; }
        public bool es_autorizado_datos { get; set; }
    }
    public class EncuestaBienvenidaData {
        public int id_encuesta_bienvenida { get; set; }
        public int id_encuesta { get; set; }
        public string indicaciones { get; set; }
        public string iden_audio { get; set; }
        public Nullable<int> id_tipo_archivo { get; set; }
        public string iden_imagen { get; set; }
        public string url_video { get; set; }
        public bool es_activar_audio { get; set; }
        public string iden_terminos_condiciones { get; set; }
    }
    public class EncuestaAgradecimientoData{
        public int id_encuesta_agradecimiento { get; set; }
        public int id_encuesta { get; set; }
        public string mensaje_agradecimiento { get; set; }
        public string iden_audio { get; set; }
        public Nullable<int> id_tipo_archivo { get; set; }
        public string iden_imagen { get; set; }
        public string url_video { get; set; }
        public bool es_activar_audio { get; set; }
    }

    public class EncuestaSaveUpdateRequest { 
        public string ip { set; get; }
        public bool? files_only { set; get; }
        public string ussername { set; get; }
        public EncuestaMainData encuesta { set; get; }
        public EncuestaBienvenidaData bienvenida { set; get; }
        public EncuestaAgradecimientoData agradecimiento { set; get; }
        public int? tipo_encuesta { get; set; }
    }



    public class EncuestadosRequestList : PagedRequest
    {
        public int id_encuesta { set; get; }
        public string dni { set; get; }
        public string nombres { set; get; }
    }
    public class EncuestadosItemList {
        public int id_grupo_encuestado { set; get; }
        public int id_encuesta { set; get; }
        public int? id_trabajador { set; get; }
        public int? id_dependencia { set; get; }
        public string nombre_trabajador{ set; get; }
        public string apellidos_trabajador { set; get; }
        public string dependecia { set; get; }
        public string regimen { set; get; }
        public bool resuelto { set; get; }

    }
    public class EncuestaResultadosSaveRequest
    {
        public int id_encuesta { set; get; }
        public string nro_informe { set; get; }
        public string iden_pdf_encuestado { set; get; }
        public string iden_pdf_completo { set; get; }
    }
    public class EncuestadosEncuestaSaveRequest { 
        public List<EncuestadosSaveItem> data { set; get; }
        public string user_name { set; get; }
    }

    public class EncuestadosEncuestaExtranetSaveRequest
    {
        public List<EncuestadosExtranetSaveItem> data { set; get; }
        public string user_name { set; get; }
    }

    public class EncuestadosSaveItem
    {
        public int id_encuesta { set; get; }
        public int id_trabajador { set; get; }
        public int? id_dependencia { set; get; }
        public int? id_regimen { set; get; }
        public string dni_trabajador { set; get; }

    }

    public class EncuestadosExtranetSaveItem
    {
        public int? id_encuesta { set; get; }
        public string dni_user { set; get; }

    }
    public class EncuestaAvanceResponseList
    {
        public string estado { set; get; } 
        public int cantidad { set; get; }
    }
    public class EncuestaResultadosResponseList
    {
        public string estado { set; get; }
        public string usuario_creacion { set; get; }
        public string razon_social { set; get; }
        public DateTime? fecha_creacion { set; get; }
        public DateTime? fecha_modificacion { set; get; }
        public string celular { get; set; }
        public string email { get; set; }
    }
}
