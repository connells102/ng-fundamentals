import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TOASTR_TOKEN } from 'src/app/common/toastr/toastr.service';
import { AuthService } from '../auth/auth.service';
import { LoginComponent } from '../login/login.component';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let mockHttp: HttpTestingController;

  beforeEach(async () => {
    let mockAuthService = {
      currentUser: {
        firstName: 'Joe',
        lastName: 'Smith'
      }
    };

    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'user/login', component: LoginComponent },
        ]),
      ],
      declarations: [ ProfileComponent ],
      providers: [
        { provide: TOASTR_TOKEN, useValue: {} },
        { provide: AuthService, useValue: mockAuthService }
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    mockHttp = fixture.debugElement.injector.get<HttpTestingController>(
      HttpTestingController as Type<HttpTestingController>
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
