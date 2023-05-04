import { Component, Input, AfterViewInit } from '@angular/core';
import { Storage, getDownloadURL, ref } from '@angular/fire/storage';
import { Educacion } from 'src/app/interfaces/Educacion';
import { EDUCACION } from 'src/app/interfaces/mock-educations';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements AfterViewInit{
  @Input() educacion: Educacion = EDUCACION[0];

  constructor(private storage: Storage){}

  ngAfterViewInit(): void {
    if(this.educacion.imagen){
      this.getImagen(this.educacion.imagen)
    }
  }

  getImagen(imagen: any){
    getDownloadURL(ref(this.storage, imagen))
    .then((url) => {
      const img = document.getElementById('edu-image')
      img?.setAttribute('style', `background-image: url(${url})`)
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
