import { EventResolverService } from './event-resolver.service';

describe('EventResolverService', () => {
  let service: EventResolverService;
  let mockHttp;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    service = new EventResolverService(mockHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
