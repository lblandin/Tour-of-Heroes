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
    return this.http.get<Hero>(this.apiUrl + '/' + id);
  }
}