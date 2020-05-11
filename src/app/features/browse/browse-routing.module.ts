import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowseComponent } from "./components/browse.component";

import { CalendarComponent } from './pages/calendar/calendar.component';
import { EventComponent } from "./pages/event/event.component";
import { ChannelsComponent } from "./pages/channels/channels.component";

const browseRoutes: Routes = [
  { path: '', component:  BrowseComponent,
    children: [
      { path: '', redirectTo: 'events', pathMatch: 'full' },
      { path: 'event/:id', component: EventComponent },
      { path: 'events', component: CalendarComponent },
      { path: 'channels', component: ChannelsComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(browseRoutes)],
  exports: [RouterModule]
})
export class BrowseRoutingModule { }
export const browseRoutingComponents = [
  BrowseComponent,
  CalendarComponent,
  ChannelsComponent,
  EventComponent
]
