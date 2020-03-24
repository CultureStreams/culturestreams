import { Component, OnInit } from '@angular/core';
import eventsJson from '../../../dummy/arrays.json';
import { Week } from 'src/interfaces/week';
import { Router } from '@angular/router';
import { EventService } from 'src/services/event.service';
import { OrgaEvent } from 'src/interfaces/event';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public events: OrgaEvent[] = [];
  public week: Date[] = new Array<Date>(); 
  private date: Date;
  
  private filterDate: Date;
  private filterCategory;
  private filterHostName;

  constructor(protected router: Router,
    protected eventService: EventService) { 
    this.date = new Date();
    console.log(this.events);
  }

  ngOnInit() {
    this.getWeek(this.date);
    this.getEvents();
    console.log(this.events);
  }

  protected getEvents(category = 0) {
    this.week.forEach((day) => {
      /*this.eventService.getEventsByFilterParams(day, category)
      .subscribe((a) => {
          a.forEach(e => {
            e['parsedDate'] = new Date(e.startDate);
            this.events.push(e);
            console.log(this.events);
          });
      });*/
    });
  }

  protected getFilteredEvents() {
    this.getWeek(this.filterDate);
    this.getEvents();
  }

  protected navigateToEvent(event) {
    console.log(event.date);
    let dateN = new Date(event.date);
    this.router.navigate(['/event', event.id]);
  }

  protected setHost($event) {
    this.filterHostName = $event.target.value;
  }

  protected setCategory($event) {
    this.filterCategory = $event.target.value;
  }

  protected getWeek(day){

    this.week = [];

    day.setDate(day.getDate());
    this.week.push(day);

    var day1 = new Date();
    day1.setDate(day.getDate()+1);
    this.week.push(day1);

    var day2 = new Date();
    day2.setDate(day.getDate()+2);
    this.week.push(day2);

    var day3 = new Date();
    day3.setDate(day.getDate()+3);
    this.week.push(day3);

    var day4 = new Date();
    day4.setDate(day.getDate()+4);
    this.week.push(day4);

    var day5 = new Date();
    day5.setDate(day.getDate()+5);
    this.week.push(day5);

    var day6 = new Date();
    day6.setDate(day.getDate()+6);
    this.week.push(day6);
  }
  
}
