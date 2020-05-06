import { Injectable } from '@angular/core';
import categoriesJson from '../dummy/categories.json';
import channelsJson from '../dummy/channels.json';
import {environment} from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/models/category';
import { Platform } from '@angular/cdk/platform';
import { Organizer } from 'src/models/organizer';
import { Channel } from 'src/models/channel';
import { EventService } from './event.service';
import { OrgaEvent } from 'src/models/event';
import { Tag } from 'src/models/tag';

@Injectable({
  providedIn: 'root'
})
export class DataStore {

  public categories: Category[];
  public channels: Channel[];
  public organizers: Organizer[] = [];
  public tags: Tag[];
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
    this.getTags().subscribe((t) => this.tags = t);
    this.getCategories().subscribe((c) => {
      this.categories = c;
      this.categories.sort(function(a, b){
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
        if (nameA < nameB)
            return -1
        if (nameA > nameB)
            return 1
        return 0;
      })
    });
    this.getChannels().subscribe((p) => this.channels = p);
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
   * load all Categories
   * no params needed
   */
  public getTags (): Observable<Category[]> {
    console.log('getTags');
    let res = this.http.get<Category[]>(this.api + 'tags/?format=json', {headers: new HttpHeaders().set('Authorization', this.token)});

    return res;
  }


  /**
   * load all Channels
   * no params needed
   */
  public getChannels (): Observable<Channel[]> {
    let res = this.http.get<Channel[]>(this.api + 'channels/?format=json', {headers: new HttpHeaders().set('Authorization', this.token)});
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
