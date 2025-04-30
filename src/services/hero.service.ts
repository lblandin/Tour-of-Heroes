import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../interface/hero';
import { HEROES } from '../app/mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    return of(hero);
  }
}