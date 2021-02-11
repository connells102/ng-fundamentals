import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../../shared';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/user/auth/auth.service';
import { VoterService } from '../voter/voter.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[] = [];
  @Input() filterBy: string = 'all';
  @Input() sortBy: string = 'votes';
  @Input() eventId: number = -1;

  visibleSessions: ISession[] = [];
  faFire = faFire;

  constructor(public authService: AuthService,
    private voterService: VoterService) { }

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      
      this.sortBy === 'name' ?
      this.visibleSessions.sort(sortByNameAscending) :
      this.visibleSessions.sort(sortByVotesDescending);
    }
  }

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.eventId, session, this.authService.currentUser.username);
    }
    else {
      this.voterService.addVoter(this.eventId, session, this.authService.currentUser.username);
    }

    if (this.sortBy === 'votes') {
      this.visibleSessions.sort(sortByVotesDescending);
    }
  }

  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(session, this.authService.currentUser.username);
  }

  filterSessions(filter: string) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    }
    else {
      this.visibleSessions = this.sessions.filter(s => {
        return s.level.toLocaleLowerCase() === filter;
      });
    }
  }
}

function sortByNameAscending(s1: ISession, s2: ISession) {
  if (s1.name > s2.name)
    return 1;
  else if (s1.name === s2.name)
    return 0;
  else
    return -1;
}

function sortByVotesDescending(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
