
export interface SaveRespuestaAnonimaRequest {
    id_encuesta?:number;
    user_name: string;
    dni_trabajador: string;
    id_estado: number;
    nro_pregunta: number;
    sexo:string; 
    edad:number; 
    respuestas: RespuestaByPregunta[];
};

export interface RespuestaByPregunta{
    id_pregunta: number;
    json_rpta:string;
};