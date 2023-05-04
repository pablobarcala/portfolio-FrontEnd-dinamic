import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/interfaces/Persona';
import { MatDialog } from '@angular/material/dialog';
import { AboutEditComponent } from '../about-edit/about-edit.component';
import { TokenService } from 'src/app/services/token.service';
import { AboutAddComponent } from '../about-add/about-add.component';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';
import { uploadBytes } from 'firebase/storage';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title: string = 'Acerca de'

  personas: Persona[] = []
  isAdmin: any = false;

  constructor(
    private personaService: PersonaService,
    private dialog: MatDialog,
    private tokenService: TokenService,
    private storage: Storage
  ) {
    this.isAdmin = tokenService.isAdmin();
  }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {
      this.personas = data
    });
    setTimeout(() => {
      this.personas.forEach(persona => {
        this.getImagen(persona.imagen);
      })
    }, 1500);
  }

  getImagen(imagen: any){
    getDownloadURL(ref(this.storage, imagen))
    .then((url) => {
      const img = document.getElementById('myimg')
      img?.setAttribute('src', url)
    })
    .catch((error) => {
      console.log(error)
    })
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

  onAdd(){
    const dialogRef = this.dialog.open(AboutAddComponent, {
      data: {
        title: this.title
      }
    })

    dialogRef.afterClosed().subscribe();
    location.reload();
  }
}
