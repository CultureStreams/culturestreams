import { Component, OnInit, Input } from '@angular/core';
import { DataStore } from 'src/services/data.service';
import { Organizer } from 'src/interfaces/organizer';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  @Input() event: Event;

  protected organizers: Organizer[] = [];
  protected date: Date;

  constructor( protected dataStore: DataStore) {
    this.date = new Date();
   }

  ngOnInit() {
  }

}
