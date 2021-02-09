import { TestBed } from '@angular/core/testing';

import { EventsListResolverService } from './events-list-resolver.service';

describe('EventsListResolverService', () => {
  let service: EventsListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
