import { TestBed } from '@angular/core/testing';

import { NoAuthGuard } from './no-auth-guard.service';

describe('NoAuthGuard', () => {
  let service: NoAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoAuthGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
