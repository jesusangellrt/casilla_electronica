using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Prod.SNE.MVC.Configuracion;
using Prod.SNE.Entidades;
using Prod.SNE.MVC.Configuracion.Proxys;
using Microsoft.AspNetCore.Mvc.Rendering;
using Prod.SNE.MVC.Helpers;

namespace Prod.SNE.MVC.Controllers
{
    [ResponseCache(NoStore = true, Duration = -1)]
    public class HomeController : CustomBaseController
    {
        private readonly IHtmlHelper _IHtmlHelper;
        private readonly IConfiguration _configuration;

        private readonly PermisoProxy _permisoProxy;
        public HomeController(
            IConfiguration Configuration,
            IHtmlHelper _IHtmlHelper,
            PermisoProxy _permisoProxy)
        {
            this._configuration = Configuration;
            this._permisoProxy = _permisoProxy;
            this._IHtmlHelper = _IHtmlHelper;
        }


        [HttpGet]
        public IActionResult Index()
        {
            var user = this.GetUser();
            var roles = string.Join(",", user.RolesUsuario.Select(x => x.DescRol));

            PermisoRolRequest _PermisoRolRequest = new PermisoRolRequest();
            _PermisoRolRequest.roles = roles;
            var permisos = this._permisoProxy.GetPermisoPorRolList(_PermisoRolRequest);

            var userEncode = this.GetEncoded(user);
            ViewBag.user = userEncode;

            var permisoEncode = this.GetEncoded(permisos);
            ViewBag.permiso = permisoEncode;

            var appConfig = new AppConfig();
            _configuration.GetSection("AppConfig").Bind(appConfig);

            var fileSettings = new FileSettings();
            _configuration.GetSection("FileSettings").Bind(fileSettings);

            var securitySettings = new SecuritySettings();
            _configuration.GetSection("SecuritySettings").Bind(securitySettings);

            ViewBag.ns = this.GetEncodedConfig(appConfig);
            ViewBag.fileConfig = this.GetEncodedFileConfig(fileSettings);
            ViewBag.loginPath = securitySettings.LoginPath;
            ViewBag.SpaModule = this.SpaModule;
            string algo = this.SpaModule;

            return View();
        }
    }
}
