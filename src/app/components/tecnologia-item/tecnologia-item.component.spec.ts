import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaItemComponent } from './tecnologia-item.component';

describe('TecnologiaItemComponent', () => {
  let component: TecnologiaItemComponent;
  let fixture: ComponentFixture<TecnologiaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
