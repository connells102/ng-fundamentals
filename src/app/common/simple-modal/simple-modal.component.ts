import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { JQ_TOKEN } from '../jquery/jquery.service';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent {
  @Input() title = '';
  @Input() elementId = '';
  @Input() closeOnBodyClick = '';
  @ViewChild('modalcontainer') containerElement!: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) { }

  closeModal(): void {
    if (this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
      this.$(this.containerElement.nativeElement).modal('hide');
    }
  }
}
