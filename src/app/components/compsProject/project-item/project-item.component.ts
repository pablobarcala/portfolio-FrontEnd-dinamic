import { Component, Input, AfterViewInit } from '@angular/core';
import { getDownloadURL, ref, Storage } from '@angular/fire/storage';
import { PROYECTOS } from 'src/app/interfaces/mock-proyectos';
import { Proyecto } from 'src/app/interfaces/Proyecto';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements AfterViewInit {
  @Input() proyecto: Proyecto = PROYECTOS[0];

  constructor(private storage: Storage) {}

  ngAfterViewInit(): void {
    if(this.proyecto.imagen){
      this.getImagen(this.proyecto.imagen)
    }
  }

  getImagen(imagen: any){
    getDownloadURL(ref(this.storage, imagen))
    .then((url) => {
      const img = document.getElementById('proy-image')
      img?.setAttribute('style', `background-image: url(${url})`)
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
