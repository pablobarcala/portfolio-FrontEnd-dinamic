import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaItemComponent } from './experiencia-item.component';
import { AppModule } from 'src/app/app.module';

describe('ExperienciaItemComponent', () => {
  let component: ExperienciaItemComponent;
  let fixture: ComponentFixture<ExperienciaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppModule ],
      declarations: [ ExperienciaItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
