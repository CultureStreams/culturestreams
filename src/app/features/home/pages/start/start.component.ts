import { Component, OnInit } from '@angular/core';
import { DataStore } from '@core/services/data.service';

@Component({
  selector: 'cs-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  private now: Date;

  constructor(protected store:DataStore) { }

  ngOnInit() {
    this.now = new Date();
  }



}
