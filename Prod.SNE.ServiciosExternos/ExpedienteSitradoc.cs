using Prod.SNE.ServiciosExternos.Sitradoc;
using Release.Helper.Proxy;
using System;
using System.ServiceModel;
using System.Threading.Tasks;

namespace Prod.SNE.ServiciosExternos
{

    public interface IExpedienteSitradocWS: IExpedienteSitradocService
    {
    }

    public class ExpedienteSitradocWS : IExpedienteSitradocWS
    {
        private string _baseUrl;

        public ExpedienteSitradocWS(string baseUrl)
        {
            _baseUrl = baseUrl;
        }
        public StatusResponse ActivarNotificacionAutomatica(ActualizarNotificacionRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<StatusResponse> ActivarNotificacionAutomaticaAsync(ActualizarNotificacionRequest request)
        {
            throw new NotImplementedException();
        }

        public StatusResponse ActualizarDocumentoArchivoPrincipal(DocumentoInternoArchivoRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<StatusResponse> ActualizarDocumentoArchivoPrincipalAsync(DocumentoInternoArchivoRequest request)
        {
            throw new NotImplementedException();
        }

        public void ActualizarEstadoDocumento(int id_documento, int id_estado_documento)
        {
            throw new NotImplementedException();
        }

        public Task ActualizarEstadoDocumentoAsync(int id_documento, int id_estado_documento)
        {
            throw new NotImplementedException();
        }

        public StatusResponse ActualizarResolucion(ActualizaResolucionRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<StatusResponse> ActualizarResolucionAsync(ActualizaResolucionRequest request)
        {
            throw new NotImplementedException();
        }

        public StatusResponse AnularDocumentoInterno(DocumentoInternoAnularRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<StatusResponse> AnularDocumentoInternoAsync(DocumentoInternoAnularRequest request)
        {
            throw new NotImplementedException();
        }

        public sp_new_documento_trabajador_cflujo_VUP_ResultResponse AsignarDocumentoConFlujoTrabajador(int id_documento, int coddep, string usuario, string asunto, string observacion, int idtipodoc)
        {
            throw new NotImplementedException();
        }

        public Task<sp_new_documento_trabajador_cflujo_VUP_ResultResponse> AsignarDocumentoConFlujoTrabajadorAsync(int id_documento, int coddep, string usuario, string asunto, string observacion, int idtipodoc)
        {
            throw new NotImplementedException();
        }

        public bool AsignarDocumentoTrabajador(int id_documento, int coddep, int codigo_trabajador)
        {
            throw new NotImplementedException();
        }

        public Task<bool> AsignarDocumentoTrabajadorAsync(int id_documento, int coddep, int codigo_trabajador)
        {
            throw new NotImplementedException();
        }

        public sp_new_cierre_envio_fisico_oficina_VUP_ResultResponse CierreEnvioFisicoOficina(int iddocumento, int iddocumentooficio, int coddep, string usuario, int id_tipo_comunicacion, int plazo_atencion, string representante, string cargo, string ip, string tipo_correspondencia)
        {
            throw new NotImplementedException();
        }

        public Task<sp_new_cierre_envio_fisico_oficina_VUP_ResultResponse> CierreEnvioFisicoOficinaAsync(int iddocumento, int iddocumentooficio, int coddep, string usuario, int id_tipo_comunicacion, int plazo_atencion, string representante, string cargo, string ip, string tipo_correspondencia)
        {
            throw new NotImplementedException();
        }

        public sp_new_cierre_expediente_oficina_VUP_ResultResponse CierreExpedienteOficina(int IDDOCUMENTO, int CODDEP, string USUARIO, string ASUNTO, string OBSERVACION, int IDTIPODOC)
        {
            throw new NotImplementedException();
        }

        public Task<sp_new_cierre_expediente_oficina_VUP_ResultResponse> CierreExpedienteOficinaAsync(int IDDOCUMENTO, int CODDEP, string USUARIO, string ASUNTO, string OBSERVACION, int IDTIPODOC)
        {
            throw new NotImplementedException();
        }

        public sp_new_documento_oficina_VUP_ResultResponse CrearNuevoDocumentoOficina(int IDDOCUMENTO, int CODDEP, string USUARIO, string ASUNTO, string OBSERVACION, int IDTIPODOC)
        {
            throw new NotImplementedException();
        }

        public Task<sp_new_documento_oficina_VUP_ResultResponse> CrearNuevoDocumentoOficinaAsync(int IDDOCUMENTO, int CODDEP, string USUARIO, string ASUNTO, string OBSERVACION, int IDTIPODOC)
        {
            throw new NotImplementedException();
        }

        public sp_insExp_VUP_ResultResponse CrearNuevoExpediente(string RUCoDni, string INDICATIVO, int? FOLIO, string ANIOACTUAL, string ASUNTO, int? DEPENDENCIA, string DIA_MAX_RESP, string OBSERVACIONES, string COD_USUARIO, int? IDCLASEDOC, int? PROCEDIMIENTO)
        {
            throw new NotImplementedException();
        }

        public Task<sp_insExp_VUP_ResultResponse> CrearNuevoExpedienteAsync(string RUCoDni, string INDICATIVO, int? FOLIO, string ANIOACTUAL, string ASUNTO, int? DEPENDENCIA, string DIA_MAX_RESP, string OBSERVACIONES, string COD_USUARIO, int? IDCLASEDOC, int? PROCEDIMIENTO)
        {
            throw new NotImplementedException();
        }

        public StatusResponse FinalizarDocumento(FinalizarDocumentoRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<StatusResponse> FinalizarDocumentoAsync(FinalizarDocumentoRequest request)
        {
            throw new NotImplementedException();
        }

        public AdjuntoExternoResponse GenerarAdjuntoExterno(AdjuntoExternoRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<AdjuntoExternoResponse> GenerarAdjuntoExternoAsync(AdjuntoExternoRequest request)
        {
            throw new NotImplementedException();
        }

        public StatusResponseOfDocumentoCorrespondenciaResultResponseD5bhEC2p GenerarCorrespondenciaInterno(DocumentoCorrespondenciaRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<StatusResponseOfDocumentoCorrespondenciaResultResponseD5bhEC2p> GenerarCorrespondenciaInternoAsync(DocumentoCorrespondenciaRequest request)
        {
            throw new NotImplementedException();
        }

        public p_CORRESPONDENCIA_Add_ResultResponse GenerarCorrespondenciaSITRADOC(CorrespondenciaRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<p_CORRESPONDENCIA_Add_ResultResponse> GenerarCorrespondenciaSITRADOCAsync(CorrespondenciaRequest request)
        {
            throw new NotImplementedException();
        }

        public p_CORRESPONDENCIA_Add_VUP_Response GenerarCorrespondenciaVirtual(int IDDOC, int IDCLASEDOC, string FECENTCOURIER, string HORENTCOURIER, string USUARIO, int DEPENDENCIA, string ASUNTO, string DESTINATARIO, string CODDEPA, string CODPROV, string CODDIST, string DOMICILIO, int FOLIO, int RADIO2, int CODDEP, string DOC, int SUBDEP, string EXPOEC, string DOCOEC, string FECOEC, int IDPERSONA, int OTRODOMI, int TIPRESOL, string NUMRESOL, int ANYO4, string EXPDIGSECOVI, string ABOGADO, int id_tipo_comunicacion, int plazo_atencion, string texto_documento, string prefijo, string representante, string cargo, string user, string ip, string adjunto, string tipo_correspondencia)
        {
            throw new NotImplementedException();
        }

        public Task<p_CORRESPONDENCIA_Add_VUP_Response> GenerarCorrespondenciaVirtualAsync(int IDDOC, int IDCLASEDOC, string FECENTCOURIER, string HORENTCOURIER, string USUARIO, int DEPENDENCIA, string ASUNTO, string DESTINATARIO, string CODDEPA, string CODPROV, string CODDIST, string DOMICILIO, int FOLIO, int RADIO2, int CODDEP, string DOC, int SUBDEP, string EXPOEC, string DOCOEC, string FECOEC, int IDPERSONA, int OTRODOMI, int TIPRESOL, string NUMRESOL, int ANYO4, string EXPDIGSECOVI, string ABOGADO, int id_tipo_comunicacion, int plazo_atencion, string texto_documento, string prefijo, string representante, string cargo, string user, string ip, string adjunto, string tipo_correspondencia)
        {
            throw new NotImplementedException();
        }

        public sp_creaDocGenInterno_VUP_Response GenerarDocInternoPadre(int CODDEP, int CODDEP_DESTINO, string USUARIO, string ASUNTO, string OBSERVACION, int IDTIPODOC)
        {
            throw new NotImplementedException();
        }

        public Task<sp_creaDocGenInterno_VUP_Response> GenerarDocInternoPadreAsync(int CODDEP, int CODDEP_DESTINO, string USUARIO, string ASUNTO, string OBSERVACION, int IDTIPODOC)
        {
            throw new NotImplementedException();
        }

        public DocumentoExternoResponse GenerarDocumentoExterno(DocumentoExternoRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<DocumentoExternoResponse> GenerarDocumentoExternoAsync(DocumentoExternoRequest request)
        {
            throw new NotImplementedException();
        }

        public StatusResponseOfDocumentoInternoReponseziY5_P7Ve GenerarDocumentoInterno(DocumentoInternoRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<StatusResponseOfDocumentoInternoReponseziY5_P7Ve> GenerarDocumentoInternoAsync(DocumentoInternoRequest request)
        {
            throw new NotImplementedException();
        }

        public StatusResponseOfDocumentoInternoTrabajadorResponse_PuRzoISh GenerarDocumentoInternoTrabajador(DocumentoInternoTrabajadorRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<StatusResponseOfDocumentoInternoTrabajadorResponse_PuRzoISh> GenerarDocumentoInternoTrabajadorAsync(DocumentoInternoTrabajadorRequest request)
        {
            throw new NotImplementedException();
        }

        public sp_insAsigExt_VUSPResponse GenerarExpedienteExterno(string RAZONSOCIAL, string INDICATIVO, int? FOLIO, string ANIOACTUAL, string ASUNTO, int DEPENDENCIA, string DIA_MAX_RESP, string OBSERVACIONES, string COD_USUARIO, int IDCLASEDOC)
        {
            throw new NotImplementedException();
        }

        public Task<sp_insAsigExt_VUSPResponse> GenerarExpedienteExternoAsync(string RAZONSOCIAL, string INDICATIVO, int? FOLIO, string ANIOACTUAL, string ASUNTO, int DEPENDENCIA, string DIA_MAX_RESP, string OBSERVACIONES, string COD_USUARIO, int IDCLASEDOC)
        {
            throw new NotImplementedException();
        }

        public StatusResponseOfNuevaResolucionResponseZN_SpMQSm GenerarResolucion(NuevaResolucionRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<StatusResponseOfNuevaResolucionResponseZN_SpMQSm> GenerarResolucionAsync(NuevaResolucionRequest request)
        {
            throw new NotImplementedException();
        }

        public sp_establecer_fecha_max_plazo_ResultResponse GetEstablecerFechaMaxPlazoHabiles(string fecha, int dia)
        {
            throw new NotImplementedException();
        }

        public Task<sp_establecer_fecha_max_plazo_ResultResponse> GetEstablecerFechaMaxPlazoHabilesAsync(string fecha, int dia)
        {
            throw new NotImplementedException();
        }

        public StatusResponseOfArrayOfClaseDocumentoResponsegrru5Brt ObtenerClaseDocumentoExterno()
        {
            var r = new ExpedienteSitradocServiceClient(
                            ProxyWcf.GetBasicHttpBinding(),
                            new EndpointAddress(_baseUrl))
                        .ExecuteProxy(x => x.ObtenerClaseDocumentoExterno());
            return r;
        }

        public Task<StatusResponseOfArrayOfClaseDocumentoResponsegrru5Brt> ObtenerClaseDocumentoExternoAsync()
        {
            throw new NotImplementedException();
        }

        public StatusResponseOfArrayOfClaseDocumentoResponsegrru5Brt ObtenerClaseDocumentoInterno()
        {
            var r = new ExpedienteSitradocServiceClient(
                         ProxyWcf.GetBasicHttpBinding(),
                         new EndpointAddress(_baseUrl))
                     .ExecuteProxy(x => x.ObtenerClaseDocumentoInterno());
            return r;
        }

        public Task<StatusResponseOfArrayOfClaseDocumentoResponsegrru5Brt> ObtenerClaseDocumentoInternoAsync()
        {
            throw new NotImplementedException();
        }

        public StatusResponseOfArrayOfClaseDocumentoResponsegrru5Brt ObtenerClaseDocumentoTrabajador()
        {
            var r = new ExpedienteSitradocServiceClient(
                         ProxyWcf.GetBasicHttpBinding(),
                         new EndpointAddress(_baseUrl))
                     .ExecuteProxy(x => x.ObtenerClaseDocumentoTrabajador());
            return r;
        }

        public Task<StatusResponseOfArrayOfClaseDocumentoResponsegrru5Brt> ObtenerClaseDocumentoTrabajadorAsync()
        {
            throw new NotImplementedException();
        }

        public StatusResponseOfArrayOfDependenciaResponseUjHPbw9I ObtenerDependencias(DependenciaRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<StatusResponseOfArrayOfDependenciaResponseUjHPbw9I> ObtenerDependenciasAsync(DependenciaRequest request)
        {
            throw new NotImplementedException();
        }

        public StatusResponseOfDocumentoExternoResponse7k21WfRL ObtenerDocumentoExterno(DocumentoExternoFilter filtro)
        {
            var r = new ExpedienteSitradocServiceClient(
                              ProxyWcf.GetBasicHttpBinding(),
                              new EndpointAddress(_baseUrl))
                          .ExecuteProxy(x => x.ObtenerDocumentoExterno(filtro));
            return r;
        }

        public Task<StatusResponseOfDocumentoExternoResponse7k21WfRL> ObtenerDocumentoExternoAsync(DocumentoExternoFilter filtro)
        {
            throw new NotImplementedException();
        }

        public StatusResponseOfDocumentoIndicativoResponseziY5_P7Ve ObtenerDocumentoIndicativo(DocumentoIndicativoFilter filtro)
        {
            var r = new ExpedienteSitradocServiceClient(
                             ProxyWcf.GetBasicHttpBinding(),
                             new EndpointAddress(_baseUrl))
                         .ExecuteProxy(x => x.ObtenerDocumentoIndicativo(filtro));
            return r;
        }

        public Task<StatusResponseOfDocumentoIndicativoResponseziY5_P7Ve> ObtenerDocumentoIndicativoAsync(DocumentoIndicativoFilter filtro)
        {
            throw new NotImplementedException();
        }

        public StatusResponseOfDocumentoConsultaInternoResponseziY5_P7Ve ObtenerDocumentoInterno(DocumentoInternoFilter filtro)
        {
            var r = new ExpedienteSitradocServiceClient(
                             ProxyWcf.GetBasicHttpBinding(),
                             new EndpointAddress(_baseUrl))
                         .ExecuteProxy(x => x.ObtenerDocumentoInterno(filtro));
            return r;
        }

        public Task<StatusResponseOfDocumentoConsultaInternoResponseziY5_P7Ve> ObtenerDocumentoInternoAsync(DocumentoInternoFilter filtro)
        {
            throw new NotImplementedException();
        }

        public StatusResponseOfFlujoHojaTramiteResponsebA3IP6kI ObtenerDocumentosByHojaTramite(FlujoHojaTramiteFilter filtro)
        {
            throw new NotImplementedException();
        }

        public Task<StatusResponseOfFlujoHojaTramiteResponsebA3IP6kI> ObtenerDocumentosByHojaTramiteAsync(FlujoHojaTramiteFilter filtro)
        {
            throw new NotImplementedException();
        }

        public StatusResponseOfArrayOfFinalDocumentoResponseziY5_P7Ve ObtenerFinalDocumento(int idDocumento)
        {
            throw new NotImplementedException();
        }

        public Task<StatusResponseOfArrayOfFinalDocumentoResponseziY5_P7Ve> ObtenerFinalDocumentoAsync(int idDocumento)
        {
            throw new NotImplementedException();
        }

        public StatusResponseOfResolucionConsultaResponseZN_SpMQSm ObtenerResolucion(int IdResolucion)
        {
            throw new NotImplementedException();
        }

        public Task<StatusResponseOfResolucionConsultaResponseZN_SpMQSm> ObtenerResolucionAsync(int IdResolucion)
        {
            throw new NotImplementedException();
        }

        public StatusResponseOfResolucionConsultaResponseZN_SpMQSm ObtenerResolucionGeneral(ResolucionFilter filtro)
        {
            var r = new ExpedienteSitradocServiceClient(
                            ProxyWcf.GetBasicHttpBinding(),
                            new EndpointAddress(_baseUrl))
                        .ExecuteProxy(x => x.ObtenerResolucionGeneral(filtro));
            return r;
        }

        public Task<StatusResponseOfResolucionConsultaResponseZN_SpMQSm> ObtenerResolucionGeneralAsync(ResolucionFilter filtro)
        {
            throw new NotImplementedException();
        }

        public StatusResponse ReactivarDocumento(ReactivarDocumentoRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<StatusResponse> ReactivarDocumentoAsync(ReactivarDocumentoRequest request)
        {
            throw new NotImplementedException();
        }

        public bool ReAsignarDocumentoTrabajador(int id_documento, int coddep, int codigo_trabajador)
        {
            throw new NotImplementedException();
        }

        public Task<bool> ReAsignarDocumentoTrabajadorAsync(int id_documento, int coddep, int codigo_trabajador)
        {
            throw new NotImplementedException();
        }

        public FlujoDocumentarioResponse VerFlujoDocumentoExterno(int idDocumento)
        {
            throw new NotImplementedException();
        }

        public Task<FlujoDocumentarioResponse> VerFlujoDocumentoExternoAsync(int idDocumento)
        {
            throw new NotImplementedException();
        }
    }
}
