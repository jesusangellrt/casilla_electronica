import { PreguntaOrdenamientoItem } from "./encuestas.interface";

export interface SeccionResponseItem {
    id_encuesta_seccion:number;
    id_encuesta: number;
    seccion?: string;
};

export interface SeccionSaveUpdateItem {
    files_only?:boolean;
    id_encuesta:number;
    id_encuesta_seccion: number;
    seccion?: string;
};

export interface SeccionListRequest {
    id_encuesta_seccion:number;
    id_encuesta: number;
    seccion:string;
    orden: number;
    es_eliminado:boolean;
    resuelto:boolean;
    actual:boolean;
    preguntas?: Array<PreguntaOrdenamientoItem>;
};