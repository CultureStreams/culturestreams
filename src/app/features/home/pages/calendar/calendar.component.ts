import { Component, OnInit } from '@angular/core';
import eventsJson from 'src/dummy/arrays.json';
// import { Week } from 'src/models/week';
import { Router } from '@angular/router';
import { EventService } from 'src/services/event.service';
import { OrgaEvent } from 'src/models/event';
import { DataStore } from 'src/services/data.service';
import { Organizer } from 'src/models/organizer';
import { Category } from 'src/models/category';
import { CategoryPreviewComponent } from '../home/category-preview/category-preview.component';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'cs-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  myControl = new FormControl();
  public events: OrgaEvent[] = [];
  public week: Date[] = new Array<Date>();
  private date: Date = new Date();
  filteredOptions: Observable<Organizer[]>;

  public organizers: Organizer[] = [];
  public categories: Category[] = [];

  public isLoaded = false;

  public selectedOrganizerId: number = 0;
  public selectedCategoryId: number = 0;

  private filterDate: Date;
  private filterCategory;
  private filterOrganizerName;

  constructor(protected router: Router,
    protected eventService: EventService,
    protected dataStore: DataStore) {
    // this.date = new Date();
    // this.date.setHours(0, 0, 0, 0);
    console.log(this.date);
    this.dataStore.getOrganizers().subscribe((o) => {
      this.organizers = o;
      // let neutralOrganizer : Organizer = new Organizer();
      // neutralOrganizer.name = 'alle Veranstalter:innen';
      // neutralOrganizer.id = 0;
      // this.organizers.push(neutralOrganizer);
      this.organizers.sort(function(a, b){
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
        if (nameA < nameB)
            return -1
        if (nameA > nameB)
            return 1
        return 0;
      })
    })

    if (this.dataStore.categories) {
      this.categories = this.dataStore.categories;
      console.log('schonda');
      this.getFilteredEvents();
    } else {
      console.log('keine');
      this.dataStore.getCategories().subscribe((c) => {
        this.categories = c;
        // let neutralCategory : Category = new Category();
        // neutralCategory.id = 0;
        // neutralCategory.name = 'alle Kategorien';
        // this.categories.push(neutralCategory);
        this.categories.sort(function(a, b){
          var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
          if (nameA < nameB)
              return -1
          if (nameA > nameB)
              return 1
          return 0;
        })
        this.getFilteredEvents();
      })
    }

  }

  ngOnInit() {
    this.getWeek(this.date);
  }

  protected getEvents() {
    this.eventService.getEventsByFilterParams(this.selectedOrganizerId, this.selectedCategoryId).subscribe((c) => {
      let events = [];
      this.events = c;
      var bar = new Promise((resolve, reject) => {
        c.forEach((e, index, array) => {
          e.parsedDate = new Date(e.start);
          e.parsedDate.setHours(0, 0, 0, 0);
          // if (e.parsedDate > this.date ) {
          //   console.log(e.parsedDate)
          // }
          let organizer = this.dataStore.organizers.find(x => x.id === e.organizer);
          if (organizer != undefined) {
            e['organizerName'] = organizer.name;
            events.push(e);
          } else {
            events.push(e);
          }
          if (index === array.length -1) resolve();
        });
      });

      this.events = events;
      this.isLoaded = true;
    });
  }

  public getFilteredEvents() {
    this.events = [];
    this.getEvents();
  }

  // protected navigateToEvent(event) {
  //   let dateN = new Date(event.start);
  //   this.router.navigate(['/event', event.id]);
  // }

  protected setOrganizer($event) {
    this.filterOrganizerName = $event.target.value;
  }

  protected setCategory($event) {
    this.filterCategory = $event.target.value;
  }

  private _filter(value: string): Organizer[] {
    const filterValue = value.toLowerCase();

    let organizer = this.organizers.filter(organizer => organizer.name = value);
    return organizer;
  }

    protected getWeek(day){

      var dayBase = new Date();
      dayBase.setDate(day.getDate());

      for (let index = 0; index < 7; index++) {
        var dayTemp = new Date();
        dayTemp.setDate(day.getDate()+index)
        dayTemp.setHours(0, 0, 0, 0);
        // console.log('day ' + index + ': ' + dayTemp);
        this.week.push(dayTemp);
      }
      // console.log(this.week);

      // this.week = [];
      //
      // day.setDate(day.getDate());
      // day.setHours(0, 0, 0, 0);
      // console.log('day: ' + day);
      // this.week.push(day);

      // var day1 = new Date();
      // day1.setDate(day.getDate()+1);
      // console.log('day1: ' + day1);
      // this.week.push(day1);
      //
      // var day2 = new Date();
      // day2.setDate(day.getDate()+2);
      // console.log('day2: ' + day2);
      // this.week.push(day2);
      //
      // var day3 = new Date();
      // day3.setDate(day.getDate()+3);
      // this.week.push(day3);
      //
      // var day4 = new Date();
      // day4.setDate(day.getDate()+4);
      // this.week.push(day4);
      //
      // var day5 = new Date();
      // day5.setDate(day.getDate()+5);
      // this.week.push(day5);
      //
      // var day6 = new Date();
      // day6.setDate(day.getDate()+6);
      // this.week.push(day6);
    }

}
