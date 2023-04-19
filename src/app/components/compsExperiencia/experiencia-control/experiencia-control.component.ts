import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Experiencia } from 'src/app/interfaces/Experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { DeleteConfComponent } from '../../delete-conf/delete-conf.component';
import { ExperienciaAddComponent } from '../experiencia-add/experiencia-add.component';
import { ExperienciaEditComponent } from '../experiencia-edit/experiencia-edit.component';

@Component({
  selector: 'app-experiencia-control',
  templateUrl: './experiencia-control.component.html',
  styleUrls: ['./experiencia-control.component.css']
})
export class ExperienciaControlComponent implements OnInit {
  experiencias: Experiencia[] = []
  
  constructor(private experienciaService: ExperienciaService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.experienciaService.getExperiencia().subscribe(data => this.experiencias = data);
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
