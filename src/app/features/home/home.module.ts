import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule, homeRoutingComponents } from './home.routing';

import { SharedModule } from "@shared/shared.module";
import { ImprintComponent } from './pages/imprint/imprint.component';
import { CurrentEventsComponent } from './../browse/components/current-events/current-events.component';

@NgModule({
  declarations: [
    homeRoutingComponents,
    ImprintComponent,
    CurrentEventsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
