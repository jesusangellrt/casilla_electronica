import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgSelectModule } from "@ng-select/ng-select";

// components
import * as components from "./components";

// directives
import { AutoFocusDirective } from "./directives";
// pipes
import { DateFormatPipe } from "./pipes/date-format.pipe";
//services
import { NgxBootstrapModule } from "./modules/ngx-bootstrap.module";
import { PopoverModule } from "ngx-bootstrap/popover";
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        NgSelectModule,
        NgxBootstrapModule,
        FileUploadModule,
        PopoverModule.forRoot()
    ],
    declarations: [
        // components
        components.AlertComponent,
        components.AlertCustomComponent,
        components.AlertModadlidadEnvioComponent,
        components.TextAreaComponent,
        components.ModalEnvelopeComponent,
        components.BreadCrumbComponent,
        components.DatatableBodyComponent,
        components.DatatableComponent,
        components.DatatableCustomColumnComponent,
        components.DatatableHeaderComponent,
        components.DatatablePaginationComponent,
        components.DatatableToolbarComponent,
        components.DatatableColumnComponent,
        components.ProgressBarComponent,
        components.ShowMoreTextComponent,
        components.FileUploaderComponent,
        components.FileButtonRemoverComponent,
        // pipes
        DateFormatPipe,
        //directives
        AutoFocusDirective,
    ],
    providers: [],
    entryComponents: [
        components.AlertComponent,
        components.AlertCustomComponent,
        components.AlertModadlidadEnvioComponent
	],
    exports: [
        // components
        components.AlertComponent,
        components.AlertCustomComponent,
        components.AlertModadlidadEnvioComponent,
        components.TextAreaComponent,
        components.ModalEnvelopeComponent,
        components.BreadCrumbComponent,
        components.DatatableBodyComponent,
        components.DatatableComponent,
        components.DatatableCustomColumnComponent,
        components.DatatableHeaderComponent,
        components.DatatablePaginationComponent,
        components.DatatableToolbarComponent,
        components.DatatableColumnComponent,
        components.ProgressBarComponent,
        components.ShowMoreTextComponent,
        components.FileUploaderComponent,
        components.FileButtonRemoverComponent,
        // pipes
        DateFormatPipe,
        // directives
        AutoFocusDirective,
        NgSelectModule,
        NgxBootstrapModule,
        CommonModule,
        FormsModule,
        FileUploadModule,
    ]
})
export class SharedModule {}
