import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
