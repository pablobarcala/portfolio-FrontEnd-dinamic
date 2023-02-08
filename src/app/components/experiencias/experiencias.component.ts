import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/interfaces/Experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  experiencias: Experiencia[] = [];

  constructor(private experienciaService: ExperienciaService) {}

  ngOnInit(): void {
    this.experienciaService.getExperiencia().subscribe(data => this.experiencias = data);
  }
}
