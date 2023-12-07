import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/shared/libs/error-matchers';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
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
    const { email, password, name } = this.loginForm.value;
    await this.authSrv.register(email!, password!, name!);
  }
}
