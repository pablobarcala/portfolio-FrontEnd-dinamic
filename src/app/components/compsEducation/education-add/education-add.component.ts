import { Component } from '@angular/core';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education-add',
  templateUrl: './education-add.component.html',
  styleUrls: ['./education-add.component.css']
})
export class EducationAddComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private educacionService: EducationService,
    public dialogRef: MatDialogRef<EducationAddComponent>,
    private storage: Storage
  ){
    this.form = formBuilder.group({
      nombreInstituto: ['', Validators.required],
      titulo: ['', Validators.required],
      imagen: [],
      descripcion: [''],
      en_progreso: [false],
      fecha_inicio: [''],
      fecha_fin: ['']
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
      this.educacionService.saveEducation(this.form.value).subscribe(() => {
        this.dialogRef.close(this.form.value);
      });
    }

  }

  onNoClick(){
    this.dialogRef.close();
  }
}
