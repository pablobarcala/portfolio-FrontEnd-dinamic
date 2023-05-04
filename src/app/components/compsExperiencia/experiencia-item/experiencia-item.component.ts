import { Component, Input, AfterViewInit } from '@angular/core';
import { Storage, getDownloadURL, ref } from '@angular/fire/storage';
import { Experiencia } from 'src/app/interfaces/Experiencia';
import { EXPERIENCIA } from 'src/app/interfaces/mock-experiencias';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements AfterViewInit {
  @Input() experiencia: Experiencia = EXPERIENCIA[0];

  constructor(private storage: Storage){}

  ngAfterViewInit(): void {
    if(this.experiencia.imagen){
      this.getImagen(this.experiencia.imagen)
    }
  }

  getImagen(imagen: any){
    getDownloadURL(ref(this.storage, imagen))
    .then((url) => {
      const img = document.getElementById('exp-image')
      img?.setAttribute('style', `background-image: url(${url})`)
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
