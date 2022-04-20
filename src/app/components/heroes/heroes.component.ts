import { Component, OnInit } from '@angular/core';
//import { HEROESMOCKDATA } from 'src/app/mock-data/mock-heroes';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  //variabili che passo alla view
  heroes: Hero[] = [];  //sto istanziando un array di oggetti con..
//selectedHero?: Hero  


  constructor(
    private heroService: HeroService,
    private messageService: MessageService
    ) { } 
  

  ngOnInit(): void { 
    console.log("HeroesComponent ngOnInit()");//x capire quando messo/inizializzato componente nella view
    this.getHeroes(); //mi riempe l'array heroes
  }


  getHeroes() : void {
    //this.heroes = this.heroService.getHeroes();        //this.heroes -> si rifà alla mia variabile //this.heroService -> si rifà a cio che ho passato nel costruttore 
    this.heroService.getHeroes().subscribe(data => {
      this.heroes = data
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero.id).subscribe(()=> { //lo elimino dal db, se cancellazione effetutata con successo
      this.heroes = this.heroes.filter(h => h !== hero); //..lo elimino anche dalla lista mia "heroes"
    }); 
  }


  ngOnDestroy(): void {
    console.log("HeroesComponent ngOnDestroy()");//x capire quando tolto componente dalla view
  }

}
