import { Component, Input } from '@angular/core';
import { Education } from 'src/app/interfaces/Education';
import { EDUCATION } from 'src/app/interfaces/mock-educations';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent {
  @Input() education: Education = EDUCATION[0];
}
