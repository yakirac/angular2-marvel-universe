import { Component, Input, OnInit, OnChanges, SimpleChange} from '@angular/core';

import { HeroModalService } from './hero-modal.service';

import { Hero } from './hero';
import { MarvelHero } from './marvel-hero';

@Component({
  selector: 'hero-modal',
  templateUrl: 'hero-modal.component.html',
  styleUrls: [ 'hero-modal.component.css' ],
  providers: [HeroModalService]
})

export class HeroModalComponent implements OnInit {
  
  //heroes: Observable<Hero[]>;
  
  //private searchTerms = new Subject<string>();
  @Input() hero: Hero;
  @Input() showm: boolean;
  @Input() closem: Function;
  marvelHero: MarvelHero;
  
  constructor(
    private heroModalService: HeroModalService
  ) {}
  
  ngOnChanges(changes: {[propKey: string]: SimpleChange}): void {
    //console.log('HeroModal changes: ', changes);
    if(this.hero && this.hero.id) {
      this.heroModalService.getHero(this.hero.id).then((hro) => {
        this.marvelHero = hro;
      });
    }
  }
  
  ngOnInit(): void {}

  close(): void {
    this.marvelHero = new MarvelHero();
    this.closem();
  }
}
