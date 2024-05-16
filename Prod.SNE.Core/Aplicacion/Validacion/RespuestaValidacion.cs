using Prod.SNE.Core.Datos;
using Prod.SNE.Entidades;
using Release.Helper;
using Release.Helper.Data.ICore;
using System.Collections.Generic;
using System.Linq;
using Modelo = Prod.SNE.Datos.Modelo;

namespace Prod.SNE.Core.Aplicacion.Validacion
{
    public class RespuestaValidacion : ValidacionGenerica
    {
        private IContext _context;
        private IUnitOfWork _uow;

        public RespuestaValidacion(IUnitOfWork unitOfWork)
        {
            _uow = unitOfWork;
            _context = _uow.Context;
        }

        public List<string> ValidarRegistroNOAnon(UpdateStatusRespuestaRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.user_name))
            {
                Msg.Add("Es necesario indicar le nombre de usuario");
            }
            if (string.IsNullOrWhiteSpace(request.id_estado) || (request.id_estado!="0" && request.id_estado != "1" && request.id_estado != "2"))
            {
                Msg.Add("Estado es un valor requerido entre 0, 1 y 2");
            }

            if (string.IsNullOrWhiteSpace(request.sexo))
            {
                Msg.Add("El Sexo del trabajador es un valor requerido");
            }
            if (request.edad==null || request.edad==0)
            {
                Msg.Add("La edad del trabajador es un valor requerido");
            }
            
            var existe = _context.Query<Modelo.dat_encuesta_pregunta>().Where(x => x.id_pregunta == request.id_pregunta).FirstOrDefault();
            if (existe==null || existe.pregunta==null)
            {
                Msg.Add("El id de pregunta ingresado no existe.");
            }

            return Msg;
        }

        public List<string> ValidarRegistroAnonimo(SaveRespuestaAnonimaRequest request)
        {
            var trabajador = (from t in _context.Query<Modelo.vw_trabajador>()
                              where t.DNI == request.dni_trabajador && t.ESTADO == "ACTIVO"
                              select new { id_trabajador = t.CODIGO_TRABAJADOR, id_dependendia = t.CODIGO_DEPENDENCIA, id_regimen = t.ID_REGIMEN }).FirstOrDefault();

            if (string.IsNullOrWhiteSpace(request.dni_trabajador))
            {
                Msg.Add("El dni es obligatorio");
            }
            else
            {
                if (trabajador == null || trabajador.id_trabajador == null)
                {
                    Msg.Add("No existe ningunt rabajador registrado para el DNI '" + request.dni_trabajador + "'");
                }
            }
          


            if (string.IsNullOrWhiteSpace(request.id_estado) || (request.id_estado != "0" && request.id_estado != "1" && request.id_estado != "2"))
            {
                Msg.Add("Estado es un valor requerido entre 1 y 2");
            }

            if (string.IsNullOrWhiteSpace(request.sexo))
            {
                Msg.Add("El Sexo del trabajador es un valor requerido");
            }
            if (request.edad == null || request.edad == 0)
            {
                Msg.Add("La edad del trabajador es un valor requerido");
            }

            if (request.respuestas.Count == 0)
            {
                Msg.Add("las respuestas es una lista de valores requeridas");
            }
            else
            {
                var _blancos = request.respuestas.FindAll(x => string.IsNullOrWhiteSpace(x.json_rpta));
                if (_blancos.Count > 0)
                {
                    Msg.Add("No se admiten respuestas con sun el valor de 'json_rpta'");
                }
            }
            return Msg;
        }


        public List<string> ValidarRegistroNOAnonAdministrado(UpdateStatusRespuestaRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.id_estado) || (request.id_estado != "0" && request.id_estado != "1" && request.id_estado != "2"))
            {
                Msg.Add("Estado es un valor requerido entre 0, 1 y 2");
            }            

            var existe = _context.Query<Modelo.dat_encuesta_pregunta>().Where(x => x.id_pregunta == request.id_pregunta).FirstOrDefault();
            if (existe == null || existe.pregunta == null)
            {
                Msg.Add("El id de pregunta ingresado no existe.");
            }

            return Msg;
        }
    }
}
