import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationControlComponent } from './education-control.component';
import { AppModule } from 'src/app/app.module';

describe('EducationControlComponent', () => {
  let component: EducationControlComponent;
  let fixture: ComponentFixture<EducationControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppModule ],
      declarations: [ EducationControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
