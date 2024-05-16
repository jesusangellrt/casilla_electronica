import { Component, OnInit } from "@angular/core";
import {PERMISOS, ROLES} from "@cmp/core";

@Component({
    selector: "app-gestion-extranet",
    templateUrl: "./gestion-extranet.component.html",
    styleUrls: ["./gestion-extranet.component.css"]
})
export class GestionExtranetComponent implements OnInit {
    breadcrumb: any;
    nec: any;
    
    _permisos = PERMISOS;
    _roles = ROLES;
    
    constructor() {}

    ngOnInit() {
      //this.nec = JSON.parse(localStorage.getItem('nec'));
    }
}
