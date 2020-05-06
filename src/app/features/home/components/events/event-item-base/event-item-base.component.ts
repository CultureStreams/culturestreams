import { Component, OnInit } from '@angular/core';
import { OrgaEvent } from 'src/models/event';
import { Category } from 'src/models/category';

@Component({
  selector: 'cs-event-item-base',
  templateUrl: './event-item-base.component.html',
  styleUrls: ['./event-item-base.component.css']
})
export class EventItemBaseComponent implements OnInit {

  // quick fix for running build --prod
  // todo fix
  public event = new OrgaEvent();
  public category = new Category();

  constructor() { }

  ngOnInit(): void {
  }

}
