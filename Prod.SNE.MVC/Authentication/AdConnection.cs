using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Novell.Directory.Ldap;
using Prod.SNE.Entidades.Trabajador;
using Prod.SNE.MVC.Authentication.Dto;
using Prod.SNE.MVC.Configuracion.Proxys;
using Prod.SNE.MVC.Models;
using Release.Helper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Prod.SNE.MVC.Authentication
{
    public class AdConnection
    {
        private readonly ILogger<AdConnection> _logger;
        private readonly ComunProxy _comunProxy;

        public AdConnection(ILogger<AdConnection> logger, ComunProxy comunProxy)
        {
            _logger = logger;
            _comunProxy = comunProxy;
        }
        public async Task<StatusResponse<ADUser>> SearchInAD(SearchAdRequest request)
        {

            LdapSearchResults searchResults = null;
            var sr = new StatusResponse<ADUser> { Success = true };
            try
            {
                var trabajador = _comunProxy.GetTrabajador(request.Username);
                if (!trabajador.Success)
                {
                    sr.Success = false;
                    sr.Messages.Add("El usuario ingresado no se encuentra registrado en la base de datos.");
                    return sr;
                }
                if (trabajador.Success)
                {
                    var roles = trabajador.Data.roles;
                    if(roles == null || !roles.Any())
                    {
                        sr.Success = false;
                        sr.Messages.Add("El usuario no esta asignado a un rol.");
                        return sr;
                    }
                }
                _logger.LogWarning(JsonConvert.SerializeObject(request));

                using (LdapConnection connection = new LdapConnection())
                {
                    LdapSearchConstraints searchConstraints;                    
                    var ldapVersion = LdapConnection.LdapV3;
                    connection.ConnectionTimeout = 30;
                    connection.Connect(request.ldapServer, request.ldapPort);
                    connection.Bind(ldapVersion, request.ldapUser, request.ldapPassword);
                    
                    string User = $"mtpe\\{request.Username}";
                    string Password = request.Password;

                    connection.Bind(ldapVersion, User, Password);

                    string username = request.Username;

                    searchConstraints = new LdapSearchConstraints();
                    searchConstraints.ReferralFollowing = true;

                    searchResults = (LdapSearchResults)connection.Search(
                        request.searchBase,
                        LdapConnection.ScopeSub,
                        request.filterSearch,
                        request.attributeList,
                        false,
                        searchConstraints
                    );                    
                    if (searchResults.HasMore())
                    {
                        LdapEntry entry = searchResults.Next();
                        LdapAttributeSet attributeSet = entry.GetAttributeSet();

                        sr.Data = new ADUser()
                        {
                            objectGUID = new Guid((attributeSet.GetAttribute("objectGUID").ByteValue as byte[])!),
                            displayName = attributeSet.GetAttribute("displayName").StringValue,
                            mail = attributeSet.GetAttribute("mail").StringValue,
                            sAMAccountName = attributeSet.GetAttribute("sAMAccountName").StringValue,
                            whenCreated = DateTime.ParseExact(
                                    attributeSet.GetAttribute("whenCreated").StringValue!,
                                    "yyyyMMddHHmmss.0Z",
                                    System.Globalization.CultureInfo.InvariantCulture
                                ),
                            ApellidoPaterno = trabajador.Data.apellidos_trabajador,
                            Nombres = trabajador.Data.nombres_trabajador,
                            NumeroDocumento = trabajador.Data.dni,
                            IdDependencia = trabajador.Data.codigo_dependencia,
                            IdUsuario = trabajador.Data.codigo_trabajador,
                            CodDependencia = trabajador.Data.siglas_dependencia, 
                            roles = mapperToRol(trabajador.Data.roles)
                        };
                        //_logger.LogWarning(JsonConvert.SerializeObject(sr.Data), "adUser");
                    }
                }
                
            }
            catch (Exception ex)
            {
                sr.Success = false;                
                _logger.LogError(ex, "AdConnection:SearchInAD");
            }
            return sr;
        }

        private List<Seguridad.Auth.Model.Rol> mapperToRol(List<Rol> roles)
        {
            if(roles == null)
            {
                return null;
            }
            return roles.Select(x => new Seguridad.Auth.Model.Rol
            {
                IdRol = x.IdRol,
                DescRol = x.DescRol

            }).ToList();
        }
    }

}
