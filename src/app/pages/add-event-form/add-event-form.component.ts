import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractFormGroupDirective } from '@angular/forms';
import { OrgaEvent } from 'src/interfaces/event';
import { Host } from 'src/interfaces/host';
import { EventService } from 'src/services/event.service';
import { DataStore } from 'src/services/data.service';
import { Category } from 'src/interfaces/category';
import { Subcategory } from 'src/interfaces/subcategory';

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


  categoryControl = new FormControl('category');
  fontSizeControl = new FormControl(16, Validators.min(10));

  constructor(protected eventService : EventService,
              protected dataStore : DataStore) {

  }

  ngOnInit() {
    this.dataStore.getCategories().subscribe((c) => this.categories = c);
    this.dataStore.getSubCategories().subscribe((s) => this.subcategories = s);
    console.log(this.categories);
  }

  protected setTitle($event) {
    this.event.title = $event.target.value;
    console.log(this.event.title);
  }

  protected setCategory($event) {
    this.event.category = $event.target.value;
    console.log(this.event);
  }

  protected setSubCategory($event) {
    this.event.subcategory = $event.target.value;
  }

  protected setHostName($event) {
    //this.event.hostName = ($event.target.value);;
  }

  protected setLocation($event) {
    //his.event.hostLocation = $event.target.value;
  }

  protected setDescriptionShort($event) {
    this.event.shortDescription = $event.target.value;
  }

  protected setDescription($event) {
    this.event.description = $event.target.value;
  }

  protected setImageUrl($event) {
    this.event.imageLink = $event.target.value;
  }

  protected setLink($event) {
    this.event.link = $event.target.value;
  }

  protected focusoutHandler(email) {

  }

  protected setStartTime($event) {
    this.event.start = $event.target.value;
    console.log(this.event);
  }

  protected setEndTime($event) {
    this.event.end = new $event.target.value;
    console.log(this.event);
  }

  protected onChange($event) {
    console.log('change');
  }

  protected setPassword($event) {
    this.password = $event.target.value;
  }

  protected parseStartAndEnd() {
    this.event.start = this.date.setTime(this.startTime);
    console.log(Date.parse(this.startTime));
    this.event.end = this.date.setTime(this.endTime);
  }

  protected submit(){
    this.parseStartAndEnd();
    console.log(this.event);
    console.log(typeof this.event.start);
  }

}
