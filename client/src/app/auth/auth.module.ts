import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent, SignUpComponent } from './containers';
import { authReducer, authFeatureKey } from './reducers';
import { AuthEffects } from './effects';
import { SharedModule } from '../shared/shared.module';
import { AuthFormComponent } from './components';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    AuthFormComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    StoreModule.forFeature(authFeatureKey, authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ]
})
export class AuthModule { }
