import { TestBed } from '@angular/core/testing';

import { Jquery } from './jquery.service';

describe('Jquery', () => {
  let service: Jquery;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Jquery);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
