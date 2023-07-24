import { Result } from "./Result";

export class PokeList{
  count: number = 1281;
  next: string = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";
  previous: string = "";
  results?: Array<Result>;
}
