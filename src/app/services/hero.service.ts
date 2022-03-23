import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROESMOCKDATA } from '../mock-data/mock-heroes';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  //funzione che poi potrò richiamare dal controller 
  getHeroes(): Observable<Hero[]> { //
    //return this.http.get('url-con-i-dati)  -> qst se avro una url per un API
    return of(HEROESMOCKDATA);
  }
}
