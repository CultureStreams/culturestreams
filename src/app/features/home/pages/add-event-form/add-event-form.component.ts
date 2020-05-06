import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { FormControl, Validators, AbstractFormGroupDirective, FormGroup } from '@angular/forms';
import { OrgaEvent } from 'src/models/event';
import { EventService } from 'src/services/event.service';
import { DataStore } from 'src/services/data.service';
import { Category } from 'src/models/category';
import { Organizer } from 'src/models/organizer';
import { Router } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import { Tag } from 'src/models/tag';
import { MatChipInputEvent, MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import {cities} from 'src/dummy/cities';

//import { eventNames } from 'cluster';

@Component({
  selector: 'cs-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.css']
})
export class AddEventFormComponent implements OnInit {

  public event: OrgaEvent = new OrgaEvent();
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
  
  /* Organizer */
  public organizers: Organizer[];
  public filteredOrganizers: Observable<Organizer[]>;

  /* Cities */
  public cities: String[];
  public filteredCities: Observable<String[]>;

  /* Artists */
  public filteredArtists: Observable<Organizer[]>;
  public artistStr: string = '';
  artists: Organizer[] = [];
  allArtists : Organizer[];
  public artistValue = '';
  @ViewChild('artistInput', { read: ElementRef, static: false } ) artistInput: ElementRef<HTMLInputElement>;


  /* Tags */
  public filteredTags: Observable<Tag[]>;
  public tagStr: string = '';
  tags: Tag[] = [];
  alltags : Tag[];
  public tagValue = '';
  @ViewChild('tagInput', { read: ElementRef, static: false } ) tagInput: ElementRef<HTMLInputElement>;

  public error = false;


  categoryControl = new FormControl('category');
  fontSizeControl = new FormControl(16, Validators.min(10));

  eventForm: FormGroup;

  constructor(
    protected router: Router,
    protected eventService : EventService,
    protected dataStore : DataStore) {
      this.cities = cities;
    }

  ngOnInit() {

    this.eventForm = new FormGroup({
      name: new FormControl('', Validators.required),
      organizer: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      cities: new FormControl(''),
      startDate: new FormControl('', Validators.required),
      startTime: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      endTime: new FormControl('', Validators.required),
      donationLink: new FormControl(''),
      description: new FormControl('', Validators.required),
      streamlink: new FormControl('', Validators.required),
      tags: new FormControl(''),
      subHeadline: new FormControl(''),
      additionalInformation: new FormControl(''),
      location: new FormControl(''),
      imageLink: new FormControl('')
    });

    this.dataStore.getCategories().subscribe((c) => this.categories = c);
    this.dataStore.getTags().subscribe((t) => {
      this.alltags = t;
      this.filteredTags = this.eventForm.controls.tags.valueChanges.pipe(
        startWith(null),
        map((tag: Tag | null) => tag ? this._filterTags(tag) : this.alltags.slice()));
        
    })

    this.filteredCities = this.eventForm.controls.cities.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterCities(value))
      );

    this.dataStore.getOrganizers().subscribe((o) => {
      this.organizers = o;
      this.allArtists = o;

      // Für Künstler:innen
      /*this.filteredArtists = this.eventForm.controls.artists.valueChanges.pipe(
        startWith(null),
        map((tag: Tag | null) => tag ? this._filterArtists(tag) : this.allArtists.slice()));*/
      
      this.filteredOrganizers = this.eventForm.controls.organizer.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterOrganizers(value))
      );
        
    })

  }


  onSubmit(form: FormGroup) {

    if (form.valid) {
      this.prepareForm();

      let organizer : Organizer = this.organizers.find(o => o.name == this.eventForm.controls.organizer.value);
      if (organizer === undefined) {
        organizer = new Organizer();
        organizer.name = this.eventForm.controls.organizer.value;
      }
      this.event.organizer = organizer.id;

      if (this.event.organizer == 0) {
        console.log('noorganizer');
        this.eventService.addOrganizer(organizer.name).subscribe((organizer) => {
          this.event.organizer = organizer.id;
          this.eventService.addEvent(this.event).subscribe(e => this.router.navigate(['/event', e.id]));
        });
      } else {
        console.log('withorganizer');
        this.eventService.addEvent(this.event).subscribe(e => this.router.navigate(['/event', e.id]));
      }
    } else {
      console.log('not valid weil aus Gründen');
      console.log(this.eventForm);
    }
  }

  /* Organizer Autocomplete */

  private _filterOrganizers(value): Organizer[] {
    console.log(value);
    if (value.name != undefined) {
      value = value.name;
    }
    const filterValue = value.toLowerCase();
    return this.organizers.filter(organizer => organizer.name.toLowerCase().includes(filterValue));
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
  addArtists(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      let artist = new Organizer();
      artist.name = value.trim();
      this.artists.push(artist);
    }
    if (input) {
      input.value = '';
    }
    this.eventForm.controls.artists.setValue(null);
  }

  removeArtists(artist: Organizer): void {
    const index = this.artists.indexOf(artist);
    if (index >= 0) {
      this.artists.splice(index, 1);
    }
  }

  selectedArtists(event: MatAutocompleteSelectedEvent): void {
    let tag = this.allArtists.find(t => t.name == event.option.viewValue);
    this.artists.push(tag);
    this.artistInput.nativeElement.value = '';
    this.eventForm.controls.artists.setValue(null);
  }

  private _filterArtists(value): Organizer[] {
    const filterValue = value.toLowerCase();
    return this.allArtists.filter(artist => artist.name.toLowerCase().indexOf(filterValue) === 0);
  }
  /* Artist Autocomplete End _____________________________________________________ */

  private parseStartAndEnd() {
    let dayTime = this.startTime.slice(-2);
    let startTimeString = this.startTime.substr(0, this.startTime.length - 3);
    let startMinutes = startTimeString.slice(-2);
    startTimeString = startTimeString.substr(0, this.startTime.length - 6);
    let startHours = parseInt(startTimeString);
    if (dayTime == 'PM') {
      startHours = startHours + 12;
    }
    this.startDate.setHours(startHours, startMinutes, 0);
    let startDate = this.startDate.setHours(startHours, startMinutes);
    this.event.start = new Date(startDate);

    let nightTime = this.endTime.slice(-2);
    let endTimeString = this.endTime.substr(0, this.endTime.length - 3);
    let endMinutes = endTimeString.slice(-2);
    endTimeString = endTimeString.substr(0, this.endTime.length - 6);
    let endHours = parseInt(endTimeString);
    if (nightTime == 'PM') {
      endHours = endHours + 12;
    }
    this.startDate.setHours(endHours, endMinutes, 0);
    let endDate = this.endDate.setHours(endHours, endMinutes);
    this.event.end = new Date(endDate);
  }

  private prepareForm() {
    let tagString = '';
    this.tags.forEach((t, i) => {
      if (i !== 0) {
        tagString = tagString + ', ';
      }
      tagString = tagString + t.name;
    });

    this.event.tags = tagString;
    this.event.name = this.eventForm.controls.name.value;
    this.event.description = this.eventForm.controls.description.value;
    this.event.imageLink = this.eventForm.controls.imageLink.value;
    this.event.infoLink = this.eventForm.controls.additionalInformation.value;
    this.event.donationLink = this.eventForm.controls.donationLink.value;
    this.event.city = this.eventForm.controls.cities.value;
  }

}
