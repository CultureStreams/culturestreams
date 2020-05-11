import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRoutingModule, addRoutingComponents } from './add-routing.module';
import { SharedModule } from "@shared/shared.module";

@NgModule({
  declarations: [
    addRoutingComponents
  ],
  imports: [
    CommonModule,
    AddRoutingModule,
    SharedModule
  ],
  exports:[]
})
export class AddModule { }
