using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Prod.SNE.MVC.Configuracion
{
    public class AppConfig
    {
        public Urls Urls { get; set; }
        public Roles Roles { get; set; }
    }
    public class MySecurityConfig
    {
        public int IdApp { get; set; }
    }
    public class Urls
    {
        public string URL_GA_UI { get; set; }
        public string URL_SNE_API { get; set; }

        public string URL_RENIEC_API { get; set; }
        public string URL_ST_PRODUCE_VIRTUAL { get; set; }
        public string URL_EXPEDIENTE_SITRADOC_API { get; set; }
    }

    public class Roles
    {
        public string Administrado { get; set; }
        public string Encuestado { get; set; }
        public string SuperAdministrador { get; set; }
        public string AdministradoIden { get; set; }
        public string EncuestadoIden { get; set; }
        public string SuperAdministradorIden { get; set; }
        public string AdministradoExtranet { get; set; }
        public string AdministradoExtranetIden { get; set; }
        public string EncuestadoExtranet { get; set; }
        public string EncuestadoExtranetIden { get; set; }
    }
}
