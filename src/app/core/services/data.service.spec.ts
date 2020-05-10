import { TestBed } from '@angular/core/testing';

import { DataStore } from './data.service';

describe('DataStore', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataStore = TestBed.get(DataStore);
    expect(service).toBeTruthy();
  });
});
