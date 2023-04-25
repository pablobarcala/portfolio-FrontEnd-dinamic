import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TecnologiaService } from 'src/app/services/tecnologia.service';

@Component({
  selector: 'app-tecnologia-add',
  templateUrl: './tecnologia-add.component.html',
  styleUrls: ['./tecnologia-add.component.css']
})
export class TecnologiaAddComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<TecnologiaAddComponent>,
    private tecnologiaService: TecnologiaService
  ){
    this.form = formBuilder.group({
      nombreTecnologia: ['', Validators.required],
      porcentaje: ['', Validators.required]
    })
  }

  onSubmit(event: Event) {
    event.preventDefault()

    if(!this.form.valid) {
      this.form.markAllAsTouched()
    } else {
      this.tecnologiaService.saveTecnologia(this.form.value).subscribe(() => {
        this.dialogRef.close(this.form.value)
      })
    }

  }

  onNoClick() {
    this.dialogRef.close()
  }
}
