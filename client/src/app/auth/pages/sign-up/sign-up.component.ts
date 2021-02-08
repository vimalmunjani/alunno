import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../actions';
import { ICredentials } from '../../models';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public signUpForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private _store: Store<any>) { }

  ngOnInit(): void {
    this.signUpForm = this._formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  signUp(): void {
    this.signUpForm.disable();
    const credentials: ICredentials = this.signUpForm.value;
    console.log('credentials', credentials);
    this._store.dispatch(AuthActions.signUp({ credentials }));
  }

}
