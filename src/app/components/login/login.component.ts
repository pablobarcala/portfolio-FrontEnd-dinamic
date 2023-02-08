import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.form = formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if(this.form.valid){
      this.authService.login(this.form.value.username, this.form.value.password)
    } else {
      this.form.markAllAsTouched();
    }
  }
}
