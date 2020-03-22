import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  @Input() event: Event;

  protected date: Date;

  constructor() {
    this.date = new Date();
   }

  ngOnInit() {

    console.log(this.event);
  }

}
