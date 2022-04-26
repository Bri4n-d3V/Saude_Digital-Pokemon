import { IPkmnDetails } from "../interfaces/IPkmnDetails";
import { IPokemon } from "../interfaces/IPokemon";

export async function fetchPkmn(idOrName: number | string):Promise<IPokemon  | IPkmnDetails  | undefined> {
  try {
    const endpoint = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);

    const resolve = await endpoint.json();
    const name = resolve.name;
    const spriteFront = resolve.sprites.front_default;
    const type1 = resolve.types[0].type.name;
    let type2 = type1;
    if (resolve.types[1]) type2 = resolve.types[1].type.name;
    const weight = resolve.weight;
    const height = resolve.height;
    const ability1 = resolve.abilities[0].ability.name;
    let ability2 = ability1;
    if (resolve.abilities[1]) ability2 = resolve.abilities[1].ability.name;;
    const gameIndices = resolve.game_indices; 


    return {
      name,
      spriteFront,
      type1,
      type2,
      weight,
      height,
      ability1,
      ability2,
      gameIndices, 
    }

  } catch (error) {
    console.log(error);
  };
};