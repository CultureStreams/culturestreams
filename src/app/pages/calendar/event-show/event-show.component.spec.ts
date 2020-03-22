import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventShowComponent } from './event-show.component';

describe('EventShowComponent', () => {
  let component: EventShowComponent;
  let fixture: ComponentFixture<EventShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
