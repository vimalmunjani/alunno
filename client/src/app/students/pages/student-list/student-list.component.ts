import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
  public students$: Observable<IStudent[]> = this._store.select(selectAllStudents);

  constructor(private _store: Store<IStudentState>,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  showDetails(studentId: string): void {
    this._router.navigate([studentId], { relativeTo: this._route });
  }

}
