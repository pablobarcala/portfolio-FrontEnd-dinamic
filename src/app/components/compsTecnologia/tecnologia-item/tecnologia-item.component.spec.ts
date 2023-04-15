import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaItemComponent } from './tecnologia-item.component';
import { AppModule } from 'src/app/app.module';

describe('TecnologiaItemComponent', () => {
  let component: TecnologiaItemComponent;
  let fixture: ComponentFixture<TecnologiaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppModule ],
      declarations: [ TecnologiaItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
