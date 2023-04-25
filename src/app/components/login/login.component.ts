import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loading = false;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService, 
    private router: Router,
    private tokenService: TokenService
  ) {
    this.form = formBuilder.group({
      nombreUsuario: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(event: Event){
    event.preventDefault();

    this.loading = true

    if(this.form.valid){
      this.authService.iniciarSesion(this.form.value).subscribe(data => {
        this.tokenService.setToken(data.token);
        this.loading = false
        this.router.navigate(['']).then(() => location.reload());
      }, err => {
        console.log(err);
        this.loading = false;
        alert("Usuario o contraseña incorrectos.");
      })
    }
  }
}
