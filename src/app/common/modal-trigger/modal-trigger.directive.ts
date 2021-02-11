import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { JQ_TOKEN } from '../jquery/jquery.service';

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  private element!: HTMLElement;
  @Input('appModalTrigger') modalId = '';

  constructor(@Inject(JQ_TOKEN) private $: any,
              element: ElementRef) {
      this.element = element.nativeElement;
     }

  ngOnInit(): void {
    this.element.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal({});
    });
  }

}
