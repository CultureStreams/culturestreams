import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { LOCALE_ID } from '@angular/core';

import { NavComponent } from '@modules/main-layout/components/nav/nav.component';
import { FooterComponent } from '@modules/main-layout/components/footer/footer.component';
// import { EventItemBaseComponent } from './components/events/event-item-base/event-item-base.component';
// import { EventItemDetailComponent } from './components/events/event-item-detail/event-item-detail.component';
registerLocaleData(localeDe, 'de');

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,

    NavComponent,
    FooterComponent,

    // EventItemBaseComponent,
    // EventItemDetailComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
