import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { MutantsService } from './mutants.service';

describe('MutantsService', () => {
  let service: MutantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MutantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

