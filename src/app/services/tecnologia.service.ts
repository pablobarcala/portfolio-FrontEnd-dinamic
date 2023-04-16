import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tecnologia } from '../interfaces/Tecnologia';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {
  apiUrl = 'https://portfolio-service-vgkk.onrender.com/api/tecnologia';

  constructor(private http: HttpClient) {}

  getTecnologia(): Observable<Tecnologia[]> {
    const url = `${this.apiUrl}/lista/1`;
    return this.http.get<Tecnologia[]>(url);
  }

  deleteTecnologia(tecnologia: Tecnologia): Observable<Tecnologia>{
    const url = `${this.apiUrl}/delete/${tecnologia.id}`
    return this.http.delete<Tecnologia>(url, httpOptions);
  }

  saveTecnologia(tecnologia: Tecnologia): Observable<Tecnologia> {
    const url = `${this.apiUrl}/create/1`
    return this.http.post<Tecnologia>(url, tecnologia);
  }
}
