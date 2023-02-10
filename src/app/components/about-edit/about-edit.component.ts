import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Persona } from 'src/app/interfaces/Persona';

@Component({
  selector: 'app-about-edit',
  templateUrl: './about-edit.component.html',
  styleUrls: ['./about-edit.component.css']
})
export class AboutEditComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AboutEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {

    // FORM BUILDER
    this.form = formBuilder.group({
      id: [data.id],
      fullname: [data.name, [Validators.required]],
      titulo: [data.personaTitle, [Validators.required]],
      description: [data.description, [Validators.required]]
    });
  }

  onSubmit() {
    if(!this.form.valid){
      this.form.markAllAsTouched()
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
