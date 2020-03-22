import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.css']
})
export class AddEventFormComponent implements OnInit {

  protected event : Event;

  categoryControl = new FormControl('category');
  fontSizeControl = new FormControl(16, Validators.min(10));

  constructor() {}

  ngOnInit() {
  }



}
