import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemComponent } from './project-item.component';
import { MaterialModule } from 'src/app/modules/material/material.module';

describe('ProjectItemComponent', () => {
  let component: ProjectItemComponent;
  let fixture: ComponentFixture<ProjectItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectItemComponent ],
      imports: [ MaterialModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
