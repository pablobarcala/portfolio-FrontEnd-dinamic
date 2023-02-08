import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../interfaces/Experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  apiUrl: string = 'http://localhost:5000/experiencia'

  constructor(private http: HttpClient) {}

  getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.apiUrl)
  }
}
