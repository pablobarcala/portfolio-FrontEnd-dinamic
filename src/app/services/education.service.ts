import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../interfaces/Educacion';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  apiUrl = 'http://localhost:8080/api/educacion'

  constructor(private http: HttpClient) {}

  getEducation(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.apiUrl + '/lista/1');
  }

  deleteEducation(educacion: Educacion): Observable<Educacion> {
    const url = `${this.apiUrl}/delete/${educacion.id}`;
    return this.http.delete<Educacion>(url, httpOptions)
  }
}
