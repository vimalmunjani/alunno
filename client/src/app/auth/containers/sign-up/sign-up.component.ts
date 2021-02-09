import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../actions';
import { ICredentials } from '../../models';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(private _store: Store<any>) { }

  onSubmit(credentials: ICredentials): void {
    this._store.dispatch(AuthActions.signUp({ credentials }));
  }

}
