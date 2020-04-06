import { Injectable } from '@angular/core';
import event from '../dummy/event.json';
import eventsJson from '../dummy/arrays.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from 'src/interfaces/event';
import {environment} from '../environments/environment';
import { Observable } from 'rxjs';
import { HttpParameterCodec } from "@angular/common/http";
import { Organizer } from 'src/interfaces/organizer';
import { Category } from 'src/interfaces/category';



@Injectable({
  providedIn: 'root'
})
export class EventService {

  protected api = environment.server;
  protected token = environment.authorization;

  constructor(
    private http: HttpClient
  ) { }


public addEvent(event: Event) : Observable<Event>{

    let res = this.http.post<Event>(this.api + 'events/?format=json', event, {headers: new HttpHeaders().set('Authorization', this.token)});
    return res;
}

public addOrganizer(organizerName: string) : Observable<Organizer> {

  let organizer = new Organizer();
  organizer.name = organizerName;

  let res = this.http.post<Organizer>(this.api + 'organizers/?format=json', organizer, {headers: new HttpHeaders().set('Authorization', this.token)});
  return res;
}

public getEvent(eventId: number) : Observable<Event> {
  let res = this.http.get<Event>(this.api + 'events/?id=' + eventId, {headers: new HttpHeaders().set('Authorization', this.token)});
  return res;
}

public getEventsByFilterParams(organizerId: number = 0, categoryId: number = 0) : Observable<Event[]> {

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
    let res = this.http.get<Event[]>(req, {headers: new HttpHeaders().set('Authorization', this.token)});
    return res;
}

public getCategory(categoryId: number) : Observable<Category>{
  let res = this.http.get<Category>(this.api + 'categories/?id=' + categoryId, {headers: new HttpHeaders().set('Authorization', this.token)});
  return res;
}

public getOrganizer(organizerId: number) : Observable<Organizer>{
  let res = this.http.get<Organizer>(this.api + 'organizers/?id=' + organizerId, {headers: new HttpHeaders().set('Authorization', this.token)});
  return res;
}

protected getEventsByDate(date: Date) : Observable<Event[]> {
  let res = this.http.get<Event[]>(this.api + 'events/' + date +'?format=json', {headers: new HttpHeaders().set('Authorization', this.token)});
  return res;
}

}
