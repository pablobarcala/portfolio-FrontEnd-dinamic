import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { MaterialModule } from './modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EducationsComponent } from './components/compsEducation/educations/educations.component';
import { EducationItemComponent } from './components/compsEducation/education-item/education-item.component';
import { ExperienciasComponent } from './components/compsExperiencia/experiencias/experiencias.component';
import { ExperienciaItemComponent } from './components/compsExperiencia/experiencia-item/experiencia-item.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { TecnologiasComponent } from './components/compsTecnologia/tecnologias/tecnologias.component';
import { TecnologiaItemComponent } from './components/compsTecnologia/tecnologia-item/tecnologia-item.component';
import { AboutEditComponent } from './components/about-edit/about-edit.component';
import { EducationControlComponent } from './components/compsEducation/education-control/education-control.component';
import { EducationEditComponent } from './components/compsEducation/education-edit/education-edit.component';
import { ExperienciaControlComponent } from './components/compsExperiencia/experiencia-control/experiencia-control.component';
import { DeleteConfComponent } from './components/delete-conf/delete-conf.component';
import { ProjectsComponent } from './components/compsProject/projects/projects.component';
import { ProjectItemComponent } from './components/compsProject/project-item/project-item.component';
import { ProjectControlComponent } from './components/compsProject/project-control/project-control.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EducationsComponent,
    EducationItemComponent,
    ExperienciasComponent,
    ExperienciaItemComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    TecnologiasComponent,
    TecnologiaItemComponent,
    AboutEditComponent,
    EducationControlComponent,
    EducationEditComponent,
    ExperienciaControlComponent,
    DeleteConfComponent,
    ProjectsComponent,
    ProjectItemComponent,
    ProjectControlComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
