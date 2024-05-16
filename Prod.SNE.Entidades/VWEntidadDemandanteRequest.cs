using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Entidades
{
    using Release.Helper.Pagination;
    using System;
    using System.Collections.Generic;
    public partial class VWEntidadDemandanteRequest : PagedRequest
    {
        public string ruc { get; set; }
        public string razon_social { get; set; }
        public int id_entidad_estado { get; set; }
        public bool? estado { get; set; }
        public string abreviatura { get; set; }
    }
}
