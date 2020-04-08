import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/services/event.service';
import { DataStore } from 'src/services/data.service';
import { Category } from 'src/interfaces/category';
import { Platform } from '@angular/cdk/platform';
import { Channel } from 'src/interfaces/channel';
import { Organizer } from 'src/interfaces/organizer';

@Component({
  selector: 'cs-culture-channels',
  templateUrl: './culture-channels.component.html',
  styleUrls: ['./culture-channels.component.css']
})
export class CultureChannelsComponent implements OnInit {

  protected channels: Channel[] = [];
  protected organizers: Organizer[] = [];

  constructor(protected dataStore: DataStore) {

   }

  ngOnInit() {
    this.channels = this.dataStore.channels;
    this.organizers = this.dataStore.organizers;
    console.log(this.dataStore);
    console.log(this.dataStore.organizers);
    //this.dataStore.getOrganizers().subscribe((o) => this.organizers = o);
    this.dataStore.getChannels().subscribe((p) => {
      this.channels = p;
      this.channels.forEach((c) => {
        let organizer = this.organizers.find((e) => e.id == c.organizer);
        if (organizer != undefined){
          console.log(organizer.name);
          c.organizerName = organizer.name;
        }
      })
    });
  }

}
