import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { MaterialModule } from './modules/material/material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EducationsComponent } from './components/educations/educations.component';
import { EducationItemComponent } from './components/education-item/education-item.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { ExperienciaItemComponent } from './components/experiencia-item/experiencia-item.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { TecnologiaItemComponent } from './components/tecnologia-item/tecnologia-item.component';

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
    TecnologiaItemComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
