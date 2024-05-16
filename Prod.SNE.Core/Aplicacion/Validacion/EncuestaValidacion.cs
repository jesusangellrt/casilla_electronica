using Prod.SNE.Core.Datos;
using Prod.SNE.Entidades;
using Release.Helper;
using Release.Helper.Data.ICore;
using System.Collections.Generic;
using System.Linq;
using Modelo = Prod.SNE.Datos.Modelo;

namespace Prod.SNE.Core.Aplicacion.Validacion
{
    public class EncuestaValidacion : ValidacionGenerica
    {
        private IContext _context;
        private IUnitOfWork _uow;
        public EncuestaValidacion(IUnitOfWork unitOfWork)
        {
            _uow = unitOfWork;
            _context = _uow.Context;
        }

        public List<string> ValidarRegistroEdicionEncuesta(EncuestaSaveUpdateRequest request)
        {
            //TODO: Completar validaciones
            if (string.IsNullOrWhiteSpace(request.encuesta.titulo))
            {
                Msg.Add("Titulo es requerido");
            }            
            if (string.IsNullOrWhiteSpace(request.encuesta.objetivo))
            {
                Msg.Add("Objetivo es requerido");
            }
            if (string.IsNullOrWhiteSpace(request.encuesta.descripcion))
            {
                Msg.Add("Descripción es requerido");
            }
            if (request.encuesta.fecha_inicio == null)
            {
                Msg.Add("Fecha y hora inicio es requerido");
            }
            if (request.encuesta.fecha_fin == null)
            {
                Msg.Add("Fecha y hora fin es requerido");
            }

            if (request.encuesta.tiempo_estimado.ToString() == null || request.encuesta.tiempo_estimado == 0)
            {
                Msg.Add("Tiempo estimado es obligatorio y mayor a cero");
            }

            if (string.IsNullOrWhiteSpace(request.bienvenida.indicaciones))
            {
                Msg.Add("Las indicaciones son ogligatorias.");
            }
            if (request.bienvenida.id_tipo_archivo != null && request.bienvenida.id_tipo_archivo != 0)
            {
                if (request.bienvenida.id_tipo_archivo == (int)TIPO_ARCHIVO.imagen
                    && string.IsNullOrWhiteSpace(request.bienvenida.iden_imagen))
                {
                    Msg.Add("El archivo de imagen de bienvenida es obligatorio");
                }
                if (request.bienvenida.id_tipo_archivo == (int)TIPO_ARCHIVO.video
                    && string.IsNullOrWhiteSpace(request.bienvenida.url_video))
                {
                    Msg.Add("La url de video de bienvenida es obligatorio");
                }
            }

            if (string.IsNullOrWhiteSpace(request.agradecimiento.mensaje_agradecimiento))
            {
                Msg.Add("Mensaje de agradecimeinto es obligatorio.");
            }
            if (request.agradecimiento.id_tipo_archivo != null && request.agradecimiento.id_tipo_archivo != 0)
            {
                if (request.agradecimiento.id_tipo_archivo == (int)TIPO_ARCHIVO.imagen
                    && string.IsNullOrWhiteSpace(request.agradecimiento.iden_imagen))
                {
                    Msg.Add("El archivo de imagen de agradecimento es obligatorio");
                }
                if (request.agradecimiento.id_tipo_archivo == (int)TIPO_ARCHIVO.video
                    && string.IsNullOrWhiteSpace(request.agradecimiento.url_video))
                {
                    Msg.Add("La url de video de agradecimento es obligatorio");
                }
            }

            if (string.IsNullOrWhiteSpace(request.bienvenida.iden_terminos_condiciones) && request.tipo_encuesta == (int)TIPO_ENCUESTA.extranet)
            {
                Msg.Add("El archivo de términos y condiciones es obligatorio");
            }
            //BD
            var existe = _context.Query<Modelo.dat_encuesta>().Any(x => x.titulo==request.encuesta.titulo 
            && x.id_estado != (int)ESTADO_ENCUESTA.eliminado
            && x.es_eliminado==false
            && x.id_encuesta!= (request.encuesta.id_encuesta));
            if (existe)
            {
                Msg.Add("Ya existe una encuesta con el mismo nombre");
            }
            return Msg;
        }

        public List<string> ValidarRegistroEdicionPregunta(PreguntaSaveUpdateRequest request)
        {
            //TODO: Completar validaciones
            if (request == null)
            {
                Msg.Add("La petición no es valida");

            }
            else
            {
                if (string.IsNullOrWhiteSpace(request.pregunta))
                {
                    Msg.Add("Pregunta es requerida");
                }
                if ((request.id_categoria != null && request.id_categoria != 0) && (request.id_sub_categoria == null || request.id_sub_categoria == 0))
                {
                    Msg.Add("La subcategoría es requerida");
                }

                if (request.id_tipo_archivo != null && request.id_tipo_archivo != 0)
                {
                    if (request.id_tipo_archivo == (int)TIPO_ARCHIVO.imagen
                        && string.IsNullOrWhiteSpace(request.iden_imagen))
                    {
                        Msg.Add("El archivo de imagen es obligatorio");
                    }
                    if (request.id_tipo_archivo == (int)TIPO_ARCHIVO.video
                        && string.IsNullOrWhiteSpace(request.url_video))
                    {
                        Msg.Add("La url de video es obligatorio");
                    }
                }
                var _valid_e = _context.Query<Modelo.dat_encuesta>().Where(x =>
                               x.es_eliminado == false && x.id_encuesta == (int)request.id_encuesta).Count();
                if (_valid_e == 0)
                {
                    Msg.Add("El id de la encuesta no existe.");
                }
                else
                {
                    if ((bool)request.es_condicionada.GetValueOrDefault() && (bool)request.es_condicional.GetValueOrDefault())
                    {
                        Msg.Add("No puede ser condicional y condicionada a la vez.");
                    }
                    else
                    {
                        if ((bool)request.es_condicionada.GetValueOrDefault())
                        {
                            if (request.id_pregunta_condicional == null)
                            {
                                Msg.Add("Debe seleccionar una pregunta con flag de condicional");
                            }
                            else
                            {
                                var _valid = _context.Query<Modelo.dat_encuesta_pregunta>().Where(x =>
                                        x.es_eliminado == false && x.es_condicional == true && x.id_pregunta == (int)request.id_pregunta_condicional).Count();
                                if (_valid == 0)
                                {
                                    Msg.Add("Debe seleccionar una pregunta con flag de condicional");
                                }
                            }
                            if (request.json_respuesta_condicional == null)
                            {
                                Msg.Add("Debe ingresar una respuesta para la pregunta condicional");
                            }
                        }
                    }

                }
            }
            

           
            return Msg;
        }

        public List<string> ValidarSubidaResultados(EncuestaResultadosSaveRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.nro_informe))
            {
                Msg.Add("El número de informe es requerido");
            }
            if (string.IsNullOrWhiteSpace(request.iden_pdf_completo))
            {
                Msg.Add("El archivo del análisis completo de la encuesta es requerido");
            }
            if (string.IsNullOrWhiteSpace(request.iden_pdf_encuestado))
            {
                Msg.Add("El archivo del análisis por encuestado es requerido");
            }
            var valid = _context.Query<Modelo.dat_encuesta>(true).FirstOrDefault(x => x.id_encuesta == request.id_encuesta);
            if (valid == null)
            {
                Msg.Add("La encuesta que se quiere actualizar no éxista");
            }
            return Msg;
        }

        public List<string> ValidarRegistroEdicionSeccion(SeccionRequest request)
        {
            //TODO: Completar validaciones
            if (request == null)
            {
                Msg.Add("La petición no es valida");
            }
            else
            {
                if (string.IsNullOrWhiteSpace(request.seccion))
                {
                    Msg.Add("La sección es requerida");
                }
            }

            return Msg;
        }

        public List<string> ValidarRegistroEdicionNotificacion(NotificacionRequest request)
        {
            //TODO: Completar validaciones
            if (request == null)
            {
                Msg.Add("La petición no es valida");
            }
            else
            {
                if (string.IsNullOrWhiteSpace(request.titulo))
                {
                    Msg.Add("El título es requerida.");
                }
                if (string.IsNullOrWhiteSpace(request.asunto))
                {
                    Msg.Add("El asunto es requerida.");
                }
                if (string.IsNullOrWhiteSpace(request.dirigido))
                {
                    Msg.Add("Debe seleccionar al dirigido.");
                }
                if (string.IsNullOrWhiteSpace(request.mensaje))
                {
                    Msg.Add("El mensaje es requerida.");
                }
                if (request.fecha_notificacion== null)
                {
                    Msg.Add("La Fecha es requerido");
                }
            }

            return Msg;
        }
    }
}
