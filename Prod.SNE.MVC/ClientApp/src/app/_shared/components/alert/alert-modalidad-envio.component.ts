import { Component, OnInit, Input } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";

@Component({
    templateUrl: "./alert-modalidad-envio.component.html",
    styles: [
        `
            .circle-error {
                color: #ffc2c2;
            }

            .times-error {
                color: #d9534f;
            }

            .circle-warning {
                color: #f8bb86;
            }

            .exclamation-warning {
                color: #ff9539;
            }
        `
    ]
})
export class AlertModadlidadEnvioComponent implements OnInit {
    @Input()
    type?: string;
    @Input()
    title?: string;
    @Input()
    msg?: string;
    @Input()
    onOk?: Function;

    cancelButton: Boolean = false;
    okButton: Boolean = true;
    tipo_envio_model?: number;
    tipo_envio_error?: boolean = false;

    theme: any;

    constructor(public bsModalRef: BsModalRef) {
        
        //this.tipo_envio_model = "";
    }

    ngOnInit() {
        this.tipo_envio_model = null;
        this.theme = {
            circle: {
                "circle-ok": this.type == "success",
                "circle-error": this.type == "error",
                "circle-warning": this.type == "warning"
            },
            icon: {
                "fa-check color-ok": this.type == "success",
                "fa-times times-error": this.type == "error",
                "fa-exclamation exclamation-warning": this.type == "warning",
                "fa-timesss times-errorhh": this.type == "info"
            },
            button: {
                "btn-success": this.type == "success",
                "btn-danger": this.type == "error",
                "btn-primary-custom": this.type == "warning"
            }
        };
    }
    setTipo = (tipo) => {
        this.tipo_envio_model = tipo;
    };
    handleOk = () => {
        
        if (this.tipo_envio_model === null) {
            this.tipo_envio_error = true;
        } else {
            this.bsModalRef.hide();
            if (typeof this.onOk === "function") this.onOk(this.tipo_envio_model);
        }

    };

    handleCancel = () => {
        this.bsModalRef.hide();
    };

}
