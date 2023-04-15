import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/interfaces/Experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  experiencias: Experiencia[] = [];

  isAdmin: any = false;

  constructor(
    private experienciaService: ExperienciaService, 
    private tokenService: TokenService
  ) {
    this.isAdmin = tokenService.isAdmin();
  }

  ngOnInit(): void {
    this.experienciaService.getExperiencia().subscribe(data => this.experiencias = data);
  }
}
