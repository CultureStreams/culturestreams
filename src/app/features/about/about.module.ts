import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule, aboutRoutingComponents } from './about-routing.module';
import { SharedModule } from "@shared/shared.module";
import { ImprintComponent } from './pages/imprint/imprint.component';

@NgModule({
  declarations: [
    aboutRoutingComponents,
    ImprintComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ],
  exports:[
    ImprintComponent
  ]
})
export class AboutModule { }
