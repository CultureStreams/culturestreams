import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ResourceHttpService } from './resource-http.service';
import { Category } from './../../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryHttpService extends ResourceHttpService<Category>{

  constructor(http: HttpClient) {
    super(
      'categories',
      http
    )
  }
}
