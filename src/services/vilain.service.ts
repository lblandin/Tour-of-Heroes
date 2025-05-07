import { inject, Injectable } from '@angular/core';
import { Vilain } from '../interface/vilain';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VilainService {

    private http = inject(HttpClient);
    private apiUrl = environment.apiUrl + '/api/Vilains';

    getVilains(): Observable<Vilain[]> {
      return this.http.get<Vilain[]>(this.apiUrl);
    }
  
    getVilain(id: number): Observable<Vilain> {
      return this.http.get<Vilain>(this.apiUrl + '/' + id);
    }
}
