import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { IAuthState } from '../reducers';
import { selectSignedIn } from '../selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private _store: Store<IAuthState>,
              private _router: Router) { }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {

    const redirectURL = state.url;

    return this._store.select(selectSignedIn).pipe(
      take(1),
      map((isAuthenticated) => {
        if (!isAuthenticated) {
          this._router.navigate(['signin'], { queryParams: { redirectURL } });
          return false;
        }
        return true;
      }),
    );

  }

}
