using Prod.SNE.Core.Aplicacion.Interfaces;
using Prod.SNE.Core.Datos;
using Prod.SNE.Entidades;
using Release.Helper.Data.ICore;
using System.Collections.Generic;
using System.Linq;
using Modelo = Prod.SNE.Datos.Modelo;

namespace Prod.SNE.Core.Aplicacion
{
    class SisEnumeradoAplicacion: ISisEnumeradoAplicacion
    {
        private IContext _context;
        private IUnitOfWork _uow;

        public SisEnumeradoAplicacion(IUnitOfWork unitOfWork)
        {
            _uow = unitOfWork;
            _context = _uow.Context;
        }

        public List<SisEnumeradoResponse> getEnumeradoByTipoEnumerado(SisTipoEnumeradoRequest req)
        {
            if (req.id_tipo_enumerado == (int)SIS_TIPO_ENUMERADO.tipo_archivo) {
                return (from en in _context.Query<Modelo.cat_tipo_archivo>()
                        select new SisEnumeradoResponse()
                        {
                            id_tipo_enumerado = req.id_tipo_enumerado,
                            id_enumerado = en.id,
                            nombre = en.nombre,
                            es_eliminado = en.es_eliminado
                        }).ToList();
            }else if (req.id_tipo_enumerado == (int)SIS_TIPO_ENUMERADO.estado_encuesta) {
                return (from en in _context.Query<Modelo.cat_estado_encuesta>()
                        select new SisEnumeradoResponse()
                        {
                            id_tipo_enumerado = req.id_tipo_enumerado,
                            id_enumerado = en.id,
                            nombre = en.nombre,
                            es_eliminado = en.es_eliminado
                        }).ToList();
            }
            else if (req.id_tipo_enumerado == (int)SIS_TIPO_ENUMERADO.tipo_pregunta)
            {
                return (from en in _context.Query<Modelo.cat_tipo_pregunta>()
                        select new SisEnumeradoResponse()
                        {
                            id_tipo_enumerado = req.id_tipo_enumerado,
                            id_enumerado = en.id,
                            nombre = en.nombre,
                            es_eliminado = en.es_eliminado
                        }).ToList();
            }
            else if (req.id_tipo_enumerado == (int)SIS_TIPO_ENUMERADO.estado_respuesta)
            {
                return (from en in _context.Query<Modelo.cat_estado_respuesta>()
                        select new SisEnumeradoResponse()
                        {
                            id_tipo_enumerado = req.id_tipo_enumerado,
                            id_enumerado = en.id,
                            nombre = en.nombre,
                            es_eliminado = en.es_eliminado
                        }).ToList();
            }
            else if (req.id_tipo_enumerado == (int)SIS_TIPO_ENUMERADO.tipo_maestro_institucional)
            {
                return (from en in _context.Query<Modelo.cat_tipo_maestro_institucional>()
                        select new SisEnumeradoResponse()
                        {
                            id_tipo_enumerado = req.id_tipo_enumerado,
                            id_enumerado = en.id,
                            nombre = en.nombre,
                            es_eliminado = en.es_eliminado
                        }).ToList();
            }
            else if (req.id_tipo_enumerado == (int)SIS_TIPO_ENUMERADO.archivo_tipo_archivo)
            {
                return (from en in _context.Query<Modelo.cat_archivo_tipo_archivo>()
                        select new SisEnumeradoResponse()
                        {
                            id_tipo_enumerado = req.id_tipo_enumerado,
                            id_enumerado = en.id,
                            nombre = en.nombre,
                            es_eliminado = en.es_eliminado
                        }).ToList();
            }
            else if (req.id_tipo_enumerado == (int)SIS_TIPO_ENUMERADO.tipo_fecha)
            {
                return (from en in _context.Query<Modelo.cat_tipo_fecha>()
                        select new SisEnumeradoResponse()
                        {
                            id_tipo_enumerado = req.id_tipo_enumerado,
                            id_enumerado = en.id,
                            nombre = en.nombre,
                            es_eliminado = en.es_eliminado
                        }).ToList();
            }
            else if (req.id_tipo_enumerado == (int)SIS_TIPO_ENUMERADO.tipo_dirigido)
            {
                return (from en in _context.Query<Modelo.cat_dirigido_notificacion>()
                        select new SisEnumeradoResponse()
                        {
                            id_tipo_enumerado = req.id_tipo_enumerado,
                            id_enumerado = en.id,
                            nombre = en.nombre,
                            es_eliminado = en.es_eliminado
                        }).ToList();
            }
            else
            {
                return (from en in _context.Query<Modelo.cat_sexos>()
                        select new SisEnumeradoResponse()
                        {
                            id_tipo_enumerado = req.id_tipo_enumerado,
                            id_enumerado = en.id,
                            nombre = en.nombre,
                            es_eliminado = en.es_eliminado
                        }).ToList();
            }

        }
    }
}
