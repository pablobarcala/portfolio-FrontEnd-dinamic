import { Component } from '@angular/core';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent {
  form: FormGroup;

  constructor(
    private projectService: ProjectService,
    private dialogRef: MatDialogRef<ProjectAddComponent>,
    private formBuilder: FormBuilder,
    private storage: Storage
  ) {
    this.form = formBuilder.group({
      nombreProyecto: ['', Validators.required],
      descripcion: [''],
      fecha: [''],
      imagen: []
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
    event.preventDefault()

    if(!this.form.valid) {
      this.form.markAllAsTouched()
    }

    this.projectService.saveProject(this.form.value).subscribe(() => {
      this.dialogRef.close(this.form.value)
    })
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
