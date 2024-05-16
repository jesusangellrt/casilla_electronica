using Microsoft.Extensions.Logging;
using Prod.SNE.Core.Aplicacion.Interfaces;
using Prod.SNE.Core.Aplicacion.Validacion;
using Prod.SNE.Core.Datos;
using Prod.SNE.Entidades;
using Release.Helper;
using Release.Helper.Data.ICore;
using Release.Helper.Pagination;
using System;
using System.Collections.Generic;
using System.Linq;
using Modelo = Prod.SNE.Datos.Modelo;

namespace Prod.SNE.Core.Aplicacion
{
    public class EncuestaAplicacion : IEncuestaAplicacion
    {
        private IContext _context;
        private IUnitOfWork _uow;
        private readonly EncuestaValidacion _EncuestaValidacion;
        private readonly ILogger<EncuestaAplicacion> _logger;
        public EncuestaAplicacion(IUnitOfWork unitOfWork, EncuestaValidacion _EncuestaValidacion, ILogger<EncuestaAplicacion> logger)
        {
            _uow = unitOfWork;
            _context = _uow.Context;
            this._EncuestaValidacion = _EncuestaValidacion;
            _logger = logger;
        }
        #region PARA CONFIGURACION
        public EncuestaResponseData GetEncuestaDataByID(EncuestaIDENRequest request)
        {
            var res = (from ec in _context.Query<Modelo.dat_encuesta>()
                       join dp in _context.Query<Modelo.vw_dependencia>() on ec.id_dependendia equals dp.CODIGO_DEPENDENCIA
                       join est in _context.Query<Modelo.cat_estado_encuesta>().Where(x=>x.es_eliminado==false) on ec.id_estado equals est.id
                       where ec.id_encuesta==request.id_encuesta
                       select new EncuestaResponseData() {
                           encuesta= new EncuestaMainData() {
                               id_encuesta=ec.id_encuesta,
                               id_dependendia = ec.id_dependendia,
                               dependencia_name = dp.DEPENDENCIA,
                               titulo = ec.titulo,
                               encabezado = ec.encabezado,
                               objetivo = ec.objetivo,
                               descripcion = ec.descripcion,
                               fecha_inicio = ec.fecha_inicio,
                               fecha_fin = ec.fecha_fin,
                               tiempo_estimado = ec.tiempo_estimado,
                               es_anonima = ec.es_anonima,
                               mensaje_es_anonima = ec.mensaje_es_anonima,
                               es_todos = ec.es_todos,
                               iden_imagen_presentacion = ec.iden_imagen_presentacion,
                               mensaje_corto_presentacion = ec.mensaje_corto_presentacion,
                               id_estado = ec.id_estado,
                               estado_name = est.nombre,

                               nro_informe = ec.nro_informe,
                               pdf_completo = ec.iden_pdf_resultados_completo,
                               pdf_encuestado = ec.iden_pdf_resultados,
                               es_con_seccion_pregunta = ec.es_con_seccion_pregunta,
                               es_autorizado_datos = ec.es_autorizado_datos
                           },
                           bienvenida = (from welc in _context.Query<Modelo.dat_encuesta_bienvenida>(true)
                                         where welc.id_encuesta==ec.id_encuesta && welc.es_eliminado == false
                                            select new EncuestaBienvenidaData(){
                                                id_encuesta_bienvenida = welc.id_encuesta_bienvenida,
                                                id_encuesta =welc.id_encuesta,
                                                indicaciones =welc.indicaciones,
                                                iden_audio =welc.iden_audio,
                                                id_tipo_archivo =welc.id_tipo_archivo,
                                                iden_imagen =welc.iden_imagen,
                                                url_video=welc.url_video,
                                                es_activar_audio = welc.es_activar_audio.GetValueOrDefault(),
                                                iden_terminos_condiciones = welc.iden_terminos_condiciones
                                            }).FirstOrDefault(),
                           agradecimiento= (from agr in _context.Query<Modelo.dat_encuesta_agradecimiento>(true)
                                            where agr.id_encuesta == ec.id_encuesta && agr.es_eliminado == false
                                            select new EncuestaAgradecimientoData()
                                            {
                                                id_encuesta_agradecimiento= agr.id_encuesta_agradecimiento,
                                                id_encuesta = agr.id_encuesta,
                                                mensaje_agradecimiento = agr.mensaje_agradecimiento,
                                                iden_audio = agr.iden_audio,
                                                id_tipo_archivo = agr.id_tipo_archivo,
                                                iden_imagen = agr.iden_imagen,
                                                url_video = agr.url_video,
                                                es_activar_audio = agr.es_activar_audio.GetValueOrDefault()
                                            }).FirstOrDefault(),
                       }).ToList();

            return res.Count > 0 ? res[0] : new EncuestaResponseData();
        }

        public StatusResponse PublicarEncuesta(EncuestaIDENRequest request)
        {
            var sr = new StatusResponse { Value = 0 };
            var valid = _context.Query<Modelo.dat_encuesta>(false).FirstOrDefault(x => x.id_encuesta == request.id_encuesta);
            if (valid != null)
            {
                valid.id_estado = (int)ESTADO_ENCUESTA.publicado;
                valid.fecha_modificacion = DateTime.Now;
                _context.Update(valid);
                _uow.Save();
                sr.Success = true;
                sr.Messages.Add("Publicado con éxito");
            }
            else
            {
                sr.Success = false;
                sr.Messages.Add("El registro a publicar no éxiste");
            }
            return sr;
        }
        public PagedResponse<EncuestaResponseList> GetEncuestaWithDependenciaList(EncuestaRequestList request)
        {
            var _show_all = request.show_all.GetValueOrDefault();
            if (_show_all)
            {
                var config = (from ec in _context.Query<Modelo.dat_encuesta>()
                              join est in _context.Query<Modelo.cat_estado_encuesta>().Where(x => x.es_eliminado == false) on ec.id_estado equals est.id
                              where ec.id_tipo_encuesta == request.id_tipo_encuesta &&
                                (request.titulo == null || string.IsNullOrEmpty(request.titulo) || ec.titulo.ToUpper().Contains(request.titulo.ToUpper()))
                                && (request.estado == null || ec.id_estado == request.estado)
                                && (request.fecha_inicio == null || ec.fecha_fin >= request.fecha_inicio)
                                && (request.fecha_fin == null || ec.fecha_fin <= request.fecha_fin)
                              //&& (ec.es_eliminado==false) 
                              select new EncuestaResponseList
                              {
                                  id_encuesta = ec.id_encuesta,
                                  titulo = ec.titulo,
                                  es_anonimo = ec.es_anonima,
                                  id_estado = ec.id_estado,
                                  es_eliminado = ec.es_eliminado,
                                  total_encuestados = ec.es_todos == true ? "Todos" :
                                                    (from encuestado in _context.Query<Modelo.dat_encuesta_encuestado>(true)
                                                     where encuestado.id_encuesta == ec.id_encuesta
                                                 && encuestado.es_eliminado == false
                                                     select encuestado).Count().ToString(),
                                  fecha_vigencia = ec.fecha_fin,
                                  fecha_inicio = ec.fecha_inicio,
                                  fecha_fin = ec.fecha_fin,
                                  estado_name = est.nombre,

                                  nro_informe = ec.nro_informe,
                                  iden_pdf_resultados = ec.iden_pdf_resultados,
                                  iden_pdf_resultados_completo = ec.iden_pdf_resultados_completo,
                                  fecha_publicacion = ec.fecha_publicacion,
                                  es_con_seccion_pregunta = ec.es_con_seccion_pregunta == true ? true : false
                              }).OrderByDescending(x => x.fecha_vigencia).PagedResponse(request);
                return config;
            }
            else
            {
                var config = (from ec in _context.Query<Modelo.dat_encuesta>()
                              join est in _context.Query<Modelo.cat_estado_encuesta>().Where(x => x.es_eliminado == false) on ec.id_estado equals est.id
                              where ec.id_tipo_encuesta == request.id_tipo_encuesta &&
                                (ec.id_dependendia == request.id_dependencia || ec.id_dependendia == 0)
                                && (request.titulo == null || string.IsNullOrEmpty(request.titulo) || ec.titulo.ToUpper().Contains(request.titulo.ToUpper()))
                                && (request.estado == null || ec.id_estado == request.estado)
                                && (request.fecha_inicio == null || ec.fecha_fin >= request.fecha_inicio)
                                && (request.fecha_fin == null || ec.fecha_fin <= request.fecha_fin)
                              //&& (ec.es_eliminado==false) 
                              select new EncuestaResponseList
                              {
                                  id_encuesta = ec.id_encuesta,
                                  titulo = ec.titulo,
                                  es_anonimo = ec.es_anonima,
                                  id_estado = ec.id_estado,
                                  es_eliminado = ec.es_eliminado,
                                  total_encuestados = ec.es_todos == true ? "Todos" :
                                                    (from encuestado in _context.Query<Modelo.dat_encuesta_encuestado>(true)
                                                     where encuestado.id_encuesta == ec.id_encuesta
                                                 && encuestado.es_eliminado == false
                                                     select encuestado).Count().ToString(),
                                  fecha_vigencia = ec.fecha_fin,
                                  fecha_inicio = ec.fecha_inicio,
                                  fecha_fin = ec.fecha_fin,
                                  estado_name = est.nombre,

                                  nro_informe = ec.nro_informe,
                                  iden_pdf_resultados = ec.iden_pdf_resultados,
                                  iden_pdf_resultados_completo = ec.iden_pdf_resultados_completo,
                                  fecha_publicacion = ec.fecha_publicacion,
                                  es_con_seccion_pregunta = ec.es_con_seccion_pregunta == true ? true : false
                              }).OrderByDescending(x => x.fecha_vigencia).PagedResponse(request);
                return config;
            }
        }
        public PagedResponse<EncuestaResponseList> GetEncuestaWithAdministradosList(EncuestaRequestList request)
        {
            var _show_all = request.show_all.GetValueOrDefault();
            if (_show_all)
            {
                var config = (from ec in _context.Query<Modelo.dat_encuesta>()
                              join est in _context.Query<Modelo.cat_estado_encuesta>().Where(x => x.es_eliminado == false) on ec.id_estado equals est.id
                              where ec.id_tipo_encuesta == request.id_tipo_encuesta &&
                                (request.titulo == null || string.IsNullOrEmpty(request.titulo) || ec.titulo.ToUpper().Contains(request.titulo.ToUpper()))
                                && (request.estado == null || ec.id_estado == request.estado)
                                && (request.fecha_inicio == null || ec.fecha_fin >= request.fecha_inicio)
                                && (request.fecha_fin == null || ec.fecha_fin <= request.fecha_fin)
                              //&& (ec.es_eliminado==false) 
                              select new EncuestaResponseList
                              {
                                  id_encuesta = ec.id_encuesta,
                                  titulo = ec.titulo,
                                  es_anonimo = ec.es_anonima,
                                  id_estado = ec.id_estado,
                                  es_eliminado = ec.es_eliminado,
                                  total_encuestados = ec.es_todos == true ? "Todos" :
                                                    (from encuestado in _context.Query<Modelo.dat_encuesta_administrado>(true)
                                                     where encuestado.id_encuesta == ec.id_encuesta && encuestado.es_eliminado == false  && encuestado.ruc_administrado != null
                                                     select encuestado
                                                     ).Count().ToString(),
                                  fecha_vigencia = ec.fecha_fin,
                                  fecha_inicio = ec.fecha_inicio,
                                  fecha_fin = ec.fecha_fin,
                                  estado_name = est.nombre,

                                  nro_informe = ec.nro_informe,
                                  iden_pdf_resultados = ec.iden_pdf_resultados,
                                  iden_pdf_resultados_completo = ec.iden_pdf_resultados_completo,
                                  fecha_publicacion = ec.fecha_publicacion,
                                  es_con_seccion_pregunta = ec.es_con_seccion_pregunta == true ? true : false
                              }).OrderByDescending(x => x.fecha_vigencia).PagedResponse(request);
                return config;
            }
            else
            {
                var config = (from ec in _context.Query<Modelo.dat_encuesta>()
                              join est in _context.Query<Modelo.cat_estado_encuesta>().Where(x => x.es_eliminado == false) on ec.id_estado equals est.id
                              where ec.id_tipo_encuesta == request.id_tipo_encuesta &&
                                (ec.id_dependendia == request.id_dependencia || ec.id_dependendia == 0)
                                && (request.titulo == null || string.IsNullOrEmpty(request.titulo) || ec.titulo.ToUpper().Contains(request.titulo.ToUpper()))
                                && (request.estado == null || ec.id_estado == request.estado)
                                && (request.fecha_inicio == null || ec.fecha_fin >= request.fecha_inicio)
                                && (request.fecha_fin == null || ec.fecha_fin <= request.fecha_fin)
                              //&& (ec.es_eliminado==false) 
                              select new EncuestaResponseList
                              {
                                  id_encuesta = ec.id_encuesta,
                                  titulo = ec.titulo,
                                  es_anonimo = ec.es_anonima,
                                  id_estado = ec.id_estado,
                                  es_eliminado = ec.es_eliminado,
                                  total_encuestados = ec.es_todos == true ? "Todos" :
                                                    (from encuestado in _context.Query<Modelo.dat_encuesta_administrado>(true)
                                                     where encuestado.id_encuesta == ec.id_encuesta && encuestado.es_eliminado == false && encuestado.ruc_administrado != null
                                                     select encuestado).Count().ToString(),
                                  fecha_vigencia = ec.fecha_fin,
                                  fecha_inicio = ec.fecha_inicio,
                                  fecha_fin = ec.fecha_fin,
                                  estado_name = est.nombre,

                                  nro_informe = ec.nro_informe,
                                  iden_pdf_resultados = ec.iden_pdf_resultados,
                                  iden_pdf_resultados_completo = ec.iden_pdf_resultados_completo,
                                  fecha_publicacion = ec.fecha_publicacion,
                                  es_con_seccion_pregunta = ec.es_con_seccion_pregunta == true ? true : false
                              }).OrderByDescending(x => x.fecha_vigencia).PagedResponse(request);
                return config;
            }
        }
        public StatusResponse SaveUpdateEncuestaData(EncuestaSaveUpdateRequest request) 
        {
            var sr = new StatusResponse();
            var _errores = _EncuestaValidacion.ValidarRegistroEdicionEncuesta(request);
            if (_errores.Any())
            {
                sr.Success = false;
                sr.Messages = _errores;
                return sr;
            }
            try
            {
                sr = _uow.SaveUpdateEncuestaData(request);
            }
            catch (Exception ex)
            {
                this._logger.LogError(ex, "GuardarActualizar/Encuesta");
                sr.Success = false;
                sr.Value = ex.Message;
                sr.Messages.Add("Ha ocurrido un error con el registro de datos. La data ingresada no pudo ser registrada en la base de datos.");
                
            }

            return sr;
        }
        public PagedResponse<PreguntasResponseList> GetPreguntasByEncuesta(PreguntasRequestList request)
            {
            PagedResponse<PreguntasResponseList> config = new PagedResponse<PreguntasResponseList>();

            var _mostar_solo_condicional = request.mostar_solo_condicional.GetValueOrDefault();
            var encuesta = (from t in _context.Query<Modelo.dat_encuesta>()
                              where t.id_encuesta == request.id_encuesta
                            select new { id_tipo_encuesta = t.id_tipo_encuesta }).FirstOrDefault();

            if (encuesta.id_tipo_encuesta == (int)TIPO_ENCUESTA.intranet)
            {
                config = (from p in _context.Query<Modelo.dat_encuesta_pregunta>()
                              join tp in _context.Query<Modelo.cat_tipo_pregunta>().Where(
                                    x => x.es_eliminado == false
                              ) on p.id_tipo_pregunta equals tp.id
                              join ta in _context.Query<Modelo.cat_tipo_archivo>().Where(
                                    x => x.es_eliminado == false
                              ) on p.id_tipo_archivo equals ta.id into TipoArchivo
                              from lf_ta in TipoArchivo.DefaultIfEmpty()

                              join ca in _context.Query<Modelo.cat_categoria>()
                                on p.id_categoria equals ca.id_categoria into Categoria
                              from lf_ca in Categoria.DefaultIfEmpty()

                              join sca in _context.Query<Modelo.cat_sub_categoria>()
                               on p.id_sub_categoria equals sca.id_sub_categoria into SubCategoria
                              from lf_sca in SubCategoria.DefaultIfEmpty()

                              where p.id_encuesta == request.id_encuesta && p.es_eliminado == false
                              && (p.es_condicional == _mostar_solo_condicional || _mostar_solo_condicional == false)
                              select new PreguntasResponseList
                              {
                                  id_pregunta = p.id_pregunta,
                                  id_encuesta = p.id_encuesta,
                                  pregunta = p.pregunta,
                                  id_tipo_pregunta = p.id_tipo_pregunta,
                                  tipo_pregunta = tp.nombre,
                                  es_obligatorio = p.es_obligatorio,
                                  //orden = p.orden,
                                  id_categoria = p.id_categoria,
                                  id_sub_categoria = p.id_sub_categoria,
                                  categoria = lf_ca.nombre,
                                  sub_categoria = lf_sca.nombre,
                                  descripcion = p.descripcion,
                                  id_tipo_archivo = p.id_tipo_archivo,
                                  tipo_archivo = lf_ta.nombre,
                                  iden_imagen = p.iden_imagen,
                                  url_video = p.url_video,
                                  por_defecto = p.por_defecto,
                                  json_alternativas = p.json_alternativas,
                                  json_archivo_tipo_archivo = p.json_archivo_tipo_archivo,

                                  es_condicional = p.es_condicional,
                                  es_condicionada = p.es_condicionada,
                                  id_pregunta_condicional = p.id_pregunta_condicional,
                                  json_respuesta_condicional = p.json_respuesta_condicional,
                                  es_agregar_pregunta = p.es_agregar_pregunta,
                                  es_finaliza_encuesta = p.es_finaliza_encuesta,
                                  orden = p.orden,
                                  id_encuesta_seccion = p.id_encuesta_seccion,
                                  json_tipo_fecha = p.json_tipo_fecha
                              }).OrderBy(x => x.orden).PagedResponse(request);
            }
            if (encuesta.id_tipo_encuesta == (int)TIPO_ENCUESTA.extranet)
            {
                
                var encuestaExtranet = (from t in _context.Query<Modelo.dat_encuesta>()
                                where t.id_encuesta == request.id_encuesta
                                select new { es_con_seccion_pregunta = t.es_con_seccion_pregunta }).FirstOrDefault();

                if (encuestaExtranet.es_con_seccion_pregunta)
                {
                    PagedResponse<PreguntasResponseList> response = new PagedResponse<PreguntasResponseList>();
                    var config2 = (from en in _context.Query<Modelo.dat_encuesta_seccion>()
                                   where en.id_encuesta == request.id_encuesta && en.es_eliminado == false

                                   select new SeccionListResponse
                                   {
                                       id_encuesta_seccion = en.id_encuesta_seccion,
                                       id_encuesta = en.id_encuesta,
                                       seccion = en.seccion,
                                       orden = en.orden,
                                       preguntas = (from p in _context.Query<Modelo.dat_encuesta_pregunta>(true)
                                                    join tp in _context.Query<Modelo.cat_tipo_pregunta>(true).Where(
                                                             x => x.es_eliminado == false
                                                       ) on p.id_tipo_pregunta equals tp.id
                                                    join ta in _context.Query<Modelo.cat_tipo_archivo>(true).Where(
                                                          x => x.es_eliminado == false
                                                    ) on p.id_tipo_archivo equals ta.id into TipoArchivo
                                                    from lf_ta in TipoArchivo.DefaultIfEmpty()

                                                    join ca in _context.Query<Modelo.cat_categoria_extranet>(true)
                                                      on p.id_categoria equals ca.id_categoria_extranet into Categoria
                                                    from lf_ca in Categoria.DefaultIfEmpty()

                                                    join sca in _context.Query<Modelo.cat_sub_categoria_extranet>(true)
                                                     on p.id_sub_categoria equals sca.id_sub_categoria_extranet into SubCategoria
                                                    from lf_sca in SubCategoria.DefaultIfEmpty()

                                                    where p.es_eliminado == false
                                                    && p.id_encuesta_seccion == en.id_encuesta_seccion

                                                    select new PreguntasSeccionResponseList()
                                                    {
                                                        id_pregunta = p.id_pregunta,
                                                        id_encuesta = p.id_encuesta,
                                                        pregunta = p.pregunta,
                                                        id_tipo_pregunta = p.id_tipo_pregunta,
                                                        tipo_pregunta = tp.nombre,
                                                        es_obligatorio = p.es_obligatorio,
                                                        //orden = p.orden,
                                                        id_categoria = p.id_categoria,
                                                        id_sub_categoria = p.id_sub_categoria,
                                                        categoria = lf_ca.nombre,
                                                        sub_categoria = lf_sca.nombre,
                                                        descripcion = p.descripcion,
                                                        id_tipo_archivo = p.id_tipo_archivo,
                                                        tipo_archivo = lf_ta.nombre,
                                                        iden_imagen = p.iden_imagen,
                                                        url_video = p.url_video,
                                                        por_defecto = p.por_defecto,
                                                        json_alternativas = p.json_alternativas,
                                                        json_archivo_tipo_archivo = p.json_archivo_tipo_archivo,

                                                        es_condicional = p.es_condicional,
                                                        es_condicionada = p.es_condicionada,
                                                        condicional = p.es_condicional == true ? "SI" : "NO",
                                                        id_pregunta_condicional = p.id_pregunta_condicional,
                                                        json_respuesta_condicional = p.json_respuesta_condicional,
                                                        es_agregar_pregunta = p.es_agregar_pregunta,
                                                        es_finaliza_encuesta = p.es_finaliza_encuesta,
                                                        id_encuesta_seccion = p.id_encuesta_seccion,
                                                        json_tipo_fecha = p.json_tipo_fecha,
                                                        orden = p.orden
                                                    }).OrderBy(x => x.orden).ToList()

                                   }).OrderBy(x => x.orden).ToList();

                    int ordenCount = 1;
                    List<PreguntasResponseList> preguntas = new List<PreguntasResponseList>();
                    foreach (var sec in config2)
                    {
                        foreach (var preg in sec.preguntas)
                        {
                            PreguntasResponseList pregun = new PreguntasResponseList();
                            pregun.id_pregunta = preg.id_pregunta;
                            pregun.id_encuesta = preg.id_encuesta;
                            pregun.pregunta = preg.pregunta;
                            pregun.id_tipo_pregunta = preg.id_tipo_pregunta;
                            pregun.tipo_pregunta = preg.tipo_pregunta;
                            pregun.es_obligatorio = preg.es_obligatorio;
                            pregun.id_categoria = preg.id_categoria;
                            pregun.id_sub_categoria = preg.id_sub_categoria;
                            pregun.categoria = preg.sub_categoria;
                            pregun.sub_categoria = preg.sub_categoria;
                            pregun.descripcion = preg.descripcion;
                            pregun.id_tipo_archivo = preg.id_tipo_archivo;
                            pregun.tipo_archivo = preg.tipo_archivo;
                            pregun.iden_imagen = preg.iden_imagen;
                            pregun.url_video = preg.url_video;
                            pregun.por_defecto = preg.por_defecto;
                            pregun.json_alternativas = preg.json_alternativas;
                            pregun.json_archivo_tipo_archivo = preg.json_archivo_tipo_archivo;
                            pregun.es_condicional = preg.es_condicional;
                            pregun.es_condicionada = preg.es_condicionada;
                            pregun.condicional = preg.condicional;
                            pregun.id_pregunta_condicional = preg.id_pregunta_condicional;
                            pregun.json_respuesta_condicional = preg.json_respuesta_condicional;
                            pregun.es_agregar_pregunta = preg.es_agregar_pregunta;
                            pregun.es_finaliza_encuesta = preg.es_finaliza_encuesta;
                            pregun.id_encuesta_seccion = preg.id_encuesta_seccion;
                            pregun.json_tipo_fecha = preg.json_tipo_fecha;
                            pregun.orden = ordenCount;

                            preguntas.Add(pregun);

                            ordenCount++;
                        }
                    }

                    config = (from preg in preguntas
                              select new PreguntasResponseList
                              {
                                  id_pregunta = preg.id_pregunta,
                                  id_encuesta = preg.id_encuesta,
                                  pregunta = preg.pregunta,
                                  id_tipo_pregunta = preg.id_tipo_pregunta,
                                  tipo_pregunta = preg.tipo_pregunta,
                                  es_obligatorio = preg.es_obligatorio,
                                  id_categoria = preg.id_categoria,
                                  id_sub_categoria = preg.id_sub_categoria,
                                  categoria = preg.sub_categoria,
                                  sub_categoria = preg.sub_categoria,
                                  descripcion = preg.descripcion,
                                  id_tipo_archivo = preg.id_tipo_archivo,
                                  tipo_archivo = preg.tipo_archivo,
                                  iden_imagen = preg.iden_imagen,
                                  url_video = preg.url_video,
                                  por_defecto = preg.por_defecto,
                                  json_alternativas = preg.json_alternativas,
                                  json_archivo_tipo_archivo = preg.json_archivo_tipo_archivo,
                                  es_condicional = preg.es_condicional,
                                  es_condicionada = preg.es_condicionada,
                                  condicional = preg.condicional,
                                  id_pregunta_condicional = preg.id_pregunta_condicional,
                                  json_respuesta_condicional = preg.json_respuesta_condicional,
                                  es_agregar_pregunta = preg.es_agregar_pregunta,
                                  es_finaliza_encuesta = preg.es_finaliza_encuesta,
                                  id_encuesta_seccion = preg.id_encuesta_seccion,
                                  json_tipo_fecha = preg.json_tipo_fecha,
                                  orden = preg.orden
                              }).OrderBy(o => o.orden).AsQueryable().PagedResponse(request);

                    
                }
                else
                {
                    config = (from p in _context.Query<Modelo.dat_encuesta_pregunta>()
                              join tp in _context.Query<Modelo.cat_tipo_pregunta>().Where(
                                    x => x.es_eliminado == false
                              ) on p.id_tipo_pregunta equals tp.id
                              join ta in _context.Query<Modelo.cat_tipo_archivo>().Where(
                                    x => x.es_eliminado == false
                              ) on p.id_tipo_archivo equals ta.id into TipoArchivo
                              from lf_ta in TipoArchivo.DefaultIfEmpty()

                              join ca in _context.Query<Modelo.cat_categoria_extranet>()
                                on p.id_categoria equals ca.id_categoria_extranet into Categoria
                              from lf_ca in Categoria.DefaultIfEmpty()

                              join sca in _context.Query<Modelo.cat_sub_categoria_extranet>()
                               on p.id_sub_categoria equals sca.id_sub_categoria_extranet into SubCategoria
                              from lf_sca in SubCategoria.DefaultIfEmpty()

                              where p.id_encuesta == request.id_encuesta && p.es_eliminado == false
                              && (p.es_condicional == _mostar_solo_condicional || _mostar_solo_condicional == false)
                              select new PreguntasResponseList
                              {
                                  id_pregunta = p.id_pregunta,
                                  id_encuesta = p.id_encuesta,
                                  pregunta = p.pregunta,
                                  id_tipo_pregunta = p.id_tipo_pregunta,
                                  tipo_pregunta = tp.nombre,
                                  es_obligatorio = p.es_obligatorio,
                                  //orden = p.orden,
                                  id_categoria = p.id_categoria,
                                  id_sub_categoria = p.id_sub_categoria,
                                  categoria = lf_ca.nombre,
                                  sub_categoria = lf_sca.nombre,
                                  descripcion = p.descripcion,
                                  id_tipo_archivo = p.id_tipo_archivo,
                                  tipo_archivo = lf_ta.nombre,
                                  iden_imagen = p.iden_imagen,
                                  url_video = p.url_video,
                                  por_defecto = p.por_defecto,
                                  json_alternativas = p.json_alternativas,
                                  json_archivo_tipo_archivo = p.json_archivo_tipo_archivo,

                                  es_condicional = p.es_condicional,
                                  es_condicionada = p.es_condicionada,
                                  id_pregunta_condicional = p.id_pregunta_condicional,
                                  json_respuesta_condicional = p.json_respuesta_condicional,
                                  es_agregar_pregunta = p.es_agregar_pregunta,
                                  es_finaliza_encuesta = p.es_finaliza_encuesta,
                                  orden = p.orden,
                                  id_encuesta_seccion = p.id_encuesta_seccion,
                                  json_tipo_fecha = p.json_tipo_fecha
                              }).OrderBy(x => x.orden).PagedResponse(request);
                }                
            }            
            return config;
        }
        public List<PreguntasResponseList> GetPreguntasCondicionalesByEncuesta(PreguntaCondicionaldaRequestList request)
        {
            try
            {
                return _uow.GetPreguntasCondicionalesByEncuesta(request);
            }
            catch (Exception ex)
            {
                this._logger.LogError(ex, "Listar/PreguntaCondicional");

                return new List<PreguntasResponseList>();
            }
        }
        public PagedResponse<PaginadoPreguntasResponse> GetPaginadoRegistrado(PaginadoPreguntasRequest request)
        {
            PagedResponse<PaginadoPreguntasResponse> response = new PagedResponse<PaginadoPreguntasResponse>();
            if (request.id_tipo_encuesta == (int)TIPO_ENCUESTA.intranet)
            {
                var trabajador = (from t in _context.Query<Modelo.vw_trabajador>()
                                  where t.DNI == request.dni_trabajador
                                  select new { id_trabajador = t.CODIGO_TRABAJADOR }).FirstOrDefault();
                response = (from p in _context.Query<Modelo.dat_respuesta>()
                              where p.id_encuesta == request.id_encuesta && p.es_eliminado == false
                              && p.id_trabajador == trabajador.id_trabajador
                              select new PaginadoPreguntasResponse
                              {
                                  json = p.json_paginado
                              }).PagedResponse(request);
                
            }
            else if (request.id_tipo_encuesta == (int)TIPO_ENCUESTA.extranet)
            {
                response = (from p in _context.Query<Modelo.dat_respuesta>()
                              where p.id_encuesta == request.id_encuesta && p.es_eliminado == false
                              && p.ruc_administrado == request.dni_trabajador
                              select new PaginadoPreguntasResponse
                              {
                                  json = p.json_paginado
                              }).PagedResponse(request);                
            }
            return response;
        }

        public PagedResponse<PreguntasResponseList> GetPreguntaByIdenPregunta(PreguntasIdenRequest request)
        {
            var config = (from p in _context.Query<Modelo.dat_encuesta_pregunta>()
                          join tp in _context.Query<Modelo.cat_tipo_pregunta>().Where(
                                x => x.es_eliminado == false
                          ) on p.id_tipo_pregunta equals tp.id
                          join ta in _context.Query<Modelo.cat_tipo_archivo>().Where(
                                x => x.es_eliminado == false
                          ) on p.id_tipo_archivo equals ta.id into TipoArchivo
                          from lf_ta in TipoArchivo.DefaultIfEmpty()

                          join ca in _context.Query<Modelo.cat_categoria>()
                            on p.id_categoria equals ca.id_categoria into Categoria
                          from lf_ca in Categoria.DefaultIfEmpty()

                          join sca in _context.Query<Modelo.cat_sub_categoria>()
                           on p.id_sub_categoria equals sca.id_sub_categoria into SubCategoria
                          from lf_sca in SubCategoria.DefaultIfEmpty()

                          where p.id_pregunta == request.id_pregunta && p.es_eliminado == false
                          select new PreguntasResponseList
                          {
                              id_pregunta = p.id_pregunta,
                              id_encuesta = p.id_encuesta,
                              pregunta = p.pregunta,
                              id_tipo_pregunta = p.id_tipo_pregunta,
                              tipo_pregunta = tp.nombre,
                              es_obligatorio = p.es_obligatorio,
                              //orden = p.orden,
                              id_categoria = p.id_categoria,
                              id_sub_categoria = p.id_sub_categoria,
                              categoria = lf_ca.nombre,
                              sub_categoria = lf_sca.nombre,
                              descripcion = p.descripcion,
                              id_tipo_archivo = p.id_tipo_archivo,
                              tipo_archivo = lf_ta.nombre,
                              iden_imagen = p.iden_imagen,
                              url_video = p.url_video,
                              por_defecto = p.por_defecto,
                              json_alternativas = p.json_alternativas,
                              es_finaliza_encuesta = p.es_finaliza_encuesta == true ? true : false,
                              es_condicional = p.es_condicional,
                              es_condicionada = p.es_condicionada,
                              id_pregunta_condicional = p.id_pregunta_condicional,
                              json_respuesta_condicional = p.json_respuesta_condicional,
                              json_tipo_fecha = p.json_tipo_fecha,
                              json_archivo_tipo_archivo = p.json_archivo_tipo_archivo,
                              id_encuesta_seccion = p.id_encuesta_seccion,
                              es_agregar_pregunta = p.es_agregar_pregunta
                          }).PagedResponse(request);
            return config;
        }
        

        public StatusResponse SaveUpdatePregunta(PreguntaSaveUpdateRequest req)
        {   
            var sr = new StatusResponse { Value = 0 };
            #region VALIDACION DE DATOS
            var _errores = _EncuestaValidacion.ValidarRegistroEdicionPregunta(req);
                if (_errores.Any())
            {
                sr.Success = false;
                sr.Messages = _errores;
                return sr;
            }
            #endregion

            #region PARA LA EDICIÓN DE REGISTROS
            if (req.id_pregunta > 0)
            {
                try
                {
                    #region SE VALIDA QUE NO EXISTA UNA PREGUNTA CON EL MISMO NOMBRE EN LA ENCUESTA
                    var _valid = _context.Query<Modelo.dat_encuesta_pregunta>(false).FirstOrDefault(x =>
                         x.id_pregunta != req.id_pregunta && x.pregunta == req.pregunta
                         && x.id_encuesta == req.id_encuesta && x.es_eliminado == false);

                    if (_valid != null)
                    {
                        sr.Success = false;
                        sr.Messages.Add("Ya existe esta pregunta");
                    }
                    #endregion
                    #region ACTUALIZACIÓN DEL REGISTRO
                    else
                    {
                        var files_only = req.files_only;
                        #region ACTUALIZACIÓN DE TODO EL REGISTRO
                        if (files_only.GetValueOrDefault())
                        {
                            var update_val = _context.Query<Modelo.dat_encuesta_pregunta>(false).FirstOrDefault(x => x.id_pregunta == req.id_pregunta);
                            if (update_val != null)
                            {
                                update_val.pregunta = req.pregunta;
                                update_val.es_obligatorio = req.es_obligatorio;
                                update_val.id_tipo_pregunta = req.id_tipo_pregunta;
                                update_val.id_categoria = req.id_categoria;
                                update_val.id_sub_categoria = req.id_sub_categoria;
                                update_val.descripcion = req.descripcion;
                                update_val.id_tipo_archivo = req.id_tipo_archivo;
                                update_val.iden_imagen = req.iden_imagen;
                                update_val.url_video = req.url_video;
                                update_val.json_alternativas = req.json_alternativas;
                                update_val.es_condicionada = req.es_condicionada;
                                update_val.es_condicional = req.es_condicional;
                                update_val.id_pregunta_condicional = req.id_pregunta_condicional;
                                update_val.json_respuesta_condicional = req.json_respuesta_condicional;
                                update_val.json_archivo_tipo_archivo = req.json_archivo_tipo_archivo;
                                update_val.es_agregar_pregunta = req.es_agregar_pregunta;
                                update_val.es_finaliza_encuesta = req.es_finaliza_encuesta;
                                update_val.usuario_modificacion = req.user_name;
                                update_val.fecha_modificacion = DateTime.Now;
                                update_val.id_encuesta_seccion = req.id_encuesta_seccion;
                                update_val.json_tipo_fecha = req.json_tipo_fecha;
                                _context.Update(update_val);
                                _uow.Save();
                                sr.Success = true;
                                sr.Messages.Add("El registro se actualizó correctamente");
                            }
                            else
                            {
                                sr.Success = false;
                                sr.Messages.Add("El registro a editar no éxiste");
                            }
                        }
                        #endregion
                        #region ACTUALIZACIÓN DE ARCHIVOS
                        else
                        {
                            var update_val = _context.Query<Modelo.dat_encuesta_pregunta>(false).FirstOrDefault(x => x.id_pregunta == req.id_pregunta);
                            if (update_val != null)
                            {
                                update_val.pregunta = req.pregunta;
                                update_val.es_obligatorio = req.es_obligatorio;
                                update_val.id_tipo_pregunta = req.id_tipo_pregunta;
                                update_val.id_categoria = req.id_categoria;
                                update_val.id_sub_categoria = req.id_sub_categoria;
                                update_val.descripcion = req.descripcion;
                                update_val.id_tipo_archivo = req.id_tipo_archivo;
                                update_val.iden_imagen = req.iden_imagen;
                                update_val.url_video = req.url_video;
                                update_val.json_alternativas = req.json_alternativas;
                                update_val.es_condicionada = req.es_condicionada;
                                update_val.es_condicional = req.es_condicional;
                                update_val.id_pregunta_condicional = req.id_pregunta_condicional;
                                update_val.json_respuesta_condicional = req.json_respuesta_condicional;
                                update_val.json_archivo_tipo_archivo = req.json_archivo_tipo_archivo;
                                update_val.es_agregar_pregunta = req.es_agregar_pregunta;
                                update_val.es_finaliza_encuesta = req.es_finaliza_encuesta;
                                update_val.usuario_modificacion = req.user_name;
                                update_val.fecha_modificacion = DateTime.Now;
                                update_val.id_encuesta_seccion = req.id_encuesta_seccion;
                                update_val.json_tipo_fecha = req.json_tipo_fecha;
                                _context.Update(update_val);
                                _uow.Save();
                                sr.Success = true;
                                sr.Messages.Add("El registro se actualizó correctamente");
                            }
                            else
                            {
                                sr.Success = false;
                                sr.Messages.Add("El registro a editar no éxiste");
                            }
                        }
                        #endregion
                    }
                        #endregion
                }
                catch (Exception ex)
                {
                    this._logger.LogError(ex, "Actualizar/PreguntaEncuesta");
                    sr.Success = false;
                    sr.Value = ex.InnerException;
                    sr.Messages.Add("No se pudo registrar la pregunta");
                }
            }
            #endregion
            #region PARA LA INSERCIÓN DE REGISTROS
            else
            {
                try
                {
                    #region SE VALIDA QUE EL NOMBRE DE LA PREGUNTA NO SE REPITA EN LA MISMA ENCUESTA
                    var _valid = _context.Query<Modelo.dat_encuesta_pregunta>(false).FirstOrDefault(x =>
                    x.pregunta == req.pregunta && x.id_encuesta == req.id_encuesta && x.es_eliminado == false);
                    if (_valid != null)
                    {
                        sr.Success = false;
                        sr.Messages.Add("Ya existe esta pregunta");
                    }
                    #endregion
                    #region INSERT DEL REGISTRO
                    else
                    {
                        var _pregunta = _context.Query<Modelo.dat_encuesta_pregunta>(false).OrderByDescending(x => x.orden).FirstOrDefault(x =>
                        x.orden != null && x.id_encuesta == req.id_encuesta && x.es_eliminado == false);

                        int sumarOrden = 1;
                        if (_pregunta != null) {
                            sumarOrden = sumarOrden + _pregunta.orden.GetValueOrDefault();
                        }

                        var entity = new Modelo.dat_encuesta_pregunta()
                        {
                            id_encuesta = req.id_encuesta,
                            pregunta = req.pregunta,
                            es_obligatorio = req.es_obligatorio,
                            id_tipo_pregunta = req.id_tipo_pregunta,
                            id_categoria = req.id_categoria,
                            id_sub_categoria = req.id_sub_categoria,
                            descripcion = req.descripcion,
                            id_tipo_archivo = req.id_tipo_archivo,
                            url_video = req.url_video,
                            iden_imagen = req.iden_imagen,
                            json_alternativas = req.json_alternativas,
                            es_eliminado = false,
                            fecha_creacion = DateTime.Now,
                            usuario_creacion = (req.user_name == null ? req.user_name : "system"),

                            fecha_modificacion = DateTime.Now,
                            usuario_modificacion= (req.user_name == null ? req.user_name : "system"),

                            es_condicional = req.es_condicional,
                            es_condicionada = req.es_condicionada,
                            id_pregunta_condicional = req.id_pregunta_condicional,
                            json_respuesta_condicional = req.json_respuesta_condicional,
                            json_archivo_tipo_archivo = req.json_archivo_tipo_archivo,
                            es_agregar_pregunta = req.es_agregar_pregunta,
                            es_finaliza_encuesta = req.es_finaliza_encuesta,
                            id_encuesta_seccion = req.id_encuesta_seccion,
                            json_tipo_fecha = req.json_tipo_fecha,
                            orden = sumarOrden
                        };
                        _context.Add(entity);
                        _uow.Save();
                        sr.Success = true; sr.Value = entity.id_pregunta;
                        sr.Messages.Add("El registro se guardó correctamente");
                    }
                    #endregion
                }
                catch (Exception ex)
                {
                    this._logger.LogError(ex, "Guardar/PreguntaEncuesta");
                    sr.Success = false;
                    sr.Value = ex.InnerException;
                    sr.Messages.Add("No se pudo registrar la pregunta");
                }

            }
            #endregion
            return sr;
        }

        public StatusResponse EnableDisable(BasicDeleteRequest req)
        {
            var sr = new StatusResponse { Value = 0 };
            if (req.table == "encuesta") {
                var valid = _context.Query<Modelo.dat_encuesta>(false).FirstOrDefault(x => x.id_encuesta == req.id);
                if (valid != null)
                {
                    valid.usuario_modificacion = req.user_name;
                    valid.id_estado = (int)ESTADO_ENCUESTA.eliminado;
                    valid.es_eliminado = true;
                    valid.fecha_modificacion = DateTime.Now;
                    _context.Update(valid);
                    _uow.Save();
                    sr.Success = true;
                    sr.Messages.Add("Eliminado con éxito");
                }
                else
                {
                    sr.Success = false;
                    sr.Messages.Add("El registro a eliminar no éxiste");
                }
            }
            if (req.table == "pregunta") {
                var valid = _context.Query<Modelo.dat_encuesta_pregunta>(false).FirstOrDefault(x => x.id_pregunta == req.id);
                if (valid != null)
                {
                    valid.usuario_modificacion = req.user_name;
                    valid.es_eliminado = true;
                    valid.fecha_modificacion = DateTime.Now;
                    _context.Update(valid);
                    _uow.Save();
                    sr.Success = true;
                    sr.Messages.Add("Eliminado con éxito");
                }
                else
                {
                    sr.Success = false;
                    sr.Messages.Add("El registro a eliminar no éxiste");
                }
            }
            if (req.table == "encuestados_encuesta") {
                var valid = _context.Query<Modelo.dat_encuesta_encuestado>(false).FirstOrDefault(x => x.id_grupo_encuestado == req.id);
                if (valid != null)
                {
                    valid.usuario_modificacion = req.user_name;
                    valid.es_eliminado = true;
                    valid.fecha_modificacion = DateTime.Now;
                    _context.Update(valid);
                    _uow.Save();
                    sr.Success = true;
                    sr.Messages.Add("Eliminado con éxito");
                }
                else
                {
                    sr.Success = false;
                    sr.Messages.Add("El registro a eliminar no éxiste");
                }
            }
            if (req.table == "seccion")
            {
                var valid = _context.Query<Modelo.dat_encuesta_seccion>(false).FirstOrDefault(x => x.id_encuesta_seccion == req.id);
                if (valid != null)
                {
                    valid.usuario_modificacion = req.user_name;
                    valid.es_eliminado = true;
                    valid.fecha_modificacion = DateTime.Now;
                    _context.Update(valid);
                    _uow.Save();
                    sr.Success = true;
                    sr.Messages.Add("Eliminado con éxito");
                }
                else
                {
                    sr.Success = false;
                    sr.Messages.Add("El registro a eliminar no éxiste");
                }
            }
            if (req.table == "notificacion")
            {
                var valid = _context.Query<Modelo.dat_encuesta_notificacion>(false).FirstOrDefault(x => x.id_encuesta_notificacion == req.id);
                if (valid != null)
                {
                    valid.usuario_modificacion = req.user_name;
                    valid.es_eliminado = true;
                    valid.fecha_modificacion = DateTime.Now;
                    _context.Update(valid);
                    _uow.Save();
                    sr.Success = true;
                    sr.Messages.Add("Eliminado con éxito");
                }
                else
                {
                    sr.Success = false;
                    sr.Messages.Add("El registro a eliminar no éxiste");
                }
            }
            if (req.table == "encuesta_administrado")
            {
                var valid = _context.Query<Modelo.dat_encuesta_administrado>(false).FirstOrDefault(x => x.id_encuesta_administrado == req.id);
                if (valid != null)
                {
                    valid.usuario_modificacion = req.user_name;
                    valid.es_eliminado = true;
                    valid.fecha_modificacion = DateTime.Now;
                    _context.Update(valid);
                    _uow.Save();
                    sr.Success = true;
                    sr.Messages.Add("Eliminado con éxito");
                }
                else
                {
                    sr.Success = false;
                    sr.Messages.Add("El registro a eliminar no éxiste");
                }
            }
            return sr;
        }

        public StatusResponse Prepublicar(BasicDeleteRequest req)
        {
            var sr = new StatusResponse { Value = 0 };
            var valid = _context.Query<Modelo.dat_encuesta>(false).FirstOrDefault(x => x.id_encuesta == req.id);
            if (valid != null)
            {
                sr = _uow.Prepublicar(req);
            }
            else
            {
                sr.Success = false;
                sr.Messages.Add("El registro a modificar no éxiste");
            }
            return sr;
        }
        

        public PagedResponse<EncuestadosItemList> GetEncuestadosByFilterEncuesta(EncuestadosRequestList request)
        {

            var config = (from ec in _context.Query<Modelo.dat_encuesta_encuestado>()
                          join tt in _context.Query<Modelo.vw_trabajador>() on ec.id_trabajador equals tt.CODIGO_TRABAJADOR

                          join dp in _context.Query<Modelo.vw_dependencia>()
                          on tt.CODIGO_DEPENDENCIA equals dp.CODIGO_DEPENDENCIA into Dependencia
                          from ldp in Dependencia.DefaultIfEmpty()

                          join rg in _context.Query<Modelo.vw_regimen>()
                          on tt.ID_REGIMEN equals rg.ID_REGIMEN into Regimen
                          from lrg in Regimen.DefaultIfEmpty()
                          where
                            ec.id_encuesta==request.id_encuesta
                            && (request.dni==null || request.dni=="" || tt.DNI==request.dni)
                            && (request.nombres==null || request.nombres=="" ||
                                ((tt.NOMBRES_TRABAJADOR!=null? tt.NOMBRES_TRABAJADOR:"")+
                                (tt.APELLIDOS_TRABAJADOR != null ? tt.APELLIDOS_TRABAJADOR : "")).Contains(request.nombres)
                               )
                            && (ec.es_eliminado == false)
                          select new EncuestadosItemList
                          {
                              id_grupo_encuestado = ec.id_grupo_encuestado,
                              id_encuesta = ec.id_encuesta,
                              id_trabajador =ec.id_trabajador,
                              id_dependencia =ec.id_dependendia,
                              nombre_trabajador =tt.NOMBRES_TRABAJADOR,
                              apellidos_trabajador =tt.APELLIDOS_TRABAJADOR,
                              dependecia = ldp.DEPENDENCIA,
                              regimen = lrg.DESCRIPCION,
                              resuelto = ec.resuelto
                          }).PagedResponse(request);
            return config;
        }

        public PagedResponse<EncuestadoresExtranetResponse> GetEncuestadosByFilterEncuestaExtranet(EncuestadosRequestList request)
        {

            var config = (from ec in _context.Query<Modelo.dat_encuesta_administrado>()
                          join persona in _context.Query<Modelo.vw_persona>() on ec.ruc_administrado equals persona.NRO_DOCUMENTO
                          where
                            ec.id_encuesta == request.id_encuesta
                            && (request.dni == null || request.dni == "" || persona.NRO_DOCUMENTO == request.dni)
                            && (request.nombres == null || request.nombres == "" || (persona.ID_TIPO_PERSONA == 1 ? persona.NOMBRES + " " + persona.APELLIDOS : persona.RAZON_SOCIAL).Contains(request.nombres))
                            && (ec.es_eliminado == false)
                          select new EncuestadoresExtranetResponse
                          {
                              id_encuesta_administrado = ec.id_encuesta_administrado,
                              id_persona = persona.ID,
                              numero_documento = persona.NRO_DOCUMENTO,
                              razon_social = persona.ID_TIPO_PERSONA == 1 ? persona.NOMBRES + " " + persona.APELLIDOS : persona.RAZON_SOCIAL,
                              id_tipo_persona = persona.ID_TIPO_PERSONA,
                              tipo_persona = persona.ID_TIPO_PERSONA == 1 ? "Natural" : "Juridica"
                          }).PagedResponse(request);
            return config;
        }

        public StatusResponse SaveEncuestaEncuestadosList(EncuestadosEncuestaSaveRequest req)
        {
            var sr = new StatusResponse { Value = 0 };
            var today = DateTime.Now;
            sr.Success = false;
            int existentes = 0;
            foreach (var item in req.data)
            {
                var valid = _context.Query<Modelo.dat_encuesta_encuestado>(false).FirstOrDefault(x => x.id_encuesta==item.id_encuesta && x.id_trabajador == item.id_trabajador);
                if (valid != null)
                {
                    existentes += 1;
                }
                else
                {
                    var entity = new Modelo.dat_encuesta_encuestado()
                    {
                        id_encuesta=item.id_encuesta,
                        id_trabajador=item.id_trabajador,
                        id_dependendia = item.id_dependencia!=null?(int)item.id_dependencia:0,
                        id_regimen= item.id_regimen!=null?(int)item.id_regimen:0,
                        dni_trabajador=item.dni_trabajador,
                        resuelto=false,
                        es_eliminado=false,
                        fecha_creacion=today,
                        usuario_creacion=req.user_name
                    };
                    _context.Add(entity);
                    _uow.Save();

                    sr.Success = true;
                }
            }
            if (sr.Success)
            {
                if (existentes == 0)
                {
                    sr.Messages.Add("Se registró con éxito.");
                }
                else
                {
                    sr.Messages.Add("Se registraron " + (req.data.Count - existentes).ToString() + " de " + req.data.Count.ToString() + ".");
                    sr.Messages.Add("Los " + (existentes).ToString() + " restantes eran elementos repetidos.");
                }
            }
            else {
                sr.Messages.Add("Sin elementos para registrar.");
            }
            return sr;
        }

        public StatusResponse SaveEncuestadosExtranetList(EncuestadosEncuestaExtranetSaveRequest req)
        {
            var sr = new StatusResponse { Value = 0 };
            try
            {
                foreach (var x in req.data)
                {
                    EncuestaByEncuestadoRequestList enc = new EncuestaByEncuestadoRequestList();
                    enc.id_encuesta = x.id_encuesta;
                    enc.dni_user = x.dni_user;
                    enc.usuario = req.user_name;

                    sr = _uow.InsertarEncuestasByAdministrado(enc);
                }
                
            }
            catch (Exception ex)
            {
                this._logger.LogError(ex, "INSERTAR/Insertar encuestas por administrado");
                sr.Success = false;
                sr.Messages.Add(ex.Message);
            }
            return sr;
        }



        public StatusResponse UpdateInformeEncuestas(EncuestaResultadosSaveRequest req)
        {
            var sr = new StatusResponse { Value = 0 };
            var _errores = _EncuestaValidacion.ValidarSubidaResultados(req);
            if (_errores.Any())
            {
                sr.Success = false;
                sr.Messages = _errores;
                return sr;
            }
            var today = DateTime.Now;
            sr.Success = false;
            var valid = _context.Query<Modelo.dat_encuesta>(true).FirstOrDefault(x => x.id_encuesta == req.id_encuesta);
            if (valid != null)
            {
                valid.fecha_resultados = DateTime.Now;
                valid.id_estado = 4;// (int) ESTADO_ENCUESTA.procesado;
                valid.iden_pdf_resultados_completo = req.iden_pdf_completo;
                valid.iden_pdf_resultados = req.iden_pdf_encuestado;
                valid.nro_informe = req.nro_informe;
                _context.Update(valid);
                _uow.Save();
                sr.Success = true;
                sr.Messages.Add("Registrado con éxito.");
            }
            else
            {
                sr.Success = false;
                sr.Messages.Add("Sin elementos para registrar");
            }
            return sr;
        }

        public PagedResponse<RespuestasEncuestaItemList> GetRespuestasByEncuesta(PagedIdenEncuesta request)
        {
            var config = (from r in _context.Query<Modelo.dat_respuesta>()
                          join rg in _context.Query<Modelo.vw_regimen>() on r.id_regimen equals rg.ID_REGIMEN
                          join sx in _context.Query<Modelo.cat_sexos>().Where(x=>x.es_eliminado==false) on r.id_sexo equals sx.id
                          where r.id_encuesta==request.id_encuesta && r.es_eliminado==false
                          select new RespuestasEncuestaItemList
                          {
                              id_respuesta = r.id_respuesta,
                              edad = r.edad,
                              regimen= rg.DESCRIPCION,
                              sexo= sx.nombre,
                              Preguntas = (from p in _context.Query<Modelo.dat_encuesta_pregunta>(true)

                                           join rp in _context.Query<Modelo.dat_respuesta_pregunta>(true).Where(xx=>xx.id_respuesta==r.id_respuesta) on p.id_pregunta equals rp.id_pregunta into RespuestasByPregunta
                                           from _rp in RespuestasByPregunta.DefaultIfEmpty()

                                           where p.id_encuesta == r.id_encuesta && p.es_eliminado==false
                                            select new RespuestaPreguntaBasic
                                            {
                                                id_pregunta = p.id_pregunta,
                                                pregunta = p.pregunta,
                                                json_respuestas=_rp.json_respuestas
                                            }).ToList()
                          }).PagedResponse(request);
            return config;
        }

        public PagedResponse<RespuestasEncuestaExtranetItemList> GetRespuestasByEncuestaExtranet(PagedIdenEncuesta request)
        {
            var config = (from r in _context.Query<Modelo.dat_respuesta>()
                          join per in _context.Query<Modelo.vw_persona>() on r.ruc_administrado equals per.NRO_DOCUMENTO into pers
                          from persona in pers.DefaultIfEmpty()
                          where r.id_encuesta == request.id_encuesta && r.es_eliminado == false
                          select new RespuestasEncuestaExtranetItemList
                          {
                              id_respuesta = r.id_respuesta,
                              numero_documento = persona.NRO_DOCUMENTO,
                              razon_social = persona.ID_TIPO_PERSONA == 1 ? persona.NOMBRES + " " + persona.APELLIDOS : persona.RAZON_SOCIAL,
                              Preguntas = (from p in _context.Query<Modelo.dat_encuesta_pregunta>(true)

                                           join rp in _context.Query<Modelo.dat_respuesta_pregunta>(true).Where(xx => xx.id_respuesta == r.id_respuesta) on p.id_pregunta equals rp.id_pregunta into RespuestasByPregunta
                                           from _rp in RespuestasByPregunta.DefaultIfEmpty()

                                           where p.id_encuesta == r.id_encuesta && p.es_eliminado == false
                                           select new RespuestaPreguntaBasicExtranet
                                           {
                                               id_pregunta = p.id_pregunta,
                                               pregunta = p.pregunta,
                                               json_respuestas = _rp.json_respuestas
                                           }).ToList()
                          }).PagedResponse(request);
            return config;
        }

        public List<PreguntasResponseList> GetPreguntasByEncuestaOrdenamiento(PreguntasRequestList request)
        {

            var config = (from p in _context.Query<Modelo.dat_encuesta_pregunta>()
                          join tp in _context.Query<Modelo.cat_tipo_pregunta>().Where(
                                x => x.es_eliminado == false
                          ) on p.id_tipo_pregunta equals tp.id
                          join ta in _context.Query<Modelo.cat_tipo_archivo>().Where(
                                x => x.es_eliminado == false
                          ) on p.id_tipo_archivo equals ta.id into TipoArchivo
                          from lf_ta in TipoArchivo.DefaultIfEmpty()

                          join ca in _context.Query<Modelo.cat_categoria>()
                            on p.id_categoria equals ca.id_categoria into Categoria
                          from lf_ca in Categoria.DefaultIfEmpty()

                          join sca in _context.Query<Modelo.cat_sub_categoria>()
                           on p.id_sub_categoria equals sca.id_sub_categoria into SubCategoria
                          from lf_sca in SubCategoria.DefaultIfEmpty()

                          where p.id_encuesta == request.id_encuesta && p.es_eliminado == false
                          select new PreguntasResponseList
                          {
                              id_pregunta = p.id_pregunta,
                              id_encuesta = p.id_encuesta,
                              pregunta = p.pregunta,
                              id_tipo_pregunta = p.id_tipo_pregunta,
                              tipo_pregunta = tp.nombre,
                              es_obligatorio = p.es_obligatorio,
                              descripcion = p.descripcion,
                              es_condicional = p.es_condicional,
                              es_condicionada = p.es_condicionada,
                              condicional = p.es_condicional == true ? "SI" : "NO",
                              id_pregunta_condicional = p.id_pregunta_condicional,
                              orden = p.orden
                          }).OrderBy(x => x.orden).ToList();

            foreach (var item in config)
            {
                if (item.id_pregunta_condicional != null)
                {
                    var trabajador = (from en in _context.Query<Modelo.dat_encuesta_pregunta>()
                                      where en.id_pregunta == item.id_pregunta_condicional
                                      select new { pregunta = en.pregunta}).FirstOrDefault();
                    item.condicionada = "A " + trabajador.pregunta;
                }
            }

            return config;
        }

        public StatusResponse UpdatePreguntaEncuestaOrdenamiento(PreguntaOrdenamientoRequest req)
        {
            var sr = new StatusResponse { Value = 0 };
            sr.Success = false;

            try
            {
                var listaCondicionales = new List<PreguntaOrdenamientoList>();
                var listaCondicionadas = new List<PreguntaOrdenamientoList>();
                foreach (var item in req.lista)
                {
                    PreguntaOrdenamientoList condicional = new PreguntaOrdenamientoList();
                    if (item.es_condicional.GetValueOrDefault())
                    {
                        condicional.id_pregunta = item.id_pregunta;
                        condicional.pregunta = item.pregunta;
                        condicional.es_condicional = item.es_condicional;
                        listaCondicionales.Add(condicional);
                    }
                    
                    PreguntaOrdenamientoList condicionada = new PreguntaOrdenamientoList();
                    if (item.es_condicionada.GetValueOrDefault())
                    {
                        condicionada.id_pregunta = item.id_pregunta;
                        condicionada.pregunta = item.pregunta;
                        condicionada.id_pregunta_condicional = item.id_pregunta_condicional;
                        condicionada.es_condicionada = item.es_condicionada;
                        listaCondicionadas.Add(condicionada);
                    }
                    
                }

                var listaFinal = new List<PreguntaOrdenamientoList>();
                int ordenFinal = 1;
                foreach (var item2 in req.lista)
                {
                    var existePregunta = listaFinal.Where(x=> x.id_pregunta == item2.id_pregunta).FirstOrDefault();
                    if (existePregunta == null && !item2.es_condicionada.GetValueOrDefault())
                    {
                        PreguntaOrdenamientoList final = new PreguntaOrdenamientoList();
                        if (!item2.es_condicional.GetValueOrDefault() && !item2.es_condicionada.GetValueOrDefault())
                        {
                            final.id_pregunta = item2.id_pregunta;
                            final.pregunta = item2.pregunta;
                            final.orden = ordenFinal;                            
                            listaFinal.Add(final);
                            ordenFinal++;
                        }
                        else if (item2.es_condicional.GetValueOrDefault())
                        {
                            final.id_pregunta = item2.id_pregunta;
                            final.pregunta = item2.pregunta;
                            final.orden = ordenFinal;
                            listaFinal.Add(final);
                            ordenFinal++;
                            foreach (var condicionada in listaCondicionadas)
                            {
                                PreguntaOrdenamientoList finalCondicionada = new PreguntaOrdenamientoList();
                                if (condicionada.id_pregunta_condicional == item2.id_pregunta)
                                {
                                    finalCondicionada.id_pregunta = condicionada.id_pregunta;
                                    finalCondicionada.orden = ordenFinal;
                                    finalCondicionada.pregunta = condicionada.pregunta;
                                    listaFinal.Add(finalCondicionada);
                                    ordenFinal++;
                                }
                            }
                        }
                    }                    
                }

                foreach (var objeto in listaFinal)
                {
                    var update_pregunta = _context.Query<Modelo.dat_encuesta_pregunta>(false).FirstOrDefault(x => x.id_pregunta == objeto.id_pregunta);
                    if (update_pregunta != null)
                    {
                        update_pregunta.orden = objeto.orden;
                        _context.Update(update_pregunta);
                        _uow.Save();
                        sr.Success = true;
                        sr.Messages.Add("El orden de la preguntas se actualizó correctamente");
                    }
                }
            }
            catch (Exception ex)
            {
                this._logger.LogError(ex, "OrdenarPregunta/PreguntaEncuesta");
                sr.Success = false;
                sr.Value = ex.InnerException;
                sr.Messages.Add("No se pudo ordenar las preguntas");
            }

            var first = sr.Messages[0];
            sr.Messages.Clear();
            sr.Messages.Add(first);
            return sr;
        }
        public PagedResponse<SeccionResponse> GetSeccionesByEncuesta(PreguntasRequestList request)
        {
            var response = (from sec in _context.Query<Modelo.dat_encuesta_seccion>()

                            where sec.id_encuesta == request.id_encuesta && sec.es_eliminado == false
                            select new SeccionResponse
                            {
                                id_encuesta_seccion = sec.id_encuesta_seccion,
                                id_encuesta = sec.id_encuesta,
                                seccion = sec.seccion,
                                orden = sec.orden
                            }).OrderBy(x => x.orden).PagedResponse(request);
            return response;
        }

        public StatusResponse SaveUpdateSeccion(SeccionRequest req)
        {
            var sr = new StatusResponse { Value = 0 };
            #region VALIDACION DE DATOS
            var _errores = _EncuestaValidacion.ValidarRegistroEdicionSeccion(req);
            if (_errores.Any())
            {
                sr.Success = false;
                sr.Messages = _errores;
                return sr;
            }
            #endregion

            #region PARA LA EDICIÓN DE REGISTROS
            if (req.id_encuesta_seccion > 0)
            {
                try
                {
                    #region SE VALIDA QUE NO EXISTA UNA SECCION CON EL MISMO NOMBRE
                    var _valid = _context.Query<Modelo.dat_encuesta_seccion>(false).FirstOrDefault(x =>
                         x.id_encuesta_seccion != req.id_encuesta_seccion && x.seccion == req.seccion
                         && x.id_encuesta == req.id_encuesta && x.es_eliminado == false);

                    if (_valid != null)
                    {
                        sr.Success = false;
                        sr.Messages.Add("Ya existe esta sección");
                    }
                    #endregion
                    #region ACTUALIZACIÓN DEL REGISTRO
                    else
                    {
                        #region ACTUALIZACIÓN DE TODO EL REGISTRO
                        var update_val = _context.Query<Modelo.dat_encuesta_seccion>(false).FirstOrDefault(x => x.id_encuesta_seccion == req.id_encuesta_seccion);
                        if (update_val != null)
                        {
                            update_val.seccion = req.seccion;
                            update_val.usuario_modificacion = req.user_name;
                            update_val.fecha_modificacion = DateTime.Now;
                            _context.Update(update_val);
                            _uow.Save();
                            sr.Success = true;
                            sr.Messages.Add("El registro se actualizó correctamente");
                        }
                        else
                        {
                            sr.Success = false;
                            sr.Messages.Add("El registro a editar no éxiste");
                        }
                        #endregion
                    }
                    #endregion
                }
                catch (Exception ex)
                {
                    this._logger.LogError(ex, "Actualizar/PreguntaEncuesta");
                    sr.Success = false;
                    sr.Value = ex.InnerException;
                    sr.Messages.Add("No se pudo registrar la sección");
                }
            }
            #endregion
            #region PARA LA INSERCIÓN DE REGISTROS
            else
            {
                try
                {
                    #region SE VALIDA QUE EL NOMBRE DE LA SECCION NO SE REPITA
                    var _valid = _context.Query<Modelo.dat_encuesta_seccion>(false).FirstOrDefault(x =>
                    x.seccion == req.seccion && x.id_encuesta == req.id_encuesta && x.es_eliminado == false);
                    if (_valid != null)
                    {
                        sr.Success = false;
                        sr.Messages.Add("Ya existe esta sección");
                    }
                    #endregion
                    #region INSERT DEL REGISTRO
                    else
                    {
                        var _seccion = _context.Query<Modelo.dat_encuesta_seccion>(false).OrderByDescending(x => x.orden).FirstOrDefault(x =>
                        x.id_encuesta == req.id_encuesta && x.es_eliminado == false);

                        int sumarOrden = 1;
                        if (_seccion != null)
                        {
                            sumarOrden = sumarOrden + _seccion.orden;
                        }

                        var entity = new Modelo.dat_encuesta_seccion()
                        {
                            id_encuesta = req.id_encuesta,
                            seccion = req.seccion,
                            es_eliminado = false,
                            fecha_creacion = DateTime.Now,
                            usuario_creacion = (req.user_name == null ? "system" : req.user_name),
                            orden = sumarOrden
                        };
                        _context.Add(entity);
                        _uow.Save();
                        sr.Success = true; sr.Value = entity.id_encuesta_seccion;
                        sr.Messages.Add("El registro se guardó correctamente");
                    }
                    #endregion
                }
                catch (Exception ex)
                {
                    this._logger.LogError(ex, "Guardar/SeccionEncuesta");
                    sr.Success = false;
                    sr.Value = ex.InnerException;
                    sr.Messages.Add("No se pudo registrar la sección");
                }

            }
            #endregion
            return sr;
        }

        public StatusResponse UpdateSeccionEncuestaOrdenamiento(SeccionOrdenamientoRequest req)
        {
            var sr = new StatusResponse { Value = 0 };
            sr.Success = false;

            try
            {
                int ordenFinal = 1;
                foreach (var objeto in req.lista)
                {
                    var update_seccion = _context.Query<Modelo.dat_encuesta_seccion>(false).FirstOrDefault(x => x.id_encuesta_seccion == objeto.id_encuesta_seccion);
                    if (update_seccion != null)
                    {
                        update_seccion.orden = ordenFinal;
                        _context.Update(update_seccion);
                        _uow.Save();
                        sr.Success = true;
                        sr.Messages.Add("El orden de la sección se actualizó correctamente");
                    }
                    ordenFinal++;
                }
            }
            catch (Exception ex)
            {
                this._logger.LogError(ex, "OrdenarSeccion/SeccionEncuesta");
                sr.Success = false;
                sr.Value = ex.InnerException;
                sr.Messages.Add("No se pudo ordenar las secciones");
            }

            var first = sr.Messages[0];
            sr.Messages.Clear();
            sr.Messages.Add(first);
            return sr;
        }

        public List<SeccionResponse> GetSeccionList(SeccionRequest request)
        {
            var config = (from en in _context.Query<Modelo.dat_encuesta_seccion>()
                          where en.id_encuesta == request.id_encuesta && en.es_eliminado == false
                          select new SeccionResponse
                          {
                              id_encuesta_seccion = en.id_encuesta_seccion,
                              id_encuesta = en.id_encuesta,
                              seccion = en.seccion,
                              orden = en.orden
                          }).OrderBy(x => x.orden).ToList();
            return config;
        }

        public PagedResponse<NotificacionResponse> GetNotificacionesByEncuesta(PreguntasRequestList request)
        {
            var response = (from noti in _context.Query<Modelo.dat_encuesta_notificacion>()

                            where noti.id_encuesta == request.id_encuesta && noti.es_eliminado == false
                            select new NotificacionResponse
                            {
                                id_encuesta_notificacion = noti.id_encuesta_notificacion,
                                id_encuesta = noti.id_encuesta,
                                titulo = noti.titulo,
                                fecha_notificacion = noti.fecha_notificacion,
                                asunto = noti.asunto,
                                mensaje = noti.mensaje,
                                dirigido = noti.dirigido
                            }).OrderByDescending(x => x.fecha_notificacion).PagedResponse(request);
            return response;

        }

        public StatusResponse SaveUpdateNotificacion(NotificacionRequest req)
        {
            var sr = new StatusResponse { Value = 0 };
            #region VALIDACION DE DATOS
            var _errores = _EncuestaValidacion.ValidarRegistroEdicionNotificacion(req);
            if (_errores.Any())
            {
                sr.Success = false;
                sr.Messages = _errores;
                return sr;
            }
            #endregion

            #region PARA LA EDICIÓN DE REGISTROS
            if (req.id_encuesta_notificacion > 0)
            {
                try
                {
                    #region SE VALIDA QUE NO EXISTA UNA SECCION CON EL MISMO NOMBRE
                    var _valid = _context.Query<Modelo.dat_encuesta_notificacion>(false).FirstOrDefault(x =>
                         x.id_encuesta_notificacion != req.id_encuesta_notificacion && x.titulo == req.titulo
                         && x.id_encuesta == req.id_encuesta && x.es_eliminado == false);

                    if (_valid != null)
                    {
                        sr.Success = false;
                        sr.Messages.Add("Ya existe esta notificación");
                    }
                    #endregion
                    #region ACTUALIZACIÓN DEL REGISTRO
                    else
                    {
                        #region ACTUALIZACIÓN DE TODO EL REGISTRO
                        var update_val = _context.Query<Modelo.dat_encuesta_notificacion>(false).FirstOrDefault(x => x.id_encuesta_notificacion == req.id_encuesta_notificacion);
                        if (update_val != null)
                        {
                            update_val.titulo = req.titulo;
                            update_val.asunto = req.asunto;
                            update_val.fecha_notificacion = req.fecha_notificacion;
                            update_val.dirigido = req.dirigido;
                            update_val.mensaje = req.mensaje;
                            update_val.usuario_modificacion = req.user_name;
                            update_val.fecha_modificacion = DateTime.Now;
                            _context.Update(update_val);
                            _uow.Save();
                            sr.Success = true;
                            sr.Messages.Add("El registro se actualizó correctamente");
                        }
                        else
                        {
                            sr.Success = false;
                            sr.Messages.Add("El registro a editar no éxiste");
                        }
                        #endregion
                    }
                    #endregion
                }
                catch (Exception ex)
                {
                    this._logger.LogError(ex, "Actualizar/NotificaciónEncuesta");
                    sr.Success = false;
                    sr.Value = ex.InnerException;
                    sr.Messages.Add("No se pudo registrar la notificación");
                }
            }
            #endregion
            #region PARA LA INSERCIÓN DE REGISTROS
            else
            {
                try
                {
                    #region SE VALIDA QUE EL NOMBRE DE LA SECCION NO SE REPITA
                    var _valid = _context.Query<Modelo.dat_encuesta_notificacion>(false).FirstOrDefault(x =>
                    x.titulo == req.titulo && x.id_encuesta == req.id_encuesta && x.es_eliminado == false);
                    if (_valid != null)
                    {
                        sr.Success = false;
                        sr.Messages.Add("Ya existe esta notificación");
                    }
                    #endregion
                    #region INSERT DEL REGISTRO
                    else
                    {
                        var entity = new Modelo.dat_encuesta_notificacion()
                        {
                            id_encuesta = req.id_encuesta,
                            titulo = req.titulo,
                            fecha_notificacion = req.fecha_notificacion,
                            asunto = req.asunto,
                            dirigido = req.dirigido,
                            mensaje = req.mensaje,
                            es_eliminado = false,
                            fecha_creacion = DateTime.Now,
                            usuario_creacion = (req.user_name == null ? "system" : req.user_name),
                        };
                        _context.Add(entity);
                        _uow.Save();
                        sr.Success = true; sr.Value = entity.id_encuesta_notificacion;
                        sr.Messages.Add("El registro se guardó correctamente");
                    }
                    #endregion
                }
                catch (Exception ex)
                {
                    this._logger.LogError(ex, "Guardar/NotificaciónEncuesta");
                    sr.Success = false;
                    sr.Value = ex.InnerException;
                    sr.Messages.Add("No se pudo registrar la notificación");
                }

            }
            #endregion
            return sr;
        }

        #endregion

        #region PARA ENCUESTADOS
        public List<EncuestaByEncuestadoItem> GetEncuestasListByUser(EncuestaByEncuestadoRequestList request)
        {
            return _uow.GetEncuestasListByUser(request);
        }

        public PagedResponse<EncuestaResponseListAll> GetAllEncuestasListByUser(EncuestaRequestByUserListAll request)
        {
            var today = DateTime.Now;
            var trabajador = (from t in _context.Query<Modelo.vw_trabajador>() where t.DNI == request.dni_trabajador
                              select new { id_trabajador=t.CODIGO_TRABAJADOR }).FirstOrDefault();

            if (request.estado == 1)
            {//vigentes
                var list_1 = (from ec in _context.Query<Modelo.dat_encuesta>()
                                  /*
                                  join ee in _context.Query<Modelo.dat_encuesta_encuestado>() on ec.id_encuesta equals ee.id_encuesta into EncuestaEncuestado
                                  from _ee in EncuestaEncuestado.DefaultIfEmpty()*/
                              join _ee in _context.Query<Modelo.dat_encuesta_encuestado>().Where(x => x.id_trabajador == trabajador.id_trabajador && x.es_eliminado == false) on ec.id_encuesta equals _ee.id_encuesta

                              where ec.id_tipo_encuesta == (int)TIPO_ENCUESTA.intranet && ec.id_estado == (int)ESTADO_ENCUESTA.publicado && ec.fecha_inicio <= today && ec.fecha_fin >= today
                              && (_ee.id_trabajador == trabajador.id_trabajador) && ec.es_todos == false && ec.es_eliminado == false
                              && (request.titulo == null || ec.titulo.Contains(request.titulo))
                              && (
                                ((request.fecha_fin == null || ec.fecha_fin <= request.fecha_fin) && (ec.fecha_fin >= request.fecha_inicio || request.fecha_inicio == null))
                              ||
                                ((request.fecha_fin == null || ec.fecha_inicio <= request.fecha_fin) && (ec.fecha_inicio >= request.fecha_inicio || request.fecha_inicio == null))
                              )
                              select new EncuestaResponseListAll
                              {
                                  id_encuesta = ec.id_encuesta,
                                  total_preguntas = (from p in _context.Query<Modelo.dat_encuesta_pregunta>(true) 
                                                     where p.id_encuesta==ec.id_encuesta && p.es_eliminado==false
                                                     select p).Count(),
                                  conteo_resuelto = (from rp in _context.Query<Modelo.dat_respuesta_pregunta>(true)
                                                     join r in _context.Query<Modelo.dat_respuesta>(true) on rp.id_respuesta equals r.id_respuesta
                                                     where r.es_eliminado==false && r.id_encuesta==ec.id_encuesta && r.id_trabajador==trabajador.id_trabajador
                                                     select rp).Count(),
                                  titulo = ec.titulo,
                                  descripcion = ec.descripcion,
                                  es_anonima = ec.es_anonima,
                                  resuelto = _ee.resuelto,
                                  id_estado_resuelto = _ee.id_estado,
                                  inicio = ec.fecha_inicio,
                                  fin = ec.fecha_fin,
                                  iden_imagen = ec.iden_imagen_presentacion,
                                  fin_semana = ec.fecha_fin.AddDays(7)
                              }); ;

                var list_2 = (from e in _context.Query<Modelo.dat_encuesta>()
                              where e.id_estado == (int)ESTADO_ENCUESTA.publicado && e.id_tipo_encuesta == (int)TIPO_ENCUESTA.intranet
                              && e.fecha_inicio <= today && e.fecha_fin >= today && e.es_todos == true && e.es_eliminado==false
                              && (request.titulo == null || e.titulo.Contains(request.titulo))
                              && (
                                ((request.fecha_fin == null || e.fecha_fin <= request.fecha_fin) && (e.fecha_fin >= request.fecha_inicio || request.fecha_inicio == null))
                              ||
                                ((request.fecha_fin == null || e.fecha_inicio <= request.fecha_fin) && (e.fecha_inicio >= request.fecha_inicio || request.fecha_inicio == null))
                              )
                              select new EncuestaResponseListAll
                              {
                                  id_encuesta = e.id_encuesta,
                                  titulo = e.titulo,
                                  total_preguntas = (from p in _context.Query<Modelo.dat_encuesta_pregunta>(true)
                                                     where p.id_encuesta == e.id_encuesta && p.es_eliminado == false
                                                     select p).Count(),
                                  conteo_resuelto = (from rp in _context.Query<Modelo.dat_respuesta_pregunta>(true)
                                                     join r in _context.Query<Modelo.dat_respuesta>(true) on rp.id_respuesta equals r.id_respuesta
                                                     where r.es_eliminado == false && r.id_encuesta == e.id_encuesta && r.id_trabajador == trabajador.id_trabajador
                                                     select rp).Count(),
                                  descripcion = e.descripcion,
                                  es_anonima = e.es_anonima,
                                  resuelto = (from _ee in _context.Query<Modelo.dat_encuesta_encuestado>(true)
                                              where _ee.id_encuesta == e.id_encuesta && _ee.id_trabajador == trabajador.id_trabajador && _ee.es_eliminado==false
                                              select _ee.resuelto).FirstOrDefault(),
                                  id_estado_resuelto = (from _ee in _context.Query<Modelo.dat_encuesta_encuestado>(true)
                                                        where _ee.id_encuesta == e.id_encuesta && _ee.id_trabajador == trabajador.id_trabajador && _ee.es_eliminado == false
                                                        select _ee.id_estado).FirstOrDefault(),
                                  inicio = e.fecha_inicio,
                                  fin = e.fecha_fin,
                                  iden_imagen = e.iden_imagen_presentacion,
                                  fin_semana = e.fecha_fin.AddDays(7)
                              });
                var list = list_1.Union(list_2).PagedResponse(request);
                return list;

            }
            else if (request.estado == 2)
            { //anteriores
                var list_1 = (from ec in _context.Query<Modelo.dat_encuesta>()

                              join _ee in _context.Query<Modelo.dat_encuesta_encuestado>().Where(x => x.id_trabajador == trabajador.id_trabajador && x.es_eliminado==false) on ec.id_encuesta equals _ee.id_encuesta

                              where ec.id_tipo_encuesta == (int)TIPO_ENCUESTA.intranet && (ec.id_estado == (int)ESTADO_ENCUESTA.publicado || ec.id_estado == (int)ESTADO_ENCUESTA.procesado) && (today > ec.fecha_fin)
                              && (_ee.id_trabajador == trabajador.id_trabajador) && ec.es_todos == false && ec.es_eliminado==false
                              /*&& (request.titulo == null || ec.titulo.Contains(request.titulo))
                              && (
                                ((request.fecha_fin == null || ec.fecha_fin <= request.fecha_fin) && (ec.fecha_fin >= request.fecha_inicio || request.fecha_inicio == null))
                              ||
                                ((request.fecha_fin == null || ec.fecha_inicio <= request.fecha_fin) && (ec.fecha_inicio >= request.fecha_inicio || request.fecha_inicio == null))
                              )*/
                              select new EncuestaResponseListAll
                              {
                                  id_encuesta = ec.id_encuesta,
                                  titulo = ec.titulo,
                                  total_preguntas = (from p in _context.Query<Modelo.dat_encuesta_pregunta>(true)
                                                     where p.id_encuesta == ec.id_encuesta && p.es_eliminado == false
                                                     select p).Count(),
                                  conteo_resuelto = (from rp in _context.Query<Modelo.dat_respuesta_pregunta>(true)
                                                     join r in _context.Query<Modelo.dat_respuesta>(true) on rp.id_respuesta equals r.id_respuesta
                                                     where r.es_eliminado == false && r.id_encuesta == ec.id_encuesta && r.id_trabajador == trabajador.id_trabajador
                                                     select rp).Count(),
                                  descripcion = ec.descripcion,
                                  es_anonima = ec.es_anonima,
                                  resuelto = _ee.resuelto,
                                  id_estado_resuelto = _ee.id_estado,
                                  inicio = ec.fecha_inicio,
                                  fin = ec.fecha_fin,
                                  fin_semana=ec.fecha_fin,
                                  iden_imagen = ec.iden_imagen_presentacion
                              });
                var list_2 = (from e in _context.Query<Modelo.dat_encuesta>()
                              where (e.id_estado == (int)ESTADO_ENCUESTA.publicado || e.id_estado == (int)ESTADO_ENCUESTA.procesado)
                              && today > e.fecha_fin && e.es_todos == true && e.es_eliminado==false
                              && e.id_tipo_encuesta == (int)TIPO_ENCUESTA.intranet
                              /*&& (request.titulo == null || e.titulo.Contains(request.titulo))
                              && (
                                ((request.fecha_fin == null || e.fecha_fin <= request.fecha_fin) && (e.fecha_fin >= request.fecha_inicio || request.fecha_inicio == null))
                              ||
                                ((request.fecha_fin == null || e.fecha_inicio <= request.fecha_fin) && (e.fecha_inicio >= request.fecha_inicio || request.fecha_inicio == null))
                              )*/
                              select new EncuestaResponseListAll
                              {
                                  id_encuesta = e.id_encuesta,
                                  titulo = e.titulo,
                                  total_preguntas = (from p in _context.Query<Modelo.dat_encuesta_pregunta>(true)
                                                     where p.id_encuesta == e.id_encuesta && p.es_eliminado == false
                                                     select p).Count(),
                                  conteo_resuelto = (from rp in _context.Query<Modelo.dat_respuesta_pregunta>(true)
                                                     join r in _context.Query<Modelo.dat_respuesta>(true) on rp.id_respuesta equals r.id_respuesta
                                                     where r.es_eliminado == false && r.id_encuesta == e.id_encuesta && r.id_trabajador == trabajador.id_trabajador
                                                     select rp).Count(),
                                  descripcion = e.descripcion,
                                  es_anonima = e.es_anonima,

                                  resuelto = (from _ee in _context.Query<Modelo.dat_encuesta_encuestado>(true)
                                              where _ee.id_encuesta == e.id_encuesta && _ee.id_trabajador == trabajador.id_trabajador && _ee.es_eliminado == false
                                              select _ee.resuelto).FirstOrDefault(),
                                  id_estado_resuelto = (from _ee in _context.Query<Modelo.dat_encuesta_encuestado>(true)
                                                        where _ee.id_encuesta == e.id_encuesta && _ee.id_trabajador == trabajador.id_trabajador && _ee.es_eliminado == false
                                                        select _ee.id_estado).FirstOrDefault(),

                                  inicio = e.fecha_inicio,
                                  fin = e.fecha_fin,
                                  fin_semana = e.fecha_fin,
                                  iden_imagen = e.iden_imagen_presentacion
                              });
                var union = list_1.Union(list_2).Where(e =>

                (request.titulo == null || e.titulo.Contains(request.titulo))
                && (
                ((request.fecha_fin == null || e.fin <= request.fecha_fin) && (e.fin >= request.fecha_inicio || request.fecha_inicio == null))
                ||
                ((request.fecha_fin == null || e.inicio <= request.fecha_fin) && (e.inicio >= request.fecha_inicio || request.fecha_inicio == null))
                )
                );
                var list = union.PagedResponse(request);

                return list;
            }
            else { //vigente o no vigente
                var list_1 = (from ec in _context.Query<Modelo.dat_encuesta>()
                              join _ee in _context.Query<Modelo.dat_encuesta_encuestado>() on ec.id_encuesta equals _ee.id_encuesta 

                              where ec.id_tipo_encuesta == (int)TIPO_ENCUESTA.intranet && (ec.id_estado == (int)ESTADO_ENCUESTA.publicado || ec.id_estado == (int)ESTADO_ENCUESTA.procesado) 
                              && (_ee.id_trabajador == trabajador.id_trabajador) && ec.es_todos == false
                              && (request.titulo == null || ec.titulo.Contains(request.titulo))
                              && (
                                ((request.fecha_fin == null || ec.fecha_fin <= request.fecha_fin) && (ec.fecha_fin >= request.fecha_inicio || request.fecha_inicio == null))
                              ||
                                ((request.fecha_fin == null || ec.fecha_inicio <= request.fecha_fin) && (ec.fecha_inicio >= request.fecha_inicio || request.fecha_inicio == null))
                              )
                              select new EncuestaResponseListAll
                              {
                                  id_encuesta = ec.id_encuesta,
                                  titulo = ec.titulo,
                                  total_preguntas = (from p in _context.Query<Modelo.dat_encuesta_pregunta>(true)
                                                     where p.id_encuesta == ec.id_encuesta && p.es_eliminado == false
                                                     select p).Count(),
                                  conteo_resuelto = (from rp in _context.Query<Modelo.dat_respuesta_pregunta>(true)
                                                     join r in _context.Query<Modelo.dat_respuesta>(true) on rp.id_respuesta equals r.id_respuesta
                                                     where r.es_eliminado == false && r.id_encuesta == ec.id_encuesta && r.id_trabajador == trabajador.id_trabajador
                                                     select rp).Count(),
                                  descripcion = ec.descripcion,
                                  es_anonima = ec.es_anonima,
                                  resuelto = _ee.resuelto,
                                  id_estado_resuelto = _ee.id_estado,
                                  inicio = ec.fecha_inicio,
                                  fin = ec.fecha_fin,
                                  fin_semana = ec.fecha_fin,
                                  iden_imagen = ec.iden_imagen_presentacion
                              });

                var list_2 = (from e in _context.Query<Modelo.dat_encuesta>()
                              where e.id_tipo_encuesta == (int)TIPO_ENCUESTA.intranet && (e.id_estado == (int)ESTADO_ENCUESTA.publicado || e.id_estado == (int)ESTADO_ENCUESTA.procesado)
                              && e.id_tipo_encuesta == (int)TIPO_ENCUESTA.intranet
                              && e.es_todos == true
                              && (request.titulo==null || e.titulo.Contains(request.titulo))
                              && (
                                ((request.fecha_fin == null || e.fecha_fin <= request.fecha_fin) && (e.fecha_fin >= request.fecha_inicio || request.fecha_inicio == null))
                              ||
                                ((request.fecha_fin == null || e.fecha_inicio <= request.fecha_fin) && (e.fecha_inicio >= request.fecha_inicio || request.fecha_inicio == null))
                              )
                              select new EncuestaResponseListAll
                              {
                                  id_encuesta = e.id_encuesta,
                                  titulo = e.titulo,
                                  total_preguntas = (from p in _context.Query<Modelo.dat_encuesta_pregunta>(true)
                                                     where p.id_encuesta == e.id_encuesta && p.es_eliminado == false
                                                     select p).Count(),
                                  conteo_resuelto = (from rp in _context.Query<Modelo.dat_respuesta_pregunta>(true)
                                                     join r in _context.Query<Modelo.dat_respuesta>(true) on rp.id_respuesta equals r.id_respuesta
                                                     where r.es_eliminado == false && r.id_encuesta == e.id_encuesta && r.id_trabajador == trabajador.id_trabajador
                                                     select rp).Count(),
                                  descripcion = e.descripcion,
                                  es_anonima = e.es_anonima,
                                  resuelto = (from _ee in _context.Query<Modelo.dat_encuesta_encuestado>(true)
                                              where _ee.id_encuesta == e.id_encuesta && _ee.id_trabajador == trabajador.id_trabajador && _ee.es_eliminado == false
                                              select _ee.resuelto).FirstOrDefault(),
                                  id_estado_resuelto = (from _ee in _context.Query<Modelo.dat_encuesta_encuestado>(true)
                                                        where _ee.id_encuesta == e.id_encuesta && _ee.id_trabajador == trabajador.id_trabajador && _ee.es_eliminado == false
                                                        select _ee.id_estado).FirstOrDefault(),
                                  inicio = e.fecha_inicio,
                                  fin = e.fecha_fin,
                                  fin_semana = e.fecha_fin,
                                  iden_imagen = e.iden_imagen_presentacion
                              });
                var list = list_1.Union(list_2).PagedResponse(request);
                return list;
            }
        }

        public List<EncuestaResponseListAll> GetAllEncuestasListByUserExtranet(EncuestaRequestByUserListAll request)
        {
            var today = DateTime.Now;
            //request.estado = request.estado != (int)ESTADO_ADMINISTRADO.sin_comenzar ? request.estado - 1 : request.estado;
            var lista = (from ec in _context.Query<Modelo.dat_encuesta>()
                          join _ee in _context.Query<Modelo.dat_encuesta_administrado>().Where(x => x.es_eliminado == false) on ec.id_encuesta equals _ee.id_encuesta

                          where ec.id_tipo_encuesta == (int)TIPO_ENCUESTA.extranet && ec.id_estado == (int)ESTADO_ENCUESTA.publicado 
                          //&& ec.fecha_inicio <= today && ec.fecha_fin >= today
                          && ec.es_eliminado == false
                          && (request.titulo == null || ec.titulo.Contains(request.titulo))
                          && (
                            ((request.fecha_fin == null || ec.fecha_fin <= request.fecha_fin) && (ec.fecha_fin >= request.fecha_inicio || request.fecha_inicio == null))
                          ||
                            ((request.fecha_fin == null || ec.fecha_inicio <= request.fecha_fin) && (ec.fecha_inicio >= request.fecha_inicio || request.fecha_inicio == null))
                          )
                          && (request.estado == 0 || _ee.id_estado_administrado == request.estado)
                          && (_ee.ruc_administrado == request.dni_trabajador)
                         select new EncuestaResponseListAll
                          {
                              id_encuesta = ec.id_encuesta,
                              total_preguntas = (from p in _context.Query<Modelo.dat_encuesta_pregunta>(true)
                                                 where p.id_encuesta == ec.id_encuesta && p.es_eliminado == false
                                                 select p).Count(),
                              conteo_resuelto = (from rp in _context.Query<Modelo.dat_respuesta_pregunta>(true)
                                                 join r in _context.Query<Modelo.dat_respuesta>(true) on rp.id_respuesta equals r.id_respuesta
                                                 where r.es_eliminado == false && r.id_encuesta == ec.id_encuesta && r.ruc_administrado == request.dni_trabajador
                                                 select rp).Count(),
                              titulo = ec.titulo,
                              descripcion = ec.descripcion,
                              es_anonima = ec.es_anonima,
                              resuelto = _ee.id_estado_administrado == (int)ESTADO_ADMINISTRADO.completada ? true :false,
                              id_estado_resuelto = _ee.id_estado_administrado,
                              inicio = ec.fecha_inicio,
                              fin = ec.fecha_fin,
                              iden_imagen = ec.iden_imagen_presentacion,
                              fin_semana = ec.fecha_fin.AddDays(7)
                          }).ToList();
            return lista;
        }


        public ChartAnalisisEncuestaResponse GetResultadosChartByEncuesta(EncuestaIDENRequest request)
        {
            var ctx1= _uow.getResultado_byDependencia(request.id_encuesta);
            var ctx2 = _uow.getResultado_byEdades(request.id_encuesta);
            var ctx3 = _uow.getResultado_bySexo(request.id_encuesta);
            var ctx4 = _uow.getResultado_byRegimen(request.id_encuesta);

            var encuesta = (from e in _context.Query<Modelo.dat_encuesta>()
                              where e.id_encuesta == request.id_encuesta
                              select new { iden_pdf_resultados = e.iden_pdf_resultados }).FirstOrDefault();

            return new ChartAnalisisEncuestaResponse {
                Dependencias = ctx1,
                Edades = ctx2,
                Sexos = ctx3,
                Regimen = ctx4,
                iden_pdf= encuesta!=null? encuesta.iden_pdf_resultados:null
            };
        }

        public List<EncuestaByEncuestadoItem> GetEncuestasListByUserExtranet(EncuestaByEncuestadoRequestList request)
        {
            return _uow.GetEncuestasListByUserExtranet(request);
        }

        public List<PreguntasResponseList> GetListaPreguntasByEncuesta(PreguntasRequestList request)
        {
            var _mostar_solo_condicional = request.mostar_solo_condicional.GetValueOrDefault();
            var config = (from p in _context.Query<Modelo.dat_encuesta_pregunta>()
                          join tp in _context.Query<Modelo.cat_tipo_pregunta>().Where(
                                x => x.es_eliminado == false
                          ) on p.id_tipo_pregunta equals tp.id
                          join ta in _context.Query<Modelo.cat_tipo_archivo>().Where(
                                x => x.es_eliminado == false
                          ) on p.id_tipo_archivo equals ta.id into TipoArchivo
                          from lf_ta in TipoArchivo.DefaultIfEmpty()

                          join ca in _context.Query<Modelo.cat_categoria>()
                            on p.id_categoria equals ca.id_categoria into Categoria
                          from lf_ca in Categoria.DefaultIfEmpty()

                          join sca in _context.Query<Modelo.cat_sub_categoria>()
                           on p.id_sub_categoria equals sca.id_sub_categoria into SubCategoria
                          from lf_sca in SubCategoria.DefaultIfEmpty()

                          where p.id_encuesta == request.id_encuesta && p.es_eliminado == false && p.id_tipo_pregunta != 1
                          && (p.es_condicional == _mostar_solo_condicional || _mostar_solo_condicional == false)
  
                          select new PreguntasResponseList
                          {
                              id_pregunta = p.id_pregunta,
                              id_encuesta = p.id_encuesta,
                              pregunta = p.pregunta,
                              id_tipo_pregunta = p.id_tipo_pregunta,
                              tipo_pregunta = tp.nombre,
                              es_obligatorio = p.es_obligatorio,
                              //orden = p.orden,
                              id_categoria = p.id_categoria,
                              id_sub_categoria = p.id_sub_categoria,
                              categoria = lf_ca.nombre,
                              sub_categoria = lf_sca.nombre,
                              descripcion = p.descripcion,
                              id_tipo_archivo = p.id_tipo_archivo,
                              tipo_archivo = lf_ta.nombre,
                              iden_imagen = p.iden_imagen,
                              url_video = p.url_video,
                              por_defecto = p.por_defecto,
                              json_alternativas = p.json_alternativas,
                              json_archivo_tipo_archivo = p.json_archivo_tipo_archivo,

                              es_condicional = p.es_condicional,
                              es_condicionada = p.es_condicionada,
                              id_pregunta_condicional = p.id_pregunta_condicional,
                              json_respuesta_condicional = p.json_respuesta_condicional,
                              es_agregar_pregunta = p.es_agregar_pregunta,
                              es_finaliza_encuesta = p.es_finaliza_encuesta,
                              orden = p.orden,
                              id_encuesta_seccion = p.id_encuesta_seccion
                          }).OrderBy(x => x.orden).ToList();
            return config;
        }

        public List<SeccionListResponse> GetListaPreguntasSeccionByEncuesta(PreguntasRequestList request)
        {
            var _mostar_solo_condicional = request.mostar_solo_condicional.GetValueOrDefault();
            var config = (from en in _context.Query<Modelo.dat_encuesta_seccion>()
                          where en.id_encuesta == request.id_encuesta && en.es_eliminado == false

                          select new SeccionListResponse
                          {
                              id_encuesta_seccion= en.id_encuesta_seccion,
                              id_encuesta = en.id_encuesta,
                              seccion = en.seccion,
                              orden = en.orden,
                              preguntas = (from p in _context.Query<Modelo.dat_encuesta_pregunta>(true)

                                           join tp in _context.Query<Modelo.cat_tipo_pregunta>(true).Where(
                                                    x => x.es_eliminado == false
                                              ) on p.id_tipo_pregunta equals tp.id
                                           join ta in _context.Query<Modelo.cat_tipo_archivo>(true).Where(
                                                 x => x.es_eliminado == false
                                           ) on p.id_tipo_archivo equals ta.id into TipoArchivo
                                           from lf_ta in TipoArchivo.DefaultIfEmpty()

                                           join ca in _context.Query<Modelo.cat_categoria_extranet>(true)
                                             on p.id_categoria equals ca.id_categoria_extranet into Categoria
                                           from lf_ca in Categoria.DefaultIfEmpty()

                                           join sca in _context.Query<Modelo.cat_sub_categoria_extranet>(true)
                                            on p.id_sub_categoria equals sca.id_sub_categoria_extranet into SubCategoria
                                           from lf_sca in SubCategoria.DefaultIfEmpty()

                                           where p.es_eliminado == false
                                           && p.id_encuesta_seccion == en.id_encuesta_seccion
                                           && (p.es_condicional == _mostar_solo_condicional || _mostar_solo_condicional == false)
                                           
                                            select new PreguntasSeccionResponseList()
                                            {
                                                id_pregunta = p.id_pregunta,
                                                id_encuesta = p.id_encuesta,
                                                pregunta = p.pregunta,
                                                id_tipo_pregunta = p.id_tipo_pregunta,
                                                tipo_pregunta = tp.nombre,
                                                es_obligatorio = p.es_obligatorio,
                                                //orden = p.orden,
                                                id_categoria = p.id_categoria,
                                                id_sub_categoria = p.id_sub_categoria,
                                                categoria = lf_ca.nombre,
                                                sub_categoria = lf_sca.nombre,
                                                descripcion = p.descripcion,
                                                id_tipo_archivo = p.id_tipo_archivo,
                                                tipo_archivo = lf_ta.nombre,
                                                iden_imagen = p.iden_imagen,
                                                url_video = p.url_video,
                                                por_defecto = p.por_defecto,
                                                json_alternativas = p.json_alternativas,
                                                json_archivo_tipo_archivo = p.json_archivo_tipo_archivo,

                                                es_condicional = p.es_condicional,
                                                es_condicionada = p.es_condicionada,
                                                condicional = p.es_condicional == true ? "SI" : "NO",
                                                id_pregunta_condicional = p.id_pregunta_condicional,
                                                json_respuesta_condicional = p.json_respuesta_condicional,
                                                es_agregar_pregunta = p.es_agregar_pregunta,
                                                es_finaliza_encuesta = p.es_finaliza_encuesta,
                                                orden = p.orden
                                            }).OrderBy(x => x.orden).ToList()

        }).OrderBy(x => x.orden).ToList();

            foreach (var sec in config)
            {
                foreach (var pregunta in sec.preguntas)
                {
                    if (pregunta.id_pregunta_condicional != null)
                    {
                        var trabajador = (from en in _context.Query<Modelo.dat_encuesta_pregunta>()
                                          where en.id_pregunta == pregunta.id_pregunta_condicional
                                          select new { pregunta = en.pregunta }).FirstOrDefault();
                        pregunta.condicionada = "A " + trabajador.pregunta;
                    }
                }
                
            }
            return config;
        }        

        public StatusResponse UpdatePreguntaSeccionEncuestaOrdenamiento(SeccionListOrdenamientoRequest req)
        {
            var sr = new StatusResponse { Value = 0 };
            sr.Success = false;

            try
            {
                var listaCondicionales = new List<PreguntaOrdenamientoList>();
                var listaCondicionadas = new List<PreguntaOrdenamientoList>();

                foreach (var sec in req.secciones)
                {
                    foreach (var item in sec.preguntas)
                    {
                        PreguntaOrdenamientoList condicional = new PreguntaOrdenamientoList();
                        if (item.es_condicional.GetValueOrDefault())
                        {
                            condicional.id_pregunta = item.id_pregunta;
                            condicional.pregunta = item.pregunta;
                            condicional.es_condicional = item.es_condicional;
                            listaCondicionales.Add(condicional);
                        }

                        PreguntaOrdenamientoList condicionada = new PreguntaOrdenamientoList();
                        if (item.es_condicionada.GetValueOrDefault())
                        {
                            condicionada.id_pregunta = item.id_pregunta;
                            condicionada.pregunta = item.pregunta;
                            condicionada.id_pregunta_condicional = item.id_pregunta_condicional;
                            condicionada.es_condicionada = item.es_condicionada;
                            listaCondicionadas.Add(condicionada);
                        }

                    }

                    var listaFinal = new List<PreguntaOrdenamientoList>();
                    int ordenFinal = 1;
                    foreach (var item2 in sec.preguntas)
                    {
                        var existePregunta = listaFinal.Where(x => x.id_pregunta == item2.id_pregunta).FirstOrDefault();
                        if (existePregunta == null && !item2.es_condicionada.GetValueOrDefault())
                        {
                            PreguntaOrdenamientoList final = new PreguntaOrdenamientoList();
                            if (!item2.es_condicional.GetValueOrDefault() && !item2.es_condicionada.GetValueOrDefault())
                            {
                                final.id_pregunta = item2.id_pregunta;
                                final.pregunta = item2.pregunta;
                                final.orden = ordenFinal;
                                listaFinal.Add(final);
                                ordenFinal++;
                            }
                            else if (item2.es_condicional.GetValueOrDefault())
                            {
                                final.id_pregunta = item2.id_pregunta;
                                final.pregunta = item2.pregunta;
                                final.orden = ordenFinal;
                                listaFinal.Add(final);
                                ordenFinal++;
                                foreach (var condicionada in listaCondicionadas)
                                {
                                    PreguntaOrdenamientoList finalCondicionada = new PreguntaOrdenamientoList();
                                    if (condicionada.id_pregunta_condicional == item2.id_pregunta)
                                    {
                                        finalCondicionada.id_pregunta = condicionada.id_pregunta;
                                        finalCondicionada.orden = ordenFinal;
                                        finalCondicionada.pregunta = condicionada.pregunta;
                                        listaFinal.Add(finalCondicionada);
                                        ordenFinal++;
                                    }
                                }
                            }
                        }
                    }

                    foreach (var objeto in listaFinal)
                    {
                        var update_pregunta = _context.Query<Modelo.dat_encuesta_pregunta>(false).FirstOrDefault(x => x.id_pregunta == objeto.id_pregunta);
                        if (update_pregunta != null)
                        {
                            update_pregunta.orden = objeto.orden;
                            _context.Update(update_pregunta);
                            _uow.Save();
                            sr.Success = true;
                            sr.Messages.Add("El orden de la preguntas se actualizó correctamente");
                        }
                    }
                }
                
            }
            catch (Exception ex)
            {
                this._logger.LogError(ex, "OrdenarPregunta/PreguntaEncuesta");
                sr.Success = false;
                sr.Value = ex.InnerException;
                sr.Messages.Add("No se pudo ordenar las preguntas");
            }

            var first = sr.Messages[0];
            sr.Messages.Clear();
            sr.Messages.Add(first);
            return sr;
        }
        public StatusResponse InsertarEncuestasByAdministrado(EncuestaByEncuestadoRequestList req)
        {
            var sr = new StatusResponse { Value = 0 };
            try
            {
                sr = _uow.InsertarEncuestasByAdministrado(req);
            }
            catch (Exception ex)
            {
                this._logger.LogError(ex, "INSERTAR/Insertar encuestas por administrado");
                sr.Success = false;
                sr.Messages.Add(ex.Message);
            }
            return sr;
        }

        public StatusResponse SaveEncuestaAdministradoExtranet(EncuestaByEncuestadoRequestList req)
        {
            var sr = new StatusResponse { Value = 0 };
            try
            {
                sr = _uow.SaveEncuestaAdministradoExtranet(req);
            }
            catch (Exception ex)
            {
                this._logger.LogError(ex, "INSERTAR/Insertar encuestas por administrado");
                sr.Success = false;
                sr.Messages.Add(ex.Message);
            }
            return sr;
        }

        public PagedResponse<PreguntasResponseList> GetPreguntasSeccionesByEncuesta(PreguntasRequestList request)
        {
            PagedResponse<PreguntasResponseList> response = new PagedResponse<PreguntasResponseList>();
            var config = (from en in _context.Query<Modelo.dat_encuesta_seccion>()
                          where en.id_encuesta == request.id_encuesta && en.es_eliminado == false

                          select new SeccionListResponse
                          {
                              id_encuesta_seccion = en.id_encuesta_seccion,
                              id_encuesta = en.id_encuesta,
                              seccion = en.seccion,
                              orden = en.orden,
                              preguntas = (from p in _context.Query<Modelo.dat_encuesta_pregunta>(true)
                                           join tp in _context.Query<Modelo.cat_tipo_pregunta>(true).Where(
                                                    x => x.es_eliminado == false
                                              ) on p.id_tipo_pregunta equals tp.id
                                           join ta in _context.Query<Modelo.cat_tipo_archivo>(true).Where(
                                                 x => x.es_eliminado == false
                                           ) on p.id_tipo_archivo equals ta.id into TipoArchivo
                                           from lf_ta in TipoArchivo.DefaultIfEmpty()

                                           join ca in _context.Query<Modelo.cat_categoria_extranet>(true)
                                             on p.id_categoria equals ca.id_categoria_extranet into Categoria
                                           from lf_ca in Categoria.DefaultIfEmpty()

                                           join sca in _context.Query<Modelo.cat_sub_categoria_extranet>(true)
                                            on p.id_sub_categoria equals sca.id_sub_categoria_extranet into SubCategoria
                                           from lf_sca in SubCategoria.DefaultIfEmpty()

                                           where p.es_eliminado == false
                                           && p.id_encuesta_seccion == en.id_encuesta_seccion

                                           select new PreguntasSeccionResponseList()
                                           {
                                               id_pregunta = p.id_pregunta,
                                               id_encuesta = p.id_encuesta,
                                               pregunta = p.pregunta,
                                               id_tipo_pregunta = p.id_tipo_pregunta,
                                               tipo_pregunta = tp.nombre,
                                               es_obligatorio = p.es_obligatorio,
                                               //orden = p.orden,
                                               id_categoria = p.id_categoria,
                                               id_sub_categoria = p.id_sub_categoria,
                                               categoria = lf_ca.nombre,
                                               sub_categoria = lf_sca.nombre,
                                               descripcion = p.descripcion,
                                               id_tipo_archivo = p.id_tipo_archivo,
                                               tipo_archivo = lf_ta.nombre,
                                               iden_imagen = p.iden_imagen,
                                               url_video = p.url_video,
                                               por_defecto = p.por_defecto,
                                               json_alternativas = p.json_alternativas,
                                               json_archivo_tipo_archivo = p.json_archivo_tipo_archivo,

                                               es_condicional = p.es_condicional,
                                               es_condicionada = p.es_condicionada,
                                               condicional = p.es_condicional == true ? "SI" : "NO",
                                               id_pregunta_condicional = p.id_pregunta_condicional,
                                               json_respuesta_condicional = p.json_respuesta_condicional,
                                               es_agregar_pregunta = p.es_agregar_pregunta,
                                               es_finaliza_encuesta = p.es_finaliza_encuesta,
                                               id_encuesta_seccion = p.id_encuesta_seccion,
                                               json_tipo_fecha = p.json_tipo_fecha,
                                               orden = p.orden
                                           }).OrderBy(x => x.orden).ToList()

                          }).OrderBy(x => x.orden).ToList();

            int ordenCount = 1;
            List<PreguntasResponseList> preguntas = new List<PreguntasResponseList>();
            foreach (var sec in config)
            {                
                foreach (var preg in sec.preguntas)
                {
                    PreguntasResponseList pregun = new PreguntasResponseList();
                    pregun.id_pregunta = preg.id_pregunta;
                    pregun.id_encuesta = preg.id_encuesta;
                    pregun.pregunta = preg.pregunta;
                    pregun.id_tipo_pregunta = preg.id_tipo_pregunta;
                    pregun.tipo_pregunta = preg.tipo_pregunta;
                    pregun.es_obligatorio = preg.es_obligatorio;
                    pregun.id_categoria = preg.id_categoria;
                    pregun.id_sub_categoria = preg.id_sub_categoria;
                    pregun.categoria = preg.sub_categoria;
                    pregun.sub_categoria = preg.sub_categoria;
                    pregun.descripcion = preg.descripcion;
                    pregun.id_tipo_archivo = preg.id_tipo_archivo;
                    pregun.tipo_archivo = preg.tipo_archivo;
                    pregun.iden_imagen = preg.iden_imagen;
                    pregun.url_video = preg.url_video;
                    pregun.por_defecto = preg.por_defecto;
                    pregun.json_alternativas = preg.json_alternativas;
                    pregun.json_archivo_tipo_archivo = preg.json_archivo_tipo_archivo;
                    pregun.es_condicional = preg.es_condicional;
                    pregun.es_condicionada = preg.es_condicionada;
                    pregun.condicional = preg.condicional;
                    pregun.id_pregunta_condicional = preg.id_pregunta_condicional;
                    pregun.json_respuesta_condicional = preg.json_respuesta_condicional;
                    pregun.es_agregar_pregunta = preg.es_agregar_pregunta;
                    pregun.es_finaliza_encuesta = preg.es_finaliza_encuesta;
                    pregun.id_encuesta_seccion = preg.id_encuesta_seccion;
                    pregun.json_tipo_fecha = preg.json_tipo_fecha;
                    pregun.orden = ordenCount;
                    
                    preguntas.Add(pregun);

                    ordenCount++;
                }
            }

            response = (from preg in preguntas
                       select new PreguntasResponseList
                       {
                           id_pregunta = preg.id_pregunta,
                           id_encuesta = preg.id_encuesta,
                           pregunta = preg.pregunta,
                           id_tipo_pregunta = preg.id_tipo_pregunta,
                           tipo_pregunta = preg.tipo_pregunta,
                           es_obligatorio = preg.es_obligatorio,
                           id_categoria = preg.id_categoria,
                           id_sub_categoria = preg.id_sub_categoria,
                           categoria = preg.sub_categoria,
                           sub_categoria = preg.sub_categoria,
                           descripcion = preg.descripcion,
                           id_tipo_archivo = preg.id_tipo_archivo,
                           tipo_archivo = preg.tipo_archivo,
                           iden_imagen = preg.iden_imagen,
                           url_video = preg.url_video,
                           por_defecto = preg.por_defecto,
                           json_alternativas = preg.json_alternativas,
                           json_archivo_tipo_archivo = preg.json_archivo_tipo_archivo,
                           es_condicional = preg.es_condicional,
                           es_condicionada = preg.es_condicionada,
                           condicional = preg.condicional,
                           id_pregunta_condicional = preg.id_pregunta_condicional,
                           json_respuesta_condicional = preg.json_respuesta_condicional,
                           es_agregar_pregunta = preg.es_agregar_pregunta,
                           es_finaliza_encuesta = preg.es_finaliza_encuesta,
                           id_encuesta_seccion = preg.id_encuesta_seccion,
                           json_tipo_fecha = preg.json_tipo_fecha,
                           orden = preg.orden
                }).OrderBy(o => o.orden).AsQueryable().PagedResponse(request);

            return response;
        }

        public PagedResponse<PreguntasResponseList> GetPreguntasSinSeccionByEncuesta(PreguntasRequestList request)
        {
            PagedResponse<PreguntasResponseList> config = new PagedResponse<PreguntasResponseList>();

            var encuesta = (from t in _context.Query<Modelo.dat_encuesta>()
                            where t.id_encuesta == request.id_encuesta
                            select new { id_tipo_encuesta = t.id_tipo_encuesta }).FirstOrDefault();

            if (encuesta.id_tipo_encuesta == (int)TIPO_ENCUESTA.intranet)
            {
                config = (from p in _context.Query<Modelo.dat_encuesta_pregunta>()
                          join tp in _context.Query<Modelo.cat_tipo_pregunta>().Where(
                                x => x.es_eliminado == false
                          ) on p.id_tipo_pregunta equals tp.id
                          join ta in _context.Query<Modelo.cat_tipo_archivo>().Where(
                                x => x.es_eliminado == false
                          ) on p.id_tipo_archivo equals ta.id into TipoArchivo
                          from lf_ta in TipoArchivo.DefaultIfEmpty()

                          join ca in _context.Query<Modelo.cat_categoria>()
                            on p.id_categoria equals ca.id_categoria into Categoria
                          from lf_ca in Categoria.DefaultIfEmpty()

                          join sca in _context.Query<Modelo.cat_sub_categoria>()
                           on p.id_sub_categoria equals sca.id_sub_categoria into SubCategoria
                          from lf_sca in SubCategoria.DefaultIfEmpty()

                          where p.id_encuesta == request.id_encuesta && p.es_eliminado == false
                          select new PreguntasResponseList
                          {
                              id_pregunta = p.id_pregunta,
                              id_encuesta = p.id_encuesta,
                              pregunta = p.pregunta,
                              id_tipo_pregunta = p.id_tipo_pregunta,
                              tipo_pregunta = tp.nombre,
                              es_obligatorio = p.es_obligatorio,
                              //orden = p.orden,
                              id_categoria = p.id_categoria,
                              id_sub_categoria = p.id_sub_categoria,
                              categoria = lf_ca.nombre,
                              sub_categoria = lf_sca.nombre,
                              descripcion = p.descripcion,
                              id_tipo_archivo = p.id_tipo_archivo,
                              tipo_archivo = lf_ta.nombre,
                              iden_imagen = p.iden_imagen,
                              url_video = p.url_video,
                              por_defecto = p.por_defecto,
                              json_alternativas = p.json_alternativas,
                              json_archivo_tipo_archivo = p.json_archivo_tipo_archivo,

                              es_condicional = p.es_condicional,
                              es_condicionada = p.es_condicionada,
                              id_pregunta_condicional = p.id_pregunta_condicional,
                              json_respuesta_condicional = p.json_respuesta_condicional,
                              es_agregar_pregunta = p.es_agregar_pregunta,
                              es_finaliza_encuesta = p.es_finaliza_encuesta,
                              orden = p.orden,
                              id_encuesta_seccion = p.id_encuesta_seccion,
                              json_tipo_fecha = p.json_tipo_fecha
                          }).OrderBy(x => x.orden).PagedResponse(request);
            }
            else if (encuesta.id_tipo_encuesta == (int)TIPO_ENCUESTA.extranet)
            {
                config = (from p in _context.Query<Modelo.dat_encuesta_pregunta>()
                          join tp in _context.Query<Modelo.cat_tipo_pregunta>().Where(
                                x => x.es_eliminado == false
                          ) on p.id_tipo_pregunta equals tp.id
                          join ta in _context.Query<Modelo.cat_tipo_archivo>().Where(
                                x => x.es_eliminado == false
                          ) on p.id_tipo_archivo equals ta.id into TipoArchivo
                          from lf_ta in TipoArchivo.DefaultIfEmpty()

                          join ca in _context.Query<Modelo.cat_categoria_extranet>()
                            on p.id_categoria equals ca.id_categoria_extranet into Categoria
                          from lf_ca in Categoria.DefaultIfEmpty()

                          join sca in _context.Query<Modelo.cat_sub_categoria_extranet>()
                           on p.id_sub_categoria equals sca.id_sub_categoria_extranet into SubCategoria
                          from lf_sca in SubCategoria.DefaultIfEmpty()

                          where p.id_encuesta == request.id_encuesta && p.es_eliminado == false
                          select new PreguntasResponseList
                          {
                              id_pregunta = p.id_pregunta,
                              id_encuesta = p.id_encuesta,
                              pregunta = p.pregunta,
                              id_tipo_pregunta = p.id_tipo_pregunta,
                              tipo_pregunta = tp.nombre,
                              es_obligatorio = p.es_obligatorio,
                              //orden = p.orden,
                              id_categoria = p.id_categoria,
                              id_sub_categoria = p.id_sub_categoria,
                              categoria = lf_ca.nombre,
                              sub_categoria = lf_sca.nombre,
                              descripcion = p.descripcion,
                              id_tipo_archivo = p.id_tipo_archivo,
                              tipo_archivo = lf_ta.nombre,
                              iden_imagen = p.iden_imagen,
                              url_video = p.url_video,
                              por_defecto = p.por_defecto,
                              json_alternativas = p.json_alternativas,
                              json_archivo_tipo_archivo = p.json_archivo_tipo_archivo,

                              es_condicional = p.es_condicional,
                              es_condicionada = p.es_condicionada,
                              id_pregunta_condicional = p.id_pregunta_condicional,
                              json_respuesta_condicional = p.json_respuesta_condicional,
                              es_agregar_pregunta = p.es_agregar_pregunta,
                              es_finaliza_encuesta = p.es_finaliza_encuesta,
                              orden = p.orden,
                              id_encuesta_seccion = p.id_encuesta_seccion,
                              json_tipo_fecha = p.json_tipo_fecha
                          }).OrderBy(x => x.orden).PagedResponse(request);
            }

            return config;
        }

        public List<PreguntaResponse> GetListarPreguntaByIdEncuesta(PagedIdenEncuesta request)
        {
            return _uow.GetListarPreguntaByIdEncuesta(request);
        }

        public List<EncuestadoPreguntaRespuestaResponse> GetListEncuestadoRespuestaPreguntaByIdEncuesta(PagedIdenEncuesta request)
        {
            return _uow.GetListEncuestadoRespuestaPreguntaByIdEncuesta(request);
        }

        public List<EncuestadoPreguntaRespuestaResponse> GetListEncuestadosByIdEncuesta(PagedIdenEncuesta request)
        {
            return _uow.GetListEncuestadosByIdEncuesta(request);
        }

        public List<EncuestadoPreguntaRespuestaResponse> GetListReporteExcel(PagedIdenEncuesta request)
        {
            return _uow.GetListReporteExcel(request);
        }
        public List<EncuestaAvanceResponseList> GetListAvanceByIdEncuesta(PagedIdenEncuesta request)
        {
            return _uow.GetListAvanceByIdEncuesta(request);
        }
        public List<EncuestaResultadosResponseList> GetListResultadosByIdEncuesta(PagedIdenEncuesta request)
        {
            return _uow.GetListResultadosByIdEncuesta(request);
        }
        #endregion
    }
}
