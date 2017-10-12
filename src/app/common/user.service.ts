import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { OAuthService } from 'angular-oauth2-oidc-hybrid';

import { User } from '../model';

@Injectable()
export class UserService {
  private _user = new BehaviorSubject(<User>{});

  constructor(private oauthService: OAuthService) {}


  get user() {
    return this._user.asObservable();
  }

  logout() {
    return this.oauthService.logOut();
  }

  setUser(u: User) {
    this._user.next(u);
  }
}
