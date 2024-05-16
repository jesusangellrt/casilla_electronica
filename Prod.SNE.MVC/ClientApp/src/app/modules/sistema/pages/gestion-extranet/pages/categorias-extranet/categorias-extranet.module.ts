import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasExtranetRoutingModule } from './categorias-extranet-routing.module';
import { SharedModule } from '@app/_shared';
import { NzButtonModule, NzFormModule, NzMessageModule, NzInputNumberModule, NzDatePickerModule, NzTabsModule, NzCheckboxModule } from 'ng-zorro-antd';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CoreComponentsModule, CoreDirectivesModule } from '@cmp/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import { CategoriasExtranetComponent } from '../categorias-extranet/categorias-extranet.component';
import { SaveUpdateCategoriaExtComponent } from './save-update-categoria-ext/save-update-categoria-ext.component';

@NgModule({
  declarations: [
    CategoriasExtranetComponent,
    SaveUpdateCategoriaExtComponent
  ],
  entryComponents:[],
  imports: [
    CommonModule,
    CategoriasExtranetRoutingModule,
    SharedModule, 
    NzButtonModule,
    NzDatePickerModule,
    NzModalModule,
    NzNotificationModule,
    NzTableModule,
    NzSelectModule,
    NzInputModule,
    NzIconModule,
    CoreComponentsModule,
    NgxSpinnerModule,
    NzFormModule,
    NzCheckboxModule,
    NzTabsModule,
    ReactiveFormsModule,
    NzMessageModule,
    NzInputNumberModule,
    CoreDirectivesModule
  ]
})
export class CategoriasExtranetModule { }
