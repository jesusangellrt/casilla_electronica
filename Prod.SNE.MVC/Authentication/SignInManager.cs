using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Novell.Directory.Ldap;
using Prod.SNE.MVC.Authentication.Dto;
using Prod.SNE.MVC.Configuracion;
using Prod.SNE.MVC.Models;
using Release.Helper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Prod.SNE.MVC.Authentication
{
    public class SignInManager : ISignInManager
    {
        private readonly ConfigurationAD _configurationAD;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly ILogger<SignInManager> _logger;
        private readonly AdConnection _adConnection;

        public SignInManager(
            IOptions<ConfigurationAD> configurationAD,
            IHttpContextAccessor httpContextAccessor,
            ILogger<SignInManager> logger,
            AdConnection adConnection
            )
        {
            _configurationAD = configurationAD.Value;
            _httpContextAccessor = httpContextAccessor;
            _logger = logger;
            _adConnection = adConnection;
        }

        public async Task<StatusResponse> SignIn(string username, string password)
        {
            var sr = new StatusResponse { Success = true };
            ADUser adUser = null;
            try
            {
                
                var request = new SearchAdRequest
                {
                    ldapServer = _configurationAD.LDAPserver,
                    ldapPort = _configurationAD.Port,
                    searchBase = _configurationAD.LDAPQueryBase,
                    ldapUser = _configurationAD.LdapUser,
                    ldapPassword = _configurationAD.LdapPassword,
                    Username = username,
                    Password = password,
                    filterSearch = $"(&(objectClass=user)(sAMAccountName={username}))",
                    attributeList = new string[]
                    {
                "objectGUID",
                "sAMAccountName",
                "displayName",
                "mail",
                "whenCreated",
                "memberOf"
                    },
                };

                var auth = await _adConnection.SearchInAD(request);
               
                if (!auth.Success)
                {
                    sr.Success = false;
                    sr.Messages = auth.Messages;
                }

                adUser = auth.Data;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "SignInManager:SignIn");
                sr.Success = false;
                sr.Messages.Add("No se pudo autenticar con los datos que proporcionó.");
            }

            if (sr.Success)
            {
                var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, adUser.objectGUID.ToString()),
                new Claim(ClaimTypes.WindowsAccountName, adUser.sAMAccountName),
                new Claim(ClaimTypes.Name, adUser.displayName),
                new Claim(ClaimTypes.Email, adUser.mail),
                new Claim("whenCreated", adUser.whenCreated.ToString("yyyy-MM-dd")),
                new Claim("user", JsonConvert.SerializeObject(adUser))
            };
                if (adUser.memberOf.Contains(_configurationAD.Managers.ToLower()))
                {
                    claims.Add(new Claim(ClaimTypes.Role, "managers"));
                }

                var identity = new ClaimsIdentity(
                    claims,
                    "LDAP",
                    ClaimTypes.Name,
                    ClaimTypes.Role
                );
                var principal = new ClaimsPrincipal(identity);

                if (_httpContextAccessor.HttpContext != null)
                {
                    try
                    {
                        await _httpContextAccessor.HttpContext.SignInAsync(
                            CookieAuthenticationDefaults.AuthenticationScheme,
                            principal
                        );
                    }
                    catch (Exception ex)
                    {
                        sr.Success = false; 
                        sr.Messages.Add("No se pudo autenticar con los datos que proporcionó."); sr.Messages.Add("NO es");
                    }
                }
            }

            return sr;
        }

        public async Task SignOut()
        {
            if (_httpContextAccessor.HttpContext != null)
            {
                await _httpContextAccessor.HttpContext.SignOutAsync(
                    CookieAuthenticationDefaults.AuthenticationScheme
                );
            }
            else
            {
                throw new Exception( "For some reasons, HTTP context is null, signing out cannot be performed" );
            }
        }
    }

}
