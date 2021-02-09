import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../actions';
import { ICredentials } from '../../models';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public signInForm: FormGroup;
  public hidePassword: boolean = true;

  constructor(private _formBuilder: FormBuilder,
    private _store: Store<any>) { }

  ngOnInit(): void {
    this.signInForm = this._formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  onSubmit(): void {
    const credentials: ICredentials = this.signInForm.value;
    console.log('credentials', credentials);
    this._store.dispatch(AuthActions.signIn({ credentials }));
  }

  toggleVisibility(event) {
    event.preventDefault();
    this.hidePassword = !this.hidePassword;
  }

}
