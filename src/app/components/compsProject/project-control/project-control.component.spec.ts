import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectControlComponent } from './project-control.component';
import { AppModule } from 'src/app/app.module';

describe('ProjectControlComponent', () => {
  let component: ProjectControlComponent;
  let fixture: ComponentFixture<ProjectControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppModule ],
      declarations: [ ProjectControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
