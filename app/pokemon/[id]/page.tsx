import { fetchPokemonByNameOrId } from '@/lib/api';
import { FoodPokemonDetail } from '@/components/FoodPokemonDetail';

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props) {
  const pokemon = await fetchPokemonByNameOrId(params.id);

  if (!pokemon) return <p>Pokémon not found.</p>;

  return (
    <FoodPokemonDetail
      name={pokemon.name}
      image={pokemon.image}
      types={pokemon.types}
      height={pokemon.height}
      weight={pokemon.weight}
    />
  );
}
