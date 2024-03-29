import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { MaterialModule } from './modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

// FIREBASE 
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

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
import { InterceptorService } from './services/interceptor.service';
import { EducationAddComponent } from './components/compsEducation/education-add/education-add.component';
import { AboutAddComponent } from './components/about-add/about-add.component';
import { ExperienciaAddComponent } from './components/compsExperiencia/experiencia-add/experiencia-add.component';
import { ExperienciaEditComponent } from './components/compsExperiencia/experiencia-edit/experiencia-edit.component';
import { FooterComponent } from './components/footer/footer.component';
import { TecnologiaControlComponent } from './components/compsTecnologia/tecnologia-control/tecnologia-control.component';
import { ProjectAddComponent } from './components/compsProject/project-add/project-add.component';
import { ProjectEditComponent } from './components/compsProject/project-edit/project-edit.component';
import { TecnologiaAddComponent } from './components/compsTecnologia/tecnologia-add/tecnologia-add.component';
import { TecnologiaEditComponent } from './components/compsTecnologia/tecnologia-edit/tecnologia-edit.component';
import { LogoutConfComponent } from './components/logout-conf/logout-conf.component';

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
    ProjectControlComponent,
    EducationAddComponent,
    AboutAddComponent,
    ExperienciaAddComponent,
    ExperienciaEditComponent,
    FooterComponent,
    TecnologiaControlComponent,
    ProjectAddComponent,
    ProjectEditComponent,
    TecnologiaAddComponent,
    TecnologiaEditComponent,
    LogoutConfComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
