using Microsoft.AspNetCore.Mvc;
using Prod.SNE.Entidades;
using Prod.SNE.MVC.Configuracion.Proxys;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;



namespace Prod.SNE.MVC.Controllers
{
    [Route("api/categoria")]
    public class CategoriaController : CustomBaseController
    {
        private readonly CategoriaProxy _CategoriaProxy;
        public CategoriaController(CategoriaProxy _CategoriaProxy)
        {
            this._CategoriaProxy = _CategoriaProxy;
        }

        [HttpGet]
        [Route("GetCategoriaList")]
        public IActionResult GetCategoriaList()
        {
            var result = _CategoriaProxy.GetCategoriaList();
            return _Response(result);
        }

        [HttpPost]
        [Route("GetCategoriasMntList")]
        public IActionResult GetCategoriasMntList([FromBody] CategoriaBasicRequest req)
        {
            var result = _CategoriaProxy.GetCategoriasMntList(req);
            return _Response(result);
        }

        [HttpPost]
        [Route("SaveUpdateCategorias")]
        public IActionResult SaveUpdateCategorias([FromBody] CategoriasResponseRequest req)
        {
            var user = this.GetUser().Usuario;
            req.username = user.UserName;
            var result = _CategoriaProxy.SaveUpdateCategorias(req);
            return _Response(result);
        }


        [HttpGet]
        [Route("GetSubCategoriaList")]
        public IActionResult GetSubCategoriaList()
        {
            var result = _CategoriaProxy.GetSubCategoriaList();
            return _Response(result);
        }


        [HttpPost]
        [Route("EnableDisableCategoria")]
        public IActionResult EnableDisableCategoria([FromBody] CategoriaEnableDisableRequest req)
        {
            var user = this.GetUser().Usuario;
            req.user_name = user.UserName;
            var result = _CategoriaProxy.EnableDisableCategoria(req);
            return _Response(result);
        }

        [HttpPost]
        [Route("GetCategoriasExtranetMntList")]
        public IActionResult GetCategoriasExtranetMntList([FromBody] CategoriaExtranetBasicRequest req)
        {
            var result = _CategoriaProxy.GetCategoriasExtranetMntList(req);
            return _Response(result);
        }

        [HttpPost]
        [Route("EnableDisableCategoriaExtranet")]
        public IActionResult EnableDisableCategoriaExtranet([FromBody] CategoriaExtranetEnableDisableRequest req)
        {
            var user = this.GetUser().Usuario;
            req.user_name = user.UserName;
            var result = _CategoriaProxy.EnableDisableCategoriaExtranet(req);
            return _Response(result);
        }

        [HttpPost]
        [Route("SaveUpdateCategoriasExtranet")]
        public IActionResult SaveUpdateCategoriasExtranet([FromBody] CategoriasExtranetResponseRequest req)
        {
            var user = this.GetUser().Usuario;
            req.username = user.UserName;
            var result = _CategoriaProxy.SaveUpdateCategoriasExtranet(req);
            return _Response(result);
        }

        [HttpGet]
        [Route("GetCategoriaExtranetList")]
        public IActionResult GetCategoriaExtranetList()
        {
            var result = _CategoriaProxy.GetCategoriaExtranetList();
            return _Response(result);
        }

        [HttpGet]
        [Route("GetSubCategoriaExtranetList")]
        public IActionResult GetSubCategoriaExtranetList()
        {
            var result = _CategoriaProxy.GetSubCategoriaExtranetList();
            return _Response(result);
        }

    }
}