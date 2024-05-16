import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-show-more-text",
    template: `        
        <p>
            {{ available_text + (!open && largerText ? "..." : "") }}
            <a
                *ngIf="largerText"
                [popover]="popTemp" triggers="mouseenter:mouseleave" 
                class="show-more-button"
                href="javascript:"
                (click)="toogleOpen()"
                >{{ open ? "Ver menos" : "Ver más" }}</a>
                <ng-template #popTemp>{{text}}</ng-template>
        </p>

        <!-- triggers="mouseenter:mouseleave"-->
    `,
    styles: [
        `
            p {
                margin-bottom: 0px;
            }
            .show-more-button {
                font-size: 11px;
            }
        `
    ]
})
export class ShowMoreTextComponent implements OnInit {
    @Input()
    text: string;

    @Input()
    limit: number = 20;

    @Input()
    largerText: Boolean;

    open: Boolean = false;

    constructor() {}

    ngOnInit(): void {
        this.text = typeof this.text !== 'undefined' ? this.text : '';
        if (this.text !== null )
            if (this.text!.length > this.limit) this.largerText = true;
    }

    get available_text(): string {
        if (!this.largerText) return this.text;

        if (!this.open) {
            return this.text != null ? this.text.substring(0, this.limit) : "";
        } else {
            return this.text;
        }
    }

    toogleOpen = () => {
        this.open = this.open ? false : true;
    };
}
