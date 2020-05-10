import { Component, OnInit, Input } from '@angular/core';

import { DataStore } from '@core/services/data.service';

import { Organizer } from '@core/models/organizer.model';
import { Happening } from '@core/models/happening.model';

import { Router } from '@angular/router';

@Component({
  selector: 'cs-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  @Input() event: Happening;

  protected organizers: Organizer[] = [];
  // protected date: Date;

  constructor(
    protected router: Router,
    protected store: DataStore) {
    // this.date = new Date();
   }

  ngOnInit() {
  }

  protected navigateToEvent(event) {
    this.router.navigate(['/event', event.id]);
  }

}
