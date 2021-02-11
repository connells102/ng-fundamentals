import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IUser } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser!: IUser;

  constructor(private http: HttpClient) { }

  loginUser(username: string, password: string): Observable<any> {
    const loginInfo = { username, password };
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

    return this.http.post('/api/login', loginInfo, options)
      .pipe(map((data: any) => {
        ({...data, user: this.currentUser = data.user});
      }))
      .pipe(catchError(err => {
        return of(false);
      }));
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  checkAuthenticationStatus(): void {
    this.http.get('/api/currentIdentity')
      .subscribe(data => {
        if (data instanceof Object) {
          this.currentUser = (data as IUser);
        }
      });
  }

  updateCurrentUser(firstName: string, lastName: string): Observable<any> {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }

  logOut(): Observable<any> {
    const user: any = {};
    this.currentUser = user;

    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    return this.http.post('/api/logout', {}, options);
  }
}
