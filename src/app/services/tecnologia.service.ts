import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tecnologia } from '../interfaces/Tecnologia';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {
  apiUrl: string = 'http://localhost:5000/tecnologia'

  constructor(private http: HttpClient) {}

  getTecnologia(): Observable<Tecnologia[]> {
    return this.http.get<Tecnologia[]>(this.apiUrl);
  }
}
