import { TestBed } from '@angular/core/testing';

import { ConfigerService } from './configer.service';

describe('ConfigerService', () => {
  let service: ConfigerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
