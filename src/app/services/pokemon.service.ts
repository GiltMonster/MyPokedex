import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(id: number): Observable<Pokemon>{
    return this.http.get<Pokemon>(`${BASE_URL}/${id}`);
  }

}
