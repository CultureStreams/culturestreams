import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatSelectModule, MatNativeDateModule } from  '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AddEventFormComponent } from './pages/add-event-form/add-event-form.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { Routes, RouterModule } from '@angular/router';
import { WikiComponent } from './pages/wiki/wiki.component';
import { HomeComponent } from './pages/home/home.component';
import { EventShowComponent } from './pages/calendar/event-show/event-show.component';
import {MatCardModule} from '@angular/material/card';
import { EventItemComponent } from './pages/calendar/event-item/event-item.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
//import { EventShowComponent } from './pages/calendar/event-show/event-show.component';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryPreviewComponent } from './pages/home/category-preview/category-preview.component';
import { ArtistSectionComponent } from './pages/artist-section/artist-section.component';
registerLocaleData(localeDe, 'de-DE');


const appRoutes: Routes = [
  { path: 'about', component: AboutUsComponent },
  { path: 'event/:id', component: EventShowComponent },
  { path: 'calendar',      component: CalendarComponent },
  { path: 'add-event',      component: AddEventFormComponent },
  { path: 'wiki',      component: WikiComponent },
  { path: 'home',      component: HomeComponent },
  { path: 'artists',      component: ArtistSectionComponent },
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
    WikiComponent,
    EventShowComponent,
    EventItemComponent,
    CategoryPreviewComponent,
    ArtistSectionComponent
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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
