import Image from 'next/image';

export function Header() {
  return (
    <header className="p-4 flex items-center justify-center gap-3 sm:gap-4 flex-wrap text-center">
      <Image
        src="/poke-bowl.png"
        alt="Poké Bowl"
        width={60}
        height={60}
        className="rounded-full sm:w-20 sm:h-20"
      />
      <h1 className="font-retro text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
        PokeBowlDex
      </h1>
    </header>
  );
}
