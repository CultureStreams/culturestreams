import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelsRoutingModule, channelsRoutingComponents } from './channels-routing.module';

import { SharedModule } from "@shared/shared.module";

@NgModule({
  declarations: [
    channelsRoutingComponents
  ],
  imports: [
    CommonModule,
    ChannelsRoutingModule,
    SharedModule
  ],
  exports:[
  ]
})
export class ChannelsModule { }
