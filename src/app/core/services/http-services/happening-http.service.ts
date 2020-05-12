import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Happening } from './../../models/happening.model';
import { HappeningSerializer } from "./../../serializers/happening.serializer";
import { ResourceHttpService } from './resource-http.service';

import { HttpClient } from '@angular/common/http';

import { addDaysToDate, dateToApiString } from "@shared/utils/date.utils";

@Injectable({
  providedIn: 'root'
})
export class HappeningHttpService extends ResourceHttpService<Happening>{
  constructor(
    http: HttpClient
  ) {
    super(
      'events',
      http,
      new HappeningSerializer()
    );
  }
}
