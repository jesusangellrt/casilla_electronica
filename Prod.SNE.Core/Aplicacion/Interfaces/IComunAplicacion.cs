using Prod.SNE.Entidades;
using Prod.SNE.Entidades.Trabajador;
using Release.Helper;
using Release.Helper.Pagination;
using System.Collections.Generic;

namespace Prod.SNE.Core.Aplicacion.Interfaces
{
    public interface IComunAplicacion
    {
        PersonaResponse GetPersonaById(PersonaRequest request);
        StatusResponse RegistrarArchivo(ArchivoRequest request);
        ArchivoResponse GetArchivoById(ArchivoRequest request);
        List<SelectResponse> GetDepartamento();
        List<SelectResponse> GetProvincia(UbigeoRequest request);
        List<SelectResponse> GetDistrito(UbigeoRequest request);
        PersonaResponse GetPersonaByPersonaNatural(PersonaRequest request);
        List<SelectResponse> GetEnumeradoPorTipo(int tipoEnumerado);
        List<SelectResponse> GetRolSSA(RolSSARequest request);
        List<SelectResponse> GetPermiso(PermisoRequest request);
        List<SelectResponse> GetDependencia();
        StatusResponse<TrabajadorResponse> GetTrabajador(string username);
        List<SelectResponse> GetRegimen();
    }
}
