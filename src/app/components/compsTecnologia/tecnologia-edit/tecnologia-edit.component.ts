import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TecnologiaService } from 'src/app/services/tecnologia.service';

@Component({
  selector: 'app-tecnologia-edit',
  templateUrl: './tecnologia-edit.component.html',
  styleUrls: ['./tecnologia-edit.component.css']
})
export class TecnologiaEditComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<TecnologiaEditComponent>,
    private tecnologiaService: TecnologiaService
  ){
    this.form = formBuilder.group({
      id: [data.id],
      nombreTecnologia: [data.nombreTecnologia, Validators.required],
      porcentaje: [data.porcentaje, Validators.required]
    })
  }

  onSubmit(event: Event){
    event.preventDefault()

    if(!this.form.valid){
      this.form.markAllAsTouched()
    } else {
      this.tecnologiaService.editTecnologia(this.form.value).subscribe(() => {
        this.dialogRef.close(this.form.value)
      })
    }
  }

  onNoClick(){
    this.dialogRef.close()
  }
}
