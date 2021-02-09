import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './containers/sign-in/sign-in.component';
import { SignUpComponent } from './containers/sign-up/sign-up.component';
import { NoAuthGuard } from './services';

const routes: Routes = [
  {
    path: 'signin',
    canActivate: [NoAuthGuard],
    component: SignInComponent
  },
  {
    path: 'signup',
    canActivate: [NoAuthGuard],
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
