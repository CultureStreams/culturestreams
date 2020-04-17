import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cs-category-preview',
  templateUrl: './category-preview.component.html',
  styleUrls: ['./category-preview.component.css']
})
export class CategoryPreviewComponent implements OnInit {

  @Input() category: string;
  @Input() image: string;

  constructor() { }

  ngOnInit() {
  }

}
