import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/interfaces/Persona';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  personas: Persona[] = []

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => this.personas = data);
  }
}
