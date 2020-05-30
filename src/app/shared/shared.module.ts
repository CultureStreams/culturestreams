import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialDesignModule } from "./modules/material-design/material-design.module";
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { IconLogoComponent } from './components/icons/icon-logo/icon-logo.component';
import { IconLogoOnlyComponent } from './components/icons/icon-logo-only/icon-logo-only.component';

import { HelperModule } from "./modules/helper/helper.module";
import { TextExcerptFilter, AttachStringFilter, TextLinebreakFilter } from "./pipes/text.pipe";
import { FilterByDateRangePipe, FilterSameDatePipe } from "./pipes/date.pipe";
import { ImageValidationPipe } from "./pipes/image.pipe";

import { ImagePreloadDirective } from "./directives/image-preload.directive";

@NgModule({
  declarations: [
    IconLogoComponent,
    IconLogoOnlyComponent,
    TextExcerptFilter,
    TextLinebreakFilter,
    AttachStringFilter,
    FilterByDateRangePipe,
    FilterSameDatePipe,
    ImageValidationPipe,
    ImagePreloadDirective
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HelperModule,
    LazyLoadImageModule
  ],
  exports: [
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HelperModule,
    LazyLoadImageModule,
    IconLogoComponent,
    IconLogoOnlyComponent,
    TextExcerptFilter,
    AttachStringFilter,
    FilterByDateRangePipe,
    FilterSameDatePipe,
    ImageValidationPipe,
    TextLinebreakFilter,
    ImagePreloadDirective
  ]
})
export class SharedModule { }
