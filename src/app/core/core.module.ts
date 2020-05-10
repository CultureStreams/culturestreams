import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

// import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { LayoutModule } from '@angular/cdk/layout';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { LOCALE_ID } from '@angular/core';
registerLocaleData(localeDe, 'de');

import { DataStore } from '@core/services/data.service';


@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    // BrowserModule,
    HttpClientModule,
    LayoutModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de' },
    DataStore,
    DatePipe
  ],
})
export class CoreModule { }
