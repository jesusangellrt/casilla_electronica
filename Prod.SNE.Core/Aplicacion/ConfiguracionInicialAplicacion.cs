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
    public class ConfiguracionInicialAplicacion : IConfiguracionInicialAplicacion
    {
        private IContext _context;
        private IUnitOfWork _uow;
        private readonly ConfiguracionInicialValidacion _ConfiguracionInicialValidacion;
        private readonly ILogger<ConfiguracionInicialValidacion> _logger;
        public ConfiguracionInicialAplicacion(IUnitOfWork unitOfWork, ConfiguracionInicialValidacion _ConfiguracionInicialValidacion, ILogger<ConfiguracionInicialValidacion> logger)
        {
            _uow = unitOfWork;
            _context = _uow.Context;
            this._ConfiguracionInicialValidacion = _ConfiguracionInicialValidacion;
            _logger = logger;
        }

        public ConfiguracionInicialResponse getActualConfiguracion(int id_tipo_encuesta)
        {
            var config = (from ci in _context.Query<Modelo.cat_configuracion_inicial>()
                          join en in _context.Query<Modelo.cat_tipo_archivo>().Where(x => x.es_eliminado==false) on ci.id_tipo_archivo equals en.id
                          where ci.es_eliminado == false && ci.id_tipo_encuesta == id_tipo_encuesta
                          select new ConfiguracionInicialResponse()
                          {
                              id_configuracion = ci.id_configuracion,
                              texto_bienvenida = ci.texto_bienvenida,
                              iden_audio_fondo = ci.iden_audio_fondo,
                              id_tipo_archivo = ci.id_tipo_archivo,
                              tipo_archivo_name = en.nombre,
                              url_video = ci.url_video,
                              iden_imagen = ci.iden_imagen,
                              es_eliminado = ci.es_eliminado
                          }).ToList();
            return config.Count > 0 ? config[0] : new ConfiguracionInicialResponse();
        }

        public StatusResponse SaveUpdateConfiguracion(ConfiguracionInicialSaveUpdateRequest request)
        {
            var sr = new StatusResponse { Value = 0 };
            var _errores = _ConfiguracionInicialValidacion.ValidarRegistro(request);
            if (_errores.Any())
            {
                sr.Success = false;
                sr.Messages = _errores;
                return sr;
            }

            try
            {
                if (request.id_configuracion > 0)
                {
                    var valid = _context.Query<Modelo.cat_configuracion_inicial>(false).FirstOrDefault(x => x.id_configuracion == request.id_configuracion);
                    if (valid != null)
                    {
                        valid.id_tipo_encuesta = request.tipo_encuesta;
                        valid.texto_bienvenida = request.texto_bienvenida;
                        valid.iden_audio_fondo = request.iden_audio_fondo;
                        valid.id_tipo_archivo = request.id_tipo_archivo;
                        valid.url_video = request.url_video;
                        valid.iden_imagen = request.iden_imagen;
                        valid.es_eliminado = request.es_eliminado;
                        valid.usuario_modificacion = request.user_name;
                        valid.fecha_modificacion = DateTime.Now;
                        valid.ip_modificacion = request.ip;
                        _context.Update(valid);
                        _uow.Save();
                        sr.Success = true;
                        sr.Messages.Add("El registro se guardó correctamente");
                    }
                    else
                    {
                        sr.Success = false;
                        sr.Messages.Add("El registro a editar no éxiste");
                    }
                }
                else
                {
                    var entity = new Modelo.cat_configuracion_inicial()
                    {
                        id_tipo_encuesta = request.tipo_encuesta,
                        texto_bienvenida = request.texto_bienvenida,
                        iden_audio_fondo = request.iden_audio_fondo,
                        id_tipo_archivo = request.id_tipo_archivo,
                        url_video = request.url_video,
                        iden_imagen = request.iden_imagen,
                        es_eliminado = false,
                        fecha_creacion = DateTime.Now,
                        usuario_creacion = request.user_name,
                        ip_creacion = request.ip
                    };
                    _context.Add(entity);
                    _uow.Save();
                    sr.Success = true;
                    sr.Messages.Add("El registro se guardó correctamente");
                }
            }
            catch (Exception ex)
            {
                this._logger.LogError(ex, "GuardarActualizar/Configuracion");

                sr.Success = false;
                sr.Messages.Add("Se han detectado problemas con el guardado de datos de la configuración de la plataforma.");
                sr.Value = ex.Message;
            }

            return sr;

        }
    }
}
