export interface IENUMERADO {
    id_enumerado?: number;
    id_tipo_enumerado?: number;
    codigo?: string;
    nombre?: string;
    descripcion?: string;
    es_eliminado?: boolean;
    usuario_creacion?: string;
    usuario_modificacion?: string;
    fecha_creacion?: Date;
    fecha_modificacion?: Date;
};