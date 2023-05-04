import { Component } from '@angular/core';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';
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
    private dialogRef: MatDialogRef<ExperienciaAddComponent>,
    private storage: Storage
  ){
    this.form = formBuilder.group({
      nombre_empresa: ['', Validators.required],
      puesto: ['', Validators.required],
      imagen: [],
      descripcion: [''],
      fecha_inicio: [''],
      fecha_fin: [''],
      trabajo_actual: [false]
    })
  }

  onChangeImage($event: any){
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, `${file.name}`)
  
    uploadBytes(imgRef, file)
    .then(response => console.log(response))
    .catch(error => console.log(error))
    this.form.value.imagen = file.name
  }

  onSubmit(event: Event) {
    event.preventDefault();

    if(!this.form.valid) {
      this.form.markAllAsTouched();
    } else {
      this.experienciaService.saveExperiencia(this.form.value).subscribe(() => {
        this.dialogRef.close(this.form.value);
      })
    }

  }

  onNoClick(){
    this.dialogRef.close();
  }
}
