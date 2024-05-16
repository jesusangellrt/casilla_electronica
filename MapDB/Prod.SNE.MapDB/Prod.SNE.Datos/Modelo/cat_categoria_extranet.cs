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
    
    [Table("CAT_CATEGORIA_EXTRANET", Schema = "dbo")]
    
    public partial class cat_categoria_extranet
    {
        
        public cat_categoria_extranet()
        {
            this.cat_sub_categoria_extranet = new HashSet<cat_sub_categoria_extranet>();
        }
    
    	[Key()]	
    	public int id_categoria_extranet { get; set; }
    	public string nombre { get; set; }
    	public bool es_eliminado { get; set; }
    	public System.DateTime fecha_registro { get; set; }
    	public string usuario_registro { get; set; }
    	public Nullable<System.DateTime> fecha_edicion { get; set; }
    	public string usuario_edicion { get; set; }
    
        
        public virtual ICollection<cat_sub_categoria_extranet> cat_sub_categoria_extranet { get; set; }
    }
}
