import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentDetailComponent, StudentEditComponent, StudentListComponent } from './pages';
import { StudentService, StudentsResolverService } from './services';
import { studentReducer, studentsFeatureKey } from './reducers';
import { StudentsEffects } from './effects';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    StudentListComponent,
    StudentDetailComponent,
    StudentEditComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
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
