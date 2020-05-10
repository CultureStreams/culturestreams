import { Component, OnInit } from '@angular/core';
// import { EventService } from 'src/services/event.service';
import { ActivatedRoute } from "@angular/router";

import { Category } from '@core/models/category.model';
import { Happening } from '@core/models/happening.model';

import { DataStore } from "@core/services/data.service";


@Component({
  selector: 'cs-event-show',
  templateUrl: './event-show.component.html',
  styleUrls: ['./event-show.component.css']
})
export class EventShowComponent implements OnInit {

  public event: Happening;
  public id;
  public organizerName: string;
  public category: Category;

  constructor(
    protected store: DataStore,
    // protected eventService: EventService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(queryParams => {
      this.id = queryParams.get("id");
      console.log(this.id);
      this.store.readEvent(this.id).subscribe((e) => {
        console.log(e);
        this.event = e[0];
        console.log(this.event);
      })
      // this.eventService.getEvent(this.id).subscribe((e) => {
      //   console.log(e);
      //   this.event = e[0];
      //   console.log(this.event);
      //   this.store.categories$.subscribe((c) => {
      //     console.log(c);
      //     this.category = c[0];
      //   });
      //   this.eventService.getOrganizer(this.event.organizer).subscribe((o) => {
      //     console.log(o);
      //     this.organizerName = o[0].name;
      //   });
      // });

    })
  }

}
