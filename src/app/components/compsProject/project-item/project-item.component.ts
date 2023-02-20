import { Component, Input } from '@angular/core';
import { PROJECTS } from 'src/app/interfaces/mock-projects';
import { Project } from 'src/app/interfaces/Project';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent {
  @Input() project: Project = PROJECTS[0];
}
