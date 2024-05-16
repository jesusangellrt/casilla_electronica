import { Injectable } from "@angular/core";
import axios from 'axios';

@Injectable({
    providedIn: "root"
})
export class FileService {

    rutaBase: any;
    idArchivo: any = "";
    paramsExtra: any;
    paramsRequest: any = Object.assign({}, { id: this.idArchivo }, this.paramsExtra);
    Result: any = {};
    Data: any = [];

    constructor(       
    ) {     
    }
    public GetParamsRequest = () => Object.assign({}, { id: this.idArchivo }, this.paramsExtra);
    
    public UploadFile = (formData) => {
        formData.id=null;
        return axios
            .post(`${this.rutaBase}/archivo/upload`, formData)
            .then(resp => {                
                return resp!.data;
            })
            .catch(err => {
                throw err.data || err;
            })
    }

    public GetFileInfo = (formData) => {
       return axios
            .post(`${this.rutaBase}/archivo/fileinfo`, formData)
            .then(resp => {                
                return resp!.data;
            })
            .catch(err => {
                throw err.data || err;
            }) 
    } 
    public getFilesById(codigo){
        let model = {
            ids: [codigo],
            userName:"",
            atomicTransaction:true
        };
        return axios
        
            .post(`${this.rutaBase}/archivo/filesByIds`, model)
            .then(resp => {                
                return resp!.data;
            })
            .catch(err => {
                throw err.data || err;
            }) 

    }
    public DownloadFile = (parametrosExtra: any) => {

        if (parametrosExtra != undefined && parametrosExtra != null) {
            this.paramsRequest = Object.assign({}, this.paramsExtra, parametrosExtra);
        }
        var a = document.createElement('a');
        var req = {
            id: parametrosExtra.id,
            version: parametrosExtra.version,
            BuscarBorrador: (parametrosExtra.BuscarBorrador === true)
        };
        a.href = this.rutaBase + '/archivo/download?' + Object.keys(req).map(key => key + '=' + req[key]).join('&');;
        a.target = "_blank";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

    }

    public GetRutaDescarga = (parametrosExtra: any) => {

        if (parametrosExtra != undefined && parametrosExtra != null) {
            this.paramsRequest = Object.assign({}, this.paramsExtra, parametrosExtra);
        }       
        var req = {
            id: parametrosExtra.id,
            version: parametrosExtra.version,
            BuscarBorrador: (parametrosExtra.BuscarBorrador === true)
        };
        
        return  this.rutaBase + '/archivo/download?' + Object.keys(req).map(key => key + '=' + req[key]).join('&');;       
    }
}