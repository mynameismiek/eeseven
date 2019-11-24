import { Injectable, OnInit } from '@angular/core';
import { GoogleApiService, GoogleAuthService, GoogleUser } from 'ng-gapi';

@Injectable()
export class UserService {
  public static SESSION_STORAGE_KEY: string = 'accessToken';
  private user: GoogleUser;
  private loaded: boolean;

  constructor(private googleAuth: GoogleAuthService,
              gapiService: GoogleApiService) {
    gapiService.onLoad().subscribe(() => {
      console.log("gapiService loaded");
    }, (err) => console.log(err));
  }
  
  public getToken(): string {
    let token: string = sessionStorage.getItem(UserService.SESSION_STORAGE_KEY);
    if (!token) {
      throw new Error("no token set , authentication required");
    }
    return sessionStorage.getItem(UserService.SESSION_STORAGE_KEY);
  }
  
  public signIn(callback: Function): void {
    console.log("signing in...");
    this.googleAuth.getAuth()
        .subscribe((auth) => {
          console.log("sub " + auth);
          auth.signIn().then(res => this.signInSuccessHandler(res, callback));
        });
  }

  public signOut(): void {
    sessionStorage.removeItem(UserService.SESSION_STORAGE_KEY);
  }
  
  public isLoggedIn(): boolean {
    return sessionStorage.getItem(UserService.SESSION_STORAGE_KEY) != undefined;
  }

  private signInSuccessHandler(res: GoogleUser, callback: Function) {
    console.log(res);
    this.user = res;
    sessionStorage.setItem(UserService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token);
    callback(this.isLoggedIn());
  }
}