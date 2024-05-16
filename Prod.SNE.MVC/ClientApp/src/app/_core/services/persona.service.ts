import { Injectable } from "@angular/core";
import axios from "axios";
import * as moment from "moment";

@Injectable({
    providedIn: "root"
})
export class PersonaService {
    url: string = "/api/persona";

    GetPersonas = (filters, Page = 1, pageSize = 10) => {
        const options = { ...filters, Page, pageSize };
        return axios
          .post(`${this.url}/GetPersonaList`, options)
          .then(resp => resp.data)
          .catch(err => {
              throw err.data || err;
          });
    };

    GetPersona = (filters) => {
        const options = { ...filters };
        return axios
          .post(`${this.url}/GetPersona`, options)
          .then(resp => resp.data)
          .catch(err => {
              throw err.data || err;
          });
    };
    
    GetById = (filters) => {
        const options = { ...filters };
        return axios
          .post(`${this.url}/GetById`, options)
          .then(resp => resp.data)
          .catch(err => {
              throw err.data || err;
          });
    };
}
