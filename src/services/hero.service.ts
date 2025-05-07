import { inject, Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../interface/hero';
<<<<<<< Updated upstream
import { HEROES } from '../app/mock-heroes';
=======
import { HEROES } from '../mock/mock-heroes';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';
>>>>>>> Stashed changes

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl + '/api/Heroes';

  getHeroes(): Observable<any> {
    return this.http.get(this.apiUrl);
    //return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    return of(hero);
  }
}