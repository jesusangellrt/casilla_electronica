

export const SIS_TIPO_ENUMERADO = {
    tipo_archivo: 1,
    estado_encuesta: 2, 
    tipo_pregunta: 3,
    estado_respuesta: 4,
    tipo_maestro_institucional:5,
    archivo_tipo_archivo: 7,
    tipo_fecha:8,
    tipo_dirigido:9
};

export const TIPO_ARCHIVO_ENUMERADO = {
    video: 1,
    imagen: 2
};

export const ESTADO_ENCUESTA_ENUMERADO = {
    registrado: 1,
    publicado: 2,
    eliminado:3,
    procesado: 4,
    pre_publicado:5
};

export const TIPO_PREGUNTA = {
    desplegable_institucional: 1,
    desplegable_libre: 2,
    numerico_entero:3,
    numerico_decimal:4,
    seleccion_unica: 5, 
    seleccion_multiple:6, 
    matriz: 7,
    fecha:9,
    texto:10,
    archivo:11,
    mensaje:12
};

export const ESTADO_COMPLETADO={
    por_completar:1,
    finalizado:2,
    por_iniciar:0
}

export const TIPO_ENCUESTA={
    intranet:1,
    extranet:2
}

export const ESTADO_ADMINISTRADO={
    sin_comenzar: 1,
    comenzada: 2,
    completada: 3,
    finalizada: 4
}