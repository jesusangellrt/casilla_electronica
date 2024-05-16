using Microsoft.AspNetCore.Mvc;
using Prod.SNE.Core.Aplicacion.Interfaces;
using Prod.SNE.Entidades;
using Release.Helper;
using Release.Helper.Pagination;
using System.Collections.Generic;

namespace Prod.SNE.Core.Controllers
{
    [Route("[controller]")]
    public class CategoriaController : Controller
    {
        private readonly ICategoriaAplicacion _CategoriaAplicacion;
        public CategoriaController(ICategoriaAplicacion __CategoriaAplicacion)
        {
            _CategoriaAplicacion = __CategoriaAplicacion;
        }

        [HttpPost]
        [Route("GetCategoriaList")]
        public List<CategoriaBasicItemResponse> GetCategoriaList([FromBody]CategoriaNoneLisRequest req) {
            var o = _CategoriaAplicacion.GetCategoriaList(req);
            return o;
        }

        [HttpPost]
        [Route("GetSubCategoriaList")]
        public List<SubCategoriaBasicItemResponse> GetSubCategoriaList([FromBody] CategoriaNoneLisRequest req)
        {
            var o = _CategoriaAplicacion.GetSubCategoriaList(req);
            return o;
        }

        [HttpPost]
        [Route("GetCategoriasMntList")]
        public PagedResponse<CategoriasResponseRequest> GetCategoriasMntList([FromBody] CategoriaBasicRequest req)
        {
            var o = _CategoriaAplicacion.GetCategoriasMntList(req);
            return o;
        }

        [HttpPost]
        [Route("SaveUpdateCategorias")]
        public StatusResponse SaveUpdateCategorias([FromBody] CategoriasResponseRequest req)
        {
            var o = _CategoriaAplicacion.SaveUpdateCategorias(req);
            return o;
        }

        [HttpPost]
        [Route("EnableDisableCategoria")]
        public StatusResponse EnableDisableCategoria([FromBody] CategoriaEnableDisableRequest req)
        {
            var o = _CategoriaAplicacion.EnableDisableCategoria(req);
            return o;
        }

        [HttpPost]
        [Route("GetCategoriasExtranetMntList")]
        public PagedResponse<CategoriasExtranetResponseRequest> GetCategoriasExtranetMntList([FromBody] CategoriaExtranetBasicRequest req)
        {
            var o = _CategoriaAplicacion.GetCategoriasExtranetMntList(req);
            return o;
        }

        [HttpPost]
        [Route("EnableDisableCategoriaExtranet")]
        public StatusResponse EnableDisableCategoriaExtranet([FromBody] CategoriaExtranetEnableDisableRequest req)
        {
            var o = _CategoriaAplicacion.EnableDisableCategoriaExtranet(req);
            return o;
        }

        [HttpPost]
        [Route("SaveUpdateCategoriasExtranet")]
        public StatusResponse SaveUpdateCategoriasExtranet([FromBody] CategoriasExtranetResponseRequest req)
        {
            var o = _CategoriaAplicacion.SaveUpdateCategoriasExtranet(req);
            return o;
        }

        [HttpPost]
        [Route("GetCategoriaExtranetList")]
        public List<CategoriaExtranetBasicItemResponse> GetCategoriaExtranetList([FromBody] CategoriaNoneLisRequest req)
        {
            var o = _CategoriaAplicacion.GetCategoriaExtranetList(req);
            return o;
        }

        [HttpPost]
        [Route("GetSubCategoriaExtranetList")]
        public List<SubCategoriaExtranetBasicItemResponse> GetSubCategoriaExtranetList([FromBody] CategoriaNoneLisRequest req)
        {
            var o = _CategoriaAplicacion.GetSubCategoriaExtranetList(req);
            return o;
        }
    }
}

