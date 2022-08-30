import { TestBed } from '@angular/core/testing';

import { CreatevehiclesService } from './createvehicles.service';

describe('CreatevehiclesService', () => {
  let service: CreatevehiclesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatevehiclesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
