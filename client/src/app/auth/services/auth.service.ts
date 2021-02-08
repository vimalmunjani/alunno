import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICredentials } from '../models';
import { AuthConstants } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  signUp(credentials: ICredentials) {
    return this._http.post(AuthConstants.SIGN_UP_URL, {
      email: credentials.email,
      password: credentials.password,
    });
  }

  signIn(credentials: ICredentials) {
    return this._http.post(AuthConstants.SIGN_IN_URL, {
      email: credentials.email,
      password: credentials.password,
    });
  }

}
