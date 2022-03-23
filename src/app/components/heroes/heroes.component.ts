import { Component, OnInit } from '@angular/core';
//import { HEROESMOCKDATA } from 'src/app/mock-data/mock-heroes';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  //variabili che passo alla view
  heroes: Hero[] = [];  //sto istanziando un array di oggetti con..
  selectedHero?: Hero  //il ? dopo il nome della variabile mi dice che qll variabile può essere nullabile;


  constructor(private heroService: HeroService) { } 
  

  ngOnInit(): void { //un metodo che viene fatto appena istanziato il component
    this.getHeroes(); //mi riempe l'array heroes
  }

  onSelect(pippo: Hero){
    this.selectedHero = pippo; //pippo mi arriverà dal frontend dal ciclo col *ngFor
    //me lo immagazzino dentro this.selectedHero per poter avere una variabile che
    //sia valida (e quindi utilizzabile) fuori dall scope della funzione
  }

  getHeroes() : void {
    //this.heroes = this.heroService.getHeroes();        //this.heroes -> si rifà alla mia variabile //this.heroService -> si rifà a cio che ho passato nel costruttore 
    this.heroService.getHeroes().subscribe(data => {
      this.heroes = data
    });
  }

}
