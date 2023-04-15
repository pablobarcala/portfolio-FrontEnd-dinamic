import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciasComponent } from './experiencias.component';
import { AppModule } from 'src/app/app.module';

describe('ExperienciasComponent', () => {
  let component: ExperienciasComponent;
  let fixture: ComponentFixture<ExperienciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppModule ],
      declarations: [ ExperienciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
