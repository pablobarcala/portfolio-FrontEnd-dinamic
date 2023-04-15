import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaControlComponent } from './experiencia-control.component';
import { AppModule } from 'src/app/app.module';

describe('ExperienciaControlComponent', () => {
  let component: ExperienciaControlComponent;
  let fixture: ComponentFixture<ExperienciaControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppModule ],
      declarations: [ ExperienciaControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
