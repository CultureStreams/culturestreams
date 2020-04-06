import { Injectable } from '@angular/core';
import categoriesJson from '../dummy/categories.json';
import {environment} from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/interfaces/category';
import { Platform } from '@angular/cdk/platform';
import platformsJson from '../dummy/platforms.json';
import { Organizer } from 'src/interfaces/host';
import { OrgaPlatform } from 'src/interfaces/orga-platform';
import { EventService } from './event.service';
import { OrgaEvent } from 'src/interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class DataStore {

  public categories: Category[];
  public platforms: OrgaPlatform[];
  public organizers: Organizer[] = [];
  protected api = environment.server;
  protected token  = environment.authorization;
  public generalEvents: OrgaEvent[];

  constructor(private http: HttpClient,
    protected eventService: EventService) { }

  /**
   * load all static Data
   */
  public loadData(){
    this.getOrganizers().subscribe((o) => this.organizers = o);
    this.getCategories().subscribe((c) => this.categories = c);
    let neutralCategory : Category = new Category();
      neutralCategory.id = 0;
      neutralCategory.name = 'alle Kategorien';
      this.categories.push(neutralCategory);
      this.categories.sort(function(a, b){
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
        if (nameA < nameB)
            return -1
        if (nameA > nameB)
            return 1
        return 0;
      })
    this.getPlatforms().subscribe((p) => this.platforms = p);
  }

  /**
   * load all Categories
   * no params needed
   */
  public getCategories (): Observable<Category[]> {
    console.log('getCategories');
    let res = this.http.get<Category[]>(this.api + 'categories/?format=json', {headers: new HttpHeaders().set('Authorization', this.token)});

    return res;
  }


  /**
   * load all Platforms
   * no params needed
   */
  public getPlatforms (): Observable<OrgaPlatform[]> {
    let res = this.http.get<OrgaPlatform[]>(this.api + 'plattforms/?format=json', {headers: new HttpHeaders().set('Authorization', this.token)});
    return res;
  }


  /**
   * load all Organizers
   * no params needed
   */
  public getOrganizers () : Observable<Organizer[]> {
    let res = this.http.get<Organizer[]>(this.api + 'organizers/?format=json', {headers: new HttpHeaders().set('Authorization', this.token)});
    return res;
  }

}
