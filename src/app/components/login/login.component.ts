import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = formBuilder.group({
      nombreUsuario: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  // onSubmit() {
  //   if(this.form.valid){
  //     this.authService.login(this.form.value.username, this.form.value.password)
  //   } else {
  //     this.form.markAllAsTouched();
  //   }
  // }

  onSubmit(event: Event){
    event.preventDefault();
    if(this.form.valid){
      this.authService.iniciarSesion(this.form.value).subscribe(data => {
        console.log("Data:" + JSON.stringify(data));
        this.router.navigate(['']);
      })
    }
  }
}
