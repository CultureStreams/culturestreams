import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialDesignModule } from "./modules/material-design/material-design.module";
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { IconLogoComponent } from './components/icons/icon-logo/icon-logo.component';
import { IconLogoOnlyComponent } from './components/icons/icon-logo-only/icon-logo-only.component';

import { HelperModule } from "./modules/helper/helper.module";
import { TextExcerptFilter, AttachStringFilter } from "./pipes/text.pipe";
import { FilterByDateRangePipe, FilterSameDatePipe } from "./pipes/date.pipe";

@NgModule({
  declarations: [
    IconLogoComponent,
    IconLogoOnlyComponent,
    TextExcerptFilter,
    AttachStringFilter,
    FilterByDateRangePipe,
    FilterSameDatePipe
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    FlexLayoutModule,
    HelperModule
  ],
  exports: [
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    FlexLayoutModule,
    HelperModule,

    IconLogoComponent,
    IconLogoOnlyComponent,
    TextExcerptFilter,
    AttachStringFilter,
    FilterByDateRangePipe,
    FilterSameDatePipe
  ]
})
export class SharedModule { }
