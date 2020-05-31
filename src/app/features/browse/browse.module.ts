import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseRoutingModule, browseRoutingComponents } from './browse-routing.module';

import { EventDetailComponent } from "./components/event-detail/event-detail.component";
import { EventOverviewComponent } from "./components/event-overview/event-overview.component";

import { SharedModule } from "@shared/shared.module";
// import { CurrentEventsComponent } from './components/current-events/current-events.component';

@NgModule({
  declarations: [
    browseRoutingComponents,
    EventDetailComponent,
    EventOverviewComponent,
    // CurrentEventsComponent
  ],
  imports: [
    CommonModule,
    BrowseRoutingModule,
    SharedModule
  ],
  exports:[
    // CurrentEventsComponent
  ]
})
export class BrowseModule { }
