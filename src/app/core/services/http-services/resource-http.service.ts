import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {environment} from '@environments/environment';

import { IResponse } from './../../interfaces/response.interface';
import { ISerializer } from "./../../interfaces/serializer.interface";
import { Resource } from './../../models/resource.model';

//Todo Loading

import { map, tap } from 'rxjs/operators';
import { addDaysToDate, dateToApiString } from "@shared/utils/date.utils";

/*@Injectable({
  providedIn: 'root'
})*/
export class ResourceHttpService <T extends Resource>{

  private apiv1 = environment.apiv1;
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': environment.authorization,
  });

  constructor(
    private type: string,
    private http?: HttpClient,
    private serializer?: ISerializer
  ) { }

  public list (params?: any): Observable<T[]> {
    let headers = this.headers;
    if (params) {
      let loadingResources$ = this.http.get<IResponse>(this.apiv1 + this.type + '/', { headers, params })
          .pipe(catchError(err => {
                // TODO error to message
                return throwError(err);}),
              map(res => res[this.type]),);
          // TODO loading service?
          return loadingResources$;
    }
    else {
      let loadingResources$ = this.http.get<IResponse>(this.apiv1 + this.type + '/', { headers })
          .pipe(catchError(err => {
                // TODO error to message
                return throwError(err);}),
              map(res => res[this.type]),);
          // TODO loading service?
          return loadingResources$;
    }
  }

  public read (id: number) {
    console.log('loading ' + this.type);
    let headers = this.headers;
    let params = {};
    params['id'] = id;
    return this.http.get<IResponse>(this.apiv1 + this.type + '/', { headers, params }).pipe(
            map(res => res[this.type]));
  }

  public create (item: T): Observable<T> {
    let type_singular = this.type.substring(0, this.type.length-1)
    console.log('posting ' + type_singular);
    let headers = this.headers;
    let creatingResources$ = this.http.post<IResponse>(this.apiv1 + this.type + '/', this.serializer.toJSON(item), { headers })
        .pipe(catchError(err => {
              // TODO error to message
              return throwError(err);}),
            map(res => res[type_singular]),
        );
        // TODO loading service?
        return creatingResources$;
    // .pipe(
    //         map(res => this.serializer.fromJSON(res[this.type]) as T)
    //       );
  }

  // TODO update() Resource
  // TODO delete() Resource
  // TODO list()

  protected convertData(data: any): T[] {
    return data.map(item => this.serializer.fromJSON(item));
  }

}
