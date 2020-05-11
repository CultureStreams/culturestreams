import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseRoutingModule, browseRoutingComponents } from './browse-routing.module';
import { SharedModule } from "@shared/shared.module";

import { EventDetailComponent } from "./components/event-detail/event-detail.component";
import { EventOverviewComponent } from "./components/event-overview/event-overview.component";

@NgModule({
  declarations: [
    browseRoutingComponents,
    EventDetailComponent,
    EventOverviewComponent
  ],
  imports: [
    CommonModule,
    BrowseRoutingModule,
    SharedModule
  ],
  exports:[
  ]
})
export class BrowseModule { }
