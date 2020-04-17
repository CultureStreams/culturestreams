import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { CalendarComponent } from './pages/calendar/calendar.component';
// import { AboutUsComponent } from './pages/about-us/about-us.component';
// import { AddEventFormComponent } from './pages/add-event-form/add-event-form.component';
// import { ImprintComponent } from './pages/imprint/imprint.component';
// import { CultureChannelsComponent } from './pages/culture-channels/culture-channels.component';
// import { HomeComponent } from './pages/home/home.component';
// import { EventShowComponent } from './pages/calendar/event-show/event-show.component';
// import { EventItemComponent } from './pages/calendar/event-item/event-item.component';
// import { ContanctComponent } from './pages/contanct/contanct.component';
// import { CategoryPreviewComponent } from './pages/home/category-preview/category-preview.component';
// import { ArtistSectionComponent } from './pages/artist-section/artist-section.component';

const homeRoutes: Routes = [
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
  // imports: [RouterModule.forChild(homeRoutes)],
  // exports: [RouterModule]
})
export class HomeRoutingModule { }
// export const homeRoutingComponents = [
//   CalendarComponent,
//   AboutUsComponent,
//   AddEventFormComponent,
//   ImprintComponent,
//   HomeComponent,
//   CultureChannelsComponent,
//   EventShowComponent,
//   EventItemComponent,
//   CategoryPreviewComponent,
//   ArtistSectionComponent,
//   ContanctComponent,
// ]
