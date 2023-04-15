import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationAddComponent } from './education-add.component';
import { AppModule } from 'src/app/app.module';
import { MatDialogRef } from '@angular/material/dialog';

describe('EducationAddComponent', () => {
  let component: EducationAddComponent;
  let fixture: ComponentFixture<EducationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppModule ],
      declarations: [ EducationAddComponent ],
      providers: [ { provide: MatDialogRef, useValue: {} } ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
