import { Component, OnInit } from '@angular/core';
import { PokeList } from 'src/app/models/pokeList/Pokelist';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss'],
})
export class ListPokemonComponent implements OnInit {

  pokeList?: PokeList;
  loaded = false;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    this.pokemonService.getListPokemon().subscribe((res) => {
      this.pokeList = res;
      this.loaded = true;
      console.log(this.pokeList);
    })
  }

}
