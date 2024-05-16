using Autofac;
using Microsoft.Extensions.Configuration;
using Prod.SNE.Core.Api.App_Start;

namespace Prod.SNE.Servicios.Host
{
    public class BootstrapperContainer
    {
        public static IConfiguration Configuration;

        public static void Register(ContainerBuilder builder)
        {
            //Proxy
            ProxyModule.Configuration = Configuration;
            builder.RegisterModule<ProxyModule>();

            //Add Context
            ContextDbModule.Configuration = Configuration;
            builder.RegisterModule<ContextDbModule>();


        }
    }
}
