import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'culture-streaming-app';

  constructor() {
  }

  ngOnInit() {
    // this.dataStore.loadData();
    //console.log('load');
  }

}
