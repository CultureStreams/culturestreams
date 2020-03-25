import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/services/event.service';
import { ActivatedRoute } from "@angular/router";
import { Category } from 'src/interfaces/category';
import { OrgaEvent } from 'src/interfaces/event';


@Component({
  selector: 'app-event-show',
  templateUrl: './event-show.component.html',
  styleUrls: ['./event-show.component.css']
})
export class EventShowComponent implements OnInit {

  protected event: OrgaEvent;
  protected id;
  protected organizerName: string;
  protected category: Category;

  constructor(protected eventService: EventService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(queryParams => {
      this.id = queryParams.get("id");
      this.organizerName = queryParams.get("organizer");
      console.log(this.organizerName);
      this.eventService.getEvent(this.id).subscribe((e) => {
        this.event = e[0];
        console.log(this.event);
        this.eventService.getCategory(this.event.category).subscribe((c) => {
          console.log(c);
          this.category = c[0];
        });
        this.eventService.getOrganizer(this.event.category).subscribe((o) => {
          console.log(o);
          this.organizerName = o[0].name;
        });
      });
      
    })
  }

}
