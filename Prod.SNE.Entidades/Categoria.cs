using Release.Helper.Pagination;
using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Entidades
{
    public class CategoriaNoneLisRequest
    {
        public string none { get; set; }
    }
    public class CategoriaBasicRequest: PagedRequest
    {
        public int id_categoria { get; set; }
        public string nombre { get; set; }
        public string es_eliminado { get; set; }
    }

    public class CategoriaEnableDisableRequest
    {
        public int id { get; set; }
        public string name { get; set; }
        public string user_name { get; set; }
        public bool future_status { get; set; }
    }
    public class CategoriasResponseRequest
    {
        public int id_categoria { get; set; }
        public string nombre { get; set; }
        public bool es_eliminado { get; set; }
        public string username { get; set; }
        public List<SubCategoriasResponseRequest> array_sub_categorias { get; set; }
    }

    public class SubCategoriasResponseRequest
    {
        public int id_sub_categoria { get; set; }
        public int id_categoria { get; set;}
        public string nombre { get; set;}
        public bool es_eliminado { get; set;}
    }



    public class CategoriaBasicItemResponse
    {
        public int id_categoria { get; set; }
        public string nombre { get; set; }
        public bool es_eliminado { get; set; }
    }
    public class SubCategoriaBasicItemResponse
    {
        public int id_sub_categoria { get; set; }
        public int id_categoria { get; set; }
        public string nombre { get; set; }
        public bool es_eliminado { get; set; }
    }



}
