import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tecnologia } from 'src/app/interfaces/Tecnologia';
import { TecnologiaService } from 'src/app/services/tecnologia.service';
import { TecnologiaAddComponent } from '../tecnologia-add/tecnologia-add.component';
import { DeleteConfComponent } from '../../delete-conf/delete-conf.component';
import { TecnologiaEditComponent } from '../tecnologia-edit/tecnologia-edit.component';

@Component({
  selector: 'app-tecnologia-control',
  templateUrl: './tecnologia-control.component.html',
  styleUrls: ['./tecnologia-control.component.css']
})
export class TecnologiaControlComponent implements OnInit {
  tecnologias: Tecnologia[] = []

  constructor(private tecnologiaService: TecnologiaService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.tecnologiaService.getTecnologia().subscribe(data => this.tecnologias = data)
  }

  onAdd() {
    const dialogRef = this.dialog.open(TecnologiaAddComponent)

    dialogRef.afterClosed().subscribe((resp) => {
      if(resp) {
        location.reload()
      }
    })
  }

  onEdit(tecnologia: Tecnologia) {
    const dialogRef = this.dialog.open(TecnologiaEditComponent, {
      data: {
        id: tecnologia.id,
        nombreTecnologia: tecnologia.nombreTecnologia,
        porcentaje: tecnologia.porcentaje
      }
    })

    dialogRef.afterClosed().subscribe((resp) => {
      if(resp) {
        location.reload()
      }
    })
  }

  onDelete(tecnologia: Tecnologia) {
    const dialogRef = this.dialog.open(DeleteConfComponent, {
      data: {
        title: "Tecnología",
        name: tecnologia.nombreTecnologia
      }
    })

    dialogRef.afterClosed().subscribe((resp) => {
      if(resp) {
        this.tecnologiaService.deleteTecnologia(tecnologia).subscribe(() => {
          this.tecnologias = this.tecnologias.filter(t => t.id != tecnologia.id)
        })
      }
    })
  }
}
