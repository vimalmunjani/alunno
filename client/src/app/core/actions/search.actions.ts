import { createAction, props } from '@ngrx/store';

/**
 * Search Action
 */
export const search = createAction(
    '[Search/UI] Search',
    props<{ query: string }>()
);

/**
 * Clear Search Action
 */
export const clearSearch = createAction('[Search/UI] Clear Search');
