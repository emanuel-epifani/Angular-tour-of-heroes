import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/models/hero';
import { Location } from '@angular/common';
import { HeroService } from 'src/app/services/hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero() : void {
    //la linea successiva prende l'id dalla url in cui sono
    const id = Number(this.route.snapshot.paramMap.get('id')); //estraggo la stringa con il numero dell'id dall'url e me lo converto in numero
    //console.log('id=', id);
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }


  

  goBack(): void {
    this.location.back(); 
  }

}
