import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventItemBaseComponent } from './event-item-base.component';

describe('EventItemBaseComponent', () => {
  let component: EventItemBaseComponent;
  let fixture: ComponentFixture<EventItemBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventItemBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventItemBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
