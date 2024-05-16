import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-breadcrumb",
    templateUrl: "./app-breadcrumb.component.html"
})
export class BreadCrumbComponent implements OnInit {
    @Input() data: Array<any>;
    constructor() {}

    ngOnInit() {
    }
    handleDescargarManual = () => {    
        window.open(`manuales${this.data[1].link}.pdf`,"_blank")
    }

    get _manual()
    {
        if (typeof this.data !== 'undefined' && this.data.length == 2 && this.data[1].manual)
        {
            return true;
        }
        return false;
    }
}
