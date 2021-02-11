import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventsAppComponent } from './events-app.component';
import { AuthService } from './user/auth/auth.service';

describe('EventsAppComponent', () => {
  let component: EventsAppComponent;
  let fixture: ComponentFixture<EventsAppComponent>;

  beforeEach(async () => {
    const mockAuthService = {
      checkAuthenticationStatus: () => true
    };

    await TestBed.configureTestingModule({
      declarations: [ EventsAppComponent ],
      providers: [
        { provide: AuthService, useValue: mockAuthService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
