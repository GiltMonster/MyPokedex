import { Ability } from "./Abilitie";
import { Form } from "./Form";
import { Game_indices } from "./Game_indice";
import { Sprites } from "./Sprites";
import { Stats } from "./Stats";
import { Type } from "./Type";
import { Move } from "./move/Move";

export class Pokemon {
  abilities?: Array<Ability>;
  base_experience?: number;
  forms?: Array<Form>;
  game_indices?: Array<Game_indices>;
  height?: number;
  held_items?: any;
  id?: number;
  is_default?: Boolean;
  location_area_encounters?: string;
  moves?: Array<Move>;
  name?: string;
  order?: number;
  past_types?: any;
  species?: {
    name: string,
    url: string
  };
  sprites?: Sprites;
  stats?: Array<Stats>;
  types?: Array<Type>
  weight?: number
};
