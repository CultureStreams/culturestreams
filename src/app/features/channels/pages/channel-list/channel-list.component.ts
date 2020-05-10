import { Component, OnInit } from '@angular/core';

import { DataStore } from '@core/services/data.service';
import { Channel } from '@core/models/channel.model';

@Component({
  selector: 'cs-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit {

  constructor(protected store: DataStore) { }

  ngOnInit() {
  }

}
