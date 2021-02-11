import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  mouseoverLogin = false;
  loginInvalid = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(formValues: any): void {
    this.authService.loginUser(formValues.username, formValues.password)
      .subscribe(response => {
        if (!response) {
          this.loginInvalid = true;
        }
        else {
          this.router.navigate(['events']);
        }
      });
    this.router.navigate(['events']);
  }

  cancel(): void {
    this.router.navigate(['events']);
  }
}
