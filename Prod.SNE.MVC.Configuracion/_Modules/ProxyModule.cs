using Autofac;
using Microsoft.Extensions.Configuration;
using Prod.SNE.ServiciosExternos;
using Prod.ServiciosExternos;
using Prod.ServiciosExternos.PRODUCE_VIRTUAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Prod.SNE.MVC.Configuracion._Modules
{
    public class ProxyModule : Autofac.Module
    {
        public static AppConfig AppConfig;
        public static IConfiguration Configuration;
        protected override void Load(ContainerBuilder builder)
        {
            //Proxy Local
            builder.RegisterAssemblyTypes(Assembly.Load(new AssemblyName("Prod.SNE.MVC.Configuracion")))
                   .Where(type => type.Name.EndsWith("Proxy", StringComparison.Ordinal))
                   .AsSelf();


            ////Proxy Externos
            builder.RegisterType<ReniecServicio>().As<IReniecServicio>().WithParameter("baseUrl", AppConfig.Urls.URL_RENIEC_API);///
            builder.RegisterType<ProduceVirtualServicio>().As<IProduceVirtualServicio>().WithParameter("baseUrl", AppConfig.Urls.URL_ST_PRODUCE_VIRTUAL);
            builder.RegisterType<ExpedienteSitradocWS>().As<IExpedienteSitradocWS>().WithParameter("baseUrl", AppConfig.Urls.URL_EXPEDIENTE_SITRADOC_API);
            //GA
            builder.RegisterType<Prod.MS.GestorArchivos.Proxy.ArchivoProxy>().WithParameter("baseUrl", AppConfig.Urls.URL_GA_UI);

            base.Load(builder);
        }
    }
}
