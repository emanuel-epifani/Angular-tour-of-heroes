import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from '../components/heroes/heroes.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { HeroDetailComponent } from '../components/hero-detail/hero-detail.component';

const routes: Routes = [  //elenco rotte/url a cui puntare
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },//cosi alla rotta con l'url vuota '', lui ti manda automaticamente (cioè fa un redirect) alla pag 4200/dashboard
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
