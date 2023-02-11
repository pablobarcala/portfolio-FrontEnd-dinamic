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
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { ExperienciaItemComponent } from './components/experiencia-item/experiencia-item.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { TecnologiaItemComponent } from './components/tecnologia-item/tecnologia-item.component';
import { AboutEditComponent } from './components/about-edit/about-edit.component';
import { EducationControlComponent } from './components/compsEducation/education-control/education-control.component';
import { EducationEditComponent } from './components/compsEducation/education-edit/education-edit.component';

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
    EducationEditComponent
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
