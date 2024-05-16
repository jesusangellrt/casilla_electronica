using Prod.SNE.Entidades.Producto;
using Release.Helper;
using Release.Helper.Proxy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Prod.SNE.MVC.Configuracion.Proxys.Comandos
{
    public class ProductoComandoProxy: BaseProxy
    {
        private readonly string _url;

        public ProductoComandoProxy(AppConfig appConfig)
        {
            _url = string.Format("{0}ProductoComando/", appConfig.Urls.URL_SNE_API);
        }
        public async Task<StatusResponse> Registrar(ProductoRequest request)
        {
            var body = this.GetJsonParameters(request);
            return await this.InvokeWebApiAsync<StatusResponse>(HttpMethod.Post, _url + "Guardar", body);
        }
    }
}
