import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContanctComponent } from './contanct.component';

describe('ContanctComponent', () => {
  let component: ContanctComponent;
  let fixture: ComponentFixture<ContanctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContanctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContanctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
