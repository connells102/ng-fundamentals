import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IUser } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser!: IUser;

  constructor(private http: HttpClient) { }

  loginUser(username: string, password: string) {
    let loginInfo = { username: username, password: password };
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

    // fix this (tap is fine)
    return this.http.post('/api/login', loginInfo, options)
      .pipe(tap(data => {
        //this.currentUser = <IUser>data['user'];
      }))
      .pipe(catchError(err => {
        return of(false);
      }));
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
