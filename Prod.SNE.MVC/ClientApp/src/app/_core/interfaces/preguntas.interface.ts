export interface PreguntaResponseItem {
    id_encuesta?:number;
    id_pregunta: number;
    pregunta?: string;
    id_tipo_pregunta?: number;
    tipo_pregunta?:string;
    es_obligatorio?:boolean;
    id_categoria?:number;
    id_sub_categoria?:number;
    categoria?:string;
    sub_categoria?: string;
    descripcion?:string;
    id_tipo_archivo?:number;
    tipo_archivo?:string;
    iden_imagen?:string;
    url_video?:string;
    json_alternativas?:string;
    por_defecto?:boolean;

    es_condicionada?:boolean;
    es_condicional?:boolean;
    id_pregunta_condicional?: number;
    json_respuesta_condicional?:string;
    json_archivo_tipo_archivo?: string;
    es_agregar_pregunta?:boolean;
    mensaje?: string;
    es_finaliza_encuesta?:boolean;
    id_encuesta_seccion?:number;
    json_tipo_fecha?:string;
    es_columna_matriz?:boolean;
};

export interface PreguntaSaveUpdateItem {
    files_only?:boolean;
    id_encuesta?:number;
    id_pregunta: number;
    pregunta?: string;
    id_tipo_pregunta?: number;

    es_obligatorio?:boolean;
    id_categoria?:number;
    id_sub_categoria?:number;
    descripcion?:string;
    id_tipo_archivo?:number;
    iden_imagen?:string;
    json_alternativas?:string;
    user_name?:string;

    es_condicional?:boolean;
    es_condicionada?:boolean;
    id_pregunta_condicional?:number;
    json_respuesta_condicional?:string;
    json_archivo_tipo_archivo?: string;
    es_agregar_pregunta?:boolean;
    mensaje?: string;
    es_finaliza_encuesta?:boolean;
    id_encuesta_seccion?:number;
    json_tipo_fecha?:string;
    es_columna_matriz?:boolean;
};


export interface  FORMA_FILA{
    idx: number;
    nombre_fila:string
}









export interface _desplegable_institucional{
    id_tipo:number;
    nombre: string;
    tbl_data: number;
    respuesta: any
}
export interface _desplegable_seleccion{
    id_tipo:number;
    nombre:string;
    seleccion:string;
    opciones:any[];
    respuesta:any[]
}

export class _numerico_entero{
    id_tipo:number;
    nombre:string;
    respuesta:any
}
export class _numerico_decimal{
    id_tipo: number;
    nombre: string;
    nro_decimal:number;
    respuesta: any
}

