import { TestBed } from '@angular/core/testing';
import { Toastr, TOASTR_TOKEN } from './toastr.service';

describe('Toastr', () => {
  let service: Toastr;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TOASTR_TOKEN, useValue: {} }
      ]
    });
    service = TestBed.inject(TOASTR_TOKEN);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
