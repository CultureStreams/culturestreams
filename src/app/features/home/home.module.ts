import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule, homeRoutingComponents } from './home.routing';

import { SharedModule } from "@shared/shared.module";
import { CurrentEventsComponent } from './../browse/components/current-events/current-events.component';

@NgModule({
  declarations: [
    homeRoutingComponents,
    CurrentEventsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
