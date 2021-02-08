import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { take, map, switchMap } from 'rxjs/operators';
import { IAuthState } from '../reducers';
import { selectSignedIn } from '../selectors';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(private _store: Store<IAuthState>,
              private _router: Router) { }

  canActivate(): Observable<boolean> {

    return this._store.select(selectSignedIn)
      .pipe(
        switchMap((isAuthenticated) => {
          if (isAuthenticated) {
            this._router.navigate(['']);
            return of(false);
          }
          return of(true);
        }),
      );

  }

}
