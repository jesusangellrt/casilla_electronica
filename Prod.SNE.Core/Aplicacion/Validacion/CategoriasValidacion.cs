using Prod.SNE.Core.Datos;
using Prod.SNE.Entidades;
using Release.Helper;
using Release.Helper.Data.ICore;
using System.Collections.Generic;
using System.Linq;
using Modelo = Prod.SNE.Datos.Modelo;

namespace Prod.SNE.Core.Aplicacion.Validacion
{
    public class CategoriasValidacion: ValidacionGenerica
    {
        private IContext _context;
        private IUnitOfWork _uow;

        public CategoriasValidacion(IUnitOfWork unitOfWork)
        {
            _uow = unitOfWork;
            _context = _uow.Context;
        }

        public List<string> ValidarRegistro(CategoriasResponseRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.nombre))
            {
                Msg.Add("El nombre de la categoría es requerido");
            }
            if (request.id_categoria!=0 && request.id_categoria!=null)
            {
                var existe = _context.Query<Modelo.cat_categoria>().Any(x => x.nombre== request.nombre && x.id_categoria!=request.id_categoria);
                if (existe)
                {
                    Msg.Add("Ya existe una categoria con el mismo nombre");
                }
            }
            else
            {
                if (string.IsNullOrWhiteSpace(request.username))
                {
                    Msg.Add("El nombre del usuario requerido");
                }

            }
            if (request.array_sub_categorias.Count > 0)
            {
                var existen_nulos = request.array_sub_categorias.Find(x => string.IsNullOrWhiteSpace(x.nombre) == true);
                if (existen_nulos != null)
                {
                    Msg.Add("El nombre de la sub categoría es requerido");
                }
                else
                {
                    var response = (from c in request.array_sub_categorias
                                    select new
                                    {
                                        nombre = c.nombre,
                                        conteo = (from xx in request.array_sub_categorias
                                                  where xx.nombre == c.nombre && xx.es_eliminado==false
                                                  select xx.id_sub_categoria).Count()
                                    }).Where(x => x.conteo > 1).ToList();
                    if (response.Count > 0)
                    {
                        Msg.Add("Existen nombre repetidos en la lista de sub categorías");
                    }
                }
            }
            return Msg;
        }

        public List<string> ValidarRegistroExtranet(CategoriasExtranetResponseRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.nombre))
            {
                Msg.Add("El nombre de la categoría es requerido");
            }
            if (request.id_categoria_extranet != 0 && request.id_categoria_extranet != null)
            {
                var existe = _context.Query<Modelo.cat_categoria>().Any(x => x.nombre == request.nombre && x.id_categoria != request.id_categoria_extranet);
                if (existe)
                {
                    Msg.Add("Ya existe una categoria con el mismo nombre");
                }
            }
            else
            {
                if (string.IsNullOrWhiteSpace(request.username))
                {
                    Msg.Add("El nombre del usuario requerido");
                }

            }
            if (request.array_sub_categorias_extranet.Count > 0)
            {
                var existen_nulos = request.array_sub_categorias_extranet.Find(x => string.IsNullOrWhiteSpace(x.nombre) == true);
                if (existen_nulos != null)
                {
                    Msg.Add("El nombre de la sub categoría es requerido");
                }
                else
                {
                    var response = (from c in request.array_sub_categorias_extranet
                                    select new
                                    {
                                        nombre = c.nombre,
                                        conteo = (from xx in request.array_sub_categorias_extranet
                                                  where xx.nombre == c.nombre && xx.es_eliminado == false
                                                  select xx.id_sub_categoria_extranet).Count()
                                    }).Where(x => x.conteo > 1).ToList();
                    if (response.Count > 0)
                    {
                        Msg.Add("Existen nombre repetidos en la lista de sub categorías");
                    }
                }
            }
            return Msg;
        }
    }
}
