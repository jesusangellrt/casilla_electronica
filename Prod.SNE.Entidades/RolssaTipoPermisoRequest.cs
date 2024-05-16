namespace Prod.SNE.Entidades
{
    using Release.Helper.Pagination;
    using System;
    using System.Collections.Generic;
    public class RolssaTipoPermisoRequest : PagedRequest
    {
        public int permiso_id { get; set; }
        public string identificador_ssa { get; set; }
        public virtual PermisoRequest permiso { get; set; }
    }
}
