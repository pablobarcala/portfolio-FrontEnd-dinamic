import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../interfaces/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  apiUrl: string = 'http://localhost:5000/persona'

  constructor(private http: HttpClient) {}

  getPersona(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.apiUrl);
  }
}
