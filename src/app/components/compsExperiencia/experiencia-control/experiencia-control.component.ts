import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Experiencia } from 'src/app/interfaces/Experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { DeleteConfComponent } from '../../delete-conf/delete-conf.component';
import { ExperienciaAddComponent } from '../experiencia-add/experiencia-add.component';
import { ExperienciaEditComponent } from '../experiencia-edit/experiencia-edit.component';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';

@Component({
  selector: 'app-experiencia-control',
  templateUrl: './experiencia-control.component.html',
  styleUrls: ['./experiencia-control.component.css']
})
export class ExperienciaControlComponent implements OnInit {
  experiencias: Experiencia[] = []
  
  constructor(
    private experienciaService: ExperienciaService, 
    private dialog: MatDialog,
    private storage: Storage  
  ){}
  
  ngOnInit(): void {
    this.experienciaService.getExperiencia().subscribe(data => this.experiencias = data);
    setTimeout(() => {
      this.experiencias.forEach(experiencia => {
        if(experiencia.imagen){
          this.getImagen(experiencia.imagen);
        }
      })
    }, 1500);
  }

  getImagen(imagen: any){
    getDownloadURL(ref(this.storage, imagen))
    .then((url) => {
      const img = document.getElementById('exp-image')
      img?.setAttribute('src', url)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  onAdd() {
    const dialogRef = this.dialog.open(ExperienciaAddComponent)

    dialogRef.afterClosed().subscribe((resp) => {
      if(resp){
        location.reload()
      }
    });
  }

  onEdit(experiencia: Experiencia) {
    const dialogRef = this.dialog.open(ExperienciaEditComponent, {
      data: {
        id: experiencia.id,
        nombre_empresa: experiencia.nombre_empresa,
        puesto: experiencia.puesto,
        imagen: experiencia.imagen,
        descripcion: experiencia.descripcion,
        fecha_inicio: experiencia.fecha_inicio,
        fecha_fin: experiencia.fecha_fin,
        trabajo_actual: experiencia.trabajo_actual
      }
    })

    dialogRef.afterClosed().subscribe((resp) => {
      if(resp) {
        location.reload();
      }
    })
  }

  onDelete(experiencia: Experiencia) {
    const dialogRef = this.dialog.open(DeleteConfComponent, {
      data: {
        name: experiencia.puesto
      }
    })

    dialogRef.afterClosed().subscribe(resp => {
      if(resp){
        this.experienciaService.deleteExperiencia(experiencia).subscribe(() => {
          this.experiencias = this.experiencias.filter(t => t.id !== experiencia.id);
        })
      }
    });
  }
}
