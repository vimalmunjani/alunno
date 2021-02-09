import { createReducer, on, createFeatureSelector, State, createSelector } from '@ngrx/store';
import { AuthActions, AuthAPIActions } from '../actions';

export const authFeatureKey = 'auth';

export interface IAuthState {
    error: string | null;
    pending: boolean;
    user: {
        authToken: string;
        email: string;
        isAdmin: boolean;
    };
}

const initialAuthState: IAuthState = {
    error: null,
    pending: false,
    user: null
};

export const authReducer = createReducer(
    initialAuthState,
    on(AuthActions.signIn, (state) => ({
        ...state,
        error: null,
        pending: true,
    })),
    on(AuthAPIActions.signInSuccess, (state, { user }) => ({
        ...state,
        error: null,
        pending: false,
        user
    })),
    on(AuthAPIActions.signInFailure, (state, { error }) => ({
        ...state,
        error,
        pending: false,
        user: null
    })),
    on(AuthActions.signUp, (state) => ({
        ...state,
        error: null,
        pending: true,
    })),
    on(AuthAPIActions.signUpSuccess, (state, { user }) => ({
        ...state,
        error: null,
        pending: false,
        user
    })),
    on(AuthAPIActions.signUpFailure, (state, { error }) => ({
        ...state,
        error,
        pending: false,
        user: null
    })),
    on(AuthActions.signOut, () => initialAuthState)
);
