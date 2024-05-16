import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-footer-ext",
    templateUrl: "./app-footer-ext.component.html"
})
export class AppFooterExtComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    year=new Date().getFullYear();
}
