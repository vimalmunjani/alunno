import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { IAuthState } from '../reducers';
import { selectSignedIn } from '../selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad, CanActivateChild {

  constructor(private _store: Store<IAuthState>,
    private _router: Router) { }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this._check();
  }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    const redirectURL = state.url;
    return this._check(redirectURL);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    const redirectURL = state.url;
    return this._check(redirectURL);
  }

  private _check(redirectURL: string = ''): Observable<boolean> {
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
