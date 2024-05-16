import { NgModule, Component } from '@angular/core';
import { SharedModule } from '@app/_shared';
import * as components from "./index";
import { RouterModule } from "@angular/router";
import { CoreDirectivesModule } from '../directives/core-directives.module';
import {
    NzDatePickerModule,
    NzFormModule,
    NzIconModule,
    NzInputModule,
    NzRadioModule,
    NzSelectModule
} from "ng-zorro-antd";

import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzResizableModule } from 'ng-zorro-antd/resizable';



import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzButtonModule} from "ng-zorro-antd/button";
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
    imports: [
        SharedModule,
        CoreDirectivesModule,
        RouterModule,
        //NzFormModule,
        ReactiveFormsModule,
        FormsModule,
        //NzSelectModule,
        //NzInputModule,
        //NzCheckboxModule,
        //NzButtonModule,
        //NzRadioModule,
        //NzDatePickerModule,
        //NzIconModule,
        //NzModalModule,

        CKEditorModule,

        NzAffixModule,
        NzAlertModule,
        NzAnchorModule,
        NzAutocompleteModule,
        NzAvatarModule,
        NzBackTopModule,
        NzBadgeModule,
        NzButtonModule,
        NzBreadCrumbModule,
        NzCalendarModule,
        NzCardModule,
        NzCarouselModule,
        NzCascaderModule,
        NzCheckboxModule,
        NzCollapseModule,
        NzCommentModule,
        NzDatePickerModule,
        NzDescriptionsModule,
        NzDividerModule,
        NzDrawerModule,
        NzDropDownModule,
        NzEmptyModule,
        NzFormModule,
        NzGridModule,
        NzI18nModule,
        NzIconModule,
        NzInputModule,
        NzInputNumberModule,
        NzLayoutModule,
        NzListModule,
        NzMentionModule,
        NzMenuModule,
        NzMessageModule,
        NzModalModule,
        NzNotificationModule,
        NzPageHeaderModule,
        NzPaginationModule,
        NzPopconfirmModule,
        NzPopoverModule,
        NzProgressModule,
        NzRadioModule,
        NzRateModule,
        NzResultModule,
        NzSelectModule,
        NzSkeletonModule,
        NzSliderModule,
        NzSpinModule,
        NzStatisticModule,
        NzStepsModule,
        NzSwitchModule,
        NzTableModule,
        NzTabsModule,
        NzTagModule,
        NzTimePickerModule,
        NzTimelineModule,
        NzToolTipModule,
        NzTransferModule,
        NzTreeModule,
        NzTreeSelectModule,
        NzTypographyModule,
        NzUploadModule,
        NzResizableModule,
    ],
    declarations: [
        components.AppPageNotFoundComponent,
        components.LogoSectionComponent,
        components.MenuOptionsComponent,
        components.AppHeaderComponent,
        components.AppFooterComponent,
        components.FileUploaderCustomComponent,
        components.AudioUploaderCustomComponent,
        components.FileDownloaderCustomComponent,
        components.AppMyChkEditorComponent,
        components.AppPreviewPreguntaComponent,
        components.AppFooterExtComponent,
        components.AppHeaderExtComponent,
        components.LogoSectionExtComponent,
        components.MenuOptionsExtComponent,
        components.FileUploaderExtranetComponent
    ],
    entryComponents: [
    ],
    exports: [
        components.AppPageNotFoundComponent,
        components.AppHeaderComponent,
        components.AppFooterComponent,
        components.FileUploaderCustomComponent,
        components.AudioUploaderCustomComponent,
        components.FileDownloaderCustomComponent,
        components.AppMyChkEditorComponent,
        components.AppPreviewPreguntaComponent,
        components.AppFooterExtComponent,
        components.AppHeaderExtComponent,
        components.FileUploaderExtranetComponent
    ]
})
export class CoreComponentsModule { }
