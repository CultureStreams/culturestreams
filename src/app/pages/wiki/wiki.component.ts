import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/services/event.service';
import { DataStore } from 'src/services/data.service';
import { Category } from 'src/interfaces/category';
import { Platform } from '@angular/cdk/platform';
import { OrgaPlatform } from 'src/interfaces/orga-platform';
import { Organizer } from 'src/interfaces/host';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {

  protected channels: OrgaPlatform[] = [];
  protected organizers: Organizer[] = [];

  constructor(protected dataStore: DataStore) {
    
   }

  ngOnInit() {
    this.dataStore.getOrganizers().subscribe((o) => this.organizers = o);
    this.dataStore.getPlatforms().subscribe((p) => {
      this.channels = p;
      this.channels.forEach((c) => {
        console.log(c);
        let organizer = this.organizers.find((e) => e.id == c.organizer);
        if (organizer != undefined){
          c.organizerName = organizer.name;
        }
      })
    });
  }

}
