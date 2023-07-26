import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, shareReplay, throwError } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon/Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

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
  pokeName: string = '';

  constructor(
    private pokeService: PokemonService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.pokeName = this.route.snapshot.params['namePokemon'];
    this.carregaPokemomPelaRota();

  }

  carregaPokemomPelaRota(){
    this.pokeService.getPokemonWithName(this.pokeName).subscribe((res)=>{
      this.pokemon = res;
      this.tipo = res?.types;
      this.idPokemon = res.id;
      this.loaded = true;
    });
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
        this.idPokemon = res.id;
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
