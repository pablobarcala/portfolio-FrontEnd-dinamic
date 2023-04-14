import { Component, Input } from '@angular/core';
import { PROYECTOS } from 'src/app/interfaces/mock-proyectos';
import { Proyecto } from 'src/app/interfaces/Proyecto';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent {
  @Input() proyecto: Proyecto = PROYECTOS[0];
}
