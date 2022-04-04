import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROESMOCKDATA } from '../mock-data/mock-heroes';
import { Hero } from '../models/hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService //inietto la classe "MessageService" e la immagazzino dentro la variabile messageService
  ) { }

  //funzione che poi potrò richiamare dal controller 
  getHeroes(): Observable<Hero[]> { //
    //return this.http.get('url-con-i-dati)  -> qst se avro una url per un API
    const HEROES = of(HEROESMOCKDATA);
    this.messageService.add("Heroservice: fetched heroes");
    return HEROES;
  }

  getHero(selectedId: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROESMOCKDATA.find( h => h.id === selectedId)!;
    this.messageService.add(`HeroService: fetched hero id=${selectedId}`);
    return of(hero);
  }

}
