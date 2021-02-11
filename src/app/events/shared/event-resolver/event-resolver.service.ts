import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IEvent } from '../event/event.model';
import { EventService } from '../event/event.service';

@Injectable({
  providedIn: 'root',
})
export class EventResolverService implements Resolve<any> {

  constructor(private eventService: EventService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IEvent> {
    return this.eventService.getEvent(route.params.id);
  }
}
