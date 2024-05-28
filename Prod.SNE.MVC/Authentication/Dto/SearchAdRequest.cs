using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Prod.SNE.MVC.Authentication.Dto
{
    public class SearchAdRequest
    {

        public string? ldapServer { get; set; }
        public int ldapPort { get; set; }
        public string? ldapUser { get; set; }
        public string? ldapPassword { get; set; }
        public string? Username { get; set; }
        public string? Password { get; set; }
        public string? domainForAD { get; set; }
        public string? username { get; set; }
        public string? password { get; set; }
        public string? targetOU { get; set; }
        public string? searchBase { get; set; }
        public string? filterSearch { get; set; }
        public string[]? attributeList { get; set; }
        public int tipo_usuario { get; set; }
    }
}
