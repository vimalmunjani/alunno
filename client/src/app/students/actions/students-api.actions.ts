import { createAction, props } from '@ngrx/store';
import { IStudent } from '../models';

/**
 * Load Students Actions
 */
export const loadStudentsSuccess = createAction(
    '[Students/API] Load Students Success',
    props<{ students: IStudent[] }>());

export const loadStudentsFailure = createAction(
    '[Students/API] Load Students Failure',
    props<{ error: any }>()
);

/**
 * Add Student Actions
 */
export const addStudentSuccess = createAction(
    '[Students/API] Add Student Success',
    props<{ student: IStudent }>()
);

export const addStudentFailure = createAction(
    '[Students/API] Add Student Failure',
    props<{ error: any }>()
);

/**
 * Update Student Actions
 */
export const updateStudentSuccess = createAction(
    '[Students/API] Update Student Success',
    props<{ student: IStudent }>()
);

export const updateStudentFailure = createAction(
    '[Students/API] Update Student Failure',
    props<{ error: any }>()
);

/**
 * Delete Student Actions
 */
export const deleteStudentSuccess = createAction(
    '[Students/API] Delete Student Success',
    props<{ deleted: boolean }>()
);

export const deleteStudentFailure = createAction(
    '[Students/API] Delete Student Failure',
    props<{ error: any }>()
);
