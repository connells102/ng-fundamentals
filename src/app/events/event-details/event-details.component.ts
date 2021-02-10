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
  addMode: boolean = false;
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(private eventService: EventService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.forEach((data) => {
      this.event = data['event'];
      this.addMode = false;
    })
  }

  all() {
    this.filterBy = 'all';
  }

  beginner() {
    this.filterBy = 'beginner';
  }

  intermediate() {
    this.filterBy = 'intermediate';
  }

  advanced() {
    this.filterBy = 'advanced';
  }

  name() {
    this.sortBy = 'name';
  }

  votes() {
    this.sortBy = 'votes';
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map((s: { id: number; }) => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
