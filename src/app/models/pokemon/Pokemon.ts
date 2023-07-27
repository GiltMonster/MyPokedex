import { Ability } from "./Abilitie";
import { Form } from "./Form";
import { Game_indices } from "./Game_indice";
import { Sprites } from "./Sprites";
import { Stats } from "./Stats";
import { Type } from "./Type";
import { Move } from "./move/Move";

export class Pokemon {
  abilities: Array<Ability> = [];
  base_experience: number = 0;
  forms?: Array<Form>;
  game_indices?: Array<Game_indices>;
  height: number = 0;
  held_items?: any;
  id: number = 1;
  is_default: boolean = false;
  location_area_encounters?: string = '';
  moves?: Array<Move>;
  name: string = 'bulbasaur';
  order?: number = 0;
  past_types?: any;
  species?: {
    name: string,
    url: string
  };
  sprites?: Sprites;
  stats?: Array<Stats>;
  types?: Array<Type>
  weight?: number = 0;
};
