import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/services/event.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-event-show',
  templateUrl: './event-show.component.html',
  styleUrls: ['./event-show.component.css']
})
export class EventShowComponent implements OnInit {

  protected event;
  protected id;

  constructor(protected eventService: EventService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParamMap.subscribe(queryParams => {
      this.id = queryParams.get("id");
      console.log(this.id);
      this.event = this.eventService.getEvent(this.id);
      console.log(this.event);
    })
  }

}
