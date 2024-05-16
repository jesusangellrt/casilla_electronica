export interface ConfiguracionInicialResponse{
    id_configuracion:number;
    texto_bienvenida:string;
    iden_audio_fondo:string;
    id_tipo_archivo:number;
    tipo_archivo_name:string;
    url_video:string;
    iden_imagen:string;
    es_eliminado?:boolean;
}

export interface ConfiguracionInicialSaveUpdateRequest
{
    id_configuracion: number;
    texto_bienvenida:string;
    iden_audio_fondo :string;
    id_tipo_archivo:number; 
    tipo_archivo_name :string;
    url_video:string;
    iden_imagen:string;
    es_eliminado:boolean; 
    user_name?:string;
    tipo_encuesta:number;
}