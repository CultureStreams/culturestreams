import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialDesignModule } from "./modules/material-design/material-design.module";

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { IconLogoComponent } from '@shared/components/icons/icon-logo/icon-logo.component';
import { IconLogoOnlyComponent } from '@shared/components/icons/icon-logo-only/icon-logo-only.component';

@NgModule({
  declarations: [
    IconLogoComponent,
    IconLogoOnlyComponent,
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
  ],
  exports: [
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,

    IconLogoComponent,
    IconLogoOnlyComponent,
  ]
})
export class SharedModule { }
