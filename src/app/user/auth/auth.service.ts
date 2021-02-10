import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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

    return this.http.post('/api/login', loginInfo, options)
      .pipe(map((data: any) => {
        ({...data, user: this.currentUser = data.user})
      }))
      .pipe(catchError(err => {
        return of(false);
      }));
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    this.http.get('/api/currentIdentity')
      .subscribe(data => {
        if (data instanceof Object)
          this.currentUser = <IUser>data;
      });
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }

  logOut() {
    let user!: IUser;
    this.currentUser = user;

    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    return this.http.post('/api/logout', {}, options);
  }
}
