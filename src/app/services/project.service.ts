import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../interfaces/Proyecto';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  apiUrl = 'http://localhost:5000/project';

  constructor(private http: HttpClient) {}

  getProject(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.apiUrl);
  }

  deleteProject(proyecto: Proyecto): Observable<Proyecto>{
    const url = `${this.apiUrl}/${proyecto.id}`;
    return this.http.delete<Proyecto>(url, httpOptions);
  }
}
