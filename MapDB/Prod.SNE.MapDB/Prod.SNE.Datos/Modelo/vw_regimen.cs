//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Prod.SNE.Datos.Modelo
{
	using System.ComponentModel.DataAnnotations;
	using System.ComponentModel.DataAnnotations.Schema;
    using System;
    using System.Collections.Generic;
    
    [Table("vw_regimen", Schema = "dbo")]
    
    public partial class vw_regimen
    {
    	[Key()]	
    	public int ID_REGIMEN { get; set; }
    	public string DESCRIPCION { get; set; }
    	public Nullable<System.DateTime> AUDIT_MOD { get; set; }
    }
}
