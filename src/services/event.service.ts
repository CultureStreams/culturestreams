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
  console.log(res);
  return res;
}

public getEvent(eventId: number) : Observable<OrgaEvent> {
  console.log(eventId);
  let res = this.http.get<OrgaEvent>(this.api + 'events/?id=3');
  console.log(res);
  return res;
}

public getEventsByFilterParams(date : Date, organizerId: number = 0, categoryId: number = 0) : Observable<OrgaEvent[]> {

    //console.log(date.toJSON());
    console.log(organizerId);
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
    console.log(req);
    let res = this.http.get<OrgaEvent[]>(req);
    console.log(res);
    return res;
}

public getCategory(categoryId: number) : Observable<Category>{
  let res = this.http.get<Category>(this.api + 'categories/?id=' + categoryId);
  console.log(res);
  return res;
}

public getOrganizer(organizerId: number) : Observable<Organizer>{
  let res = this.http.get<Organizer>(this.api + 'organizers/?id=' + organizerId);
  console.log(res);
  return res;
}

protected getEventsByDate(date: Date) : Observable<OrgaEvent[]> {
  let res = this.http.get<OrgaEvent[]>(this.api + 'events/' + date +'?format=json');
  return res;
}

}
