import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = 'http://localhost:5000/user';
  token: any;

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    this.http.get<any>(this.apiUrl).subscribe((res: any) => {
      const user = res.find((a: any) => a.username === username && a.password === password)
      if(user) {
        this.router.navigate(['']);
        localStorage.setItem('auth_token', this.token)
      } else {
        alert('Login fallido. Username o contraseña erroneos.');
      }
    })
  }

  logout() {
    localStorage.removeItem('auth_token');
  }

  public get logIn(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }
}
