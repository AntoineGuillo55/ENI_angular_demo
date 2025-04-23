import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { protectImageGuard } from './protect-image.guard';

describe('protectImageGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => protectImageGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
