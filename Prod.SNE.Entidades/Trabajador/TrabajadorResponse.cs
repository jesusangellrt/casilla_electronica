using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Entidades.Trabajador
{
    public class TrabajadorResponse
    {
        public int codigo_trabajador { get; set; }
        public int codigo_dependencia { get; set; }
        public string apellidos_trabajador { get; set; }
        public string nombres_trabajador { get; set; }
        public string condicion { get; set; }
        public string email { get; set; }
        public string fecha_nacimiento { get; set; }
        public string identificador { get; set; }
        public string dni { get; set; }
        public string telefono { get; set; }
        public string estado { get; set; }
        public string genero { get; set; }
        public string dominio { get; set; }
        public string siglas_dependencia { get; set; }
        public string nombre_dependencia { get; set; }
        public List<Rol> roles { get; set; }

    }
    public class Rol
    {
        public int IdRol { get; set; }
        public string DescRol { get; set; }
    }
}
