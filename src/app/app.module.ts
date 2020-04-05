import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatSelectModule, MatNativeDateModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AddEventFormComponent } from './pages/add-event-form/add-event-form.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { Routes, RouterModule } from '@angular/router';
import { CultureChannelsComponent } from './pages/culture-channels/culture-channels.component';
import { HomeComponent } from './pages/home/home.component';
import { EventShowComponent } from './pages/calendar/event-show/event-show.component';
import { MatCardModule } from '@angular/material/card';
import { EventItemComponent } from './pages/calendar/event-item/event-item.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
//import { EventShowComponent } from './pages/calendar/event-show/event-show.component';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryPreviewComponent } from './pages/home/category-preview/category-preview.component';
import { ArtistSectionComponent } from './pages/artist-section/artist-section.component';
import { ContanctComponent } from './pages/contanct/contanct.component';
import { LayoutModule } from '@angular/cdk/layout';
import { IconLogoComponent } from './components/icons/icon-logo/icon-logo.component';
import { NavComponent } from './components/nav/nav.component';
import { IconLogoOnlyComponent } from './components/icons/icon-logo-only/icon-logo-only.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventItemBaseComponent } from './components/events/event-item-base/event-item-base.component';
import { EventItemDetailComponent } from './components/events/event-item-detail/event-item-detail.component';
registerLocaleData(localeDe, 'de');

const appRoutes: Routes = [
  { path: 'about', component: AboutUsComponent },
  { path: 'event/:id', component: EventShowComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'add-event', component: AddEventFormComponent },
  { path: 'culture-channels', component: CultureChannelsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'artists', component: ArtistSectionComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'contact', component: ContanctComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
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
    IconLogoComponent,
    NavComponent,
    IconLogoOnlyComponent,
    FooterComponent,
    EventItemBaseComponent,
    EventItemDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatMenuModule,
    MatSnackBarModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatTooltipModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaterialTimepickerModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
    ),
    LayoutModule,
    FlexLayoutModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
