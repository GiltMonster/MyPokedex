import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ListPokemonComponent],
  exports: [ListPokemonComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class ListPokemonModule { }
