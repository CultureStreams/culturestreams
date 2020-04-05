import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractFormGroupDirective } from '@angular/forms';
import { OrgaEvent } from 'src/interfaces/event';
import { EventService } from 'src/services/event.service';
import { DataStore } from 'src/services/data.service';
import { Category } from 'src/interfaces/category';
import { Subcategory } from 'src/interfaces/subcategory';
import { Organizer } from 'src/interfaces/host';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.css']
})
export class AddEventFormComponent implements OnInit {

  protected event: OrgaEvent = new OrgaEvent();
  protected password: string;
  protected categories: Category[] = [];
  protected subcategories: Subcategory[] = [];
  protected startTime;
  protected endTime;
  protected date: Date = new Date();
  protected organizer: Organizer = new Organizer();

  protected error = false;


  categoryControl = new FormControl('category');
  fontSizeControl = new FormControl(16, Validators.min(10));

  constructor(
    protected router: Router,
    protected eventService : EventService,
    protected dataStore : DataStore) {

  }

  ngOnInit() {
    this.dataStore.getCategories().subscribe((c) => this.categories = c);
    this.dataStore.getSubCategories().subscribe((s) => this.subcategories = s);
    console.log(this.categories);
  }

  protected setCategory($event) {
    this.event.category = $event.target.value;
    console.log(this.event);
  }

  protected setHostName($event) {
    //this.event.hostName = ($event.target.value);;
  }

  protected setDescription($event) {
    this.event.description = $event.target.value;
  }

  protected setLink($event) {
    this.event.link = $event.target.value;
  }

  protected setPassword($event) {
    this.password = $event.target.value;
  }

  protected parseStartAndEnd() {
    let dayTime = this.startTime.slice(-2);
    let startTimeString = this.startTime.substr(0, this.startTime.length - 3);
    let startMinutes = startTimeString.slice(-2);
    startTimeString = startTimeString.substr(0, this.startTime.length - 6);
    let startHours = parseInt(startTimeString);
    if (dayTime == 'PM') {
      startHours = startHours + 12;
    }
    this.date.setHours(startHours, startMinutes, 0);
    let startDate = this.date.setHours(startHours, startMinutes);
    this.event.start = new Date(startDate);

    let nightTime = this.endTime.slice(-2);
    let endTimeString = this.endTime.substr(0, this.endTime.length - 3);
    let endMinutes = endTimeString.slice(-2);
    endTimeString = endTimeString.substr(0, this.endTime.length - 6);
    let endHours = parseInt(endTimeString);
    if (nightTime == 'PM') {
      endHours = endHours + 12;
    }
    this.date.setHours(endHours, endMinutes, 0);
    let endDate = this.date.setHours(endHours, endMinutes);
    this.event.end = new Date(endDate);
  }

  protected submit(){

    if (this.startTime && this.endTime && this.event.name && this.organizer.name && this.event.description && this.event.link) {
      this.parseStartAndEnd();
      this.event.subCategory = this.event.category;
      console.log(this.event);
      this.event.tags = ['test'];
      this.eventService.addOrganizer(this.organizer.name).subscribe((organizer) => {
        this.event.organizer = organizer.id;
        this.eventService.addEvent(this.event).subscribe(c => this.router.navigate(['/event', c.id]));
      });

    } else {
      this.error = true;
    }
  }

}
