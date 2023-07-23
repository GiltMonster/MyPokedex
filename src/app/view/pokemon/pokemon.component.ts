import { Component, NgZone, OnInit } from '@angular/core';
import { Subscription, catchError, shareReplay, throwError } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon/Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';
import { Type } from 'src/app/models/pokemon/Type';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {

  idPokemon = 1;
  pokemon?: Pokemon;
  loaded = false;
  disabled: boolean = true;
  tipo: any;

  constructor(private pokeService: PokemonService) { }

  ngOnInit(): void {
    this.carregarPokemon();
    this.idPokemon = 1;

  }



  carregarPokemon(): void {
    try {
      this.pokeService.getPokemon(this.idPokemon).pipe(
        catchError(err => {
          console.log("caiu no erro do observable...", err);
          shareReplay()
          return throwError(() => err);
        })
      ).subscribe(res => {
        this.pokemon = res;
        this.tipo = res?.types;

        this.loaded = true;
        console.log(this.pokemon);
      })

    } catch (error) {

    }
  }

  goOne() {
    this.idPokemon++;
    this.loaded = false;
    this.disabled = false;
    this.carregarPokemon();

  }

  backOne() {
    if (this.idPokemon === 1) {
      this.disabled = true;
    } else{
      this.idPokemon--;
      this.loaded = false;
      this.carregarPokemon();
    }
  }

}
