import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-footer",
    templateUrl: "./app-footer.component.html"
})
export class AppFooterComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    year=new Date().getFullYear();
}
