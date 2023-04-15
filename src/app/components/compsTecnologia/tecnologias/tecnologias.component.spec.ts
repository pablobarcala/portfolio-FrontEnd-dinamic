import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiasComponent } from './tecnologias.component';
import { AppModule } from 'src/app/app.module';

describe('TecnologiasComponent', () => {
  let component: TecnologiasComponent;
  let fixture: ComponentFixture<TecnologiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppModule ],
      declarations: [ TecnologiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
