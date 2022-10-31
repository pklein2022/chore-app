import { TestBed } from '@angular/core/testing';

import { ChoresResolverService } from './chores-resolver.service';

describe('ChoresResolverService', () => {
  let service: ChoresResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChoresResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
