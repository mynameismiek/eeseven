import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  login(): boolean {
    return true;
  }

  logout(): boolean {
    return true;
  }

  isLoggedIn(): boolean {
    return false;
  }
}