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
    
    [Table("DAT_RESPUESTA_PREGUNTA", Schema = "dbo")]
    
    public partial class dat_respuesta_pregunta
    {
    	[Key()]	
    	public int id_respuesta_pregunta { get; set; }
    	public int id_respuesta { get; set; }
    	public string json_respuestas { get; set; }
    	public System.DateTime fecha_creacion { get; set; }
    	public string usuario_creacion { get; set; }
    	public Nullable<System.DateTime> fecha_modificacion { get; set; }
    	public string usuario_modificacion { get; set; }
    	public Nullable<int> id_pregunta { get; set; }
    
        public virtual dat_respuesta dat_respuesta { get; set; }
        public virtual dat_encuesta_pregunta dat_encuesta_pregunta { get; set; }
    }
}
