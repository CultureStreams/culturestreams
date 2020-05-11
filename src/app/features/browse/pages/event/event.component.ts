import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { DataStore } from "@core/services/data.service";
import { Happening } from '@core/models/happening.model';

@Component({
  selector: 'cs-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  private event : Happening;

  constructor(
    protected store: DataStore,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(queryParams => {
      let id = queryParams.get("id");
      this.store.readEvent(+id).subscribe((e) => {
        this.event = e[0];
      })
    })
  }
}
