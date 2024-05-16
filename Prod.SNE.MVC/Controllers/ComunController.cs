using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Prod.SNE.Entidades;
using Prod.SNE.MVC.Configuracion.Proxys;
using Prod.ServiciosExternos;
using PV = Prod.ServiciosExternos.PRODUCE_VIRTUAL;
using Microsoft.AspNetCore.Hosting;
using System.Net.Http.Headers;
using System.IO;
using Release.Helper;
using Prod.SNE.MVC.Configuracion;
using Microsoft.Extensions.Configuration;
using Prod.MS.GestorArchivos.Proxy;
using Prod.MS.GestorArchivos.Entities;
using ArchivoRequest = Prod.SNE.Entidades.ArchivoRequest;
using System.Threading.Tasks;

namespace Prod.SNE.MVC.Controllers
{
    //[Produces("application/json")]
    [Route("api/comun")]
    public class ComunController : CustomBaseController
    {
        private readonly IReniecServicio _reniecServicio;
        private readonly ComunProxy _comunProxy;
        //private readonly IWebHostEnvironment _hostingEnvironment;
        //private readonly PV.IProduceVirtualServicio _produceVirtual;
        private readonly IConfiguration _configuration;
        //private readonly IWebHostEnvironment _env;
        private readonly ArchivoProxy _archivoProxy;

        public ComunController(
            IReniecServicio reniecServicio,
            ComunProxy comunProxy,
            //PV.IProduceVirtualServicio produceVirtualServicio,
            IPersonasServicio personaServicio,
            //IWebHostEnvironment hostingEnvironment,
            IConfiguration configuration,
            //IWebHostEnvironment _env,
            ArchivoProxy archivoProxy)
        {
            this._reniecServicio = reniecServicio;
            this._comunProxy = comunProxy;
            //this._hostingEnvironment = hostingEnvironment;
            this._configuration = configuration;
            this._archivoProxy = archivoProxy;
            //this._env = _env;
            //this._produceVirtual = produceVirtualServicio;
        } 

        [HttpPost]
        [Route("GetVerArchivo")]
        public IActionResult GetVerArchivo([FromBody] ArchivoBasicRequest req)
        {
            var a = new ArchivosByIdsRequest();
            string[] _ids = new string[1] { req.id_archivo };
            a.ids = _ids;
            var results = _archivoProxy.FilesByIds(a);
            return _Response(results);
        }
   

        //[HttpGet]
        //[Route("ValidarUsuarioCualquierRoleProduceVirtual")]
        //public IActionResult ValidarUsuarioCualquierRoleProduceVirtual(string dni, string rol)
        //{
        //    if (dni == null)
        //        return _Response(new StatusResponse<PV.UsuarioResponse>());

        //    var basePath = AppDomain.CurrentDomain.BaseDirectory; //#SDK 2.00
        //    var config = new ConfigurationBuilder()
        //        .SetBasePath(basePath)
        //        .AddJsonFile($"appsettings.{_hostingEnvironment.EnvironmentName}.json", optional: true, reloadOnChange: true).Build();


        //    var sc = new MySecurityConfig();
        //    config.GetSection("SecuritySettings").Bind(sc);

        //    string tipoRol = "I";
        //    int idRol = 0;
        //    var result = _produceVirtual.BuscarUsuarioRolAplicacion(dni, sc.IdApp, idRol, rol.Trim(), tipoRol);
        //    if (result.Success)
        //        return _Response(result);


        //    return _Response(new StatusResponse<PV.UsuarioResponse>());
        //}

        [HttpGet]
        [Route("GetConsultaReniec")]
        public IActionResult GetConsultaReniec(string dni)
        {
            var result = this._reniecServicio.Buscar(dni);
            return _Response(result);
        }
        

        [HttpPost]
        [Route("GetDepartamentos")]
        public IActionResult GetDepartamentos()
        {
            var result = this._comunProxy.GetDepartamento();
            return _Response(result);
        }

        [HttpGet]
        [Route("GetProvincia")]
        public IActionResult GetProvincia(string departamento)
        {
            var result = this._comunProxy.GetProvincia(new UbigeoRequest()
            {
                cod_departamento = departamento
            });
            return _Response(result);
        }
        [HttpGet]
        [Route("GetDistrito")]
        public  IActionResult GetDistrito(string departamento, string provincia)
        {
            var result = this._comunProxy.GetDistrito(new UbigeoRequest()
            {
                cod_departamento = departamento,
                cod_provincia = provincia
            });
            return _Response(result);
        }


        [HttpGet]
        [Route("GetArchivoById")]
        public IActionResult GetArchivoById(ArchivoRequest request)
        {
            var result = this._comunProxy.GetArchivoById(request);
            return _Response(result);
        }

        [HttpPost]
        [Route("RegistrarArchivo")]
        public IActionResult RegistrarArchivo([FromBody] ArchivoRequest request)
        {
            var result = this._comunProxy.RegistrarArchivo(request);
            return _Response(result);
        }

        //[HttpPost, DisableRequestSizeLimit]
        //[Route("SubirArchivo")]
        //public IActionResult SubirArchivo()
        //{
        //    var fileRequest = new ArchivoRequest();
        //    var result = new StatusResponse();
        //    try
        //    {
        //        var file = Request.Form.Files[0];
        //        string folderName = "Archivos";
        //        string webRootPath = _hostingEnvironment.WebRootPath;
        //        string newPath = Path.Combine(webRootPath, folderName);
        //        if (!Directory.Exists(newPath))
        //        {
        //            Directory.CreateDirectory(newPath);
        //        }
        //        if (file.Length > 0)
        //        {
        //            string fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
        //            string fullPath = Path.Combine(newPath, fileName);
        //            using (var stream = new FileStream(fullPath, FileMode.Create))
        //            {
        //                file.CopyTo(stream);

        //                fileRequest.ruta_archivo = fullPath;
        //                fileRequest.es_eliminado = false;
        //                fileRequest.usuario_creacion = "";//pendiente
        //                fileRequest.usuario_modificacion = "";
        //                fileRequest.fecha_modificacion = DateTime.Now;
        //                fileRequest.fecha_creacion = DateTime.Now;
        //                //registrar el archivo
        //                result =  this._comunProxy.RegistrarArchivo(fileRequest);
        //            }
        //        }
        //    }
        //    catch (System.Exception ex)
        //    {
        //        result.Success = false;
        //        result.Messages.Add("FAIL. " + ex.Message);
        //    }

        //    return Json(result);

        //}
        
		[HttpPost]
		[Route("GetRolSSA")]
		public IActionResult GetRolSSA()
		{
			var idApp = _configuration.GetSection("SecuritySettings").GetValue<string>("IdApp");
			var request = new RolSSARequest
			{
				id_aplicacion = Convert.ToInt32(idApp)
			};
			var result = this._comunProxy.GetRolSSA(request);
			return _Response(result);
		}

		[HttpPost]
		[Route("GetPermiso")]
		public IActionResult GetPermiso(PermisoRequest request)
		{
			var result =  this._comunProxy.GetPermiso(request);
			return _Response(result);
		}

        [HttpPost]
        [Route("GetDependencia")]
        public IActionResult GetDependencia()
        {
            var result = this._comunProxy.GetDependencia();
            return _Response(result);
        }

        [HttpPost]
        [Route("GetRegimen")]
        public IActionResult GetRegimen()
        {
            var result = this._comunProxy.GetRegimen();
            return _Response(result);
        }
    }
}