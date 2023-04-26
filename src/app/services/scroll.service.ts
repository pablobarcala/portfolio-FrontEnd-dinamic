import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  selectedSection = new Subject<string>;

  constructor() { }

  setSection(section: string) {
    this.selectedSection.next(section);
  }

  getSection(): Observable<string> {
    return this.selectedSection.asObservable();
  }
}
