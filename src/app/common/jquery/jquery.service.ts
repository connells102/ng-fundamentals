import { Injectable, InjectionToken } from '@angular/core';

export let JQ_TOKEN = new InjectionToken<Object>('jQuery');

@Injectable({
  providedIn: 'root'
})
export class Jquery {

  constructor() { }
}
