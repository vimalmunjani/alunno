import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsResolverService } from './services';
import { StudentDetailComponent, StudentEditComponent, StudentListComponent } from './pages';

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
