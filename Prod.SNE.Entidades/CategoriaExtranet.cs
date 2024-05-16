using Release.Helper.Pagination;
using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Entidades
{
    public class CategoriaExtranetNoneLisRequest
    {
        public string none { get; set; }
    }
    public class CategoriaExtranetBasicRequest: PagedRequest
    {
        public int id_categoria_extranet { get; set; }
        public string nombre { get; set; }
        public string es_eliminado { get; set; }
    }

    public class CategoriaExtranetEnableDisableRequest
    {
        public int id { get; set; }
        public string name { get; set; }
        public string user_name { get; set; }
        public bool future_status { get; set; }
    }
    public class CategoriasExtranetResponseRequest
    {
        public int id_categoria_extranet { get; set; }
        public string nombre { get; set; }
        public bool es_eliminado { get; set; }
        public string username { get; set; }
        public List<SubCategoriasExtranetResponseRequest> array_sub_categorias_extranet { get; set; }
    }

    public class SubCategoriasExtranetResponseRequest
    {
        public int id_sub_categoria_extranet { get; set; }
        public int id_categoria_extranet { get; set;}
        public string nombre { get; set;}
        public bool es_eliminado { get; set;}
    }



    public class CategoriaExtranetBasicItemResponse
    {
        public int id_categoria_extranet { get; set; }
        public string nombre { get; set; }
        public bool es_eliminado { get; set; }
    }
    public class SubCategoriaExtranetBasicItemResponse
    {
        public int id_sub_categoria_extranet { get; set; }
        public int id_categoria_extranet { get; set; }
        public string nombre { get; set; }
        public bool es_eliminado { get; set; }
    }



}
