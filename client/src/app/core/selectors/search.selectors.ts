import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IState } from '../reducers';
import { ISearchState, searchFeatureKey } from '../reducers/search.reducer';

export const selectSearchState = createFeatureSelector<IState, ISearchState>(searchFeatureKey);

export const selectSearchQuery = createSelector(selectSearchState, (state) => state.query);
