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
    
    [Table("DAT_RESPUESTA", Schema = "dbo")]
    
    public partial class dat_respuesta
    {
        
        public dat_respuesta()
        {
            this.dat_respuesta_pregunta = new HashSet<dat_respuesta_pregunta>();
        }
    
    	[Key()]	
    	public int id_respuesta { get; set; }
    	public int id_encuesta { get; set; }
    	public Nullable<int> id_trabajador { get; set; }
    	public Nullable<int> id_dependendia { get; set; }
    	public Nullable<int> id_regimen { get; set; }
    	public Nullable<int> edad { get; set; }
    	public Nullable<int> id_sexo { get; set; }
    	public int nro_pregunta_actual { get; set; }
    	public int id_estado { get; set; }
    	public bool es_eliminado { get; set; }
    	public System.DateTime fecha_creacion { get; set; }
    	public string usuario_creacion { get; set; }
    	public Nullable<System.DateTime> fecha_modificacion { get; set; }
    	public string usuario_modificacion { get; set; }
    	public string json_paginado { get; set; }
    	public Nullable<int> nro_seccion_actual { get; set; }
    	public string ruc_administrado { get; set; }
    
        
        public virtual ICollection<dat_respuesta_pregunta> dat_respuesta_pregunta { get; set; }
        public virtual cat_estado_respuesta cat_estado_respuesta { get; set; }
        public virtual dat_encuesta dat_encuesta { get; set; }
    }
}
