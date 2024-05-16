import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GestionExtranetComponent } from "./gestion-extranet.component";
import { HomeRoutingModule } from "./gestion-extranet-routing.module";
import { SharedModule } from "@app/_shared";
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {CoreDirectivesModule} from "@cmp/core";

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        NzLayoutModule,
        NzMenuModule,
        NzProgressModule,
        NzIconModule,
        CoreDirectivesModule
    ],
    declarations: [
      GestionExtranetComponent
    ],
    providers: []
})
export class GestionExtranetModule {}
