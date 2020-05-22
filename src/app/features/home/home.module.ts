import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule, homeRoutingComponents } from './home.routing';

import { SharedModule } from "@shared/shared.module";

@NgModule({
  declarations: [
    homeRoutingComponents
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
