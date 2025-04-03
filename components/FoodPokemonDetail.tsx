import Link from 'next/link';
import { getDishByName } from '@/lib/api';

type Props = {
  name: string;
  image: string;
  types: string[];
  height: number;
  weight: number;
};

export function FoodPokemonDetail({ name, image, types, height, weight }: Props) {
  const dish: string | undefined = getDishByName(name);

  return (
    <main className="flex justify-center items-center px-4 py-8">
      <div className="bg-gradient-to-b from-red-500 via-black to-white text-white border-4 border-black rounded-xl shadow-lg p-6 max-w-md w-full space-y-6 text-center">
        <h1 className="font-retro text-2xl sm:text-3xl capitalize text-white">
          {name}
        </h1>

        {image && (
          <img
            src={image}
            alt={`Image of the pokemon called ${name}`}
            className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-md bg-white"
          />
        )}

        <div className="font-retro text-sm sm:text-base bg-black space-y-4 p-4 rounded">
          <p>
            <strong className="text-white">FAVORITE DISH:</strong>{' '}<br/>
            <span className="text-white font-medium italic">
              {dish ?? 'Everything'}
            </span>
          </p>
          <p>
            <strong className="text-white">WEIGHT:<br/></strong> {weight}kg — but don’t worry about it
          </p>
          <p>
            <strong className="text-white">TYPES:<br/></strong>{' '}
            {types.join(', ')}
          </p>
          <p>
            <strong className="text-white">HEIGHT:<br/></strong> {height} feet
          </p>
        </div>

        <Link href="/">
          <button className="font-retro text-sm sm:text-base px-4 py-2 bg-purple-600 border-2 border-black text-white rounded disabled:opacity-50 transition hover:scale-105 duration-300">
            Back to Pokebowldex
          </button>
        </Link>
      </div>
    </main>
  );
}
