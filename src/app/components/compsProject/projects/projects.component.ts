import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/Project';
import { AuthService } from 'src/app/services/auth.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  projects: Project[] = [];

  constructor(private projectService: ProjectService, public authService: AuthService){}

  ngOnInit(): void {
    this.projectService.getProject().subscribe(data => this.projects = data);
  }
}
