import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  apiUrl: string = 'http://localhost:5000/persona'

  constructor(private http: HttpClient) {}

  getPersona(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.apiUrl);
  }

  editPersona(persona: Persona): Observable<Persona>{
    const url = `${this.apiUrl}/${persona.id}`;
    return this.http.put<Persona>(url, persona, httpOptions);
  }
}
