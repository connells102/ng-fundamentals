import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { JQ_TOKEN } from '../jquery/jquery.service';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  private element!: HTMLElement;
  @Input('modal-trigger') modalId: string = '';

  constructor(@Inject(JQ_TOKEN) private $: any,
    element: ElementRef) {
      this.element = element.nativeElement;
     }

  ngOnInit() {
    this.element.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal({});
    });
  }

}
