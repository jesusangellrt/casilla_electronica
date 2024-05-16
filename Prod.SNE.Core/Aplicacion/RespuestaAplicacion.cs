using Microsoft.Extensions.Logging;
using Prod.SNE.Core.Aplicacion.Interfaces;
using Prod.SNE.Core.Aplicacion.Validacion;
using Prod.SNE.Core.Datos;
using Prod.SNE.Entidades;
using Release.Helper;
using Release.Helper.Data.ICore;
using System;
using System.Collections.Generic;
using System.Linq;
using Modelo = Prod.SNE.Datos.Modelo;

namespace Prod.SNE.Core.Aplicacion
{
    public class RespuestaAplicacion: IRespuestaAplicacion
    {
        private IContext _context;
        private IUnitOfWork _uow;
        private readonly RespuestaValidacion _RespuestaValidacion;
        private readonly ILogger<RespuestaAplicacion> _logger;
        public RespuestaAplicacion(IUnitOfWork unitOfWork, RespuestaValidacion _RespuestaValidacion, ILogger<RespuestaAplicacion> logger)
        {
            _uow = unitOfWork;
            _context = _uow.Context;
            this._RespuestaValidacion = _RespuestaValidacion;
            _logger = logger;
        }

        public StatusResponse GetPreguntaActualEncuesta(StatusRespuestaRequest request)
        {
            return _uow.GetPreguntaActualEncuesta(request);
        }

        public StatusResponse UpdatePreguntaActualEncuesta(UpdateStatusRespuestaRequest request)
        {
            var sr = new StatusResponse { Value = 0 };
            sr.Success = false;
            try
            {
                var _errores = _RespuestaValidacion.ValidarRegistroNOAnon(request);
                if (_errores.Any())
                {
                    sr.Messages = _errores;
                    return sr;
                }
                return _uow.UpdatePreguntaActualEncuesta(request);
            }
            catch (Exception ex)
            {
                this._logger.LogError(ex, "Actualizar/PreguntaEncuesta");

                sr.Value = ex;
                sr.Success = false;
                sr.Messages.Add(ex.Message);
                return sr;
            }
            
        }

        public List<RespuestasIngresadasResponse> GetRespuestasByEncuestaAndEncuestado(StatusRespuestaRequest request)
        {
            List<RespuestasIngresadasResponse> response = new List<RespuestasIngresadasResponse>();
            if (request.id_tipo_encuesta == (int)TIPO_ENCUESTA.intranet)
            {
                var trabajador = (from t in _context.Query<Modelo.vw_trabajador>()
                                  where t.DNI == request.dni_trabajador
                                  select new { id_trabajador = t.CODIGO_TRABAJADOR }).FirstOrDefault();
                var respuesta = (from r in _context.Query<Modelo.dat_respuesta>()
                                 where r.id_encuesta == request.id_encuesta && r.id_trabajador == trabajador.id_trabajador
                                 && r.es_eliminado == false
                                 select new { id_respuesta = r.id_respuesta }).FirstOrDefault();

                response = (from rp in _context.Query<Modelo.dat_respuesta_pregunta>()
                              where rp.id_respuesta == respuesta.id_respuesta
                              select new RespuestasIngresadasResponse
                              {
                                  id_respuesta_pregunta = rp.id_respuesta_pregunta,
                                  id_respuesta = rp.id_respuesta,
                                  id_pregunta = rp.id_pregunta,
                                  json_respuesta = rp.json_respuestas
                              }).ToList();
            }
            else if (request.id_tipo_encuesta == (int)TIPO_ENCUESTA.extranet)
            {
                var respuesta = (from r in _context.Query<Modelo.dat_respuesta>()
                                 where r.id_encuesta == request.id_encuesta && r.es_eliminado == false
                                 && r.ruc_administrado == request.dni_trabajador
                                 select new { id_respuesta = r.id_respuesta }).FirstOrDefault();

                response = (from rp in _context.Query<Modelo.dat_respuesta_pregunta>()
                            where rp.id_respuesta == respuesta.id_respuesta
                            select new RespuestasIngresadasResponse
                            {
                                id_respuesta_pregunta = rp.id_respuesta_pregunta,
                                id_respuesta = rp.id_respuesta,
                                id_pregunta = rp.id_pregunta,
                                json_respuesta = rp.json_respuestas
                            }).ToList();
            }
            
            return response;
        }
        public List<BasicGroupedSelectResponse> GetDesplegableInstitucional(DesplegableInstitucionalRequest request) {
            if (request.id_tabla == 1)
            { 
                
                var lst = (from d1 in _context.Query<Modelo.vw_dependencia>()
                           where d1.CODDEP_PRINCIPAL == 428 && d1.CONDICION=="ACTIVO" 
                           select new BasicGroupedSelectResponse
                            {
                                id = d1.CODIGO_DEPENDENCIA,
                                nombre = d1.DEPENDENCIA,
                                CODDEP_RESPONSABLE = d1.CODDEP_RESPONSABLE,
                                ES_DEPGENERAL = d1.ES_DEPGENERAL,
                                ID_TIPO_DEPENDENCIA=d1.ID_TIPO_DEPENDENCIA
                           }).ToList();
                return lst;
            }
            else { 
                var lst = (from r in _context.Query<Modelo.vw_regimen>()
                           select new BasicGroupedSelectResponse
                           { 
                               id=r.ID_REGIMEN,
                               nombre=r.DESCRIPCION
                           }).ToList();
                return lst;
            }
        }

        public StatusResponse SaveAndFinishEncuestaAnonima(SaveRespuestaAnonimaRequest request) {
            var sr = new StatusResponse { Value = 0 };
            var _errores = _RespuestaValidacion.ValidarRegistroAnonimo(request);
            if (_errores.Any())
            {
                sr.Success = false;
                sr.Messages = _errores;
                return sr;
            }

            var trabajador = (from t in _context.Query<Modelo.vw_trabajador>()
                              where t.DNI == request.dni_trabajador && t.ESTADO == "ACTIVO"
                              select new { id_trabajador = t.CODIGO_TRABAJADOR, id_dependendia = t.CODIGO_DEPENDENCIA, id_regimen = t.ID_REGIMEN }).FirstOrDefault();
            try
            {
                var today = DateTime.Now;
                var respuesta = new Modelo.dat_respuesta()
                {
                    id_encuesta = request.id_encuesta,
                    id_trabajador = null,
                    id_dependendia = trabajador.id_dependendia,
                    id_regimen = trabajador.id_regimen,
                    edad = request.edad,
                    id_sexo = request.sexo == "M" ? (int)SEXO_PERSONA.masculino : (int)SEXO_PERSONA.femenino,
                    nro_pregunta_actual = request.nro_pregunta,
                    id_estado = (int)ESTADO_RESPUESTA.finalizado,
                    es_eliminado = false,
                    fecha_creacion = today,
                    usuario_creacion = "system",
                    fecha_modificacion = today,
                    usuario_modificacion= "system"
                };
                _context.Add(respuesta);
                _uow.Save();
                var id_resp = respuesta.id_respuesta;

                if (id_resp > 0)
                {
                    sr.Messages.Add("Resultado enviados con éxito");
                    sr.Success = true;
                    sr.Value = today;
                    foreach (var rpta in request.respuestas)
                    {
                        var rp = new Modelo.dat_respuesta_pregunta()
                        {
                            id_respuesta = id_resp,
                            id_pregunta = rpta.id_pregunta,
                            json_respuestas = rpta.json_rpta,
                            fecha_creacion = today,
                            usuario_creacion = "system",
                            fecha_modificacion = today,
                            usuario_modificacion="system"
                        };
                        _context.Add(rp);
                        _uow.Save();
                    }

                    var _valid_relacion = _context.Query<Modelo.dat_encuesta_encuestado>(true).FirstOrDefault(x => x.id_encuesta == request.id_encuesta && x.id_trabajador == trabajador.id_trabajador);
                    if (_valid_relacion != null)
                    {
                        _valid_relacion.id_estado = 2;
                        _valid_relacion.resuelto = true;
                        _valid_relacion.fecha_resuelto = today;
                        _context.Update(_valid_relacion);
                        _uow.Save();
                        sr.Messages.Add("Relación encuesta y encustado actualizada con éxito");
                    }
                    //cat_estado_respuestai
                    else
                    {
                        var _relacion = new Modelo.dat_encuesta_encuestado()
                        {
                            id_encuesta = request.id_encuesta,
                            id_trabajador = trabajador.id_trabajador,
                            id_dependendia = trabajador.id_dependendia,
                            id_regimen = trabajador.id_regimen,
                            id_estado = 2,
                            es_eliminado = false,
                            resuelto = true,
                            fecha_creacion = today,
                            usuario_creacion = request.user_name,
                            fecha_modificacion=today,
                            usuario_modificacion = "system",
                            dni_trabajador = request.dni_trabajador,
                            fecha_resuelto = today
                        };
                        _context.Add(_relacion);
                        _uow.Save();
                        sr.Messages.Add("Relación encuesta y encustado actualizada con éxito");
                    }

                }
                else
                {
                    sr.Success = false;
                    sr.Value = null;
                    sr.Messages.Add("No se pudo registrar en la base de datos");
                }
            }
            catch (Exception ex)
            {
                this._logger.LogError(ex, "Guardar/Respuesta");

                if (trabajador ==null || trabajador.id_trabajador == null)
                {
                    sr.Messages.Add("No se pudo registrar en la base de datos, se encontró un problema relacionado a data sencible.");
                }
                else
                {
                    sr.Messages.Add("No se pudo registrar en la base de datos, se encontró un problema relacionado a los datos");
                }

                sr.Value = ex.Data;
                sr.Success = false;
                
            }
                  
            return sr;
        }

        public StatusResponse GetPreguntaActualEncuestaExtranet(StatusRespuestaRequest request)
        {
            return _uow.GetPreguntaActualEncuestaExtranet(request);
        }

        public StatusResponse UpdatePreguntaActualEncuestaAdministrado(UpdateStatusRespuestaRequest request)
        {
            var sr = new StatusResponse { Value = 0 };
            sr.Success = false;
            try
            {
                var _errores = _RespuestaValidacion.ValidarRegistroNOAnonAdministrado(request);
                if (_errores.Any())
                {
                    sr.Messages = _errores;
                    return sr;
                }
                return _uow.UpdatePreguntaActualEncuestaAdministrado(request);
            }
            catch (Exception ex)
            {
                this._logger.LogError(ex, "Actualizar/PreguntaEncuesta");

                sr.Value = ex;
                sr.Success = false;
                sr.Messages.Add(ex.Message);
                return sr;
            }

        }
    }
}
