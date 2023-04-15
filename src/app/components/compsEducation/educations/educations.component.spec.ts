import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationsComponent } from './educations.component';
import { HttpClientModule } from '@angular/common/http';

describe('EducationsComponent', () => {
  let component: EducationsComponent;
  let fixture: ComponentFixture<EducationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ EducationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
