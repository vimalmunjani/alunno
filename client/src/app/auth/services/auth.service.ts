import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICredentials } from '../models';
import { AuthConstants } from '../utils';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  signUp(credentials: ICredentials): Observable<{ authToken: string }> {
    return this._http.post<{ authToken: string }>(AuthConstants.SIGN_UP_URL, {
      email: credentials.email,
      password: credentials.password,
    });
  }

  signIn(credentials: ICredentials): Observable<{ authToken: string }> {
    return this._http.post<{ authToken: string }>(AuthConstants.SIGN_IN_URL, {
      email: credentials.email,
      password: credentials.password,
    });
  }

}
