using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Entidades
{
    public class BasicResponse
    {
        public bool STATUS { set; get; }
        public string MSG { set; get; }
        public int? RESULT_IDEN { set; get; }
    }

    public class BasicUpdateRespuestaResponse
    {
        public bool STATUS { set; get; }
        public string MSG { set; get; }
        public DateTime fecha_envio { set; get; }
    }

    public class BasicDeleteRequest
    {
        public int id{ set; get; }
        public string table { set; get; } 
        public string user_name { set; get; }
    }


    public class BasicValRequest
    {
        public string valor { set; get; }
    }
}
