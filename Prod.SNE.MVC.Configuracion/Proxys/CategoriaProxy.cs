using Prod.SNE.Entidades;
using Release.Helper;
using Release.Helper.Pagination;
using Release.Helper.Proxy;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;

namespace Prod.SNE.MVC.Configuracion.Proxys
{
    public class CategoriaProxy : BaseProxy
    {
        private readonly string _url;
        public CategoriaProxy(AppConfig appConfig)
        {
            _url = string.Format("{0}Categoria/", appConfig.Urls.URL_SNE_API);
        }

        public List<CategoriaBasicItemResponse> GetCategoriaList()
        {
            var algo = new CategoriaNoneLisRequest();
            algo.none = "NONE";
            return this.InvokeWebApi<List<CategoriaBasicItemResponse>>(HttpMethod.Post, _url + "GetCategoriaList", this.GetJsonParameters(algo));
        }

        public PagedResponse<CategoriasResponseRequest> GetCategoriasMntList(CategoriaBasicRequest req)
        {
            return this.InvokeWebApi<PagedResponse<CategoriasResponseRequest>>(HttpMethod.Post, _url + "GetCategoriasMntList", this.GetJsonParameters(req));
        }

        public StatusResponse SaveUpdateCategorias(CategoriasResponseRequest req)
        {
            return this.InvokeWebApi< StatusResponse > (HttpMethod.Post, _url + "SaveUpdateCategorias", this.GetJsonParameters(req));
        }
        public StatusResponse EnableDisableCategoria(CategoriaEnableDisableRequest req)
        {
            return this.InvokeWebApi<StatusResponse>(HttpMethod.Post, _url + "EnableDisableCategoria", this.GetJsonParameters(req));
        }

        public List<SubCategoriaBasicItemResponse> GetSubCategoriaList()
        {
            var algo = new CategoriaNoneLisRequest();
            algo.none = "NONE";
            return this.InvokeWebApi<List<SubCategoriaBasicItemResponse>>(HttpMethod.Post, _url + "GetSubCategoriaList", this.GetJsonParameters(algo));
        }

        public PagedResponse<CategoriasExtranetResponseRequest> GetCategoriasExtranetMntList(CategoriaExtranetBasicRequest req)
        {
            return this.InvokeWebApi<PagedResponse<CategoriasExtranetResponseRequest>>(HttpMethod.Post, _url + "GetCategoriasExtranetMntList", this.GetJsonParameters(req));
        }

        public StatusResponse EnableDisableCategoriaExtranet(CategoriaExtranetEnableDisableRequest req)
        {
            return this.InvokeWebApi<StatusResponse>(HttpMethod.Post, _url + "EnableDisableCategoriaExtranet", this.GetJsonParameters(req));
        }

        public StatusResponse SaveUpdateCategoriasExtranet(CategoriasExtranetResponseRequest req)
        {
            return this.InvokeWebApi<StatusResponse>(HttpMethod.Post, _url + "SaveUpdateCategoriasExtranet", this.GetJsonParameters(req));
        }

        public List<CategoriaExtranetBasicItemResponse> GetCategoriaExtranetList()
        {
            var algo = new CategoriaNoneLisRequest();
            algo.none = "NONE";
            return this.InvokeWebApi<List<CategoriaExtranetBasicItemResponse>>(HttpMethod.Post, _url + "GetCategoriaExtranetList", this.GetJsonParameters(algo));
        }

        public List<SubCategoriaExtranetBasicItemResponse> GetSubCategoriaExtranetList()
        {
            var algo = new CategoriaNoneLisRequest();
            algo.none = "NONE";
            return this.InvokeWebApi<List<SubCategoriaExtranetBasicItemResponse>>(HttpMethod.Post, _url + "GetSubCategoriaExtranetList", this.GetJsonParameters(algo));
        }
    }
}