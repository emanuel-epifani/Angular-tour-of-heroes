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

   /** GET:get an array of heroes by the server */
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

  /** GET: get a specific heroe by the server (passandogli l'id)*/
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

  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(error => {
        console.error(error)

        this.log(`addHero failed:${error.status}:  ${error.body.error}`);

        return of();
      })
    );
  }
 
  /** DELETE: delete the hero from the server */
  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(error => {
        console.error(error)

        this.log(`addHero failed:${error.status}:  ${error.body.error}`);

        return of();
      })
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
      catchError(error => {
        console.error(error)

        this.log(`addHero failed:${error.status}:  ${error.body.error}`);

        return of();
      })
    );
  }



  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}
