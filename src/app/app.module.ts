import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

import { NavComponent } from '@features/main-layout/components/nav/nav.component';
import { FooterComponent } from '@features/main-layout/components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,

    NavComponent,
    FooterComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
