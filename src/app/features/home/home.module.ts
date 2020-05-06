import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventItemBaseComponent } from './components/events/event-item-base/event-item-base.component';
import { EventItemDetailComponent } from './components/events/event-item-detail/event-item-detail.component';
import { MaterialDesignModule } from '@shared/modules/material-design/material-design.module';

// import { HomeRoutingModule, homeRoutingComponents } from './home-routing.module';

@NgModule({
  declarations: [
    EventItemBaseComponent,
    EventItemDetailComponent
    // homeRoutingComponents,
  ],
  imports: [
    MaterialDesignModule,
    // HomeRoutingModule,
  ],
  exports:[
    EventItemBaseComponent,
    EventItemDetailComponent
  ]
})
export class HomeModule { }
