import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      nombreInstituto: [''],
      titulo: [''],
      descripcion: [''],
      en_progreso: []
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();

    if(!this.form.valid) {
      this.form.markAllAsTouched();
    }

    this.educacionService.saveEducation(this.form.value).subscribe();
    this.dialogRef.close();
    location.reload();
  }

  onNoClick(){
    this.dialogRef.close();
  }
}
