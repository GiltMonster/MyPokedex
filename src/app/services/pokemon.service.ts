import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon/Pokemon';
import { PokeList } from '../models/pokeList/Pokelist';
import { PokemonAbility } from '../models/ability/PokemonAbility';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  imgPokemon : Array<string> =[];

  constructor(private http: HttpClient) { }

  getPokemon(id: number): Observable<Pokemon>{
    const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return this.http.get<Pokemon>(BASE_URL);
  }

  getPokemonWithName(name: string): Observable<Pokemon>{
    const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${name}`;
    return this.http.get<Pokemon>(BASE_URL);
  }

  getListPokemon(): Observable<PokeList>{
    const LIST_URL = "https://pokeapi.co/api/v2/pokemon";
    return this.http.get<PokeList>(LIST_URL);
  }

  getMorePokemon(url: string): Observable<PokeList>{
    return this.http.get<PokeList>(url);
  }

  getAbilities(nameAbility: string ): Observable<PokemonAbility>{
    const ABILITY_URL = `https://pokeapi.co/api/v2/ability/${nameAbility}/`;
    return this.http.get<PokemonAbility>(ABILITY_URL);
  }
}
