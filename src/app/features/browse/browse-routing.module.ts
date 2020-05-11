import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowseComponent } from "./components/browse.component";
import { CalendarComponent } from './pages/calendar/calendar.component';
import { EventComponent } from "./pages/event/event.component";
// import { AddEventFormComponent } from './pages/add-event-form/add-event-form.component';
// import { EventShowComponent } from './pages/calendar/event-show/event-show.component';
// import { EventItemComponent } from './pages/calendar/event-item/event-item.component';
import { ChannelsComponent } from "./pages/channels/channels.component";

const browseRoutes: Routes = [
  { path:  '', component:  BrowseComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'events' },
      { path: 'event/:id', component: EventComponent },
      { path: 'events', component: CalendarComponent },
      { path: 'channels', component: ChannelsComponent }
    ]
  }
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  // { path: 'about', component: AboutUsComponent },
  // { path: 'event/:id', component: EventShowComponent },
  // { path: 'calendar', component: CalendarComponent },
  // { path: 'add-event', component: AddEventFormComponent },
  // { path: 'culture-channels', component: CultureChannelsComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'artists', component: ArtistSectionComponent },
  // { path: 'imprint', component: ImprintComponent },
  // { path: 'contact', component: ContanctComponent },
  // { path: '', component: HomeComponent }
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
//   AboutUsComponent,
//   AddEventFormComponent,
//   ImprintComponent,
//   HomeComponent,
//   CultureChannelsComponent,
  EventComponent,
//   EventItemComponent,
//   CategoryPreviewComponent,
//   ArtistSectionComponent,
//   ContanctComponent,
]
