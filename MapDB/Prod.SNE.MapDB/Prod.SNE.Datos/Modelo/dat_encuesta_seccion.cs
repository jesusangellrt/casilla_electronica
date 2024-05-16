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
    
    [Table("DAT_ENCUESTA_SECCION", Schema = "dbo")]
    
    public partial class dat_encuesta_seccion
    {
    	[Key()]	
    	public int id_encuesta_seccion { get; set; }
    	public int id_encuesta { get; set; }
    	public string seccion { get; set; }
    	public System.DateTime fecha_creacion { get; set; }
    	public string usuario_creacion { get; set; }
    	public Nullable<System.DateTime> fecha_modificacion { get; set; }
    	public string usuario_modificacion { get; set; }
    	public bool es_eliminado { get; set; }
    	public int orden { get; set; }
    
        public virtual dat_encuesta dat_encuesta { get; set; }
    }
}
