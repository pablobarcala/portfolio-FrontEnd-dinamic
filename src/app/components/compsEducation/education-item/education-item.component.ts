import { Component, Input } from '@angular/core';
import { Educacion } from 'src/app/interfaces/Educacion';
import { EDUCACION } from 'src/app/interfaces/mock-educations';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent {
  @Input() educacion: Educacion = EDUCACION[0];
}
