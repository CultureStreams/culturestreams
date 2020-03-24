import { Injectable } from '@angular/core';
import categoriesJson from '../dummy/categories.json';
import {environment} from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/interfaces/category';
import { Platform } from '@angular/cdk/platform';
import platformsJson from '../dummy/platforms.json';
import { Subcategory } from 'src/interfaces/subcategory';

@Injectable({
  providedIn: 'root'
})
export class DataStore {

  public categories: Category[];
  public platforms: Platform[];
  protected api = environment.server;

  constructor(private http: HttpClient,) { }

  /**
   * load all static Data
   */
  public loadData(){
    this.getCategories().subscribe((c) => this.categories = c);
    this.getPlatforms().subscribe((p) => this.platforms = p);
  }

  /** 
   * load all Categories
   * no params needed
   */
  public getCategories (): Observable<Category[]> {
    console.log('getCategories');
    let res = this.http.get<Category[]>(this.api + 'categories/?format=json');
    console.log(res);
    return res;
  }



  /** 
   * load all Categories
   * no params needed
   */
  public getSubCategories (): Observable<Subcategory[]> {
    console.log('getCategories');
    let res = this.http.get<Subcategory[]>(this.api + 'subcategories/?format=json');
    console.log(res);
    return res;
  }


  /**
   * load all Platforms
   * no params needed
   */
  public getPlatforms (): Observable<Platform[]> {
    let res = this.http.get<Platform[]>(this.api + 'plattforms/?format=json');
    console.log(res);
    return res;
  }

}
