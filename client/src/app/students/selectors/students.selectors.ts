import { Dictionary } from '@ngrx/entity';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IStudent } from '../models';
import { IStudentState, selectAll, selectEntities, studentsFeatureKey } from '../reducers';

export const studentFeatureSelector = createFeatureSelector<IStudentState>(studentsFeatureKey);

export const selectAllStudents = createSelector(
    studentFeatureSelector,
    selectAll
);

export const selectStudentEntities = createSelector(
    studentFeatureSelector,
    selectEntities
);

export const isLoading = createSelector(
    studentFeatureSelector,
    state => state.isLoading
);

export const selectStudentById = createSelector(
    selectStudentEntities,
    (students: Dictionary<IStudent>, props: { id: string }) => students[props.id]
);
