import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaAddComponent } from './tecnologia-add.component';

describe('TecnologiaAddComponent', () => {
  let component: TecnologiaAddComponent;
  let fixture: ComponentFixture<TecnologiaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologiaAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
