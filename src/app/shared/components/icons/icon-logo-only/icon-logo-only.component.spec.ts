import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLogoOnlyComponent } from './icon-logo-only.component';

describe('IconLogoOnlyComponent', () => {
  let component: IconLogoOnlyComponent;
  let fixture: ComponentFixture<IconLogoOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconLogoOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLogoOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
