import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICredentials } from '../../models';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthFormComponent implements OnInit {

  public authForm: FormGroup;
  public hidePassword: boolean = true;

  @Input() actionTitle: string = 'Submit';

  @Output() submit: EventEmitter<ICredentials> = new EventEmitter<ICredentials>();

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.authForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
    });
  }

  onSubmit(event: MouseEvent): void {
    event.preventDefault();
    if (this.authForm.valid) {
      const credentials: ICredentials = this.authForm.value;
      this.submit.emit(credentials);
    }
  }

  toggleVisibility(event: MouseEvent) {
    event.preventDefault();
    this.hidePassword = !this.hidePassword;
  }

}
