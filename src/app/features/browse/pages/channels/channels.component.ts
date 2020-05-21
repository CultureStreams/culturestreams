import { Component, OnInit } from '@angular/core';

import { DataStore } from '@core/services/data.service';
import { Channel } from '@core/models/channel.model';

@Component({
  selector: 'cs-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  constructor(public store: DataStore) { }

  ngOnInit() {
  }

}
