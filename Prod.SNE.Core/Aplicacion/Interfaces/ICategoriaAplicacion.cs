using Prod.SNE.Entidades;
using Release.Helper;
using Release.Helper.Pagination;
using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Core.Aplicacion.Interfaces
{
    public interface ICategoriaAplicacion
    {
        List<CategoriaBasicItemResponse> GetCategoriaList(CategoriaNoneLisRequest req);
        List<SubCategoriaBasicItemResponse> GetSubCategoriaList(CategoriaNoneLisRequest req);
        PagedResponse<CategoriasResponseRequest> GetCategoriasMntList(CategoriaBasicRequest req);
        StatusResponse SaveUpdateCategorias(CategoriasResponseRequest req);
        StatusResponse EnableDisableCategoria(CategoriaEnableDisableRequest req);
        PagedResponse<CategoriasExtranetResponseRequest> GetCategoriasExtranetMntList(CategoriaExtranetBasicRequest req);
        StatusResponse EnableDisableCategoriaExtranet(CategoriaExtranetEnableDisableRequest req);
        StatusResponse SaveUpdateCategoriasExtranet(CategoriasExtranetResponseRequest req);
        List<CategoriaExtranetBasicItemResponse> GetCategoriaExtranetList(CategoriaNoneLisRequest req);
        List<SubCategoriaExtranetBasicItemResponse> GetSubCategoriaExtranetList(CategoriaNoneLisRequest req);
    }
}


