import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { AuthService } from './auth.service';
import * as mockRam from '../../../data/user.json'

describe('AuthService', () => {
  let service: AuthService;
  let mockUser: any = (mockRam as any).default
  let httpClientSpy:{post:jasmine.Spy}

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])
    service = new AuthService(httpClientSpy as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Debe de retornar un object con "data" y tokensesion', () => {
    
  })

});
