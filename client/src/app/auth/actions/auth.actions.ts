import { createAction, props } from '@ngrx/store';
import { ICredentials } from '../models';

/**
 * SignIn Action
 */
export const signIn = createAction(
    '[Auth/UI] SignIn',
    props<{ credentials: ICredentials }>()
);

/**
 * SignUp Action
 */
export const signUp = createAction(
    '[Auth/UI] SignUp',
    props<{ credentials: ICredentials }>()
);

/**
 * SignOut  Action
 */
export const signOut = createAction('[Auth/UI] SignOut');
