import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsResolverService } from './services';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
    path: '',
    resolve: {
      dispatch: StudentsResolverService
    },
    children: [
      {
        path: '',
        component: StudentListComponent
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            component: StudentDetailComponent
          },
          {
            path: 'edit',
            component: StudentEditComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
