import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/interfaces/Educacion';
import { EducationService } from 'src/app/services/education.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent implements OnInit {
  educaciones: Educacion[] = [];

  isAdmin: any = false;

  constructor(
    private educationService: EducationService,
    private tokenService: TokenService
  ) {
    this.isAdmin = tokenService.isAdmin();
  }

  ngOnInit(): void {
    this.educationService.getEducation().subscribe(data => this.educaciones = data);
  }
}
