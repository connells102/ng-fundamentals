import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent {
  @Input() event: any;

  // getStartTimeClass() {
  //   if (this.event && this.event.time === '8:00 am')
  //     return 'green bold'
  //   else
  //     return ''
  // }

  getStartTimeStyle() {
    if (this.event && this.event.time === '8:00 am')
      return {color: '#003300', 'font-weight': 'bold'};
    return {};
  }
}
