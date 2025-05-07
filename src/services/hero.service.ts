import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../interface/hero';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl + '/api/Heroes';

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl);
  }

  getHeroById(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    //const hero = HEROES.find((h: { id: number; }) => h.id === id)!;
    //return of(hero);

    return this.http.get<Hero>(this.apiUrl + '/' + id);
  }
}