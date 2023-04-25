import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experiencia-add',
  templateUrl: './experiencia-add.component.html',
  styleUrls: ['./experiencia-add.component.css']
})
export class ExperienciaAddComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private experienciaService: ExperienciaService,
    private dialogRef: MatDialogRef<ExperienciaAddComponent>
  ){
    this.form = formBuilder.group({
      nombre_empresa: ['', Validators.required],
      puesto: ['', Validators.required],
      descripcion: [''],
      fecha_inicio: [''],
      fecha_fin: [''],
      trabajo_actual: [false]
    })
  }

  onSubmit(event: Event) {
    event.preventDefault();

    if(!this.form.valid) {
      this.form.markAllAsTouched();
    }

    this.experienciaService.saveExperiencia(this.form.value).subscribe(() => {
      this.dialogRef.close(this.form.value);
    })
  }

  onNoClick(){
    this.dialogRef.close();
  }
}
