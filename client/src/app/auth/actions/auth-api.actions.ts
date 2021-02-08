import { createAction, props } from '@ngrx/store';

/**
 * SignIn Actions
 */
export const signInSuccess = createAction(
    '[Auth/API] SignIn Success',
    props<{ user: any }>()
);

export const signInFailure = createAction(
    '[Auth/API] SignIn Failure',
    props<{ error: any }>()
);

/**
 * SignUp Actions
 */
export const signUpSuccess = createAction(
    '[Auth/API] SignUp Success',
    props<{ user: any }>()
);

export const signUpFailure = createAction(
    '[Auth/API] SignUp Failure',
    props<{ error: any }>()
);
