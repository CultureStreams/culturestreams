import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarComponent } from '@features/home/pages/calendar/calendar.component';
import { AboutUsComponent } from '@features/home/pages/about-us/about-us.component';
import { AddEventFormComponent } from '@features/home/pages/add-event-form/add-event-form.component';
import { ImprintComponent } from '@features/home/pages/imprint/imprint.component';
import { CultureChannelsComponent } from '@features/home/pages/culture-channels/culture-channels.component';
import { HomeComponent } from '@features/home/pages/home/home.component';
import { EventShowComponent } from '@features/home/pages/calendar/event-show/event-show.component';
import { EventItemComponent } from '@features/home/pages/calendar/event-item/event-item.component';
import { ContanctComponent } from '@features/home/pages/contanct/contanct.component';
import { CategoryPreviewComponent } from '@features/home/pages/home/category-preview/category-preview.component';
import { ArtistSectionComponent } from '@features/home/pages/artist-section/artist-section.component';

const routes: Routes = [
  { path: 'about', component: AboutUsComponent },
  { path: 'event/:id', component: EventShowComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'add-event', component: AddEventFormComponent },
  { path: 'culture-channels', component: CultureChannelsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'artists', component: ArtistSectionComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'contact', component: ContanctComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  CalendarComponent,
  AboutUsComponent,
  AddEventFormComponent,
  ImprintComponent,
  HomeComponent,
  CultureChannelsComponent,
  EventShowComponent,
  EventItemComponent,
  CategoryPreviewComponent,
  ArtistSectionComponent,
  ContanctComponent,
]
