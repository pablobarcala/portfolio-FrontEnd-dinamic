import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Educacion } from 'src/app/interfaces/Educacion';
import { EducationService } from 'src/app/services/education.service';
import { DeleteConfComponent } from '../../delete-conf/delete-conf.component';

@Component({
  selector: 'app-education-control',
  templateUrl: './education-control.component.html',
  styleUrls: ['./education-control.component.css']
})
export class EducationControlComponent implements OnInit {
  educations: Educacion[] = []

  constructor(private educationService: EducationService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.educationService.getEducation().subscribe(data => this.educations = data);
  }

  onDelete(education: Educacion) {
    const dialogRef = this.dialog.open(DeleteConfComponent, {
      data: {
        title: 'Education',
        name: education.titulo,
        description: education.descripcion
      }
    })

    dialogRef.afterClosed().subscribe(resp => {
      if(resp){
        this.educationService.deleteEducation(education).subscribe(() => {
          this.educations = this.educations.filter(t => t.id !== education.id);
        })
      }
    });
  }
}
