import { Action, ActionReducerMap } from '@ngrx/store';
import { searchFeatureKey, searchReducer, ISearchState } from './search.reducer';

export interface IState {
    [searchFeatureKey]: ISearchState
};

export const rootReducers: ActionReducerMap<IState, Action> = {
    [searchFeatureKey]: searchReducer
}
