import { Component, OnInit } from '@angular/core';
import { HEROESMOCKDATA } from 'src/app/mock-data/mock-heroes';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  //variabili che passo alla view
  heroes: Hero[] = HEROESMOCKDATA;  //sto istanziando un array di oggetti con..
  //nomeVariabile: tipo = valore;
  selectedHero?: Hero  //il ? dopo il nome della variabile mi dice che qll variabile può essere nullabile;
  //END: che passo alla view

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(pippo: Hero){
    this.selectedHero = pippo; //pippo mi arriverà dal frontend dal ciclo col *ngFor
    //me lo immagazzino dentro this.selectedHero per poter avere una variabile che
    //sia valida (e quindi utilizzabile) fuori dall scope della funzione
  }

}
