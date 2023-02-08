import { Component, Input } from '@angular/core';
import { TECNOLOGIA } from 'src/app/interfaces/mock-tecnologias';
import { Tecnologia } from 'src/app/interfaces/Tecnologia';

@Component({
  selector: 'app-tecnologia-item',
  templateUrl: './tecnologia-item.component.html',
  styleUrls: ['./tecnologia-item.component.css']
})
export class TecnologiaItemComponent {
  @Input() tecnologia: Tecnologia = TECNOLOGIA[0]
}
