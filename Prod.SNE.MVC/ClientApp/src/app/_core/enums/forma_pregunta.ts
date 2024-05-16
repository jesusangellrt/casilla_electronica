export const JSON_TIPO_PREGUNTA={
    desplegable_institucional: {
        id_tipo:1,
        nombre: "",
        tbl_data: null,
        respuesta: null
    },
    desplegable_libre:{
        id_tipo:2,
        nombre: "",
        seleccion: "libre",
        opciones: [],
        respuesta: []
    },
    numerico_entero:{
        id_tipo: 3,
        nombre: "",
        nro_entero:null,
        respuesta: null
    },
    texto:{
        id_tipo: 10,
        nombre: "",
        nro_caracteres: null,
        respuesta: null
    },
    fecha:{
        id_tipo: 9,
        id_tipo_fecha: null,
        formato: "",
        nombre: "",
        respuesta: null
    },
    archivo:{
        id_tipo: 11,
        nombre: "",
        respuesta: null
    },
    mensaje:{
        id_tipo: 12,
        mensaje: "",
        respuesta: null
    },
    archivo_columna:{
        id_tipo:11,
        nombre: "",
        seleccion: "multiple",
        opciones: null,
        id_tipo_pregunta:11,
        respuesta: []        
    },
    numerico_decimal:{
        id_tipo: 4,
        nombre: "",
        nro_entero:null,
        nro_decimal: null,
        respuesta: null
    },
    seleccion_unica: {
        id_tipo:5,
        nombre: "",
        seleccion: "unica",
        opciones: [],
        respuesta: []
    }, 
    seleccion_multiple:{
        id_tipo:6,
        nombre: "",
        seleccion: "multiple",
        opciones: [],
        respuesta: [],
        otro:""
    }, 
    matriz: {
        id_tipo: 7,
        nombre: "",
        es_columna_matriz: true,
        filas: [],//solo un array de string 
        columnas: [],//aqui sedefine el tipo y demas
        respuesta: []//lo mismo que matriz pero lleno :v
    }
}
/*
columnas = {
    id_tipo=5,
    nombre: ""
    
}
*/
export const FORMA_OPCION={
    forma: { peso: null, descripcion: ""} // peso: number, descripcion:string
}