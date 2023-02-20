import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Experiencia } from 'src/app/interfaces/Experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { DeleteConfComponent } from '../../delete-conf/delete-conf.component';

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

  onDelete(experiencia: Experiencia) {
    const dialogRef = this.dialog.open(DeleteConfComponent, {
      data: {
        name: experiencia.name
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
