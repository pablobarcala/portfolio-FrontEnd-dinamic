import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/interfaces/Persona';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { AboutEditComponent } from '../about-edit/about-edit.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title: string = 'Acerca de'

  personas: Persona[] = []

  constructor(
    private personaService: PersonaService, 
    public authService: AuthService, 
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {
      this.personas = data
    });
  }

  onEdit(persona: Persona){
    const dialogRef = this.dialog.open(AboutEditComponent, {
      data: {
          title: this.title,
          id: persona.id, 
          nombre: persona.nombre, 
          apellido: persona.apellido,
          titulo: persona.titulo,
          descripcion: persona.descripcion
        }
    })

    dialogRef.afterClosed().subscribe(resp => {
      if(resp){
        this.personaService.editPersona(resp.value).subscribe(data => {
          const index = this.personas.findIndex(p => p.id === data.id);
          this.personas[index] = data;
        });
      }
    })
  }
}
