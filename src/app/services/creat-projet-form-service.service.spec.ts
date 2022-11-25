import { TestBed } from '@angular/core/testing';

import { CreatProjetFormServiceService } from './creat-projet-form-service.service';

describe('CreatProjetFormServiceService', () => {
  let service: CreatProjetFormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatProjetFormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
