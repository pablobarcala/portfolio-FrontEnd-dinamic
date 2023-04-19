import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      nombreProyecto: [''],
      descripcion: [''],
      fecha: ['']
    })
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
