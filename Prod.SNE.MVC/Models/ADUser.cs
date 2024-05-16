using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Prod.SNE.MVC.Models
{
    public class ADUser : Seguridad.Auth.Model.Usuario
    {
        public Guid objectGUID { get; set; }

        public string sAMAccountName { get; set; } = string.Empty;
        public string displayName { get; set; } = string.Empty;
        public string mail { get; set; } = string.Empty;
        public DateTime whenCreated { get; set; }
        public List<string> memberOf { get; set; } = new List<string>();
        public List<Seguridad.Auth.Model.Rol> roles { get; set; }
    }
}
