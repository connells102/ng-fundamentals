import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from '../event/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventsListResolverService implements Resolve<any> {

  constructor(private eventService: EventService) { }

  resolve() {
    return this.eventService.getEvents();
  }
}
