import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaControlComponent } from './tecnologia-control.component';

describe('TecnologiaControlComponent', () => {
  let component: TecnologiaControlComponent;
  let fixture: ComponentFixture<TecnologiaControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologiaControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiaControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
