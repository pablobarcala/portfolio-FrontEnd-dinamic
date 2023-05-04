import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Proyecto } from 'src/app/interfaces/Proyecto';
import { ProjectService } from 'src/app/services/project.service';
import { DeleteConfComponent } from '../../delete-conf/delete-conf.component';
import { ProjectAddComponent } from '../project-add/project-add.component';
import { ProjectEditComponent } from '../project-edit/project-edit.component';
import { Storage, getDownloadURL, ref } from '@angular/fire/storage';

@Component({
  selector: 'app-project-control',
  templateUrl: './project-control.component.html',
  styleUrls: ['./project-control.component.css']
})
export class ProjectControlComponent implements OnInit{
  projects: Proyecto[] = [];

  constructor(
    private projectService: ProjectService, 
    private dialog: MatDialog,
    private storage: Storage  
  ) {}

  ngOnInit(): void {
    this.projectService.getProject().subscribe(data => this.projects = data);
    setTimeout(() => {
      this.projects.forEach(project => {
        if(project.imagen) {
          this.getImagen(project.imagen);
        }
      })
    }, 1500)
  }

  getImagen(imagen: any){
    getDownloadURL(ref(this.storage, imagen))
    .then((url) => {
      const img = document.getElementById('proy-image')
      img?.setAttribute('src', url)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  onAdd() {
    const dialogRef = this.dialog.open(ProjectAddComponent)

    dialogRef.afterClosed().subscribe((resp) => {
      if(resp) {
        location.reload();
      }
    })
  }

  onEdit(project: Proyecto) {
    const dialogRef = this.dialog.open(ProjectEditComponent, {
      data: {
        id: project.id,
        nombreProyecto: project.nombreProyecto,
        fecha: project.fecha,
        descripcion: project.descripcion
      }
    })

    dialogRef.afterClosed().subscribe((resp) => {
      if(resp) {
        location.reload();
      }
    })
  }

  onDelete(project: Proyecto): void {
    const dialogRef = this.dialog.open(DeleteConfComponent, {
      data: {
        name: project.nombreProyecto
      }
    })

    dialogRef.afterClosed().subscribe(response => {
      if(response){
        this.projectService.deleteProject(project).subscribe(() => {
          this.projects = this.projects.filter(t => t.id !== project.id);
        });
      }
    })
  }
}
