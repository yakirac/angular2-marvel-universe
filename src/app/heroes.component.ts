import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';

import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit{ 

	heroes: Hero[];
	selectedHero: Hero;
	showModal: boolean = false;

	constructor(
		private router: Router,
		private heroService: HeroService
	) { }
	
	ngOnInit(): void {
		this.getHeroes();
		
		this.showHeroModal = this.showHeroModal.bind(this);
		this.closeHeroModal = this.closeHeroModal.bind(this);
	}

	getHeroes(): void {
	  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	showHeroModal(hero: Hero): void {
		this.showModal = true;
		this.selectedHero = hero;
	}

	closeHeroModal(): void {
		this.showModal = false;
		this.selectedHero = new Hero();
	}
}
