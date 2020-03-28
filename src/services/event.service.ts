import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrgaEvent } from 'src/interfaces/event';
import event from '../dummy/event.json';
import eventsJson from '../dummy/arrays.json';
import {environment} from '../environments/environment';
import { Observable } from 'rxjs';
import { HttpParameterCodec } from "@angular/common/http";
import { Organizer } from 'src/interfaces/host';
import { Category } from 'src/interfaces/category';



@Injectable({
  providedIn: 'root'
})
export class EventService {

  protected api = environment.server;

  constructor(
    private http: HttpClient
  ) { }


public addEvent(orgaEvent: OrgaEvent) : Observable<OrgaEvent>{

    let res = this.http.post<OrgaEvent>(this.api + 'events/?format=json', orgaEvent);
    return res;
}

public addOrganizer(organizerName: string) : Observable<Organizer> {

  let organizer = new Organizer();
  organizer.name = organizerName;

  let res = this.http.post<Organizer>(this.api + 'organizers/?format=json', organizer);
  return res;
}

public getEvent(eventId: number) : Observable<OrgaEvent> {
  let res = this.http.get<OrgaEvent>(this.api + 'events/?id=' + eventId);
  return res;
}

public getEventsByFilterParams(organizerId: number = 0, categoryId: number = 0) : Observable<OrgaEvent[]> {

    //console.log(date.toJSON());
    let req = this.api + 'events/?';//?startDate=' + date.toJSON(); 
    if (organizerId != 0) {
      req = req + 'organizer=' + organizerId;
    }
    if (categoryId != 0) {
      req = req + '&category=' + categoryId;
    }
    if (categoryId == 0 && organizerId == 0) {
      req = req + 'format=json';
    }
    let res = this.http.get<OrgaEvent[]>(req);
    return res;
}

public getCategory(categoryId: number) : Observable<Category>{
  let res = this.http.get<Category>(this.api + 'categories/?id=' + categoryId);
  return res;
}

public getOrganizer(organizerId: number) : Observable<Organizer>{
  let res = this.http.get<Organizer>(this.api + 'organizers/?id=' + organizerId);
  return res;
}

protected getEventsByDate(date: Date) : Observable<OrgaEvent[]> {
  let res = this.http.get<OrgaEvent[]>(this.api + 'events/' + date +'?format=json');
  return res;
}

}
