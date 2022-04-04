import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from '../components/heroes/heroes.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },//cosi alla rotta con l'url vuota '', lui ti manda automaticamente (cioè fa un redirect) alla pag 4200/dashboard
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
