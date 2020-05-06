import { Component, OnInit, Input } from '@angular/core';
import { DataStore } from 'src/services/data.service';
import { Organizer } from 'src/models/organizer';
import { OrgaEvent } from 'src/models/event';

@Component({
  selector: 'cs-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  @Input() event: OrgaEvent;

  protected organizers: Organizer[] = [];
  protected date: Date;

  constructor( protected dataStore: DataStore) {
    this.date = new Date();
   }

  ngOnInit() {
  }

}
