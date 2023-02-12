import { Component, OnInit } from '@angular/core';
import { Tecnologia } from 'src/app/interfaces/Tecnologia';
import { TecnologiaService } from 'src/app/services/tecnologia.service';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit {
  tecnologias: Tecnologia[] = [];

  constructor(private tecnologiaService: TecnologiaService) {}

  ngOnInit(): void{
    this.tecnologiaService.getTecnologia().subscribe(data => this.tecnologias = data)
  }

}
