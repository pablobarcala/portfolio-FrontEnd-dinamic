import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../interfaces/Experiencia';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  apiUrl: string = 'http://localhost:8080/api/experiencia'

  constructor(private http: HttpClient) {}

  getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.apiUrl + '/lista/1')
  }

  deleteExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    const url = `${this.apiUrl}/delete/${experiencia.id}`;
    return this.http.delete<Experiencia>(url, httpOptions)
  }
}
