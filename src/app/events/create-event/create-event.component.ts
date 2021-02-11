import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
  newEvent!: any;
  isDirty = true;

  constructor(private router: Router,
              private eventService: EventService) {

  }

  saveEvent(formValues: any): void {
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isDirty = false;
      this.router.navigate(['/events']);
    });
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }

}
