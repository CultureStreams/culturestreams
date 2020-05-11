import { Component, OnInit } from '@angular/core';
import { DataStore } from '@core/services/data.service';

@Component({
  selector: 'cs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(protected store:DataStore) { }

  ngOnInit() {
  }



}
