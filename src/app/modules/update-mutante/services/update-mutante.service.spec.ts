import { TestBed } from '@angular/core/testing';

import { UpdateMutanteService } from './update-mutante.service';

describe('UpdateMutanteService', () => {
  let service: UpdateMutanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateMutanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
