import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { IStudent } from '../models';
import { StudentsActions, StudentsAPIActions } from '../actions';

export const studentsFeatureKey = 'students';

export interface IStudentState extends EntityState<IStudent> {
    isLoading: boolean;
    hasError: boolean;
}

export const adapter: EntityAdapter<IStudent> = createEntityAdapter<IStudent>();

export const initialState = adapter.getInitialState({
    isLoading: false,
    hasError: false
});

export const studentReducer = createReducer(
    initialState,
    on(StudentsActions.loadStudents, (state, action) => {
        return {
            ...state,
            isLoading: true,
            hasError: false
        };
    }),
    on(StudentsAPIActions.loadStudentsSuccess, (state, action) => {
        return adapter.setAll(action.students, {
            ...state,
            isLoading: false,
            hasError: false
        });
    }),
    on(StudentsAPIActions.addStudentSuccess, (state, action) => {
        return adapter.addOne(action.student, state);
    }),
    on(StudentsAPIActions.updateStudentSuccess, (state, action) => {
        // return adapter.updateOne(action.student, {});
        return state;
    }),
    on(StudentsAPIActions.deleteStudentSuccess, (state, action) => {
        // return adapter.removeOne(action.studentId, state);
        return state;
    })
);

export const { selectAll: selectAllStudents, selectIds } = adapter.getSelectors();
