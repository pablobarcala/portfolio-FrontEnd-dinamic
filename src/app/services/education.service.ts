import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Education } from '../interfaces/Education';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  apiUrl = 'http://localhost:5000/education'

  constructor(private http: HttpClient) {}

  getEducation(): Observable<Education[]>{
    return this.http.get<Education[]>(this.apiUrl);
  }

  deleteEducation(education: Education): Observable<Education> {
    const url = `${this.apiUrl}/${education.id}`;
    return this.http.delete<Education>(url, httpOptions)
  }
}
