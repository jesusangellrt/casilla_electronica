export interface EncuestaRequestList {
    titulo:string;
    estado?: number;
    id_dependencia?:number;
    fecha_inicio?:Date;
    fecha_fin?:Date;
};
export interface EncuestaData{
    encuesta?:EncuestaMainData;
    bienvenida?:EncuestaBienvenidaData;
    agradecimiento?:EncuestaAgradecimientoData;
}
export interface EncuestaSaveUpdateRequest{
    files_only?:boolean;
    ussername?:string;
    encuesta?:EncuestaMainData;
    bienvenida?:EncuestaBienvenidaData;
    agradecimiento?:EncuestaAgradecimientoData;
    tipo_encuesta?: number;
}

export interface EncuestaMainData{
    id_encuesta?: number;
    id_dependendia?: number;
    dependencia_name?:string;
    titulo?:string;
    encabezado?:string;
    objetivo?:string;
    descripcion?:string;
    fecha_inicio?:Date;
    fecha_fin?:Date;
    tiempo_estimado?:number;
    es_anonima?:boolean;
    mensaje_es_anonima?:string;
    es_todos?:boolean;
    iden_imagen_presentacion?:string;
    mensaje_corto_presentacion?: string;
    id_estado?:number;
    estado_name?:string;
    es_con_seccion_pregunta?:boolean;
    es_autorizado_datos?:boolean;
    iden_terminos_condiciones?:string;
}
export interface EncuestaBienvenidaData{
    id_encuesta_bienvenida?: number;
    id_encuesta?:number;
    indicaciones?:string;
    iden_audio?:string;
    id_tipo_archivo?:number;
    iden_imagen?:string;
    url_video?:string; 
    es_activar_audio?:boolean;
    iden_terminos_condiciones?:string;
}
export interface EncuestaAgradecimientoData{
    id_encuesta_agradecimiento?:number;
    id_encuesta?:number;
    mensaje_agradecimiento?:string;
    iden_audio?:string;
    id_tipo_archivo?:number;
    iden_imagen?:string;
    url_video?:string;
    es_activar_audio?:boolean;
}

export interface EncuestadoEncuestaSaveItem{
    id_encuesta?:number;
    id_trabajador?:string;
    id_dependencia?:string;
    id_regimen?:number;
    dni_trabajador?:string;
}

export interface EncuestadoEncuestaExtranetSaveItem{
    id_encuesta?:number;
    dni_user?:string;
}

export interface ChartItem{
    orden?:number;
    Iden?:string;
    Extra?:string;
    Val?:number;
}

export interface PreguntaOrdenamientoItem{
    orden?:number;
    id_pregunta?:number;
    es_condicional?:boolean;
    es_condicionada?:boolean;
    id_pregunta_condicional?:number;
    pregunta?:string;
}