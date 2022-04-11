import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROESMOCKDATA } from '../mock-data/mock-heroes';
import { Hero } from '../models/hero';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private messageService: MessageService, //inietto la classe "MessageService" e la immagazzino dentro la variabile messageService
    private http: HttpClient
  ) { }

  //funzione che poi potrò richiamare dal controller 
  getHeroes(): Observable<Hero[]> { //
    return  this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes ')),
        catchError( error => { 
          console.error(error);

          this.log(`getHeroes failed: ${error.message}`);

          return of([]);
        })
      );

  }


  getHero(selectedId: number): Observable<Hero> {
    return this.http.get<Hero>(this.heroesUrl +'/'+ selectedId)
    .pipe(
      tap(_=> this.log(`fetched hero id = ${selectedId}`)),
      catchError(error => {
          console.error(error);

          this.log(`getHero id=${selectedId} failed:${error.status}:  ${error.body.error}`);

          return of();
      }),
    )
  }


/** PUT: update the hero on the server */
updateHero(hero: Hero): Observable<any> {
  return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${hero.id}`)),
    catchError(error => {
        console.error(error);

        this.log(`updateHero failed:${error.status}:  ${error.body.error}`);

        return of();
    })
    

  );
}
 


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }



  
}
