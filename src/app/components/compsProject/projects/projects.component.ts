import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/interfaces/Proyecto';
import { AuthService } from 'src/app/services/auth.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  proyectos: Proyecto[] = [];

  constructor(private projectService: ProjectService, public authService: AuthService){}

  ngOnInit(): void {
    this.projectService.getProject().subscribe(data => this.proyectos = data);
  }
}
