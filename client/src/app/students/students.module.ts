import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentService, StudentsResolverService } from './services';
import { studentReducer, studentsFeatureKey } from './reducers';
import { StudentsEffects } from './effects';


@NgModule({
  declarations: [
    StudentListComponent,
    StudentDetailComponent,
    StudentEditComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StudentsRoutingModule,
    StoreModule.forFeature(studentsFeatureKey, studentReducer),
    EffectsModule.forFeature([StudentsEffects]),
  ],
  providers: [
    StudentService,
    StudentsResolverService
  ]
})
export class StudentsModule { }
