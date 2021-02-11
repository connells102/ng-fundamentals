import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { CollapsibleWellComponent } from "src/app/common/collapsible-well/collapsible-well.component";
import { AuthService } from "src/app/user/auth/auth.service";
import { DurationPipe } from "../../shared/duration/duration.pipe";
import { UpvoteComponent } from "../upvote/upvote.component";
import { VoterService } from "../voter/voter.service";
import { SessionListComponent } from "./session-list.component";

describe('SessionListComponent', () => {
  let fixture: ComponentFixture<SessionListComponent>;
  let component: SessionListComponent;
  let element: HTMLElement;
  let debugElement: DebugElement;

  beforeEach(waitForAsync(() => {
    let mockAuthService = {
      isAuthenticated: () => true,
      currentUser: { username: 'Joe' }
    };
    let mockVoterService = {
      userHasVoted: () => true
    };

    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent,
        //UpvoteComponent,
        //CollapsibleWellComponent,
        DurationPipe
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('initial display', () => {

    it('should have the correct session title', () => {
      component.sessions = [
        {
          id: 3,
          name: 'Session 1',
          presenter: 'Joe',
          duration: 1,
          level: 'beginner',
          abstract: 'abstract',
          voters: ['john', 'bob']
        }
      ];
      component.filterBy = 'all',
      component.sortBy = 'name';
      component.eventId = 4;

      component.ngOnChanges();
      fixture.detectChanges();

      expect(element.querySelector('[well-title]')?.textContent).toContain('Session 1');

      /* doesn't work */
      // expect(debugElement.query(By.css('[well-title]'))
      //   .nativeElement.textContent)
      //   .toContain('Session 1');
    });
  });
});
