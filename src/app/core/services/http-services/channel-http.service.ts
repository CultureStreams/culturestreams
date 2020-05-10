import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ResourceHttpService } from './resource-http.service';
import { Channel } from './../../models/channel.model';

@Injectable({
  providedIn: 'root'
})
export class ChannelHttpService extends ResourceHttpService<Channel>{

  constructor(http: HttpClient) {
    super(
      'channels',
      http
    )
  }
}
