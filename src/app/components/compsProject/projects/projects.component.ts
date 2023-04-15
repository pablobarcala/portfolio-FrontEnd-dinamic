import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/interfaces/Proyecto';
import { ProjectService } from 'src/app/services/project.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  proyectos: Proyecto[] = [];

  isAdmin: any = false;

  constructor(
    private projectService: ProjectService, 
    private tokenService: TokenService
  ){
    this.isAdmin = tokenService.isAdmin();
  }

  ngOnInit(): void {
    this.projectService.getProject().subscribe(data => this.proyectos = data);
  }
}
