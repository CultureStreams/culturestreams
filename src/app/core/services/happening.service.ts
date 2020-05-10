// import { Injectable } from '@angular/core';
//
// import { Happening } from './../models/happening.model';
// import { ResourceService } from './resource.service';
//
// // import { Observable } from 'rxjs';
// // import { EventHttp } from './../models/http-models/event-http';
// // import { map } from 'rxjs/operators';
// // import {environment} from '@environments/environment';
// // import { HttpParameterCodec } from "@angular/common/http";
// // import { Organizer } from './../models/organizer.model';
// // import { Category } from './../models/category.model';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class HappeningService extends ResourceService<Happening>{
//
//   constructor(
//   ) {
//     super(
//       'events'
//     );
//   }
//
//   // public loadEvents (): Observable<Event[]> {
//   //     return this.httpService.getObjects('events').pipe(
//   //           map((res) => res.events));
//   // }
//
//   // public loadEvents (): Observable<Event[]> {
//   //     return this.httpService.getObjects('events').pipe(
//   //           map((res) => res.events));
//   // }
//
// // public addEvent(event: Event) : Observable<Event>{
// //
// //     let res = this.http.post<Event>(this.api + 'events/', this.httpOptions);
// //     return res;
// // }
//
// // public addOrganizer(organizerName: string) : Observable<Organizer> {
// //
// //   let organizer = new Organizer();
// //   organizer.name = organizerName;
// //
// //   let res = this.http.post<Organizer>(this.api + 'organizers/?format=json', organizer, {headers: new HttpHeaders().set('Authorization', this.token)});
// //   return res;
// // }
//
// // public getEvent(eventId: number) : Observable<Event> {
// //   let res = this.http.get<Event>(this.api + 'events/?id=' + eventId, {headers: new HttpHeaders()});
// //   return res;
// // }
//
// // public getEventsByFilterParams(organizerId: number = 0, categoryId: number = 0) : Observable<Event[]> {
// //
// //     //console.log(date.toJSON());
// //     let req = this.api + 'events/?';//?startDate=' + date.toJSON();
// //     if (organizerId != 0) {
// //       req = req + 'organizer=' + organizerId;
// //     }
// //     if (categoryId != 0) {
// //       req = req + '&category=' + categoryId;
// //     }
// //     if (categoryId == 0 && organizerId == 0) {
// //       req = req + 'format=json';
// //     }
// //     let res = this.http.get<Event[]>(req, {headers: new HttpHeaders()});
// //     return res;
// // }
//
// // public getCategory(categoryId: number) : Observable<Category>{
// //   let res = this.http.get<Category>(this.api + 'categories/?id=' + categoryId, {headers: new HttpHeaders().set('Authorization', this.token)});
// //   return res;
// // }
//
// // public getOrganizer(organizerId: number) : Observable<Organizer>{
// //   let res = this.http.get<Organizer>(this.api + 'organizers/?id=' + organizerId, {headers: new HttpHeaders().set('Authorization', this.token)});
// //   return res;
// // }
//
// // protected getEventsByDate(date: Date) : Observable<Event[]> {
// //   let res = this.http.get<Event[]>(this.api + 'events/' + date +'?format=json', {headers: new HttpHeaders().set('Authorization', this.token)});
// //   return res;
// // }
//
// }
