import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Persona } from '../interfaces/Persona';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';

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

  constructor(private http: HttpClient, private storage: Storage) {}

  getPersona(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.apiUrl + '/traer');
  }

  getImagenPersona(imagen: string) {
    const imageRef = ref(this.storage, imagen)
    getDownloadURL(imageRef)
    .then((url) => {
      return url
    }).catch((error) => {
      console.log(error)
    })
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
