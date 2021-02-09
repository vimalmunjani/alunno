import { createReducer, on } from '@ngrx/store';
import { SearchActions } from '../actions';

export const searchFeatureKey = 'search';

export interface ISearchState {
    query: string;
}

const initialAuthState: ISearchState = {
    query: ''
};

export const searchReducer = createReducer(
    initialAuthState,
    on(SearchActions.search, (state, { query }) => ({
        ...state,
        query
    })),
    on(SearchActions.clearSearch, (state) => ({
        ...state,
        query: ''
    }))
);
