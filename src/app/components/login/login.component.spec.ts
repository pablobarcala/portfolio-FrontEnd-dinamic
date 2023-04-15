import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormBuilder } from '@angular/forms';
import { AppModule } from 'src/app/app.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ AppModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sould detect form is valid', () => {
    component.form.controls['nombreUsuario'].setValue('admin');
    component.form.controls['password'].setValue('admin');
    expect(component.form.valid).toBeTruthy();
  })
});
