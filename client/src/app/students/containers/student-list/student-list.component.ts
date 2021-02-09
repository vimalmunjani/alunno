import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { combineLatest, forkJoin, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { ISearchState } from 'src/app/core/reducers/search.reducer';
import { selectSearchQuery } from '../../../core/selectors';
import { IStudent } from '../../models';
import { IStudentState } from '../../reducers';
import { selectAllStudents } from '../../selectors';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  public displayedColumns: string[] = ['firstName', 'lastName', 'gender', 'DOB'];

  public students$: Observable<IStudent[]> =
    combineLatest([this._store.select(selectAllStudents), this._store.select(<any>selectSearchQuery)])
      .pipe(map(([students, searchQuery]: [IStudent[], string]) => {
        return students.filter((student) => {
          if (student && student.firstName) {
            return student.firstName.toLowerCase().startsWith(searchQuery.toLowerCase());
          }
          return true;
        });
      }))

  constructor(private _store: Store<IStudentState>,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  showDetails(studentId: string): void {
    this._router.navigate([studentId], { relativeTo: this._route });
  }

}
