import { Component, OnInit } from '@angular/core';
import { UserService }  from '../google-apis/user.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  isLoggedIn$ = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.userService.isLoggedIn();
  }

  doLogin(): void {
    this.userService.signIn(loggedIn => this.handleLoginOut(loggedIn));
  }

  doLogout(): void {
    this.userService.signOut(loggedIn => this.handleLoginOut(loggedIn));
  }

  handleLoginOut(loggedIn: boolean): void {
    this.isLoggedIn$ = loggedIn;
  }
}
