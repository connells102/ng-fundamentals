import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth/auth.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { EventService, ISession } from '../events';

@Component({
  selector: 'events-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faBars = faBars;
  searchTerm: string = '';
  foundSessions: ISession[] = [];

  constructor(public authService: AuthService,
    private eventService: EventService) { }

  ngOnInit(): void {
  }

  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe(
      (sessions: ISession[]) => {
        this.foundSessions = sessions;
      });
  }
}
