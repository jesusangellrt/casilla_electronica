using Prod.SNE.Entidades;
using Release.Helper.Data.Core;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using Dapper;
using Release.Helper;
using Release.Helper.Pagination;
using System.Net.Http.Headers;
using System;


namespace Prod.SNE.Core.Datos
{
    public class UnitOfWork : BaseUnitOfWork, IUnitOfWork
    {
        public UnitOfWork(IDbContext ctx) : base(ctx, true)
        {
        }

        public StatusResponse SaveUpdateEncuestaData(EncuestaSaveUpdateRequest req)
        {
            var sr = new StatusResponse { Value = 0 };
            var en = req.encuesta;
            var bn = req.bienvenida;
            var ag = req.agradecimiento;
            var param = new Parameter[]
            {
                new Parameter("@files_only", req.files_only),
                new Parameter("@id_encuesta", en.id_encuesta),
                new Parameter("@id_tipo_encuesta", req.tipo_encuesta),
                new Parameter("@id_dependendia", en.id_dependendia),
                new Parameter("@titulo", en.titulo),
                new Parameter("@encabezado", en.encabezado),
                new Parameter("@objetivo", en.objetivo),
                new Parameter("@descripcion", en.descripcion),
                new Parameter("@fecha_inicio", en.fecha_inicio),
                new Parameter("@fecha_fin", en.fecha_fin),
                new Parameter("@tiempo_estimado", en.tiempo_estimado),
                new Parameter("@es_anonima", en.es_anonima),
                new Parameter("@mensaje_es_anonima", en.mensaje_es_anonima),
                new Parameter("@es_todos", en.es_todos),
                new Parameter("@iden_imagen_presentacion", en.iden_imagen_presentacion),
                new Parameter("@mensaje_corto_presentacion", en.mensaje_corto_presentacion),
                new Parameter("@id_estado", en.id_estado),
                new Parameter("@es_con_seccion_pregunta", en.es_con_seccion_pregunta),
                new Parameter("@usuario_creacion", req.ussername),

                new Parameter("@b_indicaciones", bn.indicaciones),
                new Parameter("@b_iden_audio", bn.iden_audio),
                new Parameter("@b_id_tipo_archivo", bn.id_tipo_archivo),
                new Parameter("@b_iden_imagen", bn.iden_imagen),
                new Parameter("@b_url_video", bn.url_video),
                new Parameter("@b_es_activar_audio", bn.es_activar_audio),
                new Parameter("@b_iden_terminos", bn.iden_terminos_condiciones),

                new Parameter("@a_mensaje_agradecimiento", ag.mensaje_agradecimiento),
                new Parameter("@a_iden_audio", ag.iden_audio),
                new Parameter("@a_id_tipo_archivo", ag.id_tipo_archivo),
                new Parameter("@a_iden_imagen", ag.iden_imagen),
                new Parameter("@a_url_video", ag.url_video),
                new Parameter("@a_es_activar_audio", ag.es_activar_audio),

                new Parameter("@ip", req.ip)
            };
            var result = this.ExecuteReader<BasicResponse>("dbo.uspDAT_SaveUpdateEncuesta", CommandType.StoredProcedure, ref param);
            sr.Value = result.ToList()[0];
            sr.Success = true;
            sr.Messages.Add(result.ToList()[0].MSG);
            return sr;
        }


        public StatusResponse Prepublicar(BasicDeleteRequest request)
        {
            var sr = new StatusResponse { Value = 0 };
            var param = new Parameter[]
            {
                new Parameter("@id_encuesta", request.id),
                new Parameter("@username", request.user_name),
            };
            var result = this.ExecuteReader<BasicResponse>("dbo.uspDAT_PrepublicarEncuesta", CommandType.StoredProcedure, ref param);
            sr.Value = result.ToList()[0];
            sr.Success = true;
            sr.Messages.Add(result.ToList()[0].MSG);
            return sr;
        }

        public List<EncuestaByEncuestadoItem> GetEncuestasListByUser(EncuestaByEncuestadoRequestList req)
        {
            var param = new Parameter[]
            {
                new Parameter("@id_dependencia", req.id_dependencia),
                new Parameter("@dni_user", req.dni_user),
                new Parameter("@today", req.today)
            };
            var result = this.ExecuteReader<EncuestaByEncuestadoItem>("dbo.uspDAT_getEncuestasListByUser", CommandType.StoredProcedure, ref param);
            return result.ToList();
        }
        public IEnumerable<int> GetListId()
        {
            var ids = new List<int>();
            for (int i = 0; i < 10; i++)
            {
                ids.Add(i);
            }
            return ids;
        }

        public StatusResponse GetPreguntaActualEncuesta(StatusRespuestaRequest req)
        {
            var sr = new StatusResponse { Value = 0 };
            var param = new Parameter[]
            {
                new Parameter("@id_encuesta", req.id_encuesta),
                new Parameter("@dni_trabajador", req.dni_trabajador),
                new Parameter("@user_name", req.user_name)
            };
            var result = this.ExecuteReader<StatusIndexPreguntaActualResponse>("dbo.uspDAT_getPreguntaActualEncuesta", CommandType.StoredProcedure, ref param);
            sr.Value = result.ToList()[0].nro_pregunta_actual;
            sr.Success = true;

            return sr;
        }

        public StatusResponse UpdatePreguntaActualEncuesta(UpdateStatusRespuestaRequest req)
        {
            var sr = new StatusResponse { Value = 0 };
            var param = new Parameter[]
            {
                new Parameter("@id_encuesta", req.id_encuesta),//
                new Parameter("@dni_trabajador", req.dni_trabajador),//

                new Parameter("@nro_pregunta", req.nro_pregunta),//

                new Parameter("@id_pregunta", req.id_pregunta),//
                new Parameter("@json_rpta", req.json_rpta),//
                new Parameter("@json_paginado", req.json_paginador),//

                new Parameter("@edad", req.edad),//
                new Parameter("@id_sexo", req.sexo=="M"?(int)SEXO_PERSONA.masculino:(int)SEXO_PERSONA.femenino),

                new Parameter("@id_estado", req.id_estado),//
                new Parameter("@user_name", req.user_name)//
            };
            try
            {
                var result = this.ExecuteReader<BasicUpdateRespuestaResponse>("dbo.uspDAT_updatePreguntaActualEncuesta", CommandType.StoredProcedure, ref param);
                sr.Value = result.ToList()[0];
                sr.Success = true;
            }
            catch (Exception ex)
            {
                sr.Messages.Add("Ha ocurrido un error al registrar el avance de su respuesta");
                sr.Messages.Add(ex.Message);
                sr.Success = false;
                sr.Value = ex.Message;
            }
           
            return sr;

        }

        public List<BasicSelectResponse> GetDesplegableInstitucional(DesplegableInstitucionalRequest req)
        {
            var param = new Parameter[]
            {
                new Parameter("@id_tabla", req.id_tabla)
            };
            var result = this.ExecuteReader<BasicSelectResponse>("dbo.uspDAT_getDesplegableInstitucional", CommandType.StoredProcedure, ref param);
            return result.ToList();

        }
        public List<PreguntasResponseList> GetPreguntasCondicionalesByEncuesta(PreguntaCondicionaldaRequestList request)
        {
            var param = new Parameter[]
          {
                new Parameter("@id_encuesta", request.id_encuesta),
                new Parameter("@es_autorizado_datos", request.es_autorizado_datos),
                new Parameter("@es_actualizar", request.es_actualizar)
          };
            var result = this.ExecuteReader<PreguntasResponseList>("dbo.p_listPreguntasCondicionalesByEncuesta", CommandType.StoredProcedure, ref param);
            return result.ToList();
        }
        public List<ChartAnalisisResponse> getResultado_byDependencia(int id_encuesta)
        {
            var param = new Parameter[]
            {
                new Parameter("@id_encuesta", id_encuesta)
            };
            var result = this.ExecuteReader<ChartAnalisisResponse>("dbo.uspDAT_getResultado_byDependencia", CommandType.StoredProcedure, ref param);
            return result.ToList();
        }
        public List<ChartAnalisisResponse> getResultado_byEdades(int id_encuesta)
        {
            var param = new Parameter[]
            {
                new Parameter("@id_encuesta", id_encuesta)
            };
            var result = this.ExecuteReader<ChartAnalisisResponse>("dbo.uspDAT_getResultado_byEdades", CommandType.StoredProcedure, ref param);
            return result.ToList();
        }
        public List<ChartAnalisisResponse> getResultado_bySexo(int id_encuesta)
        {
            var param = new Parameter[]
            {
                new Parameter("@id_encuesta", id_encuesta)
            };
            var result = this.ExecuteReader<ChartAnalisisResponse>("dbo.uspDAT_getResultado_bySexo", CommandType.StoredProcedure, ref param);
            return result.ToList();
        }
        public List<ChartAnalisisResponse> getResultado_byRegimen(int id_encuesta)
        {
            var param = new Parameter[]
            {
                new Parameter("@id_encuesta", id_encuesta)
            };
            var result = this.ExecuteReader<ChartAnalisisResponse>("dbo.uspDAT_getResultado_byRegimen", CommandType.StoredProcedure, ref param);
            return result.ToList();
        }


        public StatusResponse SaveUpdateCategorias(string xml, int id_categoria, string nombre, string username)
        {
            var sr = new StatusResponse { Value = 0 };
            var param = new Parameter[]
            {
                new Parameter("@id_categoria", id_categoria),
                new Parameter("@nombre", nombre),
                new Parameter("@username", username),
                new Parameter("@xml", xml),
            };
            var result = this.ExecuteReader<BasicResponse>("dbo.uspCAT_SaveUpdateCategorias", CommandType.StoredProcedure, ref param);
            sr.Value = result.ToList()[0];
            sr.Success = true;
            sr.Messages.Add(result.ToList()[0].MSG);
            return sr;
        }

        public List<EncuestaByEncuestadoItem> GetEncuestasListByUserExtranet(EncuestaByEncuestadoRequestList req)
        {
            var param = new Parameter[] {
                new Parameter("@IdTipoEncuesta", req.id_tipo_encuesta),
                new Parameter("@DniAdministrado", req.dni_user),
                new Parameter("@Today", req.today),
            };
            var result = this.ExecuteReader<EncuestaByEncuestadoItem>("dbo.SP_LISTAR_ENCUESTA_ADMINISTRADO", CommandType.StoredProcedure, ref param);
            return result.ToList();
        }

        public StatusResponse GetPreguntaActualEncuestaExtranet(StatusRespuestaRequest req)
        {
            var sr = new StatusResponse { Value = 0 };
            var param = new Parameter[]
            {
                new Parameter("@IdEncuesta", req.id_encuesta),
                new Parameter("@Ruc", req.dni_trabajador)
            };
            var result = this.ExecuteReader<StatusIndexPreguntaActualResponse>("dbo.SP_LISTAR_PREGUNTA_ACTUAL_ADMINISTRADO", CommandType.StoredProcedure, ref param);
            sr.Value = result.ToList()[0].nro_pregunta_actual;
            sr.Success = true;

            return sr;
        }

        public StatusResponse UpdatePreguntaActualEncuestaAdministrado(UpdateStatusRespuestaRequest req)
        {
            var sr = new StatusResponse { Value = 0 };
            var param = new Parameter[]
            {
                new Parameter("@IdEncuesta", req.id_encuesta),
                new Parameter("@NroPregunta", req.nro_pregunta),
                new Parameter("@IdPregunta", req.id_pregunta),
                new Parameter("@JsonRespuesta", req.json_rpta),//
                new Parameter("@JsonPaginado", req.json_paginador),//
                new Parameter("@IdEstado", req.id_estado),//
                new Parameter("@Ruc", req.dni_trabajador)//
            };
            try
            {
                var result = this.ExecuteReader<BasicUpdateRespuestaResponse>("dbo.SP_UPDATE_PREGUNTA_ACTUAL_ADMINISTRADO", CommandType.StoredProcedure, ref param);
                sr.Value = result.ToList()[0];
                sr.Success = true;
            }
            catch (Exception ex)
            {
                sr.Messages.Add("Ha ocurrido un error al registrar el avance de su respuesta");
                sr.Messages.Add(ex.Message);
                sr.Success = false;
                sr.Value = ex.Message;
            }

            return sr;
        }

        public StatusResponse SaveUpdateCategoriasExtranet(string xml, int id_categoria_extranet, string nombre, string username)
        {
            var sr = new StatusResponse { Value = 0 };
            var param = new Parameter[]
            {
                new Parameter("@id_categoria_extranet", id_categoria_extranet),
                new Parameter("@nombre", nombre),
                new Parameter("@username", username),
                new Parameter("@xml", xml),
            };
            var result = this.ExecuteReader<BasicResponse>("[dbo].[SP_INSERT_UPDATE_CATEGORIA_EXTRANET]", CommandType.StoredProcedure, ref param);
            sr.Value = result.ToList()[0];
            sr.Success = true;
            sr.Messages.Add(result.ToList()[0].MSG);
            return sr;
        }

        public StatusResponse SaveEncuestaAdministradoExtranet(EncuestaByEncuestadoRequestList req)
        {
            var sr = new StatusResponse { Value = 0 };
            var param = new Parameter[]
            {
                new Parameter("@DniAdministrado", req.dni_user)
            };
            var result = this.ExecuteReader<BasicResponse>("[dbo].[SP_INSERTAR_ENCUESTAS_ADMINISTRADO]", CommandType.StoredProcedure, ref param);
            sr.Value = result.ToList()[0];
            sr.Success = true;
            sr.Messages.Add(result.ToList()[0].MSG);
            return sr;
        }

        public StatusResponse InsertarEncuestasByAdministrado(EncuestaByEncuestadoRequestList req)
        {
            var sr = new StatusResponse { Value = 0 };
            try
            {
                var param = new Parameter[]
                {
                    new Parameter("@ID_ENCUESTA", req.id_encuesta),
                    new Parameter("@USUARIO", req.usuario),
                    new Parameter("@RUC_ADMINISTRADO", req.dni_user)
                };
                var result = this.ExecuteReader<BasicResponse>("[dbo].[SP_INSERTAR_ENCUESTAS_BY_ADMINISTRADO]", CommandType.StoredProcedure, ref param);
                sr.Value = result.ToList()[0];
                sr.Success = true;
                sr.Messages.Add(result.ToList()[0].MSG);
            }
            catch (Exception ex)
            {

            }
          
       
            return sr;
        }

        public PagedResponse<EncuestadoresExtranetResponse> GetListEncuestadosExtranet(EncuestadoresExtranetRequest req)
        {
            var param = new Parameter[]
            {
                new Parameter("@ID_TIPO_PERSONA", req.id_tipo_persona),
                new Parameter("@NUMERO_DOCUMENTO", req.numero_documento),
                new Parameter("@RAZON_SOCIAL", req.razon_social),
                new Parameter("@CODIGO_DEPARTAMENTO", req.codigo_departamento),
                new Parameter("@CODIGO_PROVINCIA", req.codigo_provincia),
                new Parameter("@CODIGO_DISTRITO", req.codigo_distrito)
            };
            var result = this.ExecuteReader<EncuestadoresExtranetResponse>("dbo.SP_GetListEncuestadosExtranet", CommandType.StoredProcedure, ref param);
            return result.AsQueryable().PagedResponse(req);
        }

        public List<PreguntaResponse> GetListarPreguntaByIdEncuesta(PagedIdenEncuesta req)
        {
            var param = new Parameter[]
            {
                new Parameter("@ID_ENCUESTA", req.id_encuesta)
            };
            var result = this.ExecuteReader<PreguntaResponse>("dbo.SP_GETLISTARPREGUNTASBYIDENCUESTA", CommandType.StoredProcedure, ref param);
            return result.OrderBy(x => x.orden_seccion).ThenBy(x => x.orden_pregunta).ToList();
        }

        public List<EncuestadoPreguntaRespuestaResponse> GetListEncuestadoRespuestaPreguntaByIdEncuesta(PagedIdenEncuesta req)
        {
            var param = new Parameter[]
            {
                new Parameter("@ID_ENCUESTA", req.id_encuesta)
            };
            var result = this.ExecuteReader<EncuestadoPreguntaRespuestaResponse>("dbo.SP_GETLISTARENCUESTADORESPUESTABPREGUNTABYIDENCUESTA", CommandType.StoredProcedure, ref param);
            return result.OrderBy(x => x.orden_seccion).ThenBy(x => x.orden_pregunta).ToList();
        }

        public List<EncuestadoPreguntaRespuestaResponse> GetListEncuestadosByIdEncuesta(PagedIdenEncuesta req)
        {
            var param = new Parameter[]
            {
                new Parameter("@ID_ENCUESTA", req.id_encuesta)
            };
            var result = this.ExecuteReader<EncuestadoPreguntaRespuestaResponse>("dbo.SP_GETLISTARENCUESTADOSBYIDENCUESTA", CommandType.StoredProcedure, ref param);
            return result.ToList();
        }
        public List<EncuestadoPreguntaRespuestaResponse> GetListReporteExcel(PagedIdenEncuesta req)
        {
            var param = new Parameter[]
            {
                new Parameter("@ID_ENCUESTA", req.id_encuesta)
            };
            var result = this.ExecuteReader<EncuestadoPreguntaRespuestaResponse>("dbo.SP_GETLISTARREPORTEEXCEL", CommandType.StoredProcedure, ref param);
            return result.ToList();
        }
        public List<EncuestaAvanceResponseList> GetListAvanceByIdEncuesta(PagedIdenEncuesta req)
        {
            var param = new Parameter[]
            {
                new Parameter("@ID_ENCUESTA", req.id_encuesta)
            };
            var result = this.ExecuteReader<EncuestaAvanceResponseList>("dbo.SP_GETLISTARAVANCEBYIDENCUESTA", CommandType.StoredProcedure, ref param);
            return result.ToList();
        }
        public List<EncuestaResultadosResponseList> GetListResultadosByIdEncuesta(PagedIdenEncuesta req)
        {
            var param = new Parameter[]
            {
                new Parameter("@ID_ENCUESTA", req.id_encuesta)
            };
            var result = this.ExecuteReader<EncuestaResultadosResponseList>("dbo.SP_GETLISTARRESULTADOSBYIDENCUESTA", CommandType.StoredProcedure, ref param);
            return result.ToList();
        }
    }
}
