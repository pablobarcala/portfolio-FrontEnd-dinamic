import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Persona } from 'src/app/interfaces/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-about-edit',
  templateUrl: './about-edit.component.html',
  styleUrls: ['./about-edit.component.css']
})
export class AboutEditComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AboutEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private personaService: PersonaService
  ) {

    // FORM BUILDER
    this.form = formBuilder.group({
      id: [data.id],
      nombre: [data.nombre, [Validators.required]],
      apellido: [data.apellido, [Validators.required]],
      titulo: [data.titulo, [Validators.required]],
      descripcion: [data.descripcion, [Validators.required]]
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();

    if(!this.form.valid){
      this.form.markAllAsTouched()
    }
    
    this.personaService.editPersona(this.form.value).subscribe(data => {
      console.log(data);
    }, err => console.log(err));
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
