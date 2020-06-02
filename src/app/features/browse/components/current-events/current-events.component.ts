import { Component, OnInit, Input } from '@angular/core';
import { Happening } from '@core/models/happening.model';

@Component({
  selector: 'cs-current-events',
  templateUrl: './current-events.component.html',
  styleUrls: ['./current-events.component.css']
})
export class CurrentEventsComponent implements OnInit {

  @Input() events: Happening[];
  @Input() currentType: string;
  defaultImage = '/../../../../assets/img/cs-sofaherz-dunkel.png';

  constructor() { }

  ngOnInit() {
  }

}
