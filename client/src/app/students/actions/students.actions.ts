import { createAction, props } from '@ngrx/store';
import { IStudent } from '../models';

/**
 * Load Students Action
 */
export const loadStudents = createAction('[Students/UI] Load Students');

/**
 * Add Student Action
 */
export const addStudent = createAction(
    '[Students/UI] Add Student',
    props<{ student: IStudent }>()
);


/**
 * Update Student Action
 */
export const updateStudent = createAction(
    '[Students/UI] Update Student',
    props<{ studentId: string, student: IStudent }>()
);

/**
 * Delete Student Action
 */
export const deleteStudent = createAction(
    '[Students/UI] Delete Student',
    props<{ studentId: string }>()
);
