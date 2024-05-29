using Autofac;
using Microsoft.Extensions.Configuration;
using Prod.SNE.Core.Datos;
using Prod.SNE.Core.Datos.Contexto;
using Release.Helper.Data.Core;
using System;
using System.Linq;
using System.Reflection;

namespace Prod.SNE.Core.Api.App_Start
{
    public class ContextDbModule: Autofac.Module
    {
        public static IConfiguration Configuration;

        protected override void Load(ContainerBuilder builder)
        {

            #region Base Context

            //Conexion
            string connectionString = Configuration.GetSection("ConnectionStrings:SNEDbContext").Value;

            //Context           
            builder.RegisterType<SNEDbContext>().Named<IDbContext>("contextSNE").WithParameter("connstr", connectionString).InstancePerLifetimeScope();
            
            //Resolver UnitOfWork
            builder.RegisterType<UnitOfWork>().As<IUnitOfWork>().WithParameter((c, p) => true, (c, p) => p.ResolveNamed<IDbContext>("contextSNE"));


            //-> Aplicacion
            builder.RegisterAssemblyTypes(Assembly.Load(new AssemblyName("Prod.SNE.Core")))
                .Where(t => t.Name.EndsWith("Aplicacion", StringComparison.Ordinal) && t.GetTypeInfo().IsClass)
                .AsImplementedInterfaces();

            //-> Validacion
            builder.RegisterAssemblyTypes(Assembly.Load(new AssemblyName("Prod.SNE.Core")))
                .Where(t => t.Name.EndsWith("Validacion", StringComparison.Ordinal) && t.GetTypeInfo().IsClass)
                .AsSelf();
            //-> Proceso
            builder.RegisterAssemblyTypes(Assembly.Load(new AssemblyName("Prod.SNE.Core")))
                .Where(t => t.Name.EndsWith("Proceso", StringComparison.Ordinal) && t.GetTypeInfo().IsClass)
                .AsSelf();

            #endregion


        }
    }
}
