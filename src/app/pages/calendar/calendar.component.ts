import { Component, OnInit } from '@angular/core';
import { Week } from 'src/interfaces/week';
import { Router } from '@angular/router';
import { EventService } from 'src/services/event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public events;
  public week: Date[] = new Array<Date>(); 
  private date: Date;
  
  private filterDate: Date;
  private filterCategory;
  private filterHostName;

  constructor(protected router: Router,
    protected eventService: EventService) { 
    this.filterDate = new Date();
    console.log(this.events);
  }

  ngOnInit() {
    //this.events = this.eventService.getEventsByDate(this.filterDate)
    //console.log(this.events);
    //console.log(this.events);
    this.getWeek(0);
    this.parseDates();
    //console.log(this.events);
  }

  protected navigateToEvent(event) {
    console.log(event.date);
    let dateN = new Date(event.date);
    console.log(dateN);
    this.router.navigate(['/event', event.id]);
  }
  
  protected setDate($event) {
      this.filterDate = $event.target.value;
  }

  protected setHost($event) {
    this.filterHostName = $event.target.value;
  }

  protected setCategory($event) {
    this.filterCategory = $event.target.value;
  }

  protected filter() {
    this.parseDates();
  }


  protected getWeek(addWeek: number){
    let addDayVar = addWeek*7;

    var day = new Date();
    day.setDate(day.getDate()+addDayVar);
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
    
    console.log(this.week);
  }

  protected parseDates() {
    this.events = this.eventService.getEventsByFilterParams(this.filterDate, this.filterHostName, this.filterCategory).map(event => {
      event['parsedDate'] = new Date(event.date);
      return event;
   });
  }
  

}
