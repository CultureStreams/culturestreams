import { Component, OnInit, Input } from '@angular/core';

import { DataStore } from '@core/services/data.service';

import { Organizer } from '@core/models/organizer.model';
import { Happening } from '@core/models/happening.model';

import { Router } from '@angular/router';

@Component({
  selector: 'cs-event-overview',
  templateUrl: './event-overview.component.html',
  styleUrls: ['./event-overview.component.css']
})
export class EventOverviewComponent implements OnInit {

  @Input() event: Happening;

  // protected organizers: Organizer[] = [];
  // protected date: Date;

  constructor(
    protected router: Router,
    // protected store: DataStore
  ) {
    // this.date = new Date();
   }

  ngOnInit() {
  }
  public navigateToEvent(event) {
    this.router.navigate(['browse/event', event.id]);
  }

}
