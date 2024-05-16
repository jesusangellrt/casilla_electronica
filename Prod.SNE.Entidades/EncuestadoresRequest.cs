using Release.Helper.Pagination;
using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Entidades
{
    public class EncuestadoresRequest : PagedRequest
    {
        public string dni { get; set; }
        public string nombres_apellidos { get; set; }
        public int? codigo_dependencia { get; set; }
        public int? id_regimen { get; set; }
    }
}
