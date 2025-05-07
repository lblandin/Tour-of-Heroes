import { Injectable } from '@angular/core';
import { Vilain } from '../interface/vilain';
import { Observable, of } from 'rxjs';
import { VILAINS } from '../mock/mock-vilains';

@Injectable({
  providedIn: 'root'
})
export class VilainService {

  constructor() { }

    getVilains(): Observable<Vilain[]> {
      return of(VILAINS);
    }
  
    getVilain(id: number): Observable<Vilain> {
      // For now, assume that a hero with the specified `id` always exists.
      // Error handling will be added in the next step of the tutorial.
      const vilain = VILAINS.find(v => v.id === id)!;
      return of(vilain);
    }
}
