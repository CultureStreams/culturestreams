import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { DataStore } from "@core/services/data.service";
import { Happening } from '@core/models/happening.model';

import { isSameDate } from "@shared/utils/date.utils";

@Component({
  selector: 'cs-event',
  template: `
  <main class="cs-event-detail"
  [event]="event"
  [isOneDay]="isOneDay"
  [isLongText]="isLongText"
  [hasDonationLink]="hasDonationLink"
  [hasInfoLink]="hasInfoLink">
  </main>`
})
export class EventComponent implements OnInit {

  private event : Happening;
  private isOneDay: boolean = false;
  private isLongText: boolean = false;
  private hasDonationLink: boolean = false;
  private hasInfoLink: boolean = false;

  constructor(
    protected store: DataStore,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(queryParams => {
      let id = queryParams.get("id");
      this.store.readEvent(+id).subscribe((e) => {
        this.event = e[0];
        if (this.event) {
          if (isSameDate(this.event.start, this.event.end)) {
            this.isOneDay = true;
          }
          if (this.event.description.length >= 500) {
            this.isLongText = true;
          }
          if (this.event.infoLink) {
            this.hasInfoLink = true;
          }
          if (this.event.donationLink) {
            this.hasDonationLink = true;
          }
        }
        else {
          console.log('no event')
        }
      })
    })
  }
}
