import { Component, OnInit } from "@angular/core";
import {PERMISOS, ROLES} from "@cmp/core";

@Component({
    selector: "app-gestion",
    templateUrl: "./gestion.component.html",
    styleUrls: ["./gestion.component.css"]
})
export class GestionComponent implements OnInit {
    breadcrumb: any;
    nec: any;
    
    _permisos = PERMISOS;
    _roles = ROLES;
    
    constructor() {}

    ngOnInit() {
      //this.nec = JSON.parse(localStorage.getItem('nec'));
    }
}
