import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventFormComponent } from './add-event-form.component';

describe('AddEventFormComponent', () => {
  let component: AddEventFormComponent;
  let fixture: ComponentFixture<AddEventFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
