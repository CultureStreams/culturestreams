import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/services/event.service';
import { DataStore } from 'src/services/data.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {

  protected channels;

  constructor(protected dataStore: DataStore) {
    
   }

  ngOnInit() {
    this.dataStore.getPlatforms().subscribe((p) => {
      this.channels = p;
      console.log(p);
    });
  }

}
