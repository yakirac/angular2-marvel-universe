import { Component, Input, OnInit } from '@angular/core';

import { HeroService } from './hero.service';

import { Hero } from './hero';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['hero.component.css']
})

export class HeroComponent implements OnInit {

	@Input() hero: Hero;
	@Input() showHModal: Function;
	showHero: boolean = false;
	showHolder: boolean = true;

	constructor(
		private heroService: HeroService
	) { }

	ngOnInit(): void {
		
	}

	updateImages(): void {
		this.showHero = !this.showHero;
		this.showHolder = !this.showHolder;
	}

	showHeroModal(): void {
		this.showHModal(this.hero);
	}
}
