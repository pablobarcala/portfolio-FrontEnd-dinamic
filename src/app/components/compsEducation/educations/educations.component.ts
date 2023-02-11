import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/interfaces/Education';
import { AuthService } from 'src/app/services/auth.service';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent implements OnInit {
  educations: Education[] = [];

  constructor(private educationService: EducationService, public authService: AuthService) {}

  ngOnInit(): void {
    this.educationService.getEducation().subscribe(data => this.educations = data);
  }
}
