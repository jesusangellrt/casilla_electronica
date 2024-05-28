using Microsoft.EntityFrameworkCore.Internal;
using Microsoft.Extensions.Configuration;
using Oracle.ManagedDataAccess.Client;
using Prod.SNE.Core.Aplicacion.Interfaces;
using Prod.SNE.Core.Datos;
using Prod.SNE.Entidades;
using Prod.SNE.Entidades.Trabajador;
using Release.Helper;
using Release.Helper.Data.ICore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Modelo = Prod.SNE.Datos.Modelo;
using Dapper.Oracle;
using Dapper;

namespace Prod.SNE.Core.Aplicacion
{
    public class ComunAplicacion : IComunAplicacion
	{
		private IContext _context;
		private IUnitOfWork _uow;
		private readonly IConfiguration _configuration;

		public ComunAplicacion(IUnitOfWork unitOfWork,
			IConfiguration configuration)
		{
			_uow = unitOfWork;
			_configuration = configuration;
			_context = _uow.Context;
		}
		
		public PersonaResponse GetPersonaById(PersonaRequest request)
		{
			var persona = _context.Query<Modelo.vw_persona>().FirstOrDefault(x => x.ID == request.ID);
			return persona != null ? new PersonaResponse()
			{
				NRO_DOCUMENTO = persona.NRO_DOCUMENTO,
				RAZON_SOCIAL = persona.RAZON_SOCIAL,
				NOMBRES = persona.NOMBRES,
				APELLIDOS = persona.APELLIDOS,
				CODIGO_PROVINCIA = persona.CODIGO_PROVINCIA,
				CODIGO_DISTRITO = persona.CODIGO_DISTRITO,
				CODIGO_DEPARTAMENTO = persona.CODIGO_DEPARTAMENTO,
				DIRECCION = persona.DIRECCION,
				TELEFONO = persona.TELEFONO,
				EMAIL = persona.EMAIL,
				CELULAR = persona.CELULAR
			} : new PersonaResponse();
		}
		public PersonaResponse GetPersonaByPersonaNatural(PersonaRequest request)
		{
            throw new NotImplementedException();
        }
		public StatusResponse RegistrarArchivo(ArchivoRequest request)
		{
			throw new NotImplementedException();
		}
		public ArchivoResponse GetArchivoById(ArchivoRequest request)
		{
			throw new NotImplementedException();
		}
		public List<SelectResponse> GetEnumeradoPorTipo(int tipoEnumerado)
		{
            throw new NotImplementedException();
		}
		public List<SelectResponse> GetEstadoDistribucion()
		{
            throw new NotImplementedException();
        }
		public List<SelectResponse> GetTiposTransferencias()
		{
            throw new NotImplementedException();
        }
		public List<SelectResponse> GetTipoDocumento()
		{
            throw new NotImplementedException();
        }
		public List<SelectResponse> GetDepartamento()
		{
            var q = (from departamento in _context.Query<Modelo.vw_departamento>()
					 where departamento.CODIGO_DEPARTAMENTO != "00"
                     select new SelectResponse()
                     {
                         codigo = departamento.CODIGO_DEPARTAMENTO,
                         nombre = departamento.DEPARTAMENTO
                     }).Distinct().ToList();
            return q;
        }
		public List<SelectResponse> GetProvincia(UbigeoRequest request)
		{
            var q = (from provincia in _context.Query<Modelo.vw_provincia>()
					 where provincia.CODIGO_DEPARTAMENTO == request.cod_departamento && provincia.CODIGO_PROVINCIA != "00"
                     select new SelectResponse()
                     {
                         codigo = provincia.CODIGO_PROVINCIA,
                         nombre = provincia.PROVINCIA
                     }).Distinct().ToList();
            return q;
        }
		public List<SelectResponse> GetDistrito(UbigeoRequest request)
		{
            var q = (from distrito in _context.Query<Modelo.vw_distrito>()
                     where distrito.CODIGO_DEPARTAMENTO == request.cod_departamento && distrito.CODIGO_PROVINCIA == request.cod_provincia && distrito.CODIGO_DISTRITO != "00"
                     select new SelectResponse()
                     {
                         codigo = distrito.CODIGO_DISTRITO,
                         nombre = distrito.DISTRITO
                     }).Distinct().ToList();
            return q;
        }
		public PersonaResponse GetPersonaByPersonaJuridica(PersonaRequest request)
		{
            throw new NotImplementedException();
        }
        public List<SelectResponse> GetRolSSA(RolSSARequest request)
        {
            throw new NotImplementedException();
        }
        public List<SelectResponse> GetPermiso(PermisoRequest request)
        {
            throw new NotImplementedException();
        }

		public List<SelectResponse> GetDependencia()
		{
			var q = (from dependencia in _context.Query<Modelo.vw_dependencia>()
					 where dependencia.CONDICION=="ACTIVO"
                     orderby dependencia.DEPENDENCIA descending
                     select new SelectResponse()
                     {
                         id = dependencia.CODIGO_DEPENDENCIA,
                         codigo = null,
                         nombre = dependencia.DEPENDENCIA
                     }).Distinct().ToList();
            return q;
        }

		public StatusResponse<TrabajadorResponse> GetTrabajador(string username)
		{
            var sr = new StatusResponse<TrabajadorResponse>() { Success = true };
			try
			{
				var _connectionString = _configuration.GetSection("ConnectionStrings:Oracle").Value;

				using (IDbConnection dbConnection = new OracleConnection(_connectionString))
				{
					dbConnection.Open();

					var dynamicParametersAdmin = new OracleDynamicParameters();
					dynamicParametersAdmin.Add(name: ":p_UserName", dbType: OracleMappingType.Varchar2, direction: ParameterDirection.Input, value: username);
					dynamicParametersAdmin.Add(name: ":p_ResultSet", dbType: OracleMappingType.RefCursor, direction: ParameterDirection.Output);
					var resAdmin = dbConnection.Query<TrabajadorResponse>("SICAELSYS.PKG_SCESCASIELEC.SPR_OBTENER_TRABAJADOR", param: dynamicParametersAdmin, commandType: CommandType.StoredProcedure).ToList();
					
					foreach (var usuario in resAdmin)
					{
						Console.WriteLine($"Nombre: {usuario.nombres_trabajador}, Activo: {usuario.roles}");
					}
				}





				sr.Data = (from trab in _context.Query<Modelo.vw_trabajador>()
						   where trab.ESTADO == "ACTIVO" && trab.EMAIL == username
						   select new TrabajadorResponse()
						   {

							   codigo_trabajador = trab.CODIGO_TRABAJADOR,
							   codigo_dependencia = trab.CODIGO_DEPENDENCIA,
							   apellidos_trabajador = trab.APELLIDOS_TRABAJADOR,
							   nombres_trabajador = trab.NOMBRES_TRABAJADOR,
							   condicion = trab.CONDICION,
							   email = trab.EMAIL,
							   fecha_nacimiento = trab.FECHA_NACIMIENTO,
							   identificador = trab.IDENTIFICADOR,
							   dni = trab.DNI,
							   telefono = trab.TELEFONO,
							   estado = trab.ESTADO,
							   dominio = trab.DOMINIO,
							   genero = trab.GENERO

						   }).FirstOrDefault();

				var dependencia = _context.Query<Modelo.vw_dependencia>().FirstOrDefault(x => x.CODIGO_DEPENDENCIA == sr.Data.codigo_dependencia);
				sr.Data.siglas_dependencia = dependencia.SIGLAS;
				sr.Data.nombre_dependencia = dependencia.DEPENDENCIA;
				var roles = _context.Query<Modelo.vw_usuario_rol_intranet>()
										.Where(x => x.codigo_trabajador == sr.Data.codigo_trabajador);

				if (roles.Any())
				{
                    sr.Data.roles = roles.Select(x => new Rol
                    {
                        IdRol = x.id_rol,
                        DescRol = x.nombre

                    }).ToList();
                }

               
                sr.Success = sr.Data != null;
            }
			catch (Exception ex)
			{
				sr.Messages.Add("Ocurrio un error al buscar trabajador.");
				sr.Success = false;
			}
            return sr;

		}
		public List<SelectResponse> GetRegimen()
		{
			var q = (from regimen in _context.Query<Modelo.vw_regimen>()
					 orderby regimen.DESCRIPCION descending
					 select new SelectResponse()
					 {
						 id = regimen.ID_REGIMEN,
						 codigo = null,
						 nombre = regimen.DESCRIPCION
					 }).Distinct().ToList();
			return q;
		}
	}
}
