using Microsoft.AspNetCore.Mvc;
using Prod.SNE.Entidades;
using Prod.MS.GestorArchivos.Entities;
using Prod.MS.GestorArchivos.Proxy;

namespace Prod.SNE.MVC.Controllers
{
    [Route("api/archivo")]
    public class ArchivoController : CustomBaseController
    {
        private readonly ArchivoProxy _ArchivoProxy;
        public ArchivoController(
        ){
        }

        [HttpPost]
        [Route("verArchivo")]
        public IActionResult verArchivo([FromBody]ArchivoBasicRequest req)
        {
            var dat = req;
            var a = new ArchivosByIdsRequest();
            string[] _ids = new string[1] { req.id_archivo };
            a.ids = _ids;
            return _Response(dat);

        }

    }
}