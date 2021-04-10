import { TestBed } from '@angular/core/testing';

import { SpacexDataService } from './spacexapi.service';

describe('SpacexapiService', () => {
  let service: SpacexDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacexDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
