using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Entidades
{
    public partial class ArchivoResponse
    {
        public int id_archivo { get; set; }
        public string ruta_archivo { get; set; }
        public Nullable<bool> es_eliminado { get; set; }
        public string usuario_creacion { get; set; }
        public string usuario_modificacion { get; set; }
        public Nullable<System.DateTime> fecha_modificacion { get; set; }
        public Nullable<System.DateTime> fecha_creacion { get; set; }

        public string status { set; get; }

    }
}
