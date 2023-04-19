import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaAddComponent } from './experiencia-add.component';

describe('ExperienciaAddComponent', () => {
  let component: ExperienciaAddComponent;
  let fixture: ComponentFixture<ExperienciaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
