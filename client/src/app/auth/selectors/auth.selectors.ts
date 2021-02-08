import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IAuthState, authFeatureKey } from '../reducers';

export const selectAuthState = createFeatureSelector<any, IAuthState>(authFeatureKey);

export const selectAuthLoading = createSelector(selectAuthState, (state) => state.pending);
export const selectAuthError = createSelector(selectAuthState, (state) => state.error);
export const selectUser = createSelector(selectAuthState, (state) => state.user);
export const selectSignedIn = createSelector(selectUser, (user) => !!user);