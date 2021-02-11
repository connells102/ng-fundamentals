import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ISession } from '../../shared';

import { VoterService } from './voter.service';

describe('VoterService', () => {
  let service: VoterService, mockHttp: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    service = new VoterService(mockHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('deleteVoter', () => {

    it ('should remove the voter from the list of voters', () => {
      var session = { id: 6, voters: ['joe', 'john'] };
      mockHttp.delete.and.returnValue(of(false));

      service.deleteVoter(3, <ISession>session, 'joe');

      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('john');
    });

    it ('should call http.delete with the right url', () => {
      var session = { id: 6, voters: ['joe', 'john'] };
      mockHttp.delete.and.returnValue(of(false));

      service.deleteVoter(3, <ISession>session, 'joe');

      expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe')
    });
  });

  describe('addVoter', () => {
    it('should call http.post with the right url', () => {
      var session = { id: 6, voters: ['john'] };
      mockHttp.post.and.returnValue(of(false));

      service.addVoter(3, <ISession>session, 'joe');

      expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe', {}, jasmine.any(Object));
     });
  });
});
