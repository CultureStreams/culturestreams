import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';

// import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// import { registerLocaleData } from '@angular/common';
// import localeDe from '@angular/common/locales/de';
// import { LOCALE_ID } from '@angular/core';
// registerLocaleData(localeDe, 'de');

import { DataStore } from '@core/services/data.service';
import { TagHttpService } from './services/http-services/tag-http.service';


@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    // BrowserModule,
    HttpClientModule,
    LayoutModule,
  ],
  providers: [
    // { provide: LOCALE_ID, useValue: 'de' },
    TagHttpService,
    DataStore,
  ],
})
export class CoreModule { }
