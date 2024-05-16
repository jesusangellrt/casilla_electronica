using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Newtonsoft.Json;
using Prod.SNE.Entidades;
using Prod.SNE.MVC.Configuracion;
using Prod.SNE.MVC.Helpers;
using Prod.SNE.MVC.Models;
using Release.Helper.WebKoMvc.Controllers;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using Http = Microsoft.AspNetCore.Http;

namespace Prod.SNE.MVC.Controllers
{
    public class CustomBaseController : BaseController
    {
        public static Prod.Seguridad.Auth.Model.CanjearTokenResponse UserAuth;
        public string ActiveUserName =>
            GetUserInfo<Seguridad.Auth.Model.CanjearTokenResponse>().Usuario.UserName;
        public static List<PermisoResponse> UserPermisos;

        public string SpaModule = HtmlHelpers.LoadSpaScripts();

        public override void OnActionExecuted(ActionExecutedContext filterContext)
        {
            base.OnActionExecuted(filterContext);
            UserAuth = GetUser();
            UserPermisos = GetPermisos();
        }
        protected ActionResult _Response(Object data = null, int statuscode = Http.StatusCodes.Status200OK, string msg = null, Object errors = null)
        {
            var response = new
            {
                statuscode,
                msg,
                data,
                errors
            };
            Response.StatusCode = statuscode;

            return new JsonResult(response);
        }
        protected string GetEncodedConfig(AppConfig appConfig)
        {
            var JsonConfig = JsonConvert.SerializeObject(appConfig);
            var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(JsonConfig);
            return System.Convert.ToBase64String(plainTextBytes);
        }

        protected string GetEncodedFileConfig(FileSettings fileSetting)
        {
            var JsonConfig = JsonConvert.SerializeObject(fileSetting);
            var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(JsonConfig);
            return System.Convert.ToBase64String(plainTextBytes);
        }
        protected Prod.Seguridad.Auth.Model.CanjearTokenResponse GetUser()
        {
 
            var claims = User.Identity as ClaimsIdentity;
            var u = new Prod.Seguridad.Auth.Model.CanjearTokenResponse();
            var user = JsonConvert.DeserializeObject<ADUser>(claims.FindFirst("user").Value);
            var roles = user.roles;

            u.RolesUsuario = roles.ToArray();
            u.Usuario = new Seguridad.Auth.Model.Usuario
            {
                ApellidoMaterno = "",
                ApellidoPaterno = user.ApellidoPaterno,
                CodDependencia = user.CodDependencia,
                CodEntidad = 1,
                CorreoElectronico = claims.FindFirst(ClaimTypes.Email).Value,
                DescDependencia = null,
                IdDependencia = user.IdDependencia,
                IdUsuario = user.IdUsuario,
                Nombres = user.Nombres,
                NumeroDocumento = user.NumeroDocumento,
                RUC = null,
                RazonSocial = null,                
                TipoUsuario = "I",
                UserName = claims.FindFirst(ClaimTypes.WindowsAccountName).Value,

            };
            return u;
        }
        protected List<PermisoResponse> GetPermisos()
        {
            return null;
        }

        protected string GetEncoded(object _object)
        {
            var JsonUser = JsonConvert.SerializeObject(_object);
            var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(JsonUser);
            return System.Convert.ToBase64String(plainTextBytes);
        }

        protected string getIP()
        {
            var request = (HttpWebRequest)WebRequest.Create("https://api.ipify.org/");
            request.UserAgent = "curl"; string publicIPAddress; request.Method = "GET";
            using (WebResponse response = request.GetResponse())
            {
                using (var reader = new StreamReader(response.GetResponseStream()))
                {
                    publicIPAddress = reader.ReadToEnd();
                }
            }
            return publicIPAddress.Replace("\n", "");
            /*
            string externalIP = "";
            externalIP = (new System.Net.WebClient()).DownloadString("http://checkip.dyndns.org/");
            externalIP = (new System.Text.RegularExpressions.Regex(@"\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}")).Matches(externalIP)[0].ToString();
            return externalIP;*/
        }
    }
}
