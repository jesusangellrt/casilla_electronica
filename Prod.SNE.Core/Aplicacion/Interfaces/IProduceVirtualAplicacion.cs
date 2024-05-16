using Prod.SNE.Entidades;
using System.Threading.Tasks;

namespace Prod.SNE.Core.Aplicacion.Interfaces
{
   public interface IProduceVirtualAplicacion
    {
        Task<UsuarioIntranetResponse> GetUsuarioIntranet(UsuarioIntranetRequest request);
    }
}
