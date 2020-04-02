import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureChannelsComponent } from './culture-channels.component';

describe('CultureChannelsComponent', () => {
  let component: CultureChannelsComponent;
  let fixture: ComponentFixture<CultureChannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureChannelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
