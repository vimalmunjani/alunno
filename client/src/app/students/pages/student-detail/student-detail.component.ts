import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IStudent } from '../../models';
import { IStudentState } from '../../reducers';
import { selectStudentById } from '../../selectors';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  public student$: Observable<IStudent>;

  constructor(private _store: Store<IStudentState>,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.student$ = this._route.paramMap
      .pipe(switchMap((paramMap) => {
        return this._store.select(selectStudentById, { id: paramMap.get('id') });
      }));
  }

}
