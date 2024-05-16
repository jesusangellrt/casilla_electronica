namespace Prod.SNE.Entidades
{
    using Release.Helper.Pagination;
    using System;
    using System.Collections.Generic;
    public class PermisoRequest : PagedRequest
    {
        public int permiso_id { get; set; }
        public string codigo { get; set; }
        public string nombre { get; set; }
        public bool es_eliminado { get; set; }
        public string usuario_creacion { get; set; }
        public string usuario_modificacion { get; set; }
        public Nullable<System.DateTime> fecha_creacion { get; set; }
        public Nullable<System.DateTime> fecha_modificacion { get; set; }
        public virtual List<RolssaTipoPermisoRequest> rolssa_tiene_permiso { get; set; }
    }

    public class PermisoRolRequest { 
        public string roles { set; get; }
    }
}
