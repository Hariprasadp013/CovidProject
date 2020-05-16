import { TestBed } from '@angular/core/testing';

import { GetCountrydataService } from './get-countrydata.service';

describe('GetCountrydataService', () => {
  let service: GetCountrydataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCountrydataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
