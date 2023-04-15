import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfComponent } from './delete-conf.component';
import { AppModule } from 'src/app/app.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('DeleteConfComponent', () => {
  let component: DeleteConfComponent;
  let fixture: ComponentFixture<DeleteConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppModule ],
      declarations: [ DeleteConfComponent ],
      providers: [ 
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
