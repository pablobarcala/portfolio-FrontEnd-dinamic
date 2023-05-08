import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ProjectEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private projectService: ProjectService
  ) {
    this.form = formBuilder.group({
      id: [data.id],
      nombreProyecto: [data.nombreProyecto, Validators.required],
      fecha: [data.fecha],
      descripcion: [data.descripcion],
      imagen: [data.imagen]
    })
  }

  onSubmit(event: Event) {
    event.preventDefault();

    if(!this.form.valid){
      this.form.markAllAsTouched();
    } else {
      this.projectService.editProject(this.form.value).subscribe(() => {
        this.dialogRef.close(this.form.value);
      })
    }
  }

  onNoClick() {
    this.dialogRef.close()
  }
}
