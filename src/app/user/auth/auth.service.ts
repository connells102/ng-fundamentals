import { Injectable } from '@angular/core';
import { IUser } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser!: IUser;

  constructor() { }

  loginUser(username: string, password: string) {
    this.currentUser = {
      id: 1,
      username: username,
      firstName: 'Trixie',
      lastName: 'Connell'
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
