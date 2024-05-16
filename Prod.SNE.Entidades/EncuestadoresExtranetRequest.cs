using Release.Helper.Pagination;
using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Entidades
{
    public class EncuestadoresExtranetRequest : PagedRequest
    {
        public int? id_tipo_persona { get; set; }
        public string numero_documento { get; set; }
        public string codigo_departamento { get; set; }
        public string codigo_provincia { get; set; }
        public string codigo_distrito { get; set; }
        public string razon_social { get; set; }
    }
}
