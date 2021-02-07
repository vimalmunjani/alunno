import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StudentsActions } from '../actions';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  constructor(private _store: Store<any>) { }

  ngOnInit(): void {
  }

}
