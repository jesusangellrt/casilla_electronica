export interface IEQUIPO_ROL_SEGUIRIDAD {
    id_equipo_rol_seguridad?: number;
    id_equipo?: number;
    equipo?: string;
    id_rol?: number;
    rol?: string;
    es_eliminado?: boolean;
    usuario_creacion?: string;
    usuario_modificacion?: string;
    fecha_creacion?: Date;
    fecha_modificacion?: Date;
};