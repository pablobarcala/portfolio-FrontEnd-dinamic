import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experiencia-edit',
  templateUrl: './experiencia-edit.component.html',
  styleUrls: ['./experiencia-edit.component.css']
})
export class ExperienciaEditComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ExperienciaEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private experienciaService: ExperienciaService
  ) {
    this.form = formBuilder.group({
      id: [data.id],
      nombre_empresa: [data.nombre_empresa, Validators.required],
      puesto: [data.puesto, Validators.required],
      imagen: [data.imagen],
      descripcion: [data.descripcion],
      fecha_inicio: [data.fecha_inicio],
      fecha_fin: [data.fecha_fin],
      trabajo_actual: [data.trabajo_actual]
    })
  }

  onSubmit(event: Event){
    event.preventDefault();

    if(!this.form.valid){
      this.form.markAllAsTouched();
    }

    this.experienciaService.editExperiencia(this.form.value).subscribe(() => {
      this.dialogRef.close(this.form.value);
    })
  }

  onNoClick(){
    this.dialogRef.close();
  }
}
