
import { StudentsAPIActions, StudentsActions } from '../actions';
import { StudentService } from '../services';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentsEffects {

    loadStudents$ = createEffect(() =>
        this._actions$.pipe(
            ofType(StudentsActions.loadStudents),
            switchMap(() => this._studentService.getAllStudents()),
            map((students) => StudentsAPIActions.loadStudentsSuccess({ students }))
        )
    );

    createStudent$ = createEffect(() =>
        this._actions$.pipe(
            ofType(StudentsActions.addStudent),
            concatMap((action) => this._studentService.createStudent(action.student)),
        ),
        { dispatch: false }
    );

    updateStudent$ = createEffect(() =>
        this._actions$.pipe(
            ofType(StudentsActions.updateStudent),
            concatMap((action) => this._studentService.updateStudent(action.studentId, action.student))
        ),
        { dispatch: false }
    );

    deleteStudent$ = createEffect(() =>
        this._actions$.pipe(
            ofType(StudentsActions.deleteStudent),
            concatMap((action) => this._studentService.deleteStudent(action.studentId))
        ),
        { dispatch: false }
    );

    constructor(
        private _actions$: Actions,
        private _studentService: StudentService
    ) { }
}
