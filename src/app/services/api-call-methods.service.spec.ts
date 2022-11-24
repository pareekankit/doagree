import { TestBed } from '@angular/core/testing';

import { ApiCallMethodsService } from './api-call-methods.service';

describe('ApiCallMethodsService', () => {
  let service: ApiCallMethodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCallMethodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
