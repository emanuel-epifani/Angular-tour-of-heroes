import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    console.log("DashboardComponent ngOnInit()");//x capire quando messo/inizializzato componente nella view
    this.getHeroes();
  }

  getHeroes():void {
    this.heroService.getHeroes().subscribe(data => {this.heroes = data.slice(1,5)});
  }

  ngOnDestroy(): void {
    console.log("DashboardComponent ngOnDestroy()");//x capire quando tolto componente dalla view
  }


}
