import { Injectable } from '@angular/core';

import { Tag } from './../../models/tag.model';
import { TagSerializer } from "./../../serializers/tag.serializer";
import { ResourceHttpService } from './resource-http.service';

import { HttpClient } from '@angular/common/http';

/*@Injectable({
  providedIn: 'root'
})*/
export class TagHttpService extends ResourceHttpService<Tag>{

  constructor(http: HttpClient) {
    super(
      'tags',
      http,
      new TagSerializer()
    )
  }
}
