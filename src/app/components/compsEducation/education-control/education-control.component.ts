import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Educacion } from 'src/app/interfaces/Educacion';
import { EducationService } from 'src/app/services/education.service';
import { DeleteConfComponent } from '../../delete-conf/delete-conf.component';
import { EducationAddComponent } from '../education-add/education-add.component';
import { EducationEditComponent } from '../education-edit/education-edit.component';
import { Storage, getDownloadURL, ref } from '@angular/fire/storage';

@Component({
  selector: 'app-education-control',
  templateUrl: './education-control.component.html',
  styleUrls: ['./education-control.component.css']
})
export class EducationControlComponent implements OnInit {
  educations: Educacion[] = []
  imageUrls: any = {};

  constructor(
    private educationService: EducationService, 
    private dialog: MatDialog,
    private storage: Storage  
  ){}

  ngOnInit(): void {
    this.educationService.getEducation().subscribe(data => this.educations = data);
    setTimeout(() => {
      this.educations.forEach(educacion => {
        if(educacion.imagen) {
          const index = this.educations.findIndex(edu => edu.id === educacion.id)
          this.getImagen(educacion.imagen, index);
        }
      })
    }, 1500)
  }

  getImagen(imagen: any, index: number){
    getDownloadURL(ref(this.storage, imagen))
    .then((url) => {
      this.imageUrls[index] = url;
    })
    .catch((error) => {
      console.log(error)
    })
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
