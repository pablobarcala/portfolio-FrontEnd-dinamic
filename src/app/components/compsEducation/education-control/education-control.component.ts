import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/interfaces/Education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education-control',
  templateUrl: './education-control.component.html',
  styleUrls: ['./education-control.component.css']
})
export class EducationControlComponent implements OnInit {
  educations: Education[] = []

  constructor(private educationService: EducationService){}

  ngOnInit(): void {
    this.educationService.getEducation().subscribe(data => this.educations = data);
  }
}
