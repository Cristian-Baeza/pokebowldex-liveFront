import Link from 'next/link';

type Props = {
  name: string;
  image: string;
};

export function FoodPokemonCard({ name, image }: Props) {
  return (
    <li className="w-56 h-56 sm:w-64 sm:h-64 bg-gradient-to-b from-red-500 via-black to-white rounded-full border-4 border-black shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer flex flex-col items-center justify-center text-center capitalize overflow-hidden mx-auto">
      <Link href={`/pokemon/${name}`}>
        <img
          src={image}
          alt={`Image of the pokemon called ${name}`}
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-sm"
        />
        <h2 className="font-retro font-semibold text-sm mt-6 sm:mt-8 text-black">{name}</h2>
      </Link>
    </li>
  );
}
