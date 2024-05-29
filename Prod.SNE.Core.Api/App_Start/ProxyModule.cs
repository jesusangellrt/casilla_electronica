using Autofac;
using Microsoft.Extensions.Configuration;

namespace Prod.SNE.Servicios.Host
{
    public class ProxyModule : Autofac.Module
    {
        public static IConfiguration Configuration;

        protected override void Load(ContainerBuilder builder)
        {

            //Proxy
            var servicesURL = Configuration.GetSection("ServicesURL");

            //GA
            builder.RegisterType<Prod.MS.GestorArchivos.Proxy.ArchivoProxy>().WithParameter("baseUrl", servicesURL.GetValue<string>("URL_GA_UI"));

            base.Load(builder);
        }
    }
}
