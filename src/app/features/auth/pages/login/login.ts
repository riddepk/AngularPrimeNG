import {Component, inject} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Button} from 'primeng/button';
import {FloatLabel} from 'primeng/floatlabel';
import {InputText} from 'primeng/inputtext';
import {Password} from 'primeng/password';
import {AutoFocus} from 'primeng/autofocus';

@Component({
  selector: 'app-login',
  imports: [
    Button,
    FloatLabel,
    FormsModule,
    InputText,
    Password,
    ReactiveFormsModule,
    AutoFocus
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  private readonly _authService: AuthService = inject(AuthService);
  private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _router: Router = inject(Router);

  loginForm: FormGroup;

  constructor() {
    this.loginForm = this._fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  submit(): void {
    this.loginForm.markAllAsTouched();

    if(this.loginForm.valid) {
      this._authService.login(this.loginForm.value).subscribe({
        next: (result) => {
          console.log(result);
          this._router.navigateByUrl('/home');
        },
        error: err => {
          console.log(err);
        }
      });
    }
  }
}
