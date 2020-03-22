import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrgaEvent } from 'src/interfaces/event';
import event from '../dummy/event.json';
import eventsJson from '../dummy/arrays.json';
import platformsJson from '../dummy/platforms.json';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private http: HttpClient
  ) { }


public addEvent(orgaEvent: OrgaEvent, password: string) {
  //this.http.put.....
    return orgaEvent;
}

public getEvent(eventId: number) {
  //this.http.get
  return event;
}

public getEventsByFilterParams(date: Date, hostId: number, categoryId: number) {
  //this.http.get ---- date.toJSON();
  return eventsJson;
}

public getPlatforms() {
  return platformsJson;
}

}
