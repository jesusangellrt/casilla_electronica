using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Entidades
{
    public class UsuarioIntranetResponse
    {
        public UsuarioIntranetResponse()
        {
            this.Roles = new List<RolesResponse>();
        }
        public bool IsValido { get; set; }
        public string mensaje { get; set; }
        public string datos { get; set; }
        public string Apellidos { get; set; }
        public string Nombres { get; set; }
        public string Dni { get; set; }
        public int Id { get; internal set; }
        public List<RolesResponse> Roles { get; set; }
    }
    public class RolesResponse
    {
        public int id_rol { get; set; }
        public string nombre_rol { get; set; }

    }
}
