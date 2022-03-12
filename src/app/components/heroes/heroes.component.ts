import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/mock-data/mock-heroes';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = HEROES;


  constructor() { }

  ngOnInit(): void {
  }

}
