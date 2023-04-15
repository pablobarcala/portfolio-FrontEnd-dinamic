import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tecnologia } from '../interfaces/Tecnologia';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {
  apiUrl: string = 'https://portfolio-xtso.onrender.com/api/tecnologia'

  constructor(private http: HttpClient) {}

  getTecnologia(): Observable<Tecnologia[]> {
    return this.http.get<Tecnologia[]>(this.apiUrl);
  }
}
