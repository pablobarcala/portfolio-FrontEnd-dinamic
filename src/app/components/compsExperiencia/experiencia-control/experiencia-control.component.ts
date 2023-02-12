import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/interfaces/Experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experiencia-control',
  templateUrl: './experiencia-control.component.html',
  styleUrls: ['./experiencia-control.component.css']
})
export class ExperienciaControlComponent implements OnInit {
  experiencias: Experiencia[] = []
  
  constructor(private experienciaService: ExperienciaService){}

  ngOnInit(): void {
    this.experienciaService.getExperiencia().subscribe(data => this.experiencias = data);
  }
}
