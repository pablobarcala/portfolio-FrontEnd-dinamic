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
  apiUrl = 'https://portfolio-service-vgkk.onrender.com/api/proyecto';

  constructor(private http: HttpClient) {}

  getProject(): Observable<Proyecto[]>{
    const url = `${this.apiUrl}/lista/1`;
    return this.http.get<Proyecto[]>(url);
  }

  deleteProject(proyecto: Proyecto): Observable<Proyecto>{
    const url = `${this.apiUrl}/delete/${proyecto.id}`;
    return this.http.delete<Proyecto>(url, httpOptions);
  }

  saveProject(proyecto: Proyecto): Observable<Proyecto>{
    const url = `${this.apiUrl}/create/1`;
    return this.http.post<Proyecto>(url, proyecto);
  }
}
