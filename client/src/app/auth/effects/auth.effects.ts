
import { AuthAPIActions, AuthActions } from '../actions';
import { AuthService } from '../services';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, concatMap, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { ICredentials } from '../models';

@Injectable()
export class AuthEffects {

    signup$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.signUp),
            map((action) => action.credentials),
            exhaustMap((credentials: ICredentials) =>
                this._authService.signUp(credentials).pipe(
                    map((user) => AuthAPIActions.signUpSuccess({ user })),
                    catchError((error) => of(AuthAPIActions.signUpFailure({ error })))
                )
            )
        )
    );

    signin$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.signIn),
            map((action) => action.credentials),
            exhaustMap((credentials: ICredentials) =>
                this._authService.signIn(credentials).pipe(
                    map((user) => AuthAPIActions.signInSuccess({ user })),
                    catchError((error) => of(AuthAPIActions.signInFailure({ error })))
                )
            )
        )
    );

    postAuthSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthAPIActions.signInSuccess, AuthAPIActions.signUpSuccess),
            map((action) => action.user),
            tap((user) => {
                const redirectURL = this._route.snapshot.queryParamMap.get('redirectURL') || '';
                this._router.navigateByUrl(redirectURL);
            })
        ), { dispatch: false });

    constructor(
        private actions$: Actions,
        private _authService: AuthService,
        private _router: Router,
        private _route: ActivatedRoute
    ) { }

}
