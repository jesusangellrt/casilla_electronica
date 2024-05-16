using Autofac;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using Prod.SNE.MVC.Authentication;
using Prod.SNE.MVC.Configuracion;
using Prod.SNE.MVC.Configuracion._Modules;
using Prod.Seguridad.Auth;
using Release.Helper.WebKoMvc.Common;
using Release.Helper.WebKoMvc.Controllers;
using Serilog;
using System;
using System.Text;

namespace Prod.SNE.MVC
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public IWebHostEnvironment Environment { get; set; }

        public Startup(IWebHostEnvironment env)
        {
            Log.Logger = new LoggerConfiguration()
               //.MinimumLevel.Verbose()
               .MinimumLevel.Warning()
               .Enrich.FromLogContext()
               .WriteTo.File("Log/Log-.txt", rollingInterval: RollingInterval.Day)
               .CreateLogger();
            var basePath = AppDomain.CurrentDomain.BaseDirectory; //#SDK 2.00
            var builder = new ConfigurationBuilder()
                .SetBasePath(basePath)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true, reloadOnChange: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
            Environment = env;
            BaseController.StartConfig(); //Leer Config     
            SecurityConfig.Init((IConfigurationRoot)Configuration);
        }
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILoggerFactory loggerFactory)
        {

            loggerFactory.AddSerilog();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";
            });
        }

        public void ConfigureContainer(ContainerBuilder builder)
        {
            //Encryts
            HelperHttp.AllowEncrypt = true;
            HelperHttp.WebRootPath = Environment.WebRootPath;
            //Register Types
            BootstrapperContainer.Configuration = this.Configuration;
            BootstrapperContainer.Environment = this.Environment;
            BootstrapperContainer.Register(builder);
        }
        public void ConfigureServices(IServiceCollection services)
        {
            //Add Autentication
            services.Configure<ConfigurationAD>
            (
                c =>
                {
                    c.Port = Configuration.GetSection("AD:port").Get<int>();
                    c.Zone = Configuration.GetSection("AD:zone").Value;
                    c.Domain = Configuration.GetSection("AD:domain").Value;
                    c.Subdomain = Configuration.GetSection("AD:subdomain").Value;
                    c.LdapUser = Configuration.GetSection("AD:ldapUser").Value;
                    c.LdapPassword = Configuration.GetSection("AD:ldapPassword").Value;
                    c.LDAPserver = Configuration.GetSection("AD:ldapServer").Value;
                    c.LDAPQueryBase = Configuration.GetSection("AD:ldapSearchBase").Value;
                    c.Crew = new StringBuilder()
                        .Append($"CN={Configuration.GetSection("AD:crew").Value},")
                        .Append($"CN=Users,{c.LDAPQueryBase}")
                        .ToString();
                    c.Managers = new StringBuilder()
                        .Append($"CN={Configuration.GetSection("AD:managers").Value},")
                        .Append($"CN=Users,{c.LDAPQueryBase}")
                        .ToString();
                }
            );
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddScoped<ISignInManager, SignInManager>();
            services.AddScoped<AdConnection, AdConnection>();

            // Add services to the container.
            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
                .AddCookie(
                    options =>
                    {
                        options.Cookie.Name = ".AspNet.SharedCookie";
                        options.ExpireTimeSpan = TimeSpan.FromDays(11);
                        options.LoginPath = "/account/login";
                        options.AccessDeniedPath = "/account/access-denied";
                    }
                );
            services.AddAuthorization(options =>
            {
                options.DefaultPolicy = new AuthorizationPolicyBuilder()
                    .RequireAuthenticatedUser()
                    .Build();
            });
            services.AddMvc(o =>
            {
                o.EnableEndpointRouting = false;
                o.Filters.Add(new ProducesAttribute("application/json"));
                o.Filters.Add(new Release.Helper.WebKoMvc.Filters.SecureResponseRequestAttribute());

                var authPolicy = new AuthorizationPolicyBuilder()
                    .RequireAuthenticatedUser()
                    .Build();
                o.Filters.Add(new Microsoft.AspNetCore.Mvc.Authorization.AuthorizeFilter(authPolicy));

            }).AddNewtonsoftJson(o =>
            {
                o.SerializerSettings.ContractResolver = new DefaultContractResolver();
            });
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "wwwroot/dist";
            });
        }

        private void Areas(IRouteBuilder routes)
        {
            routes.MapRoute(
                name: "area",
                template: "{area:exists}/{controller=Home}/{action=Index}/{id?}");
        }
    }
}
