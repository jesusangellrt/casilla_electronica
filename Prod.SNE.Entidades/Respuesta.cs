using Release.Helper.Pagination;
using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Entidades
{
    public class StatusRespuestaRequest
    {
        public int id_encuesta { set; get; }
        public string dni_trabajador { set; get; }
        public string user_name { set; get; }
        public string ruc_encuestado { get; set; }
        public int id_tipo_encuesta { get; set; }
    }

    public class SaveRespuestaAnonimaRequest 
    {
        public int id_encuesta { set; get; }
        public string user_name { set; get; }
        public string dni_trabajador { set; get; }
        public string id_estado { set; get; }
        public int nro_pregunta { set; get; }

        public int edad { set; get; }
        public string sexo { set; get; }
        public List<RespuestaByPregunta> respuestas { set; get; }
    }
    public class RespuestaByPregunta {
        public int id_pregunta { set; get; }
        public string json_rpta { set; get; }
    }



    public class UpdateStatusRespuestaRequest : StatusRespuestaRequest
    {
        public int nro_pregunta { set; get; }
        public int id_pregunta { set; get; }
        public string json_rpta { set; get; }
        public string json_paginador { set; get; }
        public string id_estado { set; get; }

        public int edad { set; get; }
        public string sexo { set; get; }
    }



    public class DesplegableInstitucionalRequest
    {
        public int id_tabla { set; get; }
    }

    
    public class StatusIndexPreguntaActualResponse {
        public string nro_pregunta_actual { set; get; }
    }

    public class RespuestasIngresadasResponse
    {
        public int id_respuesta_pregunta { set; get; }
        public int id_respuesta { set; get; }
        public int? id_pregunta { set; get; }
        public string json_respuesta { set; get; }
        public bool resuelto { get; set; } = false;
    }


    public class ChartAnalisisResponse
    {
        public int Orden { set; get; }
        public string Iden { set; get; }
        public int Val { set; get; }
        public string Extra { set; get; }
    }

    public class ChartAnalisisEncuestaResponse
    {
        public List<ChartAnalisisResponse> Dependencias { set; get; }
        public List<ChartAnalisisResponse> Edades { set; get; }
        public List<ChartAnalisisResponse> Sexos { set; get; }
        public List<ChartAnalisisResponse> Regimen { set; get; }
        public string iden_pdf { set; get; }
    }
}
