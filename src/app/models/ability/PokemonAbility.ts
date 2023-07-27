import { Effect_changes } from "./subTypes/Effect_ change";
import { Effect_entries } from "./subTypes/Effect_entries";
import { flavor_text_entries } from "./subTypes/Flavor_text_entries";
import { Generation } from "./subTypes/Generation";
import { Names } from "./subTypes/Names";
import { Pokemon } from "./subTypes/Pokemon";

export class PokemonAbility {
  effect_changes: Array<Effect_changes> = [];
  effect_entries: Array<Effect_entries> = [];
  flavor_text_entries?: Array<flavor_text_entries>
  generation?: Generation;
  id: number = 0;
  is_main_series: boolean = false;
  name: string = "";
  names: Array<Names> = [];
  pokemon: Array<Pokemon> = [];

}
