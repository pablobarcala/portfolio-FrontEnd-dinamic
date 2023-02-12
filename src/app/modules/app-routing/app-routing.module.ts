import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { EducationControlComponent } from 'src/app/components/compsEducation/education-control/education-control.component';
import { AuthGuardService } from 'src/app/services/auth.guard.service';
import { ExperienciaControlComponent } from 'src/app/components/compsExperiencia/experiencia-control/experiencia-control.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'education', component: EducationControlComponent, canActivate: [AuthGuardService]},
  {path: 'experiencia', component: ExperienciaControlComponent, canActivate: [AuthGuardService]}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
