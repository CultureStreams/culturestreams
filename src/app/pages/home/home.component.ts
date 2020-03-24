import { Component, OnInit } from '@angular/core';
import { DataStore } from 'src/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(protected dataStore:DataStore) { }

  ngOnInit() {
    console.log('homeinit');
    this.dataStore.loadData();
    this.dataStore.getCategories().subscribe((c) => console.log(c));
    this.dataStore.getPlatforms().subscribe((p) => console.log(p));
  }

  

}
