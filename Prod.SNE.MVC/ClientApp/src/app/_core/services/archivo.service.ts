import { Injectable } from "@angular/core";
import axios from "axios";
import { environment } from "@cmp/environment";
import { ConfiguracionInicialSaveUpdateRequest } from "../interfaces";
@Injectable({
    providedIn: "root"
})

export class ArchivoService {
    url: string = `${environment.api_target}/api/archivo`;

    constructor() { }
    
    public _verArchivo = (_id_archivo: string) => {
        return axios
          .post(`${this.url}/verArchivo`, { id_archivo: _id_archivo })
          .then(resp => resp.data)
          .catch(err => {
              throw err.data || err;
          });
    };
    
}

//http://localhost:56947/Home/Index?var=tNNNxML7ofUIqT90EWvySALM2m9abJtzPoPRMsltfNRM7GsatiLUklXFvOSSiU13vgK47h9cpoMMVsl54eXm9kTcIGxeOgmoreFP2UPXyMlmoreS6qWAccmnO4CaSHDjoL9kCumVdLiCw9Kvcequal
