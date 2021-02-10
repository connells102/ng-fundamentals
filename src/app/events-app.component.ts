import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth/auth.service';

@Component({
  selector: 'events-app',
  templateUrl: './events-app.component.html',
  styleUrls: ['./events-app.component.css']
})
export class EventsAppComponent implements OnInit {
  title = 'ng-fundamentals';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.checkAuthenticationStatus();
  }
}
