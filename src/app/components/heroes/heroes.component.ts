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
  selectedHero?: Hero  //il ? dopo il nome della variabile mi dice che qll variabile può essere nullabile;


  constructor(
    private heroService: HeroService,
    private messageService: MessageService
    ) { } 
  

  ngOnInit(): void { //un metodo che viene fatto appena istanziato il component
    this.getHeroes(); //mi riempe l'array heroes
  }

  onSelect(pippo: Hero){
    this.selectedHero = pippo; //pippo mi arriverà dal frontend dal ciclo col *ngFor
    this.messageService.add('HeroesComponent: Selected hero id=' + pippo.id );
  }

  getHeroes() : void {
    //this.heroes = this.heroService.getHeroes();        //this.heroes -> si rifà alla mia variabile //this.heroService -> si rifà a cio che ho passato nel costruttore 
    this.heroService.getHeroes().subscribe(data => {
      this.heroes = data
    });
  }

}
