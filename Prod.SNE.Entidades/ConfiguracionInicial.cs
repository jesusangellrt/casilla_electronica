using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Entidades
{
    public class ConfiguracionInicialResponse
    {
        public int id_configuracion { set; get; }
        public string texto_bienvenida{ set; get; }
        public string iden_audio_fondo{ set; get; }
        public int id_tipo_archivo{ set; get; }
        public string tipo_archivo_name { set; get; }
        public string url_video{ set; get; }
        public string iden_imagen{ set; get; }
        public bool es_eliminado{ set; get; }

    }
    public class ConfiguracionInicialSaveUpdateRequest
    {
        public int id_configuracion { set; get; }
        public string texto_bienvenida { set; get; }
        public string iden_audio_fondo { set; get; }
        public int id_tipo_archivo { set; get; }
        public string tipo_archivo_name { set; get; }
        public string url_video { set; get; }
        public string iden_imagen { set; get; }
        public bool es_eliminado { set; get; }
        public string user_name { set; get; }
        public string ip { set; get; }
        public int tipo_encuesta { get; set; }
    }
}
