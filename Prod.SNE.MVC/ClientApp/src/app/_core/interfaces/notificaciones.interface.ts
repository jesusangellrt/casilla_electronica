export interface NotificacionResponseItem {
    id_encuesta_notificacion:number;
    id_encuesta: number;
    titulo?: string;
    fecha_notificacion?: Date;
    dirigido?: string;
    mensaje?:string;
    asunto?:string;
};

export interface NotificacionSaveUpdateItem {
    files_only?:boolean;
    id_encuesta:number;
    id_encuesta_notificacion: number;
    seccion?: string;
    fecha_notificacion?: Date;
    dirigido?: string;
    asunto?:string;
    mensaje?:string;
};