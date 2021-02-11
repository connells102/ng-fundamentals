import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared';
import { EventService } from '../shared/event/event.service';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: any = '';
  addMode = false;
  filterBy = 'all';
  sortBy = 'votes';

  constructor(private eventService: EventService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.forEach((data) => {
      this.event = data.event;
      this.addMode = false;
    });
  }

  all(): void {
    this.filterBy = 'all';
  }

  beginner(): void {
    this.filterBy = 'beginner';
  }

  intermediate(): void {
    this.filterBy = 'intermediate';
  }

  advanced(): void {
    this.filterBy = 'advanced';
  }

  name(): void {
    this.sortBy = 'name';
  }

  votes(): void {
    this.sortBy = 'votes';
  }

  addSession(): void {
    this.addMode = true;
  }

  saveNewSession(session: ISession): void {
    const nextId = Math.max.apply(null, this.event.sessions.map((s: { id: number; }) => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }

  cancelAddSession(): void {
    this.addMode = false;
  }
}
