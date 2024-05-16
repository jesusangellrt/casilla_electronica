import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EncuestadoRoutingModule } from "./encuestado-routing.module";
import { SharedModule } from "@app/_shared";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectModule } from 'ng-zorro-antd/select';
import {CoreComponentsModule, CoreDirectivesModule} from "@cmp/core";
import { NgxSpinnerModule } from 'ngx-spinner';
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzProgressModule } from "ng-zorro-antd/progress";
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { EncuestadoComponent } from './encuestado.component'
import { NzSliderModule } from "ng-zorro-antd/slider";
import { NgxYoutubePlayerModule } from "ngx-youtube-player";
import { NzSpinModule } from "ng-zorro-antd";

@NgModule({
  imports: [
    CommonModule,
    EncuestadoRoutingModule,
    SharedModule,
    NzButtonModule,
    NzDatePickerModule,
    NzSliderModule,
    NzTableModule,
    FormsModule,
    NzModalModule,
    NzNotificationModule,
    NzInputModule,
    NzIconModule,
    NzFormModule,
    NzCardModule,
    NzSelectModule,
    CoreComponentsModule,
    NgxSpinnerModule,
    NzSpinModule,
    NzLayoutModule,
    NzMenuModule,
    NzProgressModule,
    NzDescriptionsModule,
    CoreDirectivesModule,
    ReactiveFormsModule,
    NgxYoutubePlayerModule.forRoot() 
  ],
  providers: [],
  declarations: [EncuestadoComponent],
})
export class EncuestadoModule { }
