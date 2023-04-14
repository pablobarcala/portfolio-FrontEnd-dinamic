import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Proyecto } from 'src/app/interfaces/Proyecto';
import { ProjectService } from 'src/app/services/project.service';
import { DeleteConfComponent } from '../../delete-conf/delete-conf.component';

@Component({
  selector: 'app-project-control',
  templateUrl: './project-control.component.html',
  styleUrls: ['./project-control.component.css']
})
export class ProjectControlComponent implements OnInit{
  projects: Proyecto[] = [];

  constructor(private projectService: ProjectService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.projectService.getProject().subscribe(data => this.projects = data);
  }

  onDelete(project: Proyecto): void {
    const dialogRef = this.dialog.open(DeleteConfComponent, {
      data: {
        name: project.nombreProyecto
      }
    })

    dialogRef.afterClosed().subscribe(response => {
      if(response){
        this.projectService.deleteProject(project).subscribe(() => {
          this.projects = this.projects.filter(t => t.id !== project.id);
        });
      }
    })
  }
}
