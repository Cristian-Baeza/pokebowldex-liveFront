import { foodPokemon } from '@/data/foodPokemon';

const BASE_URL: string = 'https://pokeapi.co/api/v2/pokemon';

export function getDishByName(name: string): string | undefined {
  const match = foodPokemon.find(
    (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
  );
  return match?.dish;
}

export async function fetchFoodPokemonList() {
  try {
    const promises = foodPokemon.map(async ({ name }) => {
      const response = await fetch(`${BASE_URL}/${name.toLowerCase()}`);
      const data = await response.json();

      return {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
      };
    });

    return await Promise.all(promises);
  } catch (error) {
    console.error('Failed to fetch food Pokémon list:', error);
    return []; // return empty array on error
  }
}


export async function fetchPokemonByNameOrId(nameOrId: string) {
  try {
    const response = await fetch(`${BASE_URL}/${nameOrId.toLowerCase()}`);
    if (!response.ok) return null;

    const data = await response.json();
    return {
      id: data.id,
      name: data.name,
      types: data.types.map((t: any) => t.type.name),
      image: data.sprites.front_default,
      height: data.height,
      weight: data.weight,
    };
  } catch (error) {
    console.error(`Failed to fetch Pokémon "${nameOrId}":`, error);
    return null;
  }
}
