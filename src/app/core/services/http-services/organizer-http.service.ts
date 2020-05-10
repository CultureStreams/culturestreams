import { Injectable } from '@angular/core';

import { Organizer } from './../../models/organizer.model';
import { OrganizerSerializer } from "./../../serializers/organizer.serializer";
import { ResourceHttpService } from './resource-http.service';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganizerHttpService extends ResourceHttpService<Organizer>{

  constructor(http: HttpClient) {
    super(
      'organizers',
      http,
      new OrganizerSerializer()
    )
  }
}
