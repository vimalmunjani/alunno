import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../actions';
import { ICredentials } from '../../models';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  constructor(private _store: Store<any>) { }

  onSubmit(credentials: ICredentials): void {
    this._store.dispatch(AuthActions.signIn({ credentials }));
  }

}
