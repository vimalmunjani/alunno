import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { IAuthState } from '../reducers';
import { selectUser } from '../selectors';

@Injectable()
export class AuthInterceptor {

  constructor(private _store: Store<IAuthState>) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this._store.select(selectUser).pipe(
      take(1),
      map(({ authToken }) => {
        if (authToken) {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${authToken}`
            }
          });
        }
      }),
    );

    return next.handle(request);

  }

}
