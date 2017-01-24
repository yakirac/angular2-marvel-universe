import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } 	  from 'rxjs';
import { Hero }           from './hero';
import { MarvelHero }     from './marvel-hero';

@Injectable()
export class HeroModalService {
  
  private heroUrl = '/api/a2/hero';

  constructor(private http: Http) {}

  private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
  }

  getHero(id: Number): Promise<MarvelHero> {
  	const url = `${this.heroUrl}/${id}`;
    return this.http.get(url)
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);

    //return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }
}
