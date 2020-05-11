import { Component, OnInit, Input } from '@angular/core';

import { Happening } from '@core/models/happening.model';

@Component({
  selector: 'cs-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  @Input() event: Happening;

  constructor(
  ) { }

  ngOnInit() {

  }

}
