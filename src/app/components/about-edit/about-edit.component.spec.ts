import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEditComponent } from './about-edit.component';
import { AppModule } from 'src/app/app.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('AboutEditComponent', () => {
  let component: AboutEditComponent;
  let fixture: ComponentFixture<AboutEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppModule ],
      declarations: [ AboutEditComponent ],
      providers: [ 
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
