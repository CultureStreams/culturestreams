import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarComponent } from '@modules/home/pages/calendar/calendar.component';
import { AboutUsComponent } from '@modules/home/pages/about-us/about-us.component';
import { AddEventFormComponent } from '@modules/home/pages/add-event-form/add-event-form.component';
import { ImprintComponent } from '@modules/home/pages/imprint/imprint.component';
import { CultureChannelsComponent } from '@modules/home/pages/culture-channels/culture-channels.component';
import { HomeComponent } from '@modules/home/pages/home/home.component';
import { EventShowComponent } from '@modules/home/pages/calendar/event-show/event-show.component';
import { EventItemComponent } from '@modules/home/pages/calendar/event-item/event-item.component';
import { ContanctComponent } from '@modules/home/pages/contanct/contanct.component';
import { CategoryPreviewComponent } from '@modules/home/pages/home/category-preview/category-preview.component';
import { ArtistSectionComponent } from '@modules/home/pages/artist-section/artist-section.component';

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
  // { path: '', component: HomeComponent },
  // {
  //   path: '',
  //   component: HomeComponent,
  //   children: [
  //     {
  //       path: 'home',
  //       loadChildren: () =>
  //         import('@modules/home/home.module').then(m => m.HomeModule)
  //     },
      // {
      //   path: 'about',
      //   loadChildren: () =>
      //     import('@modules/about/about.module').then(m => m.AboutModule)
      // },
      // {
      //   path: 'contact',
      //   loadChildren: () =>
      //     import('@modules/contact/contact.module').then(m => m.ContactModule)
      // }
  //   ]
  // }
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
