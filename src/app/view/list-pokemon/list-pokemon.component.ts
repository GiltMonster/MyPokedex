import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/pokeList/Result';
import { PokemonService } from 'src/app/services/pokemon.service';
import { InfiniteScrollCustomEvent, NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss'],
})
export class ListPokemonComponent implements OnInit {

  pokeCout: number = 0;
  pokeList?: Array<Result> = [];
  url_pokeList: string = '';
  loaded = false;
  loadedMore = false;

  constructor(
    private navCtrl: NavController,
    private pokemonService: PokemonService
    ) { }

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    this.pokemonService.getListPokemon().subscribe((res) => {
      this.pokeCout = res.count;
      this.pokeList = res.results;
      this.url_pokeList =  res.next;
      this.loaded = true;
      console.log(this.pokeList);
      console.log(this.url_pokeList);

    })
  }

  more(url_list: string) {
    this.loadedMore = true;
    this.pokemonService.getMorePokemon(url_list).subscribe((res) => {
      this.url_pokeList = res.next;
      // Certifica que res.results é um array antes de adicionar.
      if (Array.isArray(res.results)) {
        this.pokeList?.push(...res.results); // Lucas do futuro lembre-se, a gente utilizou o spread operator para adicionar os elementos individualmente no novo array.
      }
      this.loadedMore = false;
      console.log(this.pokeList);
  });
  }

  openPokemon(namePokemon: string): void {
    this.navCtrl.navigateForward(["/tabs/tab2/", namePokemon]);
  }


  onIonInfinite(ev:any ) {
    this.more(this.url_pokeList);
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}


