import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon/Pokemon';
import { PokeList } from '../models/pokeList/Pokelist';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  imgPokemon : Array<string> =[];

  constructor(private http: HttpClient) { }

  getPokemon(id: number): Observable<Pokemon>{
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
    return this.http.get<Pokemon>(`${BASE_URL}/${id}`);
  }

  getListPokemon(): Observable<PokeList>{
    const LIST_URL = "https://pokeapi.co/api/v2/pokemon";
    return this.http.get<PokeList>(LIST_URL);
  }

}
