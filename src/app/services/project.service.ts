import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../interfaces/Project';

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

  getProject(): Observable<Project[]>{
    return this.http.get<Project[]>(this.apiUrl);
  }

  deleteProject(project: Project): Observable<Project>{
    const url = `${this.apiUrl}/${project.id}`;
    return this.http.delete<Project>(url, httpOptions);
  }
}
