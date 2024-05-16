import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/_shared';
import { NzButtonModule, NzFormModule, NzMessageModule, NzInputNumberModule, NzDatePickerModule, NzUploadModule, NzLayoutModule, NzProgressModule, NzMenuModule, NzDescriptionsModule, NzRadioModule, NzTabsModule, NzAlertModule, NzCardModule, NzDividerModule } from 'ng-zorro-antd';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CoreComponentsModule, CoreDirectivesModule } from '@cmp/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PlataformaExtranetComponent } from '../plataforma-extranet/plataforma-extranet.component';
import { PlataformaExtranetRoutingModule } from './plataforma-extranet-routing.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DpDatePickerModule } from 'ng2-date-picker';



@NgModule({
  declarations: [PlataformaExtranetComponent],
  imports: [
    CommonModule,
    PlataformaExtranetRoutingModule,

    SharedModule,
    NzButtonModule,
    NzModalModule,
    NzNotificationModule,
    NzTableModule,
    NzDatePickerModule,
    NzSelectModule,
    NzUploadModule,
    NzIconModule,
    CoreComponentsModule,
    NgxSpinnerModule,
    NzInputNumberModule,
    CoreDirectivesModule,
    FormsModule,
    NzInputModule,
    NzFormModule,
    NzLayoutModule,
    NzMenuModule,
    NzProgressModule,
    NzDescriptionsModule,
    ReactiveFormsModule,
    NzRadioModule,
    NzTabsModule,
    NzCardModule,
    NzAlertModule,
    CKEditorModule,
    NzDividerModule,
    DpDatePickerModule
  ]
})
export class PlataformaExtranetModule { }
