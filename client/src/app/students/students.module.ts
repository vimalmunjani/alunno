import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentDetailComponent, StudentEditComponent, StudentListComponent } from './pages';
import { StudentService, StudentsResolverService } from './services';
import { studentReducer, studentsFeatureKey } from './reducers';
import { StudentsEffects } from './effects';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    StudentListComponent,
    StudentDetailComponent,
    StudentEditComponent
  ],
  imports: [
    SharedModule,
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
