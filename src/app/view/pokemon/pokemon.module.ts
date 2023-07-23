import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PokemonComponent } from './pokemon.component';



@NgModule({
  declarations: [PokemonComponent],
  exports: [PokemonComponent],
  imports: [ CommonModule, FormsModule, IonicModule]
})
export class PokemonModule { }
