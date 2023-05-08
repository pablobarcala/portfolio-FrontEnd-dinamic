import { Component } from '@angular/core';
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
    public dialogRef: MatDialogRef<EducationAddComponent>
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
