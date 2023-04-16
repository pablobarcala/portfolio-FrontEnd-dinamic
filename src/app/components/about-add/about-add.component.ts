import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-about-add',
  templateUrl: './about-add.component.html',
  styleUrls: ['./about-add.component.css']
})
export class AboutAddComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private personaService: PersonaService, 
    private dialogRef: MatDialogRef<AboutAddComponent>
  ){
    this.form = formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      titulo: ['', Validators.required],
      imagen: [''],
      descripcion: ['', Validators.required]
    })
  }

  onSubmit(event: Event) {
    event.preventDefault();

    if(!this.form.valid){
      this.form.markAllAsTouched();
    }

    this.personaService.addPersona(this.form.value).subscribe();
    this.dialogRef.close();
  }

  onNoClick(){
    this.dialogRef.close();
  }
}
