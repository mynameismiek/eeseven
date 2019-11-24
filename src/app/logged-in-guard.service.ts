import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { UserService }  from './google-apis/user.service';

@Injectable()
export class LoggedInGuardService implements CanActivate {

  constructor (
    private router:Router,
    private userService: UserService) {
      
  }

  canActivate(){
    var isLoggedIn = this.userService.isLoggedIn();
    if (!isLoggedIn){ 
      this.router.navigate(['/login']);
    }
    return isLoggedIn;
  }
}