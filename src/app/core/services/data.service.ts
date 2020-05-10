import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';

import { HappeningHttpService } from './http-services/happening-http.service';
import { ChannelHttpService } from './http-services/channel-http.service';
import { OrganizerHttpService } from './http-services/organizer-http.service';
import { CategoryHttpService } from './http-services/category-http.service';
import { TagHttpService } from './http-services/tag-http.service';

import { Category } from './../models/category.model';
import { Organizer } from './../models/organizer.model';
import { Channel } from './../models/channel.model';
import { Happening } from './../models/happening.model';
import { Tag } from '../models/tag.model';

import { HappeningFilter } from "./../models/happening-filter.model";

import { addDaysToDate, removeDaysFromDate, dateToApiString } from "@shared/filters/date.filter";

@Injectable({
  providedIn: 'root'
})
export class DataStore {

  private _categories: BehaviorSubject<Category[]> = new BehaviorSubject([]);
  private _channels: BehaviorSubject<Channel[]> = new BehaviorSubject([]);
  private _organizers: BehaviorSubject<Organizer[]> = new BehaviorSubject([]);
  private _tags: BehaviorSubject<Tag[]> = new BehaviorSubject([]);

  private _events: BehaviorSubject<Happening[]> = new BehaviorSubject([]);
  private _eventFilter: BehaviorSubject<HappeningFilter[]> = new BehaviorSubject([]);


  public readonly categories$: Observable<Category[]> = this._categories.asObservable();
  public readonly channels$: Observable<Channel[]> = this._channels.asObservable();
  public readonly organizers$: Observable<Organizer[]> = this._organizers.asObservable();
  public readonly tags$: Observable<Tag[]> = this._tags.asObservable();

  public readonly events$: Observable<Happening[]> = this._events.asObservable();
  public readonly eventFilter$: Observable<HappeningFilter[]> = this._eventFilter.asObservable();

  protected today: Date = new Date();


  public dateParsed: Date = new Date();


  constructor(
    protected happeningHttpService: HappeningHttpService,
    protected channelHttpService: ChannelHttpService,
    protected organizerHttpService: OrganizerHttpService,
    protected categoryHttpService: CategoryHttpService,
    protected tagHttpService: TagHttpService,
  ) {
      this.loadInitalData()
    }
  /**
   * load all static Data
   */
  public loadInitalData(){
    this.loadCurrentEvents();
    this.loadAllCategories();
    this.loadAllChannels();
    this.loadAllOrganizers();
    this.loadAllTags();
    console.log('DataStore loaded');
  }

  /**
   * Events
   */

  public loadCurrentEvents() {
    // load event from one week ago to in three weeks
    let start = removeDaysFromDate(this.today, 7)
    let end = addDaysToDate(this.today, 21)
    let params = {};
    params['start_after'] = dateToApiString(start);
    params['end_before'] = dateToApiString(end);
    this.happeningHttpService.list(params)
    .subscribe(e => this._events.next(e));
  }

  public createEvent(event: Happening): Observable<Happening>{
    if (event.organizer.id == 0) {
      return this.organizerHttpService.create(event.organizer)
      .pipe(
        switchMap(c => {
          event.organizer.id = c.id;
          // TODO Reloadthis.loadAllOrganizers();
          // TODO Reload Tags after event created
          let creatingEvent$ = this.happeningHttpService.create(event);
          this.loadAllOrganizers();
          this.loadAllTags();
          return creatingEvent$;
        })
      )
    }
    else {
      // TODO Reload Tags after event created
       let creatingEvent$ = this.happeningHttpService.create(event);
       this.loadAllTags();
       return creatingEvent$;
    }
  }
  /**
   * Organizers
   */
  public loadAllOrganizers () {
    this.organizerHttpService.list().subscribe(c => this._organizers.next(c));
  }

  public getAllOrganizers () {
      return this._organizers.getValue();
  }
  /**
   * Categories
   */
  public loadAllCategories () {
    this.categoryHttpService.list().subscribe(c => this._categories.next(c));
  }

  public getAllCategories () {
      return this._categories.getValue();
  }
  /**
   * Channels
   */
   public loadAllChannels () {
     this.channelHttpService.list().subscribe(c => this._channels.next(c));
   }

   /**
    * Tags
    */
    public loadAllTags () {
      this.tagHttpService.list().subscribe(c => this._tags.next(c));
    }

    public getAllTags () {
        return this._tags.getValue();
    }

}
