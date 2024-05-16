using System;
using System.Collections.Generic;
using System.Text;

namespace Prod.SNE.Entidades
{
    public enum SIS_TIPO_ENUMERADO
    {
        tipo_archivo = 1,
        estado_encuesta = 2,
        tipo_pregunta = 3,
        estado_respuesta = 4,
        tipo_maestro_institucional=5,
        sexo=6,
        archivo_tipo_archivo = 7,
        tipo_fecha = 8,
        tipo_dirigido = 9
    }

    public enum ESTADO_ENCUESTA
    {
        registrado = 1,
        publicado = 2,
        eliminado = 3,
        procesado = 4,
        pre_publicado=5
    }

    public enum ESTADO_RESPUESTA
    {
        completar = 1,
        finalizado = 2
    }


    public enum SEXO_PERSONA
    {
        femenino = 2,
        masculino = 1
    }

    public enum TIPO_ARCHIVO
    {
        video= 1,
        imagen= 2
    }

    public enum TIPO_ENCUESTA
    {
        intranet = 1,
        extranet = 2
    }

    public enum ESTADO_ADMINISTRADO
    {
        sin_comenzar = 1,
        comenzada = 2,
        completada = 3,
        finalizada = 4
    }
}
