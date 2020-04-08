import { Component, OnInit } from '@angular/core';
import { DataStore } from 'src/services/data.service';

@Component({
  selector: 'cs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'culture-streaming-app';

  constructor(protected dataStore:DataStore) {
  }

  ngOnInit() {
    this.dataStore.loadData();
    //console.log('load');
  }

}
