using MathNet.Numerics;
using Microsoft.AspNetCore.Mvc;
using Nancy;
using Nancy.Json;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using NPOI.HPSF;
using NPOI.HSSF.Record;
using NPOI.HSSF.UserModel;
using NPOI.HSSF.Util;
using NPOI.SS.Formula.Functions;
using NPOI.SS.UserModel;
using NPOI.XSSF.Streaming;
using NPOI.XSSF.UserModel;
using Org.BouncyCastle.Ocsp;
using Prod.SNE.Entidades;
using Prod.SNE.MVC.Configuracion;
using Prod.SNE.MVC.Configuracion.Proxys;
using Prod.SNE.ServiciosExternos;
using Prod.ServiciosExternos.MS;
using Release.Helper;
using SixLabors.ImageSharp.Processing;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Xml.Linq;
using static System.Net.Mime.MediaTypeNames;


namespace Prod.SNE.MVC.Controllers
{
    [Route("api/encuesta")]
    public class EncuestaController : CustomBaseController
    {
        private readonly EncuestaProxy _EncuestaProxy;
        private readonly ComunProxy _comunProxy;
        private readonly IExpedienteSitradocWS _IExpedienteSitradocWS;
        private readonly AppConfig appConfig;

        public EncuestaController(EncuestaProxy _EncuestaProxy, ComunProxy comunProxy, IExpedienteSitradocWS _IExpedienteSitradocWS, AppConfig appConfig)
        {
            this._EncuestaProxy = _EncuestaProxy;
            this._comunProxy = comunProxy;
            this._IExpedienteSitradocWS = _IExpedienteSitradocWS;
            this.appConfig = appConfig;
        }
        [HttpPost]
        [Route("GetDocumentoDataSITRADOC")]
        public IActionResult GetDocumentoDataSITRADOC([FromBody] BasicValRequest req)
        {
            var clase_doc_interno = _IExpedienteSitradocWS.ObtenerClaseDocumentoInterno();
            var clase_informe = clase_doc_interno.Data.Where(x => x.clase_documento == "INFORME").FirstOrDefault();
            var doc_indicativo = _IExpedienteSitradocWS.ObtenerDocumentoIndicativo(new ServiciosExternos.Sitradoc.DocumentoIndicativoFilter
            {
                numero_documento = req.valor,
                id_clase_documento = clase_informe.id_clase_documento
            });
            return _Response(doc_indicativo);
        }


        #region PARA CONFIGURACIONES
        [HttpPost]
        [Route("GetEncuestaWithDependenciaList")]
        public IActionResult GetEncuestaWithDependenciaList([FromBody] EncuestaRequestList req)
        {
            req.id_dependencia = this.GetUser().Usuario.IdDependencia;
            var result = _EncuestaProxy.GetEncuestaWithDependenciaList(req);
            return _Response(result);
        }

        [HttpPost]
        [Route("GetEncuestaWithAdministradosList")]
        public IActionResult GetEncuestaWithAdministradosList([FromBody] EncuestaRequestList req)
        {
            req.id_dependencia = this.GetUser().Usuario.IdDependencia;
            var result = _EncuestaProxy.GetEncuestaWithAdministradosList(req);
            return _Response(result);
        }

        [HttpPost]
        [Route("GetEncuestaDataByID")]
        public IActionResult GetEncuestaDataByID([FromBody] EncuestaIDENRequest req)
        {
            var result = _EncuestaProxy.GetEncuestaDataByID(req);
            return _Response(result);
        }

        [HttpPost]
        [Route("PublicarEncuesta")]
        public IActionResult PublicarEncuesta([FromBody] EncuestaIDENRequest req)
        {
            var result = _EncuestaProxy.PublicarEncuesta(req);
            return _Response(result);
        }

        [HttpPost]
        [Route("SaveUpdateEncuestaData")]
        public IActionResult SaveUpdateEncuestaData([FromBody] EncuestaSaveUpdateRequest req)
        {
            var user = this.GetUser().Usuario;
            req.ussername = user.UserName;
            req.encuesta.id_dependendia = user.IdDependencia;
            req.ip = this.getIP();
            var result = _EncuestaProxy.SaveUpdateEncuestaData(req);
            return _Response(result);
        }

        [HttpPost]
        [Route("GetPreguntasByEncuesta")]
        public IActionResult GetPreguntasByEncuesta([FromBody] PreguntasRequestList req)
        {
            var result = _EncuestaProxy.GetPreguntasByEncuesta(req);
            return _Response(result);
        }
        [HttpPost]
        [Route("GetPreguntasCondicionalesByEncuesta")]
        public IActionResult GetPreguntasCondicionalesByEncuesta([FromBody] PreguntaCondicionaldaRequestList req)
        {
            var result = _EncuestaProxy.GetPreguntasCondicionalesByEncuesta(req);
            return _Response(result);
        }
        [HttpPost]
        [Route("GetPaginadoRegistrado")]
        public IActionResult GetPaginadoRegistrado([FromBody] PaginadoPreguntasRequest req)
        {
           
            var user = this.GetUser().Usuario;
            req.dni_trabajador = req.id_tipo_encuesta == (int)TIPO_ENCUESTA.intranet ? user.NumeroDocumento : user.NumeroDocumento == user.RUC ? user.NumeroDocumento : user.RUC;

            var result = _EncuestaProxy.GetPaginadoRegistrado(req);
            return _Response(result);
        }

        [HttpPost]
        [Route("GetPreguntaByIdenPregunta")]
        public IActionResult GetPreguntaByIdenPregunta([FromBody] PreguntasIdenRequest request)
        {
            var o = _EncuestaProxy.GetPreguntaByIdenPregunta(request);
            return _Response(o);
        }



        [HttpPost]
        [Route("SaveUpdatePregunta")]
        public IActionResult SaveUpdatePregunta([FromBody] PreguntaSaveUpdateRequest req)
        {
            req.user_name = this.GetUser().Usuario.UserName;
            var result = _EncuestaProxy.SaveUpdatePregunta(req);
            return _Response(result);
        }

        [HttpPost]
        [Route("EnableDisable")]
        public IActionResult EnableDisable([FromBody] BasicDeleteRequest req)
        {
            req.user_name = this.GetUser().Usuario.UserName;
            var result = _EncuestaProxy.EnableDisable(req);
            return _Response(result);
        }


        [HttpPost]
        [Route("Prepublicar")]
        public IActionResult Prepublicar([FromBody] BasicDeleteRequest req)
        {
            req.user_name = this.GetUser().Usuario.UserName;
            var result = _EncuestaProxy.Prepublicar(req);
            return _Response(result);
        }




        [HttpPost]
        [Route("GetEncuestadosByFilterEncuesta")]
        public IActionResult GetEncuestadosByFilterEncuesta([FromBody] EncuestadosRequestList request)
        {
            var result = _EncuestaProxy.GetEncuestadosByFilterEncuesta(request);
            return _Response(result);
        }

        [HttpPost]
        [Route("GetEncuestadosByFilterEncuestaExtranet")]
        public IActionResult GetEncuestadosByFilterEncuestaExtranet([FromBody] EncuestadosRequestList request)
        {
            var result = _EncuestaProxy.GetEncuestadosByFilterEncuestaExtranet(request);
            return _Response(result);
        }

        [HttpPost]
        [Route("SaveEncuestaEncuestadosList")]
        public IActionResult SaveEncuestaEncuestadosList([FromBody] EncuestadosEncuestaSaveRequest request)
        {
            request.user_name = this.GetUser().Usuario.UserName;
            var result = _EncuestaProxy.SaveEncuestaEncuestadosList(request);
            return _Response(result);
        }

        [HttpPost]
        [Route("SaveEncuestadosExtranetList")]
        public IActionResult SaveEncuestadosExtranetList([FromBody] EncuestadosEncuestaExtranetSaveRequest request)
        {
            request.user_name = this.GetUser().Usuario.UserName;
            var result = _EncuestaProxy.SaveEncuestadosExtranetList(request);
            return _Response(result);
        }

        [HttpPost]
        [Route("UpdateInformeEncuestas")]
        public IActionResult UpdateInformeEncuestas([FromBody] EncuestaResultadosSaveRequest request)
        {
            var result = _EncuestaProxy.UpdateInformeEncuestas(request);
            return _Response(result);
        }
        [HttpPost]
        [Route("GetRespuestasByEncuesta")]
        public IActionResult GetRespuestasByEncuesta([FromBody] PagedIdenEncuesta request)
        {
            var result = _EncuestaProxy.GetRespuestasByEncuesta(request);
            return _Response(result);

        }

        [HttpPost]
        [Route("GetRespuestasByEncuestaExtranet")]
        public IActionResult GetRespuestasByEncuestaExtranet([FromBody] PagedIdenEncuesta request)
        {
            var result = _EncuestaProxy.GetRespuestasByEncuestaExtranet(request);
            return _Response(result);

        }

        [HttpPost]
        [Route("GetPreguntasByEncuestaOrdenamiento")]
        public IActionResult GetPreguntasByEncuestaOrdenamiento([FromBody] PreguntasRequestList req)
        {
            var result = _EncuestaProxy.GetPreguntasByEncuestaOrdenamiento(req);
            return _Response(result);
        }

        [HttpPost]
        [Route("UpdatePreguntaEncuestaOrdenamiento")]
        public IActionResult UpdatePreguntaEncuestaOrdenamiento([FromBody] PreguntaOrdenamientoRequest request)
        {
            var result = _EncuestaProxy.UpdatePreguntaEncuestaOrdenamiento(request);
            return _Response(result);
        }

        [HttpPost]
        [Route("GetSeccionesByEncuesta")]
        public IActionResult GetSeccionesByEncuesta([FromBody] PreguntasRequestList req)
        {
            var result = _EncuestaProxy.GetSeccionesByEncuesta(req);
            return _Response(result);
        }

        [HttpPost]
        [Route("SaveUpdateSeccion")]
        public IActionResult SaveUpdateSeccion([FromBody] SeccionRequest req)
        {
            req.user_name = this.GetUser().Usuario.UserName;
            var result = _EncuestaProxy.SaveUpdateSeccion(req);
            return _Response(result);
        }

        [HttpPost]
        [Route("UpdateSeccionEncuestaOrdenamiento")]
        public IActionResult UpdateSeccionEncuestaOrdenamiento([FromBody] SeccionOrdenamientoRequest request)
        {
            var result = _EncuestaProxy.UpdateSeccionEncuestaOrdenamiento(request);
            return _Response(result);
        }

        [HttpPost]
        [Route("GetSeccionList")]
        public IActionResult GetSeccionList([FromBody] SeccionRequest req)
        {
            var result = _EncuestaProxy.GetSeccionList(req);
            return _Response(result);
        }

        [HttpPost]
        [Route("GetNotificacionesByEncuesta")]
        public IActionResult GetNotificacionesByEncuesta([FromBody] PreguntasRequestList req)
        {
            var result = _EncuestaProxy.GetNotificacionesByEncuesta(req);
            return _Response(result);
        }

        [HttpPost]
        [Route("SaveUpdateNotificacion")]
        public IActionResult SaveUpdateNotificacion([FromBody] NotificacionRequest req)
        {
            req.user_name = this.GetUser().Usuario.UserName;
            var result = _EncuestaProxy.SaveUpdateNotificacion(req);
            return _Response(result);
        }

        [HttpPost]
        [Route("UpdatePreguntaSeccionEncuestaOrdenamiento")]
        public IActionResult UpdatePreguntaSeccionEncuestaOrdenamiento([FromBody] SeccionListOrdenamientoRequest request)
        {
            var result = _EncuestaProxy.UpdatePreguntaSeccionEncuestaOrdenamiento(request);
            return _Response(result);
        }
        #endregion

        #region PARA ENCUESTADOS
        [HttpPost]
        [Route("GetEncuestasListByUser")]
        public IActionResult GetEncuestasListByUser([FromBody] EncuestaByEncuestadoRequestList request)
        {
            var user_data = this.GetUser().Usuario;
            request.dni_user = user_data.NumeroDocumento;
            request.id_dependencia = user_data.IdDependencia;
            request.today = DateTime.Now;
            var result = _EncuestaProxy.GetEncuestasListByUser(request);
            return _Response(result);
        }

        [HttpPost]
        [Route("GetAllEncuestasListByUser")]
        public IActionResult GetAllEncuestasListByUser([FromBody] EncuestaRequestByUserListAll request)
        {
            var user_data = this.GetUser().Usuario;
            request.dni_trabajador = user_data.NumeroDocumento;
            var result = _EncuestaProxy.GetAllEncuestasListByUser(request);
            return _Response(result);
        }

        [HttpPost]
        [Route("GetAllEncuestasListByUserExtranet")]
        public IActionResult GetAllEncuestasListByUserExtranet([FromBody] EncuestaRequestByUserListAll request)
        {
            var user_data = this.GetUser().Usuario;
            request.dni_trabajador = user_data.NumeroDocumento == user_data.RUC ? user_data.NumeroDocumento : user_data.RUC;
            var result = _EncuestaProxy.GetAllEncuestasListByUserExtranet(request);
            return _Response(result);
        }

        [HttpPost]
        [Route("GetResultadosChartByEncuesta")]
        public IActionResult GetResultadosChartByEncuesta([FromBody] EncuestaIDENRequest request)
        {
            var result = _EncuestaProxy.GetResultadosChartByEncuesta(request);
            return _Response(result);
        }

        [HttpPost]
        [Route("GetEncuestasListByUserExtranet")]
        public IActionResult GetEncuestasListByUserExtranet([FromBody] EncuestaByEncuestadoRequestList request)
        {
            var user_data = this.GetUser().Usuario;
            request.dni_user = user_data.NumeroDocumento == user_data.RUC ? user_data.NumeroDocumento : user_data.RUC;
            request.id_dependencia = user_data.IdDependencia;
            request.today = DateTime.Now;
            var result = _EncuestaProxy.GetEncuestasListByUserExtranet(request);
            return _Response(result);
        }

        [HttpPost]
        [Route("GetListaPreguntasByEncuesta")]
        public IActionResult GetListaPreguntasByEncuesta([FromBody] PreguntasRequestList req)
        {
            var result = _EncuestaProxy.GetListaPreguntasByEncuesta(req);
            return _Response(result);
        }

        [HttpPost]
        [Route("GetListaPreguntasSeccionByEncuesta")]
        public IActionResult GetListaPreguntasSeccionByEncuesta([FromBody] PreguntasRequestList req)
        {
            var result = _EncuestaProxy.GetListaPreguntasSeccionByEncuesta(req);
            return _Response(result);
        }

        [HttpPost]
        [Route("SaveEncuestaAdministradoExtranet")]
        public IActionResult SaveEncuestaAdministradoExtranet([FromBody] EncuestaByEncuestadoRequestList request)
        {
            var user_data = this.GetUser().Usuario;
            request.dni_user = user_data.NumeroDocumento == user_data.RUC ? user_data.NumeroDocumento: user_data.RUC;
            request.id_dependencia = user_data.IdDependencia;
            request.today = DateTime.Now;
            var result = _EncuestaProxy.SaveEncuestaAdministradoExtranet(request);
            return _Response(result);
        }

        [HttpPost]
        [Route("GetPreguntasSeccionesByEncuesta")]
        public IActionResult GetPreguntasSeccionesByEncuesta([FromBody] PreguntasRequestList req)
        {
            var result = _EncuestaProxy.GetPreguntasSeccionesByEncuesta(req);
            return _Response(result);
        }

        [HttpPost]
        [Route("GetPreguntasSinSeccionByEncuesta")]
        public IActionResult GetPreguntasSinSeccionByEncuesta([FromBody] PreguntasRequestList req)
        {
            var result = _EncuestaProxy.GetPreguntasSinSeccionByEncuesta(req);
            return _Response(result);
        }

        [HttpPost]
        [Route("GetDepartamentos")]
        public IActionResult GetDepartamentos()
        {
            var result = this._comunProxy.GetDepartamento();
            return _Response(result);
        }

        [HttpPost]
        [Route("GetProvincia")]
        public IActionResult GetProvincia([FromBody] UbigeoRequest request)
        {
            var result = this._comunProxy.GetProvincia(new UbigeoRequest()
            {
                cod_departamento = request.cod_departamento
            });
            return _Response(result);
        }
        [HttpPost]
        [Route("GetDistrito")]
        public IActionResult GetDistrito([FromBody] UbigeoRequest request)
        {
            var result = this._comunProxy.GetDistrito(new UbigeoRequest()
            {
                cod_departamento = request.cod_departamento,
                cod_provincia = request.cod_provincia
            });
            return _Response(result);
        }


        #endregion

        #region PARA ENCUESTADOS
        [HttpPost]
        [Route("GetReporteEncuestadoPreguntaRespuesta")]
        public IActionResult GetReporteEncuestadoPreguntaRespuesta([FromBody] PagedIdenEncuesta request)
        {
            // Cree una instancia de un objeto Workbook que represente un archivo de Excel.
            IWorkbook workbook = new XSSFWorkbook();

            // Cuando crea un nuevo Workbook, se agrega una "Hoja1" predeterminada al Workbook.
            ISheet sheet1 = workbook.CreateSheet("Sheet1");

            var result = _EncuestaProxy.GetListReporteExcel(request);

            XSSFFont myFont = (XSSFFont)workbook.CreateFont();
            myFont.FontHeightInPoints = 11;

            myFont.FontName = "Calibri";
            XSSFCellStyle borderedCellStyle = (XSSFCellStyle)workbook.CreateCellStyle();
            borderedCellStyle.SetFont(myFont);
            borderedCellStyle.BorderLeft = NPOI.SS.UserModel.BorderStyle.Thin;
            borderedCellStyle.BorderTop = NPOI.SS.UserModel.BorderStyle.Thin;
            borderedCellStyle.BorderRight = NPOI.SS.UserModel.BorderStyle.Thin;
            borderedCellStyle.BorderBottom = NPOI.SS.UserModel.BorderStyle.Thin;
            borderedCellStyle.FillBackgroundColor = 1;


            IRow row1 = sheet1.CreateRow(0);


            ICell cell0 = row1.CreateCell(0);
            row1.CreateCell(0).SetCellValue("N°");
            cell0.CellStyle = borderedCellStyle;

            ICell cell1 = row1.CreateCell(1);
            row1.CreateCell(1).SetCellValue("RUC/DNI");
            cell1.CellStyle = borderedCellStyle;

            ICell cell2 = row1.CreateCell(2);
            row1.CreateCell(2).SetCellValue("RAZON SOCIAL");
            cell2.CellStyle = borderedCellStyle;

            ICell cell3 = row1.CreateCell(3);
            row1.CreateCell(3).SetCellValue("TIPO DE PREGUNTA");
            cell3.CellStyle = borderedCellStyle;

            ICell cell4 = row1.CreateCell(4);
            row1.CreateCell(4).SetCellValue("PREGUNTA");
            cell4.CellStyle = borderedCellStyle;

            ICell cell5 = row1.CreateCell(5);
            row1.CreateCell(5).SetCellValue("COLUMNA");
            cell5.CellStyle = borderedCellStyle;

            ICell cell6 = row1.CreateCell(6);
            row1.CreateCell(6).SetCellValue("FILA");
            cell6.CellStyle = borderedCellStyle;

            ICell cell7 = row1.CreateCell(7);
            row1.CreateCell(7).SetCellValue("RESPUESTA");
            cell7.CellStyle = borderedCellStyle;
            int fila = 1;

            foreach (var item in result)
            {
                IRow row2 = sheet1.CreateRow(fila);
                row2.CreateCell(0).SetCellValue(fila);
                row2.CreateCell(1).SetCellValue(item.ruc_administrado);
                row2.CreateCell(2).SetCellValue(item.razon_social);
                row2.CreateCell(3).SetCellValue(item.desc_pregunta);
                row2.CreateCell(4).SetCellValue(item.pregunta);
                string jsonStr = item.json_respuestas;
                jsonStr = jsonStr.Replace("\\\"", "").Replace("\r\n", "").Replace(@"\", "");
                jsonStr = jsonStr.Replace("[null]", "[[]]");
                dynamic resp = Newtonsoft.Json.JsonConvert.DeserializeObject(jsonStr);
                var respuesta = resp.respuesta;

                if (item.id_tipo_pregunta == 3 || item.id_tipo_pregunta == 4 || item.id_tipo_pregunta == 10 || item.id_tipo_pregunta == 12)
                {
                    row2.CreateCell(7).SetCellValue(Convert.ToString(respuesta));
                    fila++;
                }
                else if (item.id_tipo_pregunta == 9)
                {
                    string jsonTipoFecha = item.json_tipo_fecha;
                    jsonTipoFecha = jsonTipoFecha.Replace("\r\n", "").Replace(@"\", "");
                    dynamic respuesta_tipo_fecha = Newtonsoft.Json.JsonConvert.DeserializeObject(jsonTipoFecha);

                    int id_enumerado = 0;
                    foreach (var irem in respuesta_tipo_fecha)
                    {

                        if (Convert.ToBoolean(irem.selected))
                        {
                            id_enumerado = irem.id_enumerado;
                        }
                    }
                    var fecha = Convert.ToDateTime(respuesta);
                    switch (id_enumerado)
                    {
                        case 1:
                            row2.CreateCell(7).SetCellValue(fecha.ToString("yyyy"));
                            break;
                        case 2:
                            row2.CreateCell(7).SetCellValue(fecha.ToString("MM/yyyy"));
                            break;
                        case 3:
                            row2.CreateCell(7).SetCellValue(fecha.ToString("dd/MM/yyyy"));
                            break;
                    }
                    fila++;
                }
                else if (item.id_tipo_pregunta == 2)
                {
                    string text = "";
                    var resultado_desplegable = respuesta[0];


                    foreach (var irem in resp.opciones)
                    {

                        if (Convert.ToInt32(irem.idx) == Convert.ToInt32(resultado_desplegable))
                        {
                            text = irem.descripcion;
                        }
                    }
                    row2.CreateCell(7).SetCellValue(text);
                    fila++;
                }
                else if (item.id_tipo_pregunta == 11)
                {
                    var link_archivo = appConfig.Urls.URL_GA_UI + "/archivo/download?id=" + Convert.ToString(respuesta) + "&version=0&BuscarBorrador=true";
                    row2.CreateCell(7).SetCellValue(Convert.ToString(link_archivo));
                    fila++;
                }
                else if (item.id_tipo_pregunta == 6 || item.id_tipo_pregunta == 5)
                {
                    string otro = Convert.ToString(resp.otro);

                    

                    foreach (var irem in respuesta)
                    {
                        if (Convert.ToBoolean(irem.selected))
                        {
                            IRow row4 = sheet1.CreateRow(fila);
                            row4.CreateCell(0).SetCellValue(fila);
                            row4.CreateCell(1).SetCellValue(item.ruc_administrado);
                            row4.CreateCell(2).SetCellValue(item.razon_social);
                            row4.CreateCell(3).SetCellValue(item.desc_pregunta);
                            row4.CreateCell(4).SetCellValue(item.pregunta);
                            row4.CreateCell(5).SetCellValue("");
                            row4.CreateCell(6).SetCellValue("");
                            row4.CreateCell(7).SetCellValue(Convert.ToString(irem.descripcion));
                            fila++;
                        }
                    }                 
                    if (otro == null || otro == "")
                    {

                    }
                    else
                    {
                        IRow row5 = sheet1.CreateRow(fila);
                        row5.CreateCell(0).SetCellValue(fila);
                        row5.CreateCell(1).SetCellValue(item.ruc_administrado);
                        row5.CreateCell(2).SetCellValue(item.razon_social);
                        row5.CreateCell(3).SetCellValue(item.desc_pregunta);
                        row5.CreateCell(4).SetCellValue(item.pregunta);
                        row5.CreateCell(5).SetCellValue("");
                        row5.CreateCell(6).SetCellValue("");
                        row5.CreateCell(7).SetCellValue("otro: " + otro);
                        fila++;
                       
                    }
                }
                else if (item.id_tipo_pregunta == 7)
                {
                    var conteo = 0;
                    foreach (var item_columna_matriz in respuesta[0].columnas)
                    {
                        foreach (var item_fila_matriz in respuesta)
                        {
                            
                            if (Convert.ToString(item_fila_matriz.respuestas[conteo]) == "[[]]")
                            {
                                IRow row3 = sheet1.CreateRow(fila);
                                row3.CreateCell(0).SetCellValue(fila);
                                row3.CreateCell(1).SetCellValue(item.ruc_administrado);
                                row3.CreateCell(2).SetCellValue(item.razon_social);
                                row3.CreateCell(3).SetCellValue(item.desc_pregunta);
                                row3.CreateCell(4).SetCellValue(item.pregunta);
                                row3.CreateCell(5).SetCellValue(Convert.ToString(item_columna_matriz.nombre_columna));
                                row3.CreateCell(6).SetCellValue(Convert.ToString(item_fila_matriz.nombre_fila));
                                row3.CreateCell(7).SetCellValue("");
                                fila++;
                            }
                            else
                            {
                                

                                if (item_fila_matriz.columnas[conteo].forma.id_tipo_pregunta == 6)
                                {
                                    var res = item_fila_matriz.respuestas[conteo];
                                    if (Convert.ToString(res) == "[]")
                                    {
                                        IRow row3 = sheet1.CreateRow(fila);
                                        row3.CreateCell(0).SetCellValue(fila);
                                        row3.CreateCell(1).SetCellValue(item.ruc_administrado);
                                        row3.CreateCell(2).SetCellValue(item.razon_social);
                                        row3.CreateCell(3).SetCellValue(item.desc_pregunta);
                                        row3.CreateCell(4).SetCellValue(item.pregunta);
                                        row3.CreateCell(5).SetCellValue(Convert.ToString(item_columna_matriz.nombre_columna));
                                        row3.CreateCell(6).SetCellValue(Convert.ToString(item_fila_matriz.nombre_fila));
                                        row3.CreateCell(7).SetCellValue("");
                                        fila++;
                                    }
                                    foreach (var item_multiple in res)
                                    {
                                        var d = Convert.ToString(item_multiple);
                                        IRow row3 = sheet1.CreateRow(fila);
                                        row3.CreateCell(0).SetCellValue(fila);
                                        row3.CreateCell(1).SetCellValue(item.ruc_administrado);
                                        row3.CreateCell(2).SetCellValue(item.razon_social);
                                        row3.CreateCell(3).SetCellValue(item.desc_pregunta);
                                        row3.CreateCell(4).SetCellValue(item.pregunta);
                                        row3.CreateCell(5).SetCellValue(Convert.ToString(item_columna_matriz.nombre_columna));
                                        row3.CreateCell(6).SetCellValue(Convert.ToString(item_fila_matriz.nombre_fila));
                                        row3.CreateCell(7).SetCellValue(Convert.ToString(d));
                                        fila++;
                                    }
                                }
                                else
                                {
                                    IRow row3 = sheet1.CreateRow(fila);
                                    row3.CreateCell(0).SetCellValue(fila);
                                    row3.CreateCell(1).SetCellValue(item.ruc_administrado);
                                    row3.CreateCell(2).SetCellValue(item.razon_social);
                                    row3.CreateCell(3).SetCellValue(item.desc_pregunta);
                                    row3.CreateCell(4).SetCellValue(item.pregunta);
                                    row3.CreateCell(5).SetCellValue(Convert.ToString(item_columna_matriz.nombre_columna));
                                    row3.CreateCell(6).SetCellValue(Convert.ToString(item_fila_matriz.nombre_fila));
                                    row3.CreateCell(7).SetCellValue(Convert.ToString(item_fila_matriz.respuestas[conteo]));
                                    fila++;
                                }

                            }

                         
                        }
                        conteo++;
                    }
                }
                else
                {
                    row2.CreateCell(7).SetCellValue("-");
                    fila++;
                }

                
            }









            MemoryStream ms = new MemoryStream();
            workbook.Write(ms, true);
            // Guarde el Excel como archivo .xlsx.
            var fileBytes = ms.ToArray();
            string base64 = Convert.ToBase64String(fileBytes);
            return _Response(new Release.Helper.StatusResponse { Success = true, Value = base64 });
        }
        [HttpPost]
        [Route("GetListAvanceByIdEncuesta")]
        public IActionResult GetListAvanceByIdEncuesta([FromBody] PagedIdenEncuesta request)
        {
            var result = _EncuestaProxy.GetListAvanceByIdEncuesta(request);
            return _Response(result);
        }
        [HttpPost]
        [Route("GetReporteResultados")]
        public IActionResult GetReporteResultados([FromBody] PagedIdenEncuesta request)
        {
            // Cree una instancia de un objeto Workbook que represente un archivo de Excel.
            IWorkbook workbook = new XSSFWorkbook();

            // Cuando crea un nuevo Workbook, se agrega una "Hoja1" predeterminada al Workbook.
            ISheet sheet1 = workbook.CreateSheet("Sheet1");

            var result = _EncuestaProxy.GetListResultadosByIdEncuesta(request);

            XSSFFont myFont = (XSSFFont)workbook.CreateFont();
            myFont.FontHeightInPoints = 11;

            myFont.FontName = "Calibri";
            XSSFCellStyle borderedCellStyle = (XSSFCellStyle)workbook.CreateCellStyle();
            borderedCellStyle.SetFont(myFont);
            borderedCellStyle.BorderLeft = NPOI.SS.UserModel.BorderStyle.Thin;
            borderedCellStyle.BorderTop = NPOI.SS.UserModel.BorderStyle.Thin;
            borderedCellStyle.BorderRight = NPOI.SS.UserModel.BorderStyle.Thin;
            borderedCellStyle.BorderBottom = NPOI.SS.UserModel.BorderStyle.Thin;
            borderedCellStyle.FillBackgroundColor = 1;


            IRow row1 = sheet1.CreateRow(0);


            ICell cell0 = row1.CreateCell(0);
            row1.CreateCell(0).SetCellValue("N°");
            cell0.CellStyle = borderedCellStyle;

            ICell cell1 = row1.CreateCell(1);
            row1.CreateCell(1).SetCellValue("ESTADO");
            cell1.CellStyle = borderedCellStyle;

            ICell cell2 = row1.CreateCell(2);
            row1.CreateCell(2).SetCellValue("RUC/DNI");
            cell2.CellStyle = borderedCellStyle;

            ICell cell3 = row1.CreateCell(3);
            row1.CreateCell(3).SetCellValue("RAZÓN SOCIAL");
            cell3.CellStyle = borderedCellStyle;

            ICell cell4 = row1.CreateCell(4);
            row1.CreateCell(4).SetCellValue("FECHA CREACIÓN");
            cell4.CellStyle = borderedCellStyle;

            ICell cell5 = row1.CreateCell(5);
            row1.CreateCell(5).SetCellValue("FECHA MODIFICACIÓN");
            cell5.CellStyle = borderedCellStyle;

            ICell cell6 = row1.CreateCell(6);
            row1.CreateCell(6).SetCellValue("CORREO ELECTRONICO");
            cell6.CellStyle = borderedCellStyle;

            ICell cell7 = row1.CreateCell(7);
            row1.CreateCell(7).SetCellValue("CELULAR");
            cell7.CellStyle = borderedCellStyle;

            int fila = 1;

            foreach (var item in result)
            {
                IRow row2 = sheet1.CreateRow(fila);
                row2.CreateCell(0).SetCellValue(fila);
                row2.CreateCell(1).SetCellValue(item.estado);
                row2.CreateCell(2).SetCellValue(item.usuario_creacion);
                row2.CreateCell(3).SetCellValue(item.razon_social);
                row2.CreateCell(4).SetCellValue(item.fecha_creacion == null ? "" : item.fecha_creacion.Value.ToString("dd/MM/yyyy hh:mm:ss"));
                row2.CreateCell(5).SetCellValue(item.fecha_modificacion == null ? "" : item.fecha_modificacion.Value.ToString("dd/MM/yyyy hh:mm:ss"));
                row2.CreateCell(6).SetCellValue(item.email);
                row2.CreateCell(7).SetCellValue(item.celular);
                fila++;
            }
            MemoryStream ms = new MemoryStream();
            workbook.Write(ms, true);
            // Guarde el Excel como archivo .xlsx.
            var fileBytes = ms.ToArray();
            string base64 = Convert.ToBase64String(fileBytes);
            return _Response(new Release.Helper.StatusResponse { Success = true, Value = base64 });
        }
        #endregion

    }

}