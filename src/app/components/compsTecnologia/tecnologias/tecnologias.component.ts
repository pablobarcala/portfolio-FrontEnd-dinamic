import { Component, OnInit } from '@angular/core';
import { Tecnologia } from 'src/app/interfaces/Tecnologia';
import { TecnologiaService } from 'src/app/services/tecnologia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit {
  tecnologias: Tecnologia[] = [];
  isAdmin: any = false;

  constructor(private tecnologiaService: TecnologiaService, private tokenService: TokenService) {
    this.isAdmin = tokenService.isAdmin()
  }

  ngOnInit(): void{
    this.tecnologiaService.getTecnologia().subscribe(data => this.tecnologias = data)
  }

}
