import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectControlComponent } from './project-control.component';

describe('ProjectControlComponent', () => {
  let component: ProjectControlComponent;
  let fixture: ComponentFixture<ProjectControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
