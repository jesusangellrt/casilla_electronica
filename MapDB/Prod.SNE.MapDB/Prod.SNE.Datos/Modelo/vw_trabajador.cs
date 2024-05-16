//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Prod.SNE.Datos.Modelo
{
	using System.ComponentModel.DataAnnotations;
	using System.ComponentModel.DataAnnotations.Schema;
    using System;
    using System.Collections.Generic;
    
    [Table("vw_trabajador", Schema = "dbo")]
    
    public partial class vw_trabajador
    {
    	[Key()]	
    	public int CODIGO_TRABAJADOR { get; set; }
    	public int CODIGO_DEPENDENCIA { get; set; }
    	public string APELLIDOS_TRABAJADOR { get; set; }
    	public string NOMBRES_TRABAJADOR { get; set; }
    	public string CONDICION { get; set; }
    	public string EMAIL { get; set; }
    	public string FECHA_NACIMIENTO { get; set; }
    	public string IDENTIFICADOR { get; set; }
    	public string DNI { get; set; }
    	public string TELEFONO { get; set; }
    	public string ESTADO { get; set; }
    	public Nullable<int> CODDEP { get; set; }
    	public Nullable<System.DateTime> AUDIT_MOD { get; set; }
    	public Nullable<System.DateTime> AUDIT_CREA { get; set; }
    	public Nullable<int> PUBLICADO { get; set; }
    	public Nullable<int> IDPROFESION { get; set; }
    	public Nullable<int> IDSUBDEPENDENCIA { get; set; }
    	public Nullable<int> CODDEP_PUB { get; set; }
    	public string CODIGO_MAESTRO { get; set; }
    	public Nullable<int> DIRECTOR { get; set; }
    	public Nullable<int> PUBLICADO_INTRANET { get; set; }
    	public string ANEXO { get; set; }
    	public string PUBLICADO_CONTACTO { get; set; }
    	public string PASSWORD { get; set; }
    	public string USUARIO_CREACION { get; set; }
    	public string USUARIO_MODIFICACION { get; set; }
    	public string NUMERO_TARJETA { get; set; }
    	public Nullable<int> ID_REGIMEN { get; set; }
    	public string DOMINIO { get; set; }
    	public string security_stamp { get; set; }
    	public Nullable<System.DateTime> lockout_end_date { get; set; }
    	public bool lockout_enable { get; set; }
    	public int access_failed_count { get; set; }
    	public string GENERO { get; set; }
    }
}
