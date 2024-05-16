using System;
using System.Collections.Generic;

namespace Prod.SNE.Entidades
{
    public partial class SelectResponse
    {
        public int? id { get; set; }
        public string nombre { get; set; }
        public string codigo { get; set; }
    }

    public partial class BasicSelectResponse
    {
        public int id { get; set; }
        public string nombre { get; set; }
    }

    public partial class BasicGroupedSelectResponse
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public int? CODDEP_RESPONSABLE { set; get; }
        public bool? ES_DEPGENERAL { set; get; }
        public int? ID_TIPO_DEPENDENCIA {set;get;}
    }
}
