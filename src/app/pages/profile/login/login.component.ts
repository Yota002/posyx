import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/shared/libs/error-matchers';
import { AuthService } from 'src/app/shared/services/auth.service';

interface LoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  matcher = new MyErrorStateMatcher();

  constructor(private authSrv: AuthService) {}

  async submitForm() {
    if (this.loginForm.invalid) return;
    const { email, password } = this.loginForm.value;
    await this.authSrv.login(email!, password!);
  }
}
