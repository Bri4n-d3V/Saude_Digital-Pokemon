import { IPokemon } from "./IPokemon";

export interface IPkmnDetails extends IPokemon {
  weight: number;
  height: number;
  ability1: string;
  ability2: string;
  gameIndices: object[];
}