import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { IStudent } from '../models';
import { IStudentState, selectAllStudents } from '../reducers';
import { StudentsActions } from '../actions';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class StudentsResolverService implements Resolve<boolean> {

    constructor(private _store: Store<IStudentState>) { }

    resolve(): Observable<boolean> {
        this._store.dispatch(StudentsActions.loadStudents());
        return of(true)
    }

}