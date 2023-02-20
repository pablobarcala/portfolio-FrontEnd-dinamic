import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-conf',
  templateUrl: './delete-conf.component.html',
  styleUrls: ['./delete-conf.component.css']
})
export class DeleteConfComponent {
  constructor(
    public matDialogRef: MatDialogRef<DeleteConfComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  onNoClick(): void {
    this.matDialogRef.close();
  }
}
