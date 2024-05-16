using Prod.SNE.Core.Datos;
using Prod.SNE.Entidades;
using Release.Helper;
using Release.Helper.Data.ICore;
using System.Collections.Generic;

namespace Prod.SNE.Core.Aplicacion.Validacion
{
    public class ConfiguracionInicialValidacion : ValidacionGenerica
    {
        private IContext _context;
        private IUnitOfWork _uow;
       
        public ConfiguracionInicialValidacion(IUnitOfWork unitOfWork)
        {
            _uow = unitOfWork;
            _context = _uow.Context;
        }

        public List<string> ValidarRegistro(ConfiguracionInicialSaveUpdateRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.texto_bienvenida))
            {
                Msg.Add("Texto de bienvenida es requerido");
            }
            if (string.IsNullOrWhiteSpace(request.iden_audio_fondo))
            {
                Msg.Add("El archivo del audio de fondo es requerido");
            }

            if (request.id_tipo_archivo == null || request.id_tipo_archivo == 0)
            {
                Msg.Add("El tipo de archivo es obligatorio");
            }
            else
            {
                if (request.id_tipo_archivo == (int)TIPO_ARCHIVO.imagen
                    && string.IsNullOrWhiteSpace(request.iden_imagen))
                {
                    Msg.Add("El archivo de imagen es obligatorio");
                }
                if (request.id_tipo_archivo == (int)TIPO_ARCHIVO.video
                    && string.IsNullOrWhiteSpace(request.url_video))
                {
                    Msg.Add("La url de video es obligatorio");
                }

            }
            return Msg;
        }
    }
}
