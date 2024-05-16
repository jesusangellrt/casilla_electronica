export interface CATEGORIA {
    id_categoria?: number;
    nombre?: string;
    es_eliminado?: boolean;
    array_sub_categorias: Array<SUB_CATEGORIA>;
    username?:string;
};
export interface SUB_CATEGORIA {
    id_sub_categoria: number;
    id_categoria: number;
    nombre: string;
    es_eliminado:boolean;
};

export interface CATEGORIA_EXTRANET {
    id_categoria_extranet?: number;
    nombre?: string;
    es_eliminado?: boolean;
    array_sub_categorias_extranet: Array<SUB_CATEGORIA_EXTRANET>;
    username?:string;
};
export interface SUB_CATEGORIA_EXTRANET {
    id_sub_categoria_extranet: number;
    id_categoria_extranet: number;
    nombre: string;
    es_eliminado:boolean;
};