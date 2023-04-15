import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../interfaces/LoginUsuario';
import { JwtDto } from '../interfaces/JwtDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = 'https://portfolio-xtso.onrender.com/api/auth';

  constructor(private http: HttpClient){}

  public iniciarSesion(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.http.post<JwtDto>(this.apiUrl + '/login', loginUsuario);
  }
}
