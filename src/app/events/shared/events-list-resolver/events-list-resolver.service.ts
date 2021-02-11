import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IEvent } from '../event/event.model';
import { EventService } from '../event/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventsListResolverService implements Resolve<any> {

  constructor(private eventService: EventService) { }

  resolve(): Observable<IEvent[]> {
    return this.eventService.getEvents();
  }
}
