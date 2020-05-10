import { Component, OnInit } from '@angular/core';
// import { EventService } from 'src/services/event.service';
import { DataStore } from '@core/services/data.service';
// import { Category } from 'src/models/category';
// import { Platform } from '@angular/cdk/platform';
import { Channel } from '@core/models/channel.model';
// import { Organizer } from 'src/models/organizer';

@Component({
  selector: 'cs-culture-channels',
  templateUrl: './culture-channels.component.html',
  styleUrls: ['./culture-channels.component.css']
})
export class CultureChannelsComponent implements OnInit {

  // public channels: Channel[] = [];
  // public organizers: Organizer[] = [];

  constructor(protected store: DataStore) {

   }

  ngOnInit() {
    if (!this.store.channels$) {
      console.log('no channels')
    }
    else {
      console.log('channels!')
    }
    // this.channels = this.dataStore.channels;
    // // this.organizers = this.dataStore.organizers;
    // console.log(this.dataStore);
    // console.log(this.dataStore.organizers);
    // //this.dataStore.getOrganizers().subscribe((o) => this.organizers = o);
    // this.dataStore.getChannels().subscribe((p) => {
    //   this.channels = p;
    // });
  }

}
