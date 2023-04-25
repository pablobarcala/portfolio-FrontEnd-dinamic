import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaEditComponent } from './tecnologia-edit.component';

describe('TecnologiaEditComponent', () => {
  let component: TecnologiaEditComponent;
  let fixture: ComponentFixture<TecnologiaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologiaEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
