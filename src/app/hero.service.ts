import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
import { MarvelHero } from './marvel-hero';
//import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  
  private heroesUrl = '/a2/api/heroes';
  private headers = new Headers({'Content-Type': 'application/json'});
  
  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
  }

  getHeroes(): Promise<Hero[]> {
  	return this.http.get(this.heroesUrl)
  			   .toPromise()
  			   .then(response => response.json().data as Hero[])
  			   .catch(this.handleError);
	 //return Promise.resolve(HEROES);
  }

}
