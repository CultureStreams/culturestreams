import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/services/event.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {

  protected channels;

  constructor(protected service: EventService) {
    
   }

  ngOnInit() {
    this.channels = this.service.getPlatforms();
    console.log(this.channels);
  }

}
