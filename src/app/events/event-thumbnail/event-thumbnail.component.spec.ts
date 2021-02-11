import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventThumbnailComponent } from './event-thumbnail.component';

describe('EventThumbnailComponent', () => {
  let component: EventThumbnailComponent;
  let fixture: ComponentFixture<EventThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventThumbnailComponent);
    component = fixture.componentInstance;
    component.event = {
      id: 1,
      name: 'Event 1',
      date: new Date('01/01/2022'),
      time: '9:00 am',
      price: 599.99,
      sessions: [],
      imageUrl: '',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
