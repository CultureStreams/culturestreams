import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule, aboutRoutingComponents } from './about-routing.module';

import { SharedModule } from "@shared/shared.module";

@NgModule({
  declarations: [
    aboutRoutingComponents
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ],
  exports:[
  ]
})
export class AboutModule { }
