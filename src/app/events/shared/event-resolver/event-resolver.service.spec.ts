import { TestBed } from '@angular/core/testing';

import { EventResolverService } from './event-resolver.service';

describe('EventResolverService', () => {
  let service: EventResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
