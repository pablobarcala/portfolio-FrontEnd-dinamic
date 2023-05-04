import { Component, Inject } from '@angular/core';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education-edit',
  templateUrl: './education-edit.component.html',
  styleUrls: ['./education-edit.component.css']
})
export class EducationEditComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private educacionService: EducationService,
    public dialogRef: MatDialogRef<EducationEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private storage: Storage
  ){
    this.form = formBuilder.group({
      id: [data.id],
      nombreInstituto: [data.nombreInstituto, Validators.required],
      titulo: [data.titulo, Validators.required],
      imagen: [data.imagen],
      descripcion: [data.descripcion],
      en_progreso: [data.en_progreso],
      fecha_inicio: [data.fecha_inicio],
      fecha_fin: [data.fecha_fin]
    });
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
      this.educacionService.editEducation(this.form.value).subscribe(() => {
        this.dialogRef.close(this.form.value);
      });
    }
  }

  onNoClick(){
    this.dialogRef.close();
  }
}
