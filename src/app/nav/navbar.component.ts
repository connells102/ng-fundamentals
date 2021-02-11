import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth/auth.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { EventService, IEvent, ISession } from '../events';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  events: IEvent[] = [];
  searchTerm = '';
  foundSessions: ISession[] = [];

  faBars = faBars;
  constructor(public authService: AuthService,
              private eventService: EventService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.events = this.route.snapshot.data.events;
  }

  searchSessions(searchTerm: string): void {
    this.eventService.searchSessions(searchTerm).subscribe(
      (sessions: ISession[]) => {
        this.foundSessions = sessions;
      });
  }
}
