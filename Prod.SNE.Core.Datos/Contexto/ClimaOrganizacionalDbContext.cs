using Microsoft.EntityFrameworkCore;
using Prod.SNE.Datos.Modelo;
using Release.Helper.Data.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Prod.SNE.Core.Datos.Contexto
{
    public partial class ClimaOrganizacionalDbContext: DbContext, IDbContext
    {
        private readonly string _connstr;

        public ClimaOrganizacionalDbContext(string connstr)
        {
            this._connstr = connstr;
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
        public ClimaOrganizacionalDbContext(DbContextOptions<ClimaOrganizacionalDbContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!string.IsNullOrWhiteSpace(this._connstr))
            {
                optionsBuilder.UseSqlServer(this._connstr, b => b.UseRowNumberForPaging());
            }
        }
        public virtual DbSet<cat_categoria> cat_categoria { get; set; }
        public virtual DbSet<cat_configuracion_inicial> cat_configuracion_inicial { get; set; }
        public virtual DbSet<cat_sub_categoria> cat_sub_categoria { get; set; }
        public virtual DbSet<dat_encuesta> dat_encuesta { get; set; }
        public virtual DbSet<dat_encuesta_agradecimiento> dat_encuesta_agradecimiento { get; set; }
        public virtual DbSet<dat_encuesta_bienvenida> dat_encuesta_bienvenida { get; set; }
        public virtual DbSet<dat_encuesta_encuestado> dat_encuesta_encuestado { get; set; }
        public virtual DbSet<dat_encuesta_pregunta> dat_encuesta_pregunta { get; set; }
        public virtual DbSet<dat_respuesta> dat_respuesta { get; set; }
        public virtual DbSet<dat_respuesta_pregunta> dat_respuesta_pregunta { get; set; }
        public virtual DbSet<vw_aplicacion> vw_aplicacion { get; set; }
        public virtual DbSet<vw_dependencia> vw_dependencia { get; set; }
        public virtual DbSet<vw_persona> vw_persona { get; set; }
        public virtual DbSet<vw_regimen> vw_regimen { get; set; }
        public virtual DbSet<vw_rol> vw_rol { get; set; }
        public virtual DbSet<vw_trabajador> vw_trabajador { get; set; }
        public virtual DbSet<cat_estado_encuesta> cat_estado_encuesta { get; set; }
        public virtual DbSet<cat_estado_respuesta> cat_estado_respuesta { get; set; }
        public virtual DbSet<cat_sexos> cat_sexos { get; set; }
        public virtual DbSet<cat_tipo_archivo> cat_tipo_archivo { get; set; }
        public virtual DbSet<cat_tipo_maestro_institucional> cat_tipo_maestro_institucional { get; set; }
        public virtual DbSet<cat_tipo_pregunta> cat_tipo_pregunta { get; set; }
        public virtual DbSet<cat_archivo_tipo_archivo> cat_archivo_tipo_archivo { get; set; }
        public virtual DbSet<cat_tipo_fecha> cat_tipo_fecha { get; set; }
        public virtual DbSet<cat_dirigido_notificacion> cat_dirigido_notificacion { get; set; }
        public virtual DbSet<cat_categoria_extranet> cat_categoria_extranet { get; set; }
        public virtual DbSet<cat_sub_categoria_extranet> cat_sub_categoria_extranet { get; set; }
        public virtual DbSet<vw_departamento> vw_departamento { get; set; }
        public virtual DbSet<vw_distrito> vw_distrito { get; set; }
        public virtual DbSet<vw_provincia> vw_provincia { get; set; }
        public virtual DbSet<vw_usuario_rol_intranet> vw_usuario_rol_intranet { get; set; }

    }
}
