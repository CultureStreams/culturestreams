import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { FormControl, Validators, AbstractFormGroupDirective, FormGroup } from '@angular/forms';

import { DataStore as Store } from '@core/services/data.service';

import { Happening } from '@core/models/happening.model';
import { Category } from '@core/models/category.model';
import { Organizer } from '@core/models/organizer.model';

import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { Router } from '@angular/router';

import { Tag } from '@core/models/tag.model';
import { MatChipInputEvent, MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material';

import {cities} from 'src/dummy/cities';
import { addTimeToDate } from "@shared/utils/date.utils";

@Component({
  selector: 'cs-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.css']
})
export class AddEventFormComponent implements OnInit {

  public event: Happening = new Happening();
  public password: string;
  public categories: Category[] = [];
  public startTime;
  public endTime;
  public startDate: Date = new Date();
  public endDate: Date = new Date();
  public organizer: Organizer = new Organizer();

  filterTag: string = '';

  @ViewChild('auto', { read: true, static: true }) matAutocomplete: MatAutocomplete;
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  /* booleans */
  public addLocation : boolean = false;
  public addCity : boolean = false;
  public addSubHeadline : boolean = false;
  public addAdditionalInformation : boolean = false;
  public addImage : boolean = false;
  public addTag : boolean = false;
  public addArtist : boolean = false;
  public addDonation : boolean = false;

  /* Organizer */
  public organizers: Organizer[];
  public filteredOrganizers: Observable<Organizer[]>;

  /* Cities */
  public cities: String[];
  public filteredCities: Observable<String[]>;

  /* Artists */
  // public filteredArtists: Observable<Organizer[]>;
  // public artistStr: string = '';
  // artists: Organizer[] = [];
  // allArtists : Organizer[];
  // public artistValue = '';
  // @ViewChild('artistInput', { read: ElementRef, static: false } ) artistInput: ElementRef<HTMLInputElement>;


  /* Tags */
  public filteredTags$: Observable<Tag[]>;
  public tagStr: string = '';
  tags: Tag[] = [];
  alltags: Tag[];
  public tagValue = '';
  @ViewChild('tagInput', { read: ElementRef, static: false } ) tagInput: ElementRef<HTMLInputElement>;


  @ViewChild('streamLinkInput', { read: ElementRef, static: false } ) streamLinkInput: ElementRef<HTMLInputElement>;
  @ViewChild('endTimeInput', { read: ElementRef, static: false } ) endTimeInput: ElementRef<HTMLInputElement>;

  public error = false;

  categoryControl = new FormControl('category');
  fontSizeControl = new FormControl(16, Validators.min(10));

  eventForm: FormGroup;

  markedAsWrong: boolean = false;

  constructor(
    protected router: Router,
    public store : Store
  ) {
      this.cities = cities;
    }

  ngOnInit() {

    this.eventForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(80)]),
      organizer: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      cities: new FormControl(''),
      startDate: new FormControl('', Validators.required),
      startTime: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      endTime: new FormControl('', Validators.required),
      donationLink: new FormControl(''),
      description: new FormControl('', Validators.required),
      //streamlink: new FormControl('http://', [Validators.required, Validators.maxLength(250)]), regex https?:\/\/(.+?)(\..+?)(\..{1,})
      streamlink: new FormControl('http://', [Validators.required, Validators.pattern('https?:\/\/(.+?)(\..+?)(\..{1,})')]),
      tags: new FormControl(''),
      subtitle: new FormControl('', Validators.maxLength(140)),
      additionalInformation: new FormControl('', [Validators.maxLength(250)]),
      location: new FormControl(''),
      imageLink: new FormControl('', Validators.maxLength(250))
    });


    this.store.tags$.subscribe((t) => {
        this.alltags = t;
      })

    this.filteredTags$ = this.eventForm.controls.tags.valueChanges.pipe(
      startWith(null),
      map((tag: Tag | null) => tag ? this._filterTags(tag) : this.alltags.slice())
    );

    this.filteredCities = this.eventForm.controls.cities.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterCities(value))
      );

    // this.dataStore.getOrganizers().subscribe((o) => {
       this.store.organizers$.subscribe((o) => this.organizers = o );
    //   this.allArtists = o;

      // Für Künstler:innen
      /*this.filteredArtists = this.eventForm.controls.artists.valueChanges.pipe(
        startWith(null),
        map((tag: Tag | null) => tag ? this._filterArtists(tag) : this.allArtists.slice()));*/

      this.filteredOrganizers = this.eventForm.controls.organizer.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterOrganizers(value))
      );
    //
    // })

  }


  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.prepareForm();
      this.store.createEvent(this.event)
      .subscribe(e => this.router.navigate(['browse/event', e.id]));
    } else {
      this.markedAsWrong = true;
      this.prepareForm();
    }
  }

  controlHttp(e) {
    let currentLink = e.target.value;
    if (currentLink.substring(0,11) == 'http://http') {
      currentLink = currentLink.substring(7);
    }
    if (currentLink.substring(0,12) == 'https://http') {
      currentLink = currentLink.substring(8);
    }
    this.streamLinkInput.nativeElement.value = currentLink;
    this.eventForm.controls.streamlink.setValue(currentLink);
  }

  controlTime(e) {
    let currentTime = e.target.value;
    if (currentTime == '00:00') {
      this.endTimeInput.nativeElement.value = currentTime;
      this.eventForm.controls.endTime.setValue(currentTime);
    }
  }
  /* Organizer Autocomplete */

  private _filterOrganizers(value): Organizer[] {
    if (value.name != undefined) {
      value = value.name;
    }
    const filterValue = value.toLowerCase();
    return this.organizers.filter(organizer => organizer.name.toLowerCase().includes(filterValue));
  }
  displayFn(option){
  if(option && option.name) {
    return option.name;
  } else {
    return option
  }
}

  /* Organizer Autocomplete */

  private _filterCities(value: string): String[] {

    const filterValue = value.toLowerCase();

    return this.cities.filter(city => city.toLowerCase().includes(filterValue));
  }

  /* Tag Autocomplete Begin _____________________________________________________ */
  addTags(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      let tag = new Tag();
      tag.name = value.trim();
      this.tags.push(tag);
    }
    if (input) {
      input.value = '';
    }
    this.eventForm.controls.tags.setValue(null);
  }

  removeTags(tag: Tag): void {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  selectedTags(event: MatAutocompleteSelectedEvent): void {
    let tag = this.alltags.find(t => t.name == event.option.viewValue);
    this.tags.push(tag);
    this.tagInput.nativeElement.value = '';
    this.eventForm.controls.tags.setValue(null);
  }

  private _filterTags(value): Tag[] {
    const filterValue = value.toLowerCase();
    return this.alltags.filter(tag => tag.name.toLowerCase().indexOf(filterValue) === 0);
  }
  /* Tag Autocomplete End _____________________________________________________ */

  /* Artist Autocomplete Begin _____________________________________________________ */
  // addArtists(event: MatChipInputEvent): void {
  //   const input = event.input;
  //   const value = event.value;
  //   if ((value || '').trim()) {
  //     let artist = new Organizer();
  //     artist.name = value.trim();
  //     this.artists.push(artist);
  //   }
  //   if (input) {
  //     input.value = '';
  //   }
  //   this.eventForm.controls.artists.setValue(null);
  // }
  //
  // removeArtists(artist: Organizer): void {
  //   const index = this.artists.indexOf(artist);
  //   if (index >= 0) {
  //     this.artists.splice(index, 1);
  //   }
  // }
  //
  // selectedArtists(event: MatAutocompleteSelectedEvent): void {
  //   let tag = this.allArtists.find(t => t.name == event.option.viewValue);
  //   this.artists.push(tag);
  //   this.artistInput.nativeElement.value = '';
  //   this.eventForm.controls.artists.setValue(null);
  // }
  //
  // private _filterArtists(value): Organizer[] {
  //   const filterValue = value.toLowerCase();
  //   return this.allArtists.filter(artist => artist.name.toLowerCase().indexOf(filterValue) === 0);
  // }
  /* Artist Autocomplete End _____________________________________________________ */

  private prepareForm() {
    let form = this.eventForm.controls;

    this.event.start = addTimeToDate(form.startDate.value,form.startTime.value);
    this.event.end = addTimeToDate(form.endDate.value,form.endTime.value);
    let tags = []
    this.tags.forEach(function (item) {
      tags.push(item.name.toLowerCase())
    });
    this.event.tags = tags;

    if (form.organizer.value.id === undefined) {
      this.event.organizer.id = 0;
      this.event.organizer.name = form.organizer.value;
    }
    else {
      this.event.organizer.id = form.organizer.value.id;
      this.event.organizer.name = form.organizer.value.name;
    }
    this.event.category.id = form.category.value;
    this.event.link = form.streamlink.value;
    this.event.name = form.name.value;
    this.event.description = form.description.value.replace(new RegExp('\n', 'g'), "<br />");
    this.event.image = form.imageLink.value;
    this.event.infoLink = form.additionalInformation.value;
    this.event.donationLink = form.donationLink.value;
    this.event.subtitle = form.subtitle.value;
    this.event.city = form.cities.value;
    this.event.location = form.location.value;
  }

}
