using System.Collections.Generic;
namespace Prod.SNE.MVC.Configuracion
{
    public class FileSettings
    {
        public int PesoMaximoMB { get; set; }
        public List<string> Extensiones { get; set; }
        public int MaxVersionArchivoHistorico { get; set; }
    }
}
