import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/services/event.service';
import { DataStore } from 'src/services/data.service';
import { Category } from 'src/interfaces/category';
import { Platform } from '@angular/cdk/platform';
import { OrgaPlatform } from 'src/interfaces/orga-platform';
import { Organizer } from 'src/interfaces/host';

@Component({
  selector: 'app-culture-channels',
  templateUrl: './culture-channels.component.html',
  styleUrls: ['./culture-channels.component.css']
})
export class CultureChannelsComponent implements OnInit {

  protected channels: OrgaPlatform[] = [];
  protected organizers: Organizer[] = [];

  constructor(protected dataStore: DataStore) {

   }

  ngOnInit() {
    this.channels = this.dataStore.platforms;
    this.organizers = this.dataStore.organizers;
    console.log(this.dataStore);
    console.log(this.dataStore.organizers);
    //this.dataStore.getOrganizers().subscribe((o) => this.organizers = o);
    this.dataStore.getPlatforms().subscribe((p) => {
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
