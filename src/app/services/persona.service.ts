import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Persona } from '../interfaces/Persona';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  apiUrl = 'https://portfolio-service-vgkk.onrender.com/api/persona'

  constructor(private http: HttpClient) {}

  getPersona(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.apiUrl + '/traer');
  }

  editPersona(persona: Persona): Observable<Persona>{
    const url = `${this.apiUrl}/editar/${persona.id}`;
    return this.http.put<Persona>(url, persona, httpOptions).pipe(tap(() => location.reload()));
  }

  addPersona(persona: Persona): Observable<Persona>{
    const url = `${this.apiUrl}/create`;
    return this.http.post<Persona>(url, persona);
  }
}
