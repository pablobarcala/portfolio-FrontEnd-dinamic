import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/interfaces/Educacion';
import { AuthService } from 'src/app/services/auth.service';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent implements OnInit {
  educaciones: Educacion[] = [];

  constructor(private educationService: EducationService, public authService: AuthService) {}

  ngOnInit(): void {
    this.educationService.getEducation().subscribe(data => this.educaciones = data);
  }
}
