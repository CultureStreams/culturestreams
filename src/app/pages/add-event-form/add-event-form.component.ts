import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractFormGroupDirective } from '@angular/forms';
import { OrgaEvent } from 'src/interfaces/event';
import { Host } from 'src/interfaces/host';

@Component({
  selector: 'app-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.css']
})
export class AddEventFormComponent implements OnInit {

  protected event: OrgaEvent = new OrgaEvent();
  protected password: string;

  categoryControl = new FormControl('category');
  fontSizeControl = new FormControl(16, Validators.min(10));

  constructor() {

  }

  ngOnInit() {
  }

  protected setTitle($event) {
    this.event.title = $event.target.value;
  }

  protected setCategory($event) {
    this.event.category = $event.target.value;
  }

  protected setSubCategory($event) {
    this.event.subcategory = $event.target.value;
  }

  protected setdate($event) {
    this.event.date = $event.target.value;
  }

  protected setHostName($event) {
    this.event.hostName = ($event.target.value);;
  }

  protected setLocation($event) {
    this.event.hostLocation = $event.target.value;
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

  protected onChange (event: any) {
    console.log(event.target.value);
  }

  protected setLink($event) {
    this.event.link = $event.target.value;
  }

  protected focusoutHandler(email) {
    
  }

  protected setStartTime($event) {
    this.event.startTime = $event.target.value;
    console.log(this.event);
  }

  protected setEndTime($event) {
    this.event.endTime = $event.target.value;
    console.log(this.event);
  }

  protected setPassword($event) {
    this.password = $event.target.value;
  }

  protected submit(){
    console.log(this.event);
  }

}
