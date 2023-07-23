import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(id: number): Observable<Pokemon>{
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
    return this.http.get<Pokemon>(`${BASE_URL}/${id}`);
  }

}
