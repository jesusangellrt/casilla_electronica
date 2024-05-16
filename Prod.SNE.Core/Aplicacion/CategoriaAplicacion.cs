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
using System.Xml;
using Modelo = Prod.SNE.Datos.Modelo;

namespace Prod.SNE.Core.Aplicacion
{
    public class CategoriaAplicacion : ICategoriaAplicacion
    {
        private IContext _context;
        private IUnitOfWork _uow;
        private readonly CategoriasValidacion _CategoriasValidacion;
        private readonly ILogger<CategoriaAplicacion> _logger;
        public CategoriaAplicacion(IUnitOfWork unitOfWork, CategoriasValidacion _CategoriasValidacion, ILogger<CategoriaAplicacion> logger)
        {
            _uow = unitOfWork;
            _context = _uow.Context;
            this._CategoriasValidacion = _CategoriasValidacion;
            _logger = logger;
        }

        public List<CategoriaBasicItemResponse> GetCategoriaList(CategoriaNoneLisRequest req)
        {
            var config = (from c in _context.Query<Modelo.cat_categoria>()
                          select new CategoriaBasicItemResponse
                          {
                              id_categoria = c.id_categoria,
                              nombre = c.nombre,
                              es_eliminado = c.es_eliminado
                          }).ToList();
            return config;
        }

        public List<SubCategoriaBasicItemResponse> GetSubCategoriaList(CategoriaNoneLisRequest req)
        {
            var config = (from c in _context.Query<Modelo.cat_sub_categoria>()
                          select new SubCategoriaBasicItemResponse
                          {
                              id_sub_categoria=c.id_sub_categoria,
                              id_categoria = c.id_categoria,
                              nombre = c.nombre,
                              es_eliminado = c.es_eliminado
                          }).ToList();
            return config;
        }

        public PagedResponse<CategoriasResponseRequest> GetCategoriasMntList(CategoriaBasicRequest req)
        {
            var response = (from c in _context.Query<Modelo.cat_categoria>()
                          where (req.nombre==null || c.nombre==req.nombre)
                          && (req.es_eliminado==null || c.es_eliminado==(req.es_eliminado=="1"?true:false))                          select new CategoriasResponseRequest
                          {
                              id_categoria=c.id_categoria,
                              nombre=c.nombre,
                              es_eliminado=c.es_eliminado,
                              array_sub_categorias = (from sc in _context.Query<Modelo.cat_sub_categoria>(true)
                                                      where c.id_categoria == sc.id_categoria
                                                      select new SubCategoriasResponseRequest
                                                      {
                                                          id_sub_categoria = sc.id_sub_categoria,
                                                          id_categoria = sc.id_categoria,
                                                          nombre = sc.nombre,
                                                          es_eliminado = sc.es_eliminado
                                                      }).ToList()
                          }).PagedResponse(req);
            return response;
        }

        public StatusResponse SaveUpdateCategorias(CategoriasResponseRequest req)
        {
            var sr = new StatusResponse { Value = 0 };
            var _errores = _CategoriasValidacion.ValidarRegistro(req);
            if (_errores.Any())
            {
                sr.Success = false;
                sr.Messages = _errores;
                return sr;
            }
            else
            {
                try
                {
                    XmlDocument xml = new XmlDocument();
                    XmlDeclaration xmldecl = xml.CreateXmlDeclaration("1.0", "UTF-16", null); //usar utf16 para evitar problemas con vcaracteres especiales
                    xml.InsertBefore(xmldecl, xml.DocumentElement);
                    xml.AppendChild(xml.CreateElement("ROOT"));
                    int counter = 0;
                    foreach (var c in req.array_sub_categorias)
                    {
                        if (c.es_eliminado == false)
                        {
                            XmlElement xmlAltas = default(XmlElement);
                            xmlAltas = xml.CreateElement("SubCategoria");
                            xmlAltas.SetAttribute("id_sub_categoria", c.id_sub_categoria.ToString());
                            xmlAltas.SetAttribute("nombre", c.nombre.ToString());
                            xml.DocumentElement.AppendChild(xmlAltas);
                        }
       
                    }
                    string _xml = xml.OuterXml;
                    sr = _uow.SaveUpdateCategorias(_xml,req.id_categoria,req.nombre,req.username);
                }
                catch (Exception ex)
                {
                    this._logger.LogError(ex,"GuardarActualizar/Categoria");
                    sr.Success = false;
                    sr.Messages.Add(ex.Message);
                }
                          
                
                return sr;
            }
        }


        public StatusResponse EnableDisableCategoria(CategoriaEnableDisableRequest req)
        {
            var sr = new StatusResponse { Value = 0 };
            var today = DateTime.Now;
            sr.Success = true;

            if (req.name == "categoria")
            {
                var _valid = _context.Query<Modelo.cat_categoria>(true).FirstOrDefault(x => x.id_categoria == req.id);
                if (_valid != null)
                {
                    _valid.es_eliminado = req.future_status;
                    _valid.fecha_edicion = DateTime.Now;
                    _valid.usuario_edicion = req.user_name;
                    _context.Update(_valid);
                    _uow.Save();
                }
                sr.Messages.Add((req.future_status ? "Anulado" : "Activado") + " con éxito.");
            }
            else
            {
                var _valid = _context.Query<Modelo.cat_sub_categoria>(true).FirstOrDefault(x => x.id_sub_categoria == req.id);
                if (_valid != null)
                {
                    _valid.es_eliminado = req.future_status;
                    _valid.fecha_edicion = DateTime.Now;
                    _valid.usuario_edicion = req.user_name;
                    _context.Update(_valid);
                    _uow.Save();
                }
                sr.Messages.Add((req.future_status ? "Anulado" : "Activado") + " con éxito.");
            }
            
            return sr;
        }

        public PagedResponse<CategoriasExtranetResponseRequest> GetCategoriasExtranetMntList(CategoriaExtranetBasicRequest req)
        {
            var response = (from c in _context.Query<Modelo.cat_categoria_extranet>()
                            where (req.nombre == null || c.nombre == req.nombre)
                            && (req.es_eliminado == null || c.es_eliminado == (req.es_eliminado == "1" ? true : false))
                            select new CategoriasExtranetResponseRequest
                            {
                                id_categoria_extranet = c.id_categoria_extranet,
                                nombre = c.nombre,
                                es_eliminado = c.es_eliminado,
                                array_sub_categorias_extranet = (from sc in _context.Query<Modelo.cat_sub_categoria_extranet>(true)
                                                        where c.id_categoria_extranet == sc.id_categoria_extranet
                                                        select new SubCategoriasExtranetResponseRequest
                                                        {
                                                            id_sub_categoria_extranet = sc.id_sub_categoria_extranet,
                                                            id_categoria_extranet = sc.id_categoria_extranet,
                                                            nombre = sc.nombre,
                                                            es_eliminado = sc.es_eliminado
                                                        }).ToList()
                            }).PagedResponse(req);
            return response;
        }

        public StatusResponse EnableDisableCategoriaExtranet(CategoriaExtranetEnableDisableRequest req)
        {
            var sr = new StatusResponse { Value = 0 };
            var today = DateTime.Now;
            sr.Success = true;

            if (req.name == "categoria")
            {
                var _valid = _context.Query<Modelo.cat_categoria_extranet>(true).FirstOrDefault(x => x.id_categoria_extranet == req.id);
                if (_valid != null)
                {
                    _valid.es_eliminado = req.future_status;
                    _valid.fecha_edicion = DateTime.Now;
                    _valid.usuario_edicion = req.user_name;
                    _context.Update(_valid);
                    _uow.Save();
                }
                sr.Messages.Add((req.future_status ? "Anulado" : "Activado") + " con éxito.");
            }
            else
            {
                var _valid = _context.Query<Modelo.cat_sub_categoria_extranet>(true).FirstOrDefault(x => x.id_sub_categoria_extranet == req.id);
                if (_valid != null)
                {
                    _valid.es_eliminado = req.future_status;
                    _valid.fecha_edicion = DateTime.Now;
                    _valid.usuario_edicion = req.user_name;
                    _context.Update(_valid);
                    _uow.Save();
                }
                sr.Messages.Add((req.future_status ? "Anulado" : "Activado") + " con éxito.");
            }

            return sr;
        }

        public StatusResponse SaveUpdateCategoriasExtranet(CategoriasExtranetResponseRequest req)
        {
            var sr = new StatusResponse { Value = 0 };
            var _errores = _CategoriasValidacion.ValidarRegistroExtranet(req);
            if (_errores.Any())
            {
                sr.Success = false;
                sr.Messages = _errores;
                return sr;
            }
            else
            {
                try
                {
                    XmlDocument xml = new XmlDocument();
                    XmlDeclaration xmldecl = xml.CreateXmlDeclaration("1.0", "UTF-16", null); //usar utf16 para evitar problemas con vcaracteres especiales
                    xml.InsertBefore(xmldecl, xml.DocumentElement);
                    xml.AppendChild(xml.CreateElement("ROOT"));
                    int counter = 0;
                    foreach (var c in req.array_sub_categorias_extranet)
                    {
                        if (c.es_eliminado == false)
                        {
                            XmlElement xmlAltas = default(XmlElement);
                            xmlAltas = xml.CreateElement("SubCategoria");
                            xmlAltas.SetAttribute("id_sub_categoria_extranet", c.id_sub_categoria_extranet.ToString());
                            xmlAltas.SetAttribute("nombre", c.nombre.ToString());
                            xml.DocumentElement.AppendChild(xmlAltas);
                        }

                    }
                    string _xml = xml.OuterXml;
                    sr = _uow.SaveUpdateCategoriasExtranet(_xml, req.id_categoria_extranet, req.nombre, req.username);
                }
                catch (Exception ex)
                {
                    this._logger.LogError(ex, "GuardarActualizar/Categoria para extranet");
                    sr.Success = false;
                    sr.Messages.Add(ex.Message);
                }
                return sr;
            }
        }

        public List<CategoriaExtranetBasicItemResponse> GetCategoriaExtranetList(CategoriaNoneLisRequest req)
        {
            var config = (from c in _context.Query<Modelo.cat_categoria_extranet>()
                          select new CategoriaExtranetBasicItemResponse
                          {
                              id_categoria_extranet = c.id_categoria_extranet,
                              nombre = c.nombre,
                              es_eliminado = c.es_eliminado
                          }).ToList();
            return config;
        }

        public List<SubCategoriaExtranetBasicItemResponse> GetSubCategoriaExtranetList(CategoriaNoneLisRequest req)
        {
            var config = (from c in _context.Query<Modelo.cat_sub_categoria_extranet>()
                          select new SubCategoriaExtranetBasicItemResponse
                          {
                              id_sub_categoria_extranet = c.id_sub_categoria_extranet,
                              id_categoria_extranet = c.id_categoria_extranet,
                              nombre = c.nombre,
                              es_eliminado = c.es_eliminado
                          }).ToList();
            return config;
        }        
    }
}
