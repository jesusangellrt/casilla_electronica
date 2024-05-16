using Microsoft.AspNetCore.Mvc;
using Prod.SNE.Core.Aplicacion.Interfaces;
using Prod.SNE.Entidades;
using Prod.SNE.Entidades.Trabajador;
using Release.Helper;
using Release.Helper.Pagination;
using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Core.Controllers
{
    [Route("[controller]")]
    public class ComunController : Controller
    {
        private readonly IComunAplicacion _comunAplicacion;
        public ComunController(IComunAplicacion comunAplicacion)
        {
            _comunAplicacion = comunAplicacion;
        } 
       
        [HttpGet]
        [Route("GetPersonaByPersonaNatural")]
        public PersonaResponse GetPersonaByPersonaNatural([FromBody]PersonaRequest request)
        {
            var o = _comunAplicacion.GetPersonaByPersonaNatural(request);
            return o;
        }
       
       
        [HttpGet]
        [Route("GetPersonaById")]
        public PersonaResponse GetPersonaById([FromBody]PersonaRequest request)
        {
            var o = _comunAplicacion.GetPersonaById(request);
            return o;
        }

        [HttpGet]
        [Route("GetArchivoById")]
        public ArchivoResponse GetNecById([FromBody]ArchivoRequest filtro)
        {
            var o = _comunAplicacion.GetArchivoById(filtro);
            return o;
        }

        [HttpPost]
        [Route("RegistrarArchivo")]
        public StatusResponse RegistrarArchivo([FromBody]ArchivoRequest filtro)
        {
            var o = _comunAplicacion.RegistrarArchivo(filtro);
            return o;
        }
       
        [HttpGet]
        [Route("GetDepartamento")]
        public List<SelectResponse> GetDepartamento()
        {
            var o = _comunAplicacion.GetDepartamento();
            return o;
        }

        [HttpGet]
        [Route("GetProvincia")]
        public List<SelectResponse> GetProvincia([FromBody]UbigeoRequest request)
        {
            var o = _comunAplicacion.GetProvincia(request);
            return o;
        }
        [HttpGet]
        [Route("GetDistrito")]
        public List<SelectResponse> GetDistrito([FromBody]UbigeoRequest request)
        {
            var o = _comunAplicacion.GetDistrito(request);
            return o;
        }

        [Route("GetEnumeradoPorTipo")]
        public List<SelectResponse> GetEnumeradoPorTipo(int tipoEnumerado)
        {
            var o = _comunAplicacion.GetEnumeradoPorTipo(tipoEnumerado);
            return o;
        }

        [HttpGet]
        [Route("GetRolSSA")]
        public List<SelectResponse> GetRolSSA([FromBody] RolSSARequest request)
        {
            var o = _comunAplicacion.GetRolSSA(request);
            return o;
        }

        [HttpGet]
        [Route("GetPermiso")]
        public List<SelectResponse> GetPermiso(PermisoRequest request)
        {
            var o = _comunAplicacion.GetPermiso(request);
            return o;
        }

        [HttpGet]
        [Route("GetDependencia")]
        public List<SelectResponse> GetDependencia()
        {
            var o = _comunAplicacion.GetDependencia();
            return o;
        }
        [HttpGet]
        [Route("GetTrabajador")]
        public StatusResponse<TrabajadorResponse> GetTrabajador(string username)
        {
            var o = _comunAplicacion.GetTrabajador(username);
            return o;
        }

        [HttpGet]
        [Route("GetRegimen")]
        public List<SelectResponse> GetRegimen()
        {
            var o = _comunAplicacion.GetRegimen();
            return o;
        }
    }
}