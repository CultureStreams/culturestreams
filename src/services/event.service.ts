import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrgaEvent } from 'src/interfaces/event';
import event from '../dummy/event.json';
import eventsJson from '../dummy/arrays.json';
import {environment} from '../environments/environment';
import { Observable } from 'rxjs';
import { HttpParameterCodec } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class EventService {

  protected api = environment.server;

  constructor(
    private http: HttpClient
  ) { }


public addEvent(orgaEvent: OrgaEvent, password: string) {

    let res = this.http.post<OrgaEvent[]>(this.api + 'events/?format=json', orgaEvent, password);
    return orgaEvent;
}

public getEvent(eventId: number) {
  console.log(eventId);
  let res = this.http.get<OrgaEvent[]>(this.api + 'events/?id=' + eventId +'?format=json');
  console.log(res);
  return res;
}

public getEventsByFilterParams(date : Date, hostName: string = '', categoryId: number = 0) : Observable<OrgaEvent[]> {

    console.log(date.toJSON());

    let req = this.api + 'events/?startDate=' + date.toJSON(); 
    if (hostName != undefined) {
      req = req + '&?organzer=' + encodeURI(hostName);
    }
    if (categoryId != undefined && categoryId != 0) {
      req = req + '&?category=' + categoryId;
    }
    let res = this.http.get<OrgaEvent[]>(req);
    return res;
}

public getEventsByDates(dateArray: Date[]) {
  dateArray.forEach((date) => {
    
  })
}

protected getEventsByDate(date: Date) : Observable<OrgaEvent[]> {
  let res = this.http.get<OrgaEvent[]>(this.api + 'events/' + date +'?format=json');
  return res;
}

}
