export interface IFileUploaderOptions {
    url: any,
    maxFileSize?: any,
    allowedMimeType?: any,
    autoUpload?: boolean,
    urlDescarga?: string
}
export interface IFileUpload{
    nombre_archivo?: string,
    mimetype?: string,
    size?: Number,
    codigo?: any,
    tipo_archivo?: any,
    esborrador?: any,
    parametroColumna?: any,
    parametroFila?: any,
    parametro?: any
}
