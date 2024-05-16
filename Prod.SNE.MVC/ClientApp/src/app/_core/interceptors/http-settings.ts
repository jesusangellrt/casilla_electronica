import axios from "axios";
import { ParseResponse,ObjToQS, encryptedData, DEFAULT_INTERNAL_ERROR, EncodeData, Bootstrapper, DecodeData } 
from "@app/_shared";

export const RegisterInterceptors = () => {
    
    axios.interceptors.request.use(
        function (config) {
           
            if (!config.headers) {
                config.headers = {
                    "X-Requested-With": "XMLHttpRequest",
                    "Access-Control-Allow-Origin": "*"
                };
            } else {
                config.headers["X-Requested-With"] = "XMLHttpRequest";
                config.headers["Access-Control-Allow-Origin"] = "*";
            }
            
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    axios.interceptors.response.use(

        function (response) {
            if (typeof response.data.DataModel === "undefined")
                return response;
            if (encryptedData){
                response.data = ParseResponse(response.data);
            }
            return response;
        },
        function (error) {
            if (error.response.status == 401) {
                window.location.reload();
            }
            if (encryptedData) error.response.data = ParseResponse(error.response.data);
            else {
                if (!error.response.data) {
                    throw DEFAULT_INTERNAL_ERROR;
                }
            }
            return Promise.reject(error.response);
        }
    );
};
