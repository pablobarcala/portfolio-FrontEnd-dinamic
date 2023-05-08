import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Educacion } from 'src/app/interfaces/Educacion';
import { EducationService } from 'src/app/services/education.service';
import { DeleteConfComponent } from '../../delete-conf/delete-conf.component';
import { EducationAddComponent } from '../education-add/education-add.component';
import { EducationEditComponent } from '../education-edit/education-edit.component';

@Component({
  selector: 'app-education-control',
  templateUrl: './education-control.component.html',
  styleUrls: ['./education-control.component.css']
})
export class EducationControlComponent implements OnInit {
  educations: Educacion[] = []

  constructor(
    private educationService: EducationService, 
    private dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.educationService.getEducation().subscribe(data => this.educations = data)
  }
  
  onAdd() {
    const dialogRef = this.dialog.open(EducationAddComponent)

    dialogRef.afterClosed().subscribe((resp) => {
      if(resp) {
        location.reload();
      }
    });
  }
  
  onEdit(education: Educacion) {
    const dialogRef = this.dialog.open(EducationEditComponent, {
      data: {
        id: education.id,
        nombreInstituto: education.nombreInstituto,
        titulo: education.titulo,
        imagen: education.imagen,
        fecha_inicio: education.fecha_inicio,
        fecha_fin: education.fecha_fin,
        en_progreso: education.en_progreso,
        descripcion: education.descripcion
      }
    })

    dialogRef.afterClosed().subscribe((resp) => {
      if(resp) {
        location.reload();
      }
    });
  }

  onDelete(education: Educacion) {
    const dialogRef = this.dialog.open(DeleteConfComponent, {
      data: {
        title: 'Educacion',
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
