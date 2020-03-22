import { Component, OnInit } from '@angular/core';
import event from '../../../../dummy/event.json';

@Component({
  selector: 'app-event-show',
  templateUrl: './event-show.component.html',
  styleUrls: ['./event-show.component.css']
})
export class EventShowComponent implements OnInit {

  protected event;

  constructor() { }

  ngOnInit() {
    this.event = event;
    //console.log(this.event);
  }

}
